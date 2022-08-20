from dataclasses import dataclass
import json
from pathlib import Path
import frontmatter
import shutil
from urllib.parse import urlparse


REFERENCE_LOCALE = "en"
LOCALES = ["en", "fr"]

INPUT_PATH = Path("pages")
OUTPUT_PATH = Path("src") / "routes"

FIELDS_URLS_OPTIONAL = [
    "maintainer",
    "website",
    "license",
    "repository",
    "issue-tracker",
    "pull-request",
    "financial-support",
]
FIELDS_URL_MAPPER = {}
FIELDS_TO_COPY = ["title", "tags", "layout"] + FIELDS_URLS_OPTIONAL
FIELDS_REQUIRED = set(["title", "description"])


def log(message, label="OK"):
    print(f"{label:^10}: {message}")


def load_files():
    pages: dict[str, dict[str, Path]] = {}
    path_to_id: dict[str, dict[str, str]] = {}
    all_ids = set()

    def _load_sub_files(locale: str, path: Path, current_id=""):
        for file in path.glob("*.md"):
            markdown_file = frontmatter.load(file)
            file_id = current_id + (
                file.stem
                if locale == REFERENCE_LOCALE
                else markdown_file.get("id", None) or file.stem
            )

            if file_id not in pages:
                pages[file_id] = {}

            if markdown_file.content.strip():
                pages[file_id][locale] = file.relative_to(INPUT_PATH)
            else:
                log(file.relative_to(INPUT_PATH), "SKIPPED")
            path_to_id[locale][
                file.relative_to(INPUT_PATH / locale).with_suffix("").as_posix()
            ] = file_id
            all_ids.add(file_id)

            if (path / file.stem).is_dir():
                _load_sub_files(locale, path / file.stem, file_id + "/")

    for locale in LOCALES:
        path_to_id[locale] = {}
        _load_sub_files(
            locale,
            INPUT_PATH / locale,
        )

    return pages, path_to_id, all_ids


def run(clean=True):
    pages, path_to_id, all_ids = load_files()

    if clean:
        for loc in LOCALES:
            shutil.rmtree(OUTPUT_PATH / loc, ignore_errors=True)

    for id in pages:
        files = pages[id]

        ref_markdown_file = None
        if REFERENCE_LOCALE in files:
            ref_markdown_file = frontmatter.load(INPUT_PATH / files[REFERENCE_LOCALE])
        else:
            log(f'{id} is not translated in "{REFERENCE_LOCALE}"', "WARNING")

        for loc in files:
            input_file = INPUT_PATH / files[loc]
            output_file = (OUTPUT_PATH / files[loc]).with_suffix("") / "+page.md"

            markdown_file = frontmatter.load(input_file)

            if markdown_file.content.strip():
                markdown_file["_"] = "FILE AUTOMATICALLY GENERATED, DO NOT EDIT"
                markdown_file["id"] = id

                if loc != REFERENCE_LOCALE and ref_markdown_file is not None:
                    for field in FIELDS_TO_COPY:
                        if field in ref_markdown_file and field not in markdown_file:
                            markdown_file[field] = ref_markdown_file[field]

                for field in FIELDS_URLS_OPTIONAL:
                    if field in markdown_file:
                        if isinstance(markdown_file[field], str):
                            url = urlparse(markdown_file[field])
                            if url.scheme:
                                markdown_file[field] = {
                                    "name": url.hostname,
                                    "url": markdown_file[field],
                                }
                            elif (
                                field in FIELDS_URL_MAPPER
                                and markdown_file[field].lower()
                                in FIELDS_URL_MAPPER[field]
                            ):
                                markdown_file[field] = {
                                    "name": markdown_file[field],
                                    "url": FIELDS_URL_MAPPER[field][
                                        markdown_file[field].lower()
                                    ],
                                }
                            else:
                                markdown_file[field] = {
                                    "name": markdown_file[field],
                                }
                        elif isinstance(markdown_file[field], dict):
                            if "name" in markdown_file[field]:
                                if (
                                    "url" not in markdown_file[field]
                                    and field in FIELDS_URL_MAPPER
                                    and markdown_file[field]["name"].lower()
                                    in FIELDS_URL_MAPPER[field]
                                ):
                                    markdown_file[field]["url"] = FIELDS_URL_MAPPER[
                                        field
                                    ][markdown_file[field]["name"].lower()]
                            elif "url" in markdown_file[field]:
                                markdown_file[field]["name"] = markdown_file[field][
                                    "url"
                                ]

                if not FIELDS_REQUIRED.issubset(markdown_file.keys()):
                    missing_fields = FIELDS_REQUIRED.difference(markdown_file.keys())
                    log(
                        f"{files[loc]} doesn't have the required field{'s' if len(missing_fields) != 1 else ''}: {', '.join(missing_fields)}",
                        "WARNING",
                    )

                output_file.parent.mkdir(parents=True, exist_ok=True)
                frontmatter.dump(markdown_file, output_file)
                log(files[loc])
            else:
                print(files[loc], "SKIPPED")

    for loc in LOCALES:
        if loc != REFERENCE_LOCALE:
            file = OUTPUT_PATH / loc / "ids.json"
            file.parent.mkdir(parents=True, exist_ok=True)
            pti = path_to_id[loc]
            with open(file, "w") as fiw:
                json.dump(pti, fiw)

    file = OUTPUT_PATH / "en" / "ids.json"
    file.parent.mkdir(parents=True, exist_ok=True)
    with open(file, "w") as fiw:
        json.dump(
            {
                id: {loc: path.as_posix() for loc, path in pages[id].items()}
                for id in all_ids
            },
            fiw,
        )


run()
