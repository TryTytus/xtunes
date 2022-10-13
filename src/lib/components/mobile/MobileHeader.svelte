<script lang="ts">
    import Logo2 from "../icons/logo2.svelte";
    import Hamburger from "../icons/hamburger.svelte";
</script>

<header class="flex md:hidden px-5 justify-between items-center">
    <Logo2/>
    <div class="p-2">
        <Hamburger/>
    </div>
</header>

<style scoped>
    header {
        height: 12vh;
        background-color: #1E1E1E;
    }
</style>