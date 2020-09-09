# Elements ![Total npm downloads](https://img.shields.io/npm/dt/@ignatiusmb/elements) &middot; ![Published npm version](https://img.shields.io/npm/v/@ignatiusmb/elements) ![Monthly npm downloads](https://img.shields.io/npm/dm/@ignatiusmb/elements) ![License](https://img.shields.io/github/license/ignatiusmb/elements) [![Made with Svelte](https://img.shields.io/badge/made%20with-Svelte-ff3e00)](https://svelte.dev/)

> A collection of hassle-free and ready-to-use components made with Svelte. [Feather](https://feathericons.com/) icons included.

Elements is a Svelte component library consisting of various essential, functional, and pre-styled components. Created with DRY principle in mind as well as utilizing Svelte being a compiler, components like `Link`, `Image`, `Dialog` or `Modal` can be created once in here and used in any project without having to copy the `.svelte` file or rewrite them in each repository.

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

I like to create my own components as pure as possible, meaning I would try my best to create it in pure HTML, vanilla JS, or in this case Svelte-flavored, before using third-party libraries. In which case, it wouldn't be a component here. Also, working with Sapper and already having a ton of devDependencies, installing more `svelte-*` packages e.g. `svelte-search-bar`, `svelte-pagination`, `svelte-theme-switcher`, and so on would make it harder to manage and quite the chore to keep up with each updates. Hence, why I try to (re)create the components and bundle it as one collection here.

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

***

<h3 align="center"><pre>
DevMauss | <a href="LICENSE">MIT License</a>
</pre></h3>

***

<h5 align="center"><pre>
Copyright &copy; 2020 <a href="https://mauss.dev">Ignatius Bagussuputra</a>
</pre></h5>
