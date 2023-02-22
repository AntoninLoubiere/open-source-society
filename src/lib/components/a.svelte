<script lang="ts">
    import { base } from '$app/paths';

    import { page } from '$app/stores';
    import { getLocaliseURL, isAppLink } from '$lib/utils';
    import { locale } from 'svelte-intl-precompile';

    const INTERNAL_PROTO = 'internal:/';

    export let href: string;

    $: isInternalLink = href.startsWith(INTERNAL_PROTO);
    $: linkAddr = isInternalLink
        ? getLocaliseURL(href.slice(INTERNAL_PROTO.length), $locale)
        : href;
</script>

{#if isInternalLink || isAppLink($page.url, linkAddr)}
    <a
        href={linkAddr}
        data-sveltekit-preload-code="viewport"
        data-sveltekit-preload-data="hover"
        class="link"><slot /></a
    >
{:else}
    <a href={linkAddr} class="link external"><slot /></a>
{/if}

<style>
    .external {
        background-image: url(./external-link.svg);
        background-repeat: no-repeat;
        background-position: center right;
        background-size: 1em;

        padding-right: 1em;
    }
</style>
