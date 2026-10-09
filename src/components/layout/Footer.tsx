import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, MessageCircle, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_CONFIG } from '../../config/company';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getGeneralWhatsAppMessage } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#043E37] text-white pt-16 pb-12 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Card inside footer */}
        <div className="bg-gradient-to-r from-[#075E54] to-[#0D8B78] rounded-3xl p-8 sm:p-10 mb-16 border border-emerald-600/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A76C]/20 text-[#C7A76C] text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Hyderabad Property Specialists</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
                Ready to find your ideal plot or flat?
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                Connect directly with the KK Associates real estate advisors in Gachibowli for personalized site visits and clear documentation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <WhatsAppButton
                variant="gold"
                size="lg"
                label="Chat on WhatsApp"
                message={getGeneralWhatsAppMessage()}
                className="w-full sm:w-auto"
              />
              <a
                href={`tel:${COMPANY_CONFIG.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all border border-white/20"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>Call {COMPANY_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="lg" />
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              KK Associates (Klinkaaraa Associates) is your dedicated partner for discovering verified residential plots, open plots, luxury apartments, and hassle-free resale properties in Hyderabad.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C7A76C]">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Transparent Advisory & Site Visits</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>Buy Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/resale" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>Resale Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>Explore All Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>Sell Your Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span>About KK Associates</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-emerald-100/80 hover:text-white hover:underline flex items-center justify-between group">
                  <span className="flex items-center gap-1.5">
                    <span>Careers</span>
                    <span className="px-1.5 py-0.2 text-[9px] bg-[#C7A76C] text-[#172522] rounded font-bold">Hiring</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Property Categories
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/properties?type=Residential%20Plot" className="text-emerald-100/80 hover:text-white transition-colors">
                  Residential Plots (HMDA/DTCP)
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Open%20Plot" className="text-emerald-100/80 hover:text-white transition-colors">
                  Open Plots & Land Enclaves
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Premium%20Flat" className="text-emerald-100/80 hover:text-white transition-colors">
                  Premium 2 & 3 BHK Flats
                </Link>
              </li>
              <li>
                <Link to="/properties?type=Residential%20Apartment" className="text-emerald-100/80 hover:text-white transition-colors">
                  Residential Apartments & Gated Communities
                </Link>
              </li>
              <li>
                <Link to="/resale" className="text-emerald-100/80 hover:text-white transition-colors">
                  Verified Resale Flats & Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Office & Contact
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A76C] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.location.addressString}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7A76C] flex-shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white underline">
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A76C] flex-shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.rawPhone}`} className="hover:text-white font-medium">
                  {COMPANY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a 
                  href={`https://wa.me/${COMPANY_CONFIG.rawPhone}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                >
                  WhatsApp: +91 9063613496
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-emerald-800/60 text-emerald-200/80 text-xs">
                <Clock className="w-4 h-4 text-[#C7A76C] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.workingHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} KK Associates (Klinkaaraa Associates). All Rights Reserved.</p>
            <p className="text-[11px] text-emerald-300/60">
              Disclaimer: All real estate property representations, measurements, and specifications are for guidance. Legal ownership papers and RERA certifications are subject to verification prior to final transactions.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
