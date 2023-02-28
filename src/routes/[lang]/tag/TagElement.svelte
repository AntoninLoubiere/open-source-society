<script lang="ts">
    import { base } from "$app/paths";
    import { getColor } from "$lib/tags/color";
    import {t,locale} from "svelte-intl-precompile"
    export let tag: string;

    let color = getColor(tag);
</script>

<li><a href="{base}/{$locale}/tag/{tag}" class="hover:underline hover:text-primary" data-sveltekit-preload-code="viewport" data-sveltekit-preload-data="hover">
    <b class="underline decoration-{color}-500 decoration-2">{$t(`tag.${tag}`)}</b>: {$t(`tag.description.${tag}s`)}
</a>
</li>


