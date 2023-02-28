<script lang="ts">
    export let title: string;

    import '../markdown-layouts/markdown.css';

    $: titleHead = title ? title + ' - Open Source Society' : 'Open Source Society';
</script>

<svelte:head>
    <title>{titleHead}</title>
</svelte:head>

<div class="min-h-full-content bg-primary-variant-50">
    <div class="grid gap-4 lg:grid-cols-page-layout-lg lg:p-4 xl:grid-cols-page-layout-xl">
        <div class="hidden xl:block" />
        <section
            class="markdown mx-auto h-min w-full min-w-min max-w-[125ch] bg-white p-4 pt-2 lg:rounded-xl lg:border"
        >
            <slot />
        </section>
        <div class="prose hidden lg:block">
            <slot name="sidebar" />
        </div>
    </div>
</div>
