import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { CONTACT_EMAIL } from '@/lib/content'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Brixven',
  description:
    'Get in touch with Brixven. Tell us about your project — web app, mobile app, AI, or SEO. We respond within 24 hours. Based in Dublin & London.',
  alternates: { canonical: 'https://brixven.com/contact' },
  openGraph: {
    title: 'Contact Brixven — Start Your Project',
    description:
      'Tell us about your project. We respond with a tailored proposal within 24 hours.',
    url: 'https://brixven.com/contact',
    type: 'website',
  },
}

const INFO_CARDS = [
  {
    icon: Mail,
    title: 'Email Us',
    content: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    isLink: true,
  },
  {
    icon: MapPin,
    title: 'Our Offices',
    content: 'Dublin, Ireland · London, UK',
    isLink: false,
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'We reply within 24 hours',
    isLink: false,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://brixven.com' },
          { name: 'Contact', url: 'https://brixven.com/contact' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-[#555555] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#333333]" /> Contact Us <span className="w-6 h-px bg-[#333333]" />
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Let&apos;s Build Something<br />
            <em style={{ fontStyle: 'italic' }}>Great</em>
          </h1>
          <p className="text-[#888888] text-lg max-w-xl mx-auto">
            Tell us about your project. We&apos;ll come back with a tailored proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            {INFO_CARDS.map(({ icon: Icon, title, content, href, isLink }) => (
              <div
                key={title}
                className="bg-[#0a0a0a] border border-[#1a1a1a] p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-[#222222] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-0.5">{title}</h3>
                  {isLink && href ? (
                    <a href={href} className="text-[#888888] text-sm hover:text-white transition-colors">
                      {content}
                    </a>
                  ) : (
                    <p className="text-[#888888] text-sm">{content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
