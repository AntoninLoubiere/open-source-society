<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import A from '$lib/components/a.svelte';

    export let data: FrontmatterUrl | undefined;

    let titleElemnts: string[];
    $: {
        titleElemnts = [];
        if (data?.opensource != undefined) {
            titleElemnts.push(
                $t(`projects.alternatives.${data.opensource ? '' : 'not-'}opensource`)
            );
        }
        if (data?.paid) {
            titleElemnts.push($t('projects.alternatives.paid'));
        }
    }
    $: title = titleElemnts.join(' ');
</script>

<dd class="pl-3" {title}>
    {#if data?.opensource === false}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline h-5 w-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
        </svg>
    {/if}
    {#if data?.paid}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline h-5 w-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    {/if}
    {#if data?.url}
        <A href={data.url}>{data.name}</A>
    {:else}
        {data?.name || $t('projects.unknown')}
    {/if}
</dd>
