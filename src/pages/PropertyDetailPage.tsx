import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Maximize2, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  Mail, 
  Compass, 
  Share2, 
  Heart, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { useModalContext } from '../context/ModalContext';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { PropertyCard } from '../components/property/PropertyCard';
import { COMPANY_CONFIG } from '../config/company';
import { getPropertyWhatsAppMessage } from '../utils/whatsapp';

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPropertyById, properties, toggleFavorite, isFavorite } = usePropertyContext();
  const { openSiteVisitModal, showToast } = useModalContext();


  const [selectedImage, setSelectedImage] = useState<string>('');

  const property = id ? getPropertyById(id) : undefined;

  useEffect(() => {
    if (property && property.images && property.images.length > 0) {
      setSelectedImage(property.images[0]);
    }
    window.scrollTo(0, 0);
  }, [property]);

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-900">Property Not Found</h1>
        <p className="text-sm text-gray-600">The property you are looking for may have been updated or sold.</p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#075E54] text-white font-bold rounded-xl text-sm hover:bg-[#043E37] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Properties</span>
        </Link>
      </div>
    );
  }

  const isFav = isFavorite(property.id);
  const isPlot = property.category === 'plot' || property.type.toLowerCase().includes('plot');
  const whatsappMsg = getPropertyWhatsAppMessage(property);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out ${property.title} in ${property.location} on KK Associates`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Property link copied to clipboard!', 'info');
    }
  };

  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.category === property.category || p.purpose === property.purpose))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Top Breadcrumb & Share Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#075E54] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to listings</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              toggleFavorite(property.id);
              showToast(isFav ? 'Removed from saved properties' : 'Saved to your properties list', 'info');
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isFav ? 'bg-rose-500 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : 'text-rose-500'}`} />
            <span>{isFav ? 'Saved' : 'Save Property'}</span>
          </button>

          <button
            onClick={handleShare}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Title & Price Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-200">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white ${property.purpose === 'resale' ? 'bg-amber-600' : 'bg-[#075E54]'}`}>
              {property.purpose === 'resale' ? 'Verified Resale' : 'New Listing'}
            </span>
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#E8F5F2] text-[#075E54]">
              {property.type}
            </span>
            <span className="px-2 py-1 rounded-lg text-xs font-mono bg-gray-100 text-gray-700">
              ID: {property.listingId}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#172522]">
            {property.title}
          </h1>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0D8B78] font-semibold">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-[#F8FAF8] p-4 sm:p-5 rounded-2xl border border-gray-200/80 min-w-[240px]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
            Pricing
          </span>
          <div className="text-2xl sm:text-3xl font-black font-display text-[#075E54] mt-0.5">
            {property.priceDisplay}
          </div>
          {property.pricePerSqFt && (
            <div className="text-xs text-gray-500 font-medium mt-0.5">
              Unit Rate: {property.pricePerSqFt}
            </div>
          )}
        </div>
      </div>

      {/* Main Gallery & Overview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Media Gallery, Specs, Details (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="h-[360px] sm:h-[480px] rounded-3xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 relative">
              <img
                src={selectedImage || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                Status: {property.status}
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${selectedImage === img ? 'border-[#075E54] scale-105 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Gallery thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Grid */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold font-display text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Property Specifications
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                <span className="text-[11px] text-gray-500 font-semibold block flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-[#075E54]" /> Area
                </span>
                <span className="text-base font-extrabold text-gray-900 font-display">
                  {property.area}
                </span>
              </div>

              {!isPlot && property.bedrooms ? (
                <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                  <span className="text-[11px] text-gray-500 font-semibold block flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 text-[#075E54]" /> Bedrooms
                  </span>
                  <span className="text-base font-extrabold text-gray-900 font-display">
                    {property.bedrooms} BHK
                  </span>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                  <span className="text-[11px] text-gray-500 font-semibold block flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#075E54]" /> Category
                  </span>
                  <span className="text-base font-extrabold text-gray-900 font-display">
                    Plot / Land
                  </span>
                </div>
              )}

              <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                <span className="text-[11px] text-gray-500 font-semibold block flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#075E54]" /> Facing
                </span>
                <span className="text-base font-extrabold text-gray-900 font-display">
                  {property.facing || 'East Facing'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                <span className="text-[11px] text-gray-500 font-semibold block flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#075E54]" /> Title
                </span>
                <span className="text-base font-extrabold text-gray-900 font-display">
                  Clear Title
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl font-bold font-display text-gray-900 pb-3 border-b border-gray-100">
              About This Property
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Amenities & Infrastructure */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-xl font-bold font-display text-gray-900 pb-3 border-b border-gray-100">
              Amenities & Layout Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF8] border border-gray-100 text-xs sm:text-sm text-gray-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#075E54] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Locality Advantages */}
          {property.highlights && property.highlights.length > 0 && (
            <div className="bg-[#E8F5F2] rounded-3xl p-6 sm:p-8 border border-emerald-100 space-y-4">
              <h2 className="text-xl font-bold font-display text-[#075E54] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C7A76C]" />
                <span>Locality & Growth Advantages</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-950 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#075E54] mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Approvals & Verified Documents (Legal note) */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-[#075E54]">
              <FileCheck className="w-5 h-5" />
              <h2 className="text-lg font-bold font-display text-gray-900">
                Approvals & Documentation Status
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {property.documentStatus || 'All legal documents and title deeds are reviewed by KK Associates prior to facilitating buyer site visits.'}
            </p>
            {property.reraNumber && (
              <div className="inline-block px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-mono text-amber-900">
                RERA Reg. Number: {property.reraNumber}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Sticky Action Card (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            
            {/* Action Box with 4 Required Buttons */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-2.5 py-0.5 rounded-full">
                  Direct Enquiry
                </span>
                <h3 className="text-xl font-bold font-display text-gray-900 mt-2">
                  Interested in this property?
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Connect with KK Associates for current price negotiation, layout blueprints, or site visit.
                </p>
              </div>

              {/* 4 Required Action Buttons */}
              <div className="space-y-3">
                
                {/* 1. Enquire on WhatsApp */}
                <WhatsAppButton
                  fullWidth
                  size="lg"
                  variant="primary"
                  label="Enquire on WhatsApp"
                  message={whatsappMsg}
                />

                {/* 2. Call Now */}
                <a
                  href={`tel:${COMPANY_CONFIG.rawPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-[#0D8B78] hover:bg-[#097262] text-white font-bold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4.5 h-4.5" />
                  <span>Call Now (+91 9063613496)</span>
                </a>

                {/* 3. Send Email */}
                <a
                  href={`mailto:${COMPANY_CONFIG.email}?subject=Enquiry%20for%20${encodeURIComponent(property.title)}%20(${property.listingId})&body=Hello%20KK%20Associates,%0D%0A%0D%0AI%20am%20interested%20in%20${encodeURIComponent(property.title)}%20(ID:%20${property.listingId}).%20Please%20contact%20me%20with%20more%20details.`}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-[#075E54] text-gray-800 font-bold text-sm transition-all"
                >
                  <Mail className="w-4 h-4 text-[#075E54]" />
                  <span>Send Email Enquiry</span>
                </a>

                {/* 4. Request a Site Visit */}
                <button
                  onClick={() => openSiteVisitModal(property)}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm shadow-sm transition-all"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  <span>Request a Free Site Visit</span>
                </button>

              </div>

              {/* Office Contact Info Card */}
              <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <Building2 className="w-4 h-4 text-[#075E54]" />
                  <span>KK Associates (Klinkaaraa Associates)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4 text-[#075E54]" />
                  <span>Gachibowli, Hyderabad, Telangana</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Similar Properties Section */}
      {similarProperties.length > 0 && (
        <div className="pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold font-display text-gray-900">
                Similar Properties You May Like
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Explore matching residential plots and apartments in nearby locations.
              </p>
            </div>
            <Link to="/properties" className="text-xs font-bold text-[#075E54] hover:underline">
              View All Listings →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
