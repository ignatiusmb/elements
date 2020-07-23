<script>
	export let src, alt;
	export let absolute = false;

	import Observe from './Observe.svelte';
	import Image from './Image.svelte';
</script>

<Observe once let:sighted>
	{#if sighted}
		<Image {alt} {src} {absolute} />
	{/if}
</Observe>
