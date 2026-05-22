'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/content'

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#1C1C1C] overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A96E]/60" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C9A96E] mb-6 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> Start Today <span className="w-6 h-px bg-[#C9A96E]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.07]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ready to Build Something{' '}
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Great?</em>
          </h2>
          <p className="text-[#9B9B9B] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll respond with a tailored proposal and free
            consultation within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#1C1C1C] text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#F9F8F5] transition-colors"
            >
              Get a Free Consultation <ArrowRight size={14} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="text-[#6B6B6B] text-xs mt-8 tracking-wide">
            No commitment required · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
