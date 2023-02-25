import adapter from '@sveltejs/adapter-static';
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
                projects: 'src/lib/markdown-layouts/opensource-projects/project.svelte',
                actor: 'src/lib/markdown-layouts/opensource-projects/actor.svelte',
                'projects-dir': 'src/lib/markdown-layouts/opensource-projects/directory.svelte',
                _: 'src/lib/markdown-layouts/default.svelte',
            },
        }),
    ],

    kit: {
        prerender: {
            crawl: true,
            entries: ['/', '/fr', '/en', '*'],
        },
        adapter: adapter({
            fallback: '404.html',
            pages: 'docs',
            assets: 'docs',
        }),
        alias: {
            'src/*': 'app/src',
        },
        paths: {
            base: '/open-source-society',
        },
    },
    vitePlugin: {
        experimental: {
            useVitePreprocess: true,
        },
    },
};

export default config;
