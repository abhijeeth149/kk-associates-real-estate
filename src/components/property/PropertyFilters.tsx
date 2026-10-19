import React from 'react';
import { Search, RotateCcw, SlidersHorizontal, MapPin, Home } from 'lucide-react';
import { usePropertyContext } from '../../context/PropertyContext';
import { COMPANY_CONFIG } from '../../config/company';

export const PropertyFilters: React.FC = () => {
  const { filter, setFilter, resetFilter, filteredProperties } = usePropertyContext();

  const handlePurposeChange = (purpose: 'all' | 'buy' | 'resale') => {
    setFilter(prev => ({ ...prev, purpose }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, type: e.target.value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, location: e.target.value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, bedrooms: e.target.value }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, sortBy: e.target.value as any }));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, maxPrice: Number(e.target.value) }));
  };

  const formatBudgetDisplay = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    }
    return `₹${(amount / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-md mb-8">
      {/* Top Header & Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#075E54]" />
          <h2 className="text-base font-bold text-[#172522] font-display">
            Filter Properties ({filteredProperties.length} available)
          </h2>
        </div>

        {/* Purpose Radio Switcher */}
        <div className="flex items-center bg-[#F8FAF8] p-1 rounded-xl border border-gray-200">
          <button
            type="button"
            onClick={() => handlePurposeChange('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${filter.purpose === 'all' ? 'bg-[#075E54] text-white shadow-sm' : 'text-gray-600 hover:text-[#075E54]'}`}
          >
            All Listings
          </button>
          <button
            type="button"
            onClick={() => handlePurposeChange('buy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${filter.purpose === 'buy' ? 'bg-[#075E54] text-white shadow-sm' : 'text-gray-600 hover:text-[#075E54]'}`}
          >
            Buy Plots & Flats
          </button>
          <button
            type="button"
            onClick={() => handlePurposeChange('resale')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${filter.purpose === 'resale' ? 'bg-amber-700 text-white shadow-sm' : 'text-gray-600 hover:text-amber-700]'}`}
          >
            Resale Only
          </button>
        </div>
      </div>

      {/* Main Filter Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* 1. Search Query */}
        <div className="relative">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Search Keywords
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filter.searchQuery}
              onChange={handleSearchChange}
              placeholder="e.g. Residential Plot, Tellapur, 3 BHK..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] focus:border-transparent"
            />
          </div>
        </div>

        {/* 2. Property Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Property Category
          </label>
          <div className="relative">
            <Home className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={filter.type}
              onChange={handleTypeChange}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-white cursor-pointer"
            >
              <option value="">All Property Types</option>
              <option value="Premium Flat">Premium Flat (2/3 BHK)</option>
              <option value="Residential Apartment">Residential Apartment</option>
              <option value="Resale Flat">Resale Flat</option>
              <option value="Resale Plot">Resale Plot</option>
            </select>
          </div>
        </div>

        {/* 3. Location */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Hyderabad Location
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={filter.location}
              onChange={handleLocationChange}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-white cursor-pointer"
            >
              <option value="">All Hyderabad Zones</option>
              {COMPANY_CONFIG.primeLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 4. Bedrooms (if flat/apartment) */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Bedrooms (for Flats)
          </label>
          <select
            value={filter.bedrooms || ''}
            onChange={handleBedroomsChange}
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-white cursor-pointer"
          >
            <option value="">Any Bedrooms / Plots</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4+">4+ BHK / Luxury</option>
          </select>
        </div>
      </div>

      {/* Secondary Row: Budget Slider & Sorting & Reset */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Budget Slider */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-1">
            <span>Max Budget Range:</span>
            <span className="text-[#075E54] font-bold">
              {filter.maxPrice >= 50000000 ? 'Any Budget (Up to ₹5 Cr+)' : `Up to ${formatBudgetDisplay(filter.maxPrice)}`}
            </span>
          </div>
          <input
            type="range"
            min={2000000}
            max={50000000}
            step={1000000}
            value={filter.maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full accent-[#075E54] cursor-pointer"
          />
        </div>

        {/* Sort by & Reset */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 whitespace-nowrap">Sort By:</span>
            <select
              value={filter.sortBy}
              onChange={handleSortChange}
              className="py-1.5 px-3 text-xs font-semibold rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-white cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Recently Listed</option>
            </select>
          </div>

          <button
            type="button"
            onClick={resetFilter}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-gray-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};
