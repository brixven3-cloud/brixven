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
          background: '#0A1628',
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
        <div style={{ width: 60, height: 3, background: '#D4A574', marginBottom: 40 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <div style={{
            width: 52, height: 52, background: '#D4A574', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0A1628', fontSize: 28, fontWeight: 900,
          }}>
            B
          </div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontSize: 38, fontWeight: 900, color: '#F5E6D3' }}>Brixven</span>
          </div>
        </div>

        <div style={{ fontSize: 64, fontWeight: 800, color: '#F5E6D3', lineHeight: 1.05, marginBottom: 28 }}>
          We Build Software That<br />
          Powers Your{' '}
          <span style={{ color: '#D4A574', fontStyle: 'italic' }}>Business</span>
        </div>

        <div style={{ fontSize: 24, color: '#a8b3c4', marginBottom: 48 }}>
          Web apps · Mobile apps · AI assistants · Custom software · SEO
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['🏴 Scotland'].map((b) => (
            <div
              key={b}
              style={{
                border: '1px solid #1C2B45',
                color: '#a8b3c4',
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
