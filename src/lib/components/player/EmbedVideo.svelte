<script lang="ts">
	import { playing, video_id } from './EmbedVideoState';

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

	let kill = () => {
		let parent = document.querySelector('#ben');
		parent.innerHTML = '';
	}

	video_id.subscribe((value) => {
		if (videoID !== value) {
			playing.set(true)
			yt(value)
		}
		videoID = value;
	});

	playing.subscribe(value => {
		if (is_paused !== value) {
			if (value && videoID.length) {
			yt(videoID)
		}
		 else {
			kill()
		}
		}
		is_paused = value
	})

	let yt = async (new_id: string) => {
		let parent = document.querySelector('#ben');
		parent.innerHTML = '';
		let iframe = document.createElement('iframe');
		iframe.src = `https://www.youtube.com/embed/${new_id}?autoplay=1`;
		iframe.width = '560';
		iframe.height = '315';
		iframe.title = 'YouTube video plasr';
		iframe.frameBorder = '0';
		iframe.allow =
			'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
		iframe.allowFullscreen = true;
		iframe.onload = () => {
			let video = document.querySelector('.video-stream');
			video.play();
			
		};

		parent?.appendChild(iframe);
	};
</script>

<div id="ben" class="hidden" />

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe> -->


<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/HmpSDVTzS0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- <button on:click={cos}>click me</button> -->
