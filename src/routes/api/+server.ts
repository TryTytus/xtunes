/* eslint-disable @typescript-eslint/ban-ts-comment */
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create();

export const GET:RequestHandler = async (event) => {
    const { id } = event.params;

		const youtube = await Innertube.create();

		// get the video info
		const videoInfo = await youtube.music.getInfo('f8OHybVhQwc');

		// now convert to a dash manifest
		// again - to be able to stream the video in the browser - we must proxy the requests through our own server
		// to do this, we provide a method to transform the URLs before writing them to the manifest
		//const manifest = videoInfo.streaming_dat

		console.log(typeof manifest);

		const uri = 'data:application/dash+xml;charset=utf-8;base64,' + btoa(manifest);


		
		// const videoElement = document.querySelector('audio');

		// // @ts-ignore
		// const player = dashjs.MediaPlayer().create();
		// // @ts-ignore
		// player.initialize(videoElement, uri, true);

  return new Response(manifest)
}  