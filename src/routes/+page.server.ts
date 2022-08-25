import { base } from '$app/paths';
import { LOCALES } from '$lib/config';
import { redirect } from '@sveltejs/kit';
import { getLocaleFromAcceptLanguageHeader } from 'svelte-intl-precompile';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    const locale = getLocaleFromAcceptLanguageHeader(
        request.headers.get('accept-language'),
        LOCALES
    );
    if ((locale || '') in LOCALES) throw redirect(307, `${base}/${locale}`);
};
