'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

function PuzzleCube({ size = 280 }: { size?: number }) {
  const cubeRef = useRef<HTMLDivElement>(null)
  const rotX = useRef(-20)
  const rotY = useRef(20)
  const velX = useRef(0)
  const velY = useRef(0)
  const isDragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)
  const autoTime = useRef(0)

  const S = size
  const H = S / 2
  const GAP = Math.round(S * 0.018)
  const PAD = GAP

  useEffect(() => {
    const tick = (timestamp: number) => {
      if (!isDragging.current) {
        if (Math.abs(velX.current) > 0.01 || Math.abs(velY.current) > 0.01) {
          // Inertia decay after drag
          rotX.current += velX.current
          rotY.current += velY.current
          velX.current *= 0.93
          velY.current *= 0.93
        } else {
          // Auto orbit
          autoTime.current = timestamp
          rotY.current += 0.25
          rotX.current += ((-20 + Math.sin(timestamp / 4000) * 8) - rotX.current) * 0.02
        }
        rotX.current = Math.max(-75, Math.min(75, rotX.current))
      }

      if (cubeRef.current) {
        cubeRef.current.style.transform =
          `rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`
      }
      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastPos.current.x
      const dy = e.clientY - lastPos.current.y
      velY.current = dx * 0.45
      velX.current = -dy * 0.45
      rotY.current += velY.current
      rotX.current = Math.max(-75, Math.min(75, rotX.current + velX.current))
      lastPos.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseUp = () => { isDragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  const startDrag = (x: number, y: number) => {
    isDragging.current = true
    velX.current = 0
    velY.current = 0
    lastPos.current = { x, y }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startDrag(e.touches[0].clientX, e.touches[0].clientY)
    const onTouchMove = (ev: TouchEvent) => {
      ev.preventDefault()
      if (!isDragging.current) return
      const dx = ev.touches[0].clientX - lastPos.current.x
      const dy = ev.touches[0].clientY - lastPos.current.y
      velY.current = dx * 0.45
      velX.current = -dy * 0.45
      rotY.current += velY.current
      rotX.current = Math.max(-75, Math.min(75, rotX.current + velX.current))
      lastPos.current = { x: ev.touches[0].clientX, y: ev.touches[0].clientY }
    }
    const onTouchEnd = () => {
      isDragging.current = false
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
  }

  type CellDef = { bg: string; dots?: boolean; shimmer?: boolean }
  type FaceDef = { transform: string; border: string; shadow?: string; cells: CellDef[] }

  const dot = (bg: string): CellDef => ({ bg, dots: true })
  const solid = (bg: string): CellDef => ({ bg })
  const shim = (bg: string): CellDef => ({ bg, shimmer: true })

  const faces: FaceDef[] = [
    {
      transform: `rotateY(0deg) translateZ(${H}px)`,
      border: '#2e2e2e',
      shadow: 'inset 0 0 30px rgba(255,255,255,0.03)',
      cells: [
        dot('#232323'), solid('#1a1a1a'), dot('#232323'),
        solid('#1a1a1a'), shim('#262626'), solid('#1a1a1a'),
        dot('#232323'), solid('#1a1a1a'), dot('#232323'),
      ],
    },
    {
      transform: `rotateY(180deg) translateZ(${H}px)`,
      border: '#111111',
      cells: Array(9).fill(solid('#0c0c0c')),
    },
    {
      transform: `rotateY(90deg) translateZ(${H}px)`,
      border: '#252525',
      cells: [
        solid('#1e1e1e'), solid('#191919'), solid('#1a1a1a'),
        solid('#1c1c1c'), dot('#202020'), solid('#191919'),
        solid('#1a1a1a'), solid('#181818'), solid('#1a1a1a'),
      ],
    },
    {
      transform: `rotateY(-90deg) translateZ(${H}px)`,
      border: '#1c1c1c',
      cells: Array(9).fill(solid('#111111')),
    },
    {
      transform: `rotateX(90deg) translateZ(${H}px)`,
      border: '#383838',
      shadow: 'inset 0 0 40px rgba(255,255,255,0.06)',
      cells: [
        shim('#313131'), solid('#282828'), shim('#313131'),
        solid('#272727'), dot('#2f2f2f'), solid('#272727'),
        shim('#2d2d2d'), solid('#252525'), shim('#2d2d2d'),
      ],
    },
    {
      transform: `rotateX(-90deg) translateZ(${H}px)`,
      border: '#111111',
      cells: Array(9).fill(solid('#070707')),
    },
  ]

  return (
    <div
      style={{ perspective: '1100px', cursor: 'grab' }}
      onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
      onTouchStart={handleTouchStart}
    >
      <div style={{ position: 'relative' }}>
        {/* Shadow beneath */}
        <div style={{
          position: 'absolute',
          bottom: -S * 0.22,
          left: '50%',
          transform: 'translateX(-50%)',
          width: S * 0.85,
          height: S * 0.14,
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          animation: 'floatCube 6s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Float wrapper */}
        <div style={{ animation: 'floatCube 6s ease-in-out infinite' }}>
          <div
            ref={cubeRef}
            style={{
              width: S,
              height: S,
              position: 'relative',
              transformStyle: 'preserve-3d',
              transform: `rotateX(-20deg) rotateY(20deg)`,
              userSelect: 'none',
            }}
          >
            {faces.map((face, fi) => (
              <div key={fi} style={{
                position: 'absolute',
                width: S,
                height: S,
                transform: face.transform,
                backfaceVisibility: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: `${GAP}px`,
                padding: `${PAD}px`,
                boxSizing: 'border-box',
                background: '#000000',
                border: `1px solid ${face.border}`,
                boxShadow: face.shadow,
              }}>
                {face.cells.map((cell, ci) => (
                  <div key={ci} style={{
                    background: cell.bg,
                    border: `1px solid ${face.border}`,
                    borderRadius: '3px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow:
                      'inset 1px 1px 0 rgba(255,255,255,0.05), inset -1px -1px 0 rgba(0,0,0,0.5)',
                  }}>
                    {cell.dots && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'radial-gradient(circle, #383838 1px, transparent 1px)',
                        backgroundSize: `${Math.round(S * 0.032)}px ${Math.round(S * 0.032)}px`,
                        backgroundPosition: '4px 4px',
                      }} />
                    )}
                    {cell.shimmer && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)',
                      }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [cubeSize, setCubeSize] = useState(280)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 400) setCubeSize(180)
      else if (window.innerWidth < 640) setCubeSize(220)
      else if (window.innerWidth < 1024) setCubeSize(250)
      else setCubeSize(300)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

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
      {/* Ambient light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
          animation: 'glowPulse 5s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
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

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#888888] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Web apps, mobile apps, AI assistants &amp; expert SEO —
              serving clients across Pakistan and the UK.
            </motion.p>

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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap items-center gap-6"
            >
              {['🇵🇰 Pakistan', '🇬🇧 United Kingdom', '⭐ 5-star rated'].map((item) => (
                <span key={item} className="text-xs text-[#555555] font-medium">{item}</span>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Cube — shown on all screens, responsive size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex items-center justify-center relative"
            style={{ minHeight: cubeSize + 80 }}
          >
            {/* Glow behind cube */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,255,255,0.05) 0%, transparent 70%)',
                animation: 'glowPulse 4s ease-in-out infinite',
              }}
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[#333333] select-none pointer-events-none">
              drag to rotate
            </p>
            <PuzzleCube size={cubeSize} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
