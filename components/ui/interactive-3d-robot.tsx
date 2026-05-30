'use client';

import { Suspense, lazy, useRef, useEffect, useCallback } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const removeWatermark = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // The Spline watermark is an <a> tag with "Built with Spline" or the Spline logo
    // It can appear as a direct child or nested inside the spline viewer
    const links = container.querySelectorAll('a');
    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const text = link.textContent || '';
      if (
        href.includes('spline.design') ||
        href.includes('spline') ||
        text.toLowerCase().includes('spline') ||
        text.toLowerCase().includes('built with')
      ) {
        link.style.display = 'none';
        link.style.opacity = '0';
        link.style.pointerEvents = 'none';
        link.style.visibility = 'hidden';
        link.style.position = 'absolute';
        link.style.zIndex = '-9999';
        link.remove();
      }
    });

    // Also look for any div containing the Spline logo image
    const imgs = container.querySelectorAll('img');
    imgs.forEach((img) => {
      const src = img.getAttribute('src') || '';
      if (src.includes('spline')) {
        const parent = img.closest('a') || img.parentElement;
        if (parent) {
          (parent as HTMLElement).style.display = 'none';
          parent.remove();
        }
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use MutationObserver to catch the watermark as soon as it's injected
    const observer = new MutationObserver(() => {
      removeWatermark();
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    // Also run immediately and on a short delay to catch early renders
    removeWatermark();
    const t1 = setTimeout(removeWatermark, 1000);
    const t2 = setTimeout(removeWatermark, 2000);
    const t3 = setTimeout(removeWatermark, 4000);
    const t4 = setTimeout(removeWatermark, 6000);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [removeWatermark]);

  return (
    <div ref={containerRef} className={`relative ${className || ''}`} style={{ overflow: 'hidden' }}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
            <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
          </div>
        }
      >
        <Spline
          scene={scene}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
}
