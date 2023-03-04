<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck

    import BaseLayout from '../BaseLayout.svelte';
    import Tags from '../../components/Tags.svelte';
    export let title;
    export let summary;
    export let img;
    export let edit_url;
    export let last_modification;
    export let tags;
</script>

<svelte:head>
    {#if img}
        <meta
            property="og:image:alt"
            content={$t('projects.logo.desc', { values: { project: title } })}
        />
    {/if}
</svelte:head>

<BaseLayout {title} {summary} {img} {edit_url} {last_modification}>
    <Tags {tags} />
    <slot />
</BaseLayout>
