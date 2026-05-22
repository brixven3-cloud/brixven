import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Brixven — Building Intelligent Software'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F9F8F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top accent line */}
        <div style={{ width: 60, height: 3, background: '#C9A96E', marginBottom: 40 }} />

        {/* Logo wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          {/* B icon */}
          <div style={{
            width: 52, height: 52, background: '#1C1C1C', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: 28, fontWeight: 900,
          }}>
            B
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: 38, fontWeight: 900, color: '#1C1C1C' }}>Brix</span>
            <span style={{ fontSize: 38, fontWeight: 900, color: '#C9A96E' }}>ven</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 64, fontWeight: 800, color: '#1C1C1C', lineHeight: 1.05, marginBottom: 28 }}>
          We Build Software That<br />
          Powers Your{' '}
          <span style={{ color: '#C9A96E', fontStyle: 'italic' }}>Business</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: 24, color: '#6B6B6B', marginBottom: 48 }}>
          Web apps · Mobile apps · AI assistants · Custom software · SEO
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['🇵🇰 Pakistan', '🇬🇧 United Kingdom', '⭐ 5-star rated'].map((b) => (
            <div
              key={b}
              style={{
                background: '#1C1C1C', color: 'white',
                fontSize: 16, fontWeight: 600, letterSpacing: '0.08em',
                padding: '10px 20px',
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
