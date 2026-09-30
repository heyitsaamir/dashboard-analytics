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

  it('launches repeatable celebration effects from the top bar', () => {
    const { container } = render(<App />)
    const picker = screen.getByRole('combobox', { name: /celebration effect/i })

    expect(screen.queryByTestId('celebration-effect')).not.toBeInTheDocument()

    fireEvent.change(picker, { target: { value: 'balloons' } })
    expect(screen.getByTestId('celebration-effect')).toHaveAttribute(
      'data-effect',
      'balloons',
    )
    expect(container.querySelectorAll('.celebration-particle')).toHaveLength(12)
    expect(picker).toHaveValue('')

    fireEvent.change(picker, { target: { value: 'confetti' } })
    expect(screen.getByTestId('celebration-effect')).toHaveAttribute(
      'data-effect',
      'confetti',
    )
    expect(container.querySelectorAll('.celebration-particle')).toHaveLength(42)
  })
})
