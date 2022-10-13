<script lang="ts">
	type Weight = 'Black' | 'Light' | 'Medium'
	export let size = '0.8rem';
	export let color = 'black';
	export let weight:Weight = 'Black';
	export let align = 'center'
</script>

<h6
	style:font-family={`ProductSans-${weight}`}
	style:color
	style:font-size={size}
	class={`text-${align}`}
>
	<slot />
</h6>

<style scoped>
	@font-face {
		font-family: 'ProductSans-Black';
		src: url('ProductSans-Black.ttf') format('ttf');
	}

	@font-face {
		font-family: 'ProductSans-Light';
		src: url('ProductSans-Light.ttf') format('ttf');
	}
	@font-face {
		font-family: 'ProductSans-Medium';
		src: url('ProductSans-Medium.ttf') format('ttf');
	}
</style>
