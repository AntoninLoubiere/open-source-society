<script>
    import BaseLayout from "$lib/markdown-layouts/BaseLayout.svelte";
    import TagList from "$lib/components/generated/TagList.svelte";

    /** @type {string} */
    export let title;
    /** @type {string} */
    export let edit_url;
    /** @type {string} */
    export let last_modification;

</script>

<BaseLayout {title} {edit_url} {last_modification} showTitle={true}>
    <slot/>
    <TagList/>
</BaseLayout>
