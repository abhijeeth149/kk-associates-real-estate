import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, MapPin, BadgeCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { WhatsAppButton } from '../../common/WhatsAppButton';
import { getResaleWhatsAppMessage } from '../../../utils/whatsapp';

interface ResaleMegaMenuProps {
  onClose: () => void;
}

export const ResaleMegaMenu: React.FC<ResaleMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 animate-fadeIn z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">

        {/* Column 1: Resale Property Types */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <RefreshCw className="w-4 h-4 text-[#075E54]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Resale Properties</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: 'Resale Flats', type: 'Resale Flat', note: 'Ready to Move' },
              { label: 'Resale Gated Apartments', type: 'Resale Flat', note: 'Clubhouse Active' },
              { label: 'Resale Residential Plots', type: 'Resale Plot', note: 'Immediate Registration' },
              { label: 'Resale Open Plots', type: 'Resale Plot', note: 'Gated Layouts' },
              { label: 'Independent Bungalows', type: 'Resale Flat', note: 'Established Areas' },
              { label: 'Commercial Resale Units', type: 'plot', note: 'Pre-leased Income' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={`/resale?type=${encodeURIComponent(item.type)}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors group"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#0D8B78] font-semibold">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Popular Resale Locations */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <MapPin className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172522]">Popular Locations</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { name: 'Kondapur', detail: 'Near HITEC City & Malls' },
              { name: 'Gachibowli', detail: 'Financial Corridor' },
              { name: 'Tellapur', detail: 'Premium Resale High-Rises' },
              { name: 'Kokapet', detail: 'Golden Corridor' },
              { name: 'Shankarpally', detail: 'Gated Resale Plots' },
              { name: 'Narsingi', detail: 'ORR Junction Living' },
              { name: 'Mokila', detail: 'Villa Communities' }
            ].map(loc => (
              <li key={loc.name}>
                <Link
                  to={`/resale?location=${encodeURIComponent(loc.name)}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1 px-2.5 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{loc.name}</span>
                  <span className="text-[10px] text-gray-400">{loc.detail}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resale Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <BadgeCheck className="w-4 h-4 text-[#0D8B78]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Resale Services</h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/sell"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Sell Your Property</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#075E54]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">List your plot or apartment with direct buyer matching</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact?service=valuation"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Property Valuation Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#075E54]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">Understand prevailing market rates for your property</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact?service=documentation"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Title Due-Diligence</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#075E54]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">Legal guidance on 30-year link papers and encumbrance</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Actions & WhatsApp Support */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <HelpCircle className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A76C]">Resale Desk</h4>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAF8] border border-gray-200 space-y-3">
            <h5 className="text-xs font-bold text-[#172522]">Have an Existing Property to Resell?</h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              We connect genuine sellers directly with verified buyers across West Hyderabad. Zero spam, complete paperwork support.
            </p>
            <Link
              to="/sell"
              onClick={onClose}
              className="w-full py-2 px-3 text-center rounded-lg bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs block transition-all shadow-sm"
            >
              List Property for Resale
            </Link>
          </div>

          <WhatsAppButton
            fullWidth
            size="sm"
            variant="primary"
            label="Enquire for Resale on WhatsApp"
            customMessage={getResaleWhatsAppMessage()}
          />
        </div>

      </div>
    </div>
  );
};
