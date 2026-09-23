import '@testing-library/jest-dom/vitest'
import { cloneElement, isValidElement, type ReactElement } from 'react'
import { vi } from 'vitest'

vi.mock('recharts', async () => {
  const actual = await vi.importActual<typeof import('recharts')>('recharts')

  return {
    ...actual,
    ResponsiveContainer: ({
      children,
    }: {
      children: ReactElement<{ width?: number; height?: number }>
    }) =>
      isValidElement(children)
        ? cloneElement(children, { width: 800, height: 300 })
        : children,
  }
})

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock
