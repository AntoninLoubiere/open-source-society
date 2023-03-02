<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    import Tags from '../../components/Tags.svelte';

    import UrlEntrie from './UrlEntrie.svelte';
    import BaseLayout from '../BaseLayout.svelte';
    import { t } from 'svelte-intl-precompile';
    import { ASSETS } from '$lib/config';
    import { base } from '$app/paths';

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let summary;
    /** @type {string} */
    export let edit_url;
    /** @type {string} */
    export let last_modification;
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
    export let img;
    /** @type {FrontmatterURLField} */
    export let alternatives;
    /** @type {string[] | undefined} */
    export let tags;
</script>

<svelte:head>
{#if  img}
<meta property="og:image:alt" content={$t('projects.logo.desc', {values: {project: title}})}>
{/if}
</svelte:head>

<BaseLayout {title} {img} {summary} {edit_url} {last_modification} showTitle={true}>
    <Tags {tags} />

    <section slot="sidebar" let:isSide class:isSide class="relative">
        {#if img}
            <figure class="my-1" class:is-inline={!isSide}>
                <img
                    alt="{$t('projects.logo.desc', {values: {project: title}})}"
                    src={base + ASSETS + img}
                    class="mx-auto max-h-[8rem] max-w-full"
                />
                <figcaption class="text-center">{$t('projects.logo.desc', {values: {project: title}})}</figcaption>
            </figure>
        {/if}
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
        @apply my-2 max-w-max rounded-lg border bg-white px-2 py-1;
    }

    figure.is-inline {
        @apply float-right max-w-[40vw];
    }

    details.isSide summary {
        @apply hidden;
    }
    details.is-inline {
        @apply my-2 rounded-lg border border-gray-400 px-2 py-1;
    }
</style>
