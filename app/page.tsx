import React from 'react';
import LoadingScreen from '@/components/landing/LoadingScreen';
import SentinelHero from '@/components/landing/SentinelHero';
import StoryScrollDemo from '@/components/landing/StoryScrollDemo';
import TeamsCarousel from '@/components/landing/TeamsCarousel';
import PIPresidentSection from '@/components/landing/PIPresidentSection';
import BentoGrid from '@/components/landing/BentoGrid';
import GalleryPreview from '@/components/landing/GalleryPreview';
import RecentEvents from '@/components/landing/RecentEvents';
import FaqSection from '@/components/landing/FaqSection';
import ContactForm from '@/components/landing/ContactForm';

function SectionWrapper({ children, textureUrl }: { children: React.ReactNode, textureUrl: string }) {
  return (
    <div className="relative w-full">
      {/* The component */}
      {children}
      {/* The grunge overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('${textureUrl}')`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <SentinelHero />
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_2_1779981294962.png">
        <StoryScrollDemo />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_3_1779981313259.png">
        <TeamsCarousel />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_4_1779981332543.png">
        <PIPresidentSection />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_5_1779981354268.png">
        <BentoGrid />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_6_1779981369672.png">
        <GalleryPreview />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_7_1779981388104.png">
        <RecentEvents />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_8_1779981404821.png">
        <FaqSection />
      </SectionWrapper>
      <hr className="section-divider" />
      
      <SectionWrapper textureUrl="/images/bg/bg_grunge_9_1779981419534.png">
        <ContactForm />
      </SectionWrapper>
    </main>
  );
}
