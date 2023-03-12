from pathlib import Path


TEMPLATE = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{}
</urlset>
"""
URL_TEMPLATE = """<url><loc>https://antoninloubiere.github.io/open-source-society/{}</loc></url>"""


OUTPUT_DIR = Path('docs')
OUTPUT_FILE = OUTPUT_DIR / 'sitemap.xml'

def url_to_id(url: Path):
    u = url.relative_to('docs')
    if u.stem == 'index':
        u = u.parent
    if u == Path('.'):
        return ''
    return u.with_suffix("").as_posix() + '/'

def run():
    urls = map(url_to_id, OUTPUT_DIR.glob("**/*.html"))
    content = TEMPLATE.format(
        ''.join(map(lambda u: URL_TEMPLATE.format(u), urls))
    )
    with open(OUTPUT_FILE, 'w') as fiw:
        fiw.write(content)

if __name__ == '__main__':
    run()