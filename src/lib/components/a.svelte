<script lang="ts">
    import { page } from '$app/stores';
    import { isAppLink } from '$lib/utils';

    export let href: string;
</script>

{#if isAppLink($page.url, href)}
    <a {href} sveltekit:prefetch class="link"><slot /></a>
{:else}
    <a {href} class="link external"><slot /></a>
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
