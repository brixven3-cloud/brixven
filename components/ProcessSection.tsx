'use client'

import { motion } from 'framer-motion'
import { PROCESS } from '@/lib/content'

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> How We Work <span className="w-6 h-px bg-[#333]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Our Process
          </h2>
          <p className="text-[#888] text-lg">A clear four-step framework — no surprises, no delays.</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] border-t border-dashed border-[#333]" />

          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0a0a0a] border border-[#1a1a1a] flex flex-col items-center text-center px-5 py-8 hover:border-[#333] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center mb-6">
                <span
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
              <p className="text-[#6b7a8d] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
