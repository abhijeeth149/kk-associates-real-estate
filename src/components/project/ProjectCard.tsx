import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, ArrowRight, FileDown } from 'lucide-react';
import type { Project } from '../../types/project';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getProjectWhatsAppMessage } from '../../utils/whatsapp';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const brochureDoc = project.documents.find(d => d.category === 'Brochure');

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Image & Badges */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-md ${
            project.status === 'New Launch'
              ? 'bg-[#C7A76C] text-[#172522]'
              : 'bg-[#075E54] text-white'
          }`}>
            {project.status}
          </span>

          {project.reraNumber && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-emerald-300 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1 shadow-md">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>RERA Approved</span>
            </span>
          )}
        </div>

        {/* Bottom Details Over Image */}
        <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DFCA98]">
            {project.developer}
          </span>
          <h3 className="text-lg sm:text-xl font-bold font-display leading-tight truncate">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-gray-200">
            <MapPin className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
        
        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs py-1">
          <div className="p-2.5 rounded-xl bg-[#F8FAF8] border border-gray-100">
            <span className="text-gray-400 block text-[10px] uppercase font-semibold">Configurations</span>
            <span className="font-bold text-gray-800 truncate block mt-0.5">
              {project.configurations.join(', ')}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F8FAF8] border border-gray-100">
            <span className="text-gray-400 block text-[10px] uppercase font-semibold">Unit Sizes</span>
            <span className="font-bold text-gray-800 truncate block mt-0.5">
              {project.unitSizes}
            </span>
          </div>
        </div>

        {/* Key highlight bullet */}
        {project.keyHighlights && project.keyHighlights.length > 0 && (
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            • {project.keyHighlights[0]}
          </p>
        )}

        {/* Price & Action row */}
        <div className="pt-3 border-t border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-gray-400 font-semibold block uppercase">Starting Price</span>
              <span className="text-base sm:text-lg font-extrabold text-[#075E54]">
                {project.priceInfo.startingPrice || 'Price on Request'}
              </span>
            </div>
            {project.priceInfo.basePricePerSqFt && (
              <span className="text-xs font-semibold text-gray-500">
                {project.priceInfo.basePricePerSqFt}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to={`/projects/${project.slug}`}
              className="py-2.5 px-3 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <WhatsAppButton
              size="sm"
              variant="outline"
              label="WhatsApp"
              customMessage={getProjectWhatsAppMessage(project, 'price')}
            />
          </div>

          {brochureDoc && (
            <div className="flex items-center justify-between text-[11px] pt-1 text-gray-400">
              <span className="flex items-center gap-1">
                <FileDown className="w-3 h-3 text-[#C7A76C]" />
                <span>Brochure Available</span>
              </span>
              <a
                href={brochureDoc.fileUrl}
                download
                className="font-bold text-[#075E54] hover:underline"
              >
                Download PDF
              </a>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
