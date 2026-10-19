import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  LandPlot, 
  Users, 
  Compass, 
  FileText,
  Sparkles,
  Car
} from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';
import { useModalContext } from '../context/ModalContext';
import { HeroBackgroundSlideshow } from '../components/home/HeroBackgroundSlideshow';
import { PropertyCard } from '../components/property/PropertyCard';
import { HeroSearchPanel } from '../components/property/HeroSearchPanel';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { EmiCalculator } from '../components/tools/EmiCalculator';
import { ProjectCard } from '../components/project/ProjectCard';
import { VERIFIED_PROJECTS } from '../data/projects';
import { getResaleWhatsAppMessage } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const { properties } = usePropertyContext();
  const { openSiteVisitModal } = useModalContext();

  const resaleProperties = properties.filter(p => p.purpose === 'resale').slice(0, 3);
  const showcaseProjects = VERIFIED_PROJECTS.slice(0, 6);

  const hyderabadLocalities = [
    { name: 'Neopolis', subtitle: '57-Storey High-Rises', count: 'Godrej & Yula', img: '/assets/projects/godrej-epoque-neopolis/images/render_page_1.jpg' },
    { name: 'Kokapet', subtitle: 'Golden Triangle Corridor', count: 'Elena & Marquise', img: '/assets/projects/lansum-elena/images/render_page_1.jpg' },
    { name: 'Budvel / Rajendra Nagar', subtitle: 'Lakefront Living', count: 'The Prestige City', img: '/assets/projects/the-prestige-city/images/render_page_1.jpg' },
    { name: 'Tellapur', subtitle: 'Fastest Rising Axis', count: 'Myscape Palma', img: '/assets/projects/myscape-palma/images/render_page_1.jpg' },
    { name: 'Financial District', subtitle: 'Walk-to-Work Tech Hub', count: 'Songs of the Sun', img: '/assets/projects/myscape-songs-of-the-sun/images/render_page_1.jpg' },
    { name: 'Mokila', subtitle: 'Gated Villa Plots', count: 'Clear Titles', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
    { name: 'Shankarpally', subtitle: 'Green Corridor & RRR', count: 'High ROI Land', img: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80' },
    { name: 'Gachibowli', subtitle: 'Corporate Headquarters', count: 'KK Associates HQ', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center bg-[#0B1315] text-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        {/* Automatic Background Slideshow with curated 4-image showcase and brighter subtle overlay */}
        <HeroBackgroundSlideshow />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold animate-fadeIn shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C7A76C] animate-pulse" />
            <span>KK ASSOCIATES • Klinkaaraa Associates • Gachibowli, Hyderabad</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Find Your Perfect Property<br />
            <span className="text-[#DFCA98] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              in Hyderabad
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-100 leading-relaxed font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Explore premium residential plots, apartments, villas, and resale properties with KK Associates. Your trusted real estate partner in Hyderabad.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/properties"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-500/30"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm sm:text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Verified Projects</span>
            </Link>

            <WhatsAppButton
              variant="glass"
              size="lg"
              label="Talk to Our Team"
              className="w-full sm:w-auto"
            />
          </div>

        </div>
      </section>

      {/* 2. HERO SEARCH PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSearchPanel />
      </section>

      {/* 3. VERIFIED FEATURED PROJECTS (Using Genuine Assets) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C7A76C] bg-amber-50 px-3 py-1 rounded-full">
              Genuine Projects & Brochures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
              Featured Residential Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Explore authentic high-rises and townships with verified developer brochures, price sheets, and video tours.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-[#075E54] hover:text-white text-gray-800 text-xs sm:text-sm font-bold transition-all self-start md:self-auto"
          >
            <span>View All {VERIFIED_PROJECTS.length} Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcaseProjects.map(proj => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </section>

      {/* 5. EXPLORE BY HYDERABAD LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#075E54] bg-[#E8F5F2] px-3 py-1 rounded-full">
            Strategic Growth Corridors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
            Explore Properties by Location
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            West Hyderabad is experiencing unprecedented infrastructure expansion. Discover verified plots and apartments in prime growth hubs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {hyderabadLocalities.map(loc => (
            <Link
              key={loc.name}
              to={`/properties?location=${encodeURIComponent(loc.name.split(' / ')[0])}`}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-gray-100 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
            >
              <img
                src={loc.img}
                alt={loc.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-[#DFCA98] uppercase tracking-wider block">
                  {loc.count}
                </span>
                <h4 className="text-sm sm:text-base font-bold font-display truncate">
                  {loc.name}
                </h4>
                <p className="text-[11px] text-gray-300 truncate mt-0.5">
                  {loc.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. RESALE PROPERTIES SHOWCASE */}
      <section className="bg-[#172522] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A76C] bg-white/10 px-3 py-1 rounded-full">
                Immediate Possession & Prime Locations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3">
                Verified Resale Properties
              </h2>
              <p className="text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                Explore verified resale apartments, gated community flats, and residential plots with clear link documents and transparent owner negotiations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/resale"
                className="px-5 py-3 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs sm:text-sm transition-all"
              >
                Browse All Resale Listings
              </Link>
              <WhatsAppButton
                variant="glass"
                size="md"
                label="Enquire Resale on WhatsApp"
                customMessage={getResaleWhatsAppMessage()}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resaleProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE KK ASSOCIATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
            Our Service Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#172522] mt-3">
            Real Estate Decisions Deserve Real Trust
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            We prioritize transparent guidance, legal clarity, and personalized service at every step of your property journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Personalized Property Assistance</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We match plots and flats based on your exact budget, preferred growth corridor, and long-term goals rather than a generic sales push.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <LandPlot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Residential Plot & Flat Options</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Extensive portfolio spanning residential layout plots, open land parcels, luxury 2/3/4 BHK flats, and premium gated communities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Support for Buying & Reselling</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Full-cycle assistance for property buyers seeking high capital appreciation and existing owners looking to resell at realistic market valuations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Transparent Communication</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Direct and honest representation of road widths, municipal approvals, link documents, and spot registration procedures.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Local Market Guidance</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Deep micro-market knowledge across Gachibowli, Tellapur, Mokila, Shankarpally, Kokapet, and Regional Ring Road corridors.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-gray-900">Personalized Site Visit Coordination</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Convenient weekend and weekday guided site inspections with dedicated field executives from our Gachibowli office.
            </p>
          </div>

        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="bg-white py-16 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3 py-1 rounded-full">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl font-extrabold font-display text-[#172522] mt-3">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Your hassle-free journey from enquiry to site visit and ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-100 relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#075E54] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                1
              </span>
              <h3 className="font-bold text-gray-900 text-base">Tell Us Your Requirements</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Share your desired plot size, apartment configuration, budget, or selling plans on WhatsApp or our enquiry form.
              </p>
            </div>

            <div className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-100 relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#0D8B78] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                2
              </span>
              <h3 className="font-bold text-gray-900 text-base">Explore Suitable Properties</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive handpicked, verified options with authentic brochures, layout plans, and pricing sheets.
              </p>
            </div>

            <div className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-100 relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#C7A76C] text-[#172522] font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                3
              </span>
              <h3 className="font-bold text-gray-900 text-base">Contact Our Team</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connect directly with our Gachibowli specialists to review titles, bank loan tie-ups, and developer schemes.
              </p>
            </div>

            <div className="bg-[#F8FAF8] p-6 rounded-2xl border border-gray-100 relative text-center md:text-left space-y-2">
              <span className="w-8 h-8 rounded-full bg-[#075E54] text-white font-bold text-sm flex items-center justify-center mx-auto md:mx-0">
                4
              </span>
              <h3 className="font-bold text-gray-900 text-base">Arrange a Site Visit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inspect the actual plot or apartment on ground with our field executive before finalizing.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => openSiteVisitModal()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Schedule a Site Visit Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 9. PROPERTY ENQUIRY CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#075E54] to-[#043E37] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-left">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
              Trusted Real Estate Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
              Looking for the Right Property?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Whether you are buying your first home, looking for verified layout plots, or listing your property for sale, our Gachibowli team is ready to assist.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/properties"
                className="px-6 py-3.5 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                variant="glass"
                size="md"
                label="Contact on WhatsApp"
              />

              <Link
                to="/sell"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all"
              >
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EMI CALCULATOR TOOL ON HOMEPAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmiCalculator />
      </section>

    </div>
  );
};
