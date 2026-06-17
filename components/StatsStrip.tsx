import { STATS } from '@/lib/content'
import { Reveal, StaggerGroup, StaggerItem } from './motion'

export default function StatsStrip() {
  return (
    <section className="py-14 bg-parchment-dark relative">
      <div className="hairline absolute top-0 left-0 right-0" />
      <div className="hairline absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-center text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-faint mb-10">
            — Trusted by growing businesses across the UK &amp; Ireland —
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" stagger={0.08}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center" y={12} duration={0.5}>
              <div
                className="font-display font-black text-ink text-3xl lg:text-4xl mb-1.5 tracking-tight"
              >
                {stat.value}
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
