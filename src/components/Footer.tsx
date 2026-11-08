import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101312] border-t border-[#343D36] text-[#A5ADA6] text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex flex-col leading-none tracking-tight">
              <span className="font-heading font-bold text-2xl tracking-wider text-[#F4F5F1]">
                VELOCITY
              </span>
              <span className="text-[11px] font-medium tracking-[0.22em] text-[#A5ADA6] uppercase">
                Auto Detailing
              </span>
            </a>

            <p className="text-base text-[#F4F5F1] font-medium pt-1">
              "Your Drive Deserves Better."
            </p>

            <p className="text-xs sm:text-sm text-[#A5ADA6] leading-relaxed max-w-sm">
              Professional mobile detailing focused on quality, convenience, and the details that make the difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['Home', 'Services', 'Our Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#F4F5F1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                'Interior Detailing',
                'Exterior Detailing',
                'Full Detail',
                'Ceramic Coating',
              ].map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(service);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#B6D5B0] transition-colors text-left cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#A5ADA6]">
              <p>
                <a href="tel:5550198356" className="hover:text-[#F4F5F1] transition-colors">
                  [Business Phone]
                </a>
              </p>
              <p>
                <a href="mailto:contact@velocitydetailing.com" className="hover:text-[#F4F5F1] transition-colors">
                  [Business Email]
                </a>
              </p>
              <p>[Service Area]</p>
            </div>

            <div className="pt-2">
              <h5 className="font-heading text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase mb-2">
                Follow Us
              </h5>
              <div className="flex items-center gap-4 text-xs">
                <a
                  href="#instagram"
                  className="hover:text-[#B6D5B0] transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Instagram
                </a>
                <span className="text-[#343D36]">·</span>
                <a
                  href="#facebook"
                  className="hover:text-[#B6D5B0] transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#343D36] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#A5ADA6]">
            © 2026 Velocity Auto Detailing. All rights reserved.
          </p>

          <p className="text-[#A5ADA6] font-medium">
            Designed for those who appreciate the details.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#A5ADA6] hover:text-[#B6D5B0] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
