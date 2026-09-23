import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('style')
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

  it('switches themes and persists the preference', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /switch to light theme/i }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(document.documentElement).toHaveStyle({ colorScheme: 'light' })
    expect(window.localStorage.getItem('northstar-theme')).toBe('light')
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument()
  })

  it('restores a saved light theme', () => {
    window.localStorage.setItem('northstar-theme', 'light')

    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument()
  })
})
