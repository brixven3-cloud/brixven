import { FAQS } from '@/lib/content'
import { Reveal, SplitLines, StaggerGroup, StaggerItem } from './motion'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal>
            <p className="font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#444] mb-4 flex items-center justify-center gap-3">
              <span className="w-6 h-px bg-[#333]" /> FAQ <span className="w-6 h-px bg-[#333]" />
            </p>
          </Reveal>
          <SplitLines
            as="h2"
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            lines={[
              'Frequently Asked',
              <em key="accent" style={{ fontStyle: 'italic', color: '#cccccc' }}>Questions</em>,
            ]}
          />
          <Reveal delay={0.1}>
            <p className="text-[#888] text-lg leading-relaxed">
              Everything you need to know about working with Brixven across the UK and Ireland.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="divide-y divide-[#1a1a1a]">
          {FAQS.map((faq) => (
            <StaggerItem key={faq.question} className="py-6">
              <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-[#8899aa] text-sm leading-relaxed">{faq.answer}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
