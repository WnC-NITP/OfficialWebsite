'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import MemberCard from './MemberCard';
import type { Team } from '@/lib/types';

// Classy, premium SVG icons matching the technical WnCC aesthetic
const TeamIcon = ({ slug, color }: { slug: string; color: string }) => {
  const baseClass = "w-9 h-9 transition-transform duration-300 group-hover:scale-110";

  switch (slug) {
    case 'web-development':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case 'blockchain':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 7v5M22 7v5M12 12v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'gen-ai':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Symmetrical modern AI sparkles */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15.187 8.192 14.37 9 9l.813 5.37 5.096.817-5.096.717zm9.258-10.975l-.27 1.7-.27-1.7-1.7-.27 1.7-.27.27-1.7.27 1.7 1.7.27-1.7.27zm.27 8.27l-.135.85-.135-.85-.85-.135.85-.135.135-.85.135.85.85.135-.85.135z" />
        </svg>
      );
    case 'machine-learning':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        </svg>
      );
    case 'pr':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 8.5a4 4 0 010 7M18.5 5.5a8 8 0 010 13" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'social-media':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'design':
      return (
        <svg className={baseClass} style={{ color }} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
          <circle cx="13.5" cy="6.5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function TeamSection({ team }: { team: Team }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.from(sectionRef.current.querySelectorAll('.member-card'), {
      opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
    });
  }, { scope: sectionRef });


  return (
    <section ref={sectionRef} id={team.slug} className="py-16 scroll-mt-24 flex flex-col items-center">
      {/* Team Header */}
      <div className="flex flex-col items-center text-center mb-12 w-full">
        <div className="flex items-center justify-center gap-3.5 mb-2 group">
          <div className="flex-shrink-0 filter drop-shadow-[0px_0px_8px_rgba(255,255,255,0.06)]">
            <TeamIcon slug={team.slug} color={team.color} />
          </div>
          <h2 className="text-heading text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
            {team.name}
          </h2>
        </div>
        <p className="text-body max-w-2xl mx-auto">{team.description}</p>
        <div className="w-16 h-1 mt-4 rounded-full" style={{ backgroundColor: team.color }} />
      </div>

      {/* Team Leader Section */}
      <div className={`flex flex-col items-center w-full ${team.members.length > 0 ? "mb-14" : ""}`}>
        <h3 className="text-mono text-xs mb-6 tracking-[0.2em] text-[var(--text-accent)] text-center">// TEAM LEAD</h3>
        <div className="flex flex-col gap-8 items-center justify-center w-full max-w-3xl">
          <div className="w-full max-w-[325px] flex-shrink-0 member-card">
            <MemberCard member={team.leader} teamColor={team.color} teamName={team.name} />
          </div>
          {team.leader.quote && (
            <div className="relative flex-grow mt-6 bg-yellow-300 text-[#0e1713] p-6 rounded-2xl border-[3px] border-[#0e1713] shadow-[6px_6px_0px_#0e1713] max-w-md select-none group">
              {/* Comic bubble pointing top (centered) */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-300 border-l-[3px] border-t-[3px] border-[#0e1713] rotate-45" />
              
              <span className="font-display font-[900] text-base uppercase tracking-tight block mb-2 text-[#0e1713] drop-shadow-[0.5px_0.5px_0px_rgba(255,255,255,0.6)] text-center">
                &ldquo; Lead's Directive &rdquo;
              </span>
              <p className="font-sans text-sm font-semibold leading-relaxed italic text-[#0e1713] opacity-95 text-center">
                &ldquo;{team.leader.quote}&rdquo;
              </p>
              
              {/* Retro decorative sparkles in the speech bubble */}
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border-2 border-[#0e1713] rounded-full flex items-center justify-center shadow-[2.5px_2.5px_0px_#0e1713] group-hover:rotate-12 transition-transform duration-200">
                <svg className="w-4 h-4 fill-yellow-400 text-[#0e1713]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Team Members */}
      {team.members.length > 0 && (
        <div className="flex flex-col items-center w-full">
          <h3 className="text-mono text-xs mb-6 tracking-[0.2em] text-[var(--text-accent)] text-center">// MEMBERS</h3>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {team.members.map((member) => (
              <div key={member.id} className="member-card w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[325px]">
                <MemberCard member={member} teamColor={team.color} teamName={team.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
