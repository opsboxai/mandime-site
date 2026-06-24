import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPost } from '@/lib/posts'
import { postCategories, relatedPosts } from '@/lib/categories'
import { SITE_URL, SITE_NAME, absUrl } from '@/lib/site'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}
  const { frontmatter } = post
  const url = `/posts/${params.slug}`
  const description = frontmatter.excerpt || frontmatter.title
  const images = frontmatter.cover ? [frontmatter.cover] : []
  const tags = (frontmatter.hashtags || '').split(',').map((t) => t.trim()).filter(Boolean)
  return {
    title: frontmatter.title,
    description,
    alternates: { canonical: url },
    authors: [{ name: SITE_NAME }],
    keywords: tags,
    openGraph: {
      title: frontmatter.title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: frontmatter.date || undefined,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description,
      images,
    },
  }
}

function extractYouTubeId(url) {
  if (!url) return null
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/)
  return m ? m[1] : null
}

export default function PostPage({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const { frontmatter, content } = post

  const isVideo = frontmatter.media_type === 'video'
  const ytId = isVideo ? extractYouTubeId(frontmatter.source_url) : null
  const cats = postCategories(post)
  const related = relatedPosts(post, 4)
  const pageUrl = absUrl(`/posts/${params.slug}`)
  const imageUrl = frontmatter.cover ? absUrl(frontmatter.cover) : undefined

  // --- structured data ---
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt || frontmatter.title,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished: frontmatter.date || undefined,
    dateModified: frontmatter.date || undefined,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    ...(cats.length ? { articleSection: cats.map((c) => c.label) } : {}),
  }

  const videoJsonLd = ytId
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: frontmatter.title,
        description: frontmatter.excerpt || frontmatter.title,
        ...(imageUrl ? { thumbnailUrl: [imageUrl] } : {}),
        uploadDate: frontmatter.date || undefined,
        embedUrl: `https://www.youtube.com/embed/${ytId}`,
        contentUrl: frontmatter.source_url,
      }
    : null

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...(cats[0]
        ? [{ '@type': 'ListItem', position: 2, name: cats[0].label, item: absUrl(`/tag/${cats[0].slug}`) }]
        : []),
      { '@type': 'ListItem', position: cats[0] ? 3 : 2, name: frontmatter.title, item: pageUrl },
    ],
  }

  return (
    <article className="post-page">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {videoJsonLd && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
      )}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Link href="/" className="post-back">&larr; Back</Link>

      {frontmatter.source && <span className="kicker">{frontmatter.source}</span>}
      <h1>{frontmatter.title}</h1>

      <div className="post-meta">
        {frontmatter.date && (
          <time className="post-date" dateTime={frontmatter.date}>
            {new Date(
              frontmatter.date.includes('T')
                ? frontmatter.date          // full datetime — use as-is
                : frontmatter.date + 'T12:00:00'  // date-only — add noon
            ).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </time>
        )}
      </div>

      {ytId ? (
        <div className="video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${ytId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={frontmatter.title}
          />
        </div>
      ) : frontmatter.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="post-cover" src={frontmatter.cover} alt={frontmatter.alt || ''} />
      ) : null}

      <div className="post-body">
        <MDXRemote source={content} />
      </div>

      {cats.length > 0 && (
        <nav className="post-tags" aria-label="Topics">
          {cats.map((c) => (
            <Link key={c.slug} href={`/tag/${c.slug}`} className="post-tag">{c.label}</Link>
          ))}
        </nav>
      )}

      {frontmatter.source_url && (
        <p className="source-attribution">
          Source: <a href={frontmatter.source_url} target="_blank" rel="noreferrer">
            {isVideo ? 'Watch on YouTube' : 'View original'} &rarr;
          </a>
        </p>
      )}

      {related.length > 0 && (
        <aside className="related-posts">
          <h2>Related</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/posts/${r.slug}`}>{r.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  )
}
