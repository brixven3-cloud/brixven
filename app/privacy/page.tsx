import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy | Brixven',
  description: 'How Brixven collects, uses, and protects your personal data.',
  alternates: { canonical: 'https://brixven.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-parchment pt-28 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://brixven.com' },
          { name: 'Privacy Policy', url: 'https://brixven.com/privacy' },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-emerald-500 text-sm hover:text-emerald-400 transition-colors">
            ← Back to home
          </Link>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Privacy Policy
        </h1>
        <p className="text-[#556070] text-sm mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#8899aa] leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out our contact
              form (name, email address, company name, and message). We do not collect any data beyond
              what is necessary to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-[#6b7a8d]">
              <li>Respond to your enquiries and project requests</li>
              <li>Send you a proposal or consultation follow-up</li>
              <li>Communicate about ongoing projects</li>
            </ul>
            <p className="mt-3">We do not sell, share, or rent your personal data to any third parties.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Data Retention</h2>
            <p>
              We retain your contact information only for as long as necessary to fulfil the purpose
              for which it was collected, or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Cookies</h2>
            <p>
              This website uses no tracking cookies. We do not use Google Analytics, Facebook Pixel,
              or any third-party analytics that profile your behaviour.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Your Rights (GDPR)</h2>
            <p>
              If you are located in the UK, Ireland, or EU, you have the right to access, correct,
              or delete any personal data we hold about you. To exercise these rights, please contact
              us at{' '}
              <a href="mailto:info@brixven.com" className="text-emerald-500 hover:text-emerald-400">
                info@brixven.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Contact</h2>
            <p>
              Questions about this policy? Contact us at{' '}
              <a href="mailto:info@brixven.com" className="text-emerald-500 hover:text-emerald-400">
                info@brixven.com
              </a>
              {' '}or via our{' '}
              <Link href="/contact" className="text-emerald-500 hover:text-emerald-400">
                contact form
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
