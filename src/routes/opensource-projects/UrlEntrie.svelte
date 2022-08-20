<script>
    // @ts-nocheck
    export let label;
    export let data;
</script>

<div>
    {label}:
    {#if data?.url}
        <a href="{data.url}">{data.name}</a>
    {:else}
        {data?.name || "Unknown"}
    {/if}
</div>