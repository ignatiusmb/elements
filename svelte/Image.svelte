<script>
	export let src, alt;
	export let absolute = false;

	let loaded = false;
	let image;

	import { onMount } from 'svelte';
	onMount(() => (image.onload = () => (loaded = true)));
</script>

<img {src} {alt} bind:this={image} class:loaded class:absolute />

<style>
	img {
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 1s ease-out;
	}
	img.loaded {
		opacity: 1;
	}
	img.absolute {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
