import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Upload,
  ShieldAlert,
  LandPlot,
  DollarSign,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { SellPropertyFormData } from '../types/property';
import { useModalContext } from '../context/ModalContext';
import { openWhatsApp, getSellPropertyWhatsAppMessage } from '../utils/whatsapp';


export const SellPage: React.FC = () => {
  const { showToast } = useModalContext();

  const [formData, setFormData] = useState<SellPropertyFormData>({
    ownerName: '',
    phone: '',
    email: '',
    propertyType: 'Residential Plot',
    location: '',
    locality: '',
    plotArea: '',
    expectedPrice: '',
    description: '',
    preferredContact: 'whatsapp',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ownerName || !formData.phone || !formData.location || !formData.plotArea) {
      setErrorMsg('Please complete all required fields (Name, Phone, Location, and Area).');
      return;
    }

    if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please check the consent box to proceed.');
      return;
    }

    setErrorMsg('');
    const msg = getSellPropertyWhatsAppMessage(formData);
    openWhatsApp(msg);

    setIsSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } catch { }
    showToast('Property details received! Our selling advisor will connect with you.', 'success');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.ownerName || !formData.phone || !formData.location || !formData.plotArea) {
      setErrorMsg('Please complete all required fields (Name, Phone, Location, and Area).');
      return;
    }

    if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!formData.consent) {
      setErrorMsg('Please check the consent box to proceed.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } catch { }
    showToast('Property submission logged successfully! We will review and contact you.', 'success');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#075E54] to-[#043E37] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl space-y-3 relative z-10">
          <span className="px-3 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
            Owner & Investor Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
            Thinking of Selling Your Property?
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Connect with potential buyers and let KK Associates help you with your property-selling journey across Hyderabad.
          </p>
        </div>
      </div>

      {/* Selling Advantage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
            <LandPlot className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">Verified Buyer Network</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We match your plot or flat with genuine NRIs, tech professionals, and active real estate investors.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">Optimal Market Valuation</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Get accurate pricing recommendations based on real transaction data across Hyderabad micro-markets.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
            <FileCheck className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">Hassle-Free Documentation</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We coordinate site visits, draft sale agreements, and guide you until final sub-registrar registration.
          </p>
        </div>
      </div>

      {/* Submission Form Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
        {isSubmitted ? (
          <div className="py-12 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-[#075E54] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h2 className="text-2xl font-bold font-display text-gray-900">
              Property Submission Received!
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thank you, {formData.ownerName}. Our senior property specialist from the Gachibowli office will review your plot/flat details and connect via {formData.preferredContact}.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  ownerName: '',
                  phone: '',
                  email: '',
                  propertyType: 'Residential Plot',
                  location: '',
                  locality: '',
                  plotArea: '',
                  expectedPrice: '',
                  description: '',
                  preferredContact: 'whatsapp',
                  consent: false
                });
              }}
              className="px-6 py-3 bg-[#075E54] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-[#043E37] transition-all"
            >
              Submit Another Property
            </button>
          </div>
        ) : (
          <form className="space-y-6">

            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-2xl font-bold font-display text-gray-900">
                Property Submission Form
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Fill in your property specifications to list or discuss with our advisory team.
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* 1. Owner Details */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">
                1. Owner Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. K. Srinivas Rao"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number (WhatsApp) *
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
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="owner@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Property Details */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">
                2. Property Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer"
                  >

                    <option value="Premium Flat">Premium Flat (2/3 BHK)</option>
                    <option value="Residential Apartment">Residential Apartment</option>
                    <option value="Resale Flat">Resale Flat</option>
                    <option value="Resale Plot">Resale Plot</option>
                    <option value="Commercial Land">Commercial / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Location in Hyderabad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Tellapur / Mokila"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Plot Area / Built-up Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.plotArea}
                    onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                    placeholder="e.g. 250 Sq.Yds / 1800 Sq.Ft"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Expected Price *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    placeholder="e.g. ₹1.20 Cr or ₹45,000/Sq.Yd"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Property Description & Key Details
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Mention road width, layout name, facing, boundary status, and reason for selling..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              {/* Upload note */}
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-dashed border-gray-300 text-center space-y-1">
                <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                <p className="text-xs font-semibold text-gray-700">Have photos or layout maps of your property?</p>
                <p className="text-[11px] text-gray-500">
                  You can send layout photos, survey maps, and documents directly on WhatsApp after clicking submit.
                </p>
              </div>
            </div>

            {/* 3. Contact Preferences & Disclaimer */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-bold text-gray-700 mb-1">
                    Preferred Contact Method:
                  </span>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-700">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'whatsapp' })}
                        className="accent-[#075E54]"
                      />
                      <span>WhatsApp</span>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="call"
                        checked={formData.preferredContact === 'call'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'call' })}
                        className="accent-[#075E54]"
                      />
                      <span>Phone Call</span>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                        className="accent-[#075E54]"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 accent-[#075E54] rounded"
                  />
                  <span>
                    I confirm that I am the legal owner or authorized representative of this property and grant KK Associates permission to contact me regarding potential buyers.
                  </span>
                </label>
              </div>

              {/* Legal Disclaimer Box */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 leading-relaxed">
                <strong>Important Note:</strong> Submitting property details does not automatically guarantee listing or sale. KK Associates will review documentation, title legality, and market viability prior to presenting the property to prospective buyers.
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3.5 px-6 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span>Submit via WhatsApp (+91 9063613496)</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="flex-1 py-3.5 px-6 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>Submit Online Callback</span>
                </button>
              </div>

            </div>

          </form>
        )}
      </div>

    </div>
  );
};
