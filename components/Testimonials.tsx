'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/content'

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> Client Stories <span className="w-6 h-px bg-[#C9A96E]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Trusted Across<br />Two Countries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E4DC] border border-[#E8E4DC]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative bg-white p-8 flex flex-col gap-6 hover:bg-[#F9F8F5] transition-colors duration-300"
            >
              {/* Gold quote mark */}
              <span
                className="text-6xl font-bold text-[#C9A96E]/30 leading-none -mb-4"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                &ldquo;
              </span>

              <p className="text-[#1C1C1C] text-[0.9375rem] leading-[1.8] flex-1 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DC]">
                <div className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#1C1C1C] text-sm font-semibold">{t.name}</span>
                    <span>{t.flag}</span>
                  </div>
                  <div className="text-[#9B9B9B] text-xs tracking-wide">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
