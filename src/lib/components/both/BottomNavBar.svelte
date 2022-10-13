<script>
	import BottomNavBarMobile from "../mobile/BottomNavBarMobile.svelte";
	import MusicBar from "../mobile/MusicBar.svelte";

</script>


<nav class="p-2">
    <MusicBar/>
    <BottomNavBarMobile/>
</nav>


<style scoped>
    nav {
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        right: 0;
}
</style>


