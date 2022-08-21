<script lang="ts">
    export let href: string;
</script>

<a sveltekit:prefetch {href} class="hover:text-secondary hover:underline uppercase font-bold"
    ><slot /></a
>
