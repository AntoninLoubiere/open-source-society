<script>
    import BaseLayout from '$lib/markdown-layouts/BaseLayout.svelte';
    import TagList from '$lib/components/generated/TagList.svelte';

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let edit_url;
    /** @type {string} */
    export let last_modification;
    /** @type {string} */
    export let summary;
    /** @type {string} */
    export let img;
</script>

<BaseLayout {title} {summary} {img} {edit_url} {last_modification} showTitle={true}>
    <slot />
    <TagList />
</BaseLayout>
