import React, { useState } from 'react';
import { X, Check, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

interface ServiceFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceFinderModal: React.FC<ServiceFinderModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [step, setStep] = useState(1);
  const [focusArea, setFocusArea] = useState<string>('');
  const [lastDetail, setLastDetail] = useState<string>('');
  const [vehicleUsage, setVehicleUsage] = useState<string>('');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setFocusArea('');
    setLastDetail('');
    setVehicleUsage('');
  };

  // Determine recommendation based on choices
  const getRecommendation = () => {
    if (focusArea === 'protection') {
      return {
        title: 'Ceramic Coating',
        reason: 'Since long-term protection, high-gloss shine, and ease of washing are your main priorities, our Ceramic Coating service provides durable ceramic bonding for multi-year defense.',
      };
    }
    if (focusArea === 'cabin') {
      return {
        title: 'Interior Detailing',
        reason: 'Your primary focus is the passenger cabin. Our Interior Detailing includes deep carpet shampoo, seat extraction, leather conditioning, and thorough vent sanitation.',
      };
    }
    if (focusArea === 'body' && (lastDetail === 'recent' || vehicleUsage === 'occasional')) {
      return {
        title: 'Exterior Detailing',
        reason: 'Your interior is in good shape and your vehicle just needs a safe two-bucket hand wash, rim decontamination, and exterior paint shine enhancement.',
      };
    }
    return {
      title: 'Full Detail',
      reason: 'For cars with both interior usage and road grime, or if it has been several months since the last service, our Full Detail gives you complete cabin restoration and exterior gloss rejuvenation.',
    };
  };

  const recommendation = getRecommendation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#171C19] border border-[#343D36] rounded-sm p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#343D36] mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#B6D5B0]" />
            <h3 className="font-heading text-xl font-bold text-[#F4F5F1]">
              Service Recommendation Quiz
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A5ADA6] hover:text-[#F4F5F1] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs text-[#B6D5B0] font-semibold tracking-wider uppercase block mb-1">
                Question 1 of 3
              </span>
              <h4 className="font-heading text-lg font-semibold text-[#F4F5F1]">
                Which area of your vehicle needs the most attention?
              </h4>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'both', label: 'Complete overhaul — both inside and outside are dirty' },
                { id: 'cabin', label: 'The cabin interior — seats, carpets, dust, or pet hair' },
                { id: 'body', label: 'Exterior only — washing paint, wheels, and glass' },
                { id: 'protection', label: 'Long-term paint protection — ceramic coating & extreme water beading' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setFocusArea(item.id);
                    setStep(2);
                  }}
                  className={`w-full text-left p-4 rounded-sm border transition-all text-sm font-medium flex items-center justify-between ${
                    focusArea === item.id
                      ? 'bg-[#202722] border-[#B6D5B0] text-[#F4F5F1]'
                      : 'bg-[#101312] border-[#343D36] text-[#A5ADA6] hover:border-[#B6D5B0]/50 hover:text-[#F4F5F1]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#B6D5B0]">Select →</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs text-[#B6D5B0] font-semibold tracking-wider uppercase block mb-1">
                Question 2 of 3
              </span>
              <h4 className="font-heading text-lg font-semibold text-[#F4F5F1]">
                When was the vehicle last professionally detailed?
              </h4>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'recent', label: 'Within the last 1–2 months' },
                { id: 'medium', label: '3 to 6 months ago' },
                { id: 'long', label: 'Over 6 months ago or never' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setLastDetail(item.id);
                    setStep(3);
                  }}
                  className="w-full text-left p-4 rounded-sm border border-[#343D36] hover:border-[#B6D5B0]/50 bg-[#101312] hover:bg-[#202722] transition-all text-sm font-medium text-[#A5ADA6] hover:text-[#F4F5F1] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#B6D5B0]">Select →</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-[#A5ADA6] hover:text-[#F4F5F1] underline"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs text-[#B6D5B0] font-semibold tracking-wider uppercase block mb-1">
                Question 3 of 3
              </span>
              <h4 className="font-heading text-lg font-semibold text-[#F4F5F1]">
                How is the vehicle typically used?
              </h4>
            </div>

            <div className="space-y-2.5">
              {[
                { id: 'daily', label: 'Daily commuter / family vehicle (school, road trips, groceries)' },
                { id: 'enthusiast', label: 'Enthusiast / luxury car (garaged, cared for, weekend drives)' },
                { id: 'work', label: 'Work vehicle / outdoor recreation (utility, pets, hauling)' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setVehicleUsage(item.id);
                    setStep(4);
                  }}
                  className="w-full text-left p-4 rounded-sm border border-[#343D36] hover:border-[#B6D5B0]/50 bg-[#101312] hover:bg-[#202722] transition-all text-sm font-medium text-[#A5ADA6] hover:text-[#F4F5F1] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#B6D5B0]">Complete →</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-[#A5ADA6] hover:text-[#F4F5F1] underline"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Recommendation Result */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="p-5 bg-[#202722] border border-[#B6D5B0]/40 rounded-sm">
              <span className="text-xs font-semibold tracking-wider text-[#B6D5B0] uppercase block mb-1">
                Recommended Service For You
              </span>
              <h4 className="font-heading text-2xl font-bold text-[#F4F5F1] mb-2">
                {recommendation.title}
              </h4>
              <p className="text-sm text-[#A5ADA6] leading-relaxed">
                {recommendation.reason}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onSelectService(recommendation.title);
                  onClose();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-all cursor-pointer"
              >
                <span>Select & Book {recommendation.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-[#A5ADA6] hover:text-[#F4F5F1] border border-[#343D36] rounded-sm hover:bg-[#202722] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
