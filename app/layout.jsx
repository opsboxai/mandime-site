import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from '@/lib/site'
import { activeCategories } from '@/lib/categories'
import SiteAnalytics from '@/app/components/SiteAnalytics'

// Fonts are downloaded at build time and served from mandime.com. The old
// stylesheet @import of fonts.googleapis.com sent every visitor's IP address
// to Google on every page view.
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-bebas' })

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
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <header className="site-header">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Mandime home" className="brand-logo" />
          </a>
          <nav className="site-nav" aria-label="Main">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main id="main" className="site-main" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          {topics.length > 0 && (
            <nav className="footer-topics" aria-label="Browse topics">
              {topics.map((c) => (
                <a key={c.slug} href={`/tag/${c.slug}`}>{c.label}</a>
              ))}
            </nav>
          )}
          <span>&copy; {new Date().getFullYear()} Mandime</span>
          <nav className="footer-links" aria-label="Legal">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/privacy#choices">Your Privacy Choices</a>
          </nav>
        </footer>
        <SiteAnalytics />
      </body>
    </html>
  )
}
