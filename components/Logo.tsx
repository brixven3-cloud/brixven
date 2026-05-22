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
  iconSize = 28,
  textClass = 'text-xl',
}: LogoProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5">
      {/* Icon: charcoal square with gold-accented B */}
      <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1C1C1C" />
            <stop offset="1" stopColor="#2C2C2C" />
          </linearGradient>
        </defs>
        {/* Charcoal background (no border-radius — editorial square feel) */}
        <rect width="40" height="40" rx="4" fill={`url(#${gradientId})`} />
        {/* B: left stem — white */}
        <rect x="10" y="9" width="5" height="22" rx="1" fill="white" />
        {/* B: top bump — white */}
        <rect x="13" y="9" width="11" height="10" rx="5" fill="white" />
        {/* B: bottom bump — gold accent (slightly wider) */}
        <rect x="13" y="21" width="13" height="10" rx="5" fill="#C9A96E" />
      </svg>

      {/* Wordmark: serif-style, charcoal + gold */}
      <div className="flex items-baseline gap-0">
        <span
          className={`${textClass} font-black text-[#1C1C1C] tracking-tight`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Brix
        </span>
        <span
          className={`${textClass} font-black text-[#C9A96E] tracking-tight`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          ven
        </span>
      </div>
    </Link>
  )
}
