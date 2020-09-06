<script>
	export let show = false;
	import { fly } from 'svelte/transition';
	import { duration } from './options';
</script>

{#if show}
	<div class="lmns lmns-modal-backdrop" on:click|self={() => (show = false)}>
		<section class="lmns lmns-modal" transition:fly={{ duration }}>
			<slot />
		</section>
	</div>
{/if}

<style>
	div {
		z-index: 3;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: fixed;
		display: grid;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.8);
	}
	section {
		padding: 2em;
		border-radius: 0.5em;
		background: #fff;
	}
</style>
