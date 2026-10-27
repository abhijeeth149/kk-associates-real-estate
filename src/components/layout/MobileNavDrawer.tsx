import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  Phone, 
  Building2, 
  Sparkles, 
  RefreshCw, 
  Wrench, 
  Heart, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { BrandLogo } from '../common/BrandLogo';
import { VERIFIED_PROJECTS } from '../../data/projects';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
  favoritesCount: number;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
  favoritesCount
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="p-3.5 sm:p-4 bg-[#075E54] text-white flex items-center justify-between border-b border-white/10 sticky top-0 z-20">
          <BrandLogo variant="light" size="sm" asLink onClick={onClose} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick CTA Actions Row */}
        <div className="p-3 bg-[#E8F5F2] border-b border-emerald-100 flex items-center justify-between gap-2">
          <Link
            to="/sell"
            onClick={onClose}
            className="flex-1 py-2 px-2.5 bg-[#075E54] text-white text-xs font-bold rounded-lg text-center shadow-sm"
          >
            List Property
          </Link>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="flex-1 py-2 px-2.5 bg-[#C7A76C] text-[#172522] text-xs font-bold rounded-lg text-center shadow-sm"
          >
            Enquire Now
          </button>
        </div>

        {/* Nav Accordion & Links */}
        <div className="flex-1 p-4 space-y-2 text-sm">

          {/* Home */}
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) => `
              block px-3 py-2.5 rounded-xl font-bold transition-colors
              ${isActive ? 'bg-[#E8F5F2] text-[#075E54]' : 'text-gray-800 hover:bg-gray-50'}
            `}
          >
            Home
          </NavLink>

          {/* Buy Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('buy')}
              className="w-full flex items-center justify-between p-3 font-bold text-gray-800 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#075E54]" />
                <span>Buy Property</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === 'buy' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'buy' && (
              <div className="p-3 bg-[#F8FAF8] border-t border-gray-100 space-y-2 text-xs">
                <div className="font-bold text-gray-500 uppercase tracking-wider text-[10px]">Property Types</div>
                {[
                  { name: 'Residential Plots', param: 'Residential Plot' },
                  { name: 'Open Plots', param: 'Open Plot' },
                  { name: 'Flats & Apartments', param: 'Premium Flat' },
                  { name: 'Gated Communities', param: 'Residential Apartment' }
                ].map(item => (
                  <Link
                    key={item.name}
                    to={`/properties?type=${encodeURIComponent(item.param)}`}
                    onClick={onClose}
                    className="block py-1 px-2 text-gray-700 hover:text-[#075E54]"
                  >
                    • {item.name}
                  </Link>
                ))}
                <div className="font-bold text-gray-500 uppercase tracking-wider text-[10px] pt-2">Popular Areas</div>
                {['Gachibowli', 'Kokapet', 'Neopolis', 'Budvel', 'Tellapur', 'Mokila', 'Shankarpally'].map(area => (
                  <Link
                    key={area}
                    to={`/properties?location=${encodeURIComponent(area)}`}
                    onClick={onClose}
                    className="inline-block py-1 px-2 mr-1 mb-1 rounded bg-white border border-gray-200 text-gray-700 text-[11px]"
                  >
                    {area}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    to="/buy"
                    onClick={onClose}
                    className="text-xs font-bold text-[#075E54] flex items-center gap-1"
                  >
                    <span>Open Buy Property Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resale Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('resale')}
              className="w-full flex items-center justify-between p-3 font-bold text-gray-800 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#075E54]" />
                <span>Resale Properties</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === 'resale' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'resale' && (
              <div className="p-3 bg-[#F8FAF8] border-t border-gray-100 space-y-1.5 text-xs">
                <Link to="/resale?type=Resale+Flat" onClick={onClose} className="block py-1 px-2 text-gray-700 hover:text-[#075E54]">
                  • Resale Flats (Kondapur / Gachibowli)
                </Link>
                <Link to="/resale?type=Resale+Plot" onClick={onClose} className="block py-1 px-2 text-gray-700 hover:text-[#075E54]">
                  • Resale Plots (Shankarpally / Mokila)
                </Link>
                <Link to="/sell" onClick={onClose} className="block py-1 px-2 font-bold text-[#C7A76C]">
                  • Sell / List Your Property
                </Link>
                <div className="pt-2">
                  <Link to="/resale" onClick={onClose} className="text-xs font-bold text-[#075E54] flex items-center gap-1">
                    <span>Browse All Resale Properties</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* New Launches / Projects Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('projects')}
              className="w-full flex items-center justify-between p-3 font-bold text-gray-800 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C7A76C]" />
                <span>New Launches & Projects</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === 'projects' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'projects' && (
              <div className="p-3 bg-[#F8FAF8] border-t border-gray-100 space-y-2 text-xs">
                {VERIFIED_PROJECTS.map(proj => (
                  <Link
                    key={proj.slug}
                    to={`/projects/${proj.slug}`}
                    onClick={onClose}
                    className="block p-1.5 rounded hover:bg-white transition-colors"
                  >
                    <span className="font-bold text-gray-900 block truncate">{proj.name}</span>
                    <span className="text-[10px] text-gray-500">{proj.developer} • {proj.locality}</span>
                  </Link>
                ))}
                <div className="pt-1">
                  <Link to="/projects" onClick={onClose} className="text-xs font-bold text-[#075E54] flex items-center gap-1">
                    <span>View All Projects Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Our Services Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between p-3 font-bold text-gray-800 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#075E54]" />
                <span>Our Services</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'services' && (
              <div className="p-3 bg-[#F8FAF8] border-t border-gray-100 space-y-1.5 text-xs">
                <Link to="/services#buying-assistance" onClick={onClose} className="block py-1 px-2 text-gray-700">
                  • Buying & Selling Assistance
                </Link>
                <Link to="/services#emi-calculator" onClick={onClose} className="block py-1 px-2 text-gray-700">
                  • Home Loan EMI Calculator
                </Link>
                <Link to="/services#documentation" onClick={onClose} className="block py-1 px-2 text-gray-700">
                  • Documentation & Title Guidance
                </Link>
                <Link to="/services#site-visit" onClick={onClose} className="block py-1 px-2 text-gray-700">
                  • Site Visit Coordination
                </Link>
              </div>
            )}
          </div>

          {/* All Properties */}
          <NavLink
            to="/properties"
            onClick={onClose}
            className={({ isActive }) => `
              block px-3 py-2.5 rounded-xl font-bold transition-colors
              ${isActive ? 'bg-[#E8F5F2] text-[#075E54]' : 'text-gray-800 hover:bg-gray-50'}
            `}
          >
            All Properties
          </NavLink>

          {/* About Us */}
          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) => `
              block px-3 py-2.5 rounded-xl font-bold transition-colors
              ${isActive ? 'bg-[#E8F5F2] text-[#075E54]' : 'text-gray-800 hover:bg-gray-50'}
            `}
          >
            About Us
          </NavLink>

          {/* Blogs */}
          <NavLink
            to="/blogs"
            onClick={onClose}
            className={({ isActive }) => `
              block px-3 py-2.5 rounded-xl font-bold transition-colors
              ${isActive ? 'bg-[#E8F5F2] text-[#075E54]' : 'text-gray-800 hover:bg-gray-50'}
            `}
          >
            Market Insights & Blogs
          </NavLink>

          {/* Careers */}
          <NavLink
            to="/careers"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-gray-50"
          >
            <span>Careers</span>
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#C7A76C] text-[#172522]">
              Hiring
            </span>
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) => `
              block px-3 py-2.5 rounded-xl font-bold transition-colors
              ${isActive ? 'bg-[#E8F5F2] text-[#075E54]' : 'text-gray-800 hover:bg-gray-50'}
            `}
          >
            Contact
          </NavLink>

          {/* Saved Properties */}
          <Link
            to="/properties?favorites=true"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-gray-800 hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}`} />
              <span>Saved Properties</span>
            </div>
            {favoritesCount > 0 && (
              <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {favoritesCount}
              </span>
            )}
          </Link>

        </div>

        {/* Drawer Footer with Direct Contact */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3 sticky bottom-0 z-20">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Direct Phone:</span>
            <a href={`tel:${COMPANY_CONFIG.rawPhone}`} className="font-bold text-[#075E54] flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>{COMPANY_CONFIG.phone}</span>
            </a>
          </div>

          <WhatsAppButton fullWidth label="Chat on WhatsApp" size="md" />
        </div>

      </div>
    </div>
  );
};
