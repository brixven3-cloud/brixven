'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import { TEAM } from '@/lib/content'

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#555555] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> Our Team
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            The People Behind<br />
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Brixven</em>
          </h2>
          <p className="text-[#888888] text-lg">A focused team with deep expertise and big ambitions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group bg-[#0a0a0a] hover:bg-[#111111] transition-colors duration-300 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-56 bg-[#111111] flex items-center justify-center overflow-hidden">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-20 h-20 bg-[#C9A96E] flex items-center justify-center text-black text-2xl font-bold">
                    {member.initials}
                  </div>
                )}
                <div className="absolute top-4 right-4 text-xl">{member.flag}</div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-[#1a1a1a]">
                <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{member.name}</h3>
                <p className="text-[#C9A96E] text-xs font-semibold tracking-[0.15em] uppercase mb-3">{member.role}</p>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-2 pt-3 border-t border-[#1a1a1a]">
                  <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 border border-[#222222] flex items-center justify-center text-[#555555] hover:text-white hover:border-white transition-all">
                    <Linkedin size={13} />
                  </a>
                  <a href={member.twitter} aria-label={`${member.name} on Twitter`}
                    className="w-8 h-8 border border-[#222222] flex items-center justify-center text-[#555555] hover:text-white hover:border-white transition-all">
                    <Twitter size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
