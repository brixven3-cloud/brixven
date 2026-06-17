'use client'

import { WHY_BRIXVEN } from '@/lib/content'
import { Reveal, StaggerGroup, StaggerItem } from './motion'

export default function WhyChoose() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-parchment relative">
      <div className="hairline absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20 items-start">

          {/* Left: section label + headline */}
          <Reveal>
            <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.16em] mb-5">
              Why Brixven
            </p>
            <h2
              className="font-display font-black text-ink leading-[0.96] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
            >
              Established. Lean. Uncompromising on quality.
            </h2>
            <div className="w-8 h-[3px] bg-red" />
          </Reveal>

          {/* Right: 5 differentiators */}
          <StaggerGroup className="space-y-0" stagger={0.07}>
            {WHY_BRIXVEN.map((item, i) => (
              <StaggerItem
                key={item.title}
                className="group py-7 border-b border-ink/10 last:border-b-0 grid grid-cols-[40px_1fr] gap-4 items-start"
              >
                <span className="font-mono text-[11px] text-ink-faint tracking-[0.1em] pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display font-bold text-ink text-base mb-1.5 tracking-tight group-hover:text-red transition-colors duration-200">
                    {item.title}
                  </p>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
