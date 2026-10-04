/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

// Content-Security-Policy. Inline scripts stay allowed because Next.js and the
// JSON-LD blocks inject them; everything else is pinned to the hosts the site
// actually uses:
//   - YouTube privacy-enhanced embeds (post pages, mobile reel feed)
//   - FormSubmit (contact form delivery)
//   - Vercel Web Analytics (served from this origin under /_vercel/insights;
//     va.vercel-scripts.com only in local dev)
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
  "connect-src 'self' https://formsubmit.co" + (isDev ? ' https://va.vercel-scripts.com' : ''),
  "form-action 'self' https://formsubmit.co",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
]

const nextConfig = {
  // Cover images are committed into public/posts by the Curator, so no remote
  // image domains are needed. If you later reference remote images, add them here.
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  // The original static policy pages (May 2026) were replaced by /terms and
  // /privacy; send old links to the current versions.
  async redirects() {
    return [
      { source: '/terms.html', destination: '/terms', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
    ]
  },
}

export default nextConfig
