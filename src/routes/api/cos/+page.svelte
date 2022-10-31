<script>
import YouTubePlayer from 'youtube-player';


let player;


let eee = (check) => {
    player = YouTubePlayer('video-player');
    player.loadVideoById({
        'videoId': '1UUYjd2rjsE',
        'startSeconds': 1,
    });

    player.playVideo()

}

let ee2 = () => {
    player
    .stopVideo()
}

let data = async () => {
    let video_inf = await fetch('http://127.0.0.1:5173/api').then(r => r.text())
    console.log(video_inf)

    const uri = "data:application/dash+xml;charset=utf-8;base64," + btoa(await video_inf);

    const videoElement = document.querySelector('video')

    const player = dashjs.MediaPlayer().create();
    player.initialize(videoElement, uri, true);

}


</script>


<video class="hidden" id="video-player" width="200" height="200">
</video>

<button on:click={eee}>click</button>
<button on:click={ee2}>click2</button>