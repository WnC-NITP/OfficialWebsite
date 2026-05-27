'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function StoryScrollDemo() {
  return (
    <FlowArt aria-label="WnCC Presentation">
      <FlowSection aria-label="Who we are" style={{ backgroundColor: '#D4643B', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Who we are</p>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <div>
          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Code
            <br />
            Without
            <br />
            Limits
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          The Web and Coding Club at NIT Patna is a community where students interested in web development and programming come together to learn, share knowledge, and work on real-world projects.
        </p>
      </FlowSection>

      <FlowSection aria-label="The mission" style={{ backgroundColor: '#050505', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — The mission</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Learn
            <br />
            Build
            <br />
            Share
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We foster learning and problem-solving, opening up a wide range of career opportunities. A supportive environment where beginners and experts code together without barriers.
        </p>
      </FlowSection>

      <FlowSection aria-label="What we do" style={{ backgroundColor: '#D9A84E', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — What we do</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Code.
            <br />
            Hack.
            <br />
            Ship.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Intense hackathons, hands-on workshops, and algorithmic challenges. We focus on various aspects of coding including web development, software engineering, and data science.
        </p>
      </FlowSection>

      <FlowSection aria-label="Why Join Us" style={{ backgroundColor: '#00D4FF', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Why Join Us</p>
        <hr className="my-[2vw] border-none border-t border-black/50" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Future
            <br />
            Proof
            <br />
            Skills
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/50" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Gain hands-on experience employers are looking for. Connect with alumni and peers who share your passion, and gain skills highly valued in future career pursuits.
        </p>
      </FlowSection>

      <FlowSection aria-label="Join us" style={{ backgroundColor: '#111214', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — Join us</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight text-white">
            Ready
            <br />
            To
            <br />
            Begin?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          {/* Take control of your coding journey. Sign up through our registration process, attend events, and actively participate in club activities. Let's shape the future together. */}
        </p>
      </FlowSection>
    </FlowArt>
  );
}
