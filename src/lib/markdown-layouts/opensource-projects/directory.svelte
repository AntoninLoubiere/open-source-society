<script context="module">
    import a from '../../components/a.svelte';
    export { a };
</script>

<script>
    // @ts-nocheck
    import BaseLayout from '../BaseLayout.svelte';
    export let title;
</script>

<BaseLayout {title}><slot /></BaseLayout>
