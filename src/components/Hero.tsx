import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { IMAGES } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-end pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Cinematic BMW M4 Competition */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Black BMW M4 Competition parked outside luxury residence after professional mobile detailing"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim & Subtle Overlays for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101312] via-[#101312]/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101312]/90 via-[#101312]/40 to-transparent max-w-4xl" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Small Heading / Kicker */}
          <div className="flex items-center gap-2 mb-4 text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase">
            <span>PREMIUM MOBILE AUTO DETAILING</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#F4F5F1] leading-[1.08] tracking-tight mb-6 text-balance">
            More Than Clean.<br />
            <span className="text-[#B6D5B0]">It's a Different Kind of Shine.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed mb-8 max-w-xl">
            From everyday cars to your favorite ride, we bring professional detailing right to your doorstep. Get that fresh, clean look without leaving home.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] rounded-sm hover:bg-[#D9E4D5] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#B6D5B0]/15"
            >
              <span>BOOK YOUR DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F4F5F1] bg-[#171C19]/80 hover:bg-[#202722] border border-[#343D36] rounded-sm hover:border-[#B6D5B0]/50 transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>EXPLORE OUR SERVICES</span>
            </button>
          </div>

          {/* Three Small Features - Clean Unboxed Text with Subtle Dividers */}
          <div className="pt-6 border-t border-[#343D36]/70 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-[#F4F5F1]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#171C19] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <span className="font-medium">100% Mobile Service</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#171C19] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-medium">Professional Products</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#171C19] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-medium">Care in Every Detail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
