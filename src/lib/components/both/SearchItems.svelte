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
<BlurBox Class="px-4 lg:px-10 pt-2">
    <div class="h-10 flex items-center">
        <Title color="white" size="1.3rem">UTWORY</Title>
    </div>
    <section>
        <div class="lg:hidden">
            <SearchItem item={videos[0]}/>
        </div>
        {#if videos.length}
            {#each videos.slice(1) as video}
                <SearchItem item={video} />
            {/each}
        {/if}
    </section>
</BlurBox>