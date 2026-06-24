import Script from 'next/script'
import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from '@/lib/site'
import { activeCategories } from '@/lib/categories'

export const metadata = {
  title: { default: `${SITE_NAME} — Men's Lifestyle`, template: `%s — ${SITE_NAME}` },
  description: SITE_TAGLINE,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} — Men's Lifestyle`,
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Men's Lifestyle`,
    description: SITE_TAGLINE,
  },
}

// Site-wide structured data: tells search engines who publishes this and
// enables the sitelinks search box.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
}
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
}

export default function RootLayout({ children }) {
  const topics = activeCategories()
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T7587FSGNS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T7587FSGNS');
          `}
        </Script>
      </head>
      <body>
        <header className="site-header">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Mandime" className="brand-logo" />
          </a>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          {topics.length > 0 && (
            <nav className="footer-topics" aria-label="Topics">
              {topics.map((c) => (
                <a key={c.slug} href={`/tag/${c.slug}`}>{c.label}</a>
              ))}
            </nav>
          )}
          <span>&copy; {new Date().getFullYear()} Mandime</span>
          <span className="footer-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </span>
        </footer>
      </body>
    </html>
  )
}
