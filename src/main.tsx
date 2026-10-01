import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'
import './index.css'
import { applyTheme, getInitialTheme } from './theme'

registerSW({ immediate: true })

const initialTheme = getInitialTheme()
applyTheme(initialTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initialTheme={initialTheme} />
  </StrictMode>,
)
