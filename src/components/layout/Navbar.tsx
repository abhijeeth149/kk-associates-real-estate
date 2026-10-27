import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Heart, 
  Sparkles, 
  ChevronDown, 
  PlusCircle 
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { COMPANY_CONFIG } from '../../config/company';
import { usePropertyContext } from '../../context/PropertyContext';
import { useModalContext } from '../../context/ModalContext';

import { BuyMegaMenu } from './MegaMenus/BuyMegaMenu';
import { ResaleMegaMenu } from './MegaMenus/ResaleMegaMenu';
import { NewLaunchesMegaMenu } from './MegaMenus/NewLaunchesMegaMenu';
import { ServicesMegaMenu } from './MegaMenus/ServicesMegaMenu';
import { ProjectsMegaMenu } from './MegaMenus/ProjectsMegaMenu';
import { MobileNavDrawer } from './MobileNavDrawer';

type ActiveMegaMenu = 'buy' | 'resale' | 'launches' | 'services' | 'projects' | null;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<ActiveMegaMenu>(null);
  
  const location = useLocation();
  const { favorites } = usePropertyContext();
  const { openEnquiryModal } = useModalContext();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll shadow and compact appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname, location.search]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close when clicking outside nav
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: ActiveMegaMenu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const handleToggle = (menu: ActiveMegaMenu) => {
    setActiveMegaMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* Top Banner with Office Location & Quick Contact */}
      <div className="bg-[#043E37] text-white/90 text-xs py-1.5 px-4 hidden md:block border-b border-white/10 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gachibowli, Hyderabad, Telangana</span>
            </span>
            <span className="text-white/40">|</span>
            <a 
              href={`tel:${COMPANY_CONFIG.rawPhone}`} 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>Call: {COMPANY_CONFIG.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="text-emerald-300 font-medium">
              Residential Plots • High-Rise Apartments • Verified Resale
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <Link 
              to="/careers" 
              className="text-xs font-semibold text-[#DFCA98] hover:text-white transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#C7A76C]" />
              <span>We're Hiring Sales Executives</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        ref={navContainerRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white/95 backdrop-blur-sm py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-5 xl:gap-8">
            
            {/* Logo */}
            <BrandLogo size="md" className="flex-shrink-0 mr-1 lg:mr-2" />

            {/* Desktop Navigation Links & Mega Menu Triggers */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink">
              
              {/* 1. BUY */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('buy')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggle('buy')}
                  aria-expanded={activeMegaMenu === 'buy'}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    activeMegaMenu === 'buy' || location.pathname === '/buy'
                      ? 'text-[#075E54] bg-[#E8F5F2]'
                      : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                  }`}
                >
                  <span>Buy</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'buy' ? 'rotate-180 text-[#075E54]' : 'text-gray-400'}`} />
                </button>
                {activeMegaMenu === 'buy' && (
                  <BuyMegaMenu onClose={() => setActiveMegaMenu(null)} />
                )}
              </div>

              {/* 2. RESALE */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resale')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggle('resale')}
                  aria-expanded={activeMegaMenu === 'resale'}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    activeMegaMenu === 'resale' || location.pathname === '/resale'
                      ? 'text-[#075E54] bg-[#E8F5F2]'
                      : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                  }`}
                >
                  <span>Resale</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'resale' ? 'rotate-180 text-[#075E54]' : 'text-gray-400'}`} />
                </button>
                {activeMegaMenu === 'resale' && (
                  <ResaleMegaMenu onClose={() => setActiveMegaMenu(null)} />
                )}
              </div>

              {/* 3. NEW LAUNCHES */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('launches')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggle('launches')}
                  aria-expanded={activeMegaMenu === 'launches'}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    activeMegaMenu === 'launches' || location.pathname.startsWith('/projects')
                      ? 'text-[#075E54] bg-[#E8F5F2]'
                      : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                  }`}
                >
                  <span>New Launches</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A76C]" />
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'launches' ? 'rotate-180 text-[#075E54]' : 'text-gray-400'}`} />
                </button>
                {activeMegaMenu === 'launches' && (
                  <NewLaunchesMegaMenu onClose={() => setActiveMegaMenu(null)} />
                )}
              </div>

              {/* 4. OUR SERVICES */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggle('services')}
                  aria-expanded={activeMegaMenu === 'services'}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    activeMegaMenu === 'services' || location.pathname === '/services'
                      ? 'text-[#075E54] bg-[#E8F5F2]'
                      : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                  }`}
                >
                  <span>Our Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'services' ? 'rotate-180 text-[#075E54]' : 'text-gray-400'}`} />
                </button>
                {activeMegaMenu === 'services' && (
                  <ServicesMegaMenu onClose={() => setActiveMegaMenu(null)} />
                )}
              </div>

              {/* 5. PROJECTS / AREAS */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('projects')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggle('projects')}
                  aria-expanded={activeMegaMenu === 'projects'}
                  className={`px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    activeMegaMenu === 'projects'
                      ? 'text-[#075E54] bg-[#E8F5F2]'
                      : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                  }`}
                >
                  <span>Projects / Areas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'projects' ? 'rotate-180 text-[#075E54]' : 'text-gray-400'}`} />
                </button>
                {activeMegaMenu === 'projects' && (
                  <ProjectsMegaMenu onClose={() => setActiveMegaMenu(null)} />
                )}
              </div>

              {/* 6. ALL PROPERTIES */}
              <NavLink
                to="/properties"
                className={({ isActive }) => `
                  px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200
                  ${isActive ? 'text-[#075E54] bg-[#E8F5F2]' : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'}
                `}
              >
                All Properties
              </NavLink>

              {/* 7. ABOUT US */}
              <NavLink
                to="/about"
                className={({ isActive }) => `
                  px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200
                  ${isActive ? 'text-[#075E54] bg-[#E8F5F2]' : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'}
                `}
              >
                About Us
              </NavLink>

              {/* 8. BLOGS */}
              <NavLink
                to="/blogs"
                className={({ isActive }) => `
                  px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200
                  ${isActive ? 'text-[#075E54] bg-[#E8F5F2]' : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'}
                `}
              >
                Blogs
              </NavLink>

            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 xl:gap-3">
              
              {/* Favorites shortcut */}
              <Link
                to="/properties?favorites=true"
                aria-label={`View saved properties (${favorites.length})`}
                className="hidden sm:flex relative p-2.5 text-gray-600 hover:text-[#075E54] hover:bg-gray-100 rounded-xl transition-colors"
                title="Saved Properties"
              >
                <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* Post / Sell Property Button */}
              <Link
                to="/sell"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs md:text-sm font-bold text-[#075E54] border border-[#075E54]/30 hover:bg-[#E8F5F2] rounded-xl transition-colors shadow-xs"
              >
                <PlusCircle className="w-4 h-4 text-[#0D8B78]" />
                <span>Sell Property</span>
              </Link>

              {/* WhatsApp Quick Chat */}
              <div className="hidden md:block">
                <WhatsAppButton
                  variant="primary"
                  size="sm"
                  label="WhatsApp"
                />
              </div>

              {/* Enquire Now CTA Button */}
              <button
                onClick={() => openEnquiryModal()}
                className="px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                Enquire Now
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2 rounded-xl text-gray-700 hover:text-[#075E54] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#075E54] lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNavDrawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenEnquiry={openEnquiryModal}
          favoritesCount={favorites.length}
        />
      </header>
    </>
  );
};
