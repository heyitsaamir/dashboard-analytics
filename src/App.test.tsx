import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
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

  it('changes and remembers the dashboard font', () => {
    const { container, unmount } = render(<App />)
    const fontSelect = screen.getByRole('combobox', { name: /dashboard font/i })

    fireEvent.change(fontSelect, { target: { value: 'serif' } })

    expect(fontSelect).toHaveValue('serif')
    expect(container.querySelector('.app-shell')).toHaveStyle(
      '--font-family: Georgia, "Times New Roman", serif',
    )
    expect(window.localStorage.getItem('northstar-dashboard-font')).toBe('serif')

    unmount()
    render(<App />)

    expect(screen.getByRole('combobox', { name: /dashboard font/i })).toHaveValue('serif')
  })
})
