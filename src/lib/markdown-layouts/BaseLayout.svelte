<script lang="ts">
    import { page } from '$app/stores';

    export let title: string;

    $: titleHead = title ? title + ' - Open Source Society' : 'Open Source Society';

    import BreadcrumbUrl from '$lib/components/BreadcrumbURL.svelte';
    import './markdown.css';
</script>

<svelte:head>
    <title>{titleHead}</title>
</svelte:head>

<nav>
    <BreadcrumbUrl url={$page.url.pathname.slice(1)} />
</nav>

<article class="markdown">
    <slot />
</article>
