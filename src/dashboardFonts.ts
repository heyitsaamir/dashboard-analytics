export const dashboardFonts = [
  {
    id: 'sans',
    label: 'Modern sans',
    family: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  {
    id: 'serif',
    label: 'Classic serif',
    family: 'Georgia, Cambria, "Times New Roman", serif',
  },
  {
    id: 'rounded',
    label: 'Rounded',
    family: '"Trebuchet MS", "Arial Rounded MT Bold", ui-sans-serif, system-ui, sans-serif',
  },
  {
    id: 'mono',
    label: 'Monospace',
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
] as const

export type DashboardFont = (typeof dashboardFonts)[number]['id']

export const defaultDashboardFont: DashboardFont = 'sans'

export function isDashboardFont(value: string | null): value is DashboardFont {
  return dashboardFonts.some((font) => font.id === value)
}

export function getDashboardFontFamily(fontId: DashboardFont) {
  return dashboardFonts.find((font) => font.id === fontId)?.family ?? dashboardFonts[0].family
}
