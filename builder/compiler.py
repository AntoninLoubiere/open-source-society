import sys
from markdown_compiler import run as run_mdc
from translations import write_translations, load_translations, add_tags_url_translations
from generate_tags_color_list import run as run_gtcl

if __name__ == '__main__':
    tags_url = run_mdc('clean' in sys.argv)
    run_gtcl()
    load_translations()
    add_tags_url_translations(tags_url)
    write_translations()
