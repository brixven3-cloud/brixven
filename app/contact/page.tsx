import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { CONTACT_EMAIL } from '@/lib/content'
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Brixven',
  description:
    'Get in touch with Brixven — web development, AI voice agents & automation for UK & Ireland businesses. WhatsApp: +44 7828 707081. We respond within 24 hours.',
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
    icon: MessageCircle,
    title: 'WhatsApp',
    content: WHATSAPP_DISPLAY,
    href: 'https://wa.me/447828707081',
    isLink: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    isLink: true,
  },
  {
    icon: MapPin,
    title: 'Offices',
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
    <div className="min-h-screen bg-parchment pt-24 pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://brixven.com' },
          { name: 'Contact', url: 'https://brixven.com/contact' },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.16em] mb-4">
            Contact
          </p>
          <h1
            className="font-display font-black text-ink leading-[0.96] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
          >
            Let&apos;s build something together.
          </h1>
          <p className="text-ink-muted text-lg max-w-xl leading-relaxed">
            Tell us about your project — web, AI, automation or ads. We&apos;ll come back with a tailored proposal within 24 hours.
          </p>
        </div>

        <div className="hairline mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-3">
            {INFO_CARDS.map(({ icon: Icon, title, content, href, isLink }) => (
              <div
                key={title}
                className="bg-parchment-dark border border-ink/8 p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 border border-ink/12 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-ink" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-ink-faint uppercase tracking-[0.12em] mb-0.5">
                    {title}
                  </p>
                  {isLink && href ? (
                    <a
                      href={href}
                      target={href.startsWith('https') ? '_blank' : undefined}
                      rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="text-ink text-sm font-semibold hover:text-red transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-ink-muted text-sm">{content}</p>
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
