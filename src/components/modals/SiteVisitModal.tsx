import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useModalContext } from '../../context/ModalContext';
import { openWhatsApp } from '../../utils/whatsapp';
import type { SiteVisitFormData } from '../../types/property';

export const SiteVisitModal: React.FC = () => {
  const { isSiteVisitModalOpen, selectedPropertyForSiteVisit, closeSiteVisitModal, showToast } = useModalContext();

  const [formData, setFormData] = useState<SiteVisitFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    propertyId: '',
    propertyTitle: '',
    numberOfPersons: '2 Persons',
    notes: ''
  });

  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (selectedPropertyForSiteVisit) {
      setFormData(prev => ({
        ...prev,
        propertyId: selectedPropertyForSiteVisit.listingId,
        propertyTitle: selectedPropertyForSiteVisit.title
      }));
    }
    setIsBooked(false);
  }, [selectedPropertyForSiteVisit, isSiteVisitModalOpen]);

  if (!isSiteVisitModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please provide a valid 10-digit phone number');
      return;
    }

    const message = `Hello KK Associates, I would like to arrange a site visit.

Property: ${formData.propertyTitle} (ID: ${formData.propertyId || 'Direct Enclave'})
Visitor Name: ${formData.fullName}
Contact: ${formData.phone}
Preferred Date: ${formData.preferredDate || 'Upcoming Weekend'}
Time Slot: ${formData.preferredTime}
Number of Persons: ${formData.numberOfPersons}
${formData.notes ? `Notes: ${formData.notes}` : ''}

Please confirm the appointment and send the location pin.`;

    openWhatsApp(message);
    setIsBooked(true);

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } catch {}

    showToast('Site visit request initiated! Our field manager will confirm your slot.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#075E54] to-[#043E37] p-5 sm:p-6 text-white relative">
          <button
            onClick={closeSiteVisitModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C7A76C] bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
            Personalized Site Inspection
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold font-display">
            Schedule a Free Site Visit
          </h2>
          <p className="text-xs text-emerald-100 mt-1">
            Complimentary pickup & site guided tour by KK Associates in Hyderabad.
          </p>
        </div>

        {/* Selected Property preview */}
        {selectedPropertyForSiteVisit && (
          <div className="bg-[#E8F5F2] px-5 py-3 border-b border-emerald-100 flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4 text-[#075E54] flex-shrink-0" />
            <div className="truncate">
              <span className="font-bold text-[#075E54]">{selectedPropertyForSiteVisit.title}</span>
              <span className="text-gray-500 ml-1">({selectedPropertyForSiteVisit.locality})</span>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {isBooked ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#075E54] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900">Visit Scheduled!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                We've connected with our Gachibowli site coordinator on WhatsApp. We will call you to confirm directions and route details.
              </p>
              <button
                onClick={closeSiteVisitModal}
                className="w-full py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Vikram Reddy"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9063613496"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Number of Visitors
                  </label>
                  <select
                    value={formData.numberOfPersons}
                    onChange={(e) => setFormData({ ...formData, numberOfPersons: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="3-4 Family Members">3-4 Family Members</option>
                    <option value="5+ Group">5+ Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Special Notes / Landmark Preference
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Need pickup from Gachibowli junction / interested in corner plot..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C7A76C]" />
                  <span>Confirm Site Visit on WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
