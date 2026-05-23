'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { WHY_BRIXVEN } from '@/lib/content'

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-4 bg-white/[0.02] rounded-3xl" />
      <div className="relative bg-[#111111] border border-[#222222] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#222222] flex items-center justify-between bg-[#0a0a0a]">
          <span className="text-xs font-bold text-white tracking-wide uppercase">Project Overview</span>
          <span className="text-[10px] bg-emerald-950 text-emerald-400 font-semibold px-2 py-0.5 border border-emerald-900 tracking-wide uppercase">On Track</span>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: 'Backend API', pct: 92, color: '#ffffff' },
            { label: 'Mobile App', pct: 78, color: '#aaaaaa' },
            { label: 'SEO Campaign', pct: 65, color: '#666666' },
            { label: 'UI/UX Design', pct: 100, color: '#34D399' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-white font-medium">{item.label}</span>
                <span className="text-[#555555]">{item.pct}%</span>
              </div>
              <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-[#222222]">
            <div className="flex -space-x-2">
              {['#ffffff', '#888888', '#555555', '#34D399'].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#111111] flex items-center justify-center text-[9px] font-bold text-black" style={{ background: c }}>
                  {['AK', 'RJ', 'MN', 'SB'][i]}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-[#555555] tracking-wide">4 team members active</span>
          </div>
        </div>
        <div className="px-5 py-3 bg-[#0a0a0a] border-t border-[#222222] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-[10px] text-[#888888] font-semibold tracking-wide uppercase">Sprint review in 2 days · Demo ready</span>
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444444] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#333333]" /> Why Brixven
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-[1.1]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              A Partner You Can<br />
              Actually <em style={{ fontStyle: 'italic' }}>Rely On</em>
            </h2>
            <p className="text-[#888888] text-lg mb-10 leading-relaxed">
              We work as an extension of your team — not a faceless agency.
            </p>
            <ul className="space-y-6">
              {WHY_BRIXVEN.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 size={18} className="text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-white font-semibold text-base mb-0.5">{item.title}</p>
                    <p className="text-[#888888] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DashboardIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
