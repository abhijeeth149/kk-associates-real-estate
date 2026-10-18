import React, { useState } from 'react';
import { ZoomIn, Download, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectFloorPlan } from '../../types/project';

interface FloorPlanViewerProps {
  floorPlans: ProjectFloorPlan[];
  projectName: string;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({ floorPlans, projectName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!floorPlans || floorPlans.length === 0) return null;

  const currentPlan = floorPlans[selectedIndex] || floorPlans[0];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-[#0D8B78] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#C7A76C]" />
            <span>Architectural Layouts</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-1">
            Floor Plans & Master Layouts
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            High-resolution plans for {projectName}. Click image to inspect full dimensions.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {floorPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedIndex === idx
                  ? 'bg-[#075E54] text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {plan.configuration}
            </button>
          ))}
        </div>
      </div>

      {/* Main Floor Plan Display Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        
        {/* Left: Interactive Preview */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-gray-50 border border-gray-200 group flex items-center justify-center min-h-[340px] max-h-[480px]">
          <img
            src={currentPlan.image}
            alt={`${projectName} - ${currentPlan.title}`}
            className="w-full h-full max-h-[460px] object-contain p-4 group-hover:scale-102 transition-transform duration-300 cursor-pointer"
            onClick={() => setLightboxOpen(true)}
            loading="lazy"
          />

          {/* Zoom Overlay Trigger */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-4 right-4 p-2.5 bg-black/75 hover:bg-black text-white rounded-xl backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold shadow-lg transition-transform hover:scale-105"
            title="Click to Zoom & View Fullscreen"
          >
            <ZoomIn className="w-4 h-4 text-[#DFCA98]" />
            <span>Click to Zoom</span>
          </button>

          {/* Quick Counter */}
          <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-bold text-gray-700 shadow-xs">
            Plan {selectedIndex + 1} of {floorPlans.length}
          </div>
        </div>

        {/* Right: Plan Details & Specs */}
        <div className="space-y-4 p-5 bg-[#F8FAF8] rounded-xl border border-gray-100 text-left">
          <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider">Plan Specifications</span>
          <h4 className="text-lg font-bold text-gray-900">{currentPlan.title}</h4>

          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500 font-medium">Configuration</span>
              <span className="font-bold text-gray-900">{currentPlan.configuration}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <span className="text-gray-500 font-medium">Super Built-up Area</span>
              <span className="font-bold text-[#075E54]">{currentPlan.superBuiltUpArea}</span>
            </div>
            {currentPlan.carpetArea && (
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Carpet Area</span>
                <span className="font-bold text-gray-900">{currentPlan.carpetArea}</span>
              </div>
            )}
            {currentPlan.facing && (
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-500 font-medium">Facing / Orientation</span>
                <span className="font-bold text-gray-900">{currentPlan.facing}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={currentPlan.image}
              download={`${projectName}-${currentPlan.configuration}-floor-plan.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#075E54]" />
              <span>Download Plan Image</span>
            </a>

            <button
              onClick={() => setLightboxOpen(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-[#DFCA98]" />
              <span>Inspect in Fullscreen</span>
            </button>
          </div>

          <p className="text-[10px] text-gray-400 italic">
            * Dimensions shown are based on developer architectural drawings and subject to final survey.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white p-2 border-b border-white/10">
            <div>
              <h4 className="font-bold text-sm sm:text-base">{projectName} — {currentPlan.title}</h4>
              <p className="text-xs text-white/60">{currentPlan.configuration} • {currentPlan.superBuiltUpArea}</p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close fullscreen modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Fullscreen Image Container */}
          <div className="flex-1 flex items-center justify-center p-2 overflow-auto">
            <img
              src={currentPlan.image}
              alt={`${projectName} - ${currentPlan.title}`}
              className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Bottom Bar with Prev / Next */}
          <div className="flex items-center justify-between text-white p-2 border-t border-white/10">
            <button
              onClick={() => setSelectedIndex(prev => (prev > 0 ? prev - 1 : floorPlans.length - 1))}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Plan</span>
            </button>

            <span className="text-xs text-white/60">
              {selectedIndex + 1} of {floorPlans.length}
            </span>

            <button
              onClick={() => setSelectedIndex(prev => (prev < floorPlans.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1"
            >
              <span>Next Plan</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
