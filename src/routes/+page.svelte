<script lang="ts">
    import { browser } from '$app/env';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { getLocaleFromNavigator } from 'svelte-intl-precompile';

    if (browser) {
        const locale = getLocaleFromNavigator()?.match(/([a-z]+)-?.*/)?.[1];
        if (locale) goto(`${base}/${locale}`);
    }
</script>

Available locales:
<ul>
    <li><a sveltekit:prefetch href="{base}/en">English</a></li>
    <li><a sveltekit:prefetch href="{base}/fr">Français</a></li>
</ul>
