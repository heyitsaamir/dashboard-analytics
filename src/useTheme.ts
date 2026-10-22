import { useLayoutEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function readTheme(): Theme {
  try {
    return window.localStorage.getItem('northstar-theme') === 'light' ? 'light' : 'dark'
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error)
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f5f7fa' : '#0b0f17')
  }, [theme])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)

    try {
      window.localStorage.setItem('northstar-theme', nextTheme)
    } catch (error) {
      console.warn('Unable to save the theme preference.', error)
    }
  }

  return { theme, toggleTheme }
}
