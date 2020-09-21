<script>
	export let flipped = false;
</script>

<div class="lmns lmns-flip-card" class:flipped>
	<section>
		<slot name="front" />
	</section>
	<section>
		<slot name="rear" />
	</section>
</div>

<style>
	div {
		perspective: var(--perspective, 24rem);
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: var(--b-radius, 0.5em);
	}
	section {
		backface-visibility: hidden;

		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: inherit;
		transition: var(--t-duration, 300ms);

		background-color: var(--bg-overlay, rgba(0, 0, 0, 0.5));
	}
	section:last-child {
		transform: rotateY(180deg) translateX(100%);
		background-color: var(--bg-overlay, rgba(255, 0, 0, 0.5));
	}
	div.flipped section:first-child,
	div:hover section:first-child {
		transform: rotateY(-180deg) translateX(-100%);
	}
	div.flipped section:last-child,
	div:hover section:last-child {
		transform: rotateY(0) translateX(0);
	}
</style>
