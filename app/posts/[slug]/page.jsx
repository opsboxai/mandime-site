import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPost } from '@/lib/posts'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug)
  if (!post) return {}
  const { frontmatter } = post
  return {
    title: `${frontmatter.title} — Mandime`,
    description: frontmatter.excerpt || frontmatter.title,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt || frontmatter.title,
      images: frontmatter.cover ? [frontmatter.cover] : [],
      type: 'article',
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

  return (
    <article className="post-page">
      <Link href="/" className="post-back">&larr; Back</Link>

      {frontmatter.source && <span className="kicker">{frontmatter.source}</span>}
      <h1>{frontmatter.title}</h1>

      <div className="post-meta">
        {frontmatter.date && (
          <time className="post-date">
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

      {frontmatter.source_url && (
        <p className="source-attribution">
          Source: <a href={frontmatter.source_url} target="_blank" rel="noreferrer">
            {isVideo ? 'Watch on YouTube' : 'View original'} &rarr;
          </a>
        </p>
      )}
    </article>
  )
}
