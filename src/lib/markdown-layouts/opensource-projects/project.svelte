<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck
    import UrlEntrie from './UrlEntrie.svelte';
    import BaseLayout from '../BaseLayout.svelte';
import { t } from 'svelte-intl-precompile';

    export let title;
    export let maintainer;
    export let website;
    export let license;
    export let repository;
    export let issue_tracker;
    export let contributions;
    export let financial_support;
</script>

<BaseLayout {title} showTitle={true}>
    <div slot="sidebar" let:isSide class:isSide>
        <h3 class="mt-0 mb-1">{$t('projects.information')}</h3>
        <UrlEntrie label="maintainer" data={maintainer} />
        <UrlEntrie label="website" data={website} />
        <UrlEntrie label="license" data={license} />
        <UrlEntrie label="repository" data={repository} />
        <UrlEntrie label="issue_tracker" data={issue_tracker} />
        <UrlEntrie label="contributions" data={contributions} />
        <UrlEntrie label="financial_support" data={financial_support} />
    </div>

    <slot />
</BaseLayout>

<style>
    .isSide {
        @apply sticky top-12 border rounded-lg px-2 py-1 max-w-max mx-4 bg-white;
    }
</style>