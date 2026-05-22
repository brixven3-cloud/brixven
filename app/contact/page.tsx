import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { CONTACT_EMAIL, COUNTRIES } from '@/lib/content'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Brixven',
  description: "Get in touch with Brixven. Tell us about your project — we respond within 24 hours.",
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
    content: 'Lahore, Pakistan · London, UK',
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
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#2563EB] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Let&apos;s Build Something Great
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Tell us about your project. We&apos;ll come back with a tailored proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            {INFO_CARDS.map(({ icon: Icon, title, content, href, isLink }) => (
              <div
                key={title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#2563EB]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold text-sm mb-0.5">{title}</h3>
                  {isLink && href ? (
                    <a href={href} className="text-[#2563EB] text-sm hover:text-[#1D4ED8] transition-colors">
                      {content}
                    </a>
                  ) : (
                    <p className="text-slate-500 text-sm">{content}</p>
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
