<script lang="ts">
    import BreadcrumbItem from './BreadcrumbItem.svelte';

    export let url: string;
    export let base = '/';
    export let startWithHome = true;

    interface Item {
        label: string;
        href: string;
        id: number;
    }
    let items: Item[] = [];
    $: {
        const paths = url.split('/');
        let currentUrl = base;
        for (let id = 0; id < paths.length; id++) {
            currentUrl += paths[id];
            items.push({
                label: paths[id],
                href: currentUrl,
                id,
            });
            currentUrl += '/';
        }
    }
</script>

<div class="min-h-6 flex flex-wrap items-center gap-1">
    {#each items as { label, href, id }}
        {@const isLastItem = id == items.length - 1}
        <div class:text-gray-600={!isLastItem} class:text-primary={isLastItem} class="inline-block">
            {#if startWithHome && id == 0}
                <BreadcrumbItem {href}>
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
                <BreadcrumbItem {href}>{label}</BreadcrumbItem>
            {/if}
        </div>
        {#if !isLastItem}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        {/if}
    {/each}
</div>
