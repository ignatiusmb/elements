const feather = require('feather-icons/dist/icons.json');
const path = require('path');
const fs = require('fs');

const generate = (icon) => `<script>
	export let size = 24;
	export let weight = 1.5;
	export let color = 'currentColor';
  let className = "";
  export { className as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill="none"
	viewBox="0 0 24 24"
	stroke={color}
	stroke-width={weight}
	stroke-linecap="round"
	stroke-linejoin="round"
	class="lmns lmns-icons feather-${icon} {className}">
	${feather[icon]}
</svg>
`;

const pascalCase = (w) => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`;
const icons = Object.keys(feather).map((name) => {
	return { original: name, pascal: name.replace(/\w+/g, pascalCase).replace(/-/g, '') };
});

const components = [];
for (const { original, pascal } of icons) {
	fs.writeFileSync(`./src/icons/${pascal}.svelte`, generate(original));
	components.push(`export { default as ${pascal} } from './${pascal}.svelte';`);
}
fs.writeFileSync('./src/icons/index.js', components.join('\n'));
fs.writeFileSync('./src/icons/index.d.ts', components.join('\n'));
