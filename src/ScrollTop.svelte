<script>
	const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	import { onMount } from 'svelte';
	import { ChevronsUp } from './icons';
	let y, mounted;
	onMount(() => (mounted = true));
	$: show = y > (mounted ? document.body.scrollHeight / 3 : y);
</script>

<svelte:window bind:scrollY={y} />
<span class="lmns lmns-scroll-top" class:show on:click={scrollTop}>
	<ChevronsUp />
</span>

<style>
	span {
		cursor: pointer;
		position: fixed;
		z-index: 1;
		bottom: 0;
		right: 0;
		width: 1.5em;
		height: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 1.5em;
		color: var(--theme-primary, #990000);
		background-color: rgba(0, 0, 0, 0.25);
		transform: translate(-50%, 100%);
		transition: transform var(--t-duration, 300ms);
	}
	span.show {
		transform: translate(-50%, -200%);
	}
	span:hover {
		background-color: rgba(0, 0, 0, 0.5);
	}

	@media only screen and (min-width: 600px) {
		span.show {
			transform: translate(-50%, -50%);
		}
	}
</style>
