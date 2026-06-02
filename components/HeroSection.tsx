'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">
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
              fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            }}
          >
            Digital Products<br />
            <em style={{ fontStyle: 'italic', color: '#cccccc' }}>Built to Scale</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-[#888] text-lg leading-relaxed mb-10 max-w-xl"
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
      </div>
    </section>
  )
}
