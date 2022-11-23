<script lang="ts">
    import Home from '../icons/home.svelte'
    import Search from '../icons/search.svelte';
    import Stack from '../icons/stack.svelte';
    import BoldTitle from '../both/Title.svelte';
	import BottomNavBarItem from './micro/BottomNavBarItem.svelte';

</script>

<nav class="m-1 bg-white rounded-xl flex justify-between pt-3 px-10">
        
    <BottomNavBarItem title="home">
        <Home/>
    </BottomNavBarItem>
    <BottomNavBarItem title="search">
        <Search/>
    </BottomNavBarItem>
    <BottomNavBarItem title="library">
        <Stack/>
    </BottomNavBarItem>

</nav>


