import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data/blogs';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles, tutorials, and insights from the Web & Coding Club NIT Patna team.',
};

const CATEGORIES = ['Web Dev', 'DSA', 'Open Source', 'AI/ML', 'DevOps', 'Tutorial', 'Career', 'Projects'];

export default function BlogPage() {
  const heroPost = BLOG_POSTS[0];
  const featurePost = BLOG_POSTS[1] ?? BLOG_POSTS[0];
  const secondaryPost = BLOG_POSTS[2] ?? BLOG_POSTS[0];
  const listPosts = BLOG_POSTS.slice(3, 6);
  const videoPost = BLOG_POSTS[6] ?? BLOG_POSTS[0];

  const heroInitials = heroPost.author.name.split(' ').map((n) => n[0]).join('');

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-narrow">

          {/* ── Header ── */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-mono text-xs mb-2 tracking-[0.2em]">// BLOG</p>
              <h1
                className="gradient-text-amber"
                style={{
                  fontFamily: 'Bebas Neue, var(--font-display), sans-serif',
                  fontSize: 'clamp(52px, 8vw, 80px)',
                  lineHeight: 1,
                  letterSpacing: '2px',
                }}
              >
                BLOG
              </h1>
            </div>
            <Link
              href="/blog/archive"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
            >
              Read All Posts →
            </Link>
          </div>

          {/* ── Editorial Grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 0.72fr',
              gap: '14px',
            }}
            className="blog-editorial-grid"
          >

            {/* ── HERO CARD (left, full height) ── */}
            <Link
              href={`/blog/${heroPost.slug}`}
              className="group block"
              style={{
                gridColumn: 1,
                gridRow: '1 / 3',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '520px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                background: '#2a1a0a',
              }}
            >
              <Image
                src={heroPost.coverImage}
                alt={heroPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ zIndex: 0 }}
              />
              {/* overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,6,2,0.82) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)', zIndex: 1 }} />

              {/* fire badge */}
              {heroPost.featured && (
                <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2, width: 36, height: 36, background: 'rgba(255,255,255,0.92)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  🔥
                </div>
              )}

              <div style={{ position: 'relative', zIndex: 2, padding: '20px' }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.68)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>
                  {heroPost.tags[0]} · {new Date(heroPost.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </p>
                <h2
                  className="group-hover:text-[var(--accent-amber)] transition-colors"
                  style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.05, color: '#fff', letterSpacing: '1px', margin: 0 }}
                >
                  {heroPost.title.toUpperCase()}
                </h2>
              </div>
            </Link>

            {/* ── CENTER COLUMN ── */}
            <div style={{ gridColumn: 2, gridRow: '1 / 3', display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Feature card — lime green */}
              <Link
                href={`/blog/${featurePost.slug}`}
                className="group block"
                style={{ background: '#d4e9a0', borderRadius: '20px', padding: '22px 22px 18px', position: 'relative', flex: 1, textDecoration: 'none', transition: 'transform 0.25s' }}
              >
                <div style={{ position: 'absolute', top: 18, right: 18, width: 32, height: 32, background: 'rgba(0,0,0,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#1a1a1a' }}>
                  ↗
                </div>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#4a6a1a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ display: 'inline-block', width: 5, height: 5, background: '#4a6a1a', borderRadius: '50%' }} />
                  {featurePost.tags[0]}
                </p>
                <h2 style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.05, color: '#1a1a1a', letterSpacing: '1.5px', margin: '0 0 10px' }}>
                  {featurePost.title.toUpperCase()}
                </h2>
                <p style={{ fontSize: 12, color: '#3a4a1a', lineHeight: 1.7, margin: 0 }}>
                  {featurePost.excerpt.slice(0, 160)}
                  {featurePost.excerpt.length > 160 && (
                    <span style={{ color: '#2a5a0a', fontWeight: 600, textDecoration: 'underline' }}> More</span>
                  )}
                </p>
              </Link>

              {/* List items */}
              <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)', borderRadius: '20px', overflow: 'hidden' }}>
                {listPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between px-[18px] py-[14px] transition-colors hover:bg-white/5"
                    style={{ borderBottom: i < listPosts.length - 1 ? '1px solid var(--border-subtle)' : 'none', textDecoration: 'none' }}
                  >
                    <span style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 14, letterSpacing: '0.8px', color: 'var(--text-primary)', flex: 1, paddingRight: 12 }}>
                      {post.title.toUpperCase()}
                    </span>
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'var(--text-muted)', flexShrink: 0 }}>
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div style={{ gridColumn: 3, gridRow: '1 / 3', display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Secondary card — soft blue */}
              <Link
                href={`/blog/${secondaryPost.slug}`}
                className="group block"
                style={{ background: '#c8d8e8', borderRadius: '20px', padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'transform 0.25s' }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, color: '#1a4a6a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-block', width: 5, height: 5, background: '#1a4a6a', borderRadius: '50%' }} />
                  {secondaryPost.tags[0]}
                  {secondaryPost.featured && (
                    <span style={{ background: 'rgba(0,0,0,0.10)', borderRadius: 999, padding: '2px 8px', fontSize: 10, fontWeight: 600, color: '#1a4a6a', marginLeft: 4 }}>
                      Hot · {new Date(secondaryPost.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    </span>
                  )}
                </p>
                <h2
                  className="group-hover:opacity-75 transition-opacity"
                  style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.05, color: '#1a1a1a', letterSpacing: '1px', margin: '6px 0 0', flex: 1 }}
                >
                  {secondaryPost.title.toUpperCase()}
                </h2>
                <div style={{ borderRadius: 14, overflow: 'hidden', marginTop: 12, minHeight: 110, background: 'linear-gradient(140deg, #98b8cc, #7090a8)', position: 'relative' }}>
                  <Image src={secondaryPost.coverImage} alt={secondaryPost.title} width={300} height={130} className="object-cover w-full" style={{ height: 130 }} />
                </div>
              </Link>

              {/* Categories card — lavender */}
              <div style={{ background: '#d4b8e8', borderRadius: '20px', padding: '18px' }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {CATEGORIES.map((cat, i) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${encodeURIComponent(cat)}`}
                      className="transition-colors"
                      style={{
                        background: i === 1 ? '#e0c8f4' : 'rgba(255,255,255,0.52)',
                        borderRadius: 999,
                        padding: '6px 14px',
                        fontSize: 11,
                        fontWeight: i === 1 ? 600 : 500,
                        color: i === 1 ? '#2a0a4a' : '#3a1a5a',
                        textDecoration: 'none',
                      }}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/blog/categories"
                    style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 18, letterSpacing: '1px', color: '#1a1a1a', textDecoration: 'none' }}
                  >
                    View All Categories
                  </Link>
                  <Link
                    href="/blog/categories"
                    style={{ width: 36, height: 36, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 16, textDecoration: 'none' }}
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>

            {/* ── BOTTOM ROW ── */}
            <div
              style={{ gridColumn: '1 / 4', display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: '14px' }}
            >
              {/* Video / article card */}
              <Link
                href={`/blog/${videoPost.slug}`}
                className="group block"
                style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', minHeight: 185, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 18, textDecoration: 'none', background: '#2a1a0a' }}
              >
                <Image src={videoPost.coverImage} alt={videoPost.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" style={{ zIndex: 0 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,6,2,0.78) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: 14, left: 16, zIndex: 2 }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.70)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                    {videoPost.tags[0]}
                  </p>
                </div>
                {/* play icon */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', zIndex: 2, width: 46, height: 46, background: 'rgba(255,255,255,0.88)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#1a1a1a', transition: 'transform 0.15s' }}>
                  ▶
                </div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.70)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 5 }}>
                    {videoPost.readTime} Min · {new Date(videoPost.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                  <h3 style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 'clamp(16px, 2vw, 21px)', letterSpacing: '1px', color: '#fff', lineHeight: 1.1, margin: 0 }}>
                    {videoPost.title.toUpperCase()}
                  </h3>
                </div>
              </Link>

              {/* Recent picks — amber/warm card matching your palette */}
              <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 22, letterSpacing: '1px', color: 'var(--text-primary)', margin: '0 0 4px' }}>
                  RECENT PICKS
                </h3>
                {BLOG_POSTS.slice(0, 3).map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-3 p-2.5 rounded-xl transition-colors hover:bg-white/5"
                    style={{ textDecoration: 'none' }}
                  >
                    <span style={{ fontFamily: 'Bebas Neue, var(--font-display), sans-serif', fontSize: 20, color: 'var(--accent-amber)', lineHeight: 1, minWidth: 22 }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-secondary)', lineHeight: 1.45, paddingTop: 1 }}>
                      {post.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* ── Responsive styles ── */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
            @media (max-width: 900px) {
              .blog-editorial-grid {
                grid-template-columns: 1fr 1fr !important;
              }
              .blog-editorial-grid > *:nth-child(1) { grid-column: 1; grid-row: auto !important; min-height: 320px; }
              .blog-editorial-grid > *:nth-child(2) { grid-column: 2; grid-row: auto !important; }
              .blog-editorial-grid > *:nth-child(3) { grid-column: 1 / 3; grid-row: auto !important; flex-direction: row; }
              .blog-editorial-grid > *:nth-child(4) { grid-column: 1 / 3; grid-template-columns: 1fr !important; }
            }
            @media (max-width: 600px) {
              .blog-editorial-grid {
                grid-template-columns: 1fr !important;
              }
              .blog-editorial-grid > * {
                grid-column: 1 !important;
                grid-row: auto !important;
              }
              .blog-editorial-grid > *:nth-child(4) {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

        </div>
      </section>
    </main>
  );
}