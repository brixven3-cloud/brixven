'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from 'framer-motion'
import { cn } from '@/lib/utils'

// Shared "premium" ease — restrained, confident deceleration.
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const

/**
 * Tracks the user's `prefers-reduced-motion` preference. Reads the media
 * query synchronously on first client render so there's no flash of motion
 * before the preference is known.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

// ─── Reveal ──────────────────────────────────────────────────────────────────
// Fades + translates a single element up into place when it enters the
// viewport. The workhorse for section headings, paragraphs, and standalone
// blocks. Reduced-motion is handled globally by <MotionConfig reducedMotion="user">.

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, duration = 0.7, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  )
}

// ─── Stagger group / item ───────────────────────────────────────────────────
// Container + child pair for revealing lists, grids, and nav items with a
// short stagger. Wrap the group around the children and mark each direct
// child that should animate with <StaggerItem>.

interface StaggerGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function StaggerGroup({ children, className, stagger = 0.08, delay = 0 }: StaggerGroupProps) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  y?: number
  duration?: number
  hover?: boolean
}

const itemVariants = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration, ease: EASE_PREMIUM } },
})

// `hover` adds a subtle -4px lift via whileHover (rather than a CSS
// `hover:-translate-y-1` utility, which would be overridden by the inline
// transform Framer Motion already applies after the reveal animation).
export function StaggerItem({ children, className, y = 20, duration = 0.6, hover = false }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={itemVariants(y, duration)}
      whileHover={hover ? { y: -4, transition: { duration: 0.25, ease: EASE_PREMIUM } } : undefined}
    >
      {children}
    </motion.div>
  )
}

// ─── SplitLines ──────────────────────────────────────────────────────────────
// Reveals an array of lines one-by-one with a slight upward translate — the
// signature "premium" headline treatment. Each line is wrapped in an
// overflow-hidden mask so the motion reads as a reveal, not a fade.

interface SplitLinesProps {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  style?: CSSProperties
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
}

export function SplitLines({
  lines,
  className,
  lineClassName,
  style,
  delay = 0,
  stagger = 0.1,
  as: Tag = 'div',
}: SplitLinesProps) {
  return (
    <Tag className={className} style={style}>
      {lines.map((line, i) => (
        <span key={i} className={cn('block overflow-hidden', lineClassName)}>
          <motion.span
            className="block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE_PREMIUM }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

// ─── Parallax ────────────────────────────────────────────────────────────────
// Subtle scroll-linked vertical drift, GPU transform only. `speed` is the
// total travel distance as a fraction of the element's height (e.g. 0.15 = 15%).

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const range = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [`-${range / 2}%`, `${range / 2}%`])

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  )
}

// ─── Magnetic ────────────────────────────────────────────────────────────────
// Wraps buttons/links so they subtly follow the cursor within a small radius.
// Desktop + fine-pointer only; no-ops under reduced motion or on touch.

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 12 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    if (!el) return

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      x.set((relX / rect.width) * strength)
      y.set((relY / rect.height) * strength)
    }
    function handleLeave() {
      x.set(0)
      y.set(0)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [reduced, strength, x, y])

  return (
    <motion.div ref={ref} className={cn('inline-block', className)} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  )
}

// ─── Counter ─────────────────────────────────────────────────────────────────
// Animated number count-up, triggered once when in view. Always renders the
// real target value first so SSR/slow-JS/reduced-motion users never see "0".

interface CounterProps {
  value: string
  duration?: number
  className?: string
}

export function Counter({ value, duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduced = usePrefersReducedMotion()
  const [display, setDisplay] = useState(value)

  const numMatch = value.match(/^(\d+)(.*)$/)

  useEffect(() => {
    if (!inView || !numMatch || reduced) return

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
  }, [inView, reduced])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
