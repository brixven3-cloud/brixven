'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/content'

export default function Portfolio() {
  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> Our Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Selected Projects
          </h2>
          <p className="text-[#6B6B6B] text-lg">
            A snapshot of what we&apos;ve built for clients across Pakistan and the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E4DC] border border-[#E8E4DC]">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group bg-white hover:bg-[#F9F8F5] transition-colors duration-300 cursor-pointer overflow-hidden"
            >
              {/* Preview */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden" style={{ background: project.bg }}>
                <div className="w-32 bg-white border border-[#E8E4DC] overflow-hidden shadow-md">
                  <div className="h-3.5 flex items-center gap-1 px-2 border-b border-[#E8E4DC] bg-[#F9F8F5]">
                    {['#F87171', '#FBBF24', '#34D399'].map((c) => (
                      <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="p-2.5 space-y-1.5">
                    <div className="h-1.5 rounded-sm" style={{ background: project.accent, width: '80%', opacity: 0.4 }} />
                    <div className="h-1.5 bg-[#E8E4DC] rounded-sm w-full" />
                    <div className="h-1.5 bg-[#E8E4DC] rounded-sm" style={{ width: '60%' }} />
                    <div className="mt-2 h-8 border" style={{ background: project.bg, borderColor: `${project.accent}30` }} />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/50 backdrop-blur-[2px]">
                  <div className="w-10 h-10 bg-[#1C1C1C] flex items-center justify-center text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-[#E8E4DC]">
                <span
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 block"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
                <h3 className="text-[#1C1C1C] font-bold text-base mb-1 tracking-tight">{project.title}</h3>
                <p className="text-[#6B6B6B] text-xs font-medium mb-2">{project.subtitle}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
