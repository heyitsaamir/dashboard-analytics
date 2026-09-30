import { useEffect, type CSSProperties } from 'react'

export type CelebrationType = 'balloons' | 'confetti' | 'sparkles'

type CelebrationProps = {
  type: CelebrationType
  onComplete: () => void
}

type ParticleStyle = CSSProperties & {
  '--drift'?: string
}

const particleCounts: Record<CelebrationType, number> = {
  balloons: 12,
  confetti: 42,
  sparkles: 24,
}

const celebrationDuration = 5600

function getParticleStyle(type: CelebrationType, index: number): ParticleStyle {
  const left = (index * 37 + 5) % 96

  if (type === 'balloons') {
    const size = 30 + (index % 5) * 4

    return {
      '--drift': `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 4) * 8)}px`,
      animationDelay: `${(index % 6) * 0.08}s`,
      animationDuration: `${4.2 + (index % 4) * 0.2}s`,
      height: `${Math.round(size * 1.24)}px`,
      left: `${left}%`,
      width: `${size}px`,
    }
  }

  if (type === 'sparkles') {
    return {
      animationDelay: `${(index % 8) * 0.12}s`,
      animationDuration: `${2.2 + (index % 5) * 0.18}s`,
      left: `${left}%`,
      top: `${8 + ((index * 29) % 82)}%`,
    }
  }

  return {
    animationDelay: `${(index % 9) * 0.06}s`,
    animationDuration: `${3.3 + (index % 5) * 0.2}s`,
    left: `${left}%`,
  }
}

export function Celebration({ type, onComplete }: CelebrationProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onComplete, celebrationDuration)

    return () => window.clearTimeout(timeout)
  }, [onComplete])

  return (
    <div
      className={`celebration-layer celebration-${type}`}
      data-effect={type}
      data-testid="celebration-effect"
      aria-hidden="true"
    >
      {Array.from({ length: particleCounts[type] }, (_, index) => (
        <span
          className="celebration-particle"
          key={index}
          style={getParticleStyle(type, index)}
        />
      ))}
    </div>
  )
}
