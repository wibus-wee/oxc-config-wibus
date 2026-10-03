import type { OxlintConfig } from 'oxlint'

export interface WibusOptions extends Omit<OxlintConfig, 'ignorePatterns' | 'options' | 'plugins' | 'rules'> {
  ignorePatterns?: string[]
  jsxA11y?: boolean
  nextjs?: boolean
  options?: NonNullable<OxlintConfig['options']>
  plugins?: NonNullable<OxlintConfig['plugins']>
  react?: boolean
  rules?: NonNullable<OxlintConfig['rules']>
  typeAware?: boolean
  vitest?: boolean
}

export declare function wibus(options?: WibusOptions): OxlintConfig
export declare const base: OxlintConfig
export default wibus
