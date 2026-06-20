import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Terms of Service | Brixven',
  description: 'Terms and conditions for using Brixven services.',
  alternates: { canonical: 'https://brixven.com/terms' },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-parchment pt-28 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://brixven.com' },
          { name: 'Terms of Service', url: 'https://brixven.com/terms' },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-gold text-sm hover:text-cream transition-colors">
            ← Back to home
          </Link>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
        >
          Terms of Service
        </h1>
        <p className="text-[#556070] text-sm mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#8899aa] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Services</h2>
            <p>
              Brixven provides software development, design, and digital marketing services to
              clients under individual service agreements. The specific scope, deliverables, timeline,
              and pricing for each engagement are defined in a separate written agreement (Statement of
              Work or proposal) agreed upon by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, upon full payment, all custom code, designs, and
              deliverables produced for a client become the property of that client. Any third-party
              libraries, frameworks, or tools used remain subject to their respective licences.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Payment Terms</h2>
            <p>
              Payment terms are agreed per project. Brixven typically requires a deposit before
              commencing work, with the balance due upon completion or at agreed milestones.
              Overdue payments may result in work being paused.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Limitation of Liability</h2>
            <p>
              Brixven shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our services. Our total liability shall not exceed the total
              fees paid for the specific project giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of Scotland for clients based in Scotland,
              and by the laws of England and Wales for clients based elsewhere in the UK.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
              <a href="mailto:info@brixven.com" className="text-gold hover:text-cream">
                info@brixven.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
