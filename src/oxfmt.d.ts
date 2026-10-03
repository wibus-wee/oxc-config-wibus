import type { OxfmtConfig } from 'oxfmt'

export interface WibusFormatOptions extends Omit<OxfmtConfig, 'sortTailwindcss'> {
  sortTailwindcss?: OxfmtConfig['sortTailwindcss']
}

export declare function wibusFormat(options?: WibusFormatOptions): OxfmtConfig
export declare const format: OxfmtConfig
export default wibusFormat
