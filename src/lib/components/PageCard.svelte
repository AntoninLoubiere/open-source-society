<script lang="ts">
    import { browser } from '$app/environment';
    import { base } from '$app/paths';
    import { ASSETS } from '$lib/config';
    import { addToCache, getMetadataFromCache, getPageMetadata } from '$lib/metadata_importer';
    import { inview } from 'svelte-inview';
    import Tags from './Tags.svelte';

    export let pageId: string;

    $: page = getMetadataFromCache(pageId);
    $: metadata_tag = browser ? undefined : JSON.stringify(page);

    if (browser) {
        const elem = document.getElementById(pageId);
        if (elem && elem.hasAttribute('data-metadata')) {
            page = JSON.parse(elem.getAttribute('data-metadata') || '');
            addToCache(pageId, page);
        }
    }

    async function onEnter() {
        if (page) return;

        page = await getPageMetadata(pageId);
    }
</script>

{#key pageId}
    {#if page}
        <a
            id={pageId}
            href="{base}/{pageId}"
            class="max-w-2xl rounded-md border border-gray-400 py-2 px-2 hover:border-primary"
            data-sveltekit-preload-data="hover"
            data-sveltekit-preload-code="viewport"
            data-metadata={metadata_tag}
        >
            <article class="flex h-full flex-col">
                <div class="mb-2 flex flex-grow">
                    <div class="my-auto h-20 mr-2">
                        {#if page.logo}
                            <img
                                alt="{page.title} logo."
                                src={base + ASSETS + page.logo}
                                class="!m-0 h-full min-w-[5rem]"
                            />
                        {/if}
                    </div>
                    <div
                        class="overflow-hidden overflow-ellipsis leading-tight"
                        class:italic={page.missing}
                        class:opacity-75={page.missing}
                    >
                        <h3 class="!my-0">{page.title}</h3>
                        <span class="text-sm">{page.summary}</span>
                    </div>
                </div>
                <Tags tags={page.tags} small />
            </article>
        </a>
    {:else}
        <a
            class="h-32 rounded-md border border-gray-400 motion-safe:animate-pulse"
            href="{base}/{pageId}"
            use:inview={{
                rootMargin: '50px',

                unobserveOnEnter: true,
            }}
            on:enter={onEnter}
        >
            <div class="mb-2 flex flex-grow p-2">
                <div class="pulsing-text h-20 w-20" />
                <div class="flex-grow p-2">
                    <div class="pulsing-text !mx-0 !mt-1 !mb-4 h-3 w-full" />
                    <div class="mb-2 grid grid-cols-3 gap-4">
                        <div class="pulsing-text col-span-2" />
                        <div class="pulsing-text col-span-1" />
                    </div>
                    <div class="pulsing-text" />
                </div>
            </div>
            <div class="flex flex-wrap justify-evenly gap-1">
                <div class="pulsing-text h-3 w-14" />
                <div class="pulsing-text h-3 w-10" />
                <div class="pulsing-text h-3 w-20" />
                <div class="pulsing-text h-3 w-8" />
            </div>
        </a>
    {/if}
{/key}
