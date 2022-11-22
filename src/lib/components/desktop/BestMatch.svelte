<script lang="ts">
	import Title from '../both/Title.svelte';

	export let title = 'KILL EM ALL';
	export let author = 'Metallica';
	export let img = '/hamer.jpeg';
</script>

<!-- {#if title && author && img} -->
	<article class="hidden lg:flex flex-col justify-between rounded-3xl px-10 pt-8 pb-6">
		<Title color="white" size="1.2rem">NAJLEPSZY WYNIK</Title>
		<img class="h-40 w-40 rounded-md" src={img} alt="" srcset="" />
		<div>
			<div class="max-h-36 text-ellipsis overflow-hidden">
				<Title line_height="2.2rem" color="white" size="2rem">{title}</Title>
			</div>
			<Title color="#8A8A8A" weight="Light" size="1.2rem">{author}</Title>
		</div>
	</article>
<!-- {/if} -->

<style scoped>
	article {
		background-color: #232323;
	}
</style>
