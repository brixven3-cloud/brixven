'use client'

import { ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/content'
import { Reveal, SplitLines, Magnetic } from './motion'

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
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1a1a1a]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a1a]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-[#444] mb-6 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> Start Today <span className="w-6 h-px bg-[#333]" />
          </p>
        </Reveal>

        <SplitLines
          as="h2"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.07]"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          lines={[
            'Ready to Build',
            <em key="accent" style={{ fontStyle: 'italic', color: '#cccccc' }}>Something Great?</em>,
          ]}
        />

        <Reveal delay={0.1}>
          <p className="text-[#888] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll respond with a tailored proposal and free
            consultation within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Magnetic>
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e8e8e8] transition-all duration-200"
              >
                Get a Free Consultation <ArrowRight size={14} />
              </a>
            </Magnetic>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#333] text-[#888] text-sm font-medium rounded-full hover:border-[#555] hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-[#444] text-xs mt-8 tracking-wide">
            No commitment required · Response within 24 hours · UK &amp; Ireland
          </p>
        </Reveal>
      </div>
    </section>
  )
}
