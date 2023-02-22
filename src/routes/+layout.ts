import type { LayoutLoad } from './$types';
import { init, locale, waitLocale } from 'svelte-intl-precompile';
import { registerAll } from '$locales';
import { REF_LOC } from '$lib/config';
import { get } from 'svelte/store';
import { base } from '$app/paths';
import { browser } from '$app/environment';

export const prerender = true;

registerAll();

export const load: LayoutLoad = async ({ url }) => {
    const loc = _getLocaleFromUrl(url);
    if (!get(locale) || !browser) {
        init({
            initialLocale: loc,
            fallbackLocale: REF_LOC,
            formats: {
                date: {
                    datetime: {
                        dateStyle: 'full',
                        timeStyle: 'short',
                    },
                },
            },
        });
    }
    await waitLocale(loc);
    return {};
};

export function _getLocaleFromUrl(url: URL) {
    const pathname = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
    return /^\/([a-zA-Z]+)\/?/.exec(pathname)?.[1];
}
