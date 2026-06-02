import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Brixven — Software for Your Business',
  description:
    'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK, Ireland, and Europe. Founder-led digital studio.',
  alternates: { canonical: 'https://brixven.com' },
  openGraph: {
    title: 'Brixven — Digital Products Built to Scale',
    description:
      'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK, Ireland, and Europe.',
    url: 'https://brixven.com',
    type: 'website',
  },
}


import StatsStrip from '@/components/StatsStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChoose from '@/components/WhyChoose'
import ProcessSection from '@/components/ProcessSection'
import Portfolio from '@/components/Portfolio'
import SEOServices from '@/components/SEOServices'
import TeamSection from '@/components/TeamSection'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesGrid />
      <WhyChoose />
      <ProcessSection />
      <Portfolio />
      <SEOServices />
      <TeamSection />
      <Testimonials />
      <CTABanner />
    </>
  )
}
