export const fontOptions = {
  modern: {
    label: 'Modern sans',
    stack: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  arial: {
    label: 'Arial',
    stack: 'Arial, Helvetica, sans-serif',
  },
  georgia: {
    label: 'Georgia',
    stack: 'Georgia, "Times New Roman", serif',
  },
  mono: {
    label: 'Monospace',
    stack: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  },
} as const

export type FontId = keyof typeof fontOptions

export const DEFAULT_FONT: FontId = 'modern'
export const FONT_STORAGE_KEY = 'northstar-dashboard-font'

export function isFontId(value: string | null): value is FontId {
  return value !== null && value in fontOptions
}
