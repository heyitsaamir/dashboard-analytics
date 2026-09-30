import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
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

  it('shows and removes balloons from the decoration dropdown', () => {
    render(<App />)

    const decorationSelect = screen.getByRole('combobox', { name: /page decoration/i })
    expect(screen.queryByTestId('balloon-overlay')).not.toBeInTheDocument()

    fireEvent.change(decorationSelect, { target: { value: 'balloons' } })
    expect(screen.getByTestId('balloon-overlay')).toBeInTheDocument()

    fireEvent.change(decorationSelect, { target: { value: 'none' } })
    expect(screen.queryByTestId('balloon-overlay')).not.toBeInTheDocument()
  })
})
