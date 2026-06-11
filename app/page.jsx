import { getAllPosts } from '@/lib/posts'
import HomeClient from './components/HomeClient'

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

  const serialized = posts.map((p) => ({
    slug: p.slug,
    frontmatter: p.frontmatter,
  }))

  return <HomeClient posts={serialized} />
}
