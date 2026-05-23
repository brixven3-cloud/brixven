'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function PuzzleCube() {
  const faces = [
    { name: 'front',  transform: 'rotateY(0deg)   translateZ(120px)' },
    { name: 'back',   transform: 'rotateY(180deg)  translateZ(120px)' },
    { name: 'right',  transform: 'rotateY(90deg)   translateZ(120px)' },
    { name: 'left',   transform: 'rotateY(-90deg)  translateZ(120px)' },
    { name: 'top',    transform: 'rotateX(90deg)   translateZ(120px)' },
    { name: 'bottom', transform: 'rotateX(-90deg)  translateZ(120px)' },
  ]

  const faceStyles: Record<string, React.CSSProperties> = {
    front:  { background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)' },
    back:   { background: 'linear-gradient(135deg, #111111 0%, #0a0a0a 100%)' },
    right:  { background: 'linear-gradient(135deg, #222222 0%, #111111 100%)' },
    left:   { background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)' },
    top:    { background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' },
    bottom: { background: 'linear-gradient(135deg, #0d0d0d 0%, #050505 100%)' },
  }

  const Cell = ({ dotted }: { dotted?: boolean }) => (
    <div style={{
      border: '1px solid #2a2a2a',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {dotted && (
        <div style={{
          width: 4, height: 4,
          borderRadius: '50%',
          background: '#3a3a3a',
        }} />
      )}
    </div>
  )

  const dotPattern = [true, false, true, false, true, false, true, false, true]

  return (
    <div style={{ perspective: '900px' }} className="flex items-center justify-center w-full h-full">
      <div
        style={{
          width: 240,
          height: 240,
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'rotateCube 18s linear infinite',
          transform: 'rotateX(-15deg) rotateY(25deg)',
        }}
      >
        {faces.map((face) => (
          <div
            key={face.name}
            style={{
              position: 'absolute',
              width: 240,
              height: 240,
              transform: face.transform,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              ...faceStyles[face.name],
              border: '1px solid #2a2a2a',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              gap: 3,
              padding: 8,
              boxSizing: 'border-box' as const,
            }}
          >
            {dotPattern.map((dotted, i) => (
              <Cell key={i} dotted={face.name === 'front' || face.name === 'top' ? dotted : false} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-32 bg-black overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Announcement badge — Resend style */}
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

            {/* Headline — Resend style: massive serif */}
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

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#888888] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Web apps, mobile apps, AI assistants &amp; expert SEO —
              serving clients across Pakistan and the UK.
            </motion.p>

            {/* CTAs — Resend style */}
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

            {/* Trust row */}
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

          {/* Right: 3D Puzzle Cube — Resend style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden md:flex items-center justify-center h-[420px] relative"
          >
            {/* Ambient glow behind cube */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, #ffffff08 0%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            <div style={{ animation: 'floatCube 6s ease-in-out infinite' }}>
              <PuzzleCube />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
