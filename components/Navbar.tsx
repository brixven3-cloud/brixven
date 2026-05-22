'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/content'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F9F8F5] transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_24px_-2px_rgba(0,0,0,0.07)]'
          : 'border-b border-[#E8E4DC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Logo gradientId="nav-g" iconSize={28} textClass="text-[1.15rem]" />

          {/* Desktop nav — small caps, tracked */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — Get a Quote */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] text-white text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-black transition-colors"
            >
              Get a Quote →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors"
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
        <div className="border-t border-[#E8E4DC] bg-[#F9F8F5] px-6 pt-3 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B6B6B] hover:text-[#1C1C1C] border-b border-[#E8E4DC] last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1C1C1C] text-white text-[11px] font-semibold tracking-[0.15em] uppercase"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </header>
  )
}
