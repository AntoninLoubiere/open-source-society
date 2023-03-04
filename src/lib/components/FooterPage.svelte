<script lang="ts">
    import GithubEditButton from '$lib/markdown-layouts/_GithubEditButton.svelte';
    import { t } from 'svelte-intl-precompile';

    export let last_modification: string | undefined = undefined;
    export let edit_url: string | undefined = undefined;

    $: lastModificationDate = new Date(last_modification || '');
</script>

{#if last_modification || edit_url}
    <hr class="!mt-8 !mb-4 !border-gray-400" />
    <footer class="flex flex-wrap justify-between gap-2 ">
        {#if edit_url}
            <GithubEditButton url={edit_url} />
        {/if}
        {#if last_modification}
            {$t('projects.last_modification', { values: { lastModificationDate } })}
        {/if}
    </footer>
{/if}
