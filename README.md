# Elements ![Total npm downloads](https://img.shields.io/npm/dt/@ignatiusmb/elements) &middot; ![Published npm version](https://img.shields.io/npm/v/@ignatiusmb/elements) ![Monthly npm downloads](https://img.shields.io/npm/dm/@ignatiusmb/elements) ![License](https://img.shields.io/github/license/ignatiusmb/elements) [![Made with Svelte](https://img.shields.io/badge/made%20with-Svelte-ff3e00)](https://svelte.dev/)

A collection of reusable, functional, or pre-styled components. [Feather](https://feathericons.com/) icons included.

## Namespaces

Note: All classes in Elements namespaces are written in PascalCase.

### `Feather`

All icons from [Feather Icons](https://feathericons.com/) are available as classes to use in this namespace. Declaration `.d.ts` file is included, but if you don't get the autocompletion, you can just refer to Feather's website and convert the `kebab-names` to `PascalNames`.
 
### `Loader`

There's currently only one loader available to use, which is `ThreeWavyBalls`. There will more later on, but this namespace is essentially just a ready-to-use and hassle-free pre-styled loaders as Svelte components.

```svelte
<script>
  import { Loader } from '@ignatiusmb/elements';
</script>

<Loader.ThreeWavyBalls />
```

## Components

| Essentials | Functional      | Styled           |
| ---------- | --------------- | ---------------- |
| `Image`    | `LazyLoadImage` | `ButtonLink`     |
| `Link`     | `Pagination`    | `GradientBorder` |
| `Modal`    | `SearchBar`     | `ProgressBar`    |
| `Observer` | `ThemeSwitcher` | `ScrollTop`      |
| `Overlay`  |                 | `WeavedImage`    |

---

<h3 align="center"><pre>
DevMauss | <a href="LICENSE">MIT License</a>
</pre></h3>

---

<h5 align="center"><pre>
Copyright &copy; 2020 <a href="https://mauss.dev">Ignatius Bagussuputra</a>
</pre></h5>
