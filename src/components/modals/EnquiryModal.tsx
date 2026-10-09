import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useModalContext } from '../../context/ModalContext';
import { openWhatsApp } from '../../utils/whatsapp';
import type { EnquiryFormData } from '../../types/property';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, selectedPropertyForEnquiry, closeEnquiryModal, showToast } = useModalContext();

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    interestType: 'buy',
    propertyType: 'Residential Plot',
    location: 'Gachibowli / West Hyderabad',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Sync selected property details when modal opens
  useEffect(() => {
    if (selectedPropertyForEnquiry) {
      setFormData(prev => ({
        ...prev,
        interestType: selectedPropertyForEnquiry.purpose,
        propertyType: selectedPropertyForEnquiry.type,
        location: selectedPropertyForEnquiry.location,
        propertyId: selectedPropertyForEnquiry.listingId,
        propertyTitle: selectedPropertyForEnquiry.title,
        message: `I would like to enquire about ${selectedPropertyForEnquiry.title} (ID: ${selectedPropertyForEnquiry.listingId}).`
      }));
    } else {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        interestType: 'buy',
        propertyType: 'Residential Plot',
        location: 'Gachibowli / West Hyderabad',
        budget: '',
        message: ''
      });
    }
    setIsSubmitted(false);
    setPhoneError('');
  }, [selectedPropertyForEnquiry, isEnquiryModalOpen]);

  if (!isEnquiryModalOpen) return null;

  const validatePhone = (phone: string) => {
    const clean = phone.replace(/[^0-9]/g, '');
    if (clean.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return;

    const msg = `Hello KK Associates, I would like to make an enquiry:

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Interest: ${formData.interestType.toUpperCase()}
Property: ${formData.propertyTitle ? `${formData.propertyTitle} (ID: ${formData.propertyId})` : formData.propertyType}
Location: ${formData.location}
Budget: ${formData.budget || 'To be discussed'}
Message: ${formData.message || 'Please share more details.'}`;

    openWhatsApp(msg);
    triggerSuccess();
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return;

    // Simulate backend/storage delivery
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Confetti fallback
    }
    showToast('Enquiry received! Our KK Associates advisor will contact you soon.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
        
        {/* Header with Emerald Gradient */}
        <div className="bg-gradient-to-r from-[#075E54] to-[#0D8B78] p-5 sm:p-6 text-white relative">
          <button
            onClick={closeEnquiryModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A76C] bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
            Quick Property Enquiry
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-display">
            Connect with KK Associates
          </h2>
          <p className="text-xs text-emerald-100 mt-1">
            Gachibowli, Hyderabad • Direct WhatsApp & Phone Assistance
          </p>
        </div>

        {/* Selected Property preview if present */}
        {selectedPropertyForEnquiry && (
          <div className="bg-[#E8F5F2] px-5 py-3 border-b border-emerald-100 flex items-center justify-between text-xs">
            <div>
              <span className="text-gray-500">Property: </span>
              <span className="font-bold text-[#075E54]">{selectedPropertyForEnquiry.title}</span>
            </div>
            <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded text-gray-700 font-semibold">
              ID: {selectedPropertyForEnquiry.listingId}
            </span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#075E54] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900">Thank You!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Your enquiry has been received. Our dedicated Hyderabad property specialist will reach out to you within 30 minutes during business hours.
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={closeEnquiryModal}
                  className="w-full py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (phoneError) setPhoneError('');
                      }}
                      placeholder="9876543210"
                      className={`w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] ${phoneError ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200'}`}
                    />
                  </div>
                  {phoneError && <p className="text-[11px] text-red-500 mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>
              </div>

              {/* Interest Type & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    value={formData.interestType}
                    onChange={(e) => setFormData({ ...formData, interestType: e.target.value as any })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer"
                  >
                    <option value="buy">Buy (Plots / Flats)</option>
                    <option value="resale">Resale Properties</option>
                    <option value="sell">Sell My Property</option>
                    <option value="general">General Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer"
                  >
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Open Plot">Open Plot</option>
                    <option value="Premium Flat">Premium Flat (2/3 BHK)</option>
                    <option value="Residential Apartment">Residential Apartment</option>
                    <option value="Resale Flat">Resale Flat</option>
                    <option value="Resale Plot">Resale Plot</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify preferred budget, location, or request for site visit..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span>Your contact info is safe with KK Associates and never shared publicly.</span>
              </p>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3 px-4 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="flex-1 py-3 px-4 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Callback</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
