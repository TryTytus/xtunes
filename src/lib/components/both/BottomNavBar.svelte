<script>
	import MusicBarDesktop from '../desktop/MusicBarDesktop.svelte';
	import BottomNavBarMobile from '../mobile/BottomNavBarMobile.svelte';
	import MusicBar from '../mobile/MusicBar.svelte';
</script>

<div>
	<nav class="md:hidden p-2">
		<MusicBar />
		<BottomNavBarMobile />
	</nav>
	
	<MusicBarDesktop />
</div>

<style scoped>
	nav {
		position: fixed;
		z-index: 999;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
