import React from 'react';
import { X, CheckCircle2, Clock, Car, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#171C19] border border-[#343D36] rounded-sm overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171C19] via-[#171C19]/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#101312]/80 hover:bg-[#101312] border border-[#343D36] rounded-sm text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#B6D5B0] uppercase block mb-1">
              Service {service.number}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F5F1]">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-[#A5ADA6] text-base leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-[#343D36]">
            <div className="flex items-center gap-3 text-sm text-[#F4F5F1]">
              <Clock className="w-4 h-4 text-[#B6D5B0] shrink-0" />
              <div>
                <span className="text-xs text-[#A5ADA6] block">Estimated Time</span>
                <span className="font-medium">{service.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F4F5F1]">
              <Car className="w-4 h-4 text-[#B6D5B0] shrink-0" />
              <div>
                <span className="text-xs text-[#A5ADA6] block">Vehicle Suitability</span>
                <span className="font-medium">All Makes & Models</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-[#F4F5F1] uppercase mb-3">
              What Is Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#F4F5F1]">
                  <CheckCircle2 className="w-4 h-4 text-[#B6D5B0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#202722] border border-[#343D36] rounded-sm text-xs text-[#A5ADA6] leading-relaxed">
            <span className="font-semibold text-[#F4F5F1] block mb-1">Ideal For:</span>
            {service.idealFor}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#101312] border-t border-[#343D36] flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#A5ADA6] hover:text-[#F4F5F1] transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectForBooking(service.title);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all cursor-pointer"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
