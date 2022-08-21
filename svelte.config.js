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
                'opensource-projects':
                    'src/lib/markdown-layouts/opensource-projects/project.svelte',
                'opensource-projects-dir':
                    'src/lib/markdown-layouts/opensource-projects/directory.svelte',
                _: 'src/lib/markdown-layouts/default.svelte',
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
    vitePlugin: {
        experimental: {
            useVitePreprocess: true,
        },
    },
};

export default config;
