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
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#555] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> What We Build <span className="w-6 h-px bg-[#333]" />
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Full-Service Digital Capability
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            From concept to production — we cover the full stack so your team doesn&apos;t have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? Code2
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-[0_12px_40px_rgba(16,185,129,0.07)]"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/15 transition-colors">
                  <Icon size={18} className="text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-[0.9375rem] mb-2 leading-snug">{svc.title}</h3>
                <p className="text-[#6b7a8d] text-sm leading-relaxed">{svc.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
