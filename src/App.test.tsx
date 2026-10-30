import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
    const themeColor = document.createElement('meta')
    themeColor.name = 'theme-color'
    themeColor.content = '#0b0f17'
    document.head.append(themeColor)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
    document.querySelector('meta[name="theme-color"]')?.remove()
  })

  it('renders the business summary and deterministic transaction data', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /good evening, aamir/i })).toBeInTheDocument()
    expect(screen.getByText('$128,430')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recent transactions/i })).toBeInTheDocument()
    expect(screen.getByText('Olivia Martin')).toBeInTheDocument()
    expect(screen.getByText('INV-2048')).toBeInTheDocument()
    expect(screen.getByTestId('dashboard-confetti')).toHaveAttribute('aria-hidden', 'true')
  })

  it('opens and closes mobile navigation', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /open navigation/i }))
    expect(screen.getAllByRole('button', { name: /close navigation/i })).toHaveLength(2)

    fireEvent.click(screen.getAllByRole('button', { name: /close navigation/i })[0])
    expect(screen.queryByRole('button', { name: /close navigation/i })).not.toBeInTheDocument()
  })

  it('keeps dark mode as the default', () => {
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#0b0f17')
  })

  it('toggles both themes and restores the saved choice on a new visit', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<App />)

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem('northstar-theme')).toBe('light')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#f5f7fa')

    unmount()
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem('northstar-theme')).toBe('dark')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#0b0f17')
  })

  it('supports keyboard activation of the theme toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    screen.getByRole('button', { name: 'Switch to light mode' }).focus()

    await user.keyboard('{Enter}')
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')

    await user.keyboard(' ')
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  })

  it('uses dark mode for an invalid saved preference', () => {
    window.localStorage.setItem('northstar-theme', 'invalid')
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  })

  it('reports unavailable storage and still allows theme changes', async () => {
    const user = userEvent.setup()
    const error = new DOMException('Storage is blocked', 'SecurityError')
    vi.spyOn(window.Storage.prototype, 'getItem').mockImplementation(() => { throw error })
    vi.spyOn(window.Storage.prototype, 'setItem').mockImplementation(() => { throw error })
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(warn).toHaveBeenCalledWith('Unable to read the saved theme preference.', error)

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(warn).toHaveBeenCalledWith('Unable to save the theme preference.', error)
  })
})
