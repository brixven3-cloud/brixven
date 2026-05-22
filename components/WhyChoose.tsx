'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { WHY_BRIXVEN } from '@/lib/content'

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-4 bg-[#F2EFE8] rounded-3xl" />
      <div className="relative bg-white border border-[#E8E4DC] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.07)] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E8E4DC] flex items-center justify-between bg-[#F9F8F5]">
          <span className="text-xs font-bold text-[#1C1C1C] tracking-wide uppercase">Project Overview</span>
          <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 border border-emerald-100 tracking-wide uppercase">On Track</span>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: 'Backend API', pct: 92, color: '#1C1C1C' },
            { label: 'Mobile App', pct: 78, color: '#C9A96E' },
            { label: 'SEO Campaign', pct: 65, color: '#2563EB' },
            { label: 'UI/UX Design', pct: 100, color: '#34D399' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#1C1C1C] font-medium">{item.label}</span>
                <span className="text-[#9B9B9B]">{item.pct}%</span>
              </div>
              <div className="h-1 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-[#E8E4DC]">
            <div className="flex -space-x-2">
              {['#1C1C1C', '#C9A96E', '#2563EB', '#34D399'].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white" style={{ background: c }}>
                  {['AK', 'RJ', 'MN', 'SB'][i]}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-[#9B9B9B] tracking-wide">4 team members active</span>
          </div>
        </div>
        <div className="px-5 py-3 bg-[#F9F8F5] border-t border-[#E8E4DC] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
          <span className="text-[10px] text-[#6B6B6B] font-semibold tracking-wide uppercase">Sprint review in 2 days · Demo ready</span>
        </div>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C9A96E]" /> Why Brixven
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-5 leading-[1.1]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              A Partner You Can<br />
              Actually <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Rely On</em>
            </h2>
            <p className="text-[#6B6B6B] text-lg mb-10 leading-relaxed">
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
                  <CheckCircle2 size={18} className="text-[#C9A96E] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-[#1C1C1C] font-semibold text-base mb-0.5">{item.title}</p>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.description}</p>
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
