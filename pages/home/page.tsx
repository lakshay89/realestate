
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { VideoFormSection } from './components/VideoFormSection';
import { AboutSection } from './components/AboutSection';
import { FloorPlansSection } from './components/FloorPlansSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CTASection } from './components/CTASection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ConnectivitySection } from './components/ConnectivitySection';
import { Footer } from './components/Footer';
import { StickyContact } from './components/StickyContact';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <VideoFormSection />
      <AboutSection />
      <FloorPlansSection />
      <AmenitiesSection />
      <CTASection />
      <PricingSection />
      <GallerySection />
      <ConnectivitySection />
      <LocationSection />
      <Footer />
      <StickyContact />
    </div>
  );
}
