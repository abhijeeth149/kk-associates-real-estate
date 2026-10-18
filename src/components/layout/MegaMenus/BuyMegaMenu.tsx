import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, LandPlot, Home, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BuyMegaMenuProps {
  onClose: () => void;
}

export const BuyMegaMenu: React.FC<BuyMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 animate-fadeIn z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
        
        {/* Column 1: Property Type */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Building2 className="w-4 h-4 text-[#075E54]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Property Type</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: 'Residential Plots', param: 'Residential Plot', icon: LandPlot, count: 'Clear Titles' },
              { label: 'Open Plots', param: 'Open Plot', icon: LandPlot, count: 'Clear Title' },
              { label: 'Flats & Apartments', param: 'Premium Flat', icon: Building2, count: '2 & 3 BHK' },
              { label: 'Residential Apartments', param: 'Residential Apartment', icon: Building2, count: 'Gated Communities' },
              { label: 'Luxury Sky Villas', param: 'Residential Apartment', icon: Home, count: 'Kokapet & Budvel' },
              { label: 'Independent Houses', param: 'plot', icon: Home, count: 'Prime Corridors' },
              { label: 'Commercial Properties', param: 'plot', icon: Building2, count: 'High Yield' },
              { label: 'Gated Community Enclaves', param: 'apartment', icon: ShieldCheck, count: 'Verified' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={`/properties?type=${encodeURIComponent(item.param)}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors group"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-[#0D8B78] font-semibold">{item.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Popular Areas */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <LandPlot className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172522]">Popular Areas</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { name: 'Gachibowli', desc: 'Financial Hub' },
              { name: 'Kokapet', desc: 'Golden Triangle' },
              { name: 'Neopolis', desc: '57-Storey High-Rises' },
              { name: 'Budvel / Rajendra Nagar', desc: 'Lakefront Living' },
              { name: 'Tellapur', desc: 'Fastest Growing Axis' },
              { name: 'Mokila', desc: 'Gated Villa Plots' },
              { name: 'Shankarpally', desc: 'Open Plots & RRR' },
              { name: 'Kollur', desc: 'Near ORR Exit 2' },
              { name: 'Narsingi', desc: 'Close to Financial District' },
              { name: 'Shadnagar', desc: 'High ROI Land Banking' }
            ].map(area => (
              <li key={area.name}>
                <Link
                  to={`/properties?location=${encodeURIComponent(area.name)}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1 px-2.5 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{area.name}</span>
                  <span className="text-[10px] text-gray-400 font-normal">{area.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Search by Configuration */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Home className="w-4 h-4 text-[#0D8B78]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Search by BHK</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: '2 BHK Flats', bedrooms: '2', tag: 'Budget Friendly' },
              { label: '2.5 BHK Flats', bedrooms: '2', tag: 'With Study' },
              { label: '3 BHK Luxury Residences', bedrooms: '3', tag: 'Family Size' },
              { label: '4 BHK Grand Sky Suites', bedrooms: '4+', tag: 'Penthouse Format' },
              { label: 'Luxury Corner Villas', type: 'Residential Apartment', tag: 'All Sides Sun' },
              { label: 'Residential Plots (200 - 300 Sq. Yds)', type: 'Residential Plot', tag: 'Ready to Register' },
              { label: 'Commercial & High Street Retail', type: 'plot', tag: 'High Footfall' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={item.bedrooms ? `/properties?bedrooms=${item.bedrooms}` : `/properties?type=${encodeURIComponent(item.type || '')}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">{item.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Popular Searches & Featured Card */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Sparkles className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A76C]">Popular Searches</h4>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { label: 'New Projects', path: '/projects' },
              { label: 'Resale Flats', path: '/resale' },
              { label: 'Plots in Mokila', path: '/properties?location=Mokila' },
              { label: 'Budvel Lakeview', path: '/projects/prestige-spring-heights' },
              { label: 'Neopolis 57 Storeys', path: '/projects/godrej-epoque-neopolis' },
              { label: 'Tellapur 3 BHK', path: '/properties?location=Tellapur' }
            ].map(tag => (
              <Link
                key={tag.label}
                to={tag.path}
                onClick={onClose}
                className="text-xs px-2.5 py-1.5 rounded-full bg-gray-100 hover:bg-[#075E54] hover:text-white text-gray-700 font-medium transition-all"
              >
                {tag.label}
              </Link>
            ))}
          </div>

          {/* Quick Verified Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#075E54] to-[#043E37] text-white space-y-2">
            <div className="flex items-center gap-1.5 text-[#DFCA98] text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Verified Titles</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Every plot and flat is vetted by KK Associates with 30-year link verification and TS RERA compliance.
            </p>
            <Link
              to="/properties"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#DFCA98] hover:text-white pt-1"
            >
              <span>Explore All Verified Listings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
