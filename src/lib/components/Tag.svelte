<script lang="ts">
    import { t } from 'svelte-intl-precompile';

    export let tag: string;

    import tagColors from "./tagColors.json"

    $: color = (tagColors as Record<string, Record<string, string>>)[tag] || tagColors.app;
</script>

<li class="rounded-full border py-1 px-2 font-semibold {color.text} {color.bg} {color.border}">
    {$t(`tag.${tag}`)}
</li>
