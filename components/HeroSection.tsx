'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import VoiceRobot from './VoiceRobot'

// ─── Design constants ────────────────────────────────────────────────────────
// Everything is authored for a 480 px container.
// At runtime --s is set to the actual rendered width (with "px" unit), so
//   calc(var(--s, 480px) * 0.XXXX)  scales every dimension proportionally.

const DESIGN = 480

function sc(px: number): string {
  return `calc(var(--s, ${DESIGN}px) * ${(px / DESIGN).toFixed(4)})`
}
function scn(px: number): string {
  // negative — used for "top: -radius" positioning of orbit nodes
  return `calc(var(--s, ${DESIGN}px) * ${(-px / DESIGN).toFixed(4)})`
}

// ─── Node layout ─────────────────────────────────────────────────────────────
// 3 rings × 2 nodes each = 6 chips, evenly staggered (180° apart per ring,
// offset 60° between rings so no two labels ever sit at the same angle).
//
// Angle offset → delay = -(duration × angle / 360)
//
//   Ring 1 r=90  T=10s   Voice AI  @   0° (delay   0)
//                        Lead Gen  @ 180° (delay  -5)
//   Ring 2 r=128 T=16s   Chat AI   @  60° (delay  -2.67)
//                        Automation@ 240° (delay -10.67)
//   Ring 3 r=168 T=22s   Business AI@ 120° (delay  -7.33)
//                        E-Commerce @ 300° (delay -18.33)

const NODES = [
  { label: 'Voice AI',    radius:  90, duration: 10, delay:   0     },
  { label: 'Lead Gen',    radius:  90, duration: 10, delay:  -5     },
  { label: 'Chat AI',     radius: 128, duration: 16, delay:  -2.67  },
  { label: 'Automation',  radius: 128, duration: 16, delay: -10.67  },
  { label: 'Business AI', radius: 168, duration: 22, delay:  -7.33  },
  { label: 'E-Commerce',  radius: 168, duration: 22, delay: -18.33  },
] as const

// ─── Orbit node ──────────────────────────────────────────────────────────────
// Two-wrapper technique:
//   • outer (.ai-orbit)         rotates clockwise
//   • inner (.ai-counter-orbit) counter-rotates at the same rate
// Same duration + delay → they cancel → label orbits the core but never spins.
function OrbitNode({
  label, radius, duration, delay,
}: {
  label: string; radius: number; duration: number; delay: number
}) {
  const timing: React.CSSProperties = {
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  }
  return (
    <div className="ai-orbit" style={timing}>
      <div className="ai-counter-orbit" style={{ ...timing, top: scn(radius) }}>
        <span
          style={{
            display: 'inline-block',
            // padding and font scale with viewport so chips stay readable
            padding: 'clamp(2px, 0.55vw, 3px) clamp(7px, 1.9vw, 11px)',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 9999,
            background: '#000',
            fontSize: 'clamp(8px, 2.3vw, 10px)',
            fontWeight: 700,
            letterSpacing: '0.09em',
            textTransform: 'uppercase' as const,
            color: 'rgba(255,255,255,0.72)',
            whiteSpace: 'nowrap' as const,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

// ─── Ring border ─────────────────────────────────────────────────────────────
function Ring({ d, opacity }: { d: number; opacity: string }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width:  sc(d),
        height: sc(d),
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        border: `1px solid rgba(255,255,255,${opacity})`,
      }}
    />
  )
}

// ─── AI Agent Visual ──────────────────────────────────────────────────────────
function AIAgentVisual() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Set --s = actual rendered width so all sc() / scn() calls scale correctly
    const update = () => el.style.setProperty('--s', `${el.clientWidth}px`)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    // max-w changes by breakpoint; w-full fills the column up to that cap
    <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[460px] xl:max-w-[480px] mx-auto lg:mx-0">
      {/* Square container — --s is set here and inherited by all children */}
      <div ref={ref} className="relative w-full aspect-square">

        {/* ── Decorative ring borders ── */}
        <Ring d={180} opacity="0.10" />
        <Ring d={256} opacity="0.07" />
        <Ring d={336} opacity="0.04" />

        {/* ── All 6 orbit nodes — visible at every breakpoint ── */}
        {NODES.map((n) => (
          <OrbitNode key={n.label} {...n} />
        ))}

        {/* ── Ambient glow (behind core) ── */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: sc(140), height: sc(140),
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
              width: sc(80), height: sc(80),
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.22)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animationName: 'aiCorePulse',
              animationDuration: '4s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          >
            <div
              style={{
                width: sc(54), height: sc(54),
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.32)',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{
                fontSize: 'clamp(8px, 2.1vw, 11px)',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.85)',
              }}>
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
              serving growing businesses across the UK &amp; Ireland.
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
              {['🇬🇧 United Kingdom', '🇮🇪 Ireland'].map((item) => (
                <span key={item} className="text-xs text-[#555] font-medium">{item}</span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: AI visual ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <VoiceRobot />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
