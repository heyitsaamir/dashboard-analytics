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

class LocalStorageMock implements Storage {
  private readonly values = new Map<string, string>()

  get length() {
    return this.values.size
  }

  clear() {
    this.values.clear()
  }

  getItem(key: string) {
    return this.values.get(key) ?? null
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null
  }

  removeItem(key: string) {
    this.values.delete(key)
  }

  setItem(key: string, value: string) {
    this.values.set(key, String(value))
  }
}

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: new LocalStorageMock(),
})
