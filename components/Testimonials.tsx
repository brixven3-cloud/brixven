'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/content'

export default function Testimonials() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444444] mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333333]" /> Client Stories <span className="w-6 h-px bg-[#333333]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Trusted Across<br />Two Countries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative bg-[#0a0a0a] p-8 flex flex-col gap-6 hover:bg-[#111111] transition-colors duration-300"
            >
              <span
                className="text-6xl font-bold text-white/10 leading-none -mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                &ldquo;
              </span>

              <p className="text-[#888888] text-[0.9375rem] leading-[1.8] flex-1 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a]">
                <div className="w-10 h-10 bg-white flex items-center justify-center text-black text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold">{t.name}</span>
                    <span>{t.flag}</span>
                  </div>
                  <div className="text-[#555555] text-xs tracking-wide">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
