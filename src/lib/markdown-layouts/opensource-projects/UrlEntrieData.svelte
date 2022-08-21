<script lang="ts">
    import { t } from 'svelte-intl-precompile';
    import A from '$lib/components/a.svelte';

    export let data: FrontmatterUrl | undefined;
</script>

{#if data?.url}
    <A href={data.url}>{data.name}</A>
{:else}
    {data?.name || $t('projects.unknown')}
{/if}
