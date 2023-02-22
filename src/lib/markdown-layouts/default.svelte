<script context="module">
    import a from '../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck

    import BaseLayout from './BaseLayout.svelte';
    export let title;
    export let edit_url;
    export let last_modification;
</script>

<BaseLayout {title} {edit_url} {last_modification}><slot /></BaseLayout>
