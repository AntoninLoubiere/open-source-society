<script context="module">
  import a from './html_components/a.svelte';
  export { a };
</script>

<script>
    // @ts-nocheck
    export let title;
    $: titleHead = title ? title + " - Open Source Society" : "Open Source Society";

    import './markdown.css'
</script>


<svelte:head>
    <title>{titleHead}</title>
</svelte:head>

<article class="markdown">
    <slot></slot>
</article>