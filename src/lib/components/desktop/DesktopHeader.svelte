<script lang="ts">
	import Logo from '../icons/logo.svelte';
	import Hamburger from '../icons/hamburger.svelte';
	import Home from '../icons/desktop_home.svelte';
	import DesktopPerson from '../icons/desktop_person.svelte';
	import SearchIcon from '../icons/search_icon.svelte';
</script>

<header class="hidden md:flex h-20 px-2 justify-between items-center">
	<Logo />

	<div>
	<input class="search focus:outline-none box-border px-12 mt-6 rounded-full h-14 bg-white"/>
		<div class="relative pointer-events-none bottom-10 left-4">
			<SearchIcon/>
		</div>
	</div>
	<div class="p-2 flex gap-x-4">
		<a href="#">
			<Home />
		</a>
		<a href="#">
            <DesktopPerson/>
        </a>
	</div>
</header>

<style scoped>
	header {
        height: 12vh;
		background-color: #1e1e1e;
	}

	.search {
		width: clamp(10rem, 30vw, 40rem);
	}
</style>
