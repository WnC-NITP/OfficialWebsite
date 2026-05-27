'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { EVENTS } from '@/lib/data/events';
import EventCard from '@/components/events/EventCard';

const sortedEvents = [...EVENTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function RecentEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const recentEvent = sortedEvents[0]; // Get only the most recent event

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      '.event-card-container',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
    <section ref={sectionRef} className="section-padding bg-black text-white">
      <div className="container-wide">
        <SectionHeader
          title="Recent Event"
          subtitle="What we've been up to"
          accent="primary"
        />

        <div className="mt-8 event-card-container">
          <div className="divide-y divide-zinc-900 border-t border-zinc-900 border-b">
            {recentEvent && (
              <EventCard event={recentEvent} index={0} />
            )}
          </div>
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
