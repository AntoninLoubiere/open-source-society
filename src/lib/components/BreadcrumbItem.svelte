<script lang="ts">
    export let href: string;
</script>

<a sveltekit:prefetch {href} class="font-bold uppercase hover:text-secondary hover:underline"
    ><slot /></a
>
