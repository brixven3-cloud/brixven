import type { Metadata } from 'next'
import { Inter, Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '600', '700', '800', '900'],
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
    default: 'Brixven — Software & AI for UK & Ireland',
    template: '%s | Brixven',
  },
  description:
    'Web apps, mobile apps, AI voice agents & automation — serving growing businesses across the UK & Ireland. Founder-led digital studio.',
  keywords: [
    'software development UK', 'software development Ireland', 'web development Dublin',
    'web design Ireland', 'digital agency Ireland', 'digital agency Dublin',
    'web app development UK', 'mobile app development', 'AI voice agents UK',
    'custom software', 'n8n automation', 'Meta Ads UK', 'Google Ads Ireland',
    'software agency London', 'software agency Dublin', 'Brixven',
  ],
  authors: [{ name: 'Brixven', url: BASE_URL }],
  creator: 'Brixven',
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-GB': BASE_URL,
      'en-IE': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  verification: {
    google: 'k1RYOtvByaEbm1CMvaPHdrp3BzMcQ7Lg3XBvJ3GCUDQ',
  },
  openGraph: {
    title: 'Brixven — Software & AI for UK & Ireland',
    description:
      'Web apps, mobile apps, AI voice agents & automation — serving growing businesses across the UK & Ireland.',
    url: BASE_URL,
    siteName: 'Brixven',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brixven — Software & AI for UK & Ireland',
    description: 'Web · AI · Automation · Ads — UK & Ireland.',
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
    'Founder-led software studio providing web apps, mobile apps, AI voice agents, automation and paid ads for UK and Irish businesses.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Hamza',
    jobTitle: 'Founder & Lead Engineer',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-7828-707081',
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

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Brixven',
  url: BASE_URL,
  image: `${BASE_URL}/icon.svg`,
  priceRange: '££',
  telephone: '+44-7828-707081',
  description:
    'Full-stack digital services for growing businesses across the UK and Ireland — AI voice agents, web development, mobile apps, automation, and paid ads management.',
  serviceType: [
    'AI Voice Agents',
    'Web Application Development',
    'Mobile App Development',
    'Business Automation',
    'Meta & Google Ads Management',
    'SEO Services',
    'Custom Software Development',
    'UI/UX Design',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Ireland' },
  ],
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
    { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/brixven/',
    'https://www.facebook.com/share/1EjuURpV2Z/',
    'https://www.instagram.com/brix_ven',
    'https://www.threads.com/@brix_ven',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
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
