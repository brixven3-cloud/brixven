import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://brixven.com'
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
