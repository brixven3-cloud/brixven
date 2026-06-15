'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import VoiceRobot from './VoiceRobot'
import { Reveal, SplitLines, Magnetic, EASE_PREMIUM, usePrefersReducedMotion } from './motion'

// ─── Scroll cue ──────────────────────────────────────────────────────────────
// Small looping hint at the bottom of the hero. The loop itself is skipped
// under prefers-reduced-motion — only the one-time fade-in remains.
function ScrollCue() {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 text-[#444] pointer-events-none"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
      <motion.span
        className="block w-px h-8 bg-[#333]"
        style={{ transformOrigin: 'top' }}
        animate={reduced ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
        transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden flex items-center">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
        {/* Two-column on lg+; single column (text then visual) on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#0a0a0a] text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                UK · Ireland
                <ArrowRight size={11} className="text-[#555]" />
              </span>
            </motion.div>

            <SplitLines
              as="h1"
              className="font-bold text-white leading-[1.04] tracking-tight mb-5"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
              }}
              delay={0.05}
              stagger={0.12}
              lines={[
                'Digital Products',
                <em key="accent" style={{ fontStyle: 'italic', color: '#cccccc' }}>
                  Built to Scale
                </em>,
              ]}
            />

            {/* Red accent — animates in last as the focal point */}
            <motion.div
              className="h-[3px] w-14 sm:w-16 bg-accent rounded-full mb-6 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.95, ease: EASE_PREMIUM }}
            />

            <Reveal delay={0.25} duration={0.5} y={16} className="mb-10 max-w-lg">
              <p className="text-[#888] text-lg leading-relaxed">
                Web apps, mobile apps, AI voice agents &amp; expert SEO —
                serving growing businesses across the UK &amp; Ireland, from London and Manchester to Dublin and Cork.
              </p>
            </Reveal>

            <Reveal delay={0.35} duration={0.5} y={14} className="mb-10">
              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e8e8e8] transition-all duration-200"
                  >
                    Start your project
                  </a>
                </Magnetic>
                <a
                  href="/#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2a2a2a] text-[#888] text-sm font-medium rounded-full hover:border-[#444] hover:text-white transition-colors"
                >
                  View our work <ArrowRight size={13} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.45} duration={0.5}>
              <div className="flex flex-wrap items-center gap-6">
                {['🇬🇧 United Kingdom', '🇮🇪 Ireland'].map((item) => (
                  <span key={item} className="text-xs text-[#555] font-medium">{item}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right: AI visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE_PREMIUM }}
            className="flex items-center justify-center lg:justify-end"
          >
            <VoiceRobot />
          </motion.div>

        </div>
      </div>

      <ScrollCue />
    </section>
  )
}
