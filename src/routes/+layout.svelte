<script lang="ts">
  import BottomNavBar from '../lib/components/both/BottomNavBar.svelte'
	import Header from '../lib/components/both/Header.svelte';
	import '../app.css';
	import Sidebar from '$lib/components/desktop/Sidebar.svelte';
</script>

<Header />

<div class="content md:grid">
  <Sidebar/>
	<main>
		<div class="blur"/>
    <div class="top left-0 md:left-72">
      <slot />
      <slot />
      <slot />
    </div>
	</main>
</div>

<BottomNavBar/>

<style>
	:root {
		--border-radius: 2rem;
	}

  .top {
    position: fixed;
    z-index: 999;
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
</style>
