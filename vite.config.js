import { sveltekit } from '@sveltejs/kit/vite';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit(), precompileIntl('locales')],
};

export default config;
