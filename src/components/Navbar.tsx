import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101312]/95 backdrop-blur-md border-b border-[#343D36] py-3.5 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="group flex flex-col leading-none tracking-tight whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6D5B0]"
        >
          <span className="font-heading font-bold text-xl sm:text-2xl tracking-wider text-[#F4F5F1] group-hover:text-[#B6D5B0] transition-colors">
            VELOCITY
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#A5ADA6] uppercase">
            Auto Detailing
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A5ADA6]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F4F5F1] transition-colors py-1 relative whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B6D5B0] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookClick}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] rounded-sm hover:bg-[#D9E4D5] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-[#B6D5B0]/20"
          >
            <span>Book Your Detail</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-[#F4F5F1] hover:text-[#B6D5B0] hover:bg-[#171C19] border border-[#343D36] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171C19] border-b border-[#343D36] px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col divide-y divide-[#343D36]/60">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-base font-medium text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#A5ADA6]">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#343D36] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] rounded-sm hover:bg-[#D9E4D5] transition-all cursor-pointer"
              >
                <span>Book Your Detail</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="tel:5550198356"
                className="inline-flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#A5ADA6] hover:text-[#F4F5F1]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B6D5B0]" />
                <span>Call or Text: [Business Phone Number]</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
