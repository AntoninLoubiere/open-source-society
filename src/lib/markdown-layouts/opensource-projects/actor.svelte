<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck

    import BaseLayout from '../BaseLayout.svelte';
    import Tags from '../../components/Tags.svelte';
    export let title;
    export let edit_url;
    export let last_modification;
    export let tags;
</script>

<BaseLayout {title} {edit_url} {last_modification}>
    <Tags {tags} />
    <slot />
</BaseLayout>
