<script>
	export let query = '';
	export let filters = null;
	export let unique = null;
	import Icon from './Icon.svelte';
	import { slide } from 'svelte/transition';
	import { duration } from './options';
	let show = false;
</script>

<div class="elements search-bar">
	<header>
		<input type="text" bind:value={query} placeholder="Type in your search query here" />
		{#if filters}
			<span on:click={() => (show = !show)}>
				<Icon name="filter" />
			</span>
		{/if}
	</header>

	{#if filters && unique && show}
		<aside transition:slide={{ duration }}>
			{#each Object.keys(unique) as key}
				<section>
					<h3>{key}</h3>
					{#each unique[key] as value}
						<label>
							<input type="checkbox" bind:group={filters[key]} {value} />
							<span>{value}</span>
						</label>
					{/each}
				</section>
			{/each}

			<slot />
		</aside>
	{/if}
</div>

<style>
	div {
		display: grid;
		gap: 0.5em;
	}

	/* SearchBar */
	header {
		display: grid;
		gap: 0.5em;
		grid-template-columns: 1fr auto;
	}
	header input {
		color: rgb(var(--fg-color));
		background-color: rgb(var(--bg-color-secondary));
	}
	header span {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		padding: 0.7em;
		border-radius: 0.3em;
		background-color: rgb(var(--bg-color-secondary));
	}

	/* FilterGrid */
	aside {
		width: 100%;
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
	}
	aside h3,
	aside label span,
	aside :global(h3),
	aside :global(label span) {
		text-transform: capitalize;
	}
	aside input,
	aside :global(input) {
		display: none;
	}
	aside section,
	aside :global(section) {
		overflow-y: auto;
		max-height: 20em;
		display: flex;
		flex-direction: column;
	}
	aside section h3,
	aside :global(section h3) {
		position: sticky;
		top: 0;
		padding: 0.5em 0.25em;
		border-bottom: 1px solid rgb(var(--fg-color));
		margin-bottom: 0.5em;
		background-color: rgb(var(--bg-color));
	}
	aside section label,
	aside :global(section label) {
		cursor: pointer;
		padding: 0.5em 0.25em;
	}
	aside section label span,
	aside :global(section label span) {
		color: rgb(var(--fg-secondary-color));
	}
	aside section input:checked + span,
	aside :global(section input:checked + span) {
		color: rgb(var(--fg-color));
	}
	aside section input:checked + span::after,
	aside :global(section input:checked + span::after) {
		content: '✔';
		margin-left: 0.5em;
	}
</style>
