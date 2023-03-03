<script lang="ts">
    import { base } from '$app/paths';

    import BreadcrumbItem from './BreadcrumbItem.svelte';
    import BreadcumpSep from './BreadcrumbSep.svelte';
    import BreadcumpWrapper from './BreadcrumbWrapper.svelte';

    export let url: string;
    export let startWithHome = true;

    interface Item {
        label: string;
        href: string;
        id: number;
    }
    let items: Item[] = [];
    $: {
        const paths = url.slice(base.length).split('/');
        let currentUrl = '/';
        for (let id = 0; id < paths.length; id++) {
            currentUrl += paths[id];
            items.push({
                label: paths[id].replace('-', ' '),
                href: currentUrl,
                id,
            });
            currentUrl += '/';
        }
    }
</script>

<BreadcumpWrapper>
    {#each items as { label, href, id }}
        {@const isLastItem = id == items.length - 1}
            {#if startWithHome && id == 0}
            <BreadcrumbItem {href} colored={isLastItem}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    />
                </svg>
            </BreadcrumbItem>
        {:else}
            <BreadcrumbItem {href} colored={isLastItem}>{label}</BreadcrumbItem>
        {/if}
        {#if !isLastItem}
            <BreadcumpSep />
        {/if}
    {/each}
</BreadcumpWrapper>
