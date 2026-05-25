import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function Home() {
  const posts = getAllPosts()

  if (!posts.length) {
    return (
      <div className="empty">
        <h1>Nothing here yet.</h1>
        <p>Posts published from Mandime Curator will show up here.</p>
      </div>
    )
  }

  return (
    <div className="post-grid">
      {posts.map((p) => (
        <Link key={p.slug} href={`/posts/${p.slug}`} className="post-card">
          {p.frontmatter.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="post-card-cover" src={p.frontmatter.cover} alt={p.frontmatter.alt || ''} />
          )}
          <div className="post-card-body">
            {p.frontmatter.source && <span className="kicker">{p.frontmatter.source}</span>}
            <h2>{p.frontmatter.title}</h2>
            {p.frontmatter.date && (
              <time className="post-date">
                {new Date(p.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric',
                })}
              </time>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
