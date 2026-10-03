import assert from 'node:assert/strict'
import test from 'node:test'

import { wibus, wibusFormat } from '../src/index.js'

test('base preset stays native and keeps Hyoban TypeScript choices', () => {
  const config = wibus()

  assert.ok(config.plugins.includes('typescript'))
  assert.ok(config.plugins.includes('unicorn'))
  assert.equal(config.plugins.includes('react'), false)
  assert.equal(config.rules['typescript/consistent-type-definitions'], 'off')
  assert.equal(config.rules['typescript/no-explicit-any'], 'warn')
  assert.equal(config.rules['node/no-top-level-await'], 'error')
})

test('React and Next.js are opt-in native plugins', () => {
  const react = wibus({ react: true })
  const next = wibus({ nextjs: true })

  assert.ok(react.plugins.includes('react'))
  assert.ok(react.plugins.includes('jsx-a11y'))
  assert.equal(react.rules['react/set-state-in-effect'], 'off')
  assert.ok(next.plugins.includes('nextjs'))
  assert.ok(next.plugins.includes('react'))
})

test('type-aware rules and user overrides compose', () => {
  const config = wibus({
    categories: { suspicious: 'warn' },
    rules: { 'no-console': 'off' },
    typeAware: true,
  })

  assert.equal(config.options.typeAware, true)
  assert.equal(config.rules['typescript/no-floating-promises'], 'error')
  assert.equal(config.rules['no-console'], 'off')
  assert.deepEqual(config.categories, { suspicious: 'warn' })
})

test('formatter owns style and sorting', () => {
  const config = wibusFormat()

  assert.equal(config.semi, false)
  assert.equal(config.singleQuote, true)
  assert.equal(config.trailingComma, 'all')
  assert.equal(typeof config.sortImports, 'object')
  assert.equal('sortTailwindcss' in config, false)
})

test('Tailwind sorting is opt-in', () => {
  const config = wibusFormat({
    printWidth: 120,
    sortTailwindcss: { functions: ['cn', 'cva'] },
  })

  assert.equal(config.printWidth, 120)
  assert.deepEqual(config.sortTailwindcss, { functions: ['cn', 'cva'] })
})
