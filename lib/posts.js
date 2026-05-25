import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

/* Reads content/posts/*.mdx. Each file's frontmatter is the post metadata;
   the body (after the --- fence) is the MDX content. The Curator app writes
   these files via the GitHub API; Vercel rebuilds on each commit. */

export function getAllSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPost(slug) {
  const full = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(full)) return null
  const raw = fs.readFileSync(full, 'utf8')
  const { data, content } = matter(raw)
  return { slug, frontmatter: data, content }
}

export function getAllPosts() {
  return getAllSlugs()
    .map(getPost)
    .filter(Boolean)
    .sort((a, b) => {
      const da = new Date(a.frontmatter.date || 0).getTime()
      const db = new Date(b.frontmatter.date || 0).getTime()
      return db - da
    })
}
