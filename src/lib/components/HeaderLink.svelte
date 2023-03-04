<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { getLocaliseURL } from '$lib/utils';

    import { locale, t } from 'svelte-intl-precompile';

    /** Can be a path id starting with /en/ */
    export let pathId: string;
    export let label = '';
    export let activeExact = false;

    $: href = pathId.startsWith('/')
        ? base + '/' + $locale + pathId
        : getLocaliseURL(pathId, $locale);
    // let active = false;
    $: active = activeExact ? $page.url.pathname == href : $page.url?.pathname.startsWith(href);
</script>

<a
    {href}
    class:active
    class="font-light uppercase hover:text-secondary hover:underline"
    data-sveltekit-preload-data="hover"
    data-sveltekit-preload-code="hover"><slot>{$t('header.nav.' + label)}</slot></a
>

<style>
    .active {
        @apply text-primary;
    }
</style>
