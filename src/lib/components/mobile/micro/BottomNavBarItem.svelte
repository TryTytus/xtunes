<script lang="ts">
	import BoldTitle from "../../both/Title.svelte";

    export let title = ''
    export let href = '#'
</script>

<a class="flex flex-col items-center" href={href}>
    <slot/>
    <BoldTitle>
        <h6 class="-mt-1">
            {title}
        </h6>
    </BoldTitle>
</a>