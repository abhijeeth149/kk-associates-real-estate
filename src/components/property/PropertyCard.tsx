import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Bed, Bath, Maximize2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Property } from '../../types/property';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getPropertyWhatsAppMessage } from '../../utils/whatsapp';
import { usePropertyContext } from '../../context/PropertyContext';
import { useModalContext } from '../../context/ModalContext';

interface PropertyCardProps {
  property: Property;
  layout?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  layout = 'grid'
}) => {
  const { toggleFavorite, isFavorite } = usePropertyContext();
  const { showToast } = useModalContext();
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const favorite = isFavorite(property.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property.id);
    showToast(favorite ? 'Removed from saved properties' : 'Property added to your saved list!', 'info');
  };

  const whatsappMessage = getPropertyWhatsAppMessage(property);

  const isPlot = property.category === 'plot' || property.type.toLowerCase().includes('plot');

  return (
    <div className={`
      group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between
      ${layout === 'list' ? 'md:flex-row' : ''}
    `}>
      {/* Media / Image Section */}
      <div className={`relative overflow-hidden ${layout === 'list' ? 'md:w-2/5 md:min-h-[260px]' : 'h-60 sm:h-64'}`}>
        <img
          src={property.images[activeImageIndex] || property.images[0]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Dark overlay gradient for top badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5 pointer-events-auto">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm text-white ${property.purpose === 'resale' ? 'bg-amber-600' : 'bg-[#075E54]'}`}>
              {property.purpose === 'resale' ? 'Verified Resale' : 'New Listing'}
            </span>
            <span className="px-2 py-1 rounded-lg text-xs font-medium bg-black/60 backdrop-blur-md text-white">
              {property.type}
            </span>
          </div>

          {/* Favorite Heart Button */}
          <button
            onClick={handleFavoriteClick}
            aria-label={favorite ? 'Remove from favorites' : 'Save property'}
            className="pointer-events-auto w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-rose-600 backdrop-blur-md flex items-center justify-center shadow-md transition-transform active:scale-90"
          >
            <Heart className={`w-4.5 h-4.5 transition-colors ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Bottom thumbnail selector if multiple images */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5 pointer-events-auto">
            {property.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${activeImageIndex === idx ? 'bg-[#C7A76C] w-4' : 'bg-white/70 hover:bg-white'}`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Listing ID chip */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white/90 text-[10px] font-mono">
          ID: {property.listingId}
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-5 flex-1 flex flex-col justify-between ${layout === 'list' ? 'md:w-3/5' : ''}`}>
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D8B78] mb-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <Link to={`/property/${property.id}`} className="block group-hover:text-[#075E54] transition-colors">
            <h3 className="text-lg font-bold font-display text-[#172522] leading-snug line-clamp-2">
              {property.title}
            </h3>
          </Link>

          {/* Area & Specification Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-3.5 py-2.5 px-3 rounded-xl bg-[#F8FAF8] border border-gray-100 text-xs text-gray-700">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#075E54]" />
              <span className="font-semibold">{property.area}</span>
            </div>

            {!isPlot && property.bedrooms ? (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-[#075E54]" />
                <span>{property.bedrooms} BHK</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#075E54]" />
                <span className="truncate">{property.facing || 'East Facing'}</span>
              </div>
            )}

            {!isPlot && property.bathrooms ? (
              <div className="flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5 text-[#075E54]" />
                <span>{property.bathrooms} Baths</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#075E54]" />
                <span className="truncate">Clear Title</span>
              </div>
            )}
          </div>

          {/* Amenities Preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {property.amenities.slice(0, 3).map((amenity, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-medium truncate max-w-[150px]">
                • {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-[10px] text-gray-400 self-center">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">Price</span>
              <span className="text-xl font-extrabold text-[#075E54] font-display">
                {property.priceDisplay}
              </span>
            </div>
            {property.pricePerSqFt && (
              <span className="text-xs text-gray-500 font-medium">
                {property.pricePerSqFt}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/property/${property.id}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <WhatsAppButton
              size="sm"
              variant="primary"
              label="WhatsApp"
              message={whatsappMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
