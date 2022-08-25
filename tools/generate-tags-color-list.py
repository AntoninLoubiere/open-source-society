from pathlib import Path


OUTPUT_FILE = Path('src') / 'lib' / 'components' / 'tagColors.json'

TAGS_COLOR = {
    'app': 'pink',
    'desktop': 'fuchsia',
    'phone': 'fuchsia',
    'linux': 'indigo',
    'macos': 'indigo',
    'windows': 'indigo',
    'android': 'sky',
    'ios': 'sky',
    'office-suite': 'emerald',
    'browser': 'amber'
}

TEMPLATE = """    "{tag}": {{
        "text": "text-{color}-500",
        "bg": "bg-{color}-50",
        "border": "border-{color}-500"
    }}"""

def run():
    with open(OUTPUT_FILE, 'w') as fiw:
        fiw.write("{\n")
        for i, tag in  enumerate(TAGS_COLOR):
            fiw.write(TEMPLATE.format(tag=tag, color=TAGS_COLOR[tag]))
            fiw.write('\n' if i >= len(TAGS_COLOR) - 1 else ',\n')
        fiw.write("}\n")
    print("[TAG-COLOR] done.")

run()