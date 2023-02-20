<script lang="ts">
    import { base } from '$app/paths';

    export let href: string;
</script>

<a
    data-sveltekit-preload-code="viewport" data-sveltekit-preload-data="hover"
    href={base + href}
    class="font-bold uppercase hover:text-secondary hover:underline"><slot /></a
>
