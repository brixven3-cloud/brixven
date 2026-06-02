'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({
  value,
  duration = 1.8,
}: {
  value: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const numMatch = value.match(/^(\d+)(.*)$/)
  const [display, setDisplay] = useState(numMatch ? '0' + numMatch[2] : value)

  useEffect(() => {
    if (!inView) return
    if (!numMatch) { setDisplay(value); return }

    const target = parseInt(numMatch[1])
    const suffix = numMatch[2]
    const start = performance.now()

    const frame = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(ease * target) + suffix)
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return <span ref={ref}>{display}</span>
}
