import './globals.css'

export const metadata = {
  title: 'Mandime',
  description: "Men's lifestyle — gear, tech, cars, watches, style.",
  metadataBase: new URL('https://mandime.com'),
  openGraph: {
    title: 'Mandime',
    description: "Men's lifestyle — gear, tech, cars, watches, style.",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24V8L10 20L20 8V24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path d="M20 24V8L30 20L40 8V24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            </svg>
            <span className="logo-text">Mandime</span>
          </a>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/posts">About</a>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <span>&copy; {new Date().getFullYear()} Mandime</span>
          <span>gear &middot; tech &middot; cars &middot; watches &middot; style</span>
        </footer>
      </body>
    </html>
  )
}
