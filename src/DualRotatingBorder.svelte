<script>
	// ref: https://codepen.io/Rplus/pen/lEDBj
	export let color = '#69ca62';
</script>

<div class="lmns lmns-dual-rotating-border" style="--prop-color:{color}">
	<slot />
</div>

<style>
	div,
	div::before,
	div::after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	div {
		width: 80%;
		height: 80%;
		margin: auto;
		color: var(--prop-color);
	}
	div::after,
	div::before {
		content: '';
		z-index: -1;
		margin: -5%;
		box-shadow: inset 0 0 0 0.1em;
		animation: clipper 10s linear infinite;
	}
	div::before {
		animation-delay: -5s;
	}

	@keyframes clipper {
		0%,
		100% {
			clip-path: polygon(0% 0%, 0.1em 0%, 0.1em 100%, 0% 100%);
		}
		25% {
			clip-path: polygon(0% calc(100% - 0.1em), 100% calc(100% - 0.1em), 100% 100%, 0% 100%);
		}
		50% {
			clip-path: polygon(calc(100% - 0.1em) 0%, 100% 0%, 100% 100%, calc(100% - 0.1em) 100%);
		}
		75% {
			clip-path: polygon(0% 0%, 100% 0%, 100% 0.1em, 0% 0.1em);
		}
	}
</style>
