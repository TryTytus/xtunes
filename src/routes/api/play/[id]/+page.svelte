<script lang="ts">

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



	import EmbedVideo from "$lib/components/player/EmbedVideo.svelte";
	import { playing, video_id } from "$lib/components/player/EmbedVideoState";


	let change = () => {
		video_id.set('ZEMBDKMtHqM')
	}

	let pause = () => {
		playing.update(x => !x)
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


	let yt = async () => {
		let parent = document.querySelector('#ben')
		parent.innerHTML = ''
		let iframe = document.createElement('iframe')
		iframe.src = 'https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1'
		iframe.width = '560'
		iframe.height = '315'
		iframe.title = 'YouTube video player'
		iframe.frameBorder = '0'
		iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
		iframe.allowFullscreen = true
		iframe.onload = () => {
			let video = document.querySelector('.video-stream')
			video.play()
		}

		
		parent?.appendChild(iframe)
	}

</script>


<EmbedVideo/>


<button on:click={change} >initialize</button>
<button on:click={pause}>pause</button>



<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEMBDKMtHqM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe> -->
<audio src="#" />

<!-- <button on:click={yt}>halko</button> -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/HmpSDVTzS0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->



<!-- <button on:click={cos}>click me</button> -->


