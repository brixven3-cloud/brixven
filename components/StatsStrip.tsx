'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/content'

export default function StatsStrip() {
  return (
    <section className="py-12 sm:py-14 border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444444] mb-8 sm:mb-10">
          — Trusted by businesses in Pakistan &amp; the UK —
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555555]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
