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
      <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#cccccc" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="4" fill={`url(#${gradientId})`} />
        <rect x="10" y="9" width="5" height="22" rx="1" fill="#000000" />
        <rect x="13" y="9" width="11" height="10" rx="5" fill="#000000" />
        <rect x="13" y="21" width="13" height="10" rx="5" fill="#555555" />
      </svg>

      <div className="flex items-baseline gap-0">
        <span
          className={`${textClass} font-black text-white tracking-tight`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Brix
        </span>
        <span
          className={`${textClass} font-black text-white tracking-tight`}
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          ven
        </span>
      </div>
    </Link>
  )
}
