<script>
	import { writable } from 'svelte/store';
	export let store = writable(0);
	export let total = 0;
	export let bound = 1;
	import { ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from './icons';
	function update(index) {
		if (index < 0) return;
		index = Math.round(index);
		if (index < $store) $store = index;
		else if (comp > total) return;
		$store = index;
	}
	$: curr = $store * bound + 1;
	$: comp = curr - 1 + bound;
	$: next = comp <= total ? comp : total;
	$: limit = Math.floor(total / bound);
</script>

<section class="lmns lmns-pagination">
	<span class:disabled={$store === 0} on:click|preventDefault={() => update(0)}>
		<ChevronsLeft />
	</span>
	<span class:disabled={$store === 0} on:click|preventDefault={() => update($store - 1)}>
		<ChevronLeft />
	</span>

	<slot {curr} {next} {limit}>
		<div>{curr} - {next} / {total}</div>
	</slot>

	<span class:disabled={$store === limit} on:click|preventDefault={() => update($store + 1)}>
		<ChevronRight />
	</span>
	<span class:disabled={$store === limit} on:click|preventDefault={() => update(limit)}>
		<ChevronsRight />
	</span>
</section>

<style>
	section {
		max-width: 32em;
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
