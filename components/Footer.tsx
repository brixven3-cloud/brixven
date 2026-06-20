import Link from 'next/link'
import { CONTACT_EMAIL, FOOTER_LINKS, SOCIALS } from '@/lib/content'
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp'
import { Reveal } from './motion'
import Logo from './Logo'

function SvgIcon({ d, size = 13 }: { d: string | string[]; size?: number }) {
  const paths = Array.isArray(d) ? d : [d]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((p, i) => <path key={i} d={p} />)}
    </svg>
  )
}

const FOOTER_SOCIALS = [
  {
    label: 'LinkedIn', href: SOCIALS.linkedin,
    d: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', 'M2 9h4v12H2z', 'M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
  },
  {
    label: 'Facebook', href: SOCIALS.facebook,
    d: ['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'],
  },
  {
    label: 'Instagram', href: SOCIALS.instagram,
    d: ['M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'],
  },
  {
    label: 'Threads', href: SOCIALS.threads,
    d: ['M12 2c-4.5 0-7.5 3-7.5 7.5v5C4.5 19 7.5 22 12 22s7.5-3 7.5-7.5', 'M12 9.5c2.5 0 4 1.2 4 3s-1.5 3-4 3-3.5-1.3-3.5-3'],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060D18] text-cream">
      {/* Top hairline */}
      <div className="h-px bg-cream/10" />

      <Reveal className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <Logo iconSize={36} textClass="text-2xl" />
            </div>

            <p className="text-cream/50 text-sm leading-relaxed max-w-[240px] mb-6">
              Founder-led software &amp; AI studio building products for Scottish businesses.
            </p>

            {/* WhatsApp contact */}
            <div className="mb-6">
              <p className="font-mono text-[9px] text-cream/40 uppercase tracking-[0.14em] mb-1">
                WhatsApp
              </p>
              <Link
                href="https://wa.me/447828707081"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-cream hover:text-red transition-colors duration-200"
              >
                {WHATSAPP_DISPLAY}
              </Link>
            </div>

            {/* Email */}
            <div className="mb-7">
              <p className="font-mono text-[9px] text-cream/40 uppercase tracking-[0.14em] mb-1">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {FOOTER_SOCIALS.map(({ label, href, d }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-cream/15 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/40 transition-all duration-200"
                >
                  <SvgIcon d={d} size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(
            ([section, links]) => (
              <div key={section} className="md:col-span-2">
                <h4 className="font-mono text-[9px] text-cream/40 font-bold tracking-[0.18em] uppercase mb-5">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-cream/60 text-sm hover:text-cream transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-[9px] text-cream/40 font-bold tracking-[0.18em] uppercase mb-5">
              Start a project
            </h4>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-cream hover:text-red transition-colors duration-200"
            >
              Talk to us →
            </Link>
            <div className="mt-4 space-y-1">
              <div className="text-cream/50 text-xs">🏴 Edinburgh, Scotland</div>
              <div className="text-cream/50 text-xs">🏴 Glasgow, Scotland</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs tracking-wide">
            © {year} Brixven. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs tracking-wide">
            Scotland 🏴 · United Kingdom 🇬🇧
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
