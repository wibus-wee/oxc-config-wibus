import type { OxlintConfig } from 'oxlint'

export interface WibusOptions extends Omit<
  OxlintConfig,
  'ignorePatterns' | 'jsPlugins' | 'options' | 'plugins' | 'rules'
> {
  ignorePatterns?: string[]
  jsPlugins?: NonNullable<OxlintConfig['jsPlugins']>
  jsxA11y?: boolean
  nextjs?: boolean
  options?: NonNullable<OxlintConfig['options']>
  plugins?: NonNullable<OxlintConfig['plugins']>
  react?: boolean
  rules?: NonNullable<OxlintConfig['rules']>
  stylex?: boolean
  typeAware?: boolean
  vitest?: boolean
}

export declare function wibus(options?: WibusOptions): OxlintConfig
export declare const base: OxlintConfig
export default wibus
