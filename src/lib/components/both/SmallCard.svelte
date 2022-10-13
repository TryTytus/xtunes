<script lang="ts">
	import Title from "./Title.svelte";

    export let img = ''
    

</script>

<article class="p-2 flex">
<img class="h-14 rounded-md" src={img} alt="" srcset="">
<div class="px-2">
    <Title size="1.2rem" color="white">dssdsd</Title>
    <div class="h-1"/>
    <Title weight="Light" color="white">sdffdf</Title>
</div>
</article>

<style scoped>
	article {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 34.88%, rgba(0, 0, 0, 0.4) 157.2%);
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		/* Note: backdrop-filter has minimal browser support */

		border-radius: 0.8rem;
	}
</style>
