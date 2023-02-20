<script lang="ts">
    import { browser } from '$app/environment';

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
    <li><a data-sveltekit-preload-code="viewport" data-sveltekit-preload-data="hover" href="{base}/en">English</a></li>
    <li><a data-sveltekit-preload-code="viewport" data-sveltekit-preload-data="hover" href="{base}/fr">Français</a></li>
</ul>
