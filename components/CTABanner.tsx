'use client'

import Link from 'next/link'
import { Reveal, SplitLines } from './motion'
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp'
import { CONTACT_EMAIL } from '@/lib/content'

export default function CTABanner() {
  return (
    <section className="relative py-28 bg-ink overflow-hidden">
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #EDEAE6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-parchment/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-parchment/10" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-parchment/30 mb-7 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-parchment/20" /> Start Today <span className="w-6 h-px bg-parchment/20" />
          </p>
        </Reveal>

        <SplitLines
          as="h2"
          className="font-display font-black text-parchment leading-[0.95] tracking-tight mb-7"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)' }}
          lines={[
            'Ready to build',
            'something great?',
          ]}
        />

        <Reveal delay={0.1}>
          <p className="text-parchment/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your project — we&apos;ll come back with a tailored proposal and a free consultation within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/447828707081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-red text-parchment text-sm font-semibold tracking-wide hover:bg-red-dark transition-colors duration-200"
            >
              {WHATSAPP_DISPLAY}
            </Link>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-parchment/20 text-parchment/60 text-sm font-medium hover:border-parchment/50 hover:text-parchment transition-colors duration-200"
            >
              {CONTACT_EMAIL}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-parchment/25 text-xs mt-8 tracking-wide">
            No commitment required · Response within 24 hours · UK &amp; Ireland
          </p>
        </Reveal>
      </div>
    </section>
  )
}
