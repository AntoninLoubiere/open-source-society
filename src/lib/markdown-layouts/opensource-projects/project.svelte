<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck
    import UrlEntrie from './UrlEntrie.svelte';
    import BaseLayout from '../BaseLayout.svelte';
    import { t } from 'svelte-intl-precompile';
    import { importProjectLogo } from '$lib/utils/assetImporter';

    export let title;
    export let maintainer;
    export let website;
    export let license;
    export let repository;
    export let issue_tracker;
    export let contributions;
    export let financial_support;
    export let logo;
    export let alternatives;

    let logoUrl;
    if (logo) {
        importProjectLogo(logo).then((r) => (logoUrl = r.default));
    }
</script>

<BaseLayout {title} showTitle={true}>
    <section slot="sidebar" let:isSide class:isSide class="relative">
        <h3 class="mt-0 mb-2">{$t('projects.information')}</h3>
        {#if logoUrl}
            <figure class="mt-0 mb-1" class:is-inline={!isSide}>
                <img alt="{title} logo." src={logoUrl} class="mx-auto max-h-[8rem] max-w-full" />
                <figcaption>{title} logo.</figcaption>
            </figure>
        {/if}
        <dl>
            <UrlEntrie label="maintainer" data={maintainer} />
            <UrlEntrie label="website" data={website} />
            <UrlEntrie label="license" data={license} />
            <details open={isSide} class:isSide class:is-inline={!isSide}>
                <summary>{$t('projects.detailed-information')}</summary>
                <UrlEntrie label="alternatives" data={alternatives} />
                <UrlEntrie label="repository" data={repository} />
                <UrlEntrie label="issue_tracker" data={issue_tracker} />
                <UrlEntrie label="contributions" data={contributions} />
                <UrlEntrie label="financial_support" data={financial_support} />
            </details>
        </dl>
    </section>

    <slot />
</BaseLayout>

<style>
    section.isSide {
        @apply sticky top-12 max-w-max overflow-scroll rounded-lg border bg-white px-2 py-1;
        max-height: calc(100vh - 4rem);
    }

    figure.is-inline {
        @apply float-right max-w-[40vw];
    }

    details.isSide summary {
        @apply hidden;
    }
    details.is-inline {
        @apply my-3 rounded-lg border border-gray-400 px-2 py-1;
    }
</style>
