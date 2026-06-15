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
          background: '#000000',
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
        <div style={{ width: 60, height: 3, background: '#ffffff', marginBottom: 40 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <div style={{
            width: 52, height: 52, background: '#ffffff', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'black', fontSize: 28, fontWeight: 900,
          }}>
            B
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: 38, fontWeight: 900, color: '#ffffff' }}>Brixven</span>
          </div>
        </div>

        <div style={{ fontSize: 64, fontWeight: 800, color: '#ffffff', lineHeight: 1.05, marginBottom: 28 }}>
          We Build Software That<br />
          Powers Your{' '}
          <span style={{ color: '#aaaaaa', fontStyle: 'italic' }}>Business</span>
        </div>

        <div style={{ fontSize: 24, color: '#888888', marginBottom: 48 }}>
          Web apps · Mobile apps · AI assistants · Custom software · SEO
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['🇬🇧 United Kingdom', '🇮🇪 Ireland'].map((b) => (
            <div
              key={b}
              style={{
                border: '1px solid #333333',
                color: '#888888',
                fontSize: 16, fontWeight: 600, letterSpacing: '0.08em',
                padding: '10px 20px',
                borderRadius: 999,
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
