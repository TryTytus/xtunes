<script lang="ts">
	import BlurBox from "$lib/components/both/BlurBox.svelte";
	import SearchItems from "$lib/components/both/SearchItems.svelte";
    import BestMatch from "$lib/components/desktop/BestMatch.svelte";
    import { searchResults } from '$lib/searchResults';
	import SearchIcon from '$lib/components/icons/search_icon.svelte';

    let videos:any = [];

    searchResults.subscribe(value => {
        videos = value
    })

    let seach_input = '';
	let input_element: HTMLElement;



	let search = async (event: Event) => {
		if (!seach_input) {
			return;
		}

		const data = await fetch(`/api/video/${seach_input}`).then((res) => res.json());

		searchResults.update((x) => {
			if (Array.isArray(data.results) && data.results.length) {
				const videos = data.results.filter((x:any) => x.type === 'Video');
				x = videos.slice(0, 7);
			}
			return x;
		});

		// const url = new URL(window.location.toString())
		// url.pathname = '/search/' + seach_input
		// window.history.pushState(null, '', url.toString());
	};

</script>


<section class="grid md:pt-6 pb-4 px-4 lg:py-10 lg:px-10">

    <BestMatch
    img={videos[0]?.thumbnails[0]?.url}
    author={videos[0]?.author.name}
    title={videos[0]?.title.text}
    />
    <div class="md:hidden">
		<input
            on:input={search}
            bind:value={seach_input}
			class="search focus:outline-none box-border w-full px-12 mt-6 rounded-full h-14 bg-white"
		/>
		<div class="relative pointer-events-none bottom-10 left-4">
			<SearchIcon />
		</div>
	</div>

    <SearchItems />

</section>


<style scoped>
    section {
        position: fixed;
        width: 100%;
        top: 12vh;
        bottom: 9rem;
        grid-template-rows: 6rem 1fr;
    }

    @media (min-width: 1024px) {
    section {
        position: relative;
        width: auto;
        place-content: center;
        height: 80vh;
        grid-template-columns: 30vw 1fr;
        grid-template-rows: 23rem;
        gap: 2rem;
    }
}

@media  (min-width: 768px) {
    section {
        position: relative;
        width: auto;
        top: 0;
        bottom: 0;
        grid-template-rows: 23rem;
    }
}
@media  (min-width: 768px) and (max-width: 1024px) {
    section {
        position: fixed;
        right: 0;
        left: 18rem;
        top: 12vh;
        grid-template-rows: 85%;
    }
}
</style>

