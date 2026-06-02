'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false, loading: () => null })

export default function HeroSection() {
  const [showScene, setShowScene] = useState(false)

  useEffect(() => {
    const check = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setShowScene(window.innerWidth >= 1024 && !reduced)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
      {/* Emerald ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900, height: 500,
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.055) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className={`grid gap-12 lg:gap-16 items-center ${
          showScene ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-3xl mx-auto'
        }`}>

          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1e2d45] bg-[#080e18] text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
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
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)',
              }}
            >
              Digital Products<br />
              <em style={{ fontStyle: 'italic', color: '#10b981' }}>Built to Scale</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#8899aa] text-lg leading-relaxed mb-10 max-w-lg"
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-white text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all duration-200 hover:shadow-[0_0_28px_rgba(16,185,129,0.35)]"
              >
                Start your project
              </a>
              <a
                href="/#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2a2a2a] text-[#8899aa] text-sm font-medium rounded-full hover:border-[#444] hover:text-white transition-colors"
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

          {/* Right: 3D Scene — desktop only */}
          {showScene && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="hidden lg:block"
              style={{ height: '520px' }}
            >
              <HeroScene />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
