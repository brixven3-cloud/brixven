import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import StatsStrip from '@/components/StatsStrip'
import ServicePillars from '@/components/ServicePillars'
import PackagesSection from '@/components/PackagesSection'
import WhyChoose from '@/components/WhyChoose'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Brixven — Software & AI for Scotland',
  description:
    'Web & e-commerce development, AI voice agents, automation and paid ads — serving growing businesses across Scotland. Founder-led digital studio.',
  alternates: { canonical: 'https://brixven.com' },
  openGraph: {
    title: 'Brixven — Software & AI for Scotland',
    description:
      'Web, AI, Automation & Ads — one lean senior team for Scottish businesses.',
    url: 'https://brixven.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicePillars />
      <PackagesSection />
      <WhyChoose />
      <CTABanner />
    </>
  )
}
