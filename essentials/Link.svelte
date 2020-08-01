<script>
	export let href = '';
	export let download = null;
	export let newTab = false;
	export let label = null;
	export let inherit = false;
	export let invert = false;
</script>

<a
	{href}
	{download}
	target={newTab ? '_blank' : '_self'}
	rel={href.includes('//') ? 'noopener noreferrer' : 'prefetch'}
	aria-label={label}
	class="elements essentials link"
	class:disabled={!href}
	class:inherit
	class:invert>
	<slot />
</a>

<style>
	a {
		cursor: pointer;
	}
	a.disabled {
		cursor: not-allowed;
	}
	a.inherit {
		color: inherit !important;
	}
	a.invert:hover {
		filter: invert() hue-rotate(180deg);
	}
</style>
