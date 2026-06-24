/* Curated topic taxonomy. The curator tags each post with ~13 generic social
   hashtags; turning every one into a page would create thin, duplicative tag
   pages (mens / mensstyle / menslifestyle all overlap), which hurts SEO.

   Instead we map those hashtags onto a small set of real categories. Each post
   lands in the categories whose keywords its hashtags match, giving a handful
   of substantial, interlinked hub pages — the version search engines reward. */

import { getAllPosts } from './posts'

export const CATEGORIES = [
  {
    slug: 'cars', label: 'Cars',
    title: 'Cars & Automotive',
    description: 'Supercars, builds, EVs, and everything with an engine — for men who love cars.',
    keywords: ['car', 'cars', 'carsdaily', 'automotive', 'supercar', 'supercars', 'jdm', 'motorsport', 'racing', 'drift', 'truck', 'offroad', 'ev', 'electriccar'],
  },
  {
    slug: 'tech', label: 'Tech',
    title: 'Tech & Gadgets',
    description: 'Gadgets, AI, and the gear that runs your day — men’s tech, reviewed and ranked.',
    keywords: ['tech', 'techdaily', 'gadget', 'gadgets', 'ai', 'software', 'apple', 'android', 'pc', 'smartphone', 'gaming'],
  },
  {
    slug: 'gear', label: 'Gear',
    title: 'Gear & EDC',
    description: 'Everyday carry, tools, knives, and the kit worth keeping in your pocket.',
    keywords: ['gear', 'edc', 'edctech', 'edcgear', 'everydaycarry', 'tools', 'knife', 'knives', 'flashlight'],
  },
  {
    slug: 'style', label: 'Style',
    title: 'Men’s Style & Grooming',
    description: 'Menswear, sneakers, grooming, and how to actually pull it off.',
    keywords: ['style', 'mensstyle', 'mensfashion', 'menswear', 'fashion', 'grooming', 'sneakers', 'streetwear', 'fragrance'],
  },
  {
    slug: 'watches', label: 'Watches',
    title: 'Watches & Horology',
    description: 'Watch releases, horology deep-dives, and wrist game worth talking about.',
    keywords: ['watch', 'watches', 'horology', 'watchnerd', 'rolex', 'timepiece'],
  },
  {
    slug: 'health', label: 'Health',
    title: 'Health & Fitness',
    description: 'Training, nutrition, longevity, and feeling like a machine — minus the bro-science.',
    keywords: ['health', 'fitness', 'wellness', 'gym', 'nutrition', 'workout', 'muscle', 'longevity', 'peptides'],
  },
  {
    slug: 'gaming', label: 'Gaming',
    title: 'Gaming',
    description: 'Games, hardware, and the culture around the controller.',
    keywords: ['gaming', 'gamer', 'games', 'esports', 'playstation', 'xbox', 'nintendo', 'steam'],
  },
  {
    slug: 'outdoors', label: 'Outdoors',
    title: 'Outdoors & Adventure',
    description: 'Fishing, hunting, camping, overlanding — getting out and getting after it.',
    keywords: ['outdoors', 'fishing', 'hunting', 'camping', 'hiking', 'adventure', 'overlanding', 'survival'],
  },
  {
    slug: 'food', label: 'Food & Drink',
    title: 'Food & Drink',
    description: 'BBQ, whiskey, coffee, and food worth firing up the grill for.',
    keywords: ['food', 'bbq', 'cooking', 'recipe', 'drinks', 'whiskey', 'coffee', 'grill', 'beer'],
  },
]

const BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]))

function tagsOf(post) {
  const raw = (post?.frontmatter?.hashtags || '')
  return raw.split(',').map((t) => t.trim().toLowerCase().replace(/^#/, '')).filter(Boolean)
}

/** Categories a single post belongs to (deduped, in taxonomy order). */
export function postCategories(post) {
  const tags = new Set(tagsOf(post))
  return CATEGORIES.filter((c) => c.keywords.some((k) => tags.has(k)))
    .map(({ slug, label }) => ({ slug, label }))
}

export function getCategory(slug) {
  return BY_SLUG[slug] || null
}

/** All posts in a category, newest first (posts are already date-sorted). */
export function postsInCategory(slug) {
  const cat = BY_SLUG[slug]
  if (!cat) return []
  const kw = new Set(cat.keywords)
  return getAllPosts().filter((p) => tagsOf(p).some((t) => kw.has(t)))
}

/** Categories that actually have at least one post — used for nav + sitemap. */
export function activeCategories() {
  return CATEGORIES.filter((c) => postsInCategory(c.slug).length > 0)
}

/** Up to `n` related posts that share a category with `post` (excludes self). */
export function relatedPosts(post, n = 4) {
  const cats = new Set(postCategories(post).map((c) => c.slug))
  if (!cats.size) return []
  const seen = new Set([post.slug])
  const out = []
  for (const p of getAllPosts()) {
    if (seen.has(p.slug)) continue
    if (postCategories(p).some((c) => cats.has(c.slug))) {
      out.push(p)
      seen.add(p.slug)
      if (out.length >= n) break
    }
  }
  return out
}
