import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const BASE_URL = 'https://brixven.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Brixven — Software for Your Business',
    template: '%s | Brixven',
  },
  description:
    'Web apps, mobile apps, AI assistants & expert SEO — serving clients across Pakistan and the UK.',
  keywords: [
    'software development Pakistan', 'software development UK',
    'web app development', 'mobile app development', 'AI assistants',
    'custom software', 'SEO Pakistan', 'SEO UK', 'digital agency Pakistan',
    'Brixven', 'Muhammad Hamza', 'software agency Lahore', 'software agency London',
  ],
  authors: [{ name: 'Brixven', url: BASE_URL }],
  creator: 'Brixven',
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  alternates: { canonical: BASE_URL },

  // ── Google Search Console verification ──────────────────────────────
  // 1. Go to https://search.google.com/search-console
  // 2. Add property → URL prefix → https://brixven.com
  // 3. Choose "HTML tag" verification method
  // 4. Copy ONLY the content="..." value (not the full tag)
  // 5. Paste it below replacing PASTE_YOUR_CODE_HERE
  verification: {
    google: 'k1RYOtvByaEbm1CMvaPHdrp3BzMcQ7Lg3XBvJ3GCUDQ',
  },
  // ────────────────────────────────────────────────────────────────────

  openGraph: {
    title: 'Brixven — Software for Your Business',
    description:
      'Web apps, mobile apps, AI assistants & expert SEO — serving clients across Pakistan and the UK.',
    url: BASE_URL,
    siteName: 'Brixven',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brixven — Software for Your Business',
    description: 'Web apps · Mobile apps · AI · SEO — Pakistan & UK.',
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
    'Full-service software agency providing web apps, mobile apps, AI assistants, custom software, and SEO services for Pakistan and UK markets.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Muhammad Hamza',
    jobTitle: 'CEO & Founder',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@brixven.com',
    contactType: 'customer support',
    areaServed: ['PK', 'GB'],
    availableLanguage: ['English', 'Urdu'],
  },
  sameAs: ['https://linkedin.com/company/brixven', 'https://twitter.com/brixven'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
