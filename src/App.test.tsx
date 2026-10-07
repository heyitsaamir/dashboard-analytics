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

  it('changes and persists the dashboard font', () => {
    const { container } = render(<App />)
    const fontControls = screen.getAllByRole('combobox', { name: /dashboard font/i })

    fireEvent.change(fontControls[0], { target: { value: 'serif' } })

    expect(container.querySelector('.app-shell')).toHaveAttribute('data-font', 'serif')
    expect(fontControls[1]).toHaveValue('serif')
    expect(window.localStorage.getItem('dashboard-font')).toBe('serif')
  })
})
