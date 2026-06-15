'use client'

import { Search, FileText, Settings2, MapPin, Link, BarChart2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SEO_FEATURES } from '@/lib/content'
import { Reveal, SplitLines, StaggerGroup, StaggerItem } from './motion'

const iconMap: Record<string, LucideIcon> = { Search, FileText, Settings2, MapPin, Link, BarChart2 }

export default function SEOServices() {
  return (
    <section id="seo" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <Reveal>
            <div className="font-mono inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#888] mb-4">
              🇬🇧 UK &amp; 🇮🇪 Ireland
            </div>
          </Reveal>
          <SplitLines
            as="h2"
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            lines={[
              'SEO That Actually',
              <em key="accent" style={{ fontStyle: 'italic' }}>Moves the Needle</em>,
            ]}
          />
          <Reveal delay={0.1}>
            <p className="text-[#888] text-lg leading-relaxed">
              Local expertise, international standards. We rank businesses across the UK and
              Ireland — from London and Manchester to Dublin and Cork — with strategies built for each audience.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SEO_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Search
            return (
              <StaggerItem
                key={feature.title}
                hover
                className="group bg-[#0a0a0a] border border-[#1a1a1a] p-6 transition-colors duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(255,59,48,0.4)]"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center mb-4 group-hover:bg-[#1a1a1a] transition-colors">
                  <Icon size={16} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-[#6b7a8d] text-sm leading-relaxed">{feature.description}</p>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <Reveal className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e8e8e8] transition-all duration-200"
          >
            Get a Free SEO Audit →
          </a>
          <p className="text-[#444] text-xs mt-3 tracking-wide">
            No commitment — we&apos;ll show you exactly where you stand.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
