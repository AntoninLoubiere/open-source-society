<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck
    import UrlEntrie from './UrlEntrie.svelte';
    import BaseLayout from '../BaseLayout.svelte';

    export let title;
    export let maintainer;
    export let website;
    export let license;
    export let repository;
    export let issue_tracker;
    export let contributions;
    export let financial_support;
</script>

<BaseLayout {title}>
    <h1>{title}</h1>

    <UrlEntrie label="maintainer" data={maintainer} />
    <UrlEntrie label="website" data={website} />
    <UrlEntrie label="license" data={license} />
    <UrlEntrie label="repository" data={repository} />
    <UrlEntrie label="issue_tracker" data={issue_tracker} />
    <UrlEntrie label="contributions" data={contributions} />
    <UrlEntrie label="financial_support" data={financial_support} />

    <slot />
</BaseLayout>
