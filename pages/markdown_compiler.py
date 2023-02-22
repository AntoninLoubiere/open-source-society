from dataclasses import dataclass
import json
from pathlib import Path
from random import randint
import re
import subprocess
import frontmatter
import shutil
from urllib.parse import urlparse


REFERENCE_LOCALE = "en"
LOCALES = ["en", "fr"]

INPUT_PATH = Path("pages")
OUTPUT_PATH = Path("src") / "routes"

EDIT_URL = "https://github.com/AntoninLoubiere/open-source-society/edit/main/pages/{path}"
GIT_DATE_COMMAND = ["git", "log", "-1", "--pretty=%cI", "path"]

FIELDS_URLS_OPTIONAL = [
    "maintainer",
    "website",
    "license",
    "repository",
    "issue_tracker",
    "contributions",
    "income",
    "alternatives"
]

# IMPORTANT: key should be in lowercase
FIELDS_URL_MAPPER = {
    'license': {
        'mpl': 'https://www.mozilla.org/MPL/'
    }
}
FIELDS_TO_COPY = ["title", "tags", "layout", 'logo'] + FIELDS_URLS_OPTIONAL
FIELDS_REQUIRED = set(["title", "summary"])

AUTO_LAYOUT = {
    re.compile("projects/*"): "opensource-projects",
}

LOGO_OUTPUT_DIR = Path("src/lib/assets/projects/")


def get_last_modification_date(path):
    GIT_DATE_COMMAND[-1] = path
    r = subprocess.run(GIT_DATE_COMMAND, capture_output=True, text=True).stdout.strip()
    return r


def log(message, label="OK"):
    print(f"{label:^10}: {message}")


def load_files():
    pages: dict[str, dict[str, Path]] = {}
    path_to_id: dict[str, dict[str, str]] = {}
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
        if markdown_file.content.strip():
            pages[file_id][locale] = relative_filepath
        else:
            log(relative_filepath, "SKIPPED")

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

    return pages, path_to_id, all_ids


def run(clean=True):
    pages, path_to_id, all_ids = load_files()

    if clean:
        for loc in LOCALES:
            shutil.rmtree(OUTPUT_PATH / loc, ignore_errors=True)
        shutil.rmtree(LOGO_OUTPUT_DIR, ignore_errors=True)
    LOGO_OUTPUT_DIR.mkdir(exist_ok=True)

    for id in pages:
        files = pages[id]

        ref_markdown_file = None
        ref_file_path = (INPUT_PATH / REFERENCE_LOCALE / id).with_suffix('.md')
        print(ref_file_path)
        if ref_file_path.exists():
            ref_markdown_file = frontmatter.load(ref_file_path)

        else:
            log(f'{id} is not translated in "{REFERENCE_LOCALE}"', "WARNING")

        for loc in files:
            input_file = INPUT_PATH / files[loc]
            output_file = (OUTPUT_PATH / files[loc]).with_suffix("") / "+page.md"

            markdown_file = frontmatter.load(input_file)

            if markdown_file.content.strip():
                markdown_file["_"] = "FILE AUTOMATICALLY GENERATED, DO NOT EDIT"
                markdown_file["id"] = id
                markdown_file["edit_url"] = EDIT_URL.format(path=files[loc])
                markdown_file["last_modification"] = get_last_modification_date(input_file.as_posix())

                if loc != REFERENCE_LOCALE and ref_markdown_file is not None:
                    for field in FIELDS_TO_COPY:
                        if field in ref_markdown_file and field not in markdown_file:
                            markdown_file[field] = ref_markdown_file[field]

                for field in FIELDS_URLS_OPTIONAL:
                    if field in markdown_file:
                        markdown_file[field] = get_url_field_data(markdown_file[field], field)

                if "layout" not in markdown_file:
                    for reg, lay in AUTO_LAYOUT.items():
                        if reg.match(id):
                            markdown_file["layout"] = lay

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
                id: {
                    loc: path.with_suffix("").as_posix()
                    for loc, path in pages[id].items()
                }
                for id in all_ids
            },
            fiw,
        )

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


run()
