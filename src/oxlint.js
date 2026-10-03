const BASE_PLUGINS = ['eslint', 'typescript', 'unicorn', 'import', 'node']

const BASE_RULES = {
  'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'default-case-last': 'error',
  'dot-notation': ['error', { allowKeywords: true }],
  eqeqeq: ['error', 'smart'],
  'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-debugger': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-implied-eval': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-proto': 'error',
  'no-redeclare': ['error', { builtinGlobals: false }],
  'no-restricted-globals': [
    'error',
    { message: 'Use `globalThis` instead.', name: 'global' },
    { message: 'Use `globalThis` instead.', name: 'self' },
  ],
  'no-self-assign': ['error', { props: true }],
  'no-sequences': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrors: 'none',
      fix: { imports: 'safe-fix', variables: 'suggestion' },
      ignoreRestSiblings: true,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
  'one-var': ['error', { initialized: 'never' }],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
  'prefer-exponentiation-operator': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'symbol-description': 'error',
  'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  yoda: ['error', 'never'],

  'node/no-top-level-await': 'error',

  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/first': 'error',
  'import/no-duplicates': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-default': 'error',

  'typescript/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
  'typescript/consistent-type-definitions': 'off',
  'typescript/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: false,
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  'typescript/no-dynamic-delete': 'off',
  'typescript/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
  'typescript/no-explicit-any': 'warn',
  'typescript/no-extraneous-class': 'off',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-invalid-void-type': 'off',
  'typescript/no-non-null-assertion': 'off',
  'typescript/no-redeclare': ['error', { builtinGlobals: false }],
  'typescript/no-require-imports': 'error',
  'typescript/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  'typescript/no-use-before-define': [
    'error',
    { classes: false, functions: false, variables: true },
  ],
  'typescript/no-wrapper-object-types': 'error',
  'typescript/triple-slash-reference': 'off',
  'typescript/unified-signatures': 'off',

  'unicorn/consistent-empty-array-spread': 'error',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-instanceof-builtins': 'error',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-dom-node-text-content': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
}

const TYPE_AWARE_RULES = {
  'typescript/await-thenable': 'error',
  'typescript/no-floating-promises': 'error',
  'typescript/no-for-in-array': 'error',
  'typescript/no-misused-promises': 'error',
  'typescript/no-unnecessary-type-assertion': 'error',
  'typescript/no-unsafe-argument': 'error',
  'typescript/no-unsafe-assignment': 'error',
  'typescript/no-unsafe-call': 'error',
  'typescript/no-unsafe-member-access': 'error',
  'typescript/no-unsafe-return': 'error',
  'typescript/restrict-plus-operands': 'error',
  'typescript/restrict-template-expressions': 'error',
  'typescript/return-await': ['error', 'in-try-catch'],
  'typescript/strict-boolean-expressions': [
    'error',
    {
      allowNullableBoolean: true,
      allowNullableObject: true,
    },
  ],
  'typescript/switch-exhaustiveness-check': 'error',
  'typescript/unbound-method': 'error',
}

const REACT_RULES = {
  'react/exhaustive-deps': 'warn',
  'react/rules-of-hooks': 'error',
  'react/set-state-in-effect': 'off',
  'react/set-state-in-render': 'error',
}

const VITEST_RULES = {
  'vitest/no-disabled-tests': 'warn',
  'vitest/no-focused-tests': 'error',
}

const STYLEX_JS_PLUGIN = {
  name: 'stylex',
  specifier: '@stylexjs/eslint-plugin',
}

const STYLEX_RULES = {
  'stylex/no-legacy-contextual-styles': 'error',
  'stylex/no-unused': 'error',
  'stylex/sort-keys': ['error', { order: 'recess' }],
  'stylex/valid-styles': 'error',
}

/**
 * Create the shared Oxlint configuration.
 *
 * @param {Record<string, any>} [options]
 */
export function wibus(options = {}) {
  const {
    ignorePatterns = ['dist/**', 'coverage/**', 'node_modules/**'],
    jsPlugins: extraJsPlugins = [],
    jsxA11y,
    nextjs = false,
    options: oxlintOptions = {},
    plugins: extraPlugins = [],
    react = true,
    rules = {},
    stylex = false,
    typeAware = false,
    vitest = false,
    ...rest
  } = options

  const enableReact = react || nextjs
  const enableJsxA11y = jsxA11y ?? enableReact
  const plugins = [...BASE_PLUGINS]
  const jsPlugins = [...extraJsPlugins]
  const mergedRules = { ...BASE_RULES }

  if (enableReact) {
    plugins.push('react')
    Object.assign(mergedRules, REACT_RULES)
  }

  if (enableJsxA11y && enableReact) plugins.push('jsx-a11y')

  if (nextjs) plugins.push('nextjs')

  if (vitest) {
    plugins.push('vitest')
    Object.assign(mergedRules, VITEST_RULES)
  }

  if (stylex) {
    if (!jsPlugins.some((plugin) => typeof plugin === 'object' && plugin?.name === 'stylex'))
      jsPlugins.push(STYLEX_JS_PLUGIN)
    Object.assign(mergedRules, STYLEX_RULES)
  }

  if (typeAware) Object.assign(mergedRules, TYPE_AWARE_RULES)

  Object.assign(mergedRules, rules)

  return {
    ...rest,
    ignorePatterns,
    jsPlugins,
    options: {
      ...oxlintOptions,
      typeAware,
    },
    plugins: [...new Set([...plugins, ...extraPlugins])],
    rules: mergedRules,
  }
}

export const base = wibus()
export default wibus
