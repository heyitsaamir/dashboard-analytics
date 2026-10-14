import { useEffect, useRef } from 'react'

const MAX_PUPIL_OFFSET = 3

export function CursorCat() {
  const catRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const followPointer = (event: PointerEvent) => {
      const cat = catRef.current

      if (!cat) {
        return
      }

      const bounds = cat.getBoundingClientRect()
      const deltaX = event.clientX - (bounds.left + bounds.width / 2)
      const deltaY = event.clientY - (bounds.top + bounds.height / 2)
      const distance = Math.hypot(deltaX, deltaY)
      const scale = distance === 0 ? 0 : Math.min(MAX_PUPIL_OFFSET / distance, 1)

      cat.style.setProperty('--cat-look-x', `${(deltaX * scale).toFixed(2)}px`)
      cat.style.setProperty('--cat-look-y', `${(deltaY * scale).toFixed(2)}px`)
    }

    window.addEventListener('pointermove', followPointer, { passive: true })

    return () => window.removeEventListener('pointermove', followPointer)
  }, [])

  return (
    <div className="cursor-cat" ref={catRef} aria-hidden="true">
      <div className="cat-tail" />
      <div className="cat-body">
        <div className="cat-head">
          <span className="cat-ear cat-ear-left" />
          <span className="cat-ear cat-ear-right" />
          <span className="cat-eye cat-eye-left">
            <i />
          </span>
          <span className="cat-eye cat-eye-right">
            <i />
          </span>
          <span className="cat-nose" />
          <span className="cat-whiskers cat-whiskers-left" />
          <span className="cat-whiskers cat-whiskers-right" />
        </div>
        <span className="cat-paw cat-paw-left" />
        <span className="cat-paw cat-paw-right" />
      </div>
    </div>
  )
}
