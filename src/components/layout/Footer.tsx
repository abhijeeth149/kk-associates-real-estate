import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, MessageCircle, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_CONFIG } from '../../config/company';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getGeneralWhatsAppMessage } from '../../utils/whatsapp';
import { VERIFIED_PROJECTS } from '../../data/projects';

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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A76C]/20 text-[#DFCA98] text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Hyderabad Property Specialists • Gachibowli</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
                Ready to find your ideal plot, flat, or project?
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                Connect directly with the KK Associates real estate advisors in Gachibowli for personalized site visits, verified pricing sheets, and clear documentation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <WhatsAppButton
                variant="gold"
                size="lg"
                label="Chat on WhatsApp"
                customMessage={getGeneralWhatsAppMessage()}
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

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-emerald-800/80 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1 md:col-span-2">
            <BrandLogo variant="light" size="lg" />
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
              KK Associates (Klinkaaraa Associates) is your trusted real estate partner headquartered in Gachibowli, Hyderabad, for residential plots, open plots, high-rise apartments, and verified resale properties.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#DFCA98]">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>100% Clear Titles & TS RERA Guidance</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Buy Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/resale" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Resale Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Verified Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Our Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Sell Your Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>Market Insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-emerald-100/80 hover:text-white flex items-center justify-between group">
                  <span className="flex items-center gap-1.5">
                    <span>Careers</span>
                    <span className="px-1.5 py-0.2 text-[9px] bg-[#C7A76C] text-[#172522] rounded font-bold">Hiring</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Landmark Projects
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {VERIFIED_PROJECTS.slice(0, 6).map(proj => (
                <li key={proj.slug}>
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="text-emerald-100/80 hover:text-white transition-colors block truncate"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/projects" className="text-[#DFCA98] hover:underline font-bold text-xs pt-1 block">
                  View All Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Calculator */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#C7A76C] uppercase tracking-wider font-display">
              Services & Tools
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services#buying-assistance" className="text-emerald-100/80 hover:text-white transition-colors">
                  Property Buying Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#selling-assistance" className="text-emerald-100/80 hover:text-white transition-colors">
                  Property Selling Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#emi-calculator" className="text-emerald-100/80 hover:text-white transition-colors">
                  Home Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/services#documentation" className="text-emerald-100/80 hover:text-white transition-colors">
                  Title Due-Diligence Guidance
                </Link>
              </li>
              <li>
                <Link to="/services#site-visit" className="text-emerald-100/80 hover:text-white transition-colors">
                  Escorted Site Visits
                </Link>
              </li>
              <li>
                <Link to="/resale" className="text-emerald-100/80 hover:text-white transition-colors">
                  Resale Property Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Office & Contact Information */}
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
              Disclaimer: KK Associates is a real estate marketing and consultancy advisory firm. All project details, prices, drawings, floor plans, and measurements are sourced from verified builder communications and subject to government regulations and builder updates. TS RERA numbers are displayed where registered.
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
