import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

const BASE_URL = 'https://brixven.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Brixven — Software for Your Business',
    template: '%s | Brixven',
  },
  description:
    'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK, Ireland, and Europe.',
  keywords: [
    'software development UK', 'software development Ireland', 'web development Dublin',
    'web design Ireland', 'digital agency Ireland', 'digital agency Dublin',
    'web app development Europe', 'mobile app development', 'AI assistants',
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
      'Web apps, mobile apps, AI assistants & expert SEO — serving growing businesses across the UK, Ireland, and Europe.',
    url: BASE_URL,
    siteName: 'Brixven',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brixven — Software for Your Business',
    description: 'Web apps · Mobile apps · AI · SEO — UK, Ireland & Europe.',
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
    'Founder-led software studio providing web apps, mobile apps, AI assistants, custom software, and SEO for UK, Irish, and European businesses.',
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
    areaServed: ['PK', 'GB', 'IE'],
    availableLanguage: ['English', 'Urdu'],
  },
  sameAs: ['https://linkedin.com/company/brixven', 'https://twitter.com/brixven'],
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
    { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
    { '@type': 'PostalAddress', addressLocality: 'Lahore', addressCountry: 'PK' },
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
    { '@type': 'Country', name: 'Pakistan' },
  ],
  description: 'Full-stack digital services for growing businesses across UK, Ireland, and Europe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
