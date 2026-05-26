'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/types';

interface PropsGalleryGrid {
  images: GalleryImage[];
  categories: readonly string[];
}

// Helper to generate a stable, deterministic number from an ID string
const getDeterministicHash = (id: string): number => {
  let sum = 0;
  for (let i = 0; i < id.length; i++) {
    sum += id.charCodeAt(i);
  }
  return sum;
};

// Deterministic layout assignment to avoid layout shift on hydration and keep design gorgeous
const getGridSpan = (img: GalleryImage): string => {
  const hash = getDeterministicHash(img.id) % 6;
  if (hash === 0) {
    return 'sm:col-span-2 sm:row-span-2 row-span-2 h-full';
  }
  if (hash === 2) {
    return 'row-span-2 h-full';
  }
  if (hash === 3) {
    return 'sm:col-span-2 h-full';
  }
  return 'h-full';
};

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touch, setTouch] = useState<number | null>(null);

  // Pre-calculate counts in a single O(N) loop with strict index typing
  const counts: Record<string, number> = {
    All: images.length,
    ...images.reduce((acc, img) => {
      acc[img.category] = (acc[img.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  // Core navigation callbacks
  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filtered.length - 1));
  }, [filtered.length]);
  
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : 0));
  }, [filtered.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-12">
        <div className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-1.5 flex flex-wrap gap-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={`group relative flex items-center gap-2 px-5 py-2 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'text-white border border-[var(--accent-secondary)]/40 shadow-[0_0_15px_rgba(255,0,60,0.2)] bg-[var(--accent-secondary-dim)]'
                    : 'text-white/60 border border-transparent hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  <span className={`flex items-center justify-center px-1.5 py-0.5 rounded text-[9px] min-w-[16px] transition-all duration-300 ${
                    isActive ? 'bg-white text-[var(--accent-secondary)] font-extrabold' : 'bg-white/10 text-white/40 group-hover:bg-white/20'
                  }`}>
                    {counts[cat] || 0}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive Bento Grid with auto gap-packing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[260px] grid-flow-row-dense max-w-7xl mx-auto">
        {filtered.map((img, index) => (
          <div
            key={img.id}
            role="button"
            tabIndex={0}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-neutral-900/30 shadow-lg transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] col-span-1 ${getGridSpan(img)}`}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); }
            }}
          >
            <div className="absolute inset-0 border border-white/0 rounded-2xl group-hover:border-[var(--accent-primary)]/30 group-hover:shadow-[inset_0_0_20px_rgba(0,212,255,0.12)] transition-all duration-500 z-10 pointer-events-none" />
            <div className="absolute top-4 left-4 z-10 flex items-center justify-center w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="absolute top-4 right-4 z-10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider rounded bg-black/60 backdrop-blur-md border border-white/10 text-white/90">
              {img.category}
            </div>
            <div className="relative w-full h-full overflow-hidden bg-neutral-900/80">
              <Image
                src={img.src}
                alt={img.alt || img.event}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority={index < 3}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6" />
            <div className="absolute bottom-0 inset-x-0 p-6 z-10 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex flex-col gap-1">
                <h4 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {img.event}
                </h4>
                <div className="flex items-center gap-2 text-xs text-white/50 mt-0.5">
                  <span>{img.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_8px_var(--accent-secondary)]" />
                  <span className="text-[var(--accent-secondary)] font-semibold">{img.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styled Empty State */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 px-6 text-center border border-dashed border-white/10 rounded-2xl bg-neutral-900/20 backdrop-blur-sm max-w-lg mx-auto">
          <div className="p-4 rounded-full bg-white/5 border border-white/10 text-white/30 mb-5 animate-pulse">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00-1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-white mb-2 tracking-wide">No Records Found</h4>
          <button 
            onClick={() => setActiveCategory('All')}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-primary)] rounded-full hover:bg-[var(--accent-primary)]/85 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 cursor-pointer"
          >
            Show All Snapshots
          </button>
        </div>
      )}

      {/* Advanced Lightbox with Native Touch Gestures */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={(e) => setTouch(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch === null) return;
            const diff = touch - e.changedTouches[0].clientX;
            if (diff > 50) nextImage();
            if (diff < -50) prevImage();
            setTouch(null);
          }}
        >
          {/* Lightbox Header */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-6 md:px-12 z-50">
            <div className="text-xs font-bold text-white/50 tracking-wider">
              {filtered[lightboxIndex].category.toUpperCase()} Snapshots
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 hover:scale-110 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Left Arrow Controls (Desktop + Mobile) */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 md:left-8 p-3 rounded-full bg-black/50 md:bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:scale-110 shadow-xl transition-all duration-300 z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Display Frame */}
          <div className="relative max-w-5xl max-h-[66vh] w-full px-4 flex flex-col items-center justify-center z-10" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[50vh] md:h-[58vh] max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/80 shadow-[0_24px_50px_rgba(0,0,0,0.85)]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt || 'Gallery snapshot'}
                fill
                className="object-contain p-2 select-none"
                priority
              />
            </div>
            
            <div className="w-full max-w-4xl mt-5 text-center px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 rounded-full bg-[var(--accent-secondary-dim)] border border-[var(--accent-secondary)]/30 text-[var(--accent-secondary)] text-[9px] font-extrabold uppercase tracking-widest">
                {filtered[lightboxIndex].category}
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-wide line-clamp-1 leading-tight">
                {filtered[lightboxIndex].event}
              </h3>
              <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-white/40">
                <span>{filtered[lightboxIndex].date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>Snapshot {lightboxIndex + 1} of {filtered.length}</span>
              </div>
            </div>
          </div>

          {/* Right Arrow Controls (Desktop + Mobile) */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 md:right-8 p-3 rounded-full bg-black/50 md:bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 hover:scale-110 shadow-xl transition-all duration-300 z-50 cursor-pointer"
            aria-label="Next image"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Bottom Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6 z-20 hidden md:block">
            <div className="flex justify-center gap-2 overflow-x-auto py-2 px-4 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 scrollbar-none">
              {filtered.map((img, idx) => (
                <button
                  key={`thumb-${img.id}`}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                  className={`relative flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    idx === lightboxIndex
                      ? 'ring-2 ring-[var(--accent-primary)] scale-110 opacity-100 shadow-[0_0_15px_rgba(0,212,255,0.5)]'
                      : 'opacity-35 hover:opacity-80'
                  }`}
                >
                  <Image src={img.src} alt="" fill className="object-cover select-none" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}