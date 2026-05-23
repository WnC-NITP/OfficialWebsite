'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import { PI_PROFILE, PRESIDENT_PROFILE } from '@/lib/constants';


function LeadershipHeader() {
  return (
    <div className="text-center py-10">

      {/* Main Heading (reduced size) */}
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "#D9A84E" }}
      >
        Our Leadership
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        Visionaries driving innovation, collaboration, and technical excellence at WnCC
      </p>

    </div>
  );
}




function LeadershipPanel({
  profile,
  titleWord,
  tags,
}: {
  profile: typeof PI_PROFILE;
  titleWord: string;
  tags: string[];
}) {
  return (
    <div className="hero-reveal relative overflow-hidden rounded-[34px] border border-[#d9a84e33] bg-gradient-to-br from-[#1a1a1a] to-[#111111] min-h-[720px] px-8 lg:px-16 py-10">

      {/* TOP CATEGORY STRIP */}
      <div className="relative z-30 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#d9a84e]/80 border border-[#d9a84e33] rounded-full px-6 py-3 w-fit bg-black/20 backdrop-blur-md">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-3">
            <span>{tag}</span>
            {index !== tags.length - 1 && <span>•</span>}
          </div>
        ))}
      </div>

      {/* TOP INFO */}
      <div className="relative z-20 mt-10 flex justify-between items-start gap-8">

        {/* LEFT */}
        <div className="max-w-md">
          <h3 className="text-[#d9a84e] text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            {profile.name}
          </h3>

          <p className="text-white/80 text-lg mt-2">
            {profile.designation}
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-right max-w-sm hidden md:block">
          <p className="text-white/70 text-lg leading-relaxed">
            Empowering innovation and building a culture of creativity through technology.
          </p>
        </div>
      </div>

      {/* HUGE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[120px] md:text-[220px] lg:text-[280px] font-black tracking-tight text-[#d9a84e]/10 leading-none select-none">
          {titleWord}
        </h1>
      </div>

      {/* IMAGE */}
      <div className="absolute inset-0 flex justify-center items-center z-10">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-[#d9a84e]/20 blur-3xl rounded-full scale-110" />

          <Image
            src={profile.image}
            alt={profile.name}
            width={480}
            height={680}
            className="relative z-10 h-[560px] w-auto object-cover object-top mt-16"
            priority
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-10 left-8 lg:left-16 right-8 lg:right-16 z-20 flex flex-col lg:flex-row justify-between items-end gap-10">

        {/* SOCIALS */}
        <div className="flex gap-5 text-sm text-white/70 flex-wrap">

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d9a84e]" />
            <span>WnCC NIT Patna</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d9a84e]" />
            <span>@wncc_nitp</span>
          </div>
        </div>

        {/* QUOTE */}
        <div className="max-w-2xl text-right">
          <p className="text-white/65 leading-relaxed text-sm md:text-base italic">
            “{profile.quote}”
          </p>
        </div>
      </div>

      {/* CORNER GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d9a84e]/10 blur-3xl rounded-full" />
    </div>
  );
}

export default function PIPresidentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.hero-reveal', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="px-6 lg:px-10 py-20 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        <LeadershipHeader />
        {/* PI SECTION */}
        <LeadershipPanel
          profile={PI_PROFILE}
          titleWord="MENTOR"
          tags={[
            'Research',
            'Guidance',
            'Innovation',
            'Mentorship',
            'Technology',
          ]}
        />

        {/* PRESIDENT SECTION */}
        <LeadershipPanel
          profile={PRESIDENT_PROFILE}
          titleWord="LEADER"
          tags={[
            'Innovation',
            'Leadership',
            'Web Development',
            'Open Source',
            'Community',
          ]}
        />
      </div>
    </section>
  );
}