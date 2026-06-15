'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO } from '@/lib/content'
import { Reveal, EASE_PREMIUM } from './motion'

function screenshotUrl(liveUrl: string) {
  return `https://image.thum.io/get/width/800/crop/600/${liveUrl}`
}

function ProjectImage({ project }: { project: typeof PORTFOLIO[number] }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className="relative text-4xl font-bold text-[#222] select-none"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        {project.title.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <Image
      src={screenshotUrl(project.url)}
      alt={`${project.title} — ${project.subtitle} website design by Brixven`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-xl mb-16">
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> Our Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Selected Projects
          </h2>
          <p className="text-[#888] text-lg">
            A snapshot of what we build for clients across the UK and Ireland.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: EASE_PREMIUM } }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_PREMIUM }}
              className="group bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden transition-colors duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(255,59,48,0.4)] block"
            >
              {/* Screenshot preview */}
              <div className="relative h-44 bg-[#080808] flex items-center justify-center overflow-hidden border-b border-[#1a1a1a]">
                <ProjectImage project={project} />

                {/* Hover overlay with arrow */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 z-10">
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#555]">
                    {project.category}
                  </span>
                  <span className="flex-shrink-0 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#444] border border-[#222] px-2 py-0.5">
                    Demo
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#ccc] transition-colors">{project.title}</h3>
                <p className="text-[#556070] text-xs font-medium mb-3">{project.subtitle}</p>
                <p className="text-[#8899aa] text-sm leading-relaxed mb-5">{project.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white border-b border-[#333] pb-0.5 group-hover:border-white transition-colors">
                  View Live Demo <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
