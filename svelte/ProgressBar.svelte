<script>
	export let z = 3;
	export let top = 0;
	export let size = 0.25;
	export let color = '#990000';
	let y, innerHeight, mounted;
	import { onMount } from 'svelte';
	onMount(() => (mounted = true));
	$: progress = (y / ((mounted ? document.body.scrollHeight : y) - innerHeight)) * 100;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />
<div style="z-index:{z}; top:{top}; height:{size}em; background-color:{color}; transform:translateX({progress}%)" />

<style>
	div {
		position: fixed;
		left: -100%;
		width: 100%;
	}
</style>
