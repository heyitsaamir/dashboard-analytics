export type Theme = 'dark' | 'light'

const storageKey = 'northstar-theme'

const themeColors: Record<Theme, string> = {
  dark: '#080c12',
  light: '#f2f5f9',
}

export function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem(storageKey)

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', themeColors[theme])
}

export function saveTheme(theme: Theme) {
  window.localStorage.setItem(storageKey, theme)
}
