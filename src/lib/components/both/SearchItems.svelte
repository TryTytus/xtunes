<script>
	// @ts-nocheck
	import BlurBox from './BlurBox.svelte';
	import SearchItem from './SearchItem.svelte';
	import Title from './Title.svelte';
	import { searchResults } from '$lib/searchResults';

	let videos = [];

	searchResults.subscribe((value) => {
		videos = value;
	});
</script>

<div class="h-full overflow-hidden">
	<BlurBox Class="px-4 lg:px-10 pt-2 h-full flex flex-col overflow-y-scroll overflow-x-hidden">
		<div class="h-10 flex items-center">
			<Title color="white" size="1.3rem">UTWORY</Title>
		</div>
		<section class=" ">
			<div class="lg:hidden">
				<SearchItem item={videos[0]} />
			</div>
			<div class="flex flex-col">
				{#if videos.length}
					{#each videos.slice(1) as video}
						<SearchItem item={video} />
					{/each}
				{/if}
			</div>
		</section>
	</BlurBox>
</div>

<style>

</style>
