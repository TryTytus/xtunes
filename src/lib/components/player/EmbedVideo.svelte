<script lang="ts">
	import { playing, video_id } from './EmbedVideoState';
	import YouTubePlayer from 'youtube-player';
	import { onMount } from 'svelte';
	import { readable } from 'svelte/store';
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

	let countTime = (secounds:any) => {
		let time = new Date();
		time.setSeconds(0)
		time.setMinutes(0)

		time.setSeconds(secounds)
		return time.toISOString().substring(14, 19)
	}

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
				yt(videoID);
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

	let jakw = '0:00';

	$: play_time = jakw;

	var myInterval:any;

	// let time = new Date();

	onMount(() => {
		player = YouTubePlayer('video-player');
	});

	let yt = (id: string) => {
		player.loadVideoById({
			videoId: id,
			startSeconds: 0.1,
			suggestedQuality: 'small'
		});

		player.playVideo();




		if(!myInterval) {
			myInterval = setInterval(async () => {;
			// time.setSeconds(await player.getCurrentTime())
			// jakw = time.toISOString().substring(14, 19);

			jakw = countTime(await player.getCurrentTime())
			console.log(jakw)
			console.log(await player.getCurrentTime())
		}, 1000);
		}
	};

	let kill = () => {
		// player = YouTubePlayer('video-player')
		clearInterval(myInterval)
		myInterval = null;
		console.log('dupa');

		player.pauseVideo();

		// let parent = document.querySelector('#ben');
		// parent.innerHTML = '<video class="" id="video-player" />';
	};

	let resmue = () => {
		player.playVideo()
		if(!myInterval) {
			myInterval = setInterval(async () => {;
			// time.setSeconds(await player.getCurrentTime())
			// jakw = time.toISOString().substring(14, 19);
			jakw = countTime(await player.getCurrentTime())

			console.log(jakw)
			console.log(await player.getCurrentTime())
		}, 1000);
		}
	}

	// const time = readable(0., async function start(set) {
	// const interval = setInterval(() => {
	// 	set(await player.getVideoLoadedFraction());
	// }, 1000);

	let state = async () => {
		// player.seekTo(20);

		if (player.getCurrentTime()) {
			player.getCurrentTime().then(console.log)
		}
	};
</script>

<div class="absolute z-50" id="ben">
	<video class="hidden" id="video-player" />
</div>

<button on:click={kill} class="absolute left-0  text-white">click</button>

 <h1 class="absolute top-0 left-12 text-white">
	{play_time}
 </h1>
<button on:click={resmue} class="absolute right-0 text-white">eeee</button>

<!-- // <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe> -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/HmpSDVTzS0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- <button on:click={cos}>click me</button> -->
