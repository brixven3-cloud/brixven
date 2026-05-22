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
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F9F8F5',
        'cream-dark': '#F2EFE8',
        charcoal: '#1C1C1C',
        gold: '#C9A96E',
        'gold-dark': '#B8933B',
        muted: '#6B6B6B',
        'warm-border': '#E8E4DC',
        brand: {
          blue: '#2563EB',
          indigo: '#4F46E5',
        },
      },
      boxShadow: {
        card: '0 1px 4px 0 rgba(0,0,0,0.05)',
        'card-hover': '0 12px 32px -4px rgba(0,0,0,0.09)',
        nav: '0 1px 0 0 #E8E4DC',
        'nav-scrolled': '0 4px 24px -2px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}

export default config
