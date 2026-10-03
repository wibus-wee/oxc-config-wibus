# Migration from eslint-config-hyoban

This preset keeps the behavior that maps cleanly to Oxc and deliberately drops ESLint as an execution layer.

| Hyoban / Antfu responsibility | oxc-config-wibus |
| --- | --- |
| ESLint core correctness rules | Native Oxlint `eslint` rules |
| TypeScript rules | Native Oxlint `typescript` rules |
| `eslint-plugin-unicorn` | Native Oxlint `unicorn` plugin |
| import rules | Native Oxlint `import` plugin |
| `antfu/no-top-level-await` | Native `node/no-top-level-await` |
| `eslint-plugin-unused-imports` | Native `no-unused-vars` safe import fixes |
| React / Hooks | Native Oxlint `react` plugin |
| Next.js | Native Oxlint `nextjs` plugin |
| Vitest | Native Oxlint `vitest` plugin |
| Stylistic ESLint rules | Oxfmt |
| `simple-import-sort` | Oxfmt `sortImports` |
| Tailwind class ordering / duplicates | Oxfmt `sortTailwindcss` when enabled |

## Preserved Hyoban overrides

- `typescript/consistent-type-definitions`: off.
- `typescript/no-explicit-any`: warn.
- React's compiler-backed `react/set-state-in-effect`: off, matching Hyoban's choice to disable the upstream Hooks rule.
- `react/exhaustive-deps`: warn.

## Deliberate gaps

A few rules do not have a clean native-Oxc equivalent and are not kept as JS-plugin dependencies:

- `react-hooks-extra/no-direct-set-state-in-use-effect` from `@eslint-react/eslint-plugin`.
- Markdown preference rules, including `md/no-url-trailing-slash` and `hyoban/md-one-sentence-per-line`.
- Tailwind `no-unknown-classes`; Oxfmt can sort and deduplicate classes, but it is not a Tailwind semantic linter.
- Antfu custom rules such as import-path policy rules without native Oxlint equivalents.

These are intentionally omitted rather than silently reintroducing an ESLint-compatible JS-plugin stack. If one becomes important enough, it should be added as a narrow optional layer instead of making ESLint plugins part of the default preset.
