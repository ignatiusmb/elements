<script>
	export let href = '';
	export let disabled = false;
	export let newTab = false;
	export let download = null;
	export let label = null;
	export let invert = false;
	import Link from './Link.svelte';
</script>

<span class="lmns lmns-button-link" class:disabled>
	<Link href={!disabled ? href : ''} inherit {newTab} {label} {download} {invert}>
		<slot />
	</Link>
</span>

<style>
	span {
		overflow-y: hidden;
		display: inline-flex;
		border-radius: inherit;
		background-color: rgba(var(--bg-color), 1);
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0);
	}
	span > :global(a) {
		user-select: none;
		width: 100%;
		padding: 0.5em 1em;
		text-shadow: 0 2ch 0 rgba(var(--fg-color), 1);
		transform: translateY(-2ch);
		transition: all var(--t-duration) ease-in-out;
	}
	span:hover,
	span:active {
		color: rgba(var(--theme-secondary), 1);
	}
	span:hover > :global(a),
	span:active > :global(a) {
		text-shadow: 0 2ch 0 rgba(0, 0, 0, 0);
		transform: translateY(0);
	}

	span.disabled {
		opacity: 0.4;
		cursor: not-allowed;
		pointer-events: none;
		text-transform: none;
	}
	span.disabled:hover,
	span.disabled:active {
		box-shadow: none;
		transform: none;
	}
</style>
