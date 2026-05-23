'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { EVENTS } from '@/lib/data/events';

// Sort by date descending and take the 3 most recent/upcoming
const sortedEvents = [...EVENTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function RecentEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const recentEvents = sortedEvents.slice(0, 3);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      '.event-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeader title="Recent Events" subtitle="What we've been up to" accent="amber" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recentEvents.map((event, i) => (
            <div
              key={event.id}
              className="event-card glass-card overflow-hidden group cursor-pointer"
              style={{ opacity: 1 }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={340}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
                {/* Status badge on first/upcoming events */}
                {event.status === 'upcoming' && (
                  <div className="absolute top-3 left-3">
                    <span className="tag bg-[var(--accent-coral)] border-[var(--accent-coral)] text-white font-bold animate-pulse-glow">
                      UPCOMING
                    </span>
                  </div>
                )}
                {/* Date badge */}
                <div className={`absolute top-3 ${event.status === 'upcoming' ? 'right-3' : 'left-3'}`}>
                  <span className="tag bg-[var(--bg-primary)] border-[var(--accent-amber)] text-[var(--accent-amber)]">
                    {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} label={tag} variant="gray" />
                  ))}
                </div>
                <div className="pt-2">
                  <Link href="/events" className="text-sm font-medium text-[var(--accent-coral)] group-hover:text-[var(--accent-amber)] transition-colors">
                    {event.status === 'upcoming' ? 'Register Now →' : 'Learn More →'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/events" className="btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
