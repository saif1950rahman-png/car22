import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#101312] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            SIMPLE FROM START TO FINISH
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-5">
            Professional Detailing.<br />
            <span className="text-[#B6D5B0]">Made Easy.</span>
          </h2>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Continuous Line across steps for Desktop */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[1.5px] bg-[#343D36] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col p-6 sm:p-7 bg-[#171C19] border border-[#343D36] rounded-sm hover:border-[#B6D5B0]/50 transition-colors"
              >
                {/* Step Marker Badge */}
                <div className="w-11 h-11 rounded-sm bg-[#202722] border border-[#343D36] flex items-center justify-center font-mono font-bold text-sm text-[#B6D5B0] mb-6 shrink-0">
                  {step.number}
                </div>

                <div className="text-xs font-mono text-[#A5ADA6] uppercase tracking-wider mb-1">
                  Step {idx + 1}
                </div>

                <h3 className="font-heading text-xl font-bold text-[#F4F5F1] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A5ADA6] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
