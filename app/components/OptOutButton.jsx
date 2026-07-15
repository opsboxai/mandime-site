'use client'
import { useEffect, useState } from 'react'

export default function OptOutButton() {
  const [optedOut, setOptedOut] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try { setOptedOut(localStorage.getItem('mandime_analytics_optout') === '1') } catch (e) {}
    setReady(true)
  }, [])

  function toggle() {
    try {
      if (optedOut) {
        localStorage.removeItem('mandime_analytics_optout')
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', { analytics_storage: 'granted' })
        }
        setOptedOut(false)
      } else {
        localStorage.setItem('mandime_analytics_optout', '1')
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', { analytics_storage: 'denied' })
        }
        setOptedOut(true)
      }
    } catch (e) {}
  }

  if (!ready) return null

  return (
    <div style={{ margin: '24px 0', padding: '20px', background: '#f5f5f5', borderRadius: 8, border: '1px solid #ddd' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600, fontSize: 15 }}>
        {optedOut ? '✓ Opted out on this device' : 'Analytics active on this device'}
      </p>
      <p style={{ margin: '0 0 16px', fontSize: 14, color: '#555', lineHeight: 1.6 }}>
        {optedOut
          ? 'Google Analytics will not collect data from your browser on this site. This preference is saved in your browser and applies to this device only.'
          : 'Google Analytics collects anonymized usage data (page views, session info) on this site. You can opt out at any time using the button below. This does not affect your ability to use the site.'}
      </p>
      <button
        onClick={toggle}
        style={{
          padding: '10px 20px',
          background: optedOut ? '#333' : '#c0392b',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        {optedOut ? 'Re-enable Analytics' : 'Opt Out of Analytics'}
      </button>
    </div>
  )
}
