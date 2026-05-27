import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ComplianceSection } from '@/components/ComplianceSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <ProjectsSection />
        <GallerySection />
        <TestimonialsSection />
        <ComplianceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
