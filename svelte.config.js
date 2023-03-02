import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

// Remove useless spaces
const tagsRegex1 = /(>)[\s]*([<{])/g;
const tagsRegex2 = /({[/:][a-z]+})[\s]*([<{])/g;
const tagsRegex3 = /({[#:][a-z]+ .+?})[\s]*([<{])/g;
const tagsRegex4 = /([>}])[\s]+(<|{[/#:][a-z][^}]*})/g;
const tagsReplace = (_, p1, p2) => p1 + p2;

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: ['.svelte', '.svx', '.md'],
    preprocess: [
        preprocess({
            postcss: true,
            replace: [
                [tagsRegex1, tagsReplace],
                [tagsRegex2, tagsReplace],
                [tagsRegex3, tagsReplace],
                [tagsRegex4, tagsReplace],
            ],
        }),
        mdsvex({
            extensions: ['.svx', '.md'],
            layout: {
                projects: 'src/lib/markdown-layouts/opensource-projects/project.svelte',
                actor: 'src/lib/markdown-layouts/opensource-projects/actor.svelte',
                'projects-dir': 'src/lib/markdown-layouts/opensource-projects/directory.svelte',
                'tag-list': 'src/lib/markdown-layouts/opensource-projects/tags/tags-list.svelte',
                'tag': 'src/lib/markdown-layouts/opensource-projects/tags/tag.svelte',
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
