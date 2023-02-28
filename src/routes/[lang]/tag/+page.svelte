<script lang="ts">
    import { base } from "$app/paths";
    import BreadcrumbItem from "$lib/components/Breadcrumb/BreadcrumbItem.svelte";
    import BreadcumpSep from "$lib/components/Breadcrumb/BreadcrumbSep.svelte";
    import BreadcumpWrapper from "$lib/components/Breadcrumb/BreadcrumbWrapper.svelte";
    import FooterPage from "$lib/components/FooterPage.svelte";
    import WindowsLayout from "$lib/components/WindowsLayout.svelte";
    import {t, locale} from "svelte-intl-precompile"
    import TagElement from "./TagElement.svelte";

</script>

<WindowsLayout title={$t("tags")}>
    <BreadcumpWrapper>
        <BreadcrumbItem href="/{$locale}"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
            </svg></BreadcrumbItem
        >
        <BreadcumpSep />
        <BreadcrumbItem href="/{$locale}/tag" colored>{$t('tags')}</BreadcrumbItem>
    </BreadcumpWrapper>
    <h1>{$t("tags")}</h1>
    <p>{$t(`tags.list-description`)}</p>
    <ul>
        <TagElement tag="actor"/>
        <ul>
                <TagElement tag="fondation"/>
                <TagElement tag="private-company"/>
        </ul>
        <TagElement tag="project"/>
        <ul>
                <TagElement tag="app"/>
                <TagElement tag="desktop"/>
                <ul>
                    <TagElement tag="windows"/>
                    <TagElement tag="linux"/>
                    <TagElement tag="macos"/>
                </ul>
                <TagElement tag="phone"/>
                <ul>
                    <TagElement tag="android"/>
                    <TagElement tag="ios"/>
                </ul>
                <TagElement tag="office-suite"/>
                <ul>
                    <TagElement tag="browser"/>
                </ul>
        </ul>
        <TagElement tag="license"></TagElement>
    </ul>
    <FooterPage edit_url="https://github.com/AntoninLoubiere/open-source-society/blob/main/src/routes/[lang]/tag/+page.svelte" last_modification="2023-02-28T18:18:03.518Z">
    </FooterPage>
</WindowsLayout>
