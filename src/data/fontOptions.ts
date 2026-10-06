export const fontOptions = [
  {
    id: 'inter',
    label: 'Inter',
    family:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  {
    id: 'serif',
    label: 'Georgia',
    family: 'Georgia, "Times New Roman", serif',
  },
  {
    id: 'mono',
    label: 'Mono',
    family: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  },
] as const

export type FontId = (typeof fontOptions)[number]['id']

export function isFontId(value: string | null): value is FontId {
  return fontOptions.some((font) => font.id === value)
}
