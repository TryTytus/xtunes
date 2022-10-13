<script>
	import MusicBarDesktop from '../desktop/MusicBarDesktop.svelte';
	import BottomNavBarMobile from '../mobile/BottomNavBarMobile.svelte';
	import MusicBar from '../mobile/MusicBar.svelte';
</script>

<nav class="p-2">
	<MusicBar />
	<BottomNavBarMobile />
</nav>

<MusicBarDesktop />

<style scoped>
	nav {
		position: fixed;
		z-index: 999;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
