'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Bot, Code2, TrendingUp, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES } from '@/lib/content'

const iconMap: Record<string, LucideIcon> = {
  Globe, Smartphone, Bot, Code2, TrendingUp, Palette,
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> What We Do
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Full-Service<br />Digital Agency
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Everything your business needs — from custom software to top search rankings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC] border border-[#E8E4DC]">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 sm:p-8 bg-white hover:bg-[#F9F8F5] transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5 border border-[#E8E4DC] group-hover:border-[#C9A96E] transition-colors duration-300">
                  <Icon size={18} className="text-[#6B6B6B] group-hover:text-[#C9A96E] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1C1C1C] font-bold text-[1.0625rem] mb-2 tracking-tight">{service.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
