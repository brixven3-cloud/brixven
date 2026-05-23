'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/content'

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2a2a2a]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a1a]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#444444] mb-6 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333333]" /> Start Today <span className="w-6 h-px bg-[#333333]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.07]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ready to Build<br />
            <em style={{ fontStyle: 'italic' }}>Something Great?</em>
          </h2>
          <p className="text-[#888888] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll respond with a tailored proposal and free
            consultation within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e0e0e0] transition-colors"
            >
              Get a Free Consultation <ArrowRight size={14} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#333333] text-[#888888] text-sm font-medium rounded-full hover:border-white hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="text-[#444444] text-xs mt-8 tracking-wide">
            No commitment required · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
