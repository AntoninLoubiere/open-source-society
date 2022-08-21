<script>
    // @ts-nocheck
    import { t } from 'svelte-intl-precompile';
    import UrlEntrieData from './UrlEntrieData.svelte';

    export let label;
    export let data;

    $: nb = Array.isArray(data) ? data.length : 1;
</script>

<div>
    {$t(`projects.${label}`, { values: { nb } })}:
    {#if Array.isArray(data)}
        <ul>
            {#each data as el}
                <li><UrlEntrieData data={el} /></li>
            {/each}
        </ul>
    {:else}
        <UrlEntrieData {data} />
    {/if}
</div>
