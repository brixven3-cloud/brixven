'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BrickMark, { MarkState } from './BrickMark'
import ArchLineart from './ArchLineart'
import { waLink } from '@/lib/whatsapp'
import { usePrefersReducedMotion } from './motion'

// Unsplash greyscale building images — one per panel
const PANELS = [
  {
    id: 'web',
    service: 'Web & E-Commerce Development',
    body: 'We build fast, conversion-ready websites and online stores — from portfolio sites to full Shopify / WooCommerce solutions with payment integration, custom checkout, and SEO-baked architecture.',
    meta: [
      { label: 'FROM', value: '£480 ONE-TIME' },
      { label: 'DELIVERY', value: '14 DAYS' },
      { label: 'STACK', value: 'NEXT · SHOPIFY · WP' },
    ],
    mark: 'hero' as MarkState,
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=70&auto=format',
    bgAlt: 'Edinburgh Castle — atmospheric backdrop',
    waMsg: 'Hi Brixven 👋 I\'m interested in a *Web & E-Commerce* project. Can we discuss next steps?',
    sectionBg: '#0A1628',
  },
  {
    id: 'ai',
    service: 'AI Voice Agents (Vapi)',
    body: 'Custom AI voice agents that answer inbound calls, qualify leads and book appointments 24/7 — powered by Vapi, integrated with your CRM, calendar, and WhatsApp. Never miss a customer again.',
    meta: [
      { label: 'FROM', value: '£120 / MO' },
      { label: 'PLANS', value: 'STARTER · GROWTH · PRO' },
      { label: 'POWERED BY', value: 'VAPI · AI' },
    ],
    mark: 'pinwheel' as MarkState,
    bg: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=1400&q=70&auto=format',
    bgAlt: 'Glasgow University cloisters — atmospheric backdrop',
    waMsg: 'Hi Brixven 👋 I\'m interested in an *AI Voice Agent*. Can we book a demo?',
    sectionBg: '#152238',
  },
  {
    id: 'automation',
    service: 'Automation (n8n)',
    body: 'We map, build and deploy automation workflows using n8n — connecting your CRM, email, WhatsApp, calendar and custom APIs. Reduce admin, eliminate repetitive tasks, ship faster.',
    meta: [
      { label: 'TECH', value: 'N8N · ZAPIER · MAKE' },
      { label: 'TYPE', value: 'WORKFLOWS · INTEGRATIONS' },
      { label: 'BENEFIT', value: 'HOURS SAVED DAILY' },
    ],
    mark: 'circle' as MarkState,
    bg: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1400&q=70&auto=format',
    bgAlt: 'Aberdeen granite tenement doorway — atmospheric backdrop',
    waMsg: 'Hi Brixven 👋 I\'d like to discuss *business automation* using n8n. Can we talk?',
    sectionBg: '#0A1628',
  },
  {
    id: 'ads',
    service: 'Meta & Google Ads',
    body: 'Fully managed Facebook, Instagram and Google ad campaigns — audience research, creative testing, budget optimisation and monthly reporting. Starts with a free ads audit.',
    meta: [
      { label: 'FROM', value: '£200 / MO' },
      { label: 'PLATFORMS', value: 'META · GOOGLE' },
      { label: 'FIRST STEP', value: 'FREE ADS AUDIT' },
    ],
    mark: 'semicircle' as MarkState,
    bg: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1400&q=70&auto=format',
    bgAlt: 'Dundee waterfront architecture — atmospheric backdrop',
    waMsg: 'Hi Brixven 👋 I\'d like a *free ads audit* and to discuss Meta & Google Ads management.',
    sectionBg: '#152238',
  },
]

// A single service panel — sticky scroll-driven panel inside its scroll region
function PillarPanel({
  panel,
  index,
}: {
  panel: typeof PANELS[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '15%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-6%'])

  const isOdd = index % 2 === 1

  return (
    <div
      ref={ref}
      id={panel.id}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: panel.sectionBg }}
    >
      {/* Building background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <Image
          src={panel.bg}
          alt={panel.bgAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${isOdd ? '225deg' : '135deg'}, ${panel.sectionBg} 25%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* Architectural line art */}
      <ArchLineart className="text-ink" />

      {/* Hairlines */}
      <div className="hairline absolute top-0 left-0 right-0 z-10" />
      <div className="hairline absolute bottom-0 left-0 right-0 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-0"
        style={{ y: contentY }}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center ${
            isOdd ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Left: service copy */}
          <motion.div
            initial={{ opacity: 0, x: isOdd ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={isOdd ? 'lg:order-3' : ''}
          >
            <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.16em] mb-5">
              {String(index + 1).padStart(2, '0')} / {String(PANELS.length).padStart(2, '0')}
            </p>

            <h2
              className="font-display font-black text-ink leading-[0.96] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              {panel.service}
            </h2>

            <p className="text-ink-muted text-base leading-relaxed mb-8 max-w-sm">
              {panel.body}
            </p>

            <Link
              href={waLink(panel.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-parchment text-sm font-semibold tracking-wide hover:bg-red transition-colors duration-200"
            >
              Enquire via WhatsApp
            </Link>
          </motion.div>

          {/* Centre: morphing red brick mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`flex items-center justify-center ${isOdd ? 'lg:order-2' : ''}`}
          >
            <BrickMark state={panel.mark} size={240} />
          </motion.div>

          {/* Right: metadata labels */}
          <motion.div
            initial={{ opacity: 0, x: isOdd ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`flex flex-col gap-7 ${isOdd ? 'lg:order-1' : ''}`}
          >
            {panel.meta.map(({ label, value }) => (
              <div key={label} className={isOdd ? '' : 'lg:text-right'}>
                <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.14em] mb-0.5">
                  {label}
                </p>
                <p className="font-display font-bold text-ink text-sm tracking-tight">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ServicePillars() {
  return (
    <section id="services">
      {/* Section header */}
      <div className="relative bg-parchment py-16 lg:py-20 overflow-hidden">
        <div className="hairline absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-end">
            <div>
              <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.16em] mb-3">
                What we build
              </p>
              <div className="w-6 h-px bg-red" />
            </div>
            <h2
              className="font-display font-black text-ink leading-[0.96] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Four disciplines. One team. End-to-end ownership.
            </h2>
          </div>
        </div>
        <div className="hairline absolute bottom-0 left-0 right-0" />
      </div>

      {/* 4 full-height service panels */}
      {PANELS.map((panel, i) => (
        <PillarPanel key={panel.id} panel={panel} index={i} />
      ))}
    </section>
  )
}
