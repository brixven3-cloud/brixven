'use client'

import { useState } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/whatsapp'
import { SERVICES } from '@/lib/content'

type Status = 'idle' | 'sent'

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  message: string
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
}

const BUDGET_OPTIONS = [
  'Under £500',
  '£500 – £1,000',
  '£1,000 – £5,000',
  '£5,000 – £10,000',
  '£10,000+',
]

function buildMessage(form: FormState): string {
  const lines = ['New enquiry from brixven.com', '', `Name: ${form.name}`, `Email: ${form.email}`]
  if (form.phone)   lines.push(`Phone: ${form.phone}`)
  if (form.company) lines.push(`Company: ${form.company}`)
  if (form.service) lines.push(`Service: ${form.service}`)
  if (form.budget)  lines.push(`Budget: ${form.budget}`)
  lines.push(`Message: ${form.message}`)
  return lines.join('\n')
}

export default function ContactForm() {
  const [form, setForm]     = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const [waUrl, setWaUrl]   = useState('')

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const url = waLink(buildMessage(form))
    setWaUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('sent')
    setForm(INITIAL)
  }

  const labelClass = 'block font-mono text-[10px] text-ink-faint tracking-[0.12em] uppercase mb-1.5'
  const inputClass =
    'w-full bg-parchment border border-ink/12 px-4 py-3 text-ink placeholder-ink-faint text-sm focus:outline-none focus:border-ink transition-all duration-200'

  if (status === 'sent') {
    return (
      <div className="bg-parchment-dark border border-ink/10 p-8 sm:p-10 flex flex-col items-center text-center gap-5 min-h-[300px] justify-center">
        <div className="w-14 h-14 border border-ink/15 flex items-center justify-center">
          <CheckCircle2 size={24} className="text-ink" />
        </div>
        <h3 className="font-display font-black text-ink text-xl">Opening WhatsApp…</h3>
        <p className="text-ink-muted text-sm max-w-xs leading-relaxed">
          We&apos;ve pre-filled your message. If it didn&apos;t open automatically, tap the button below.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-parchment text-sm font-semibold hover:bg-red transition-colors"
        >
          Open WhatsApp →
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="text-ink-faint text-sm hover:text-ink transition-colors mt-1"
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-parchment-dark border border-ink/10 p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name <span className="text-red">*</span></label>
          <input
            type="text" required placeholder="Jane Smith"
            value={form.name} onChange={update('name')}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-red">*</span></label>
          <input
            type="email" required placeholder="jane@company.com"
            value={form.email} onChange={update('email')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel" placeholder="+44 7700 900000 (optional)"
            value={form.phone} onChange={update('phone')}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input
            type="text" placeholder="Acme Corp (optional)"
            value={form.company} onChange={update('company')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Service</label>
          <select value={form.service} onChange={update('service')} className={inputClass}>
            <option value="">Select a service (optional)</option>
            {SERVICES.map((svc) => (
              <option key={svc.title} value={svc.title}>{svc.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget</label>
          <select value={form.budget} onChange={update('budget')} className={inputClass}>
            <option value="">Select a budget (optional)</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message <span className="text-red">*</span></label>
        <textarea
          required rows={6}
          placeholder="Tell us about your project — what you're building, your timeline, and any technical requirements."
          value={form.message} onChange={update('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-ink text-parchment text-sm font-semibold hover:bg-red transition-colors duration-200"
      >
        <MessageCircle size={14} /> Send via WhatsApp
      </button>

      <p className="text-ink-faint text-xs text-center">
        Opens WhatsApp with your message pre-filled. We respond within 24 hours.
      </p>
    </form>
  )
}
