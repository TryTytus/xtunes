<script lang="ts">
	export let Class = ''
</script>

<div id="blur" class={Class}>
	<slot />
</div>

<style scoped>
	#blur {
        @apply rounded-2xl;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) -22.33%, rgba(0, 0, 0, 0.4) 100%);
box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
    }
</style>
