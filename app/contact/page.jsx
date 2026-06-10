'use client'

import { useRef, useState } from 'react'

function makeChallenge() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { question: `${a} + ${b}`, answer: a + b }
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [honeypot, setHoneypot] = useState('')
  const [captcha] = useState(() => makeChallenge())
  const [captchaInput, setCaptchaInput] = useState('')
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)
  const loadedAt = useRef(Date.now())

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    // Honeypot — bots fill hidden fields
    if (honeypot) return

    // Timing — reject submissions faster than 3 seconds
    if (Date.now() - loadedAt.current < 3000) {
      setStatus('error')
      return
    }

    // Verify captcha
    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setStatus('captcha')
      return
    }

    setSending(true)
    setStatus(null)
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@mandime.com', {
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
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setCaptchaInput('')
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
      </p>

      {status === 'sent' ? (
        <div className="contact-success">
          <h2>Message sent.</h2>
          <p>We'll get back to you soon.</p>
          <button onClick={() => { setStatus(null); loadedAt.current = Date.now(); window.location.reload() }}>
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name" type="text" required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email" type="email" required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>
          {/* Honeypot — hidden from real users, bots fill it */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off"
              value={honeypot} onChange={e => setHoneypot(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" required rows={6}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="What's on your mind?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="captcha">What is {captcha.question}?</label>
            <input
              id="captcha" type="text" required
              inputMode="numeric"
              value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
              placeholder="Your answer"
              autoComplete="off"
              style={{ maxWidth: 120 }}
            />
          </div>
          {status === 'captcha' && (
            <p className="contact-error">Incorrect answer. Please try again.</p>
          )}
          {status === 'error' && (
            <p className="contact-error">Something went wrong. Try again or email us directly at info@mandime.com</p>
          )}
          <button type="submit" disabled={sending} className="contact-submit">
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}
