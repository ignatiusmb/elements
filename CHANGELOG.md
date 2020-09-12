# Elements Changelog

## 0.6.1

- Add keydown listener on `SearchBar` to focus on searchbox ([#28](https://github.com/ignatiusmb/elements/pull/28))
- Update `Pagination` element ([#27](https://github.com/ignatiusmb/elements/pull/27))
  - Add new exported prop `increment` to specify items per update
  - Add new exported prop `tween` to iterate over items instead of jumping to it
  - Fix `limit` going negative value and right Chevrons disabled class gets removed
  - Fix `total` value 0 but `curr` is still incremented by one
  - Fix `total` value changed but `$store` isn't readjusted
- Export existing props from `Image` to `LazyLoadImage` ([#26](https://github.com/ignatiusmb/elements/pull/26))
- Change CSS vars and fallbacks for `ButtonLink` and `SearchBar` ([#25](https://github.com/ignatiusmb/elements/pull/25))

## 0.6.0

- Fix `Pagination` indexing ([#24](https://github.com/ignatiusmb/elements/pull/24))
- Fix `Modal` functionality and add `Dialog` ([#23](https://github.com/ignatiusmb/elements/pull/23))
- Add proper fallback values for CSS vars ([#22](https://github.com/ignatiusmb/elements/pull/22))
- Fix `SearchBar` spacing when filter is not used ([#21](https://github.com/ignatiusmb/elements/pull/21))

## 0.5.0

- Change `Icons` namespace to `Feather` and optimize `.d.ts` ([#19](https://github.com/ignatiusmb/elements/pull/19))
- Change global styling to target child rather than descendant ([#18](https://github.com/ignatiusmb/elements/pull/18))
- Optimize `Loader`'s `.d.ts` file ([#20](https://github.com/ignatiusmb/elements/pull/20))

## 0.4.2

- Hotfix: Fix chevron icons misplacement in `Pagination`

## 0.4.1

- Hotfix: Remove opacity property from `ThemeSwitcher`

## 0.4.0

- Generate individual feather icon components ([#17](https://github.com/ignatiusmb/elements/pull/17))

## 0.3.1

- Publish `dist` and `src` folder to bundle

## 0.3.0

- Merge code into src folder and adjust class names ([#15](https://github.com/ignatiusmb/elements/pull/15))
- Add more to `FeatherIcons` ([#13](https://github.com/ignatiusmb/elements/pull/13), [#16](https://github.com/ignatiusmb/elements/pull/16))
- Export `contain` prop and pass click events from `Image` ([#14](https://github.com/ignatiusmb/elements/pull/14))

## 0.2.2 ([#12](https://github.com/ignatiusmb/elements/pull/12))

- Remove lang in script tags

## 0.2.1 ([#11](https://github.com/ignatiusmb/elements/pull/11))

- Include individual files from root folder in published package

## 0.2.0 ([#10](https://github.com/ignatiusmb/elements/pull/10))

- Revert web components support removal
- Split elements to `essentials`, `functional`, and `styled`
- Add type declarations

## 0.1.0

- Remove web components support ([#9](https://github.com/ignatiusmb/elements/pull/9))
- Fix `rel` attribute in `Link` for Sapper ([#6](https://github.com/ignatiusmb/elements/pull/6))
- Add `GradientBorder` ([#7](https://github.com/ignatiusmb/elements/pull/7))
- Add `ThreeWavyBalls` ([#8](https://github.com/ignatiusmb/elements/pull/8))

## 0.0.5 ([#5](https://github.com/ignatiusmb/elements/pull/5))

- Fix `ThemeSwitcher` fill value
- Add more icons to `FeatherIcons`
- Add vertical margin to `WeavedImage`

## 0.0.4 ([#4](https://github.com/ignatiusmb/elements/pull/4))

- Fix `Image` absolute positioning
- Add overlay option to `LazyLoadImage`
- Add `ButtonLink`
- Add `WeavedImage`
- Normalize CSS variables and use rgb values

## 0.0.3 ([#3](https://github.com/ignatiusmb/elements/pull/3))

- Refactor `Image`
- Add `Overlay`
- Add `ScrollTop`
- Add `ThemeSwitcher`

## 0.0.2 ([#2](https://github.com/ignatiusmb/elements/pull/2))

- Add `svelte` source folder to published package

## 0.0.1 ([#1](https://github.com/ignatiusmb/elements/pull/1))

- Alpha release for testing
