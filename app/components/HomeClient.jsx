'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ReelFeed from './ReelFeed'

export default function HomeClient({ posts }) {
  const [mode, setMode] = useState('grid')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    if (mq.matches) setMode('reel')
    const handler = (e) => {
      setIsMobile(e.matches)
      if (!e.matches) setMode('grid')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (mode === 'reel' && isMobile) {
    return (
      <>
        <button
          className="view-toggle"
          onClick={() => setMode('grid')}
          aria-label="Switch to grid view"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="12" y="1" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <ReelFeed posts={posts} />
      </>
    )
  }

  return (
    <>
      {isMobile && (
        <button
          className="view-toggle view-toggle-grid"
          onClick={() => setMode('reel')}
          aria-label="Switch to reel view"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="1" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 7l5 3-5 3V7z" fill="currentColor" />
          </svg>
        </button>
      )}
      <div className="post-grid">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`} className="post-card">
            {p.frontmatter.cover ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${p.frontmatter.cover}?v=2`} alt={p.frontmatter.alt || ''} />
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
    </>
  )
}
