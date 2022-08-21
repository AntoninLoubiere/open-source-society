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
            layout: {
                'opensource-projects': 'src/routes/opensource-projects/layout.svelte',
                'opensource-projects-dir': 'src/routes/opensource-projects/directory-layout.svelte',
            },
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
