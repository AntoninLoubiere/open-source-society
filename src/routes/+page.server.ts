import { redirect } from '@sveltejs/kit';
import { getLocaleFromAcceptLanguageHeader } from 'svelte-intl-precompile';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
    const locale = getLocaleFromAcceptLanguageHeader(request.headers.get('accept-language'), [
        'fr',
        'en',
    ]);
    if (locale) throw redirect(307, `/${locale}`);
};
