import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, KeyRound } from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { PropertyCard } from '../components/property/PropertyCard';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { useModalContext } from '../context/ModalContext';
import { getResaleWhatsAppMessage } from '../utils/whatsapp';
import { COMPANY_CONFIG } from '../config/company';

export const ResalePage: React.FC = () => {
  const { properties } = usePropertyContext();
  const { openEnquiryModal } = useModalContext();


  const [selectedLocality, setSelectedLocality] = useState('');

  const resaleListings = properties.filter(p => {
    if (p.purpose !== 'resale') return false;
    if (selectedLocality && !p.location.toLowerCase().includes(selectedLocality.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Resale Hero Section */}
      <div className="bg-[#172522] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-wider">
            Verified Resale Market
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            Looking for Resale Properties in Hyderabad?
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Discover verified resale flats, ready-to-move apartments, and prime residential plots. Benefit from established gated amenities, clear encumbrance certificates, and direct owner pricing.
          </p>

          <div className="pt-3 flex flex-wrap gap-3">
            <WhatsAppButton
              variant="gold"
              size="md"
              label="Enquire Resale on WhatsApp"
              message={getResaleWhatsAppMessage()}
            />
            <button
              onClick={() => openEnquiryModal()}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Request Resale Callback
            </button>
          </div>
        </div>
      </div>

      {/* Trust & Transparency Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <KeyRound className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">Immediate Move-In Ready</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Resale flats are fully built with existing societies, functional clubhouses, and ready utility connections.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#075E54] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">30-Year Title Search</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            We scrutinize link documents, mother deeds, and Encumbrance Certificates (EC) to ensure clear, marketable titles.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-gray-900 text-base">Fair Market Valuation</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            Transparent pricing based on actual recent transactions in the respective Hyderabad micro-market.
          </p>
        </div>
      </div>

      {/* Location Filter & Resale Listings */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold font-display text-gray-900">
              Verified Resale Listings ({resaleListings.length})
            </h2>
            <p className="text-xs text-gray-500">
              Filter resale flats and plots by locality across Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Locality:</span>
            <select
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#075E54]"
            >
              <option value="">All Hyderabad Localities</option>
              {COMPANY_CONFIG.primeLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {resaleListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resaleListings.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 max-w-lg mx-auto space-y-3">
            <p className="text-sm font-semibold text-gray-800">
              No resale listings currently matched in {selectedLocality}.
            </p>
            <p className="text-xs text-gray-500">
              Contact us on WhatsApp with your requirements and we'll check unlisted resale inventory.
            </p>
            <WhatsAppButton
              size="sm"
              label="Enquire on WhatsApp"
              message={getResaleWhatsAppMessage(selectedLocality)}
            />
          </div>
        )}
      </div>

    </div>
  );
};
