import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  LandPlot, 
  Users, 
  Clock, 
  BadgeCheck, 
  Compass, 
  FileText,
  Briefcase
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { usePropertyContext } from '../context/PropertyContext';
import { useModalContext } from '../context/ModalContext';
import { PropertyCard } from '../components/property/PropertyCard';
import { HeroSearchPanel } from '../components/property/HeroSearchPanel';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { EmiCalculator } from '../components/tools/EmiCalculator';
import { getResaleWhatsAppMessage } from '../utils/whatsapp';


export const HomePage: React.FC = () => {
  const { properties } = usePropertyContext();
  const { openEnquiryModal, openSiteVisitModal } = useModalContext();

  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);
  const resaleProperties = properties.filter(p => p.purpose === 'resale').slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#0B1315] text-white overflow-hidden pt-12 pb-24">
        {/* Background image with high quality real estate aesthetic */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="Hyderabad luxury residential community"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B1315] opacity-95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#C7A76C] animate-pulse" />
            <span>Klinkaaraa Associates • Gachibowli, Hyderabad</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            Find Your Place.<br />
            <span className="text-[#DFCA98]">
              Build Your Future.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-200 leading-relaxed font-normal">
            Discover residential plots, premium flats, and verified resale properties with KK Associates. Your trusted real estate partner in Hyderabad.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/properties"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-500/30"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/sell"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm sm:text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>List Your Property</span>
            </Link>

            <WhatsAppButton
              variant="glass"
              size="lg"
              label="Talk to Our Team"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left text-white/90">
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
              <span className="text-xl sm:text-2xl font-bold font-display text-[#DFCA98]">HMDA & DTCP</span>
              <p className="text-[11px] text-gray-300 mt-0.5">Layout Plots</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
              <span className="text-xl sm:text-2xl font-bold font-display text-[#DFCA98]">2 & 3 BHK</span>
              <p className="text-[11px] text-gray-300 mt-0.5">Luxury Flats</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
              <span className="text-xl sm:text-2xl font-bold font-display text-[#DFCA98]">100% Clear</span>
              <p className="text-[11px] text-gray-300 mt-0.5">Verified Titles</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
              <span className="text-xl sm:text-2xl font-bold font-display text-[#DFCA98]">Direct</span>
              <p className="text-[11px] text-gray-300 mt-0.5">Gachibowli Office</p>
            </div>
          </div>

        </div>
      </section>


      {/* 2. HERO SEARCH PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSearchPanel />
      </section>

      {/* 3. PROPERTY CATEGORIES (Section 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
            Tailored Real Estate Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
            Find the Right Property for You
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Whether you are building your dream villa, investing in strategic growth zones, or moving into a luxury flat, explore curated categories across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMPANY_CONFIG.categories.map(cat => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#075E54] text-white text-[11px] font-bold shadow-md">
                  {cat.badge}
                </span>
                <h3 className="absolute bottom-3 left-4 text-xl font-bold font-display text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={`/properties?type=${encodeURIComponent(cat.title)}`}
                    className="text-xs sm:text-sm font-bold text-[#075E54] group-hover:text-[#0D8B78] flex items-center gap-1.5"
                  >
                    <span>Explore Properties</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openEnquiryModal()}
                    className="text-[11px] font-semibold text-gray-500 hover:text-gray-800"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES COLLECTION (Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
              Verified Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
              Explore Our Property Collection
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Handpicked residential plots, apartments, and resale properties in prime Hyderabad growth corridors.
            </p>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-[#075E54] hover:text-white text-gray-800 text-xs sm:text-sm font-bold transition-all self-start md:self-auto"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Demonstration Data Banner note */}
        <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <BadgeCheck className="w-5 h-5 text-[#075E54] flex-shrink-0" />
            <span>
              <strong>Note:</strong> New verified plots and flats are constantly being updated. Contact our Gachibowli team for the latest spot-registration availability.
            </span>
          </div>
          <button
            onClick={() => openEnquiryModal()}
            className="whitespace-nowrap font-bold text-[#075E54] hover:underline"
          >
            Request Custom Property Search →
          </button>
        </div>
      </section>

      {/* 5. RESALE PROPERTY SPOTLIGHT (Section 8) */}
      <section className="bg-[#172522] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A76C] bg-white/10 px-3 py-1 rounded-full">
                Immediate Possession & Prime Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3">
                Looking for Resale Properties?
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                Explore verified resale apartments, gated community flats, and residential plots with clear link documents and transparent owner negotiations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/resale"
                className="px-5 py-3 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs sm:text-sm transition-all"
              >
                Browse All Resale Listings
              </Link>
              <WhatsAppButton
                variant="glass"
                size="md"
                label="Enquire Resale on WhatsApp"
                message={getResaleWhatsAppMessage()}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resaleProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE KK ASSOCIATES (Section 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
            Our Service Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
            Real Estate Decisions Deserve Real Trust
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            We prioritize transparent guidance, legal clarity, and personalized service at every step of your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Personalized Property Assistance</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We match plots and flats based on your exact budget, preferred growth corridor, and long-term goals rather than generic sales push.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <LandPlot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Residential Plot & Flat Options</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Extensive portfolio spanning HMDA/DTCP layouts, open land parcels, luxury 2/3 BHK flats, and premium gated communities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Support for Buying & Reselling</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Full cycle support for property buyers seeking high appreciation and existing owners looking to resell at realistic market valuations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Transparent Communication</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Direct and honest representation of road widths, municipal approvals, link documents, and spot registration procedures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Local Market Guidance</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Deep micro-market knowledge across Gachibowli, Tellapur, Mokila, Shankarpally, Kokapet, and Regional Ring Road corridors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Personalized Site Visit Coordination</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Convenient weekend and weekday guided site inspections with dedicated field executives from our Gachibowli office.
            </p>
          </div>

        </div>
      </section>

      {/* 7. HOW IT WORKS (Section 11) */}
      <section className="bg-[#F8FAF8] py-16 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl font-extrabold font-display text-[#172522] mt-3">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Your hassle-free journey from enquiry to site visit and ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#075E54] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                1
              </span>
              <h3 className="font-bold text-gray-900 text-base">Tell Us What You Need</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Share your desired plot size, flat configuration, budget, or selling plans on WhatsApp or our form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#0D8B78] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                2
              </span>
              <h3 className="font-bold text-gray-900 text-base">Explore Suitable Properties</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive handpicked, verified options with layout maps, pricing, and video walkthroughs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#C7A76C] text-[#172522] font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                3
              </span>
              <h3 className="font-bold text-gray-900 text-base">Connect With Our Team</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct advisory discussion with our Gachibowli specialists to review titles, bank loans, and terms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#075E54] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                4
              </span>
              <h3 className="font-bold text-gray-900 text-base">Arrange a Site Visit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inspect the actual plot or apartment on ground with our field executive before finalizing.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => openSiteVisitModal()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              <span>Schedule a Site Visit Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. SELL YOUR PROPERTY PROMO (Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#075E54] to-[#043E37] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
              For Plot & Flat Owners
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
              Thinking of Selling Your Property?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Connect with genuine, pre-screened buyers and let KK Associates help you navigate the paperwork, site visits, and selling journey smoothly.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/sell"
                className="px-6 py-3.5 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Submit Property Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                variant="glass"
                size="md"
                label="Discuss Selling on WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. HIRING HIGHLIGHT BANNER (From provided hiring flyer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#075E54] text-white flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#075E54] text-white text-[10px] font-bold uppercase">
                  We Are Hiring
                </span>
                <span className="text-xs font-semibold text-gray-500">Gachibowli, Hyderabad</span>
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mt-1">
                Sales Executives Wanted — Join KK Associates
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                Good Salary + Attractive Incentives • Work from Site • Minimum Bachelor's Degree.
              </p>
            </div>
          </div>

          <Link
            to="/careers"
            className="w-full md:w-auto px-6 py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all text-center"
          >
            View Job Details & Apply
          </Link>
        </div>
      </section>

      {/* 10. EMI CALCULATOR TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmiCalculator />
      </section>

    </div>
  );
};
