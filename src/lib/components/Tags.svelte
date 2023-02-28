<script lang="ts">
    import Tag from './Tag.svelte';

    export let tags: string[] | undefined;
    export let small = false;
</script>

<div class="not-prose">
    {#if tags?.length}
        <ul
            class="flex flex-wrap gap-1 text-sm"
            class:justify-evenly={small}
            class:gap-x-0.5={small}
        >
            {#each tags as tag}
                <Tag {tag} {small} />
            {/each}
        </ul>
    {/if}
</div>
