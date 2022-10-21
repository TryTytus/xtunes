<script>
// @ts-nocheck
	import BlurBox from "./BlurBox.svelte";
	import SearchItem from "./SearchItem.svelte";
	import Title from "./Title.svelte";
    import { searchResults } from '$lib/searchResults';

    let videos = [];

    searchResults.subscribe(value => {
        videos = value
    })

</script>
<BlurBox Class="px-4 lg:px-10 py-2">
    <div class="h-10 flex items-center">
        <Title color="white" size="1.3rem">UTWORY</Title>
    </div>
    <section>
        {#if videos.length}
            {#each videos as video}
                <SearchItem item={video} />
            {/each}
        {/if}
    </section>
</BlurBox>