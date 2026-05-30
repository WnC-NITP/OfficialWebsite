'use client';

import React, { useRef, useEffect } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

export default function SentinelHero() {
  const splineWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = splineWrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      // Block the event from reaching Spline's internal canvas handlers
      e.stopPropagation();
      e.preventDefault();

      // Re-dispatch on the hero section's parent so Lenis still receives the scroll
      const heroSection = wrapper.closest('section');
      const target = heroSection?.parentElement ?? document.documentElement;
      target.dispatchEvent(
        new WheelEvent('wheel', {
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          deltaZ: e.deltaZ,
          deltaMode: e.deltaMode,
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
        })
      );
    };

    // Capture phase fires top-down, so our handler runs BEFORE Spline's canvas handler
    wrapper.addEventListener('wheel', handleWheel, { capture: true, passive: false });
    return () => wrapper.removeEventListener('wheel', handleWheel, { capture: true });
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden"
    >
      
      {/* 3D Background — interactive for mouse/hover, but wheel events are intercepted to remove lag */}
      <div 
        ref={splineWrapperRef} 
        className="absolute inset-0"
      >
        <InteractiveRobotSpline
          scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Cover the "Built with Spline" watermark at bottom-right */}
      <div 
        className="absolute bottom-0 right-0 z-[2] pointer-events-none"
        style={{ width: '220px', height: '60px', background: 'linear-gradient(to right, transparent, #0a0a0a 30%)' }}
      />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        
        {/* Heading */}
        <h1 
          className="animate-fade-up opacity-0 text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
          style={{ animationDelay: '0.2s' }}
        >
          WEB &amp; <span className="text-primary">CODING</span>
        </h1>

        {/* Subheading */}
        <p 
          className="animate-fade-up opacity-0 text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
          style={{ animationDelay: '0.4s' }}
        >
          Code Without Limits.
        </p>

        {/* Description */}
        <p 
          className="animate-fade-up opacity-0 text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8"
          style={{ animationDelay: '0.55s' }}
        >
          The Web &amp; Coding Club at NIT Patna is a community where students interested in web development and programming come together to learn, share knowledge, and work on real-world projects.
        </p>

        {/* CTA Buttons */}
        <div 
          className="animate-fade-up opacity-0 flex flex-wrap gap-3 font-bold pointer-events-auto"
          style={{ animationDelay: '0.7s' }}
        >
          <button className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97]">
            Explore Events
          </button>
          <button className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97]">
            Meet the Team
          </button>
        </div>

        {/* Trust Line */}
        <p 
          className="animate-fade-up opacity-0 text-muted-foreground/60 text-xs font-light mt-4 md:mt-6"
          style={{ animationDelay: '0.85s' }}
        >
          NIT Patna · 7 teams · 50+ active members
        </p>

      </div>
    </section>
  );
}
