'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PACKAGES, CUSTOM_PACKAGE_MESSAGE } from '@/lib/content'
import { waLink } from '@/lib/whatsapp'
import { Reveal, StaggerGroup, StaggerItem } from './motion'

function PackageImage({ pkg }: { pkg: typeof PACKAGES[number] }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className="relative text-5xl font-black text-parchment-dark font-display select-none"
      >
        {pkg.title.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <Image
      src={pkg.image}
      alt={`${pkg.title} package — Brixven, UK & Ireland`}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      style={{ filter: 'grayscale(0.4)' }}
      onError={() => setFailed(true)}
    />
  )
}

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-parchment-dark relative">
      <div className="hairline absolute top-0 left-0 right-0" />
      <div className="hairline absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-14 lg:mb-18">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-end">
            <div>
              <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.16em] mb-3">
                Launch offers
              </p>
              <p className="text-ink-muted text-xs">Limited availability. Launch pricing.</p>
            </div>
            <h2
              className="font-display font-black text-ink leading-[0.96] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}
            >
              Pick a package,
              <br />
              go live fast.
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-ink/10">
          {PACKAGES.map((pkg, i) => (
            <StaggerItem
              key={pkg.title}
              hover
              className="group bg-parchment hover:bg-white transition-colors duration-300 flex flex-col"
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] bg-parchment-dark overflow-hidden flex items-center justify-center">
                <PackageImage pkg={pkg} />
                {/* Red index tag */}
                <span className="absolute top-4 left-4 font-mono text-[10px] text-parchment bg-red px-2 py-1 tracking-[0.1em] uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Copy */}
              <div className="p-6 flex flex-col flex-1 border-t border-ink/8">
                <h3 className="font-display font-black text-ink text-xl mb-1 tracking-tight">{pkg.title}</h3>
                <p className="font-mono text-[10px] text-ink-faint tracking-[0.12em] uppercase mb-4">
                  {pkg.tagline}
                </p>
                <p className="text-ink-muted text-sm leading-relaxed mb-6 flex-1">{pkg.description}</p>
                <Link
                  href={waLink(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-ink text-parchment text-sm font-semibold tracking-wide hover:bg-red transition-colors duration-200"
                >
                  {pkg.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Custom row */}
        <Reveal delay={0.14} className="mt-px border border-t-0 border-ink/10">
          <div className="bg-ink text-parchment p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] text-parchment/50 uppercase tracking-[0.14em] mb-2">
                Custom scope
              </p>
              <h3 className="font-display font-black text-xl text-parchment tracking-tight leading-tight">
                Need something bespoke?
              </h3>
              <p className="text-parchment/60 text-sm mt-1">
                Tell us what you need — we&apos;ll build a tailored quote.
              </p>
            </div>
            <Link
              href={waLink(CUSTOM_PACKAGE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-red text-parchment text-sm font-semibold tracking-wide hover:bg-red-dark transition-colors duration-200 flex-shrink-0"
            >
              Get a custom quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
