import type { LayoutLoad } from './$types';
import { init, locale, waitLocale } from 'svelte-intl-precompile';
import { registerAll } from '$locales';
import { REF_LOC } from '$lib/config';
import { get } from 'svelte/store';

registerAll();

export const load: LayoutLoad = async ({ url }) => {
    const loc = getLocaleFromUrl(url);
    if (!get(locale)) {
        init({
            initialLocale: loc,
            fallbackLocale: REF_LOC,
        });
    }
    await waitLocale(loc);
    return {};
};

export function getLocaleFromUrl(url: URL) {
    return /^\/([a-zA-Z]+)\/?/.exec(url.pathname)?.[1];
}
