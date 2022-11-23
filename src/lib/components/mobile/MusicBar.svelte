<script lang="ts">
    import Title from "../both/Title.svelte";
	import BottomNavBar from "./BottomNavBarMobile.svelte";
	import BottomNavBarItem from "./micro/BottomNavBarItem.svelte";
    import Heart from "../icons/heart.svelte";
	import Play from "../icons/play.svelte";
    import { music_info } from '$lib/stores/Current_Playing';
	import { current_time, duration } from '$lib/stores/Time';

    const default_title = {
        size: '1.5rem',
        color: 'white',
        align: 'left'
    }

    export let bar = 0
    export let img = ''
    export let title = ''
    export let author = ''

    let duration_act: any;
    let start_time: any;

    duration.subscribe((v) => {
		duration_act = v;
	});

	current_time.subscribe((v) => {
		start_time = v;
		bar = v / duration_act;
	});

	let music: any;

	music_info.subscribe((v) => {
		music = v;
	});

</script>

<div class="block md:hidden m-1 bg-black rounded-xl mb-2">
    <section class="flex">
        <img src={music.img} alt="" class="h-12 w-12 m-2 rounded object-cover" />
        <div class="flex-1">
            <div class="title_overflow overflow-hidden my-2">
                <Title {...default_title} >{music.title}</Title>
            </div>
            <div class="-mt-2">
                <Title {...default_title} size="1.2rem" weight="Light">
                    {music.author}
                </Title>
            </div>
        </div>
        <div class="flex justify-end items-center pr-6 w-28">
            <Heart size={1.8}/>
            <div class="w-4"/>
            <Play size={1.8}/>
        </div>
    </section>
    
<div class="bottom-0 h-1 mx-2 rounded-xl" style="background-color: #7D7D7D;">
    <div style:width={`${bar * 100}%`} class="bottom-0 h-1 rounded-xl bg-white"/>
</div>

</div>

<style>
    .title_overflow {
        max-height: 1.35rem;
        text-overflow: ellipsis;
    }

</style>