import HeroSection from '@/components/landing/HeroSection';
import TeamsCarousel from '@/components/landing/TeamsCarousel';
import PIPresidentSection from '@/components/landing/PIPresidentSection';
import BentoGrid from '@/components/landing/BentoGrid';
import GalleryPreview from '@/components/landing/GalleryPreview';
import RecentEvents from '@/components/landing/RecentEvents';
import TeamsOverview from '@/components/landing/TeamsOverview';
import FaqSection from '@/components/landing/FaqSection';
import ContactForm from '@/components/landing/ContactForm';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamsCarousel />
      <hr className="section-divider" />
      <PIPresidentSection />
      <hr className="section-divider" />
      <BentoGrid />
      <hr className="section-divider" />
      <GalleryPreview />
      <hr className="section-divider" />
      <RecentEvents />
      <hr className="section-divider" />
      <TeamsOverview />
      <hr className="section-divider" />
      <FaqSection />
      <hr className="section-divider" />
      <ContactForm />
    </main>
  );
}
