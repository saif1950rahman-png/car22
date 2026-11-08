import React, { useState } from 'react';
import { Maximize2, X, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onBookClick: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookClick }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'exterior' | 'ceramic'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-[#171C19] border-b border-[#343D36]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              THE TRANSFORMATION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-4">
              See The Difference.
            </h2>
            <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
              A clean interior, glossy paint, and spotless wheels. Take a look at what a little extra care can do.
            </p>
          </div>

          {/* Interactive Category Filter Controls (Functional Button Elements) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#101312] border border-[#343D36] rounded-sm shrink-0">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'interior', label: 'Interior' },
              { id: 'exterior', label: 'Exterior' },
              { id: 'ceramic', label: 'Ceramic Coating' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#B6D5B0] text-[#101312] font-semibold'
                    : 'text-[#A5ADA6] hover:text-[#F4F5F1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Varied Asymmetric Card Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // First item spans 2 columns on larger screens for editorial rhythm
            const isFeatured = index === 0 && activeFilter === 'all';

            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className={`group relative overflow-hidden rounded-sm border border-[#343D36] bg-[#202722] cursor-pointer ${
                  isFeatured ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101312] via-[#101312]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between">
                  <div className="max-w-md">
                    <span className="text-[11px] font-mono tracking-wider text-[#B6D5B0] uppercase block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F4F5F1]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A5ADA6] line-clamp-1 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-sm bg-[#171C19]/90 border border-[#343D36] flex items-center justify-center text-[#B6D5B0] group-hover:bg-[#B6D5B0] group-hover:text-[#101312] transition-colors shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Explicit Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#343D36] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#A5ADA6] max-w-xl">
            * Photography illustrates our detailing craftsmanship standards, automotive vehicle targets (BMW & Mercedes-Benz), and surface finishes. Individual vehicle outcomes reflect paint condition and package selection.
          </p>

          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>VIEW OUR WORK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171C19] border border-[#343D36] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full max-h-[75vh] overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain bg-black"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-2 bg-[#101312]/80 hover:bg-[#101312] border border-[#343D36] rounded-sm text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#171C19] border-t border-[#343D36] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#B6D5B0] uppercase block mb-1">
                  {activePhoto.categoryLabel}
                </span>
                <h4 className="font-heading text-xl font-bold text-[#F4F5F1]">
                  {activePhoto.title}
                </h4>
                <p className="text-sm text-[#A5ADA6] mt-1">
                  {activePhoto.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActivePhoto(null);
                  onBookClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
              >
                <span>Book This Treatment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
