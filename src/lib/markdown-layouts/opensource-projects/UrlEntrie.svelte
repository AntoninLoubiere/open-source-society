<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import UrlEntrieData from './UrlEntrieData.svelte';

    export let label: string;
    export let data: FrontmatterURLField;

    $: labelText = $t(`projects.${label}`, { values: { nb } });
    $: nb = Array.isArray(data) ? data.length : 1;
</script>

<div class="block py-1 leading-5">
    <dt class="block w-72 cursor-help italic">
        <dfn title={$t(`projects.dfn.${label}`)}
            >{labelText}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline h-4 w-4 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                />
            </svg>
            :
        </dfn>
    </dt>
    {#if Array.isArray(data)}
        {#each data as el}
            <UrlEntrieData data={el} />
        {/each}
    {:else}
        <UrlEntrieData {data} />
    {/if}
</div>
