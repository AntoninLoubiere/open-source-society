<script>
    import { beforeNavigate } from '$app/navigation';

    import Header from '$lib/components/Header.svelte';
    import { REF_LOC } from '$lib/config';
    import { locale } from 'svelte-intl-precompile';
    import '../app.css';
    import { _getLocaleFromUrl } from './+layout';

    beforeNavigate(({ to }) => {
        if (to?.url) $locale = _getLocaleFromUrl(to.url) || REF_LOC;
    });
</script>

<Header />
<slot />
