'use client'

import { motion } from 'framer-motion'
import { PROCESS } from '@/lib/content'

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#555555] mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> How We Work <span className="w-6 h-px bg-[#C9A96E]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Our Process
          </h2>
          <p className="text-[#888888] text-lg">A clear four-step framework — no surprises, no delays.</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] border-t border-dashed border-[#C9A96E]/30" />

          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4 sm:px-6 py-8"
            >
              {/* Step number */}
              <div className="w-16 h-16 border border-[#222222] bg-[#0a0a0a] flex items-center justify-center mb-6">
                <span
                  className="text-xl font-bold text-[#C9A96E]"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{step.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed max-w-[185px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
