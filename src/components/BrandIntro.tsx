import React from 'react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#101312] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Subtle Section Kicker */}
        <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          THE VELOCITY STANDARD
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Headline Side */}
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight">
              Your Vehicle.<br />
              <span className="text-[#B6D5B0]">Our Obsession.</span>
            </h2>
            <div className="mt-8 hidden lg:block w-16 h-[2px] bg-[#343D36]" />
          </div>

          {/* Description & Mission Side */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <p className="text-lg sm:text-xl text-[#F4F5F1] font-normal leading-relaxed">
              A proper detail is about more than making a car look clean. It's about bringing back the shine, caring for every surface, and looking after the little things that make a difference.
            </p>
            <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
              We bring the tools, products, and passion straight to you, so your vehicle gets the care it deserves.
            </p>

            {/* Editorial Brand Pillars */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#343D36]">
              <div>
                <span className="block font-heading text-2xl font-bold text-[#F4F5F1] mb-1">
                  At Your Location
                </span>
                <span className="text-sm text-[#A5ADA6]">
                  Complete on-site water & power self-sufficiency for residential driveways and office suites.
                </span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-[#F4F5F1] mb-1">
                  Bespoke Formulations
                </span>
                <span className="text-sm text-[#A5ADA6]">
                  pH-neutral soaps, dedicated leather conditioners, and silica-infused sealants.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
