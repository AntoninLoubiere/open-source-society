<script lang="ts">
    import HeaderLink from './HeaderLink.svelte';
</script>

<div class="h-10 print:hidden">
    <header
        class="fixed top-0 left-0 right-0 flex h-10 items-center justify-between bg-white px-3 shadow-md"
    >
        <div class="text-xl font-bold sm:w-52">
            <HeaderLink pathId="" activeExact={true}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            </HeaderLink>
        </div>
        <nav class="hidden w-52 justify-evenly gap-2 sm:flex">
            <HeaderLink pathId="projects" label="projects" />
        </nav>
        <div class="flex justify-end sm:w-52" />
    </header>
</div>
