import { STATS } from '@/lib/content'
import { Reveal, StaggerGroup, StaggerItem, Counter } from './motion'

export default function StatsStrip() {
  return (
    <section className="py-12 sm:py-14 border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-center text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-8 sm:mb-10">
            — Trusted by growing businesses across the UK &amp; Ireland —
          </p>
        </Reveal>
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" stagger={0.08}>
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center" y={16} duration={0.5}>
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                <Counter value={stat.value} />
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-[#555]">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
