import Link from 'next/link'
import { notFound } from 'next/navigation'
import { activeCategories, getCategory, postsInCategory } from '@/lib/categories'
import { SITE_NAME, absUrl } from '@/lib/site'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return activeCategories().map((c) => ({ tag: c.slug }))
}

export function generateMetadata({ params }) {
  const cat = getCategory(params.tag)
  if (!cat) return {}
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `/tag/${cat.slug}` },
    openGraph: {
      title: `${cat.title} — ${SITE_NAME}`,
      description: cat.description,
      url: `/tag/${cat.slug}`,
      type: 'website',
    },
  }
}

export default function TagPage({ params }) {
  const cat = getCategory(params.tag)
  if (!cat) notFound()
  const posts = postsInCategory(cat.slug)
  if (!posts.length) notFound()

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: cat.title,
    description: cat.description,
    url: absUrl(`/tag/${cat.slug}`),
    hasPart: posts.slice(0, 25).map((p) => ({
      '@type': 'Article',
      headline: p.frontmatter.title,
      url: absUrl(`/posts/${p.slug}`),
    })),
  }

  return (
    <div className="tag-page">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <header className="tag-header">
        <Link href="/" className="post-back">&larr; Back</Link>
        <h1>{cat.title}</h1>
        <p className="tag-desc">{cat.description}</p>
        <span className="tag-count">{posts.length} {posts.length === 1 ? 'story' : 'stories'}</span>
      </header>

      <div className="post-grid">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`} className="post-card">
            {p.frontmatter.cover ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.frontmatter.cover} alt={p.frontmatter.alt || ''} />
                <div className="post-card-overlay">
                  <h2>{p.frontmatter.title}</h2>
                </div>
              </>
            ) : (
              <div className="post-card-no-image">
                <div className="post-card-inner">
                  {p.frontmatter.source && <span className="kicker">{p.frontmatter.source}</span>}
                  <h2>{p.frontmatter.title}</h2>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      <nav className="tag-nav" aria-label="More topics">
        {activeCategories().filter((c) => c.slug !== cat.slug).map((c) => (
          <Link key={c.slug} href={`/tag/${c.slug}`}>{c.label}</Link>
        ))}
      </nav>
    </div>
  )
}
