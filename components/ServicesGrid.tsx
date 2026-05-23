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
    <section id="services" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444444] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#333333]" /> What We Do
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Full-Service<br />Digital Agency
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed">
            Everything your business needs — from custom software to top search rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-6 sm:p-8 bg-[#0a0a0a] hover:bg-[#111111] transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5 border border-[#222222] group-hover:border-white transition-colors duration-300">
                  <Icon size={18} className="text-[#555555] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-[1.0625rem] mb-2 tracking-tight">{service.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
