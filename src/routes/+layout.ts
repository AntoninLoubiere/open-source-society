import type { LayoutLoad } from './$types';
import { init, waitLocale } from 'svelte-intl-precompile';
import { registerAll } from '$locales';
import { REF_LOC } from '$lib/localeConfig';

registerAll();
export const load: LayoutLoad = async ({ url }) => {
    const loc = /^\/([a-zA-Z]+)\/?/.exec(url.pathname);
    init({
        initialLocale: loc?.[1],
        fallbackLocale: REF_LOC,
    });
    await waitLocale();
    return {};
};
