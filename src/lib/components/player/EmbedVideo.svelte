<script lang="ts">
	import { playing, update_time, video_id } from './EmbedVideoState';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { readable, writable } from 'svelte/store';
	import { current_time, duration, progress } from '$lib/stores/Time'
	// let cos = async () => {
	// 	const youtube = await Innertube.create({
	// 		fetch: async (input: RequestInfo | URL, init?: RequestInit) =>{
	// 			return fetch(input, {
	// 				...init,
	// 				headers: {
	// 					'Referrer-Policy': 'unsafe-url',
	// 				},
	// 				mode: 'cors'
	// 			})
	// 		}
	// 	});



	// 	// get the video info
	// 	// const videoInfo = await youtube.getInfo('f8OHybVhQwc');

	// 	// now convert to a dash manifest
	// 	// again - to be able to stream the video in the browser - we must proxy the requests through our own server
	// 	// to do this, we provide a method to transform the URLs before writing them to the manifest
	// 	// const manifest = videoInfo.toDash((url) => {
	// 	// 	// modify the url
	// 	// 	// and return it
	// //   console.log(url)
	// 	// 	return url;
	// 	// });

	// 	// const uri = 'data:application/dash+xml;charset=utf-8;base64,' + btoa(manifest);

	// 	// const videoElement = document.querySelector('audio');

	// 	// // @ts-ignore
	// 	// const player = dashjs.MediaPlayer().create();
	// 	// // @ts-ignore
	// 	// player.initialize(videoElement, uri, true);
	// };

	// let play = async () => {
	// 	var audio,
	// 		player,
	// 		url = 'https://livesim.dashif.org/dash/vod/testpic_2s/audio.mpd';

	// 	audio = document.querySelector('audio');
	// 	player = dashjs.MediaPlayer().create();
	// 	player.initialize(audio, url, true);
	// };

	let videoID = '';
	let is_paused = false;

	video_id.subscribe((value) => {
		if (videoID !== value) {
			playing.set(true);
			yt(value);
		}
		videoID = value;
	});

	playing.subscribe((value) => {
		if (is_paused !== value) {
			if (value && videoID.length) {
				resmue();
			} else {
				kill();
			}
		}
		is_paused = value;
	});

	// let yt = async (new_id: string) => {
	// 	let parent = document.querySelector('#ben');
	// 	parent.innerHTML = '';
	// 	let iframe = document.createElement('iframe');
	// 	iframe.src = `https://www.youtube.com/embed/${new_id}?autoplay=1`;
	// 	iframe.width = '560';
	// 	iframe.height = '315';
	// 	iframe.title = 'YouTube video plasr';
	// 	iframe.frameBorder = '0';
	// 	iframe.allow =
	// 		'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
	// 	iframe.allowFullscreen = true;
	// 	iframe.onload = () => {
	// 		let video = document.querySelector('.video-stream');
	// 		video.play();

	// 	};

	// 	parent?.appendChild(iframe);
	// };
	let player: any;
	
	

	let play_time:any;

	current_time.subscribe(value => {
		play_time = value;
	})

	var timer:any;

	// let time = new Date();

	onMount(() => {
		player = YouTubePlayer('video-player');
	});

	let yt = async (id: string) => {
		player.loadVideoById({
			videoId: id,
			startSeconds: 0.1,
			suggestedQuality: 'small'
		});

		player.playVideo();


		if(!timer) {
			timer = setInterval(async () => {;
			// time.setSeconds(await player.getCurrentTime())
			// jakw = time.toISOString().substring(14, 19);

			current_time.set(await player.getCurrentTime())
			progress.set(await player.getVideoLoadedFraction())
			duration.set(await player.getDuration())
			console.log(await player.getDuration())
			console.log(current_time)
			console.log(await player.getCurrentTime())
		}, 1000);
		}
	};

	export let kill = () => {
		// player = YouTubePlayer('video-player')
		clearInterval(timer)
		timer = null;
		console.log('dupa');

		player.pauseVideo();

		// let parent = document.querySelector('#ben');
		// parent.innerHTML = '<video class="" id="video-player" />';
	};

	export let resmue = () => {
		player.playVideo()
		if(!timer) {
			timer = setInterval(async () => {;
			// time.setSeconds(await player.getCurrentTime())
			// jakw = time.toISOString().substring(14, 19);
			current_time.set(await player.getCurrentTime())

			console.log(current_time)
			console.log(await player.getCurrentTime())
		},1000);
		}
	}


	update_time.subscribe((v:Array<boolean|number>) => {
		if (v[0]) {
			state(v[1])
			v[0] = false
		}
	})
	// const time = readable(0., async function start(set) {
	// const interval = setInterval(() => {
	// 	set(await player.getVideoLoadedFraction());
	// }, 1000);

	let state = async (time:number) => {
		 player.seekTo(Math.floor(time))
	}

</script>

<div class="relative top-0 right-0" id="ben">
	<video class="hidden " id="video-player" />
</div>


<!-- // <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe> -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/HmpSDVTzS0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- <button on:click={cos}>click me</button> -->
