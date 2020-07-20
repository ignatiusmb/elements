<script>
	export let store, total, bound;
	export let maxWidth = 32;
	import Icon from './Icon.svelte';
	function setPage(index) {
		if (index < 0) return;
		index = Math.round(index);
		if (index > $store && curr + bound > total) return;
		$store = index;
	}
	$: curr = $store * bound;
	$: next = curr + bound <= total ? curr + bound : total;
	$: limit = Math.floor(total / bound);
</script>

<section style="max-width: {maxWidth}em;">
	<span class:disabled={$store === 0} on:click|preventDefault={() => setPage(0)}>
		<Icon name="chevrons-left" />
	</span>
	<span class:disabled={$store === 0} on:click|preventDefault={() => setPage($store - 1)}>
		<Icon name="chevron-left" />
	</span>

	<slot {curr} {next} {limit}>
		<div>{curr} - {next} / {total}</div>
	</slot>

	<span class:disabled={$store === limit} on:click|preventDefault={() => setPage($store + 1)}>
		<Icon name="chevron-right" />
	</span>
	<span class:disabled={$store === limit} on:click|preventDefault={() => setPage(limit)}>
		<Icon name="chevrons-right" />
	</span>
</section>

<style>
	section {
		width: 100%;
		display: grid;
		gap: 0.5em;
		grid-template-columns: 2em 2em 1fr 2em 2em;
		align-items: center;
		margin: 0 auto;
		text-align: center;
	}
	span {
		cursor: pointer;
	}
	span.disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
</style>
