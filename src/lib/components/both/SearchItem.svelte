<script lang="ts">
	import Title from "./Title.svelte";
    import More from "../icons/more.svelte";
	import SearchItems from "./SearchItems.svelte";
	import { video_id } from "../player/EmbedVideoState";

    export let item:any;

    let play_result = () => {
        video_id.set(item.id)
    }

</script>
{#if item}
<article id="article" class="flex justify-between my-4">
    <div class="flex items-center">
        <button on:click={play_result}>
            <img class="w-10 h-10 rounded-md object-cover" src={item.thumbnails[0]?.url} alt="" srcset="">
        </button>
        <div class="ml-4 flex align-middle flex-col">
            <div class="" id="title">
                <Title size="1rem" weight="Light" color="white" text_overflow="truncate">
                    {item.title.text}
                </Title>
            </div>
            <div class="-mt-1 w-fit">
                <Title size="0.8rem" color="#8A8A8A" weight="Light">
                    {item.author.name}
                </Title>
            </div>
        </div>
    </div>
    <div class="flex items-center">
        <Title size="0.8rem" color="#DBD7D7" weight="Light">
            {item.duration.text}
        </Title>
        <div class="w-2"/>
        <div class="rotate-90 md:rotate-0 flex items-center h-full">
            <More/>
        </div>
    </div>
</article>

{/if}

<style scoped>

#title {
    max-width: 10rem;
}


@media  (min-width: 1024px) {
    #title {
        max-width: 20rem;
    }
}

</style>