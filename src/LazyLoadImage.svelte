<script>
	export let src = '';
	export let alt = '';
	export let contain = false;
	export let overlay = false;
	export let absolute = false;
	export let ratio = 9 / 16;

	import Observe from './Observe.svelte';
	import Image from './Image.svelte';
</script>

<Observe once let:sighted>
	{#if sighted}
		<Image {alt} {src} {contain} {overlay} {absolute} {ratio}>
			{#if overlay}
				<slot />
			{/if}
		</Image>
	{/if}
</Observe>
