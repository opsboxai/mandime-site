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
          <a href="/" className="wordmark">mandime</a>
          <nav className="site-nav">
            <a href="/">Latest</a>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Mandime</span>
          <span>gear · tech · cars · watches · style</span>
        </footer>
      </body>
    </html>
  )
}
