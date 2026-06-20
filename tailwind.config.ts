import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-inter)',    'Inter',    'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', '"Playfair Display"', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains-mono)', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Cinematic Scotland palette
        parchment:       '#0A1628',
        'parchment-dark':'#152238',
        ink:             '#F5E6D3',
        'ink-muted':     'rgba(245,230,211,0.7)',
        'ink-faint':     'rgba(245,230,211,0.5)',
        red:             '#D4A574',
        'red-dark':      '#B8933B',
        // Legacy compat kept for motion/index and other minor uses
        cream:           '#F5E6D3',
        'cream-dark':    '#E5C396',
        charcoal:        '#060D18',
        'navy-deep':     '#060D18',
        gold:            '#D4A574',
        'gold-dark':     '#B8933B',
        muted:           'rgba(245,230,211,0.7)',
        'warm-border':   '#1C2B45',
        accent:          '#D4A574',
      },
      boxShadow: {
        card:         '0 1px 4px 0 rgba(17,17,17,0.06)',
        'card-hover': '0 12px 32px -4px rgba(17,17,17,0.12)',
        nav:          '0 1px 0 0 rgba(17,17,17,0.12)',
        'nav-scrolled':'0 4px 24px -2px rgba(17,17,17,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
