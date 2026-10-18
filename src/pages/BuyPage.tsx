import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LandPlot, Building2, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { PropertyCard } from '../components/property/PropertyCard';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { useModalContext } from '../context/ModalContext';
import { VERIFIED_PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/project/ProjectCard';

export const BuyPage: React.FC = () => {
  const { properties } = usePropertyContext();
  const { openSiteVisitModal } = useModalContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeParam = searchParams.get('type') || '';
  const locationParam = searchParams.get('location') || '';

  const buyProperties = useMemo(() => {
    return properties.filter(p => {
      if (p.purpose !== 'buy') return false;
      if (typeParam && p.type !== typeParam && p.category !== typeParam) return false;
      if (locationParam && !p.location.toLowerCase().includes(locationParam.toLowerCase()) && !p.locality.toLowerCase().includes(locationParam.toLowerCase())) return false;
      return true;
    });
  }, [properties, typeParam, locationParam]);

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#075E54] to-[#0D8B78] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-left">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
            Primary Purchase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            Buy Verified Plots & Luxury Flats in Hyderabad
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
            Discover verified clear-title residential plots and modern high-rise apartments across Hyderabad's highest appreciating growth corridors.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <WhatsAppButton
              variant="gold"
              size="md"
              label="Talk to Purchase Advisor"
            />
            <button
              onClick={() => openSiteVisitModal()}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Buyer Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-[#E8F5F2] text-[#075E54]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Clear Title & Approvals</h2>
            <p className="text-xs text-gray-600 mt-1">All properties are screened for clear legal titles and statutory approvals.</p>
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

      {/* Active Filter indicator */}
      {(typeParam || locationParam) && (
        <div className="p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-600">Active Filters:</span>
            {typeParam && <span className="bg-emerald-50 text-[#075E54] px-2 py-0.5 rounded font-bold">{typeParam}</span>}
            {locationParam && <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded font-bold">{locationParam}</span>}
          </div>
          <button onClick={clearFilters} className="text-rose-600 hover:underline flex items-center gap-1 font-bold">
            <X className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>
        </div>
      )}

      {/* Listings */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-display text-gray-900">
            Available Plots & Apartments ({buyProperties.length})
          </h2>
          <Link to="/properties" className="text-xs font-bold text-[#075E54] hover:underline flex items-center gap-1">
            <span>Filter All Properties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {buyProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {buyProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-gray-100 space-y-3">
            <p className="text-sm font-semibold text-gray-800">No properties matched the selected filters.</p>
            <button onClick={clearFilters} className="px-4 py-2 bg-[#075E54] text-white rounded-xl text-xs font-bold">
              Show All Buy Listings
            </button>
          </div>
        )}
      </div>

      {/* Featured Verified Projects Spotlight in Buy Page */}
      <div className="pt-8 border-t border-gray-100 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C7A76C] bg-amber-50 px-2.5 py-0.5 rounded-full inline-block">
              High-Rise & Townships
            </span>
            <h2 className="text-2xl font-bold font-display text-gray-900 mt-1">
              Explore Verified Primary Projects
            </h2>
            <p className="text-xs text-gray-500">
              Direct developer allotments with zero brokerage for landmark projects in Neopolis, Kokapet, and Budvel.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-xs font-bold text-[#075E54] hover:underline flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_PROJECTS.slice(0, 3).map(proj => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </div>

    </div>
  );
};
