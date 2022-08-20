<script lang="ts">
    export let data: {available_lang: Record<string, string>};

    console.log(data.available_lang)
</script>

Available in :
<ul>
    {#each Object.keys(data.available_lang) as lang}
        <li><a href="/{data.available_lang[lang]}">{lang}</a></li>
    {/each}
</ul>