import { getAllPosts } from '@/lib/posts'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, absUrl } from '@/lib/site'

export const dynamic = 'force-static'

function esc(s = '') {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export function GET() {
  const posts = getAllPosts().slice(0, 30)
  const items = posts.map((p) => {
    const url = absUrl(`/posts/${p.slug}`)
    const date = p.frontmatter.date ? new Date(p.frontmatter.date).toUTCString() : ''
    return `    <item>
      <title>${esc(p.frontmatter.title || '')}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${date ? `<pubDate>${date}</pubDate>` : ''}
      <description>${esc(p.frontmatter.excerpt || p.frontmatter.title || '')}</description>
    </item>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${esc(SITE_TAGLINE)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
