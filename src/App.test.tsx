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

  it('moves the decorative cat eyes toward the pointer', () => {
    const { container } = render(<App />)
    const cat = container.querySelector<HTMLElement>('.cursor-cat')

    expect(cat).not.toBeNull()

    cat!.getBoundingClientRect = () => ({
      bottom: 180,
      height: 80,
      left: 100,
      right: 180,
      top: 100,
      width: 80,
      x: 100,
      y: 100,
      toJSON: () => ({}),
    })

    const pointerMove = new Event('pointermove')
    Object.defineProperties(pointerMove, {
      clientX: { value: 300 },
      clientY: { value: 140 },
    })
    fireEvent(window, pointerMove)

    expect(cat).toHaveStyle({
      '--cat-look-x': '3.00px',
      '--cat-look-y': '0.00px',
    })
  })
})
