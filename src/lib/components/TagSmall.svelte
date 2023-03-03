<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { getColor } from '$lib/tags/color';
    import { t } from 'svelte-intl-precompile';

    export let tag: string;

    $: color = getColor(tag);

    function redirect() {
        goto(`${base}/${$t(`tags.${tag}.url`)}`)
    }
</script>

<li
class="rounded-full border font-semibold text-{color}-500 bg-{color}-50 border-{color}-500 text-xs px-1 py-0.5">
<!-- svelte-ignore a11y-click-events-have-key-events because there is a workaround, you can click on the card and then click on the tags or go to tags directly -->
<div
    class="z-20"
    on:click|preventDefault={redirect}
    title={$t(`tag.description.${tag}`)}
>
        {$t(`tag.${tag}`)}
    </div>
</li>
