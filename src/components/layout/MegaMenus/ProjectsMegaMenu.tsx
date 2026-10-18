import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Building, MapPin, Layers, ArrowRight } from 'lucide-react';
import { VERIFIED_PROJECTS } from '../../../data/projects';

interface ProjectsMegaMenuProps {
  onClose: () => void;
}

export const ProjectsMegaMenu: React.FC<ProjectsMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 animate-fadeIn z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">

        {/* Column 1: By Developer */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Building className="w-4 h-4 text-[#075E54]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">By Developer</h4>
          </div>
          <ul className="space-y-1 text-sm">
            {[
              { name: 'Prestige Group', projects: 'The Prestige City • Spring Heights' },
              { name: 'Godrej Properties & Yula', projects: 'Godrej Epoque Neopolis' },
              { name: 'Myscape Group', projects: 'Songs of the Sun • Palma' },
              { name: 'Lansum Properties', projects: 'Lansum Elena Kokapet' },
              { name: 'Ramky Estates', projects: 'The Eminent' },
              { name: 'Sri Sreenivasa Infra', projects: 'The Marquise Sky Mansions' }
            ].map(dev => (
              <li key={dev.name}>
                <Link
                  to={`/projects?developer=${encodeURIComponent(dev.name)}`}
                  onClick={onClose}
                  className="flex flex-col py-1.5 px-2 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors"
                >
                  <span className="font-semibold text-xs sm:text-sm">{dev.name}</span>
                  <span className="text-[10px] text-gray-400 truncate">{dev.projects}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: By Prime Locality */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <MapPin className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172522]">By Locality</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { loc: 'Neopolis', desc: '57-storey luxury towers', tag: 'High Growth' },
              { loc: 'Kokapet', desc: 'Golden triangle corridor', tag: 'Luxury' },
              { loc: 'Budvel / Rajendra Nagar', desc: 'Overlooking Himayat Sagar', tag: 'Lakefront' },
              { loc: 'Financial District', desc: 'Next to major IT SEZs', tag: 'Walk-to-Work' },
              { loc: 'Tellapur', desc: 'Gated green communities', tag: 'Rapid Rise' },
              { loc: 'Mokila & Shankarpally', desc: 'Clear title plots', tag: 'Villa Plots' }
            ].map(item => (
              <li key={item.loc}>
                <Link
                  to={`/projects?locality=${encodeURIComponent(item.loc.split(' / ')[0])}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-1.5 px-2 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="font-medium text-xs sm:text-sm block">{item.loc}</span>
                    <span className="text-[10px] text-gray-400">{item.desc}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {item.tag}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: By Configuration & Status */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Layers className="w-4 h-4 text-[#0D8B78]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Format & Status</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: 'New Launch Projects', path: '/projects?status=New+Launch', badge: 'Launch Phase' },
              { label: 'Under Construction Projects', path: '/projects?status=Under+Construction', badge: 'Active Progress' },
              { label: '3 BHK High-Rise Residences', path: '/projects?bhk=3', badge: '1,571 - 2,900 sft' },
              { label: '4 BHK Grand Sky Suites', path: '/projects?bhk=4', badge: '3,000 - 4,500 sft' },
              { label: 'Ultra-Luxury Sky Mansions', path: '/projects/the-marquise', badge: 'Duplex Format' },
              { label: 'Integrated Townships (64 Acres)', path: '/projects/the-prestige-city', badge: 'Mega Community' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center justify-between py-1.5 px-2 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] font-semibold text-gray-400">{item.badge}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Featured Project Spotlight */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Compass className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A76C]">Spotlight</h4>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-[#F8FAF8]">
            <img
              src="/assets/projects/godrej-epoque-neopolis/images/render_page_1.jpg"
              alt="Godrej Epoque Neopolis"
              className="w-full h-24 object-cover"
              loading="lazy"
            />
            <div className="p-3 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 uppercase">Featured Icon</span>
              <h5 className="text-xs font-bold text-gray-900 leading-tight">Godrej Epoque, Neopolis</h5>
              <p className="text-[11px] text-gray-500 line-clamp-2">
                57-storey architectural masterpiece with Sky Bridge & Osman Sagar views.
              </p>
              <Link
                to="/projects/godrej-epoque-neopolis"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#075E54] hover:underline pt-1"
              >
                <span>View Project Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <Link
            to="/projects"
            onClick={onClose}
            className="w-full py-2 px-3 text-center rounded-lg bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs block transition-all"
          >
            Explore Complete Directory ({VERIFIED_PROJECTS.length} Projects)
          </Link>
        </div>

      </div>
    </div>
  );
};
