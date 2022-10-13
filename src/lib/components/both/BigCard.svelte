<script>
	import Title from "./Title.svelte";
    export let title = 'KILL EM ALL'
    export let songs_number = 0
    export let img = 'hamer.jpeg'
</script>

<article class="w-44 p-1 md:w-56 flex flex-col items-center rounded-3xl">
<img class="w-11/12 h-auto rounded-xl mt-2" src={img} alt="">
<div class="w-full p-2">
    <Title color="white" size="1rem">
        {title}
    </Title>
    <Title color="grey" size="0.7rem">
        {songs_number} utwory
    </Title>
</div>
</article>



<style scoped>
	article {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 34.88%, rgba(0, 0, 0, 0.4) 157.2%);
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		/* Note: backdrop-filter has minimal browser support */
        
	}

</style>
