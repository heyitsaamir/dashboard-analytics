import '@testing-library/jest-dom/vitest'
import { cloneElement, isValidElement, type ReactElement } from 'react'
import { vi } from 'vitest'

const localStorageValues = new Map<string, string>()

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: {
    getItem: vi.fn((key: string) => localStorageValues.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => localStorageValues.set(key, value)),
    removeItem: vi.fn((key: string) => localStorageValues.delete(key)),
    clear: vi.fn(() => localStorageValues.clear()),
  },
})

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
