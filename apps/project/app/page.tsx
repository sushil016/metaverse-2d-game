import HeroSection from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import CommunitySection from '@/components/landing/community-section';
import Navbar from '@/components/landing/navbar';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Testimonials } from '@/components/landing/testimonials';
import { ContactForm } from '@/components/landing/contsct-form';
import { PricingSection } from '@/components/landing/pricing-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <ContactForm />
      <CommunitySection />
      <Footer />
    </main>
  );
}