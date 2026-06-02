'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────
interface NodeDef {
  label: string
  radius: number   // px from centre (designed for 480px container)
  duration: number // orbit period in seconds
  delay: number    // negative = start mid-orbit (angle offset trick)
}

// ─── Orbit node ──────────────────────────────────────────────────────────────
// Two-wrapper technique:
//  • Outer (.ai-orbit) rotates around the centre point
//  • Inner (.ai-counter-orbit) counter-rotates so the label stays upright
// Same duration + delay on both = they cancel → label orbits but never spins.
function OrbitNode({ label, radius, duration, delay }: NodeDef) {
  const timing: React.CSSProperties = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  }
  return (
    <div className="ai-orbit" style={timing}>
      <div
        className="ai-counter-orbit"
        style={{ ...timing, top: -radius }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '3px 11px',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 9999,
            background: '#000',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.72)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

// ─── Ring border (static decorative circle) ───────────────────────────────────
function Ring({ size, opacity }: { size: number; opacity: string }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: `1px solid rgba(255,255,255,${opacity})`,
      }}
    />
  )
}

// ─── AI Agent Visual ──────────────────────────────────────────────────────────
//
// Three concentric orbit rings, each progressively shown at larger breakpoints:
//   Ring 1 (180px Ø) — always visible, 2 nodes
//   Ring 2 (264px Ø) — sm+ (≥640 px), 2 nodes
//   Ring 3 (368px Ø) — lg+ (≥1024 px), 1 node
//
// Angle offset via negative animation-delay:
//   Start angle θ° on a ring with period T →  delay = -(T * θ / 360)
//
//   Ring 1 (T=10s): Voice AI @ 0°, Lead Gen @ 180° (-5s)
//   Ring 2 (T=16s): Chat AI @ 45° (-2s), Automation @ 225° (-10s)
//   Ring 3 (T=24s): Business AI @ 315° (-21s)
//
function AIAgentVisual() {
  return (
    <div className="flex items-center justify-center w-full">
      {/* Container — min() keeps it inside any column width */}
      <div
        className="relative"
        style={{ width: 'min(480px, 88vw)', height: 'min(480px, 88vw)' }}
      >
        {/* ── Ring borders (decorative, non-animated) ── */}
        <Ring size={180} opacity="0.10" />
        <div className="hidden sm:block">
          <Ring size={264} opacity="0.06" />
        </div>
        <div className="hidden lg:block">
          <Ring size={368} opacity="0.04" />
        </div>

        {/* ── Orbit nodes — Ring 1 (always) ── */}
        <OrbitNode label="Voice AI" radius={90}  duration={10} delay={0}   />
        <OrbitNode label="Lead Gen" radius={90}  duration={10} delay={-5}  />

        {/* ── Orbit nodes — Ring 2 (sm+) ── */}
        {/* Wrapper has display:block / none; absolute children still anchor to the relative container */}
        <div className="hidden sm:block">
          <OrbitNode label="Chat AI"    radius={132} duration={16} delay={-2}  />
          <OrbitNode label="Automation" radius={132} duration={16} delay={-10} />
        </div>

        {/* ── Orbit nodes — Ring 3 (lg+) ── */}
        <div className="hidden lg:block">
          <OrbitNode label="Business AI" radius={184} duration={24} delay={-21} />
        </div>

        {/* ── Ambient glow (behind core) ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
          style={{
            width: 140, height: 140,
            background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
            animationName: 'aiGlowPulse',
            animationDuration: '4s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />

        {/* ── Core ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            style={{
              width: 80, height: 80,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animationName: 'aiCorePulse',
              animationDuration: '4s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          >
            <div
              style={{
                width: 54, height: 54,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.32)',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        {/* Two-column on lg+; single column (stacked) on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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
                UK · Ireland · Europe · Pakistan
                <ArrowRight size={11} className="text-[#555]" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
              }}
            >
              Digital Products<br />
              <em style={{ fontStyle: 'italic', color: '#cccccc' }}>Built to Scale</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#888] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Web apps, mobile apps, AI assistants &amp; expert SEO —
              serving growing businesses across the UK, Ireland, and Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e8e8e8] transition-all duration-200"
              >
                Start your project
              </a>
              <a
                href="/#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2a2a2a] text-[#888] text-sm font-medium rounded-full hover:border-[#444] hover:text-white transition-colors"
              >
                View our work <ArrowRight size={13} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              {['🇬🇧 UK', '🇮🇪 Ireland', '🇪🇺 Europe', '⭐ 5-star rated'].map((item) => (
                <span key={item} className="text-xs text-[#555] font-medium">{item}</span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: AI visual ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <AIAgentVisual />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
