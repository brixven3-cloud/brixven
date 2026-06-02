'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/content'

export default function Portfolio() {
  return (
    <section id="work" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> Our Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Selected Projects
          </h2>
          <p className="text-[#888] text-lg">
            A snapshot of what we build for clients across the UK, Ireland, and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:border-white/10"
            >
              {/* Project preview area */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden bg-[#080e18]">
                {/* Subtle accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at center, ${project.accent}15, transparent 70%)` }}
                />
                {/* Mock browser window */}
                <div className="relative w-36 bg-[#0d1521] border border-[#1e2d3d] overflow-hidden shadow-lg">
                  <div className="h-3.5 flex items-center gap-1 px-2 border-b border-[#1e2d3d] bg-[#080e18]">
                    {['#F87171', '#FBBF24', '#34D399'].map((c) => (
                      <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="p-2.5 space-y-1.5">
                    <div className="h-1.5 rounded-sm" style={{ width: '80%', background: project.accent + '40' }} />
                    <div className="h-1.5 bg-[#1e2d3d] rounded-sm w-full" />
                    <div className="h-1.5 bg-[#1e2d3d] rounded-sm" style={{ width: '60%' }} />
                    <div className="mt-2 h-8 border border-[#1e2d3d] bg-[#080e18]" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ background: project.accent }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 block"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-base mb-1">{project.title}</h3>
                <p className="text-[#556070] text-xs font-medium mb-2">{project.subtitle}</p>
                <p className="text-[#8899aa] text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
