<script>
	import Title from "../both/Title.svelte";
	import HeartFilled from "../icons/heart_filled.svelte";
	import PlayingAnimation from "../icons/playing_animation.svelte";
	import PlayNow from "../icons/play_now.svelte";
	import SkipLeft from "../icons/skip_left.svelte";
	import SkipRight from "../icons/skip_right.svelte";

    export let bar = 50
    export let start_time = '0:00'
    export let end_time = '2:13'
</script>
<nav class="w-full h-20 hidden md:grid fixed z-50 bottom-0 left-0 right-0 bg-white">
<div class="flex items-center pl-4 gap-x-3">
    <img class="w-16 h-16" src="hamer.jpeg" alt="">
    <div class="h-full pt-2">
        <Title weight="Medium" size="1.2rem">Seek and Destroy</Title>
        <Title weight="Light" size="0.9rem">Metallica</Title>
    </div>
</div>
<div>
    <div class="justify-center items-center pb-2 flex h-14 gap-x-4">
        <SkipLeft/>
        <div class="mt-2">
            <PlayNow/>
        </div>
        <SkipRight/>
    </div>
    <section class="grid items-center">
        <Title>{start_time}</Title>
        <div class="bottom-0 h-3 mx-2 rounded-xl" style="background-color: #D9D9D9;">
            <div style:width={`${bar}%`} class="bottom-0 h-3 rounded-xl bg-black"/>
        </div>
        <Title>{end_time}</Title>
    </section>
</div>
<div class="flex items-center justify-end p-6 gap-x-8">
    <PlayingAnimation/>
    <HeartFilled/>
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