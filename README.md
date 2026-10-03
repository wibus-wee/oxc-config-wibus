# oxc-config-wibus

Wibus' opinionated Oxlint + Oxfmt preset. It is a native-Oxc migration of the conventions used in [`eslint-config-hyoban`](https://github.com/hyoban/eslint-config-hyoban): semantic linting stays in Oxlint, while formatting and import ordering move to Oxfmt.

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
  react: true,
  vitest: true,
})
```

Available switches:

- `react`: enables Oxlint's native React / Hooks / React Compiler plugin.
- `nextjs`: enables native Next.js rules and implies React.
- `jsxA11y`: enables native JSX accessibility rules; defaults to on with React/Next.js.
- `vitest`: enables native Vitest rules.
- `typeAware`: enables the migrated type-aware TypeScript rules. Install `oxlint-tsgolint` in the consuming project when using it.
- `rules`, `plugins`, `categories`, `overrides`, `globals`, `settings`, and other Oxlint fields can be passed through and override the preset.

Hyoban-specific TypeScript choices are preserved: `consistent-type-definitions` is off and explicit `any` is a warning. Unused imports use Oxlint's native safe fix rather than `eslint-plugin-unused-imports`.

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

The default formatting taste is single quotes, no semicolons, trailing commas, 2-space indentation, 100-column width, package.json sorting, and import sorting. Tailwind class sorting is opt-in.

## Migration notes

See [MIGRATION.md](./MIGRATION.md) for the exact mapping and the few intentionally unsupported Hyoban rules.
