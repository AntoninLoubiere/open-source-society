<script>
    // @ts-nocheck

    import UrlEntrie from './UrlEntrie.svelte';
    import '$lib/markdown.css';

    export let title;
    export let maintainer;
    export let website;
    export let license;
    export let repository;
    export let issue_tracker;
    export let pull_request;
    export let financial_support;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="markdown">
    <h1>{title}</h1>

    <UrlEntrie label="maintainer" data={maintainer} />
    <UrlEntrie label="website" data={website} />
    <UrlEntrie label="license" data={license} />
    <UrlEntrie label="repository" data={repository} />
    <UrlEntrie label="issue_tracker" data={issue_tracker} />
    <UrlEntrie label="pull_request" data={pull_request} />
    <UrlEntrie label="financial_support" data={financial_support} />

    <slot />
</div>
