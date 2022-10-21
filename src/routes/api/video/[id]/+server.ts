import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { Innertube } from 'youtubei.js';
const youtube = await Innertube.create();


export const GET: RequestHandler = async (event) => {
	const { id } = event.params;

	// const data = await fetch(
	// 	`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${id}&type=video&key=${yt_key}`
	// ).then((res) => res.text());

    // const data = await fetch(
	// 	`https://www.youtube.com/results?search_query=never+gonna+give+you+up`
	// ).then((res) => res.text());

    if (id) {
        const videoInfo = await youtube.search(id, {
            type: 'video'   
        });

        return json({
             ...videoInfo
        });
    }

	// const $ = await cheerio.load(data);

    // console.log(data);

	// const imgs:any = [];

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();

    // await page.goto('https://www.youtube.com/results?search_query=never+gonna+give+you+up');

	// $('#img').each((i, img) => {
    //     const src = $(img).attr('src')
    //     imgs.push(src);
    // });
    return;
};
