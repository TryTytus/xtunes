<script lang="ts">
	import Title from "./Title.svelte";

    export let text = ''
</script>

<div class="flex items-center">
<slot/>
<section class="w-2"/>
<Title weight="Medium" size="1.3rem" color="white">
    {text}
</Title>
</div>

<style>
    
</style>