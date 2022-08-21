<script lang="ts">
import { browser } from "$app/env";

import { goto } from "$app/navigation";
import { getLocaleFromNavigator } from "svelte-intl-precompile";


    if (browser) {
        const locale = getLocaleFromNavigator()?.match(/([a-z]+)-?.*/)?.[1];
        console.log(locale, `/${locale}`);
        if (locale) goto(`/${locale}`);
    }
</script>

Available locales:
<ul>
    <li><a sveltekit:prefetch href="/en">English</a></li>
    <li><a sveltekit:prefetch href="/fr">Français</a></li>
</ul>