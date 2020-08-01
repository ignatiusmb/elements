<script>
	export let src, alt;
	export let overlay = false;
	export let absolute = false;

	import Observe from '../essentials/Observe.svelte';
	import Image from '../essentials/Image.svelte';
</script>

<Observe once let:sighted>
	{#if sighted}
		<Image {alt} {src} {overlay} {absolute}>
			{#if overlay}
				<slot />
			{/if}
		</Image>
	{/if}
</Observe>
