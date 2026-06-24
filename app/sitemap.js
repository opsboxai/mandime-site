import { getAllPosts } from '@/lib/posts'
import { activeCategories } from '@/lib/categories'
import { SITE_URL } from '@/lib/site'

/* Auto-generated sitemap — Next rebuilds it on every deploy, so new posts and
   any newly-populated category show up for Google automatically. */
export default function sitemap() {
  const now = new Date()

  const staticPages = ['', '/about', '/contact', '/privacy', '/terms'].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: p === '' ? 'daily' : 'monthly',
    priority: p === '' ? 1.0 : 0.3,
  }))

  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/posts/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const categories = activeCategories().map((c) => ({
    url: `${SITE_URL}/tag/${c.slug}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.6,
  }))

  return [...staticPages, ...categories, ...posts]
}
