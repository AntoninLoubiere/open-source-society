<script lang="ts">
    import TagSmall from './TagSmall.svelte';

    export let tags: string[] | undefined;
</script>

<div class="not-prose">
    {#if tags?.length}
        <ul class="flex flex-wrap gap-1 gap-x-0.5 text-sm">
            {#each tags as tag}
                <TagSmall {tag} />
            {/each}
        </ul>
    {/if}
</div>
