<script lang="ts">
import { base } from '$app/paths';

    import { page } from '$app/stores';

    import A from '$lib/components/a.svelte';

    import BaseLayout from '$lib/markdown-layouts/BaseLayout.svelte';
    import { t } from 'svelte-intl-precompile';

    export let data: { available_lang: Record<string, string>; backPath: string };
    $: langs = Object.keys(data.available_lang);
    $: lang = $t(`lang.${$page.params.lang}`).toLocaleLowerCase();
</script>

<BaseLayout title={$t('projects.not-found.page.title')}>
    <h1>{$t('projects.not-found.title', { values: { lang } })}</h1>
    {$t(langs.length ? 'projects.not-found.body.exists' : 'projects.not-found.body', {
        values: { lang },
    })}
    {#if langs.length}
        <ul>
            {#each langs as lang}
                <li><A href="{base}/{data.available_lang[lang]}">{$t(`lang.${lang}`)}</A></li>
            {/each}
        </ul>
    {/if}
    <div class="text-lg">
        <A href={base + ('/' + data.backPath || '/')}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="inline h-5 w-5"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a.75.75 0 01-.75.75H4.612l5.158 4.96a.75.75 0 11-1.04 1.08l-6.5-6.25a.75.75 0 010-1.08l6.5-6.25a.75.75 0 111.04 1.08L4.612 9.25H17.25A.75.75 0 0118 10z"
                    clip-rule="evenodd"
                />
            </svg>

            {$t('back')}</A
        >
    </div>
</BaseLayout>
