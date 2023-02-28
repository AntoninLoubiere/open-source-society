from pathlib import Path


OUTPUT_FILE = Path('src') / 'lib' / 'tags' / 'tagColors.json'
TAILWIND_COLORS_USED = Path('src') / 'lib' / 'tags' / 'tag-colors-class.txt'

TAGS_COLOR = {
    'project': 'rose',
    'actor': 'rose',
    'license': 'rose',
    'app': 'pink',
    'fondation': 'pink',
    'private-company': 'pink',
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

PROPERTY_USED = {
    'text-{color}-500',
    'bg-{color}-50',
    'decoration-{color}-500',
    'border-{color}-500',
}

def format_color(c):
    def f(s):
        return s.format(color=c)
    return f

TEMPLATE = """    "{tag}": "{color}\""""

def run():
    colors = set()
    with open(OUTPUT_FILE, 'w') as fiw:
        fiw.write("{\n")
        for i, tag in  enumerate(TAGS_COLOR):
            colors.add(TAGS_COLOR[tag])
            fiw.write(TEMPLATE.format(tag=tag, color=TAGS_COLOR[tag]))
            fiw.write('\n' if i >= len(TAGS_COLOR) - 1 else ',\n')
        fiw.write("}\n")

    with open(TAILWIND_COLORS_USED, 'w') as fiw:
        for c in colors:
            fiw.write(' '.join(map(format_color(c), PROPERTY_USED)))
            fiw.write('\n')
    print("[TAG-COLOR] done.")

if __name__ == '__main__':
    run()