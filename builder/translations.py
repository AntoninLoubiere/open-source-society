import csv
import json

TRANSLATIONS_FILE = "./locales/translations.csv"
# UNIVERSAL_FILE = "./locales/universal.csv"
# UNIVERSAL_FILE_OUTPUT = "./locales/universal.json"
TRANSLATIONS_DIR = "./locales/"
TAG_FORMAT = "tags.{tag}.url"

translations = {}
universal = {}
# translations_files = [UNIVERSAL_FILE_OUTPUT]
translations_files = []

def load_translations():
    global translations, universal

    with open(TRANSLATIONS_FILE, 'r', newline="") as fir:
        reader = csv.DictReader(fir)
        for row in reader:
            for r in row:
                if r == "key":
                    continue

                if r not in translations:
                    translations[r] = {}
                translations[r][row['key']] = row[r]

    print("[TRANSLATIONS] Translations loaded.")

    # with open(UNIVERSAL_FILE, 'r', newline="") as fir:
    #     reader = csv.DictReader(fir)
    #     for row in reader:
    #         universal[row['key']] = row['value']

    # print("[TRANSLATIONS] Universal loaded.")

def add_tags_url_translations(tags_url):
    for l in translations:
        for t in tags_url[l]:
            translations[l][TAG_FORMAT.format(tag=t)] = tags_url[l][t]
    print(f"[TRANSLATIONS] Tags urls has been added in each locales.")

def write_translations():
    for t in translations:
        path = TRANSLATIONS_DIR + t + ".json"
        translations_files.append(path)
        with open(path, "w") as fiw:
            fiw.write(json.dumps(translations[t]))
    print("[TRANSLATIONS] Translations wrote.")

    # with open(UNIVERSAL_FILE_OUTPUT, "w") as fiw:
    #     fiw.write(json.dumps(universal))
    # print("[TRANSLATIONS] Universal wrote.")

if __name__ == '__main__':
    load_translations()
    write_translations()
