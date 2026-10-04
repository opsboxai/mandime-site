'use client'

import { useEffect, useState } from 'react'
import { OPT_OUT_KEY, gpcEnabled, locallyOptedOut } from '@/lib/privacy'

// "Your Privacy Choices" control on /privacy#choices. Turns Vercel Web
// Analytics off (or back on) for this browser. A Global Privacy Control signal
// always wins and can't be overridden here.
export default function OptOutButton() {
  const [ready, setReady] = useState(false)
  const [optedOut, setOptedOut] = useState(false)
  const [gpc, setGpc] = useState(false)

  useEffect(() => {
    setGpc(gpcEnabled())
    setOptedOut(locallyOptedOut())
    setReady(true)
  }, [])

  function toggle() {
    try {
      if (optedOut) localStorage.removeItem(OPT_OUT_KEY)
      else localStorage.setItem(OPT_OUT_KEY, '1')
      setOptedOut(!optedOut)
    } catch {
      // Storage blocked (private mode, strict settings) — nothing is stored
      // either way, and analytics stays cookieless.
    }
  }

  if (!ready) return null

  const off = gpc || optedOut
  return (
    <div className="privacy-choices" role="region" aria-labelledby="privacy-choices-state">
      <p id="privacy-choices-state" className="privacy-choices-state" aria-live="polite">
        {gpc
          ? 'Analytics is off: your browser sends a Global Privacy Control signal.'
          : off
            ? 'Analytics is off for this browser.'
            : 'Analytics is on for this browser.'}
      </p>
      <p className="privacy-choices-help">
        Our analytics count anonymous page views without cookies. Turning it off stops this browser
        from being counted at all. The choice is saved in this browser only, so you will need to set
        it again if you clear your browser data or switch devices.
      </p>
      {!gpc && (
        <button type="button" onClick={toggle} className="privacy-choices-button" aria-pressed={optedOut}>
          {optedOut ? 'Turn analytics back on' : 'Turn off analytics'}
        </button>
      )}
    </div>
  )
}
