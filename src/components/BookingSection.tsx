import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, AlertCircle, Info, Send } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    vehicleType: '',
    service: (initialService as any) || '',
    preferredDate: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Update service if prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService as any }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a valid phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Phone number should have at least 10 digits.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.vehicle.trim()) {
      errs.vehicle = 'Please specify your vehicle make & model.';
    }

    if (!formData.vehicleType) {
      errs.vehicleType = 'Please select a vehicle category.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service option.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    }

    if (!formData.address.trim()) {
      errs.address = 'Please provide your driveway or workplace service address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save submission locally for demonstration and display confirmation
    try {
      const existing = JSON.parse(localStorage.getItem('velocity_appointment_requests') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('velocity_appointment_requests', JSON.stringify(existing));
    } catch {
      // localStorage fallback
    }

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicle: '',
      vehicleType: '',
      service: '',
      preferredDate: '',
      address: '',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#101312]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-[#B6D5B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            LET'S GET YOU BOOKED
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F5F1] leading-[1.12] tracking-tight mb-5">
            Your Next Detail Starts Here.
          </h2>
          <p className="text-base sm:text-lg text-[#A5ADA6] font-normal leading-relaxed">
            Tell us a little about your car and what you need. We'll get in touch to confirm the details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#171C19] border border-[#343D36] rounded-sm space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#F4F5F1]">
                Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#202722] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADA6] block uppercase tracking-wider">Phone</span>
                    <a
                      href="tel:5550198356"
                      className="text-base font-semibold text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors"
                    >
                      [Business Phone Number]
                    </a>
                    <span className="text-xs text-[#A5ADA6] block mt-0.5">Direct line & SMS for quick quotes</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#202722] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADA6] block uppercase tracking-wider">Email</span>
                    <a
                      href="mailto:contact@velocitydetailing.com"
                      className="text-base font-semibold text-[#F4F5F1] hover:text-[#B6D5B0] transition-colors"
                    >
                      [Business Email]
                    </a>
                    <span className="text-xs text-[#A5ADA6] block mt-0.5">Inquiries & custom fleet estimates</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#202722] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADA6] block uppercase tracking-wider">Service Area</span>
                    <span className="text-base font-semibold text-[#F4F5F1] block">
                      [City and Surrounding Areas]
                    </span>
                    <span className="text-xs text-[#A5ADA6] block mt-0.5">Mobile van equipped with on-board water & power</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-[#202722] border border-[#343D36] flex items-center justify-center text-[#B6D5B0] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADA6] block uppercase tracking-wider">Business Hours</span>
                    <span className="text-base font-semibold text-[#F4F5F1] block">
                      [Business Hours]
                    </span>
                    <span className="text-xs text-[#A5ADA6] block mt-0.5">Mon – Sat by appointment only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Deployment Backend Notice */}
            <div className="p-5 bg-[#202722] border border-[#343D36] rounded-sm text-xs text-[#A5ADA6] space-y-2">
              <div className="flex items-center gap-2 text-[#B6D5B0] font-semibold uppercase tracking-wider">
                <Info className="w-4 h-4 shrink-0" />
                <span>Production Form Architecture</span>
              </div>
              <p className="leading-relaxed">
                This client form contains complete front-end field validation and stores submission state locally. When deploying for production, wire the form submission endpoint directly to your backend or CRM webhook (such as Housecall Pro, Jobber, Zapier, or a serverless email webhook).
              </p>
            </div>
          </div>

          {/* Booking Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#171C19] border border-[#343D36] rounded-sm shadow-2xl">
              <div className="border-b border-[#343D36] pb-6 mb-8">
                <span className="text-xs font-mono text-[#B6D5B0] uppercase tracking-wider block mb-1">
                  Schedule Service
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F4F5F1]">
                  REQUEST AN APPOINTMENT
                </h3>
              </div>

              {isSubmitted && submittedData ? (
                /* Success Confirmation State */
                <div className="space-y-6 py-4">
                  <div className="flex items-center gap-3 p-4 bg-[#202722] border border-[#B6D5B0]/40 rounded-sm text-[#F4F5F1]">
                    <CheckCircle2 className="w-6 h-6 text-[#B6D5B0] shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-lg text-[#F4F5F1]">
                        Appointment Request Received
                      </h4>
                      <p className="text-xs text-[#A5ADA6]">
                        We have logged your request. We'll contact you to confirm availability.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-[#101312] border border-[#343D36] rounded-sm text-sm space-y-3">
                    <span className="text-xs font-mono text-[#B6D5B0] uppercase block">
                      Summary of Your Request:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[#A5ADA6] block">Client Name:</span>
                        <span className="font-semibold text-[#F4F5F1]">{submittedData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#A5ADA6] block">Phone:</span>
                        <span className="font-semibold text-[#F4F5F1]">{submittedData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#A5ADA6] block">Vehicle:</span>
                        <span className="font-semibold text-[#F4F5F1]">{submittedData.vehicle} ({submittedData.vehicleType})</span>
                      </div>
                      <div>
                        <span className="text-[#A5ADA6] block">Selected Service:</span>
                        <span className="font-semibold text-[#B6D5B0]">{submittedData.service}</span>
                      </div>
                      <div>
                        <span className="text-[#A5ADA6] block">Preferred Date:</span>
                        <span className="font-semibold text-[#F4F5F1]">{submittedData.preferredDate}</span>
                      </div>
                      <div>
                        <span className="text-[#A5ADA6] block">Service Location:</span>
                        <span className="font-semibold text-[#F4F5F1] truncate block">{submittedData.address}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#A5ADA6] italic">
                    We'll contact you to confirm availability and appointment details. Your request is not a confirmed booking.
                  </p>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                      Full Name <span className="text-[#B6D5B0]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Row: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Phone Number <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Email Address <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Vehicle & Vehicle Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Vehicle <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. BMW M4, Mercedes-Benz GLE"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors ${
                          errors.vehicle ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      />
                      {errors.vehicle && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.vehicle}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Vehicle Type <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value as any })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] focus:outline-none transition-colors cursor-pointer ${
                          errors.vehicleType ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      >
                        <option value="">Select vehicle type...</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="Coupe / Sports Car">Coupe / Sports Car</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.vehicleType && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.vehicleType}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Select Your Service & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Select Your Service <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] focus:outline-none transition-colors cursor-pointer ${
                          errors.service ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        <option value="Interior Detailing">Interior Detailing</option>
                        <option value="Exterior Detailing">Exterior Detailing</option>
                        <option value="Full Detail">Full Detail</option>
                        <option value="Ceramic Coating">Ceramic Coating</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                        Preferred Appointment Date <span className="text-[#B6D5B0]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] focus:outline-none transition-colors cursor-pointer ${
                          errors.preferredDate ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                      Service Address <span className="text-[#B6D5B0]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#101312] border rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors ${
                        errors.address ? 'border-red-500/80 focus:border-red-500' : 'border-[#343D36] focus:border-[#B6D5B0]'
                      }`}
                    />
                    {errors.address && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.address}</span>
                      </p>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4F5F1] mb-2">
                      Additional Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us anything else we should know about your car."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#101312] border border-[#343D36] focus:border-[#B6D5B0] rounded-sm text-sm text-[#F4F5F1] placeholder-[#A5ADA6]/60 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#101312] bg-[#B6D5B0] hover:bg-[#D9E4D5] active:scale-[0.99] rounded-sm transition-all cursor-pointer shadow-lg shadow-[#B6D5B0]/15 flex items-center justify-center gap-2"
                  >
                    <span>REQUEST MY APPOINTMENT</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Required Legal / Informational Disclaimer below form */}
                  <p className="text-xs text-[#A5ADA6] text-center leading-relaxed">
                    We'll contact you to confirm availability and appointment details. Your request is not a confirmed booking.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
