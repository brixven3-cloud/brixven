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
        display: ['var(--font-archivo)',  'Archivo',  'Inter',     'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Editorial palette
        parchment:       '#EDEAE6',
        'parchment-dark':'#D9D6D1',
        ink:             '#111111',
        'ink-muted':     '#555555',
        'ink-faint':     '#888888',
        red:             '#E10A0A',
        'red-dark':      '#B50808',
        // Legacy compat kept for motion/index and other minor uses
        cream:           '#EDEAE6',
        'cream-dark':    '#D9D6D1',
        charcoal:        '#1C1C1C',
        gold:            '#C9A96E',
        'gold-dark':     '#B8933B',
        muted:           '#6B6B6B',
        'warm-border':   '#D9D6D1',
        accent:          '#E10A0A',
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
