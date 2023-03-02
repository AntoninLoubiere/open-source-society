<script context="module">
    import a from '../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck

    import BaseLayout from './BaseLayout.svelte';
    export let title;
    export let summary;
    export let img;
    export let edit_url;
    export let last_modification;
</script>

<BaseLayout {title} {summary} {img} {edit_url} {last_modification}><slot /></BaseLayout>
