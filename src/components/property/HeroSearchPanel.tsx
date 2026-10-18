import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home, IndianRupee, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { usePropertyContext } from '../../context/PropertyContext';

export const HeroSearchPanel: React.FC = () => {
  const navigate = useNavigate();
  const { setFilter } = usePropertyContext();

  const [purpose, setPurpose] = useState<'buy' | 'resale' | 'sell'>('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (purpose === 'sell') {
      navigate('/sell');
      return;
    }

    // Set context filter
    setFilter(prev => ({
      ...prev,
      purpose: purpose === 'buy' ? 'buy' : 'resale',
      type: propertyType,
      location: location,
      maxPrice: budget ? Number(budget) : 50000000
    }));

    // Build URL query
    const params = new URLSearchParams();
    if (purpose !== 'buy') params.set('purpose', purpose);
    if (propertyType) params.set('type', propertyType);
    if (location) params.set('location', location);
    if (budget) params.set('maxPrice', budget);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/60 relative z-20 -mt-10 sm:-mt-16">
      
      {/* Top Tabs: Buy / Resale / Sell */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <button
          type="button"
          onClick={() => setPurpose('buy')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            purpose === 'buy'
              ? 'bg-[#075E54] text-white shadow-md'
              : 'text-gray-600 hover:text-[#075E54] hover:bg-gray-100'
          }`}
        >
          <span>Buy Plots & Flats</span>
        </button>

        <button
          type="button"
          onClick={() => setPurpose('resale')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            purpose === 'resale'
              ? 'bg-[#075E54] text-white shadow-md'
              : 'text-gray-600 hover:text-[#075E54] hover:bg-gray-100'
          }`}
        >
          <span>Resale Properties</span>
        </button>

        <button
          type="button"
          onClick={() => setPurpose('sell')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            purpose === 'sell'
              ? 'bg-[#C7A76C] text-[#172522] shadow-md'
              : 'text-gray-600 hover:text-[#075E54] hover:bg-gray-100'
          }`}
        >
          <span>Sell Your Property</span>
        </button>
      </div>

      {purpose === 'sell' ? (
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              Ready to sell your plot or flat in Hyderabad?
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              List with KK Associates for verified buyers, transparent paperwork, and zero hassle.
            </p>
          </div>
          <button
            onClick={() => navigate('/sell')}
            className="w-full sm:w-auto px-6 py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Property Submission</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* 1. Location */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
              Location
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#0D8B78] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-9 pr-7 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer font-medium"
              >
                <option value="">All Hyderabad Zones</option>
                {COMPANY_CONFIG.primeLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 2. Property Type */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
              Property Type
            </label>
            <div className="relative">
              <Home className="w-4 h-4 text-[#0D8B78] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-9 pr-7 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer font-medium"
              >
                <option value="">All Types (Plots / Flats)</option>
                <option value="Residential Plot">Residential Plot (Clear Title)</option>
                <option value="Open Plot">Open Plot</option>
                <option value="Premium Flat">Premium Flat (2/3 BHK)</option>
                <option value="Residential Apartment">Residential Apartment</option>
                <option value="Resale Flat">Resale Flat</option>
                <option value="Resale Plot">Resale Plot</option>
              </select>
            </div>
          </div>

          {/* 3. Budget */}
          <div className="relative">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
              Max Budget
            </label>
            <div className="relative">
              <IndianRupee className="w-4 h-4 text-[#0D8B78] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-9 pr-7 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer font-medium"
              >
                <option value="">Any Budget</option>
                <option value="5000000">Up to ₹50 Lakhs</option>
                <option value="10000000">Up to ₹1.00 Crore</option>
                <option value="15000000">Up to ₹1.50 Crores</option>
                <option value="25000000">Up to ₹2.50 Crores</option>
                <option value="50000000">₹2.50 Cr – ₹5.00+ Cr</option>
              </select>
            </div>
          </div>

          {/* 4. Search CTA */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>Search Properties</span>
            </button>
          </div>

        </form>
      )}
    </div>
  );
};
