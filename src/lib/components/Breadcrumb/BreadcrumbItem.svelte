<script lang="ts">
    import { base } from '$app/paths';

    export let href: string;
    export let colored = false;
</script>

<a
    data-sveltekit-preload-code="viewport"
    data-sveltekit-preload-data="hover"
    href={base + href}
    class="inline-block font-bold uppercase hover:text-secondary hover:underline"
    class:text-primary={colored}><slot /></a
>
