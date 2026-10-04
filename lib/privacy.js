// Shared privacy switches for client components.
//
// Analytics (Vercel Web Analytics) is cookieless, but visitors can still turn
// it off: either with the button on /privacy#choices (stored in localStorage
// under OPT_OUT_KEY) or by sending the Global Privacy Control signal, which we
// treat as an opt-out automatically. The key name is unchanged from the GA4
// era so earlier opt-outs keep working.

export const OPT_OUT_KEY = 'mandime_analytics_optout'

export function gpcEnabled() {
  try {
    return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true
  } catch {
    return false
  }
}

export function locallyOptedOut() {
  try {
    return localStorage.getItem(OPT_OUT_KEY) === '1'
  } catch {
    return false
  }
}

export function analyticsBlocked() {
  return gpcEnabled() || locallyOptedOut()
}
