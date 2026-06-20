'use client'

import Image from 'next/image'
import { Linkedin, Instagram, Zap } from 'lucide-react'
import { TEAM } from '@/lib/content'
import { Reveal, SplitLines, StaggerGroup, StaggerItem } from './motion'

export default function TeamSection() {
  const founder = TEAM[0]

  return (
    <section id="team" className="py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: positioning copy */}
          <div>
            <Reveal>
              <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#333]" /> The Studio
              </p>
            </Reveal>

            <SplitLines
              as="h2"
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              lines={[
                'Founder-Led,',
                <em key="accent" style={{ fontStyle: 'italic', color: '#cccccc' }}>AI-Augmented</em>,
              ]}
            />

            <Reveal delay={0.1}>
              <p className="text-[#888] text-lg leading-relaxed mb-6">
                Brixven operates as a focused studio — not a 200-person agency with layers of
                account managers. You work directly with the decision-maker.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-[#888] text-base leading-relaxed mb-8">
                Every engagement is personally led by Hamza, supported by a curated network of
                specialist engineers, designers, and growth experts — and the latest AI tooling —
                to deliver enterprise-quality output efficiently.
              </p>
            </Reveal>

            <StaggerGroup className="grid grid-cols-2 gap-4" stagger={0.06}>
              {[
                { icon: Zap, text: 'AI-accelerated delivery' },
                { icon: Zap, text: 'Senior-only talent' },
                { icon: Zap, text: 'Direct founder access' },
                { icon: Zap, text: 'Scotland market depth' },
              ].map(({ icon: Icon, text }) => (
                <StaggerItem key={text} className="flex items-center gap-2.5 text-sm text-[#8899aa]">
                  <div className="w-5 h-5 rounded-full bg-[#152238] border border-[#26395A] flex items-center justify-center flex-shrink-0">
                    <Icon size={11} className="text-white" />
                  </div>
                  {text}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Right: founder card */}
          {founder && (
            <Reveal delay={0.15}>
              <div className="bg-[#0F1D33] border border-[#1C2B45] overflow-hidden max-w-sm">
                <div className="relative h-64 bg-[#0A1628] flex items-center justify-center overflow-hidden">
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={`${founder.name}, ${founder.role} at Brixven`}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-[#152238] border border-[#26395A] flex items-center justify-center text-2xl font-bold text-white">
                      {founder.initials}
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0F1D33] to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{founder.name}</h3>
                  <p className="text-[#888] text-xs font-semibold tracking-[0.15em] uppercase mb-3">{founder.role}</p>
                  <p className="text-[#8899aa] text-sm leading-relaxed mb-5">{founder.bio}</p>
                  <div className="flex gap-2 pt-4 border-t border-[#1C2B45]">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                      className="w-8 h-8 bg-[#152238] border border-[#26395A] flex items-center justify-center text-[#556070] hover:text-white hover:border-gold/50 transition-colors"
                    >
                      <Linkedin size={13} />
                    </a>
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} on Instagram`}
                      className="w-8 h-8 bg-[#152238] border border-[#26395A] flex items-center justify-center text-[#556070] hover:text-white hover:border-gold/50 transition-colors"
                    >
                      <Instagram size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
