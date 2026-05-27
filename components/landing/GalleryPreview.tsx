'use client';

import { useMemo } from 'react';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { GALLERY_IMAGES } from '@/lib/data/gallery';

export default function GalleryPreview() {
  const images = useMemo(() => {
    return GALLERY_IMAGES.map(img => ({
      src: img.src,
      alt: img.alt,
    }));
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#050505]">
      <InfiniteGallery
        images={images}
        speed={0.4}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-full w-full overflow-hidden"
      />
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-3 mix-blend-exclusion text-white">
        <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
          <span className="italic">Moments Captured;</span> explore our gallery
        </h1>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none font-mono uppercase text-[11px] font-semibold text-white/80">
        <p>Use mouse wheel, arrow keys, or touch to navigate</p>
        <p className="opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
      </div>
    </section>
  );
}
