import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { VERIFIED_PROJECTS } from '../../../data/projects';

interface NewLaunchesMegaMenuProps {
  onClose: () => void;
}

export const NewLaunchesMegaMenu: React.FC<NewLaunchesMegaMenuProps> = ({ onClose }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 animate-fadeIn z-50">
      
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#C7A76C]" />
          <div>
            <h3 className="text-sm font-bold text-gray-900 font-display">Featured Projects & New Launches</h3>
            <p className="text-xs text-gray-500">Verified residential high-rises and integrated townships across Hyderabad</p>
          </div>
        </div>
        <Link
          to="/projects"
          onClick={onClose}
          className="text-xs font-bold text-[#075E54] hover:text-[#043E37] flex items-center gap-1 group"
        >
          <span>View All {VERIFIED_PROJECTS.length} Projects</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 text-left">
        {VERIFIED_PROJECTS.slice(0, 8).map(project => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            onClick={onClose}
            className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200 bg-white"
          >
            {/* Image Thumbnail */}
            <div className="relative h-28 w-full overflow-hidden bg-gray-100">
              <img
                src={project.heroImage}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Status Badge */}
              <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                project.status === 'New Launch' 
                  ? 'bg-[#C7A76C] text-[#172522]' 
                  : 'bg-emerald-600 text-white'
              }`}>
                {project.status}
              </span>

              {/* RERA Badge if available */}
              {project.reraNumber && (
                <span className="absolute bottom-1.5 left-2 text-[9px] font-semibold text-emerald-200 flex items-center gap-0.5">
                  <ShieldCheck className="w-2.5 h-2.5 text-emerald-300" />
                  <span>RERA Verified</span>
                </span>
              )}
            </div>

            {/* Info Body */}
            <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block truncate">
                  {project.developer}
                </span>
                <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#075E54] transition-colors truncate">
                  {project.name}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#C7A76C] shrink-0" />
                  <span className="truncate">{project.locality}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-[11px]">
                <span className="text-gray-600 font-medium">
                  {project.configurations.slice(0, 2).join(' • ')}
                </span>
                <span className="font-bold text-[#075E54]">
                  {project.priceInfo.startingPrice || 'On Request'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom helper */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Genuine Developer Documents & Brochures</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#C7A76C]" />
            <span>Direct Site Visit Coordination</span>
          </span>
        </div>
        <Link
          to="/projects"
          onClick={onClose}
          className="font-bold text-[#075E54] hover:underline"
        >
          Explore All Hyderabad Projects →
        </Link>
      </div>

    </div>
  );
};
