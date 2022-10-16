<script lang="ts">
	import Title from '../both/Title.svelte';

    export let title = ''
    export let author = ''
    export let img = ''
</script>

<article class="hidden lg:flex flex-col justify-between rounded-3xl px-10 pt-8 pb-6">
	<Title color="white" size="1.2rem">NAJLEPSZY WYNIK</Title>
	<img class="h-40 w-40 rounded-md" src="/hamer.jpeg" alt="" srcset="" />
	<div>
		<Title color="white" size="2rem">KILL EM ALL</Title>
        <Title color="#8A8A8A" weight="Light" size="1.2rem">Metallica</Title>
	</div>
</article>

<style scoped>
	article {
		background-color: #232323;
	}
</style>
