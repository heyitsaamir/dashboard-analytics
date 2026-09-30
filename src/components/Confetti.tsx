const particles = [
  { left: 3, top: 18, delay: -1.2, duration: 4.6, rotation: 18 },
  { left: 8, top: 70, delay: -2.8, duration: 5.2, rotation: 52 },
  { left: 13, top: 34, delay: -0.6, duration: 4.1, rotation: -24 },
  { left: 18, top: 92, delay: -3.4, duration: 5.8, rotation: 38 },
  { left: 23, top: 12, delay: -1.8, duration: 4.9, rotation: -45 },
  { left: 29, top: 58, delay: -4.1, duration: 6.2, rotation: 65 },
  { left: 35, top: 24, delay: -2.2, duration: 5.4, rotation: 12 },
  { left: 41, top: 82, delay: -0.9, duration: 4.4, rotation: -62 },
  { left: 47, top: 46, delay: -3.1, duration: 5.7, rotation: 34 },
  { left: 53, top: 8, delay: -1.5, duration: 4.8, rotation: -18 },
  { left: 59, top: 72, delay: -3.8, duration: 6.1, rotation: 48 },
  { left: 64, top: 32, delay: -0.4, duration: 4.3, rotation: -36 },
  { left: 69, top: 98, delay: -2.5, duration: 5.5, rotation: 22 },
  { left: 74, top: 18, delay: -4.4, duration: 6.4, rotation: 58 },
  { left: 79, top: 62, delay: -1.1, duration: 4.7, rotation: -52 },
  { left: 84, top: 40, delay: -3.6, duration: 5.9, rotation: 28 },
  { left: 89, top: 88, delay: -2, duration: 5.1, rotation: -16 },
  { left: 94, top: 26, delay: -4, duration: 6, rotation: 44 },
  { left: 97, top: 68, delay: -0.7, duration: 4.5, rotation: -34 },
]

export function Confetti() {
  return (
    <div className="confetti-layer" data-testid="dashboard-confetti" aria-hidden="true">
      {particles.map((particle) => (
        <span
          className="confetti-piece"
          key={`${particle.left}-${particle.top}`}
          style={{
            left: `${particle.left}%`,
            top: particle.top,
            rotate: `${particle.rotation}deg`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
