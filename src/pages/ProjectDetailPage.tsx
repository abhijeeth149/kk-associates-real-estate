import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  ShieldCheck, 
  Phone, 
  Share2, 
  ArrowLeft, 
  CheckCircle2, 
  Car, 
  HelpCircle, 
  BadgePercent
} from 'lucide-react';
import { getProjectBySlug, VERIFIED_PROJECTS } from '../data/projects';
import { COMPANY_CONFIG } from '../config/company';
import { useModalContext } from '../context/ModalContext';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { FloorPlanViewer } from '../components/project/FloorPlanViewer';
import { ProjectVideoPlayer } from '../components/project/ProjectVideoPlayer';
import { DocumentDownloadCard } from '../components/project/DocumentDownloadCard';
import { getProjectWhatsAppMessage } from '../utils/whatsapp';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openEnquiryModal, openSiteVisitModal } = useModalContext();
  
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const project = getProjectBySlug(slug || '');

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const similarProjects = VERIFIED_PROJECTS.filter(p => p.slug !== project.slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${project.name} | KK Associates`,
        text: `Explore ${project.name} by ${project.developer} in ${project.locality}, Hyderabad.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#172522]">
      
      {/* 1. TOP BREADCRUMBS & QUICK ACTIONS BAR */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
            <Link to="/" className="hover:text-[#075E54]">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#075E54]">Projects</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900 truncate">{project.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-gray-600 hover:text-[#075E54] hover:bg-gray-100 transition-colors"
              title="Share Project"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <Link
              to="/projects"
              className="text-xs font-bold text-[#075E54] hover:text-[#043E37] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Projects</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. HERO PRESENTATION */}
      <section className="bg-gradient-to-b from-[#0B1315] to-[#172522] text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            {/* Title & Developer Badges */}
            <div className="space-y-3 max-w-3xl text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C7A76C] text-[#172522] shadow-sm">
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-[#DFCA98]">
                  {project.developer}
                </span>
                {project.reraNumber && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>RERA: {project.reraNumber}</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                {project.name}
              </h1>

              <p className="text-sm sm:text-base text-gray-300 font-normal">
                {project.tagline}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 pt-1">
                <MapPin className="w-4 h-4 text-[#C7A76C] shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Price Box & Quick CTA */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-left lg:text-right space-y-2 shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-gray-300 font-semibold block">
                Price Guidance
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#DFCA98]">
                {project.priceInfo.startingPrice || 'Price on Request'}
              </div>
              {project.priceInfo.basePricePerSqFt && (
                <p className="text-xs text-emerald-300 font-semibold">
                  Base Rate: {project.priceInfo.basePricePerSqFt}
                </p>
              )}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => openSiteVisitModal()}
                  className="py-2 px-3.5 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  Schedule Site Visit
                </button>
                <WhatsAppButton
                  size="sm"
                  variant="primary"
                  label="Request Latest Price"
                  customMessage={getProjectWhatsAppMessage(project, 'price')}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN BODY WITH STICKY SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: RICH PROJECT DETAILS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Interactive Photo Gallery */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm space-y-4">
              <div className="relative h-[340px] sm:h-[440px] w-full rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={project.galleryImages[activeGalleryIndex] || project.heroImage}
                  alt={`${project.name} - Gallery Image ${activeGalleryIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-white text-xs font-bold">
                  {activeGalleryIndex + 1} / {project.galleryImages.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeGalleryIndex === idx
                        ? 'border-[#075E54] shadow-md scale-102'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Configuration</span>
                <span className="text-sm sm:text-base font-extrabold text-[#075E54] mt-0.5 block">
                  {project.configurations.join(', ')}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Unit Sizes</span>
                <span className="text-sm sm:text-base font-extrabold text-[#172522] mt-0.5 block">
                  {project.unitSizes}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Towers / Floors</span>
                <span className="text-sm sm:text-base font-extrabold text-[#172522] mt-0.5 block">
                  {project.totalFloors || project.totalTowers || 'High-Rise'}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs text-left">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Developer</span>
                <span className="text-sm sm:text-base font-extrabold text-[#C7A76C] mt-0.5 block truncate">
                  {project.developer}
                </span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-4 text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 border-b border-gray-100 pb-3">
                Project Overview
              </h3>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-normal">
                {project.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider text-xs">
                  Key Distinctive Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {project.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#F8FAF8]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Introduction Video (if available) */}
            {project.video && (
              <ProjectVideoPlayer
                videoUrl={project.video.url}
                posterImage={project.video.poster}
                title={project.video.title}
                projectName={project.name}
              />
            )}

            {/* Interactive Floor Plans Section */}
            {project.floorPlans && project.floorPlans.length > 0 && (
              <FloorPlanViewer
                floorPlans={project.floorPlans}
                projectName={project.name}
              />
            )}

            {/* Amenities Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-6 text-left">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-xs font-bold text-[#0D8B78] uppercase tracking-wider">Lifestyle Amenities</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
                  World-Class Amenities & Features
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.amenities.map(cat => (
                  <div key={cat.category} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A76C] pb-1 border-b border-gray-100">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#075E54] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Connectivity Section */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-4 text-left">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider">Location Advantage</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
                  Strategic Hyderabad Connectivity
                </h3>
                <p className="text-xs text-gray-500 mt-1">{project.location}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {project.connectivityHighlights.map((conn, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF8] border border-gray-100">
                    <MapPin className="w-4 h-4 text-[#075E54] shrink-0" />
                    <span className="font-medium text-gray-800">{conn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Details & Special Schemes */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-6 text-left">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-xs font-bold text-[#075E54] uppercase tracking-wider">Pricing Information</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
                  Verified Pricing & Payment Terms
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {project.priceInfo.basePricePerSqFt && (
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Base Price</span>
                    <span className="text-base font-extrabold text-[#075E54] mt-0.5 block">
                      {project.priceInfo.basePricePerSqFt}
                    </span>
                  </div>
                )}
                {project.priceInfo.floorRiseCharges && (
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Floor Rise</span>
                    <span className="text-xs font-bold text-gray-800 mt-0.5 block">
                      {project.priceInfo.floorRiseCharges}
                    </span>
                  </div>
                )}
                {project.priceInfo.carParkingCharges && (
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Car Parking</span>
                    <span className="text-xs font-bold text-gray-800 mt-0.5 block">
                      {project.priceInfo.carParkingCharges}
                    </span>
                  </div>
                )}
              </div>

              {/* Special Scheme Spotlight (e.g. EMI Azadi or Smart 40:60) */}
              {project.priceInfo.specialSchemes && project.priceInfo.specialSchemes.length > 0 && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FCF8F0] to-[#F8FAF8] border border-[#C7A76C]/30 space-y-3">
                  <div className="flex items-center gap-2">
                    <BadgePercent className="w-5 h-5 text-[#C7A76C]" />
                    <h4 className="font-bold text-sm text-gray-900">
                      {project.priceInfo.specialSchemes[0].name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {project.priceInfo.specialSchemes[0].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {project.priceInfo.specialSchemes[0].highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-gray-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                  {project.priceInfo.specialSchemes[0].bankingPartners && (
                    <div className="pt-2 text-xs text-gray-600">
                      <span className="font-bold">Banking Partners: </span>
                      <span>{project.priceInfo.specialSchemes[0].bankingPartners.join(', ')}</span>
                    </div>
                  )}
                  <div className="pt-1">
                    <WhatsAppButton
                      size="sm"
                      variant="primary"
                      label="Enquire for Special Scheme on WhatsApp"
                      customMessage={getProjectWhatsAppMessage(project, 'scheme', project.priceInfo.specialSchemes[0].name)}
                    />
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-500 italic bg-gray-50 p-3 rounded-xl border border-gray-200">
                ⚠️ {project.priceInfo.disclaimer}
              </p>
            </div>

            {/* Brochures & Official Documents */}
            {project.documents && project.documents.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-4 text-left">
                <div className="border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-[#0D8B78] uppercase tracking-wider">Verified Documents</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
                    Official Brochures & Price Sheets
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Authentic developer documents available for direct inspection and download.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.documents.map((doc, idx) => (
                    <DocumentDownloadCard
                      key={idx}
                      document={doc}
                      projectName={project.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Frequently Asked Questions */}
            {project.faq && project.faq.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-4 text-left">
                <div className="border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider">Buyer Inquiries</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-0.5">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {project.faq.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F8FAF8] border border-gray-100 space-y-1.5">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#075E54] shrink-0 mt-0.5" />
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900">{item.question}</h4>
                      </div>
                      <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT 1 COLUMN: STICKY CONTACT & SITE VISIT DESK */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Main Contact Action Box */}
              <div className="bg-white rounded-2xl border-2 border-emerald-100 p-6 shadow-md text-left space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1">
                    Official Advisory Desk
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-display">
                    Enquire About {project.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Direct developer coordination by KK Associates (Gachibowli office).
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5">
                  <WhatsAppButton
                    fullWidth
                    size="md"
                    variant="primary"
                    label="Chat on WhatsApp (+91 9063613496)"
                    customMessage={getProjectWhatsAppMessage(project, 'general')}
                  />

                  <a
                    href={`tel:${COMPANY_CONFIG.rawPhone}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#075E54]" />
                    <span>Call +91 9063613496</span>
                  </a>

                  <button
                    onClick={() => openSiteVisitModal()}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Arrange Escorted Site Visit</span>
                  </button>

                  <button
                    onClick={() => openEnquiryModal()}
                    className="w-full py-2 px-3 text-center text-xs font-bold text-[#075E54] hover:underline"
                  >
                    Submit Email / Callback Request
                  </button>
                </div>

                {/* Trust guarantees */}
                <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero Brokerage on New Launches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complimentary Site Visit Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bank Loan & Legal Guidance</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 text-[11px] text-gray-500">
                  <span className="font-bold text-gray-700">Office Location: </span>
                  Gachibowli, Hyderabad, Telangana. Direct property sales assistance.
                </div>
              </div>

              {/* Similar Projects Widget */}
              {similarProjects.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-xs space-y-3 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Explore Similar Projects
                  </h4>
                  <div className="space-y-3">
                    {similarProjects.map(sp => (
                      <Link
                        key={sp.slug}
                        to={`/projects/${sp.slug}`}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <img
                          src={sp.heroImage}
                          alt={sp.name}
                          className="w-16 h-12 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-gray-900 group-hover:text-[#075E54] truncate">
                            {sp.name}
                          </h5>
                          <p className="text-[11px] text-gray-500 truncate">{sp.locality} • {sp.developer}</p>
                          <span className="text-[10px] font-bold text-[#075E54]">
                            {sp.priceInfo.startingPrice || 'On Request'}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
