<script lang="ts">
	import Logo from '../icons/logo.svelte';
	import Home from '../icons/desktop_home.svelte';
	import DesktopPerson from '../icons/desktop_person.svelte';
	import SearchIcon from '../icons/search_icon.svelte';
	import { searchResults } from '$lib/searchResults';

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
</script>

<header class="hidden md:flex h-20 px-2 justify-between items-center">
	<Logo />

	<div>
		<input
			bind:value={seach_input}
			on:input={search}
			class="search focus:outline-none box-border px-12 mt-6 rounded-full h-14 bg-white"
		/>
		<div class="relative pointer-events-none bottom-10 left-4">
			<SearchIcon />
		</div>
	</div>
	<div class="p-2 flex gap-x-4">
		<a href="#">
			<Home />
		</a>
		<a href="#">
			<DesktopPerson />
		</a>
	</div>
</header>

<style scoped>
	header {
		grid-area: header;
	}

	.search {
		width: clamp(10rem, 30vw, 40rem);
	}
</style>
