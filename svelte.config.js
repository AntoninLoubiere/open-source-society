import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex({
            extensions: ['.svx', '.md'],
        }),
    ],

    kit: {
        prerender: {
            crawl: true,
        },
        adapter: adapter(),
        alias: {
            'src/*': 'app/src',
        },
    },
};

export default config;
