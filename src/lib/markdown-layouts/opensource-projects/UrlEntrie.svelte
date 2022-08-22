<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import UrlEntrieData from './UrlEntrieData.svelte';

    export let label: string;
    export let data: FrontmatterURLField;

    const needDef = [
        'maintainer',
        'license',
        'repository',
        'contributions',
        'financial_support',
        'issue_tracker',
    ];

    $: labelText = $t(`projects.${label}`, { values: { nb } });
    $: nb = Array.isArray(data) ? data.length : 1;
</script>

<div class="block py-1 leading-5">
    <dt class="block w-72">
        {#if needDef.includes(label)}
            <dfn title={$t(`projects.dfn.${label}`)}>{labelText}</dfn>
        {:else}
            {labelText}
        {/if}
    </dt>
    {#if Array.isArray(data)}
        {#each data as el}
            <UrlEntrieData data={el} />
        {/each}
    {:else}
        <UrlEntrieData {data} />
    {/if}
</div>
