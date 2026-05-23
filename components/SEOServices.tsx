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
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#444444] mb-4">
            🇵🇰 Pakistan &amp; 🇬🇧 UK Markets
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            SEO That Actually<br />
            <em style={{ fontStyle: 'italic' }}>Moves the Needle</em>
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Local expertise, global standards. We rank businesses in both markets with
            strategies built for each audience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-12">
          {SEO_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Search
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-[#0a0a0a] hover:bg-[#111111] p-7 transition-colors duration-300"
              >
                <div className="w-9 h-9 border border-[#222222] flex items-center justify-center mb-4 group-hover:border-white transition-colors duration-300">
                  <Icon size={16} className="text-[#555555] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">{feature.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#e0e0e0] transition-colors"
          >
            Get a Free SEO Audit →
          </a>
          <p className="text-[#444444] text-xs mt-3 tracking-wide">
            No commitment — we&apos;ll show you exactly where you stand.
          </p>
        </div>
      </div>
    </section>
  )
}
