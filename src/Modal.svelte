<script>
	export let show = false;
	import { fly } from 'svelte/transition';
	import { duration } from './options';
</script>

{#if show}
	<div class="lmns lmns-modal-backdrop">
		<section class="lmns lmns-modal" transition:fly={{ duration }}>
			<slot />
		</section>
	</div>
{/if}

<style>
	div {
		z-index: 6;
		width: 100%;
		height: 100%;

		position: fixed;
		top: 0;
		left: 0;

		display: grid;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.8);
	}
	section {
		padding: 2em;
		border-radius: var(--b-radius, 0.5em);
		background: var(--bg-overlay, #ffffff);
	}
</style>
