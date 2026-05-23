'use client'

import { useState } from 'react'
import { CheckCircle2, Send, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'
interface FormState { name: string; email: string; company: string; message: string }
const INITIAL: FormState = { name: '', email: '', company: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const [serverMsg, setServerMsg] = useState('')

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setServerMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setServerMsg(data.message)
        setForm(INITIAL)
      } else {
        setStatus('error')
        setServerMsg(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerMsg('Network error. Please check your connection.')
    }
  }

  const labelClass = 'block text-[#888888] text-xs font-semibold mb-1.5 tracking-wide uppercase'
  const inputClass =
    'w-full bg-[#0a0a0a] border border-[#222222] px-4 py-3 text-white placeholder-[#444444] text-sm focus:outline-none focus:border-white transition-all duration-200'

  if (status === 'success') {
    return (
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 sm:p-10 flex flex-col items-center text-center gap-5 min-h-[280px] sm:min-h-[380px] justify-center">
        <div className="w-16 h-16 border border-[#222222] flex items-center justify-center">
          <CheckCircle2 size={28} className="text-white" />
        </div>
        <h3 className="text-white text-xl font-bold">Message Sent!</h3>
        <p className="text-[#888888] text-sm max-w-xs leading-relaxed">{serverMsg}</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#888888] text-sm hover:text-white transition-colors mt-1"
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] border border-[#1a1a1a] p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name <span className="text-white">*</span></label>
          <input
            type="text" required placeholder="Jane Smith"
            value={form.name} onChange={update('name')}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-white">*</span></label>
          <input
            type="email" required placeholder="jane@company.com"
            value={form.email} onChange={update('email')}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Company</label>
        <input
          type="text" placeholder="Acme Corp (optional)"
          value={form.company} onChange={update('company')}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Message <span className="text-white">*</span></label>
        <textarea
          required rows={6}
          placeholder="Tell us about your project — what you're building, your timeline, and any technical requirements."
          value={form.message} onChange={update('message')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">{serverMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black text-sm font-semibold hover:bg-[#e0e0e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={14} /> Send Message</>
        )}
      </button>

      <p className="text-[#444444] text-xs text-center">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
