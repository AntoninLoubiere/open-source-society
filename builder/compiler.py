from markdown_compiler import run as run_mdc
from translations import write_translations, load_translations
from generate_tags_color_list import run as run_gtcl

if __name__ == '__main__':
    run_mdc()
    run_gtcl()
    load_translations()
    write_translations()
