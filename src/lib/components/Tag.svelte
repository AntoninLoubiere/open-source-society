<script lang="ts">
    import { base } from '$app/paths';
    import { getColor } from '$lib/tags/color';
    import { t } from 'svelte-intl-precompile';

    export let tag: string;

    $: color = getColor(tag);
</script>

<li
    class="rounded-full border font-semibold text-{color}-500 bg-{color}-50 border-{color}-500 py-1 px-2"
>
    <a
        href="{base}/{$t(`tags.${tag}.url`)}"
        data-sveltekit-preload-data="hover"
        data-sveltekit-preload-code="hover"
        title={$t(`tag.description.${tag}`)}
    >
        {$t(`tag.${tag}`)}
    </a>
</li>
