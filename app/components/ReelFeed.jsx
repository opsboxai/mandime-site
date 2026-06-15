'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

const RENDER_WINDOW = 2

function extractYouTubeId(url) {
  if (!url) return null
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/)
  return m ? m[1] : null
}

function ReelSlide({ post, isActive }) {
  const iframeRef = useRef(null)
  const fm = post.frontmatter
  const isVideo = fm.media_type === 'video'
  const ytId = isVideo ? extractYouTubeId(fm.source_url) : null

  useEffect(() => {
    if (!ytId || !iframeRef.current) return
    const iframe = iframeRef.current
    try {
      if (isActive) {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        )
      } else {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
          '*'
        )
      }
    } catch (_) {}
  }, [isActive, ytId])

  return (
    <div className="reel-slide">
      {ytId ? (
        <div className="reel-video-wrap">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=${isActive ? 1 : 0}&mute=1&loop=1&playlist=${ytId}&playsinline=1&controls=1&modestbranding=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={fm.title}
            loading="lazy"
          />
        </div>
      ) : fm.cover ? (
        <div className="reel-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fm.cover} alt={fm.alt || ''} loading="lazy" />
        </div>
      ) : (
        <div className="reel-placeholder">
          <h2>{fm.title}</h2>
        </div>
      )}

      {!fm.has_overlay && (
        <div className="reel-info">
          <div className="reel-info-inner">
            {fm.source && <span className="reel-source">{fm.source}</span>}
            <h2 className="reel-title">{fm.title}</h2>
            {fm.excerpt && <p className="reel-excerpt">{fm.excerpt}</p>}
            <Link href={`/posts/${post.slug}`} className="reel-read-more">
              Read more &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function ReelPlaceholder() {
  return <div className="reel-slide" />
}

export default function ReelFeed({ posts }) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const idx = Math.round(el.scrollTop / el.clientHeight)
    setActiveIndex(idx)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <div className="reel-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Mandime" className="reel-logo" />
        <span className="reel-counter">{activeIndex + 1} / {posts.length}</span>
      </div>
      <div className="reel-container" ref={containerRef}>
        {posts.map((p, i) => {
          const inWindow = Math.abs(i - activeIndex) <= RENDER_WINDOW
          return inWindow ? (
            <ReelSlide key={p.slug} post={p} isActive={i === activeIndex} />
          ) : (
            <ReelPlaceholder key={p.slug} />
          )
        })}
      </div>
    </>
  )
}
