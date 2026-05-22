'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings2, MapPin, Link, BarChart2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SEO_FEATURES } from '@/lib/content'

const iconMap: Record<string, LucideIcon> = { Search, FileText, Settings2, MapPin, Link, BarChart2 }

export default function SEOServices() {
  return (
    <section id="seo" className="py-28 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
            🇵🇰 Pakistan &amp; 🇬🇧 UK Markets
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            SEO That Actually<br />
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Moves the Needle</em>
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Local expertise, global standards. We rank businesses in both markets with
            strategies built for each audience.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC] border border-[#E8E4DC] mb-12">
          {SEO_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Search
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white hover:bg-[#F9F8F5] p-7 transition-colors duration-300"
              >
                <div className="w-9 h-9 border border-[#E8E4DC] flex items-center justify-center mb-4 group-hover:border-[#C9A96E] transition-colors duration-300">
                  <Icon size={16} className="text-[#6B6B6B] group-hover:text-[#C9A96E] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1C1C1C] font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1C] text-white text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-black transition-colors"
          >
            Get a Free SEO Audit →
          </a>
          <p className="text-[#9B9B9B] text-xs mt-3 tracking-wide">
            No commitment — we&apos;ll show you exactly where you stand.
          </p>
        </div>
      </div>
    </section>
  )
}
