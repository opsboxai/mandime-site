import './globals.css'

export const metadata = {
  title: 'Mandime',
  description: "Men's lifestyle — gear, tech, cars, gaming, health, style.",
  metadataBase: new URL('https://mandime.com'),
  openGraph: {
    title: 'Mandime',
    description: "Men's lifestyle — gear, tech, cars, gaming, health, style.",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Mandime" className="brand-logo" />
          </a>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/posts">About</a>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
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
