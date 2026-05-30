'use client';

import type { TeamMember } from '@/lib/types';

interface MemberCardProps {
  member: TeamMember;
  teamColor?: string;
  teamName?: string;
}

// 8-pointed star / sparkle badge SVG
const SparkleIcon = () => (
  <svg
    className="w-7 h-7 flex-shrink-0 text-white fill-current stroke-[#0e1713] stroke-[2.5] drop-shadow-[2px_2px_0px_#0e1713]"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.8 8.8L24 12L14.8 15.2L12 24L9.2 15.2L0 12L9.2 8.8Z" />
  </svg>
);

// High-fidelity Barcode SVG
const Barcode = () => (
  <svg className="w-20 h-6 text-[#0e1713]" viewBox="0 0 100 30" fill="currentColor">
    <rect x="0" y="0" width="3" height="30" />
    <rect x="5" y="0" width="1" height="30" />
    <rect x="8" y="0" width="4" height="30" />
    <rect x="14" y="0" width="1" height="30" />
    <rect x="17" y="0" width="2" height="30" />
    <rect x="21" y="0" width="5" height="30" />
    <rect x="28" y="0" width="1" height="30" />
    <rect x="31" y="0" width="3" height="30" />
    <rect x="36" y="0" width="2" height="30" />
    <rect x="40" y="0" width="4" height="30" />
    <rect x="46" y="0" width="1" height="30" />
    <rect x="49" y="0" width="2" height="30" />
    <rect x="53" y="0" width="6" height="30" />
    <rect x="61" y="0" width="1" height="30" />
    <rect x="64" y="0" width="3" height="30" />
    <rect x="69" y="0" width="2" height="30" />
    <rect x="73" y="0" width="4" height="30" />
    <rect x="79" y="0" width="1" height="30" />
    <rect x="82" y="0" width="3" height="30" />
    <rect x="87" y="0" width="2" height="30" />
    <rect x="91" y="0" width="5" height="30" />
    <rect x="98" y="0" width="2" height="30" />
  </svg>
);

// Returns icon SVG path for each social type
const getSocialIconPath = (type: string) => {
  switch (type) {
    case 'linkedin':
      return (
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.77.62-1.4 1.39-1.4.76 0 1.11.56 1.11 1.4v4.67zM7.5 18.5v-8.37H4.7v8.37zm-1.4-9.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z" />
      );
    case 'github':
      return (
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      );
    case 'instagram':
      return (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      );
    case 'twitter':
      return (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      );
    case 'youtube':
      return (
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      );
    case 'website':
      return (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      );
    default:
      // Email
      return (
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6v12h16V6l-8 5z" />
      );
  }
};


// Individual social badge — icon circle + label
const SocialBadge = ({ type, url }: { type: string; url: string }) => {
  const href = type === 'email' && !url.startsWith('mailto:') ? `mailto:${url}` : url;

  return (
    <a
      href={href}
      target={type === 'email' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="group/social shrink-0 hover:opacity-80 transition-opacity duration-150"
    >
      {/* Circle icon badge */}
      <span className="w-6 h-6 rounded-full border-[1.5px] border-[#0e1713]/80 flex items-center justify-center bg-transparent group-hover/social:bg-[#0e1713] group-hover/social:border-[#0e1713] transition-all duration-200 shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
        <svg
          className="w-3.5 h-3.5 fill-current text-[#0e1713] group-hover/social:text-[#fafaf7] transition-colors duration-200"
          viewBox="0 0 24 24"
        >
          {getSocialIconPath(type)}
        </svg>
      </span>
    </a>
  );
};

export default function MemberCard({ member, teamColor = '#D4643B', teamName = 'WnCC' }: MemberCardProps) {
  // Parse name into two parts
  const nameParts = member.name.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Get initials for styled pop-art avatar fallback
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  // Role sidebar uppercase
  const verticalRole = member.role.toUpperCase();

  // Check if image is standard mock placeholder
  const isPlaceholder = !member.image || member.image.includes('placeholder');

  // Collect all available socials as ordered list
  const socialEntries: Array<{ type: string; url: string }> = [];
  if (member.socials.linkedin) socialEntries.push({ type: 'linkedin', url: member.socials.linkedin });
  if (member.socials.github) socialEntries.push({ type: 'github', url: member.socials.github });
  if (member.socials.email) socialEntries.push({ type: 'email', url: member.socials.email });
  if (member.socials.twitter) socialEntries.push({ type: 'twitter', url: member.socials.twitter });
  if (member.socials.website) socialEntries.push({ type: 'website', url: member.socials.website });
  // Limit to 3 for display
  const displaySocials = socialEntries.slice(0, 3);

  return (
    <div className="group relative w-full max-w-[325px] mx-auto aspect-[3/5] bg-[#fafaf7] text-[#0e1713] border-[3px] border-[#0e1713] rounded-2xl overflow-hidden shadow-[6px_6px_0px_#0e1713] hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_#0e1713] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] select-none">
      
      {/* 1. Waves Background Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] text-[#0e1713] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="seigaiha" width="40" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M0 24 C10 24, 15 12, 20 12 C25 12, 30 24, 40 24 M0 12 C10 12, 15 0, 20 0 C25 0, 30 12, 40 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>

      {/* Card Content Layout */}
      <div className="relative h-full flex flex-col justify-between p-4 z-10">
        
        {/* 2. Top Header Info */}
        <div className="flex items-center justify-between border-b border-[#0e1713]/25 pb-2">
          <div className="flex items-center gap-1.5">
            {/* WnCC mini bracket logo */}
            <div className="w-5 h-5 rounded-md bg-[#0e1713] text-[#fafaf7] flex items-center justify-center font-mono text-[9px] font-bold shadow-[1px_1px_0px_rgba(0,0,0,0.2)]">
              &lt;/&gt;
            </div>
            <div className="flex flex-col leading-[1.05]">
              <span className="font-display font-[800] text-[10px] tracking-tight uppercase">
                {teamName}
              </span>
              <span className="font-mono text-[6.5px] text-[#0e1713]/60 font-semibold tracking-wider">
                NIT PATNA CHAPTER
              </span>
            </div>
          </div>
          {/* Traffic dots */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: teamColor }}
            />
          </div>
        </div>

        {/* 3. Card Body: Sidebar & Picture Panel */}
        <div className="relative flex-grow my-3 flex gap-3 h-[60%] min-h-[220px]">
          
          {/* A. Vertical Role Sidebar */}
          <div className="w-9 bg-[#0e1713] rounded-lg border-2 border-[#0e1713] flex flex-col items-center justify-end py-3 text-white overflow-hidden shadow-[2px_2px_0px_rgba(0,0,0,0.15)] relative">
            {/* Textured lines inside role sidebar */}
            <div className="absolute top-0 inset-x-0 h-4 bg-yellow-300 border-b-2 border-[#0e1713]" />
            <div className="flex-grow flex items-center justify-center">
              <span
                className="font-mono text-[10px] font-[800] tracking-[0.22em] text-[#fafaf7] whitespace-nowrap select-none"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                }}
              >
                {verticalRole}
              </span>
            </div>
          </div>

          {/* B. Center Graphic / Photo Canvas */}
          <div className="flex-grow relative rounded-xl border-[2.5px] border-[#0e1713] overflow-visible shadow-[3px_3px_0px_rgba(14,23,19,0.15)]">
            {/* Dynamic solid background with subtle paint halftone or noise */}
            
            <div
              className="absolute inset-0 z-0 opacity-90 transition-colors duration-500"
              style={{ backgroundColor: teamColor }}
            >
              {/* Retro geometric canvas overlay lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_15%,transparent_16%)] bg-[length:6px_6px]" />
            </div>

            {/* CUTOUT PHOTO OR HIGH-FIDELITY AVATAR FALLBACK */}
            <div className="absolute inset-0 flex items-end justify-center z-10 overflow-visible rounded-sm">
              {isPlaceholder ? (
                // Super styled neo-brutalist pop art avatar
                <div className="w-full h-full flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300">
                  {/* Decorative big shadow initials */}
                  <span className="font-display font-[900] text-[6rem] text-black/10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none uppercase">
                    {initials}
                  </span>
                  
                  {/* Floating bubble for initials */}
                  <div
                    className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-[3px] border-[#0e1713] text-white font-display font-[900] text-3xl uppercase tracking-tighter shadow-[4px_4px_0px_#0e1713] rotate-[-4deg] scale-95 hover:rotate-3 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${teamColor}, #0e1713)`,
                    }}
                  >
                    <span className="drop-shadow-[1.5px_1.5px_0px_#000]">{initials}</span>
                    <span className="text-[9px] font-mono tracking-widest text-yellow-300 font-bold drop-shadow-[0.5px_0.5px_0px_#000] mt-0.5">
                      NITP
                    </span>
                  </div>
                </div>
              ) : (
                // Real Image
                <div className="absolute inset-0 flex items-end justify-center z-10 overflow-visible rounded-sm"
                  style={{ clipPath: 'polygon(0% -100%, 100% -100%, 100% 100%, 0% 100%)' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[90%] h-[95%] object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{
                    objectPosition: `${member.imagePosition?.x ?? 50}% ${member.imagePosition?.y ?? 30}%`,
                    transform: `translate(${member.imageTransform?.x || 0}px, ${member.imageTransform?.y || 0}px) scale(${member.imageTransform?.scale || 1})`,
                    filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(0 25px 25px rgba(0,0,0,0.5)) contrast(1.25)'
                  }}
                />
                </div>
              )}
            </div>

          </div>

          {/* 4. Interactive POP-ART Stickers — siblings to photo canvas, float above borders */}

          {/* A. Lightning Bolts (Top Left) — stacked with different angles */}
          <div className="absolute -top-4 left-[38px] z-20 flex gap-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 origin-top-left pointer-events-none">
            {/* Bolt 1 — large, tilted left */}
            <svg
              className="w-9 h-9 -rotate-[15deg]"
              style={{
                filter: `drop-shadow(2px 2px 0px #0e1713) drop-shadow(4px 4px 0px ${teamColor})`,
              }}
              viewBox="0 0 24 24"
              fill="#ffde00"
              stroke="#0e1713"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {/* Bolt 2 — smaller, tilted right, slight offset */}
            <svg
              className="w-6 h-6 rotate-[8deg] -ml-2 mt-2"
              style={{
                filter: `drop-shadow(1.5px 1.5px 0px #0e1713) drop-shadow(3px 3px 0px ${teamColor})`,
              }}
              viewBox="0 0 24 24"
              fill="#ffde00"
              stroke="#0e1713"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          {/* B. Starburst Exclamation (Top Right) — white starburst, yellow inner circle, black exclamation */}
          <div className="absolute -top-5 -right-3 z-20 group-hover:scale-110 group-hover:-rotate-10 transition-all duration-300 origin-top-right pointer-events-none">
            <svg
              className="w-16 h-16"
              style={{ filter: 'drop-shadow(2.5px 2.5px 0px rgba(14,23,19,0.9))' }}
              viewBox="0 0 100 100"
            >
              {/* 16-point starburst — white fill, thick black border */}
              <path
                d="M50 5 L55 22 L70 12 L65 28 L82 23 L76 38 L94 38 L83 50 L94 62 L76 62 L82 77 L65 72 L70 88 L55 78 L50 95 L45 78 L30 88 L35 72 L18 77 L24 62 L6 62 L17 50 L6 38 L24 38 L18 23 L35 28 L30 12 L45 22 Z"
                fill="white"
                stroke="#0e1713"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Inner yellow circle */}
              <circle
                cx="50"
                cy="50"
                r="22"
                fill="#ffde00"
                stroke="#0e1713"
                strokeWidth="3"
              />
              {/* Bold black exclamation mark — slightly tilted */}
              <g transform="translate(50,50) rotate(12) translate(-50,-50)">
                {/* Exclamation stem */}
                <rect
                  x="46"
                  y="30"
                  width="8"
                  height="24"
                  rx="4"
                  fill="#0e1713"
                />
                {/* Exclamation dot */}
                <circle
                  cx="50"
                  cy="64"
                  r="5"
                  fill="#0e1713"
                />
              </g>
            </svg>
          </div>

          {/* C. Cloud Lightbulb Sticker (Bottom Right) — yellow cloud with hand-drawn bulb */}
          <div className="absolute -bottom-5 -right-3.5 z-30 group-hover:scale-110 group-hover:-translate-x-1.5 transition-all duration-300 origin-bottom-right pointer-events-none">
            <svg
              className="w-16 h-16"
              style={{ filter: 'drop-shadow(3px 3px 0px rgba(14,23,19,0.9))' }}
              viewBox="0 0 100 100"
            >
              {/* Comic Cloud Shape — filled yellow */}
              <path
                d="M50 18 C58 18 63 23 66 28 C73 26 80 30 82 37 C88 40 90 48 87 55 C90 62 87 69 82 72 C80 79 73 83 66 81 C63 86 58 91 50 91 C42 91 37 86 34 81 C27 83 20 79 18 72 C12 69 10 62 13 55 C10 48 12 40 18 37 C20 30 27 26 34 28 C37 23 42 18 50 18 Z"
                fill="#ffde00"
                stroke="#0e1713"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              {/* Hand-drawn lightbulb inside the cloud */}
              <g transform="translate(0, 2)">
                {/* Bulb Dome */}
                <path
                  d="M50 28 c-9 0-15.5 7-15.5 15 c0 5.5 2.5 10 6.5 13 l1.5 7.5 h15 l1.5 -7.5 c4 -3 6.5 -7.5 6.5 -13 c0 -8 -6.5 -15 -15.5 -15 z"
                  fill="none"
                  stroke="#0e1713"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Filament arc */}
                <path
                  d="M44 41 a6 6 0 0 1 12 0"
                  fill="none"
                  stroke="#0e1713"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Base stripes */}
                <path
                  d="M42.5 63.5 h15 M44.5 68.5 h11 M47 73.5 h6"
                  fill="none"
                  stroke="#0e1713"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Glow rays */}
                <path
                  d="M25 30 l5 5 M75 30 l-5 5 M22 44 h6 M78 44 h-6 M28 60 l5 -5 M72 60 l-5 -5"
                  fill="none"
                  stroke="#0e1713"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

        </div>

        {/* 5. Name Overlay Block */}
        <div className="relative z-20 -mt-6 mb-2 mr-1 flex flex-col font-display font-[900] leading-[0.9] select-none pl-[47px]">
          {/* Sparkle inline icon overlayed next to last name */}
          <div className="flex items-center gap-1.5">
            <span
              className="text-[1.8rem] font-[900] text-white uppercase tracking-tight select-none"
              style={{
                textShadow:
                  '-2.5px -2.5px 0 #0e1713, 2.5px -2.5px 0 #0e1713, -2.5px 2.5px 0 #0e1713, 2.5px 2.5px 0 #0e1713, 4px 4px 0px #0e1713',
              }}
            >
              {firstName}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <SparkleIcon />
            <span
              className="text-[1.8rem] font-[900] text-white uppercase tracking-tight select-none"
              style={{
                textShadow:
                  '-2.5px -2.5px 0 #0e1713, 2.5px -2.5px 0 #0e1713, -2.5px 2.5px 0 #0e1713, 2.5px 2.5px 0 #0e1713, 4px 4px 0px #0e1713',
              }}
            >
              {lastName}
            </span>
          </div>
        </div>

        {/* 6. Footer Layout */}
        <div className="border-t-[2.5px] border-[#0e1713] pt-2 mt-1 flex flex-col gap-2">
          {/* Barcode & Period */}
          <div className="flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-1">
              <Barcode />
              {/* Expand technical arrow graphic */}
              <svg className="w-3.5 h-3.5 text-[#0e1713]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
            <div className="flex flex-col items-end leading-[1.1]">
              <span className="font-mono text-[7px] font-[800] tracking-wider text-[#0e1713]/55 uppercase">
                MEMBERSHIP TERM
              </span>
              <span className="font-mono text-[9px] font-[900] tracking-tight text-[#0e1713]">
                PERIODE 2025/2026
              </span>
            </div>
          </div>

          {/* 7. Bottom Social Accent Bar */}
          <div
            className="h-9 -mx-4 -mb-4 flex items-center relative overflow-hidden"
            style={{ backgroundColor: teamColor }}
          >
            {/* ── Golden quarter-circle arc in bottom-left corner ── */}
            {/* Sized to exactly fill the bar height (h-9 = 36px → w-9 h-9) */}
            <div className="absolute bottom-0 left-0 w-9 h-9 bg-[#ffde00] rounded-tr-full z-10 flex-shrink-0" />

            {/* Subtle inner shadow overlay to give depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10" />

            {/* Social badges row — centred with left offset to clear the arc */}
            <div className="relative z-20 flex items-center justify-center w-full pl-10 pr-3 gap-3">
              {displaySocials.map(({ type, url }) => (
                <SocialBadge key={type} type={type} url={url} />
              ))}
              {displaySocials.length === 0 && (
                <span className="text-[8px] font-bold text-white/50 italic tracking-wide">
                  no links
                </span>
              )}
            </div>

            {/* Mini crosshair decorative dot — bottom right */}
            <div className="absolute right-2 bottom-1.5 w-3 h-3 rounded-full border border-white/30 flex items-center justify-center pointer-events-none opacity-40 z-20">
              <span className="w-1 h-1 rounded-full bg-white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
