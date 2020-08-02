<script>
	export let src = '';
	export let alt = '';
	export let overlay = false;
	export let absolute = false;
	export let ratio = 9 / 16;

	import { fade } from 'svelte/transition';
	import Overlay from './Overlay.svelte';
	let show = false;
</script>

<div
	class="elements essentials image"
	class:absolute
	style="padding-top: {ratio * 100}%"
	on:mouseenter={() => (show = true)}
	on:mouseleave={() => (show = false)}>
	<img {src} {alt} in:fade />
	{#if overlay}
		<Overlay {show}>
			<slot />
		</Overlay>
	{/if}
</div>

<style>
	div {
		position: relative;
		border-radius: inherit;
	}
	div.absolute {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: inherit;
		text-align: center;
	}
</style>
