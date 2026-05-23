import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import type { BlogPost } from '@/lib/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  const initials = post.author.name.split(' ').map((n) => n[0]).join('');

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="glass-card overflow-hidden hover:-translate-y-1 transition-all duration-300">
        {/* Cover */}
        <div className="aspect-video overflow-hidden relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={450}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} label={tag} variant="coral" />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-coral)] transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author + Meta */}
          <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-subtle)]">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-amber))' }}
            >
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[var(--text-primary)] truncate">{post.author.name}</p>
              <p className="text-[0.65rem] text-[var(--text-muted)]">
                {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                {' · '}{post.readTime} min read
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}