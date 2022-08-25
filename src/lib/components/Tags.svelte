<script lang="ts">
    import Tag from './Tag.svelte';

    export let tags: string[] | undefined;
</script>

<div class="not-prose">
    {#if tags?.length}
        <ul class="flex flex-wrap gap-1 text-sm">
            {#each tags as tag}
                <Tag {tag} />
            {/each}
        </ul>
    {/if}
</div>
