# Elements ![Total npm downloads](https://img.shields.io/npm/dt/@ignatiusmb/elements) &middot; ![Published npm version](https://img.shields.io/npm/v/@ignatiusmb/elements) ![Monthly npm downloads](https://img.shields.io/npm/dm/@ignatiusmb/elements) ![License](https://img.shields.io/github/license/ignatiusmb/elements) [![Made with Svelte](https://img.shields.io/badge/made%20with-Svelte-ff3e00)](https://svelte.dev/)

> A collection of hassle-free and ready-to-use functional components made with Svelte. [Feather](https://feathericons.com/) icons included.

Elements is a Svelte component library consisting of various essential, functional, and pre-styled components. Created with DRY principle in mind as well as utilizing Svelte being a compiler.

Elements is not a(nother) UI library / components library adhering to specific design language or certain guidelines. Though Elements has some generic components, the focus is mostly on its functionality. There's already a ton of UI libraries with various buttons, cards, menus, and other components in one complete package if you're looking for that kind of stuff.

Originally made with ease of use in mind for personal projects only, turned into something potentially bigger and useful to other projects as well. As it grew bigger and more components being added, I realize this might also be beneficial to others as well, in hopes that this would help fellow Svelte developers in quickstarting new projects as well.

Notes:

- All classes in Namespaces are also written in `PascalCase` and can be accessed as such.
- Prop attributes with `*` means it's required to pass a non-null and non-empty value to the prop

## Usage

```bash
# Optimized for use with Sapper
npm install -D @ignatiusmb/elements

# Not tested with pure Svelte yet, but
npm install @ignatiusmb/elements
```

Import only the components you need, play around in the [REPL](https://svelte.dev/repl/36d6ee150def4d67be5034cf8a7832ea) to try the code block below.

**Side note**: REPL will take some time to load because it will bundle all generated Feather icons components as well. The statement *Optimized for use with Sapper* is because Sapper supports code splitting and you'll only be compiling the components and icons you import and use in your app.

```svelte
<script>
  import { Feather, Loader, SearchBar } from '@ignatiusmb/elements';
  let query;
</script>

<SearchBar bind:query />

<p>
  {#if query}
    <Feather.Search />
    <span>{query}</span>
  {:else}
    <span>Waiting for queries</span>
    <Loader.ThreeWavyBalls />
  {/if}
</p>
```

### Disclaimer

Please keep in mind that this is basically still a hobby project I'm doing to help myself in other projects. Elements will try to be as design agnostic as possible except for styled components, which would be whatever I thought was good at the time of making it. Elements does not adhere to any existing design language, any resemblance to certain design language is either inspired by or just purely coincidental. In other words, please do not expect a lot design-wise.

I personally never used a CSS framework or library and will not try to make one either, especially with Svelte where there's only a workaround, or escape hatch as they call it, using the `:global()` modifier. Either way, isn't it more fun to style your own website rather than using a pre-made UI component library? It would also make your website unique and better.

Working with Sapper and already having a ton of devDependencies, installing `svelte-*` packages e.g. `svelte-search-bar`, `svelte-pagination`, `svelte-theme-switcher`, and so on feels like it would make it harder to manage and quite the chore to keep up with each updates. I also like to create my own components as pure as possible, and I find myself reusing the same components across multiple projects. Hence, why I try to (re)create most components myself and bundle it as one collection here in Elements, Svelte-flavoured.

If some components you think are essential is missing and you feel it should be here, please understand that it was specifically excluded to spite you personally. All jokes aside, contributions are welcome as always!

***

<h3 align="center"><pre>
API Documentation
</pre></h3>

***

## Namespaces

### `Feather`

| Props  | Default          |
| ------ | ---------------- |
| size   | `24`             |
| weight | `1.5`            |
| color  | `'currentColor'` |
| class  | `''`             |

All icons from [Feather Icons](https://feathericons.com/) are available as classes to use in this namespace. Declaration `.d.ts` file is included, but if you don't get the autocompletion, you can just refer to Feather's website and convert the `kebab-name` to `PascalName`.

```svelte
<script>
  import { Feather } from '@ignatiusmb/elements';
</script>

<Feather.IconName />
```

### `Loader`

| Props | Default |
| ----- | ------- |
| -     | `-`     |

There's currently only one loader available to use, which is `ThreeWavyBalls`. More is coming soon...

```svelte
<script>
  import { Loader } from '@ignatiusmb/elements';
</script>

<Loader.ThreeWavyBalls />
```

## Components

| Essentials | Functional      | Styled           |
| ---------- | --------------- | ---------------- |
| `Dialog`   | `LazyLoadImage` | `ButtonLink`     |
| `Image`    | `Pagination`    | `GradientBorder` |
| `Link`     | `SearchBar`     | `ProgressBar`    |
| `Modal`    | `ThemeSwitcher` | `ScrollTop`      |
| `Observer` |                 | `WeavedImage`    |
| `Overlay`  |                 |                  |

### Dialog

| Props | Default |
| ----- | ------- |
| show  | `false` |

Dialog element backdrop can be clicked by the user to close the interface, its almost exactly the same as [`Modal`](#modal) with some minor difference in functionality, see [this question on Quora](https://www.quora.com/Whats-the-difference-between-a-modal-and-dialog) for more details on why.

```svelte
<script>
  import { Dialog } from '@ignatiusmb/elements';
</script>

<Dialog show>
  <!-- Immediately shows the Dialog -->
</Dialog>
```

```svelte
<script>
  import { Dialog } from '@ignatiusmb/elements';
  let show = false;
</script>

<button on:click={() => (show = true)}>Show</button>

<!-- Use "bind:" so "show" variable here will be updated too -->
<Dialog bind:show>
  <!-- Optional: Explicitly have button to close "Dialog" inside -->
  <button on:click={() => (show = false)}>Close</button>
</Dialog>
```

### Image

| Props      | Default  |
| ---------- | -------- |
| src **\*** | `''`     |
| alt *      | `''`     |
| contain    | `false`  |
| overlay    | `false`  |
| absolute   | `false`  |
| ratio      | `9 / 16` |

Image element is created to have a fixed ratio, **not size**. It will be responsive by default and will follow its parent container size. To set a fixed size, just explicitly set the parent container size.

- `contain` - images will have property `object-fit` with the value of `cover` by default, pass this prop to set the value to `contain`

```svelte
<script>
  import { Image } from '@ignatiusmb/elements';
  const src = '//example.com/image.png';
  const alt = 'An example text for this element';
</script>

<Image {src} {alt} contain />
```

- `overlay` - Overlay element is provided and available to use if you need it, you can pass in other components when this prop is used

```svelte
<script>
  import { Image } from '@ignatiusmb/elements';
  const src = '//example.com/image.png';
  const alt = 'An example text for this element';
</script>

<Image {src} {alt} overlay>
  <p>I will appear when this Image is hovered</p>
</Image>
```

- `absolute` - set the Image container position as absolute

```svelte
<script>
  import { Image } from '@ignatiusmb/elements';
  const src = '//example.com/image.png';
  const alt = 'An example text for this element';
</script>

<div style="position: relative">
  <!-- Image is now absolute positioned in this div -->
  <Image {src} {alt} absolute />
</div>
```

- `ratio` - this receives a float to determine the ratio of your image, set to 16:9 by default

```svelte
<script>
  import { Image } from '@ignatiusmb/elements';
  const src = '//example.com/image.png';
  const alt = 'An example text for this element';
</script>

<!-- Square Image -->
<Image {src} {alt} ratio={1} />

<!-- Vertical format -->
<Image {src} {alt} ratio={4 / 3} />

<!-- Horizontal format -->
<Image {src} {alt} ratio={3 / 4} />
```

***

<h3 align="center"><pre>
DevMauss | <a href="LICENSE">MIT License</a>
</pre></h3>

***

<h5 align="center"><pre>
Copyright &copy; 2020 <a href="https://mauss.dev">Ignatius Bagussuputra</a>
</pre></h5>
