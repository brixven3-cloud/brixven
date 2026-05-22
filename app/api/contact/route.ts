import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// The address Resend sends FROM — must be on a verified domain in your Resend dashboard.
// During testing you can use: 'onboarding@resend.dev'
// In production use: 'Brixven <hello@brixven.com>'
const FROM_ADDRESS = process.env.FROM_EMAIL ?? 'onboarding@resend.dev'  // update to: Brixven <info@brixven.com> after domain verify

// Where form submissions land — update this or set TO_EMAIL in .env.local
const TO_ADDRESS = process.env.TO_EMAIL ?? 'info@brixven.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body as {
      name: string
      email: string
      company?: string
      message: string
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 })
    }

    await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a2e">
          <h2 style="margin:0 0 24px;font-size:20px;color:#7A4FFF">New Contact Form Submission</h2>

          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:120px">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee">
                <a href="mailto:${email}" style="color:#7A4FFF">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600">Company</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee">${company || '—'}</td>
            </tr>
          </table>

          <h3 style="margin:24px 0 8px;font-size:15px">Message</h3>
          <p style="margin:0;line-height:1.7;background:#f7f7fb;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>

          <p style="margin:24px 0 0;font-size:12px;color:#999">
            Sent via brixven.com contact form · ${new Date().toUTCString()}
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you within 24 hours.",
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

