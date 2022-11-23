<script lang="ts">
	import { music_info } from '$lib/stores/Current_Playing';
	import { current_time, duration } from '$lib/stores/Time';
	import Title from '../both/Title.svelte';
	import HeartFilled from '../icons/heart_filled.svelte';
	import PlayingAnimation from '../icons/playing_animation.svelte';
	import PlayNow from '../icons/play_now.svelte';
	import PlayOrPause from '../icons/play_or_pause.svelte';
	import SkipLeft from '../icons/skip_left.svelte';
	import SkipRight from '../icons/skip_right.svelte';
	import { update_time } from '../player/EmbedVideoState';
	import { countTime } from '$lib/hooks/countTime';

	export let duration_act: any;
	let bar = 0;

	let w: number, x: number, element:HTMLElement, leftw:any;

	let start_time: any;
	// progress.subscribe(value => {
	//     bar = Math.floor(value * 100);
	//     console.log(Math.floor(value * 100))
	// })


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

	let handleClick = (e: any) => {
        leftw = element.offsetLeft;
		let precentage = Math.round(((x - leftw) / w) * 100) / 100;
        console.log(precentage)
        // console.log(ox)
        // console.log(w)

        // console.log(precentage)
        //precentage = precentage === -0 ? 0 : precentage
        let seek_to = Math.round(precentage * duration_act)

        // console.log(seek_to)
        update_time.set([true, seek_to])
	};

	let mouseMove = (e: any) => {
		x = e.pageX;
        
        
	};
</script>

<nav class="w-full h-20 hidden md:grid fixed z-50 bottom-0 left-0 right-0 bg-white">
	<div class="flex items-center pl-4 gap-x-3">
		<img class="w-16 h-16 object-cover" src={music?.img} alt="" />
		<div class="h-full pt-2">
			<Title weight="Medium" size="1.2rem">{music?.title}</Title>
			<Title weight="Light" size="0.9rem">{music?.author}</Title>
		</div>
	</div>
	<div>
		<div class="justify-center items-center pb-2 flex h-14 gap-x-4">
			<SkipLeft />
			<div class="mt-2">
				<PlayOrPause />
			</div>
			<SkipRight />
		</div>
		<section class="grid items-center">
			<Title>{countTime(start_time)}</Title>
			<div
				on:mousemove={mouseMove}
				on:click={handleClick}
				bind:clientWidth={w}
                bind:this={element}
				class="bottom-0 h-3 mx-2 rounded-xl relative z-50"
				style="background-color: #D9D9D9;"
			>
				<div
					style:min-width="1%"
					style:width={`${bar * 100}%`}
					class=" bottom-0 h-3 rounded-xl bg-black pointer-events-none"
				/>
			</div>
			<Title>{countTime(duration_act)}</Title>
		</section>
	</div>
	<div class="flex items-center justify-end p-6 gap-x-8">
		<PlayingAnimation />
		<HeartFilled />
	</div>
</nav>

<style scoped>
	nav {
		grid-template-columns: 25% 1fr 25%;
	}

	section {
		grid-template-columns: auto 1fr auto;
	}
</style>
