import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuroraBackground from '@/components/AuroraBackground'
import CustomCursor from '@/components/CustomCursor'

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

  // ── Google Search Console verification ──────────────────────────────
  verification: {
    google: 'k1RYOtvByaEbm1CMvaPHdrp3BzMcQ7Lg3XBvJ3GCUDQ',
  },
  // ────────────────────────────────────────────────────────────────────

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

// JSON-LD Organization schema
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
    {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <AuroraBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  )
}
