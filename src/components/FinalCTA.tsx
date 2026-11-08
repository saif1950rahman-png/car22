import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { IMAGES } from '../data/content';

interface FinalCTAProps {
  onBookClick: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick, onContactClick }) => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden border-b border-[#343D36]">
      {/* Background Mercedes-AMG GT in driveway during golden-hour sunset */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ctaSunset}
          alt="Black Mercedes-AMG GT in a modern residence driveway during golden-hour sunset"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for high contrast typography */}
        <div className="absolute inset-0 bg-[#101312]/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101312] via-transparent to-[#101312]/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        <span className="text-[#B6D5B0] text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">
          AT YOUR DRIVEWAY OR OFFICE
        </span>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F5F1] leading-[1.08] tracking-tight mb-6 max-w-3xl">
          Ready To See Your Car Differently?
        </h2>

        <p className="text-base sm:text-xl text-[#F4F5F1]/90 font-normal leading-relaxed mb-10 max-w-2xl">
          Your car deserves a little extra care. Let us bring the detailing experience straight to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] active:scale-[0.98] rounded-sm transition-all cursor-pointer shadow-xl shadow-[#B6D5B0]/20"
          >
            <span>BOOK YOUR DETAIL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#B6D5B0]" />
            <span>HAVE A QUESTION? GET IN TOUCH.</span>
          </button>
        </div>
      </div>
    </section>
  );
};
