import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
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

  it('changes and saves the dashboard font', async () => {
    const { unmount } = render(<App />)

    const fontSelect = screen.getByRole('combobox', { name: /dashboard font/i })
    const appShell = screen.getByRole('main').closest('.app-shell') as HTMLElement

    expect(fontSelect).toHaveValue('sans')

    fireEvent.change(fontSelect, { target: { value: 'serif' } })

    expect(appShell.style.getPropertyValue('--dashboard-font')).toContain('Georgia')
    await waitFor(() =>
      expect(localStorage.getItem('northstar-dashboard-font')).toBe('serif'),
    )

    unmount()
    render(<App />)

    expect(screen.getByRole('combobox', { name: /dashboard font/i })).toHaveValue('serif')
  })
})
