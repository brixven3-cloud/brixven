'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings2, MapPin, Link, BarChart2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SEO_FEATURES } from '@/lib/content'

const iconMap: Record<string, LucideIcon> = { Search, FileText, Settings2, MapPin, Link, BarChart2 }

export default function SEOServices() {
  return (
    <section id="seo" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#888] mb-4">
            🇬🇧 UK &amp; 🇮🇪 Ireland &amp; 🇪🇺 Europe
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            SEO That Actually<br />
            <em style={{ fontStyle: 'italic' }}>Moves the Needle</em>
          </h2>
          <p className="text-[#888] text-lg leading-relaxed">
            Local expertise, international standards. We rank businesses across UK, Ireland,
            and European markets with strategies built for each audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {SEO_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Search
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-[#0a0a0a] border border-[#1a1a1a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#333]"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center mb-4 group-hover:bg-[#1a1a1a] transition-colors">
                  <Icon size={16} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-[#6b7a8d] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e8e8e8] transition-all duration-200"
          >
            Get a Free SEO Audit →
          </a>
          <p className="text-[#444] text-xs mt-3 tracking-wide">
            No commitment — we&apos;ll show you exactly where you stand.
          </p>
        </div>
      </div>
    </section>
  )
}
