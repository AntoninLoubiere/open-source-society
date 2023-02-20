<script lang="ts">
    import { page } from '$app/stores';

    export let title: string;
    export let showTitle = false;

    $: titleHead = title ? title + ' - Open Source Society' : 'Open Source Society';

    import BreadcrumbUrl from '$lib/components/BreadcrumbURL.svelte';
    import './markdown.css';
</script>

<svelte:head>
    <title>{titleHead}</title>
</svelte:head>

<div class="min-h-full-content bg-primary-variant-50">
    <div class="grid gap-4 lg:grid-cols-page-layout-lg lg:p-4 xl:grid-cols-page-layout-xl">
        <div class="hidden xl:block" />
        <article
            class="mx-auto h-min w-full min-w-min max-w-[125ch] bg-white px-4 py-2 lg:rounded-xl lg:border"
        >
            <nav class="border-b border-gray-400 pb-2">
                <BreadcrumbUrl url={$page.url.pathname.slice(1)} />
            </nav>
            <div class="markdown">
                {#if showTitle}
                    <h1>{title}</h1>
                {/if}
                <div class="not-prose border-y border-gray-400 lg:hidden">
                    <slot name="sidebar" isSide={false}/>
                </div>
                <slot />
            </div>
        </article>
        <div class="prose hidden lg:block">
            <slot name="sidebar" isSide />
        </div>
    </div>
</div>
