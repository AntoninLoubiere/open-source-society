<script lang="ts">
    import { HEIGHT_HEADER, MAX_HEIGHT_HIDE_ON_SCROLL } from '$lib/config';
    import { convertRemToPixels } from '$lib/utils';

    import HeaderLink from './HeaderLink.svelte';

    let height_pixel = convertRemToPixels(HEIGHT_HEADER);
    let innerHeight: number = 0;

    let opened = true;

    let last_scroll = 0;
    function handle_scroll() {
        const scroll = window.pageYOffset;
        opened =
            innerHeight >= MAX_HEIGHT_HIDE_ON_SCROLL ||
            scroll < height_pixel ||
            scroll < last_scroll;

        last_scroll = scroll;
    }
</script>

<svelte:window bind:innerHeight on:scroll={handle_scroll} />

<div class="h-header-bar print:hidden">
    <header
        class="fixed top-0 left-0 right-0 z-50 flex h-header-bar -translate-y-header-bar items-center justify-between bg-white px-3 shadow-md transition-transform"
        class:opened
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
            <HeaderLink pathId="actors" label="actors" />
            <HeaderLink pathId="license" label="license" />
            <HeaderLink pathId="projects" label="projects" />
            <HeaderLink pathId="/tag" label="tags" />
        </nav>
        <div class="flex justify-end sm:w-52" />
    </header>
</div>

<style>
    .opened {
        @apply transform-none;
    }
</style>
