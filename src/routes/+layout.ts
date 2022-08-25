import type { LayoutLoad } from './$types';
import { init, locale, waitLocale } from 'svelte-intl-precompile';
import { registerAll } from '$locales';
import { REF_LOC } from '$lib/config';
import { get } from 'svelte/store';
import { base } from '$app/paths';

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
    const pathname = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
    return /^\/([a-zA-Z]+)\/?/.exec(pathname)?.[1];
}
