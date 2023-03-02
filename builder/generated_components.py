from io import TextIOWrapper
from pathlib import Path

from markdown_config import REFERENCE_LOCALE, TAGS_COLOR

BASE_TAG_DIR = REFERENCE_LOCALE + "/tag"

TAG_SCORE_INDEX = {}
for i, t in enumerate(TAGS_COLOR):
    TAG_SCORE_INDEX[t] = i
TAG_SCORE_INDEX[""] = i + 1

class TagElement:
    def __init__(self, is_root = False) -> None:
        self.tag = ""
        self.is_root = is_root
        self.childs: dict[str, TagElement] = {}

    def add(self, id: list[str], tag: str):
        if len(id) == 0:
            self.tag = tag
        else:
            dir_name = id.pop()
            if dir_name not in self.childs:
                self.childs[dir_name] = TagElement()

            self.childs[dir_name].add(id, tag)

    def write(self, fiw: TextIOWrapper):
        if self.tag:
            fiw.write(f"<TagListElement tag=\"{self.tag}\"/>")

        if len(self.childs):
            fiw.write("<ul>")
            for t in sorted(self.childs, key=lambda t: TAG_SCORE_INDEX[self.childs[t].tag]):
                self.childs[t].write(fiw)
            fiw.write("</ul>")

def generate_tag_list(tag_url: dict[str, dict[str, str]]):
    path = Path('src') / 'lib' / 'components' / 'generated' / 'TagList.svelte'
    path.parent.mkdir(parents=True, exist_ok=True)

    tag_url_ref = tag_url[REFERENCE_LOCALE]

    tags_element = TagElement(True)
    for t in tag_url_ref:
        id = tag_url_ref[t].split('/')
        id.reverse()
        for _ in range(BASE_TAG_DIR.count('/') + 1):
            id.pop()
        tags_element.add(id, t)

    with open(path, 'w') as fiw:
        fiw.write(f"""<script lang="ts">
    import TagListElement from "$lib/components/TagListElement.svelte"
</script>\n""")
        tags_element.write(fiw)

    print("[GEN] TagListElement generated")
