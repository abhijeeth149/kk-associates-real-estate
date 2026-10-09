import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGrid, List, Heart, Sparkles } from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { useModalContext } from '../context/ModalContext';
import { PropertyCard } from '../components/property/PropertyCard';
import { PropertyFilters } from '../components/property/PropertyFilters';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { getGeneralWhatsAppMessage } from '../utils/whatsapp';

export const PropertiesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { filteredProperties, setFilter, favorites, properties } = usePropertyContext();
  const { openEnquiryModal } = useModalContext();

  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Sync search parameters from URL on load
  useEffect(() => {
    const purpose = searchParams.get('purpose');
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    const maxPrice = searchParams.get('maxPrice');
    const fav = searchParams.get('favorites');

    if (fav === 'true') {
      setOnlyFavorites(true);
    }

    if (purpose || type || location || maxPrice) {
      setFilter(prev => ({
        ...prev,
        purpose: (purpose === 'buy' || purpose === 'resale') ? purpose : 'all',
        type: type || '',
        location: location || '',
        maxPrice: maxPrice ? Number(maxPrice) : 50000000
      }));
    }
  }, [searchParams, setFilter]);

  const displayList = onlyFavorites
    ? properties.filter(p => favorites.includes(p.id))
    : filteredProperties;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
              {onlyFavorites ? 'Your Saved Properties' : 'Hyderabad Real Estate Listings'}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {displayList.length} Properties
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-2">
            {onlyFavorites ? 'Saved Property Shortlist' : 'Explore Plots, Flats & Resale Properties'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Discover verified plots and premium residential apartments in Hyderabad with KK Associates.
          </p>
        </div>

        {/* View Controls: Grid/List & Favorites toggle */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              onlyFavorites
                ? 'bg-rose-500 text-white shadow'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${onlyFavorites ? 'fill-white' : 'text-rose-500'}`} />
            <span>Saved ({favorites.length})</span>
          </button>

          <div className="flex items-center bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setLayout('grid')}
              aria-label="Grid layout"
              className={`p-1.5 rounded-lg transition-all ${layout === 'grid' ? 'bg-white shadow text-[#075E54]' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout('list')}
              aria-label="List layout"
              className={`p-1.5 rounded-lg transition-all ${layout === 'list' ? 'bg-white shadow text-[#075E54]' : 'text-gray-500 hover:text-gray-800'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Component */}
      {!onlyFavorites && <PropertyFilters />}

      {/* Property Results */}
      {displayList.length > 0 ? (
        <div className={
          layout === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
            : 'flex flex-col gap-6'
        }>
          {displayList.map(property => (
            <PropertyCard key={property.id} property={property} layout={layout} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 bg-[#E8F5F2] text-[#075E54] rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold font-display text-gray-900">
            {onlyFavorites ? 'No Saved Properties Yet' : 'New Properties Are Being Added'}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            {onlyFavorites
              ? 'Click the heart icon on any property card to save it to your personal shortlist.'
              : 'We frequently add verified plots and flats across Hyderabad. Contact our team directly to discover upcoming and unlisted opportunities.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppButton
              size="md"
              label="Ask on WhatsApp (+91 9063613496)"
              message={getGeneralWhatsAppMessage()}
            />
            <button
              onClick={() => openEnquiryModal()}
              className="px-5 py-2.5 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              Request Custom Listing Search
            </button>
          </div>
        </div>
      )}

      {/* Bottom Assistance Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#075E54] to-[#0D8B78] text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold font-display text-lg">Looking for something specific in Hyderabad?</h3>
          <p className="text-xs text-emerald-100 mt-0.5">
            Tell us your preferred budget, facing, or highway corridor and our Gachibowli team will curate matching options.
          </p>
        </div>
        <WhatsAppButton
          variant="gold"
          size="sm"
          label="Direct WhatsApp Consultation"
        />
      </div>

    </div>
  );
};
