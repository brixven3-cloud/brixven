'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function PuzzleCube() {
  const S = 300
  const H = S / 2

  type CellDef = { bg: string; dots?: boolean; shimmer?: boolean }
  type FaceDef = {
    transform: string
    border: string
    shadow?: string
    cells: CellDef[]
  }

  const dot = (bg: string): CellDef => ({ bg, dots: true })
  const solid = (bg: string): CellDef => ({ bg })
  const shim = (bg: string): CellDef => ({ bg, shimmer: true })

  const faces: FaceDef[] = [
    // FRONT — medium grey, dotted + solid mix, slight edge highlight
    {
      transform: `rotateY(0deg) translateZ(${H}px)`,
      border: '#2e2e2e',
      shadow: 'inset 0 0 30px rgba(255,255,255,0.03)',
      cells: [
        dot('#222222'), solid('#1a1a1a'), dot('#222222'),
        solid('#191919'), shim('#242424'), solid('#191919'),
        dot('#222222'), solid('#1a1a1a'), dot('#222222'),
      ],
    },
    // BACK — very dark
    {
      transform: `rotateY(180deg) translateZ(${H}px)`,
      border: '#111111',
      cells: Array(9).fill(solid('#0c0c0c')),
    },
    // RIGHT — slightly lit (right side catches some ambient light)
    {
      transform: `rotateY(90deg) translateZ(${H}px)`,
      border: '#252525',
      cells: [
        solid('#1e1e1e'), solid('#191919'), solid('#1a1a1a'),
        solid('#1c1c1c'), dot('#1f1f1f'), solid('#191919'),
        solid('#1a1a1a'), solid('#181818'), solid('#1a1a1a'),
      ],
    },
    // LEFT — darker (shadow side)
    {
      transform: `rotateY(-90deg) translateZ(${H}px)`,
      border: '#1c1c1c',
      cells: Array(9).fill(solid('#111111')),
    },
    // TOP — lightest face (catches most ambient light)
    {
      transform: `rotateX(90deg) translateZ(${H}px)`,
      border: '#383838',
      shadow: 'inset 0 0 40px rgba(255,255,255,0.06)',
      cells: [
        shim('#303030'), solid('#282828'), shim('#303030'),
        solid('#262626'), dot('#2e2e2e'), solid('#262626'),
        shim('#2c2c2c'), solid('#242424'), shim('#2c2c2c'),
      ],
    },
    // BOTTOM — darkest
    {
      transform: `rotateX(-90deg) translateZ(${H}px)`,
      border: '#111111',
      cells: Array(9).fill(solid('#070707')),
    },
  ]

  return (
    <div style={{ perspective: '1100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Drop shadow beneath cube */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 240,
            height: 40,
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            animation: 'floatCube 6s ease-in-out infinite',
          }}
        />

        <div
          style={{
            width: S,
            height: S,
            position: 'relative',
            transformStyle: 'preserve-3d',
            animation: 'rotateCube 24s linear infinite, floatCube 6s ease-in-out infinite',
          }}
        >
          {faces.map((face, fi) => (
            <div
              key={fi}
              style={{
                position: 'absolute',
                width: S,
                height: S,
                transform: face.transform,
                backfaceVisibility: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '5px',
                padding: '5px',
                boxSizing: 'border-box',
                background: '#000000',
                border: `1px solid ${face.border}`,
                boxShadow: face.shadow,
              }}
            >
              {face.cells.map((cell, ci) => (
                <div
                  key={ci}
                  style={{
                    background: cell.bg,
                    border: `1px solid ${face.border}`,
                    borderRadius: '3px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.04), inset -1px -1px 0 rgba(0,0,0,0.4)',
                  }}
                >
                  {cell.dots && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle, #3a3a3a 1px, transparent 1px)',
                        backgroundSize: '9px 9px',
                        backgroundPosition: '4px 4px',
                      }}
                    />
                  )}
                  {cell.shimmer && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-32 bg-black overflow-hidden">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient light — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
          animation: 'glowPulse 5s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Badge — Resend style pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] text-white text-xs font-medium hover:border-[#444444] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                Pakistan &amp; UK Software Agency
                <ArrowRight size={12} className="text-[#888888]" />
              </a>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              }}
            >
              Software for<br />
              <em style={{ fontStyle: 'italic' }}>Your Business</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#888888] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Web apps, mobile apps, AI assistants &amp; expert SEO —
              serving clients across Pakistan and the UK.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-row gap-4 mb-10"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e0e0e0] transition-colors"
              >
                Get started
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[#888888] text-sm font-medium hover:text-white transition-colors"
              >
                View our work
              </a>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap items-center gap-6"
            >
              {['🇵🇰 Pakistan', '🇬🇧 United Kingdom', '⭐ 5-star rated'].map((item) => (
                <span key={item} className="text-xs text-[#555555] font-medium">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden md:flex items-center justify-center h-[460px] relative"
          >
            {/* Glow behind cube */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,255,255,0.05) 0%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            <PuzzleCube />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
