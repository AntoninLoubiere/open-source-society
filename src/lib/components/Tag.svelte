<script lang="ts">
    import { base } from '$app/paths';
    import { getColor } from '$lib/tags/color';
    import { t } from 'svelte-intl-precompile';

    export let tag: string;
    export let small = false;

    $: color = getColor(tag);
</script>

<a
    href="{base}/{$t(`tags.${tag}.url`)}"
    data-sveltekit-preload-data="hover"
    data-sveltekit-preload-code="hover"
    title={$t(`tag.description.${tag}`)}
>
    <li
        class="rounded-full border font-semibold text-{color}-500 bg-{color}-50 border-{color}-500"
        class:text-xs={small}
        class:px-1={small}
        class:py-0.5={small}
        class:py-1={!small}
        class:px-2={!small}
    >
        {$t(`tag.${tag}`)}
    </li>
</a>
