<script lang="ts">
	import BottomNavBar from '../lib/components/both/BottomNavBar.svelte';
	import Header from '../lib/components/both/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/desktop/Sidebar.svelte';
	import SmallCardGroup from '$lib/components/both/SmallCardGroup.svelte';
	import BigCard from '$lib/components/both/BigCard.svelte';
	import MusicBarDesktop from '$lib/components/desktop/MusicBarDesktop.svelte';
	import MusicBar from '$lib/components/mobile/MusicBar.svelte';
	import BottomNavBarMobile from '$lib/components/mobile/BottomNavBarMobile.svelte';
</script>

<div class="layout">
	<Header />
	<Sidebar />

	<main>
		<div class="content overflow-hidden h-full">
			<slot/>
		</div>
		<nav class="md:hidden p-2">
			<MusicBar/>
			<BottomNavBarMobile/>
		</nav>
	</main>

	<MusicBarDesktop/>
</div>


<style>
	main {

		height: 100%;
		max-height: 100%;
		display: grid;
		grid-template-rows: 1fr min-content;
		border-radius: 2rem 2rem 0 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 34.88%, rgba(0, 0, 0, 0.4) 157.2%),
			linear-gradient(140deg, #e90dda 0%, #15cff1 100%);
		grid-area: main;
		backdrop-filter: blur(20px);
	}


/* 
	.content {
		height: 100%;
	} */

	html {
		background-color: #1e1e1e;
	}

	.layout {
		position: relative;
		height: 100vh;
		max-height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 5rem minmax(0, 1fr);
		grid-template-areas:
			'header'
			'main';
	}

	@media (min-width: 768px) {
		.layout {
    grid-template-rows: 5rem minmax(0, 1fr) 5rem;
    grid-template-columns: min-content 1fr;
    grid-template-areas:
    'header header'
    'sidebar main'
    'footer footer';
    }
}
</style>



<!-- 
<style>
	:root {
		--border-radius: 2rem;
	}

  .top {
    position: fixed;
    z-index: 30;
    top: 12vh;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
  }

	.content {
    grid-template-columns: 18rem 1fr;
		background-color: #1e1e1e;
	}

	main {
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		background: #e90dda;
		background: linear-gradient(140deg, #e90dda 0%, #15cff1 100%);
		height: 88vh;
	}

	.blur {
    position: relative;
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		height: 100vh;
		z-index: 1;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
		filter: blur(100%);
	}
 -->
<!-- 

</style> -->