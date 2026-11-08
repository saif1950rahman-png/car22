import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { ServiceFinderModal } from './components/ServiceFinderModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { FinalCTA } from './components/FinalCTA';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101312] text-[#F4F5F1] selection:bg-[#B6D5B0] selection:text-[#101312]">
      {/* 1. Navigation Bar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* 2. Hero Section */}
      <main>
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreClick={scrollToServices}
        />

        {/* 3. Brand Introduction: The Velocity Standard */}
        <BrandIntro />

        {/* 4. Services Section */}
        <ServicesSection
          onExploreService={(svc) => setSelectedServiceForModal(svc)}
          onHelpMeChoose={() => setIsFinderOpen(true)}
          onBookService={(svcTitle) => scrollToBooking(svcTitle)}
        />

        {/* 5. Why Choose Velocity */}
        <WhyChooseUs />

        {/* 6. Our Work - Gallery */}
        <GallerySection onBookClick={() => scrollToBooking()} />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Customer Reviews */}
        <ReviewsSection onBookClick={() => scrollToBooking()} />

        {/* 9. Final Call to Action */}
        <FinalCTA
          onBookClick={() => scrollToBooking()}
          onContactClick={() => scrollToBooking()}
        />

        {/* 10. Booking and Contact */}
        <BookingSection initialService={selectedServiceForBooking} />
      </main>

      {/* 11. Footer */}
      <Footer onSelectService={(svcTitle) => scrollToBooking(svcTitle)} />

      {/* Service Details Exploration Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onSelectForBooking={(svcTitle) => scrollToBooking(svcTitle)}
      />

      {/* "Help Me Choose" Quiz Modal */}
      <ServiceFinderModal
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
        onSelectService={(svcTitle) => scrollToBooking(svcTitle)}
      />
    </div>
  );
}
