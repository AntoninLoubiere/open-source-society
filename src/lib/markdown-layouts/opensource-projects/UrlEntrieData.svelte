<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import A from '$lib/components/a.svelte';

    export let data: FrontmatterUrl | undefined;

    let title = '';
    $: if (data?.opensource != undefined) {
        title = $t(`projects.alternatives.${data.opensource ? '' : 'not-'}opensource`);
    }
</script>

<dd class="pl-3" {title}>
    {#if data?.opensource === false}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
        </svg>
    {/if}
    {#if data?.url}
        <A href={data.url}>{data.name}</A>
    {:else}
        {data?.name || $t('projects.unknown')}
    {/if}
</dd>
