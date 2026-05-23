import type { Metadata } from 'next';
import { EVENTS } from '@/lib/data/events';
import EventCard from '@/components/events/EventCard';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore all events hosted by Web & Coding Club NIT Patna — hackathons, workshops, bootcamps, tech talks, and more.',
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden noise-overlay pt-28 pb-16">
      
      {/* Structural Vertical Grid lines */}
      <div className="absolute inset-0 container-wide grid grid-cols-4 pointer-events-none z-0">
        <div className="border-l border-zinc-900/50 h-full w-full" />
        <div className="border-l border-zinc-900/50 h-full w-full" />
        <div className="border-l border-zinc-900/50 h-full w-full" />
        <div className="border-l border-zinc-900/50 h-full w-full border-r" />
      </div>

      <section className="relative z-10">
        <div className="container-wide">
          
          {/* Page Header */}
          <div className="border-b-4 border-white pb-8 mb-12 max-w-4xl relative">
            <div className="flex items-center gap-3 text-mono text-xs font-bold tracking-[0.25em] text-[#f25f22] mb-3">
              <span>// ARCHIVE.WNCC.NITP</span>
              <span className="h-[2px] w-6 bg-[#f25f22]" />
              <span>EVENTS LISTING</span>
            </div>

            <h1 
              className="text-display font-black text-white uppercase tracking-tight mb-4 select-none"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              CLUB EVENTS
            </h1>
            
            <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
              From 48-hour cyber hackathons to hands-on Web3/AI workshops. We orchestrate 
              events that break boundaries, ignite innovation, and build the future of the developers 
              community at NIT Patna.
            </p>

            {/* Orange Accent block */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#f25f22] hidden md:block select-none" />
          </div>

          {/* Staggered Event Rows */}
          <div className="divide-y divide-zinc-900 border-t border-zinc-900">
            {EVENTS.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                index={index} 
              />
            ))}
          </div>

          {/* Bottom Accent line as seen in theme footer */}
          <div className="mt-16 pt-8 border-t-2 border-[#f25f22] flex flex-col md:flex-row justify-between items-start md:items-center text-mono text-[10px] text-zinc-500 gap-4">
            <div>
              <span>// WEB & CODING CLUB NIT PATNA</span>
            </div>
            <div>
              <span>A THEME FOR A CREATIVE SOCIETY — EST. 2026</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
