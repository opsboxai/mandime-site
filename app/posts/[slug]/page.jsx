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

export default function PostPage({ params }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const { frontmatter, content } = post

  return (
    <article className="post">
      <Link href="/" className="back-link">← all posts</Link>
      {frontmatter.source && <span className="kicker">{frontmatter.source}</span>}
      <h1>{frontmatter.title}</h1>
      {frontmatter.date && (
        <time className="post-date">
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </time>
      )}
      {frontmatter.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="post-cover" src={frontmatter.cover} alt={frontmatter.alt || ''} />
      )}
      <div className="post-body">
        <MDXRemote source={content} />
      </div>
      {frontmatter.source_url && (
        <p className="source-attribution">
          Originally via <a href={frontmatter.source_url} target="_blank" rel="noreferrer">the source ↗</a>
        </p>
      )}
    </article>
  )
}
