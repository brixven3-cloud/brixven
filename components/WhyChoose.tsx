'use client'

import { CheckCircle2 } from 'lucide-react'
import { WHY_BRIXVEN } from '@/lib/content'
import { Reveal, SplitLines, StaggerGroup, StaggerItem, Parallax } from './motion'

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="relative bg-[#0d0d0d] border border-[#1e1e1e] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#1e1e1e] flex items-center justify-between bg-[#080808]">
          <span className="text-xs font-bold text-white tracking-wide uppercase">Project Overview</span>
          <span className="text-[10px] bg-[#111] text-white font-semibold px-2 py-0.5 border border-[#333] tracking-wide uppercase">On Track</span>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: 'Backend API',  pct: 92, color: '#ffffff' },
            { label: 'Mobile App',   pct: 78, color: '#aaaaaa' },
            { label: 'SEO Campaign', pct: 65, color: '#666666' },
            { label: 'UI/UX Design', pct: 100, color: '#ffffff' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-white font-medium">{item.label}</span>
                <span className="text-[#556070]">{item.pct}%</span>
              </div>
              <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-[#1e1e1e]">
            <div className="flex -space-x-2">
              {['#ffffff', '#888888', '#555555', '#333333'].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0d0d0d] flex items-center justify-center text-[9px] font-bold" style={{ background: c, color: c === '#ffffff' ? '#000' : '#fff' }}>
                  {['AK', 'RJ', 'MN', 'SB'][i]}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-[#556070] tracking-wide">4 active team members</span>
          </div>
        </div>
        <div className="px-5 py-3 bg-[#080808] border-t border-[#1e1e1e] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[10px] text-[#8899aa] font-semibold tracking-wide uppercase">Sprint review in 2 days · Demo ready</span>
        </div>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#333]" /> Why Brixven
              </p>
            </Reveal>

            <SplitLines
              as="h2"
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              lines={[
                'A Partner You Can',
                <span key="accent">Actually <em style={{ fontStyle: 'italic' }}>Rely On</em></span>,
              ]}
            />

            <Reveal delay={0.1}>
              <p className="text-[#888] text-lg mb-10 leading-relaxed">
                Founder-led, AI-augmented — working as an extension of your team, not as a faceless agency.
              </p>
            </Reveal>

            <StaggerGroup className="space-y-6" stagger={0.08}>
              {WHY_BRIXVEN.map((item) => (
                <StaggerItem key={item.title} className="flex gap-4">
                  <CheckCircle2 size={18} className="text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-white font-semibold text-base mb-0.5">{item.title}</p>
                    <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.1}>
            <Parallax speed={0.08}>
              <DashboardIllustration />
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
