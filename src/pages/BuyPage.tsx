import React from 'react';
import { Link } from 'react-router-dom';
import { LandPlot, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { PropertyCard } from '../components/property/PropertyCard';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { useModalContext } from '../context/ModalContext';

export const BuyPage: React.FC = () => {
  const { properties } = usePropertyContext();
  const { openEnquiryModal } = useModalContext();

  const buyProperties = properties.filter(p => p.purpose === 'buy');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#075E54] to-[#0D8B78] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
            Primary Purchase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            Buy Verified Plots & Luxury Flats in Hyderabad
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
            Discover HMDA & DTCP sanctioned residential plots and modern high-rise apartments across Hyderabad's highest appreciating growth corridors.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <WhatsAppButton
              variant="gold"
              size="md"
              label="Talk to Purchase Advisor"
            />
            <button
              onClick={() => openEnquiryModal()}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Enquire Available Plots
            </button>
          </div>
        </div>
      </div>

      {/* Buyer Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#E8F5F2] text-[#075E54]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Clear Title & Approvals</h2>
            <p className="text-xs text-gray-600 mt-1">All properties are screened for HMDA, DTCP, or RERA approval status.</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#E8F5F2] text-[#075E54]">
            <LandPlot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Spot Registration</h2>
            <p className="text-xs text-gray-600 mt-1">Direct coordination with sub-registrar offices for smooth title transfer.</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#E8F5F2] text-[#075E54]">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Bank Loan Support</h2>
            <p className="text-xs text-gray-600 mt-1">Pre-approved loan facilities from leading public and private banks.</p>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-display text-gray-900">
            Available Plots & Apartments ({buyProperties.length})
          </h2>
          <Link to="/properties" className="text-xs font-bold text-[#075E54] hover:underline flex items-center gap-1">
            <span>Filter All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {buyProperties.map(prop => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>

    </div>
  );
};
