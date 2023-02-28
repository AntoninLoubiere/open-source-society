import tags from '$lib/tags/tags.json';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params: { lang, tag } }) => {
    if (!tags.includes(tag)) throw error(404);

    const files: string[] = (await import(`../../../${lang}/tags/${tag}.json`)).default;

    return { files };
};
