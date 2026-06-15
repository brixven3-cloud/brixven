'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PACKAGES, CUSTOM_PACKAGE_MESSAGE } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'

export default function PackagesSection() {
  return (
    <section id="packages" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-16"
        >
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333]" /> Limited-Time Offers <span className="w-6 h-px bg-[#333]" />
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Pick a Package, <em style={{ fontStyle: 'italic', color: '#cccccc' }}>Go Live Fast</em>
          </h2>
          <p className="text-[#888] text-lg">60% off this month — limited slots.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-black border border-[#1a1a1a] overflow-hidden hover:-translate-y-1 hover:border-[#333] transition-all duration-300"
            >
              <div className="relative aspect-[4/5] bg-[#080808] overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} package`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-1">{pkg.title}</h3>
                <p className="text-[#888] text-xs font-semibold tracking-[0.08em] uppercase mb-3">{pkg.tagline}</p>
                <p className="text-[#8899aa] text-sm leading-relaxed mb-6">{pkg.description}</p>
                <a
                  href={waLink(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  {pkg.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 bg-black border border-[#1a1a1a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h3
              className="text-white font-bold text-xl mb-1"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Need something custom?
            </h3>
            <p className="text-[#888] text-sm">
              Tell us what you need — we&apos;ll put together a tailored package and quote.
            </p>
          </div>
          <a
            href={waLink(CUSTOM_PACKAGE_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-200 flex-shrink-0"
          >
            Build a custom package <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
