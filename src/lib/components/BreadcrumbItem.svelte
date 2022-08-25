<script lang="ts">
import { base } from "$app/paths";


    export let href: string;
</script>

<a sveltekit:prefetch href={base + href} class="font-bold uppercase hover:text-secondary hover:underline"
    ><slot /></a
>
