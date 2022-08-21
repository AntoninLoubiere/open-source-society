<script lang="ts">
    import { t } from 'svelte-intl-precompile';

    export let data: URLField;
</script>

{#if data?.url}
    <a href={data.url}>{data.name}</a>
{:else}
    {data?.name || $t('projects.unknown')}
{/if}
