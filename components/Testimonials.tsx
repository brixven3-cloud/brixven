'use client'

import { useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/content'
import { Reveal, SplitLines } from './motion'

export default function Testimonials() {
  const autoplayPlugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }))
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplayPlugin.current],
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-[#333]" /> Client Experience
              </p>
            </Reveal>
            <SplitLines
              as="h2"
              className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              lines={[
                'What to Expect',
                <em key="accent" style={{ fontStyle: 'italic' }}>Working With Us</em>,
              ]}
            />
            <Reveal delay={0.1}>
              <p className="text-[#888] text-sm">
                Illustrative outcomes from typical client engagements — names withheld for privacy.
              </p>
            </Reveal>
          </div>

          {/* Prev / Next */}
          <Reveal delay={0.15}>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-[#26395A] bg-[#0F1D33] flex items-center justify-center text-[#666] hover:text-white hover:border-gold/50 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-[#26395A] bg-[#0F1D33] flex items-center justify-center text-[#666] hover:text-white hover:border-gold/50 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-4">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="embla__slide flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-11px)] bg-[#0F1D33] border border-[#1C2B45] p-6 flex flex-col gap-5"
                >
                  <Quote size={20} className="text-gold/30" />
                  <p className="text-[#aab8cc] text-sm leading-relaxed italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1C2B45]">
                    <div className="w-9 h-9 rounded-full bg-[#152238] border border-[#26395A] flex items-center justify-center text-sm">
                      {t.flag}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{t.name}</p>
                      <p className="text-[#556070] text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-center text-[#445060] text-xs mt-10">
            Real verified reviews will appear on{' '}
            <span className="text-[#888]">Google</span> and{' '}
            <span className="text-[#888]">Clutch</span> as they are published.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
