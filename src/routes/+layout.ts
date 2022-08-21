import type { LayoutLoad } from './$types';
import { init, waitLocale } from 'svelte-intl-precompile';
import { registerAll } from '$locales';

registerAll();
export const load: LayoutLoad = async ({ url }) => {
    const loc = /^\/([a-zA-Z]+)\/?/.exec(url.pathname);
    init({
        initialLocale: loc?.[1],
        fallbackLocale: 'en',
    });
    await waitLocale();
    return {};
};
