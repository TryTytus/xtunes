<script>
	import ListItem from "../both/ListItem.svelte";
	import WhiteHeart from "../icons/white_heart.svelte";
	import WhiteHistory from "../icons/white_history.svelte";
	import WhitePlay from "../icons/white_play.svelte";
	import WhiteStack from "../icons/white_stack.svelte";

</script>
<aside class="hidden md:block w-72 ">

<div class="flex flex-col gap-y-5 px-4 py-8">
    <ListItem text="Biblioteka">
        <WhiteStack/>
    </ListItem>

        <ListItem text="Polubione utwory">
        <WhiteHeart/>
    </ListItem>

    <ListItem text="Playlisty">
        <WhitePlay/>
    </ListItem>

    <ListItem text="Historia">
        <WhiteHistory/>
    </ListItem>
</div>
 <section class="w-11/12 m-auto h-1 bg-white"/>

</aside>