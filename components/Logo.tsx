'use client'

import Link from 'next/link'

interface LogoProps {
  gradientId?: string
  href?: string
  iconSize?: number
  textClass?: string
}

export default function Logo({
  gradientId = 'bx-g',
  href = '/',
  iconSize = 34,
  textClass = 'text-xl',
}: LogoProps) {
  // Pointy-top hexagon, center (20,20), radius 17
  const HEX = 'M 20,3 L 34.7,11.5 L 34.7,28.5 L 20,37 L 5.3,28.5 L 5.3,11.5 Z'
  const PERI = 102 // approximate perimeter

  return (
    <Link href={href} className="inline-flex items-center gap-3 group select-none">
      {/* Icon */}
      <div
        className="relative flex-shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 40 40"
          fill="none"
          className="overflow-visible"
          aria-hidden="true"
        >
          {/* Glow filter */}
          <defs>
            <filter id={`hex-glow-${gradientId}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer glow pulse — very faint */}
          <path
            d={HEX}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="4"
            fill="none"
            strokeLinejoin="round"
            style={{ animation: 'glowPulse 3s ease-in-out infinite' }}
          />

          {/* Static dim hexagon border */}
          <path
            d={HEX}
            stroke="rgba(255,255,255,0.20)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.03)"
            strokeLinejoin="round"
          />

          {/* Animated bright sweep — short arc orbiting the hexagon */}
          <path
            d={HEX}
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.8"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter={`url(#hex-glow-${gradientId})`}
            style={{
              strokeDasharray: `16 ${PERI - 16}`,
              animation: 'hexSweep 2.8s linear infinite',
            }}
          />

          {/* B letter — italic serif, centered */}
          <text
            x="20.5"
            y="26"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="700"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            style={{ animation: 'hexFadeIn 0.6s ease-out 0.1s both' }}
          >
            B
          </text>
        </svg>

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Wordmark */}
      <div className="flex items-baseline leading-none">
        <span
          className={`${textClass} font-black text-white tracking-tight`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Brix
        </span>
        <span
          className={`${textClass} font-black tracking-tight`}
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          ven
        </span>
      </div>
    </Link>
  )
}
