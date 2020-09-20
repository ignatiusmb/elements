<div class="lmns lmns-flip-card">
	<section>
		<slot />
	</section>
	<section>
		<slot name="rear" />
	</section>
</div>

<style>
	div {
		perspective: var(--perspective, 24rem);
		width: 10em;
		height: 10em;
		border-radius: var(--b-radius, 0.5em);
	}
	section {
		backface-visibility: hidden;

		width: 100%;
		height: 100%;
		border-radius: inherit;
		transition: var(--t-duration, 300ms);

		background-color: var(--bg-overlay, rgba(0, 0, 0, 0.5));
	}
	div:hover section {
		transform: rotateY(-180deg);
	}
</style>
