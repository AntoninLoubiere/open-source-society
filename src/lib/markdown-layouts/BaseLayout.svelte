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

<div class="bg-primary-variant-50 min-h-screen">
    <div class="py-4 grid lg:grid-cols-page-layout">
        <span />
        <article class="min-w-min rounded-xl px-4 py-2 lg:border bg-white">
            <nav class="border-b border-gray-400 pb-2">
                <BreadcrumbUrl url={$page.url.pathname.slice(1)} />
            </nav>
            <div class="markdown">
                    {#if showTitle}
                        <h1>{title}</h1>
                    {/if}
                        <div class="not-prose lg:hidden border-y border-gray-400">
                            <slot name="sidebar" />
                        </div>
                    <slot />
                </div>
        </article>
        <div class="hidden lg:block prose">
            <slot name="sidebar" isSide/>
        </div>
    </div>
</div>
