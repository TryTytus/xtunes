<script lang="ts">
	import SmallCard from "./SmallCard.svelte";

</script>

<div class="grid grid-cols-2 gap-4">
{#each Array(4) as i}
    <SmallCard/>
{/each}
</div>
