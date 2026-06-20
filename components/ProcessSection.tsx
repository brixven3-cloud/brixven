'use client'

import { PROCESS } from '@/lib/content'
import { Reveal, StaggerGroup, StaggerItem } from './motion'

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
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
        </Reveal>

        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] border-t border-dashed border-[#333]" />

          <StaggerGroup className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((step) => (
              <StaggerItem
                key={step.step}
                hover
                className="bg-[#0F1D33] border border-[#1C2B45] flex flex-col items-center text-center px-5 py-8 transition-colors duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_-10px_rgba(212,165,116,0.4)]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#152238] border border-[#26395A] flex items-center justify-center mb-6">
                  <span
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-[#6b7a8d] text-sm leading-relaxed">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
