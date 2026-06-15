import Link from 'next/link'
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react'
import { CONTACT_EMAIL, FOOTER_LINKS, SOCIALS } from '@/lib/content'
import Logo from './Logo'

function ThreadsIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c-4.5 0-7.5 3-7.5 7.5v5C4.5 19 7.5 22 12 22s7.5-3 7.5-7.5" />
      <path d="M12 9.5c2.5 0 4 1.2 4 3s-1.5 3-4 3-3.5-1.3-3.5-3" />
    </svg>
  )
}

const FOOTER_SOCIALS = [
  { label: 'LinkedIn',  href: SOCIALS.linkedin,  Icon: Linkedin },
  { label: 'Facebook',  href: SOCIALS.facebook,  Icon: Facebook },
  { label: 'Instagram', href: SOCIALS.instagram, Icon: Instagram },
  { label: 'Threads',   href: SOCIALS.threads,   Icon: ThreadsIcon },
]

const OFFICES = [
  { city: 'Dublin, Ireland',        flag: '🇮🇪' },
  { city: 'London, United Kingdom', flag: '🇬🇧' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-14">

          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <Logo gradientId="footer-g" iconSize={26} textClass="text-[1.1rem]" />
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-[260px] mb-5">
              Founder-led software studio building web apps, mobile apps, AI solutions, and
              expert SEO for UK &amp; Irish businesses.
            </p>
            <div className="space-y-1.5 mb-6">
              {OFFICES.map((o) => (
                <div key={o.city} className="flex items-center gap-2 text-sm text-[#888]">
                  <span>{o.flag}</span><span>{o.city}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {FOOTER_SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-[#222] bg-[#111] flex items-center justify-center text-[#555] hover:text-white hover:border-[#555] transition-all"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(([section, links]) => (
            <div key={section} className="md:col-span-2">
              <h4 className="font-mono text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#888] text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors mb-4"
            >
              <Mail size={13} />{CONTACT_EMAIL}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-[#aaa] transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444] text-xs tracking-wide">© {year} Brixven. All rights reserved.</p>
          <p className="text-[#444] text-xs tracking-wide">Ireland 🇮🇪 · United Kingdom 🇬🇧</p>
        </div>
      </div>
    </footer>
  )
}
