'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import { TEAM } from '@/lib/content'

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-[#F9F8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#9B9B9B] mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#C9A96E]" /> Our Team
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4 leading-[1.1]"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            The People Behind<br />
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Brixven</em>
          </h2>
          <p className="text-[#6B6B6B] text-lg">A focused team with deep expertise and big ambitions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC] border border-[#E8E4DC]">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group bg-white hover:bg-[#F9F8F5] transition-colors duration-300 overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-56 bg-[#F2EFE8] flex items-center justify-center overflow-hidden">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-20 h-20 bg-[#1C1C1C] flex items-center justify-center text-white text-2xl font-bold">
                    {member.initials}
                  </div>
                )}
                <div className="absolute top-4 right-4 text-xl">{member.flag}</div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-[#E8E4DC]">
                <h3 className="text-[#1C1C1C] font-bold text-lg leading-tight mb-0.5">{member.name}</h3>
                <p className="text-[#C9A96E] text-xs font-semibold tracking-[0.15em] uppercase mb-3">{member.role}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-2 pt-3 border-t border-[#E8E4DC]">
                  <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 border border-[#E8E4DC] flex items-center justify-center text-[#9B9B9B] hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition-all">
                    <Linkedin size={13} />
                  </a>
                  <a href={member.twitter} aria-label={`${member.name} on Twitter`}
                    className="w-8 h-8 border border-[#E8E4DC] flex items-center justify-center text-[#9B9B9B] hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition-all">
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
