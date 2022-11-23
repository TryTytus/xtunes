<script lang="ts">
	import BlurBox from "$lib/components/both/BlurBox.svelte";
	import SearchItems from "$lib/components/both/SearchItems.svelte";
    import BestMatch from "$lib/components/desktop/BestMatch.svelte";
    import { searchResults } from '$lib/searchResults';
	import SearchIcon from '$lib/components/icons/search_icon.svelte';
	import EmbedVideo from "$lib/components/player/EmbedVideo.svelte";
	import { onMount } from "svelte";

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
				x = videos;
			}
			return x;
		});

		// const url = new URL(window.location.toString())
		// url.pathname = '/search/' + seach_input
		// window.history.pushState(null, '', url.toString());
	};

    // let yt = () => {
	// 	let parent = document.querySelector('#ben')
	// 	parent.innerHTML = ''
	// 	let iframe = document.createElement('iframe')
	// 	iframe.src = 'https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1'
	// 	iframe.width = '560'
	// 	iframe.height = '315'
	// 	iframe.title = 'YouTube video player'
	// 	iframe.frameBorder = '0'
	// 	iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
	// 	iframe.allowFullscreen = true
	// 	iframe.onload = () => {
	// 		let video = document.querySelector('.video-stream')
	// 		video.play()
	// 	}
	// 	parent?.appendChild(iframe)
	// }

</script>

<div class="p-4 master h-full overflow-hidden">
<section class="flex flex-col h-full md:grid overflow-hidden">

    <BestMatch
    img={videos[0]?.thumbnails[0]?.url}
    author={videos[0]?.author.name}
    title={videos[0]?.title.text}
    />
    <div class="md:hidden ">
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

    <EmbedVideo/>
    <!--<iframe autoplay class="" width="560" height="315" src="https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
</section>
</div>

<style scoped>

section {
        grid-template-rows: min-content 1fr;
    }


@media  (min-width: 768px) and (max-width: 1024px) {
    section {
        grid-template-rows: 1fr;
    }
}

@media (min-width: 1024px) {
    section {
        place-content: center;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 23rem;
        gap: 2rem;
    }
}

    /* section {

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
} */
</style>

