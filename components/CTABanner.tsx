'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/content'

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Emerald glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-emerald-900/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a1a]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#444] mb-6 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> Start Today <span className="w-6 h-px bg-[#333]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.07]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Ready to Build<br />
            <em style={{ fontStyle: 'italic', color: '#10b981' }}>Something Great?</em>
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll respond with a tailored proposal and free
            consultation within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 text-white text-sm font-semibold rounded-full hover:bg-emerald-400 transition-all duration-200 hover:shadow-[0_0_32px_rgba(16,185,129,0.35)]"
            >
              Get a Free Consultation <ArrowRight size={14} />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#333] text-[#888] text-sm font-medium rounded-full hover:border-emerald-800 hover:text-emerald-400 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="text-[#444] text-xs mt-8 tracking-wide">
            No commitment required · Response within 24 hours · UK, Ireland &amp; Europe
          </p>
        </motion.div>
      </div>
    </section>
  )
}
