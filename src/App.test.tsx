import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

function mockSystemTheme(theme: 'dark' | 'light') {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: theme === 'light',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  })
}

describe('App', () => {
  beforeEach(() => {
    const values = new Map<string, string>()

    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        clear: () => values.clear(),
        getItem: (key: string) => values.get(key) ?? null,
        key: (index: number) => Array.from(values.keys())[index] ?? null,
        get length() {
          return values.size
        },
        removeItem: (key: string) => values.delete(key),
        setItem: (key: string, value: string) => values.set(key, value),
      } satisfies Storage,
    })
    mockSystemTheme('dark')
    delete document.documentElement.dataset.theme

    const themeColor =
      document.querySelector<HTMLMetaElement>('meta[name="theme-color"]') ??
      document.head.appendChild(document.createElement('meta'))
    themeColor.name = 'theme-color'
    themeColor.content = '#080c12'
  })

  it('renders the business summary and deterministic transaction data', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /good evening, aamir/i })).toBeInTheDocument()
    expect(screen.getByText('$128,430')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recent transactions/i })).toBeInTheDocument()
    expect(screen.getByText('Olivia Martin')).toBeInTheDocument()
    expect(screen.getByText('INV-2048')).toBeInTheDocument()
  })

  it('opens and closes mobile navigation', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /open navigation/i }))
    expect(screen.getAllByRole('button', { name: /close navigation/i })).toHaveLength(2)

    fireEvent.click(screen.getAllByRole('button', { name: /close navigation/i })[0])
    expect(screen.queryByRole('button', { name: /close navigation/i })).not.toBeInTheDocument()
  })

  it('switches themes and remembers the preference', () => {
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')

    fireEvent.click(screen.getByRole('button', { name: /switch to light theme/i }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem('northstar-theme')).toBe('light')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#f2f5f9')
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument()
  })

  it('uses a saved theme preference', () => {
    window.localStorage.setItem('northstar-theme', 'light')

    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument()
  })

  it('uses the system theme when no preference has been saved', () => {
    mockSystemTheme('light')

    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: light)')
  })
})
