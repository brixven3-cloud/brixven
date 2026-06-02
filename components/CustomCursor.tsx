'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const ringX = useSpring(x, { stiffness: 180, damping: 22 })
  const ringY = useSpring(y, { stiffness: 180, damping: 22 })
  const dotX  = useSpring(x, { stiffness: 600, damping: 35 })
  const dotY  = useSpring(y, { stiffness: 600, damping: 35 })

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      {/* Outer ring — follows with lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: 30, height: 30,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
        }}
      />
      {/* Inner emerald dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          width: 5, height: 5,
          borderRadius: '50%',
          background: '#10b981',
        }}
      />
    </>
  )
}
