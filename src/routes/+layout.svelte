<script>
    import { beforeNavigate } from '$app/navigation';

    import Header from '$lib/components/Header.svelte';
    import { REF_LOC } from '$lib/config';
    import { locale, setCurrentLocale } from 'svelte-intl-precompile';
    import '../app.css';
    import { getLocaleFromUrl } from './+layout';

    beforeNavigate(({ to }) => {
        if (to) $locale = getLocaleFromUrl(to) || REF_LOC;
    });
</script>

<Header />
<slot />
