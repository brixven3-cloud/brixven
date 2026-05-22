import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold tracking-wide rounded-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none uppercase text-xs'

  const sizes = {
    sm: 'px-5 py-2.5 gap-1.5',
    md: 'px-6 py-3 gap-2',
    lg: 'px-8 py-4 gap-2',
  }

  const variants = {
    // Solid black — premium editorial style (main CTA)
    primary:
      'bg-[#1C1C1C] text-white hover:bg-black active:scale-[0.97] focus-visible:ring-[#1C1C1C]',
    // Outline black — secondary CTA
    outline:
      'border border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white active:scale-[0.97] focus-visible:ring-[#1C1C1C]',
    // Ghost — minimal
    ghost:
      'text-[#6B6B6B] hover:text-[#1C1C1C] hover:bg-[#F2EFE8] active:scale-[0.97]',
    // Blue — for specific brand-colored contexts (SEO section etc.)
    blue:
      'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:scale-[0.97] shadow-sm focus-visible:ring-[#2563EB]',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) return <Link href={href} className={classes}>{children}</Link>

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
