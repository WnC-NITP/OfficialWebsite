'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { FEATURES } from '@/lib/data/features';

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo('.bento-item', 
      { opacity: 0, y: 40, scale: 0.96 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        stagger: 0.06, 
        duration: 0.7, 
        ease: 'power4.out',
        scrollTrigger: { trigger: '.bento-grid-container', start: 'top 85%' },
      }
    );
  }, { scope: sectionRef });

  // Custom Visual Styling Engine (Unchanged)
  const getCardStyles = (id: string) => {
    switch (id) {
      case 'tech-talks':
        return {
          cardBg: 'bg-gradient-to-br from-[#12113a] via-[#091e4a] to-[#00b4ed]',
          textColor: 'text-white',
          descColor: 'text-white/70',
          showTextLogo: 'A'
        };
      case 'hackathons':
        return {
          cardBg: 'bg-gradient-to-b from-[#2de2ff] via-[#00aaff] to-[#0a48b3]',
          textColor: 'text-[#061533]',
          descColor: 'text-[#061533]/80',
        };
      case 'open-source':
        return {
          cardBg: 'bg-gradient-to-br from-[#00c6ff] via-[#e6faff] to-white',
          textColor: 'text-[#0c244d]',
          descColor: 'text-[#0c244d]/70',
          showGraphLine: true
        };
      case 'workshops':
        return {
          cardBg: 'bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#1e293b] border border-white/10',
          textColor: 'text-white',
          descColor: 'text-gray-400',
          showDonutChart: true
        };
      case 'peer-learning':
        return {
          cardBg: 'bg-gradient-to-br from-[#12113a] via-[#091e4a] to-[#00b4ed]',
          textColor: 'text-white',
          descColor: 'text-white/70',
          showTvGuy: true
        };
      case 'community-events':
        return {
          cardBg: 'bg-gradient-to-b from-[#0b1b3d] to-[#040914] border border-cyan-500/20',
          textColor: 'text-white',
          descColor: 'text-gray-400',
          showRobotFace: true
        };
      case 'project-mentoring':
        return {
          cardBg: 'bg-gradient-to-b from-[#00f2fe] via-[#4facfe] to-[#00c6ff]',
          textColor: 'text-[#031b4e]',
          descColor: 'text-[#031b4e]/80',
          showVrOverlay: true
        };
      case 'code-challenges':
        return {
          cardBg: 'bg-gradient-to-br from-[#061329] via-[#0b2b5c] to-[#00d2ff] border border-white/5',
          textColor: 'text-white',
          descColor: 'text-white/60',
          showVLogo: true
        };
      case 'industry-connect':
        return {
          cardBg: 'bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#1e293b] border border-white/10',
          textColor: 'text-white',
          descColor: 'text-gray-400',
          isWideLogo: true
        };
      default:
        return { cardBg: 'bg-slate-900', textColor: 'text-white', descColor: 'text-gray-400' };
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-[#020408] text-white overflow-hidden">
      {/* Dynamic Structural Responsive Grid Engine */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 📱 Tablet Viewports (Clean 2-Column Grid Setup) */
          @media (min-width: 777px) and (max-width: 1022px) {
            .bento-grid-container {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              grid-auto-flow: row dense !important;
            }
            /* Hide the code challenges card completely in this range */
            .bento-code-challenges { 
              display: none !important; 
            }
            /* Make major highlight feature components wider on tablet sizes */
            .bento-hackathons { grid-column: span 2 !important; }
            .bento-industry-connect { grid-column: span 2 !important; }
          }  


        /* 🖥️ Large Desktop Viewports (exact original Bento Matrix) */
        @media (min-width: 1024px) {
          .bento-grid-container {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            grid-template-rows: repeat(4, minmax(230px, auto)) !important;
            grid-auto-flow: row dense !important;
          }
          .bento-tech-talks { grid-column: 1 / span 1 !important; grid-row: 1 / span 1 !important; }
          .bento-hackathons { grid-column: 2 / span 2 !important; grid-row: 1 / span 2 !important; }
          .bento-open-source { grid-column: 4 / span 1 !important; grid-row: 1 / span 1 !important; }
          .bento-workshops { grid-column: 1 / span 1 !important; grid-row: 2 / span 2 !important; }
          .bento-peer-learning { grid-column: 2 / span 1 !important; grid-row: 3 / span 2 !important; }
          .bento-community-events { grid-column: 3 / span 1 !important; grid-row: 3 / span 1 !important; }
          .bento-project-mentoring { grid-column: 4 / span 1 !important; grid-row: 2 / span 2 !important; }
          .bento-code-challenges { grid-column: 1 / span 1 !important; grid-row: 4 / span 1 !important; }
          .bento-industry-connect { grid-column: 3 / span 2 !important; grid-row: 4 / span 1 !important; }
        }
      `}} />

      <div className="container-wide px-4 md:px-8 mx-auto">
        <SectionHeader title="What We Offer" subtitle="A complete ecosystem for tech enthusiasts" accent="sage" />

        {/* Base Structural Container Grid */}
        <div className="bento-grid-container grid grid-cols-1 gap-6 mt-10">
          {FEATURES.map((feature) => {
            const styles = getCardStyles(feature.id);
            return (
              <div
                key={feature.id}
                className={`bento-item bento-${feature.id} p-6 md:p-8 flex flex-col justify-between gap-5 group cursor-default relative overflow-hidden rounded-[24px] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan-500/10 ${styles.cardBg}`}
              >
                {/* Visual Accent Layer */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: feature.color }} />

                {/* Sub-Component Decorative Layer */}
                {styles.showTextLogo && (
                  <div className="absolute -bottom-8 -right-6 text-[11rem] font-black opacity-10 font-sans tracking-tighter text-white select-none pointer-events-none">
                    {styles.showTextLogo}
                  </div>
                )}

                {styles.showGraphLine && (
                  <div className="absolute bottom-4 right-4 left-4 h-16 opacity-40 pointer-events-none">
                    <svg viewBox="0 0 100 30" className="w-full h-full text-blue-600 fill-none stroke-current stroke-2">
                      <path d="M0,25 Q25,5 50,20 T100,5" strokeLinecap="round" />
                      <circle cx="50" cy="20" r="3" className="fill-cyan-400 stroke-none" />
                      <circle cx="100" cy="5" r="3" className="fill-blue-600 stroke-none" />
                    </svg>
                  </div>
                )}

                {styles.showDonutChart && (
                  <div className="absolute right-6 top-8 w-20 h-20 opacity-20 pointer-events-none rounded-full border-4 border-dashed border-cyan-400 animate-spin-slow" />
                )}

                {/* Main Content Layout */}
                <div className="relative z-10 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <span className="text-3xl mb-1 block filter drop-shadow-md">{feature.icon}</span>
                    {styles.isWideLogo && (
                      <span className="text-xl font-black italic tracking-tighter text-cyan-400">WnCC</span>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold ${styles.textColor}`} style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${styles.descColor}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Quantitative Stats Placement System */}
                {feature.stat && (
                  <div className="mt-auto pt-3 border-t border-white/5 relative z-10">
                    <span className={`text-3xl font-black tracking-tight ${styles.textColor}`} style={{ fontFamily: 'var(--font-display)' }}>
                      <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                    </span>
                    <p className={`text-[0.6rem] uppercase tracking-wider font-semibold mt-0.5 ${styles.descColor}`}>{feature.statLabel}</p>
                  </div>
                )}

                {styles.showVLogo && (
                  <div className="absolute bottom-2 right-4 text-7xl font-black italic opacity-20 text-cyan-400 select-none">
                    V
                  </div>
                )}

                {/* Micro-interactive Hover Glow Flare */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${feature.color}15, transparent 70%)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}