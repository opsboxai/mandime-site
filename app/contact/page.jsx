'use client'

import { useEffect, useRef, useState } from 'react'

const CONTACT_EMAIL = 'info@mandime.com'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState(null)   // null | 'sent' | 'error' | 'tooFast'
  const [sending, setSending] = useState(false)
  const loadedAt = useRef(Date.now())
  const successRef = useRef(null)

  // Move keyboard / screen-reader focus to the confirmation once it appears.
  useEffect(() => {
    if (status === 'sent') successRef.current?.focus()
  }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    // Spam protection without a puzzle: bots fill the hidden field, and
    // humans don't finish a message in under three seconds.
    if (honeypot) return
    if (Date.now() - loadedAt.current < 3000) {
      setStatus('tooFast')
      return
    }

    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Mandime Contact: ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })
      const data = await res.json()
      if (data.success === true || data.success === 'true') {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p className="contact-subtitle">
        Have a question, collaboration idea, or interested in advertising with us? Drop us a line.
        Creators: if you'd like your work credited differently or removed, tell us here and we'll
        take care of it.
      </p>

      {status === 'sent' ? (
        <div className="contact-success" role="status">
          <h2 ref={successRef} tabIndex={-1}>Message sent.</h2>
          <p>We'll get back to you soon.</p>
          <button onClick={() => { setStatus(null); loadedAt.current = Date.now() }}>
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" aria-describedby="contact-privacy-note">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name" name="name" type="text" required autoComplete="name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" required autoComplete="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          {/* Honeypot — hidden from people and assistive tech; bots fill it */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off"
              value={honeypot} onChange={e => setHoneypot(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" required rows={6}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Errors are announced by screen readers as soon as they appear */}
          <div role="alert">
            {status === 'tooFast' && (
              <p className="contact-error">That was quick! Please take a moment, then send again.</p>
            )}
            {status === 'error' && (
              <p className="contact-error">
                Something went wrong. Try again or email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            )}
          </div>

          <button type="submit" disabled={sending} className="contact-submit">
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          <p id="contact-privacy-note" className="contact-note">
            Your name, email and message are delivered to our inbox by our form provider,
            FormSubmit, and used only to reply to you. See our <a href="/privacy">Privacy Policy</a>.
            You can also email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </form>
      )}
    </div>
  )
}
