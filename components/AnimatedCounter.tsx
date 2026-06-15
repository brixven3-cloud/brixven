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

  // Always start with the real target value so SSR/slow-JS users never see a bare "0".
  const [display, setDisplay] = useState(value)

  const numMatch = value.match(/^(\d+)(.*)$/)

  useEffect(() => {
    if (!inView || !numMatch) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const target = parseInt(numMatch[1])
    const suffix = numMatch[2]
    const start = performance.now()

    setDisplay('0' + suffix)
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
