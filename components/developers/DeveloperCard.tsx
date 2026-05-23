'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import type { Developer } from '@/lib/types';
import Image from 'next/image';

export default function DeveloperCard({ developer }: { developer: Developer }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useGSAP(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, rotateZ: -5, rotateX: -10 },
      {
        opacity: 1, y: 0, rotateZ: -5, rotateX: 0, duration: 0.8, ease: 'power4.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%' }
      }
    );

    const onMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      gsap.to(cardRef.current, { rotateY: x * 10, rotateX: -y * 10, rotateZ: -5, duration: 0.5, ease: 'power2.out' });
    };

    const onMouseLeave = () => {
      gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, rotateZ: -5, duration: 0.5, ease: 'power2.out' });
    };

    cardRef.current.addEventListener('mousemove', onMouseMove);
    cardRef.current.addEventListener('mouseleave', onMouseLeave);
    return () => {
      cardRef.current?.removeEventListener('mousemove', onMouseMove);
      cardRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div className="relative group perspective-1000 my-8 py-10 px-6 flex justify-center">
      <style jsx>{`
        .pixel-bg {
          background-color: #111;
          background-image:
            linear-gradient(45deg, #1a1a1a 25%, transparent 25%),
            linear-gradient(-45deg, #1a1a1a 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #1a1a1a 75%),
            linear-gradient(-45deg, transparent 75%, #1a1a1a 75%);
          background-size: 8px 8px;
          background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
        }
        .handwritten {
          font-family: 'Segoe Script', 'Comic Sans MS', cursive;
          transform: rotate(12deg);
        }
        .tape {
          background: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.55) 0px,
            rgba(255,255,200,0.45) 4px,
            rgba(255,255,255,0.55) 8px
          );
          border-top: 1px solid rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(200,200,150,0.4);
        }
        .crease-line {
          position: absolute;
          left: 0;
          right: 0;
          pointer-events: none;
          z-index: 51;
        }
      `}</style>


      <div className="pixel-bg rounded-[2rem] p-4 shadow-2xl relative" style={{ overflow: 'visible' }}>
        {/* Metallic Clip */}
        <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ top: '-12px' }}>
          <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="clipGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d0d0d0" />
                <stop offset="50%" stopColor="#888" />
                <stop offset="100%" stopColor="#bbb" />
              </linearGradient>
            </defs>
            <rect x="8" y="0" width="40" height="28" rx="4" fill="url(#clipGrad)" />
            <rect x="8" y="28" width="40" height="16" rx="3" fill="#999" />
            <rect x="22" y="4" width="12" height="24" rx="3" fill="#555" />
            <rect x="24" y="6" width="8" height="20" rx="2" fill="#333" />
            <circle cx="28" cy="16" r="3.5" fill="#777" />
            <circle cx="28" cy="16" r="1.5" fill="#aaa" />
          </svg>
        </div>

        {/* Main white card */}
        <div
          ref={cardRef}
          className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden shadow-xl relative flex flex-col transition-shadow duration-300"
          style={{ transformStyle: 'preserve-3d', transform: 'rotate(-5deg)' }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px 8px rgba(227,160,32,0.6), 0 0 60px 16px rgba(224,90,0,0.3)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
        >
          {/* Top slanting wrinkle lines */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '110px', zIndex: 1, backgroundImage: 'repeating-linear-gradient(112deg, rgba(0,0,0,0.13) 0px, rgba(0,0,0,0.13) 2px, transparent 2px, transparent 22px, rgba(255,255,255,0.12) 22px, rgba(255,255,255,0.12) 23px, transparent 23px, transparent 44px)' }} />

          {/* Top label strip */}
          <div className="flex justify-between items-center px-5 pt-5 pb-2 relative">
            {/* Texture overlay for top section */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/white-crumpled-paper-texture-background-photo.jpeg)', backgroundSize: '150px 150px', backgroundRepeat: 'repeat', opacity: 0.6, zIndex: 0 }} />
            <div className="flex flex-col gap-1 relative z-10">
              <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest rounded-sm">
                WnCC · NITP
              </span>
              <span className="bg-[#f5c518] text-black text-[8px] font-black px-2 py-0.5 uppercase tracking-widest rounded-sm">
                DEV PASS 2026
              </span>
            </div>
            <div className="text-right relative z-10">
              <div className="text-black font-black text-3xl leading-none tracking-tighter">
                {mounted ? `${String(new Date().getMonth() + 1).padStart(2, '0')}` : '--'}
              </div>
              <div className="text-[#f5c518] font-black text-xs tracking-widest">
                {mounted ? `${new Date().getFullYear()}` : '----'}
              </div>
            </div>
          </div>

          {/* Portrait area with 3D perspective grid */}
          <div className="relative mx-5 rounded-xl overflow-visible" style={{ height: '220px' }}>
            {/* 3D perspective grid background */}
            <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ zIndex: 0, backgroundColor: '#e3a020' }}>
              {/* Straight grid on top half */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, height: '50%',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }} />
              {/* Perspective floor grid on bottom half */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '-50%', right: '-50%', height: '60%',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
                backgroundSize: '28px 28px',
                backgroundColor: '#e3a020',
                transform: 'perspective(250px) rotateX(55deg)',
                transformOrigin: '50% 100%',
              }} />
              {/* Center radial vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(120,60,0,0.45) 100%)',
              }} />
            </div>

            {/* First name inside grid */}
            <div className="absolute top-4 left-0 right-0 flex justify-center" style={{ zIndex: 2 }}>
              <h1 className="text-white font-black uppercase tracking-tighter drop-shadow-lg" style={{ fontSize: '36px', lineHeight: 1, textShadow: '2px 2px 0px #000', transform: 'rotate(-6deg)' }}>
                {developer.name.split(' ')[0]}
              </h1>
            </div>

            {/* Circular sticker on left */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full border-2 border-black shadow-lg flex flex-col items-center justify-center z-10" style={{ backdropFilter: 'none' }}>
              <span className="text-white font-black text-[8px] uppercase tracking-tight leading-tight text-center">
                CORE<br />DEV
              </span>
              <span className="text-[#f5c518] font-black text-[10px]">★</span>
            </div>

            {/* Handwritten "Get!" on right */}
            <div className="absolute -right-2 top-4 z-10">
              <span className="handwritten text-[#e05a00] font-black text-2xl drop-shadow-sm">Get!</span>
            </div>

            {/* Doodle arrows */}
            <svg className="absolute bottom-2 right-3 z-10 opacity-80" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 22 Q10 10 20 6" stroke="black" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M17 4 L20 6 L18 9" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <svg className="absolute top-3 left-6 z-10 opacity-60" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="black" strokeWidth="1.5" strokeDasharray="3 2"/>
              <path d="M9 5 L9 13 M5 9 L13 9" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Bottom magazine cover section */}
          <div className="relative bg-white overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/images/white-crumpled-paper-texture-background-photo.jpeg)', backgroundSize: '150px 150px', backgroundRepeat: 'repeat', opacity: 0.6, zIndex: 0 }} />

            {/* Large heavy headline */}
            <div className="px-4 pt-4 pb-1 relative">
              <div className="text-black font-black uppercase leading-none tracking-tighter" style={{ fontSize: '52px', lineHeight: 0.9 }}>
                WE ARE<br />
                <span style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>DEVELOPERS</span>
              </div>
              {/* Bold accent characters */}
              <div className="absolute -top-1 right-4 flex flex-col items-end">
                <span className="text-black font-black text-5xl leading-none tracking-tighter">##</span>
                <span className="text-[#e3a020] font-black text-xs uppercase tracking-widest mt-1">2026</span>
              </div>
            </div>

            {/* Asymmetric charcoal blocks row */}
            <div className="flex gap-0 mx-0">

              {/* Block 1 — wide info block */}
              <div className="flex-1 bg-[#2a2a2a] px-3 py-2 flex flex-col justify-between" style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)' }}>
                <span className="text-[#e3a020] font-black text-[8px] uppercase tracking-widest">WnCC · NITP</span>
                <div className="mt-1">
                  <div className="text-white font-black text-[10px] uppercase tracking-tight leading-tight">{developer.name.split(' ')[0]}</div>
                  <div className="text-white/50 font-black text-[7px] uppercase tracking-widest mt-0.5">{developer.role}</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {developer.techStack.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-white/40 font-black text-[6px] uppercase tracking-widest border border-white/10 px-1">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Block 2 — TOP 3 badge */}
              <div className="bg-black px-3 py-2 flex flex-col items-center justify-center relative z-10" style={{ minWidth: '64px', border: '2px solid #e3a020' }}>
                <span className="text-[#e3a020] font-black text-[7px] uppercase tracking-widest leading-none">TOP</span>
                <span className="font-black leading-none tracking-tighter" style={{ fontSize: '40px', lineHeight: 1, color: '#ffffff', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>3</span>
                <span className="font-black text-[6px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>RANK</span>
              </div>
            </div>


          </div>

          {/* Orange accent bottom strip */}
          <div className="h-2 bg-[#e05a00] w-full" />

          {/* Fold crease lines */}
          <div className="crease-line" style={{ top: '33%', height: '2px', transform: 'rotate(-0.7deg)', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.07) 15%, rgba(255,255,255,0.22) 45%, rgba(0,0,0,0.09) 70%, transparent 100%)', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }} />
          <div className="crease-line" style={{ top: 'calc(33% + 2px)', height: '1px', transform: 'rotate(-0.7deg)', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.18) 80%, transparent 100%)' }} />
          <div className="crease-line" style={{ top: '70%', height: '2px', transform: 'rotate(0.5deg)', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(0,0,0,0.06) 50%, rgba(255,255,255,0.2) 75%, transparent 100%)', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }} />

          {/* Soft inner shadow */}
          <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none" style={{ zIndex: 52, boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.08), inset 0 -3px 8px rgba(0,0,0,0.05), inset 4px 0 8px rgba(0,0,0,0.04), inset -4px 0 8px rgba(0,0,0,0.03)' }} />

          {/* Dog-ear fold corner */}
          <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none" style={{ zIndex: 53, background: 'linear-gradient(225deg, #c8bfb0 32%, rgba(190,178,155,0.5) 52%, transparent 66%)', filter: 'drop-shadow(-1px -1px 2px rgba(0,0,0,0.1))' }} />
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}
