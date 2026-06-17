'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BrickMark from './BrickMark'
import ArchLineart from './ArchLineart'
import { usePrefersReducedMotion } from './motion'
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp'

// Unsplash — Westminster / Houses of Parliament. Greyscale via CSS.
const BG_URL =
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=75&auto=format'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax on the background image (moves up slightly on scroll)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '14%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.06])

  // Copy fades out as hero scrolls away
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const copyY = useTransform(scrollYProgress, [0, 0.5], ['0%', reduced ? '0%' : '-8%'])

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-parchment overflow-hidden flex flex-col"
      style={{ paddingTop: '64px' }} /* navbar height */
    >
      {/* ── Atmospheric building background ── */}
      <motion.div
        className="absolute inset-0 building-bg pointer-events-none"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src={BG_URL}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{
            filter: 'grayscale(1)',
            mixBlendMode: 'multiply',
            opacity: 0.16,
          }}
        />
        {/* Heavy overlay to keep it atmospheric */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #EDEAE6 30%, rgba(237,234,230,0.7) 100%)' }}
        />
      </motion.div>

      {/* ── Hairline ── */}
      <div className="hairline absolute top-[64px] left-0 right-0 z-10" />

      {/* ── Architectural lineart ── */}
      <ArchLineart className="text-ink" />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex-1 flex items-center"
        style={{ opacity: copyOpacity, y: copyY }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
          {/*
            Editorial 3-zone layout:
            Left micro-para | Centre headline + mark | Right metadata
          */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-8 lg:gap-12 items-center">

            {/* Zone 1 — Left micro-paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <p
                className="text-ink-muted text-xs leading-relaxed"
                style={{ letterSpacing: '0.01em', maxWidth: 160 }}
              >
                Founder-led. AI-native. Built for the pace of UK & Ireland business.
              </p>
              <div className="mt-5 w-6 h-px bg-red" />
            </motion.div>

            {/* Zone 2 — Centre: big headline + morphing mark */}
            <div className="flex flex-col items-center text-center">
              {/* The morphing red mark — hero state */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10 lg:mb-14 relative"
              >
                <BrickMark state="hero" size={200} />
              </motion.div>

              {/* Headline overlapping the mark (negative margin pulls it up over the mark) */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black text-ink leading-[0.94] tracking-tight -mt-16 relative z-10"
                style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)' }}
              >
                Software &
                <br />
                <span className="relative inline-block">
                  AI,
                  {/* Red underline accent */}
                  <span
                    className="absolute bottom-1 left-0 right-0 h-[5px] bg-red"
                    style={{ zIndex: -1 }}
                  />
                </span>{' '}
                built for
                <br />
                UK &amp; Ireland.
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 text-ink-muted text-base lg:text-lg leading-relaxed max-w-lg mx-auto"
              >
                Web &amp; e-commerce development, AI voice agents, business automation,
                and paid ads — one lean senior team, full end-to-end ownership.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href={`https://wa.me/447828707081`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-parchment text-sm font-semibold tracking-wide hover:bg-red transition-colors duration-200"
                >
                  Talk to us
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-parchment transition-colors duration-200"
                >
                  Our services
                </Link>
              </motion.div>
            </div>

            {/* Zone 3 — Right metadata labels */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-6 items-end text-right"
            >
              {[
                { label: 'BASED', value: 'UK / IRE' },
                { label: 'STACK', value: 'WEB · AI · ADS' },
                { label: 'EST', value: '2025' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-ink-faint font-mono text-[10px] tracking-[0.14em] uppercase mb-0.5"
                  >
                    {label}
                  </p>
                  <p className="text-ink text-xs font-semibold tracking-wide">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom hairline ── */}
      <div className="hairline relative z-10" />

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[9px] text-ink-faint uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          className="block w-px h-8 bg-ink-faint"
          style={{ transformOrigin: 'top' }}
          animate={reduced ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
          transition={reduced ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
