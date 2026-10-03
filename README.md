# oxc-config-wibus

An opinionated Oxlint + Oxfmt config by **Wibus**.

Built for my own projects and preferences: Oxlint handles semantic linting, while Oxfmt owns formatting, import ordering, package.json sorting, and optional Tailwind class sorting.

No ESLint runtime or ESLint plugins are required.

## Install

```sh
pnpm add -D oxc-config-wibus oxlint oxfmt
```

## Oxlint

`oxlint.config.ts`:

```ts
import { wibus } from 'oxc-config-wibus'

export default wibus({
  stylex: true,
  vitest: true,
})
```

Available switches:

- `react`: enables Oxlint's native React, Hooks, and React Compiler rules. Enabled by default; set `react: false` to opt out.
- `nextjs`: enables native Next.js rules and implies React even when `react: false`.
- `jsxA11y`: enables native JSX accessibility rules; defaults to the effective React setting.
- `vitest`: enables native Vitest rules.
- `stylex`: loads the official `@stylexjs/eslint-plugin` through Oxlint's JS-plugin compatibility layer. The default set mirrors StyleX's own examples: `valid-styles`, `no-unused`, `no-legacy-contextual-styles`, and `sort-keys` with `order: 'recess'`.
- `typeAware`: enables the type-aware TypeScript rules. Install `oxlint-tsgolint` in the consuming project when using it.
- Native Oxlint fields such as `rules`, `plugins`, `categories`, `overrides`, `globals`, and `settings` can be passed through to override the preset.

Some intentionally opinionated defaults include allowing both interfaces and type aliases, warning on explicit `any`, and using Oxlint's native safe fix for unused imports.

When StyleX support is enabled, the plugin is the official Meta-maintained implementation rather than a port. Any of its other rules can be enabled directly with the `stylex/*` prefix through `rules`.

## Oxfmt

`oxfmt.config.ts`:

```ts
import { wibusFormat } from 'oxc-config-wibus'

export default wibusFormat({
  sortTailwindcss: {
    functions: ['cn', 'cva'],
  },
})
```

Defaults:

- single quotes
- no semicolons
- trailing commas
- 2-space indentation
- 100-column width
- import sorting
- package.json sorting
- optional Tailwind class sorting

## Migration notes

See [MIGRATION.md](./MIGRATION.md) for the mapping from the ESLint-based setup and the few rules intentionally left out.

## Credits

This config is heavily inspired by [Hyoban's eslint-config-hyoban](https://github.com/hyoban/eslint-config-hyoban) and [Anthony Fu's @antfu/eslint-config](https://github.com/antfu/eslint-config).

Built on top of the excellent work from the [Oxc](https://github.com/oxc-project/oxc) project, especially Oxlint and Oxfmt.
