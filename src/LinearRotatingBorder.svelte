<script>
	// ref: https://codepen.io/Rplus/pen/lEDBj
</script>

<div>
	<slot />
</div>

<style>
	div {
		z-index: 0;
		width: 80%;
		height: 80%;
		overflow: hidden;

		position: relative;
		margin: auto;
		padding: 2rem;
		border-radius: 0.5em;
	}
	div::before {
		content: '';
		z-index: -1;
		width: 200%;
		height: 200%;

		position: absolute;
		left: -50%;
		top: -50%;
		animation: rotate 10s linear infinite;

		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300),
			linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
	}
	div::after {
		content: '';
		z-index: -1;
		width: calc(100% - 1em);
		height: calc(100% - 1em);

		position: absolute;
		left: 0.5em;
		top: 0.5em;

		background: white;
		border-radius: 0.5em;
	}

	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
