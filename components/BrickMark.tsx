'use client'

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from './motion'

export type MarkState = 'hero' | 'pinwheel' | 'circle' | 'semicircle'

interface BrickConfig {
  x: number
  y: number
  rotate: number
  width: number
  height: number
  borderRadius: string
  opacity: number
}

// 4 red blocks, each 52×52px, positioned relative to a 200×200 centred container
const CONFIGS: Record<MarkState, BrickConfig[]> = {
  hero: [
    { x: -29, y: -29, rotate: 0, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x:  29, y: -29, rotate: 0, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x: -29, y:  29, rotate: 0, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x:  29, y:  29, rotate: 0, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
  ],
  pinwheel: [
    { x: -50, y: -50, rotate: -45, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x:  50, y: -50, rotate:  45, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x: -50, y:  50, rotate:  45, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
    { x:  50, y:  50, rotate: -45, width: 52, height: 52, borderRadius: '2px', opacity: 1 },
  ],
  circle: [
    { x: 0, y: 0, rotate: 0,   width: 112, height: 112, borderRadius: '50%', opacity: 1 },
    { x: 0, y: 0, rotate: 90,  width: 112, height: 112, borderRadius: '50%', opacity: 0 },
    { x: 0, y: 0, rotate: 180, width: 112, height: 112, borderRadius: '50%', opacity: 0 },
    { x: 0, y: 0, rotate: 270, width: 112, height: 112, borderRadius: '50%', opacity: 0 },
  ],
  semicircle: [
    { x: -30, y: 0, rotate: 0, width: 56, height: 112, borderRadius: '112px 0 0 112px', opacity: 1 },
    { x:  30, y: 0, rotate: 0, width: 56, height: 112, borderRadius: '0 112px 112px 0', opacity: 1 },
    { x:   0, y: 0, rotate: 0, width:  0, height:   0, borderRadius: '0',               opacity: 0 },
    { x:   0, y: 0, rotate: 0, width:  0, height:   0, borderRadius: '0',               opacity: 0 },
  ],
}

const SPRING = { type: 'spring', stiffness: 80, damping: 18, mass: 1 } as const

interface BrickMarkProps {
  state: MarkState
  /** Size of the container square in px */
  size?: number
  className?: string
}

export default function BrickMark({ state, size = 200, className = '' }: BrickMarkProps) {
  const reduced = usePrefersReducedMotion()
  const blocks = CONFIGS[state]

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {blocks.map((cfg, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            background: '#D4A574',
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={
            reduced
              ? { opacity: cfg.opacity }
              : {
                  x: cfg.x,
                  y: cfg.y,
                  rotate: cfg.rotate,
                  width: cfg.width,
                  height: cfg.height,
                  borderRadius: cfg.borderRadius,
                  opacity: cfg.opacity,
                }
          }
          transition={reduced ? { duration: 0.4 } : SPRING}
          initial={false}
        />
      ))}
    </div>
  )
}
