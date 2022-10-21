<script lang="ts">
	import BlurBox from "$lib/components/both/BlurBox.svelte";
	import SearchItems from "$lib/components/both/SearchItems.svelte";
    import BestMatch from "$lib/components/desktop/BestMatch.svelte";




</script>


<section class="grid pt-6 pb-4 px-4 lg:py-10 lg:px-10">
    <BestMatch/>
    <SearchItems />

</section>


<style scoped>
    section {
        position: fixed;
        width: 100%;
        top: 12vh;
        bottom: 9rem;
    }

    @media (min-width: 1024px) {
    section {
        position: relative;
        width: auto;
        place-content: center;
        height: 80vh;
        grid-template-columns: 30vw 1fr;
        grid-template-rows: 23rem;
        gap: 2rem;
    }
}

@media  (min-width: 768px) {
    section {
        position: relative;
        width: auto;
        top: 0;
        bottom: 0;
        grid-template-rows: 23rem;
    }
}
@media  (min-width: 768px) and (max-width: 1024px) {
    section {
        position: fixed;
        right: 0;
        left: 18rem;
        top: 12vh;
    }
}
</style>

