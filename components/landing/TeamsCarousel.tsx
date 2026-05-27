'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Inter, Anton } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const anton = Anton({ subsets: ['latin'], weight: '400' });

const TEAMS = [
  { name: 'STATELESS', title: 'WEB DEVELOPMENT', bg: '#00d4ff', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779849873/web_dev_kqphxb.png' },
  { name: 'TENSOR', title: 'MACHINE LEARNING', bg: '#4a00e0', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850644/ml_tspsk1.png' },
  { name: 'AUTOREG', title: 'GENERATIVE AI', bg: '#ff1493', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850646/genai_wsbq0e.png' },
  { name: 'CITADEL', title: 'BLOCKCHAIN', bg: '#7f8c8d', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850643/blockchain_so4x4j.png' },
  { name: 'WIREFRAMES', title: 'UI/UX DESIGN', bg: '#b76e79', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850643/blockchain_so4x4j.png' },
  { name: 'RUNTIME', title: 'DATA STRUCTURES AND ALGORITHMS', bg: '#b76e79', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850643/blockchain_so4x4j.png' },
  { name: 'LINKS', title: 'SOCIAL MEDIA AND PR', bg: '#2ecc71', src: 'https://res.cloudinary.com/dq1fhihvx/image/upload/v1779850643/blockchain_so4x4j.png' },
];

export default function TeamsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    TEAMS.forEach(team => {
      const img = new Image();
      img.src = team.src;
    });
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    const n = TEAMS.length;
    if (direction === 'next') {
      setActiveIndex(prev => (prev + 1) % n);
    } else {
      setActiveIndex(prev => (prev + n - 1) % n);
    }
    setTimeout(() => setIsAnimating(false), 650);
  };

  const getRole = (index: number) => {
    const n = TEAMS.length;
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + n - 1) % n) return 'left';
    if (index === (activeIndex + 1) % n) return 'right';
    if (index === (activeIndex + 2) % n) return 'back';
    return 'hidden';
  };

  return (
    <div className={`relative w-full overflow-hidden ${inter.className}`} style={{ backgroundColor: TEAMS[activeIndex].bg, transition: 'background-color 650ms cubic-bezier(0.4,0,0.2,1)' }}>
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        
        {/* Grain overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-50 opacity-40" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }} 
        />

        {/* Giant ghost text */}
        <div 
          className={`absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2] ${anton.className}`}
          style={{ 
            top: '18%', 
            fontSize: 'clamp(50px, 16vw, 220px)', 
            fontWeight: 900, 
            color: '#ffffff', 
            opacity: 1, 
            lineHeight: 1, 
            textTransform: 'uppercase', 
            letterSpacing: '0.04em', 
            whiteSpace: 'nowrap' 
          }}
        >
          {TEAMS[activeIndex].name}
        </div>

        {/* Top-left brand label */}
        <div className="absolute top-6 left-4 sm:left-8 z-60 text-xs font-semibold uppercase text-white opacity-90" style={{ letterSpacing: '0.18em', zIndex: 60 }}>
          TEAMS
        </div>

        {/* Carousel */}
        <div className="absolute inset-0 z-[3]">
          {TEAMS.map((team, i) => {
            const role = getRole(i);
            let style: React.CSSProperties = {
              position: 'absolute',
              aspectRatio: '1.2 / 1',
              transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), top 650ms cubic-bezier(0.4,0,0.2,1)',
              willChange: 'transform, filter, opacity, left, top',
            };

            if (role === 'center') {
              style = { ...style, transform: `translate(-50%, -50%) scale(${isMobile ? 1.5 : 2.2})`, filter: 'blur(0px)', opacity: 1, zIndex: 20, left: '50%', top: '50%', height: isMobile ? '35%' : '45%' };
            } else if (role === 'left') {
              style = { ...style, transform: `translate(-50%, -50%) scale(${isMobile ? 0.8 : 1.2})`, filter: 'blur(3px)', opacity: 0.7, zIndex: 10, left: isMobile ? '5%' : '15%', top: isMobile ? '60%' : '65%', height: isMobile ? '15%' : '22%' };
            } else if (role === 'right') {
              style = { ...style, transform: `translate(-50%, -50%) scale(${isMobile ? 0.8 : 1.2})`, filter: 'blur(3px)', opacity: 0.7, zIndex: 10, left: isMobile ? '95%' : '85%', top: isMobile ? '60%' : '65%', height: isMobile ? '15%' : '22%' };
            } else if (role === 'back') {
              style = { ...style, transform: 'translate(-50%, -50%) scale(1)', filter: 'blur(6px)', opacity: 0.3, zIndex: 5, left: '50%', top: '50%', height: isMobile ? '10%' : '15%' };
            } else {
              style = { ...style, transform: 'translate(-50%, -50%) scale(0.8)', filter: 'blur(10px)', opacity: 0, zIndex: 0, left: '50%', top: '50%', height: isMobile ? '10%' : '15%' };
            }

            return (
              <div key={team.name} style={style}>
                <img src={team.src} alt={team.name} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} draggable={false} />
              </div>
            );
          })}
        </div>

        {/* Bottom-left text + nav buttons */}
        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-60 max-w-[320px]" style={{ zIndex: 60 }}>
          <p className="font-bold uppercase tracking-widest mb-2 sm:mb-3 text-base sm:text-[22px] text-white opacity-95" style={{ letterSpacing: '0.02em' }}>
            {TEAMS[activeIndex].title}
          </p>
          <p className="hidden sm:block text-xs sm:text-sm text-white opacity-85 mb-4 sm:mb-5" style={{ lineHeight: 1.6 }}>
            The backbone of our technological innovations. Building robust, scalable, and cutting-edge solutions. Join the experts.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('prev')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center transition-all duration-150 hover:bg-white/10 hover:scale-110"
            >
              <ArrowLeft color="white" size={26} strokeWidth={2.25} />
            </button>
            <button 
              onClick={() => navigate('next')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center transition-all duration-150 hover:bg-white/10 hover:scale-110"
            >
              <ArrowRight color="white" size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right link */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-60" style={{ zIndex: 60 }}>
          <a href="#discover" className={`flex items-center text-white hover:opacity-100 opacity-95 transition-opacity duration-200 ${anton.className}`} style={{ fontSize: 'clamp(20px, 4vw, 56px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase' }}>
            DISCOVER IT
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 ml-2" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </div>
  );
}
