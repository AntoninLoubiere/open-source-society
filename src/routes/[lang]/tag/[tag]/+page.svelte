<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { getColor } from '$lib/tags/color';
    import { t, locale } from 'svelte-intl-precompile';
    import type { PageData } from './$types';
    import BreadcrumbItem from '$lib/components/Breadcrumb/BreadcrumbItem.svelte';
    import BreadcumpWrapper from '$lib/components/Breadcrumb/BreadcrumbWrapper.svelte';
    import BreadcumpSep from '$lib/components/Breadcrumb/BreadcrumbSep.svelte';
    import PageList from '$lib/components/PageCardList.svelte';
    import WindowsLayout from '$lib/components/WindowsLayout.svelte';

    export let data: PageData;

    $: tag = $page.params.tag;
    $: tagLocalize = $t(`tag.${tag}s`);
    $: color = getColor(tag);
</script>

<WindowsLayout title={tagLocalize}>
    <BreadcumpWrapper>
        <BreadcrumbItem href="/{$locale}"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
            </svg></BreadcrumbItem
        >
        <BreadcumpSep />
        <BreadcrumbItem href="/{$locale}/tag">{$t('tags')}</BreadcrumbItem>
        <BreadcumpSep />
        <BreadcrumbItem href="/{$locale}/tag/{tag}" colored>{tagLocalize}</BreadcrumbItem>
    </BreadcumpWrapper>
    <h1 class="underline decoration-4 decoration-{color}-500">{tagLocalize}</h1>
    <p>{$t(`tag.description.${tag}s`)}</p>
    <PageList pagesIds={data.files} />
</WindowsLayout>
