<script lang="ts">
    import BreadcrumbURL from '$lib/components/Breadcrumb/BreadcrumbURL.svelte';
    import WindowsLayout from '$lib/components/WindowsLayout.svelte';
    import { page } from '$app/stores';
    import FooterPage from '$lib/components/FooterPage.svelte';

    import './markdown.css';
    import { base } from '$app/paths';
    import { ASSETS } from '$lib/config';

    export let title: string;
    export let summary: string = '';
    export let img: string = '';
    export let showTitle = false;
    export let last_modification: string = '';
    export let edit_url: string = '';
</script>

<svelte:head>
<meta property="og:title" content="{title}" />
<meta property="og:type" content="article" />
{#if summary}
<meta property="og:description" content="{summary}" />
<meta name="description" content={summary}>
{/if}
{#if img}
<meta property="og:image" content={base + ASSETS + img}>
{/if}
</svelte:head>

<WindowsLayout {title}>
    <BreadcrumbURL url={$page.url.pathname.slice(1)} />
    {#if showTitle}
        <h1>{title}</h1>
    {/if}
    <div class="not-prose border-y border-gray-400 lg:hidden my-2">
        <slot name="sidebar" isSide={false} />
    </div>
    <slot />
    <FooterPage {edit_url} {last_modification}></FooterPage>
    <slot name="sidebar" slot="sidebar" isSide />
</WindowsLayout>
