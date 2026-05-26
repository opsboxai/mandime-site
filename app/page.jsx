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
  )
}
