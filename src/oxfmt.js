const FORMAT_DEFAULTS = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  insertFinalNewline: true,
  jsxSingleQuote: false,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  sortImports: {
    groups: [
      ['value-builtin', 'value-external'],
      ['type-builtin', 'type-external'],
      ['value-internal', 'value-subpath'],
      ['type-internal', 'type-subpath'],
      ['value-parent', 'value-sibling', 'value-index'],
      ['type-parent', 'type-sibling', 'type-index'],
      'style',
      'side_effect',
      'unknown',
    ],
    newlinesBetween: true,
    sortSideEffects: false,
  },
  sortPackageJson: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}

/**
 * Create the shared Oxfmt configuration.
 *
 * @param {Record<string, any>} [options]
 */
export function wibusFormat(options = {}) {
  const { sortTailwindcss = false, ...overrides } = options

  return {
    ...FORMAT_DEFAULTS,
    ...(sortTailwindcss ? { sortTailwindcss } : {}),
    ...overrides,
  }
}

export const format = wibusFormat()
export default wibusFormat
