import json
from pathlib import Path
import subprocess
import sys
import frontmatter
import shutil
from urllib.parse import urlparse
from generated_components import generate_tag_list

from markdown_config import *


def get_tags(id: str, file: frontmatter.Post):
    tags = set(file.get("tags", []))
    for reg, tag in AUTO_TAGS.items():
        if reg.match(id):
            tags.add(tag)
    return list(filter(lambda t: t in tags, TAGS_COLOR))

def get_import_line(components: list[str]):
    line = "\n<script>"
    for c in components:
        line += f"import {c[c.rfind('/') + 1:]} from \"$lib/components/{c}.svelte\";"
    line += "</script>"
    return line


def get_last_modification_date(path):
    GIT_DATE_COMMAND[-1] = path
    r = subprocess.run(GIT_DATE_COMMAND, capture_output=True, text=True).stdout.strip()
    return r

def remove_loc_prefix(path: str):
    # assert path.find('/') >= 0
    return path[path.find('/') + 1:]

def log(message, label="OK"):
    color = ""
    if label == "ERROR":
        print(f"\033[31m[MDC] {label:^10} {message}\033[;m:")
        return
    elif label == "OK":
        color = "\033[32m"
    elif label == "SKIPPED":
        color = "\033[36m"
    elif label == "WARNING":
        color = "\033[33m"
    print(f"[MDC] {color}{label:^10}\033[;m: {message}")

def path_to_id(path: Path):
    return path.with_suffix('').as_posix()

def load_files():
    pages: dict[str, dict[str, str]] = {}
    path_to_id: dict[str, dict[str, str]] = {}
    tags: dict[str, list[str]] = {}
    all_ids = set()

    def _add_file(locale: str, file: Path, current_id: str | None = ""):
        if not file.is_file():
            print(file, "should exists.")
            return ""

        markdown_file = frontmatter.load(file)
        file_id = (
            ""
            if current_id is None
            else current_id
            + (
                file.stem
                if locale == REFERENCE_LOCALE
                else markdown_file.get("id", None) or file.stem
            )
        )

        if file_id not in pages:
            pages[file_id] = {}

        relative_filepath = file.relative_to(INPUT_PATH)
        pages[file_id][locale] = relative_filepath.with_suffix('').as_posix()

        if locale == REFERENCE_LOCALE:
            current_tags = get_tags(file_id, markdown_file)

            for t in current_tags:
                if t not in tags:
                    tags[t] = []
                tags[t].append(file_id)
        elif "tags" in markdown_file:
            log(f"The tags filed is reserved to the reference locale: '{REFERENCE_LOCALE}'. It cannot be used in '{locale}'. It has been ignored.", "WARNING")

        if current_id is None:
            path_to_id[locale][""] = file_id
        else:
            path_to_id[locale][
                file.relative_to(INPUT_PATH / locale).with_suffix("").as_posix()
            ] = file_id
        all_ids.add(file_id)
        return file_id

    def _load_sub_files(locale: str, path: Path, current_id=""):
        for file in path.glob("*.md"):
            file_id = _add_file(locale, file, current_id)

            if (path / file.stem).is_dir():
                _load_sub_files(locale, path / file.stem, file_id + "/")

    for locale in LOCALES:
        path_to_id[locale] = {}
        _add_file(locale, INPUT_PATH / (locale + ".md"), None)
        _load_sub_files(
            locale,
            INPUT_PATH / locale,
        )

    return pages, path_to_id, all_ids, tags


def clean():
    for loc in LOCALES:
        shutil.rmtree(OUTPUT_PATH / loc, ignore_errors=True)
    shutil.rmtree(LOGO_OUTPUT_DIR, ignore_errors=True)
    log("Clean done.")

def run(doClean=False, prod=False):
    def _load_md_file(loc: str, path: Path):
        return frontmatter.load(path)

    if doClean or prod:
        clean()

    LOGO_OUTPUT_DIR.mkdir(exist_ok=True)


    pages, path_to_id, all_ids, tags = load_files()

    # Add fake empty files to complete "graph"
    for id in pages:
        files = pages[id]
        files_set = set(files)
        if files_set != LOCALES:
            missing = LOCALES - files_set
            log(f"{id} is missing the translations: {', '.join(missing)}", "WARNING")
            for loc in missing:
                files[loc] = get_fake_file(loc, id, pages)
                path_to_id[loc][remove_loc_prefix(files[loc])] = id

    skipped = set()
    tags_urls = {l: {} for l in LOCALES}

    # Writes Pages
    for id in pages:
        files = pages[id]

        ref_file_path = (INPUT_PATH / REFERENCE_LOCALE / id).with_suffix('.md')
        do_ref_exists = ref_file_path.exists()
        if do_ref_exists:
            ref_markdown_file = _load_md_file(REFERENCE_LOCALE, ref_file_path)
        else:
            ref_markdown_file = {}
            log(f'{id} is not translated in "{REFERENCE_LOCALE}"', "WARNING")

        ref_markdown_file["tags"] = get_tags(id, ref_markdown_file)
        metadata_ref_keys = METADATA_EXPORT & ref_markdown_file.keys()
        metadata_ref = {
            k: ref_markdown_file[k] for k in metadata_ref_keys
        }

        for loc in files:
            input_file = INPUT_PATH / (files[loc] + '.md')
            output_file = OUTPUT_PATH / files[loc] / "+page.md"
            output_file.parent.mkdir(parents=True, exist_ok=True)

            if input_file.exists() and loc != REFERENCE_LOCALE:
                markdown_file = _load_md_file(loc, input_file)
            elif loc == REFERENCE_LOCALE and do_ref_exists:
                markdown_file = ref_markdown_file
            else:
                markdown_file = {}
            if not prod:
                markdown_file["_"] = "FILE AUTOMATICALLY GENERATED, DO NOT EDIT"
            markdown_file["id"] = id
            markdown_file["edit_url"] = EDIT_URL.format(path=files[loc])
            markdown_file["last_modification"] = get_last_modification_date(input_file.as_posix())

            metadata = {k: markdown_file.get(k, metadata_ref.get(k, None)) for k in metadata_ref_keys | (METADATA_EXPORT & markdown_file.keys())}

            if "tag" in markdown_file:
                tags_urls[loc][markdown_file["tag"]] = files[loc]
            elif do_ref_exists and "tag" in ref_markdown_file:
                tags_urls[loc][ref_markdown_file["tag"]] = files[loc]

            if not isinstance(markdown_file, dict) and markdown_file.content.strip():
                missing_no_copy = set()
                if loc != REFERENCE_LOCALE and do_ref_exists:
                    for field in FIELDS_TO_COPY:
                        if field in ref_markdown_file and field not in markdown_file:
                            markdown_file[field] = ref_markdown_file[field]

                            if field in FIELDS_REQUIRED_NO_COPY:
                                missing_no_copy.add(field)

                for field in FIELDS_URLS_OPTIONAL:
                    if field in markdown_file:
                        markdown_file[field] = get_url_field_data(markdown_file[field], field)

                if "layout" not in markdown_file:
                    for reg, lay in AUTO_LAYOUT.items():
                        if reg.match(id):
                            markdown_file["layout"] = lay
                            break

                if "import" in markdown_file:
                    markdown_file.content += get_import_line(markdown_file['import'])
                    del markdown_file['import']

                if "tag" in markdown_file:
                    markdown_file["files"] = get_files_tagged(pages, loc, tags, markdown_file["tag"])


                missing_fields = (FIELDS_REQUIRED - markdown_file.keys()) | missing_no_copy
                if missing_fields:
                    log(
                        f"{INPUT_PATH / files[loc]}.md doesn't have the required field{'s' if len(missing_fields) != 1 else ''}: {', '.join(missing_fields)}",
                        "WARNING",
                    )

                frontmatter.dump(markdown_file, output_file)
            else:
                metadata['missing'] = True
                skipped.add(files[loc])
                log(files[loc], "SKIPPED")

            with open(output_file.with_name('metadata.json'), 'w') as fiw:
                json.dump(metadata, fiw)

    log(f"Done generating successfully {len(pages) * len(LOCALES) - len(skipped)} pages in {', '.join(LOCALES)}.")

    # Write Ids
    file = OUTPUT_PATH / "en" / "ids.json"
    file.parent.mkdir(parents=True, exist_ok=True)
    with open(file, "w") as fiw:
        json.dump(
            {
                id: {
                    loc: path + '!' if path in skipped else path
                    for loc, path in pages[id].items()
                }
                for id in all_ids
            },
            fiw,
        )


    for loc in LOCALES:
        if loc != REFERENCE_LOCALE:
            file = OUTPUT_PATH / loc / "ids.json"
            file.parent.mkdir(parents=True, exist_ok=True)
            pti = path_to_id[loc]
            with open(file, "w") as fiw:
                json.dump(pti, fiw)

    for tag in tags:
        if tag not in tags_urls[REFERENCE_LOCALE]:
            log(f"The tag '{tag}' is missing in the reference locale ({REFERENCE_LOCALE}).", "ERROR")

    # Just to be safe
    tags_ids = set(tags_urls[REFERENCE_LOCALE])
    for l in tags_urls:
        if l == REFERENCE_LOCALE:
            continue
        for t in tags_ids - set(tags_urls[l]):
            tags_urls[l][t] = tags_urls[REFERENCE_LOCALE][t]

    generate_tag_list(tags_urls)

    return tags_urls

def get_url_field_data(input_data, field):
    response = {}
    if field == 'alternatives':
        response['opensource'] = False

    if isinstance(input_data, str):
        url = urlparse(input_data)
        if url.scheme:
            response.update({
                "name": f"{url.netloc}{url.path}",
                "url": input_data,
            })
        elif (
            field in FIELDS_URL_MAPPER
            and input_data.lower() in FIELDS_URL_MAPPER[field]
        ):
            response.update({
                "name": input_data,
                "url": FIELDS_URL_MAPPER[field][input_data.lower()],
            })
        else:
            response.update({
                "name": input_data,
            })
    elif isinstance(input_data, dict):
        response.update(input_data)
        if "name" in input_data:
            if (
                "url" not in input_data
                and field in FIELDS_URL_MAPPER
                and input_data["name"].lower()
                in FIELDS_URL_MAPPER[field]
            ):
                response["url"] = FIELDS_URL_MAPPER[field][
                    input_data["name"].lower()
                ]
        elif "url" in input_data:
            url = urlparse(input_data['url'])
            response["name"] = f"{url.netloc}{url.path}"
    elif isinstance(input_data, list):
        return [get_url_field_data(i, field) for i in input_data]
    return response


def get_fake_file(locale: str, id: str, pages: dict[str, dict[str, Path]]):
    localise_path = id

    while localise_path not in pages or locale not in pages[localise_path]:
        last_sep = localise_path.rfind('/')
        if last_sep < 0:
            localise_path = ''
        else:
            localise_path = localise_path[:last_sep]

    id_path = id[len(localise_path) + 1:] if len(localise_path) > 0 else id
    return pages[localise_path][locale] + '/' + id_path


def get_files_tagged(pages, lang, tags, tag):
    return sorted(map(lambda f: pages[f][lang], tags[tag]))

if __name__ == '__main__':
    run('clean' in sys.argv, 'prod' in sys.argv)
