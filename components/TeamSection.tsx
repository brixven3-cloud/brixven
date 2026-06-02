'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Zap } from 'lucide-react'
import { TEAM } from '@/lib/content'

export default function TeamSection() {
  const founder = TEAM[0]

  return (
    <section id="team" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: positioning copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#333]" /> The Studio
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Founder-Led,<br />
              <em style={{ fontStyle: 'italic', color: '#10b981' }}>AI-Augmented</em>
            </h2>
            <p className="text-[#888] text-lg leading-relaxed mb-6">
              Brixven operates as a focused studio — not a 200-person agency with layers of
              account managers. You work directly with the decision-maker.
            </p>
            <p className="text-[#888] text-base leading-relaxed mb-8">
              Every engagement is personally led by Hamza, supported by a curated network of
              specialist engineers, designers, and growth experts — and the latest AI tooling —
              to deliver enterprise-quality output efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: 'AI-accelerated delivery' },
                { icon: Zap, text: 'Senior-only talent' },
                { icon: Zap, text: 'Direct founder access' },
                { icon: Zap, text: 'UK · IE · EU market depth' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-[#8899aa]">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={11} className="text-emerald-400" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: founder card */}
          {founder && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="glass-card overflow-hidden max-w-sm">
                <div className="relative h-64 bg-[#080e18] flex items-center justify-center overflow-hidden">
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl font-bold text-emerald-400">
                      {founder.initials}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 text-xl">{founder.flag}</div>
                  {/* Emerald glow at bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#080e18] to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{founder.name}</h3>
                  <p className="text-emerald-400 text-xs font-semibold tracking-[0.15em] uppercase mb-3">{founder.role}</p>
                  <p className="text-[#8899aa] text-sm leading-relaxed mb-5">{founder.bio}</p>
                  <div className="flex gap-2 pt-4 border-t border-white/5">
                    <a
                      href={founder.linkedin}
                      aria-label={`${founder.name} on LinkedIn`}
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#556070] hover:text-emerald-400 transition-colors"
                    >
                      <Linkedin size={13} />
                    </a>
                    <a
                      href={founder.twitter}
                      aria-label={`${founder.name} on X / Twitter`}
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#556070] hover:text-emerald-400 transition-colors"
                    >
                      <Twitter size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
