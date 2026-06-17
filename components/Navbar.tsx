'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_DISPLAY } from '@/lib/whatsapp'

const NAV = [
  { label: 'Services',  href: '/#services' },
  { label: 'Packages',  href: '/#packages' },
  { label: 'Work',      href: '/#work' },
  { label: 'Contact',   href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-parchment transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(17,17,17,0.14)]' : 'border-b border-ink/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-display font-black text-ink text-xl tracking-tight hover:text-red transition-colors duration-200"
          >
            Brixven
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-5 py-2 text-[13px] text-ink-muted font-medium hover:text-ink transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-5 right-5 h-px bg-red scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://wa.me/447828707081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-end"
            >
              <span className="font-mono text-[9px] text-ink-faint uppercase tracking-[0.14em]">
                Talk to us
              </span>
              <span className="text-[13px] font-semibold text-ink hover:text-red transition-colors duration-200">
                {WHATSAPP_DISPLAY}
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-muted hover:text-ink transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="border-t border-ink/10 bg-parchment px-6 pt-3 pb-6 flex flex-col gap-0">
          {NAV.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-4 text-sm text-ink-muted hover:text-ink border-b border-ink/8 last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/447828707081"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center px-5 py-3 bg-ink text-parchment text-sm font-semibold hover:bg-red transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            {WHATSAPP_DISPLAY}
          </Link>
        </div>
      </div>
    </header>
  )
}
