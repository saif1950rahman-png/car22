import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

interface ReviewsSectionProps {
  onBookClick?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onBookClick }) => {
  const reviews = [
    {
      id: 'review-01',
      number: 'REVIEW 01',
      quote:
        'Honestly, my car looks better than it did when I bought it. They took their time, paid attention to every little detail, and made the whole process super easy.',
      author: 'Jake Morrison',
    },
    {
      id: 'review-02',
      number: 'REVIEW 02',
      quote:
        'Having someone come right to my driveway made everything so much easier. The interior looks amazing, the outside is spotless, and I\'ll definitely be booking again.',
      author: 'Ryan Mitchell',
    },
    {
      id: 'review-03',
      number: 'REVIEW 03',
      quote:
        'Great experience from start to finish. Easy to book, friendly service, and my car came out looking incredible. Definitely worth it.',
      author: 'Ashley Bennett',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#171C19] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            REAL WORDS FROM CAR OWNERS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-5">
            Don't Just Take Our Word For It.
          </h2>
          <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
            We're all about making car care easier and leaving every vehicle looking its best.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#202722] border border-[#343D36] rounded-sm flex flex-col justify-between relative hover:border-[#B6D5B0]/50 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#B6D5B0]">
                    {item.number}
                  </span>
                  <Quote className="w-6 h-6 text-[#B6D5B0]/40" />
                </div>
                <p className="font-heading text-lg sm:text-xl text-[#F4F5F1] italic font-medium leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#343D36]/80 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#A5ADA6] block uppercase tracking-wider mb-0.5">
                    Verified Customer
                  </span>
                  <span className="font-heading text-base font-bold text-[#F4F5F1]">
                    {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="p-8 sm:p-10 bg-[#202722] border border-[#343D36] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#B6D5B0] uppercase block mb-1">
              READY FOR A SHOWROOM FINISH?
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F1]">
              YOUR CAR COULD BE NEXT.
            </h3>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] active:scale-[0.98] rounded-sm transition-all cursor-pointer shadow-md shadow-[#B6D5B0]/15 shrink-0"
          >
            <span>BOOK YOUR DETAIL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
