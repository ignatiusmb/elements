<script>
	export let name = '';
	export let size = 24;
	export let weight = 1.5;
	export let color = 'currentColor';
</script>

<svg width={size} height={size} style="stroke:{color}; stroke-width:{weight}">
	<use href="#{name}" />
</svg>

<style>
	svg {
		position: relative;
		overflow: hidden;
		vertical-align: middle;
		-o-object-fit: contain;
		object-fit: contain;
		-webkit-transform-origin: center center;
		transform-origin: center center;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;

		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}
</style>
