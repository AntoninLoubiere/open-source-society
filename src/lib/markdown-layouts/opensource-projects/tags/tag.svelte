<script>
    import PageCardList from "$lib/components/PageCardList.svelte";
    import BaseLayout from "$lib/markdown-layouts/BaseLayout.svelte";
    import { getColor } from "$lib/tags/color";

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let edit_url;
    /** @type {string} */
    export let last_modification;
    /** @type {string} */
    export let tag;
    /** @type {string[]} */
    export let files;
    $: color = getColor(tag);
</script>

<BaseLayout {title} {edit_url} {last_modification}>
    <h1 class="underline decoration-4 decoration-{color}-500">{title}</h1>
    <slot/>
    <PageCardList pagesIds={files} />
</BaseLayout>
