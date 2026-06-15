import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['500', '700'],
})

const BASE_URL = 'https://brixven.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Brixven — Software for Your Business',
    template: '%s | Brixven',
  },
  description:
    'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK & Ireland.',
  keywords: [
    'software development UK', 'software development Ireland', 'web development Dublin',
    'web design Ireland', 'digital agency Ireland', 'digital agency Dublin',
    'web app development UK', 'mobile app development', 'AI assistants',
    'custom software', 'SEO UK', 'SEO Ireland', 'Dublin web agency',
    'software agency London', 'software agency Dublin', 'Brixven', 'Muhammad Hamza',
  ],
  authors: [{ name: 'Brixven', url: BASE_URL }],
  creator: 'Brixven',
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  alternates: { canonical: BASE_URL },
  verification: {
    google: 'k1RYOtvByaEbm1CMvaPHdrp3BzMcQ7Lg3XBvJ3GCUDQ',
  },
  openGraph: {
    title: 'Brixven — Software for Your Business',
    description:
      'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK & Ireland.',
    url: BASE_URL,
    siteName: 'Brixven',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brixven — Software for Your Business',
    description: 'Web apps · Mobile apps · AI · SEO — UK & Ireland.',
    creator: '@brixven',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brixven',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    'Founder-led software studio providing web apps, mobile apps, AI assistants, custom software, and SEO for UK and Irish businesses.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Hamza',
    jobTitle: 'Founder & Lead Engineer',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@brixven.com',
    contactType: 'customer support',
    areaServed: ['GB', 'IE'],
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/brixven/',
    'https://www.facebook.com/share/1EjuURpV2Z/',
    'https://www.instagram.com/brix_ven',
    'https://www.threads.com/@brix_ven',
  ],
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
    { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Organization', name: 'Brixven' },
  serviceType: ['Web Application Development', 'Mobile App Development', 'AI Automation', 'SEO Services', 'UI/UX Design'],
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Ireland' },
  ],
  description: 'Full-stack digital services for growing businesses across the UK and Ireland.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
