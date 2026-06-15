'use client'

import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from './motion'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
    })

    let frameId: number
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    // Smooth in-page anchor scrolling (nav links, hero/footer CTAs) — only
    // for same-page hash links (e.g. "/#services" or "#services").
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href*="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const hash = href.slice(hashIndex)
      const path = href.slice(0, hashIndex)
      if (hash.length <= 1) return
      if (path && path !== window.location.pathname) return

      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [reduced])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
