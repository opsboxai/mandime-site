// Canonical site constants. www is the canonical host (the apex 301/307s to it),
// so every absolute URL — OG images, canonicals, sitemap, JSON-LD — uses www.

export const SITE_URL = 'https://www.mandime.com'
export const SITE_NAME = 'Mandime'
export const SITE_TAGLINE = "Men's lifestyle — gear, tech, cars, gaming, health, style."

/** Make a site-relative path absolute (for sitemap / JSON-LD / OG). */
export function absUrl(path = '/') {
  if (!path) return SITE_URL
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
