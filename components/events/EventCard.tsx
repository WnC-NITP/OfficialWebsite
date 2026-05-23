'use client';

import Image from 'next/image';
import type { ClubEvent } from '@/lib/types';

interface EventCardProps {
  event: ClubEvent;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const isEven = index % 2 === 0;
  const variation = index % 4;

  return (
    <div className="relative w-full py-16 md:py-24 border-b border-zinc-900 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Graphic Collage Section */}
        <div 
          className={`lg:col-span-6 relative ${isEven ? 'lg:order-first' : 'lg:order-last'}`}
        >
          <div className="relative w-full aspect-[4/3] max-w-[480px] mx-auto select-none">
            {/* Variation 0 layout */}
            {variation === 0 && (
              <>
                {/* Main Event Image */}
                <div className="absolute top-0 right-0 w-[78%] h-[78%] border border-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                    priority={index === 0}
                  />
                </div>
                {/* Overlapping Grayscale manga sketch effect */}
                <div className="absolute bottom-0 left-0 w-[45%] h-[55%] border border-white shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-150 brightness-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // VOL_01
                  </div>
                </div>
                {/* Overlapping Solid Orange Comic Box */}
                <div className="absolute bottom-[8%] right-[25%] w-[22%] h-[32%] bg-[#f25f22] border border-[#f25f22] text-black flex flex-col justify-between p-3 font-mono z-20 shadow-xl select-none transition-transform duration-500 group-hover:translate-x-1">
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[8px] font-black leading-none tracking-tight">WnCC //</span>
                    <span className="text-lg font-black leading-none tracking-widest text-center">CODE</span>
                    <span className="text-[8px] font-black leading-none text-right">コード</span>
                  </div>
                </div>
              </>
            )}

            {/* Variation 1 layout */}
            {variation === 1 && (
              <>
                {/* Main Event Image */}
                <div className="absolute top-0 left-0 w-[78%] h-[78%] border border-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                </div>
                {/* Overlapping Grayscale manga sketch effect */}
                <div className="absolute bottom-0 right-0 w-[45%] h-[52%] border border-white shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:translate-y-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-150 brightness-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // SEC_02
                  </div>
                </div>
                {/* Overlapping Solid Orange Comic Box */}
                <div className="absolute top-[8%] right-[32%] w-[24%] h-[30%] bg-[#f25f22] border border-[#f25f22] text-black flex flex-col justify-between p-3 font-mono z-20 shadow-xl select-none transition-transform duration-500 group-hover:-translate-x-1">
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[8px] font-black leading-none tracking-tight">TYPE //</span>
                    <span className="text-base font-black leading-none tracking-widest text-center">SHIELD</span>
                    <span className="text-[8px] font-black leading-none text-right">技術</span>
                  </div>
                </div>
              </>
            )}

            {/* Variation 2 layout */}
            {variation === 2 && (
              <>
                {/* Main Event Image */}
                <div className="absolute bottom-0 right-0 w-[78%] h-[78%] border border-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                </div>
                {/* Overlapping Grayscale manga sketch effect */}
                <div className="absolute top-0 left-0 w-[48%] h-[50%] border border-white shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-150 brightness-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // NUM_03
                  </div>
                </div>
                {/* Overlapping Solid Orange Comic Box */}
                <div className="absolute bottom-[8%] left-[32%] w-[22%] h-[32%] bg-[#f25f22] border border-[#f25f22] text-black flex flex-col justify-between p-3 font-mono z-20 shadow-xl select-none transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[8px] font-black leading-none tracking-tight">LAB //</span>
                    <span className="text-lg font-black leading-none tracking-widest text-center">NITP</span>
                    <span className="text-[8px] font-black leading-none text-right">データ</span>
                  </div>
                </div>
              </>
            )}

            {/* Variation 3 layout */}
            {variation === 3 && (
              <>
                {/* Main Event Image */}
                <div className="absolute bottom-0 left-0 w-[78%] h-[78%] border border-zinc-800 shadow-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                </div>
                {/* Overlapping Grayscale manga sketch effect */}
                <div className="absolute top-0 right-0 w-[45%] h-[55%] border border-white shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:translate-x-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-150 brightness-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // ACT_04
                  </div>
                </div>
                {/* Overlapping Solid Orange Comic Box */}
                <div className="absolute top-[18%] left-[28%] w-[24%] h-[30%] bg-[#f25f22] border border-[#f25f22] text-black flex flex-col justify-between p-3 font-mono z-20 shadow-xl select-none transition-transform duration-500 group-hover:scale-105">
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[8px] font-black leading-none tracking-tight">INIT //</span>
                    <span className="text-base font-black leading-none tracking-widest text-center">OVER</span>
                    <span className="text-[8px] font-black leading-none text-right">ハック</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Text Details Section */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          {/* Tag & Status info */}
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.2em] text-[#f25f22]">
            <span>// EVENT_{String(index + 1).padStart(2, '0')}</span>
            <span className="h-[1px] w-8 bg-[#f25f22]/40" />
            <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 uppercase tracking-wider text-zinc-400">
              {event.status}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight font-display border-b border-zinc-800 pb-4 group-hover:border-[#f25f22] transition-colors duration-300">
            {event.title}
          </h2>

          {/* Metadata Block (Date & Location) */}
          <div className="grid grid-cols-2 gap-4 font-mono text-xs text-zinc-500 py-1">
            <div className="space-y-1">
              <span className="text-[#f25f22] font-extrabold uppercase tracking-widest text-[10px] block">// DATE:</span>
              <span className="text-zinc-300 font-semibold uppercase">
                {new Date(event.date).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#f25f22] font-extrabold uppercase tracking-widest text-[10px] block">// LOCATION:</span>
              <span className="text-zinc-300 font-semibold uppercase truncate block">
                {event.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-xl">
            {event.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {event.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider border border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-[#f25f22] hover:text-[#f25f22] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="pt-4">
            {event.registrationLink || event.status === 'upcoming' ? (
              <a
                href={event.registrationLink || '#'}
                className="inline-block px-7 py-3 text-xs font-mono font-black uppercase tracking-[0.2em] border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none select-none"
              >
                REGISTER NOW
              </a>
            ) : (
              <a
                href={`/events/${event.id}`}
                className="inline-block px-7 py-3 text-xs font-mono font-black uppercase tracking-[0.2em] border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none select-none"
              >
                VIEW EVENT
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
