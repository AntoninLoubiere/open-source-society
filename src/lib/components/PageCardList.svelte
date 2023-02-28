<script lang="ts">
    import PageCard from './PageCard.svelte';

    export let pagesIds: string[];
</script>

<div class="grid justify-evenly gap-2 sm:grid-cols-2">
    {#each pagesIds as pageId (pageId)}
        <PageCard {pageId} />
    {/each}
</div>
