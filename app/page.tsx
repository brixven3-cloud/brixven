import HeroSection from '@/components/HeroSection'
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
