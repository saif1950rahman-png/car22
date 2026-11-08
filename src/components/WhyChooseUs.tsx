import React from 'react';
import { IMAGES, WHY_CHOOSE_POINTS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#101312] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            WHY VELOCITY
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-5">
            Because the Little Things Matter.
          </h2>
          <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
            We don't rush through a detail. Every car gets our full attention, from the first wash to the final touch.
          </p>
        </div>

        {/* Split Layout: Image on Left/Top, 4 Benefits Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Detailer Polishing BMW M4 */}
          <div className="lg:col-span-6 sticky lg:top-28">
            <div className="relative rounded-sm overflow-hidden border border-[#343D36] bg-[#202722] shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/12] overflow-hidden">
                <img
                  src={IMAGES.polishing}
                  alt="Professional automotive detailer meticulously polishing black BMW M4 with dual action machine"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-[#171C19] border-t border-[#343D36]">
                <div className="flex items-center justify-between text-xs text-[#A5ADA6]">
                  <span className="font-medium text-[#F4F5F1]">High-Intensity Inspection Lighting</span>
                  <span className="font-mono text-[#B6D5B0]">Paint Correction Grade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Four Distinct Benefits */}
          <div className="lg:col-span-6 space-y-8">
            {WHY_CHOOSE_POINTS.map((point) => (
              <div
                key={point.number}
                className="p-6 sm:p-7 bg-[#171C19] border border-[#343D36] rounded-sm hover:border-[#B6D5B0]/40 transition-colors"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-xs font-bold text-[#B6D5B0]">
                    {point.number}
                  </span>
                  <div className="w-6 h-[1px] bg-[#343D36]" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F4F5F1] tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#A5ADA6] leading-relaxed pl-10">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
