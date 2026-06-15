'use client'

import { Globe, Smartphone, Bot, Code2, TrendingUp, Palette, PhoneCall, Zap, BarChart2, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES } from '@/lib/content'
import { Reveal, StaggerGroup, StaggerItem } from './motion'

const iconMap: Record<string, LucideIcon> = {
  Globe, Smartphone, Bot, Code2, TrendingUp, Palette, PhoneCall, Zap, BarChart2, Lightbulb,
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <p className="font-mono text-[#555] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> What We Build <span className="w-6 h-px bg-[#333]" />
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Full-Service Digital Capability
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            From concept to production — we cover the full stack so your team doesn&apos;t have to.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Code2
            return (
              <StaggerItem
                key={svc.title}
                hover
                className="group bg-[#0a0a0a] border border-[#1a1a1a] p-6 transition-colors duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(255,59,48,0.4)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center mb-5 group-hover:bg-[#1a1a1a] transition-colors">
                  <Icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-[0.9375rem] mb-2 leading-snug">{svc.title}</h3>
                <p className="text-[#6b7a8d] text-sm leading-relaxed">{svc.description}</p>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
