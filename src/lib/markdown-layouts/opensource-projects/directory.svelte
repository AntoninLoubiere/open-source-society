<script context="module">
  import a from '../html_components/a.svelte';
  export { a };
</script>

<script>
  // @ts-nocheck
    import '../markdown.css';

    export let title;
</script>

<svelte:head>
  <title>{title} - Open Source Society</title>
</svelte:head>

<article class="markdown"><slot /></article>
