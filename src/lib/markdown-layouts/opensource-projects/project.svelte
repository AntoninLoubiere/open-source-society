<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    import Tags from '../../components/Tags.svelte';

    // @ts-nocheck
    import UrlEntrie from './UrlEntrie.svelte';
    import BaseLayout from '../BaseLayout.svelte';
    import { t } from 'svelte-intl-precompile';
    import { ASSETS } from '$lib/config';
import { base } from '$app/paths';

    /** @type {string} */
    export let title;
    /** @type {FrontmatterURLField} */
    export let maintainer;
    /** @type {FrontmatterURLField} */
    export let website;
    /** @type {FrontmatterURLField} */
    export let license;
    /** @type {FrontmatterURLField} */
    export let repository;
    /** @type {FrontmatterURLField} */
    export let issue_tracker;
    /** @type {FrontmatterURLField} */
    export let contributions;
    /** @type {FrontmatterURLField} */
    export let income;
    /** @type {string | undefined} */
    export let logo;
    /** @type {FrontmatterURLField} */
    export let alternatives;
    /** @type {string[] | undefined} */
    export let tags;
</script>

<BaseLayout {title}>
    <h1 class="!mb-2">{title}</h1>

    <Tags {tags} />

    <section slot="sidebar" let:isSide class:isSide class="relative">
        <h3 class="mt-0 mb-2">{$t('projects.information')}</h3>
        <figure class="mt-0 mb-1" class:is-inline={!isSide}>
            <img alt="{title} logo." src={base + ASSETS + logo} class="mx-auto max-h-[8rem] max-w-full" />
            <figcaption class="text-center">{title} logo.</figcaption>
        </figure>
        <dl>
            <UrlEntrie label="maintainer" data={maintainer} />
            <UrlEntrie label="website" data={website} />
            <UrlEntrie label="license" data={license} />
        </dl>
        <details open={isSide} class:isSide class:is-inline={!isSide}>
            <summary>{$t('projects.detailed-information')}</summary>
            <dl>
                <UrlEntrie label="alternatives" data={alternatives} />
                <UrlEntrie label="repository" data={repository} />
                <UrlEntrie label="issue_tracker" data={issue_tracker} />
                <UrlEntrie label="contributions" data={contributions} />
                <UrlEntrie label="income" data={income} />
            </dl>
        </details>
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
