import Link from 'next/link'
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react'
import { CONTACT_EMAIL, FOOTER_LINKS } from '@/lib/content'
import Logo from './Logo'

const SOCIALS = [
  { label: 'Twitter', href: '#', Icon: Twitter },
  { label: 'LinkedIn', href: '#', Icon: Linkedin },
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'Instagram', href: '#', Icon: Instagram },
]

const OFFICES = [
  { city: 'Lahore, Pakistan', flag: '🇵🇰' },
  { city: 'London, United Kingdom', flag: '🇬🇧' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-14">

          <div className="md:col-span-4">
            <div className="mb-5">
              <Logo gradientId="footer-g" iconSize={26} textClass="text-[1.1rem]" />
            </div>
            <p className="text-[#888888] text-sm leading-relaxed max-w-[260px] mb-5">
              Full-service software agency building web apps, mobile apps, AI solutions, and
              expert SEO for Pakistan &amp; UK markets.
            </p>
            <div className="space-y-1.5 mb-6">
              {OFFICES.map((o) => (
                <div key={o.city} className="flex items-center gap-2 text-sm text-[#888888]">
                  <span>{o.flag}</span><span>{o.city}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 border border-[#222222] bg-[#111111] flex items-center justify-center text-[#555555] hover:text-white hover:border-white transition-all">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(([section, links]) => (
            <div key={section} className="md:col-span-2">
              <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#888888] text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Contact</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors mb-4">
              <Mail size={13} />{CONTACT_EMAIL}
            </a>
            <Link href="/contact"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-[#aaaaaa] transition-colors">
              Get a Quote →
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444444] text-xs tracking-wide">© {year} Brixven. All rights reserved.</p>
          <p className="text-[#444444] text-xs tracking-wide">Pakistan 🇵🇰 · United Kingdom 🇬🇧</p>
        </div>
      </div>
    </footer>
  )
}
