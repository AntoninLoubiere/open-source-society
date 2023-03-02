from pathlib import Path
import re


REFERENCE_LOCALE = "en"
LOCALES = {"en", "fr"}

INPUT_PATH = Path("pages")
OUTPUT_PATH = Path("src") / "routes"
OUTPUT_TAGS_LIST = Path("src") / "lib" / "tags"  / "tags.json"

# Repeated in config.ts
EDIT_URL = "https://github.com/AntoninLoubiere/open-source-society/edit/main/pages/{path}"
GIT_DATE_COMMAND = ["git", "log", "-1", "--pretty=%cI", "path"]

FIELDS_URLS_OPTIONAL = {
    "maintainer",
    "website",
    "license",
    "repository",
    "issue_tracker",
    "contributions",
    "income",
    "alternatives"
}

# IMPORTANT: key should be in lowercase
FIELDS_URL_MAPPER = {
    'license': {
        'mpl': 'internal://license/MPL'
    }
}
FIELDS_TO_COPY = {"title", "summary", "tag", "tags", "layout", "img"} | FIELDS_URLS_OPTIONAL
FIELDS_REQUIRED = {
    "title",
    # "summary"
}
METADATA_EXPORT = {"title", "summary", "img", "id", "tags"}

AUTO_LAYOUT = {
    re.compile("^projects/.*"): "projects",
    re.compile("^actors/.*"): "actor",
    re.compile("^tag/.*"): "tag",
    re.compile("^tag$"): "tag-list",
}

AUTO_TAGS = {
}

# Also define the order of the tags
TAGS_COLOR = {
    'actor': 'rose',
    'license': 'rose',
    'project': 'rose',
    'app': 'pink',
    'fondation': 'pink',
    'private-company': 'pink',
    'desktop': 'fuchsia',
    'phone': 'fuchsia',
    'windows': 'indigo',
    'linux': 'indigo',
    'macos': 'indigo',
    'android': 'sky',
    'ios': 'sky',
    'office-suite': 'emerald',
    'browser': 'amber'
}

LOGO_OUTPUT_DIR = Path("src/lib/assets/projects/")
