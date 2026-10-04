'use client'

import { Analytics } from '@vercel/analytics/next'
import { analyticsBlocked } from '@/lib/privacy'

// Vercel Web Analytics: no cookies, no cross-site tracking. Every page view is
// dropped before it is sent if the visitor opted out or sends GPC.
export default function SiteAnalytics() {
  return <Analytics beforeSend={(event) => (analyticsBlocked() ? null : event)} />
}
