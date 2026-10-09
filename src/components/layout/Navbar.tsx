import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Heart, Sparkles } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { COMPANY_CONFIG } from '../../config/company';
import { usePropertyContext } from '../../context/PropertyContext';
import { useModalContext } from '../../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites } = usePropertyContext();
  const { openEnquiryModal } = useModalContext();

  // Handle scroll shadow and compact appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy Property', path: '/buy' },
    { name: 'Resale Properties', path: '/resale' },
    { name: 'All Properties', path: '/properties' },
    { name: 'Sell Your Property', path: '/sell' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { 
      name: 'Careers', 
      path: '/careers',
      badge: 'Hiring'
    }
  ];

  return (
    <>
      {/* Top Banner with Office Location & Quick Contact */}
      <div className="bg-[#043E37] text-white/90 text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gachibowli, Hyderabad, Telangana</span>
            </span>
            <span className="text-white/60">|</span>
            <a 
              href={`tel:${COMPANY_CONFIG.rawPhone}`} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A76C]" />
              <span>Call: {COMPANY_CONFIG.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <span className="text-amber-200 font-medium">Plots • Open Plots • Luxury Flats • Resale</span>
            <span className="text-white/40">•</span>
            <Link to="/careers" className="text-xs font-semibold text-[#C7A76C] hover:text-white transition-colors flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>We're Hiring Sales Executives</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5
                    ${
                      isActive
                        ? 'text-[#075E54] bg-[#E8F5F2]'
                        : 'text-gray-700 hover:text-[#075E54] hover:bg-gray-50'
                    }
                  `}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#C7A76C] text-[#172522]">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Favorites shortcut */}
              <Link
                to="/properties?favorites=true"
                aria-label={`View saved properties (${favorites.length})`}
                className="relative p-2.5 text-gray-600 hover:text-[#075E54] hover:bg-gray-100 rounded-xl transition-colors"
                title="Saved Properties"
              >
                <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>

              {/* WhatsApp Quick Chat */}
              <WhatsAppButton
                variant="primary"
                size="sm"
                label="WhatsApp"
              />

              {/* Enquire Now CTA Button */}
              <button
                onClick={() => openEnquiryModal()}
                className="px-4 py-2 text-xs md:text-sm font-bold bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openEnquiryModal()}
                className="px-3 py-1.5 text-xs font-bold bg-[#C7A76C] text-[#172522] rounded-lg sm:hidden"
              >
                Enquire
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2.5 rounded-xl text-gray-700 hover:text-[#075E54] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#075E54]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `
                    flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors
                    ${
                      isActive
                        ? 'bg-[#E8F5F2] text-[#075E54]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#C7A76C] text-[#172522]">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-between px-2 text-xs text-gray-500">
                <span>Direct Contact:</span>
                <a href={`tel:${COMPANY_CONFIG.rawPhone}`} className="font-bold text-[#075E54]">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <WhatsAppButton fullWidth label="Chat on WhatsApp (+91 9063613496)" size="md" />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full py-3 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold rounded-xl text-center text-sm shadow-sm transition-all"
              >
                Book a Free Property Enquiry
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
