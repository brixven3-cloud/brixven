'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function HeroMockup() {
  return (
    <div className="pt-4 pr-4 pb-10 pl-10 sm:pt-2 sm:pr-2 sm:pb-8 sm:pl-8">
      <div className="relative w-full max-w-lg mx-auto lg:mx-0">
        {/* Subtle glow */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A96E]/10 via-transparent to-[#ffffff]/5 rounded-3xl" />

        {/* Main card */}
        <div className="relative bg-[#111111] rounded-2xl border border-[#222222] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#222222] bg-[#0a0a0a]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
            <div className="flex-1 mx-3 h-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md flex items-center px-2">
              <span className="text-[9px] text-[#555555]">app.brixven.com/dashboard</span>
            </div>
          </div>

          <div className="p-5">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Revenue', value: '£84,200', change: '+12.4%' },
                { label: 'Users', value: '12,480', change: '+8.1%' },
                { label: 'Uptime', value: '99.9%', change: 'Stable' },
              ].map((s) => (
                <div key={s.label} className="bg-[#0a0a0a] rounded-xl p-3 border border-[#222222]">
                  <p className="text-[9px] text-[#555555] mb-1">{s.label}</p>
                  <p className="text-sm font-bold text-white">{s.value}</p>
                  <p className="text-[8px] text-emerald-400 font-medium mt-0.5">↑ {s.change}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-[#0a0a0a] rounded-xl border border-[#222222] p-4 mb-4">
              <div className="flex items-end justify-between gap-1.5 h-16">
                {[30, 52, 40, 68, 55, 72, 60, 85, 70, 90, 78, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? '#C9A96E' : i >= 9 ? '#ffffff' : '#2a2a2a',
                    }}
                  />
                ))}
              </div>
              <p className="text-[9px] text-[#555555] mt-2">Monthly revenue trend</p>
            </div>

            {/* Activity */}
            <div className="space-y-2">
              {[
                { dot: '#C9A96E', text: 'New client onboarded — TechCorp UK' },
                { dot: '#ffffff', text: 'Sprint 4 deployed to production' },
                { dot: '#34D399', text: 'SEO report ready for review' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.dot }} />
                  <span className="text-[10px] text-[#888888] truncate">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute top-1 right-1 bg-white text-black text-[10px] font-semibold tracking-wide px-3 py-1.5 shadow-lg uppercase">
          ✓ Live & running
        </div>
        <div className="absolute bottom-2 left-2 bg-[#111111] border border-[#222222] shadow-lg px-4 py-3">
          <p className="text-[9px] text-[#555555] uppercase tracking-wide">AI Resolved</p>
          <p className="text-lg font-black text-white">98.2%</p>
          <p className="text-[9px] text-emerald-400 font-medium">↑ Automated</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-32 bg-black overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#555555]">
                Software Agency — Pakistan &amp; UK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-bold text-white leading-[1.04] tracking-tight mb-5 sm:mb-6"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: 'clamp(2rem, 6vw, 4.75rem)',
              }}
            >
              We Build Software<br />
              That Powers Your{' '}
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Business</em>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[#888888] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              Web apps, mobile apps, AI assistants, custom software &amp; expert SEO —
              serving clients across <strong className="text-white font-semibold">Pakistan</strong> and the{' '}
              <strong className="text-white font-semibold">UK</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-col xs:flex-row sm:flex-row gap-3 mb-8 sm:mb-12"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#e0e0e0] transition-colors"
              >
                Start Your Project <ArrowRight size={13} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#333333] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-white transition-colors"
              >
                View Our Work <ArrowRight size={13} />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {['🇵🇰 Pakistan', '🇬🇧 United Kingdom', '⭐ 5-star rated'].map((item) => (
                <span key={item} className="text-xs text-[#555555] font-medium tracking-wide">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="hidden md:block"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
