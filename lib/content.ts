// ─── Edit all site copy from here ─────────────────────────────────────────────

export const CONTACT_EMAIL = 'info@brixven.com'
export const COUNTRIES = ['Pakistan', 'United Kingdom']

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work',     href: '/#work' },
  { label: 'About',   href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '5+',   label: 'Years Experience' },
  { value: '2',    label: 'Countries Served' },
]

export const SERVICES = [
  {
    icon: 'Globe',
    title: 'Web App Development',
    description: 'Full-stack web applications built with modern frameworks — fast, secure, and ready to scale.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform iOS & Android apps that delight users and drive business outcomes.',
  },
  {
    icon: 'Bot',
    title: 'AI Assistants & Automation',
    description: 'Custom AI chatbots and workflow automation that save time and cut operational costs.',
  },
  {
    icon: 'Code2',
    title: 'Custom Software Solutions',
    description: 'Bespoke software engineered precisely around your workflows and business logic.',
  },
  {
    icon: 'TrendingUp',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven SEO for Pakistan and UK markets — real rankings, real traffic, real revenue.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Intuitive, beautiful interfaces that convert visitors into loyal customers.',
  },
]

export const WHY_BRIXVEN = [
  {
    title: 'End-to-end solutions',
    description: 'From discovery to launch and beyond — everything under one roof.',
  },
  {
    title: 'AI & modern tech expertise',
    description: 'We build with Next.js, React Native, Python AI, and the tools that move fastest.',
  },
  {
    title: 'UK & Pakistan reach',
    description: 'A bilingual cross-timezone team with deep local market understanding in both countries.',
  },
  {
    title: 'Dedicated project team',
    description: 'You get a named team — not a ticket queue — from day one.',
  },
  {
    title: 'Transparent, agile delivery',
    description: 'Weekly demos, clear milestones, no surprises. You are always in control.',
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We listen deeply, research your market, and map out precise requirements.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, prototypes, and pixel-perfect UI tailored to your brand identity.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Agile sprints, clean code, and regular demos — you see progress every week.',
  },
  {
    step: '04',
    title: 'Deliver & Support',
    description: 'Launch with confidence, backed by dedicated ongoing maintenance and support.',
  },
]

export const PORTFOLIO = [
  {
    title: 'TradePilot',
    subtitle: 'B2B SaaS Trading Platform',
    category: 'Web App',
    bg: '#EFF6FF',
    accent: '#2563EB',
    description: 'Multi-tenant management platform with real-time analytics for UK commodity traders.',
  },
  {
    title: 'CareConnect',
    subtitle: 'Healthcare Mobile App',
    category: 'Mobile App',
    bg: '#F0FDF4',
    accent: '#16A34A',
    description: 'iOS & Android app connecting patients with local healthcare providers across Pakistan.',
  },
  {
    title: 'LexAI',
    subtitle: 'Legal Document Assistant',
    category: 'AI / Automation',
    bg: '#FAF5FF',
    accent: '#9333EA',
    description: 'AI assistant for UK law firms — document review, drafting, and compliance checks.',
  },
]

export const SEO_FEATURES = [
  {
    icon: 'Search',
    title: 'Keyword Research',
    description: 'Deep research into Pakistan and UK search intent, volume, and competition.',
  },
  {
    icon: 'FileText',
    title: 'On-Page SEO',
    description: 'Meta, headings, content structure — optimised for your target audience and search engines.',
  },
  {
    icon: 'Settings2',
    title: 'Technical SEO',
    description: 'Site speed, Core Web Vitals, schema markup, and crawlability — every signal covered.',
  },
  {
    icon: 'MapPin',
    title: 'Local SEO (PK + UK)',
    description: 'Google Business optimisation, local citations, and geo-targeted ranking strategies.',
  },
  {
    icon: 'Link',
    title: 'Content & Link Building',
    description: 'High-quality content and authoritative backlinks that build domain authority over time.',
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Reporting',
    description: 'Monthly reports with clear KPIs, traffic data, ranking movements, and ROI tracking.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James Whitfield',
    role: 'CEO, NovaTech',
    flag: '🇬🇧',
    country: 'United Kingdom',
    avatar: 'JW',
    quote:
      'Brixven delivered our SaaS platform on time and under budget. The quality of their code and design work is genuinely world-class. We are already planning our next project with them.',
  },
  {
    name: 'Ayesha Rahman',
    role: 'Founder, GrowLabs',
    flag: '🇵🇰',
    country: 'Pakistan',
    avatar: 'AR',
    quote:
      'Their SEO work tripled our organic traffic in three months flat. They understand the Pakistan market better than any agency we have ever worked with. Highly recommended.',
  },
  {
    name: 'Daniel Shaw',
    role: 'Product Lead, Finbridge UK',
    flag: '🇬🇧',
    country: 'United Kingdom',
    avatar: 'DS',
    quote:
      'The AI assistant they built handles over 80% of our customer queries automatically. The ROI was crystal clear within the first month of going live.',
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────
// photo: place your image in /public/team/ and set the filename here.
// Use null to show the avatar initials placeholder instead.
export const TEAM = [
  {
    name: 'Muhammad Hamza',
    role: 'CEO & Founder',
    bio: 'Hamza founded Brixven with a vision to bring world-class software to Pakistan and UK businesses. With deep expertise in AI and full-stack development, he leads the company\'s strategy and client relationships.',
    photo: '/team/hamza.jpg',   // ← place your photo at public/team/hamza.jpg
    initials: 'MH',
    linkedin: '#',              // ← update with your LinkedIn URL
    twitter: '#',
    flag: '🇵🇰',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Lead Developer',
    bio: 'Sarah leads our engineering team, specialising in React, Node.js, and cloud architecture. She has shipped products used by thousands of users across the UK.',
    photo: null,               // set to '/team/sarah.jpg' once you have a photo
    initials: 'SA',
    linkedin: '#',
    twitter: '#',
    flag: '🇬🇧',
  },
  {
    name: 'Usman Malik',
    role: 'Head of SEO & Growth',
    bio: 'Usman drives our digital marketing and SEO practice. He has generated millions of organic visits for clients in both Pakistan and UK markets.',
    photo: null,
    initials: 'UM',
    linkedin: '#',
    twitter: '#',
    flag: '🇵🇰',
  },
]

// Footer columns — update hrefs once you have real pages
export const FOOTER_LINKS = {
  Services: [
    { label: 'Web App Development', href: '/#services' },
    { label: 'Mobile Apps', href: '/#services' },
    { label: 'AI & Automation', href: '/#services' },
    { label: 'SEO Services', href: '/#seo' },
    { label: 'UI/UX Design', href: '/#services' },
  ],
  Company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Portfolio', href: '/#work' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}
