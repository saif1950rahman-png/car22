import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onExploreService: (service: ServiceItem) => void;
  onHelpMeChoose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onExploreService,
  onHelpMeChoose,
  onBookService,
}) => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#171C19] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            WHAT WE DO
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-5">
            Every Detail.<br />
            <span className="text-[#B6D5B0]">Done With Purpose.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
            Whether your car needs a quick refresh or a full makeover, we have a service to help bring it back to its best.
          </p>
        </div>

        {/* 4 Asymmetric, Non-Identical Service Presentations */}
        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Showcase Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-sm border border-[#343D36] bg-[#202722]">
                    <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - Velocity Auto Detailing`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Corner Accent Label */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#101312]/90 backdrop-blur-sm border border-[#343D36] text-[11px] font-mono tracking-wider text-[#B6D5B0]">
                      SERVICE {service.number}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono font-medium text-[#A5ADA6] tracking-wider uppercase block mb-1">
                        Package {service.number}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F1] tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[#A5ADA6] text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Included Features List */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase block mb-3">
                        Included:
                      </span>
                      <ul className="space-y-2.5">
                        {service.included.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-xs sm:text-sm text-[#F4F5F1]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B6D5B0] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onExploreService(service)}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all cursor-pointer shadow-sm shadow-[#B6D5B0]/15"
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onBookService(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#F4F5F1] hover:text-[#B6D5B0] border border-[#343D36] hover:border-[#B6D5B0]/50 rounded-sm bg-[#101312] transition-colors cursor-pointer"
                      >
                        <span>Book Package</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below the Services - Help Me Choose Callout */}
        <div className="mt-20 lg:mt-28 p-8 sm:p-10 lg:p-12 bg-[#202722] border border-[#343D36] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B6D5B0] uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Not sure what your car needs?</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F4F5F1]">
              Let's find the right service for you.
            </h3>
            <p className="text-sm text-[#A5ADA6] mt-1">
              Answer 3 quick questions about your vehicle condition and get an instant recommendation.
            </p>
          </div>

          <button
            type="button"
            onClick={onHelpMeChoose}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <span>HELP ME CHOOSE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
