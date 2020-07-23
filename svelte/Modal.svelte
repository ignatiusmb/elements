<script>
	export let show;
	import { fly } from 'svelte/transition';
	import { duration } from './options';
</script>

{#if show}
	<div class="elements backdrop" on:click|self={() => (show = false)}>
		<section class="elements modal-content" transition:fly={{ duration }}>
			<slot>
				<code>section.modal-content</code>
			</slot>
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
