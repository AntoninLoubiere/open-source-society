import { LOCALES, REF_LOC } from '$lib/config';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad<{
    available_lang: Record<string, string>;
    backPath: string;
}> = async ({ params: { lang, path } }) => {
    if (!LOCALES.includes(lang)) throw error(404);

    const allIdsPromise: Promise<Record<string, Record<string, string>>> = import(
        `../../${REF_LOC}/ids.json`
    ).then((r) => r.default);

    let resultPath: string | undefined;
    if (lang == REF_LOC) {
        resultPath = path;
    } else {
        const langIds: Record<string, string> = (await import(`../../${lang}/ids.json`)).default;

        if (path in langIds) {
            resultPath = path;
        } else {
            const sep = path.lastIndexOf('/');
            if (sep < 0) throw error(404);

            const basePath = path.slice(0, sep);
            if (basePath in langIds) {
                resultPath = langIds[basePath] + path.slice(sep);
            } else throw error(404);
        }
    }

    const allIds = await allIdsPromise;
    if (resultPath in allIds) {
        let backPath = resultPath;
        while (backPath && !(backPath in allIds && lang in allIds[backPath])) {
            const sep = backPath.lastIndexOf('/');
            backPath = backPath.slice(0, sep);
        }

        return {
            available_lang: allIds[resultPath],
            backPath: allIds[backPath][lang],
        };
    }

    throw error(404);
};
