import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, 
  Filter, 
  Sparkles, 
  X, 
  Search,
  ShieldCheck 
} from 'lucide-react';
import { VERIFIED_PROJECTS, getAllDevelopers, getAllLocalities } from '../data/projects';
import { ProjectCard } from '../components/project/ProjectCard';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const developerParam = searchParams.get('developer') || 'all';
  const localityParam = searchParams.get('locality') || 'all';
  const statusParam = searchParams.get('status') || 'all';
  const bhkParam = searchParams.get('bhk') || 'all';
  const searchParam = searchParams.get('search') || '';

  const developers = useMemo(() => getAllDevelopers(), []);
  const localities = useMemo(() => getAllLocalities(), []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return VERIFIED_PROJECTS.filter(project => {
      if (developerParam !== 'all' && !project.developer.toLowerCase().includes(developerParam.toLowerCase())) {
        return false;
      }
      if (localityParam !== 'all' && !project.locality.toLowerCase().includes(localityParam.toLowerCase()) && !project.location.toLowerCase().includes(localityParam.toLowerCase())) {
        return false;
      }
      if (statusParam !== 'all' && project.status !== statusParam) {
        return false;
      }
      if (bhkParam !== 'all') {
        const hasBhk = project.configurations.some(c => c.includes(`${bhkParam} BHK`) || c.includes(`${bhkParam}B`));
        if (!hasBhk) return false;
      }
      if (searchParam) {
        const q = searchParam.toLowerCase();
        const match = project.name.toLowerCase().includes(q) ||
                      project.developer.toLowerCase().includes(q) ||
                      project.location.toLowerCase().includes(q) ||
                      project.overview.some(o => o.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [developerParam, localityParam, statusParam, bhkParam, searchParam]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters = developerParam !== 'all' || localityParam !== 'all' || statusParam !== 'all' || bhkParam !== 'all' || searchParam !== '';

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#0B1315] to-[#172522] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFCA98] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hyderabad's Verified Landmark Projects</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            Explore Verified Real Estate Projects
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            Discover premier gated communities, 57-storey high-rises, and lakeview townships from trusted developers including Prestige, Godrej, Myscape, Lansum, and Ramky.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <input
                type="text"
                value={searchParam}
                onChange={e => updateFilter('search', e.target.value)}
                placeholder="Search by project name, developer, or location..."
                className="w-full py-3.5 pl-11 pr-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A76C]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchParam && (
                <button
                  onClick={() => updateFilter('search', '')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Main Content & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        
        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#075E54]" />
              <span className="text-sm font-bold text-gray-900">Filter Projects</span>
              <span className="text-xs text-gray-400">({filteredProjects.length} Available)</span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            
            {/* Developer Filter */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">Developer</label>
              <select
                value={developerParam}
                onChange={e => updateFilter('developer', e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-[#075E54] outline-none"
              >
                <option value="all">All Developers</option>
                {developers.map(dev => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>
            </div>

            {/* Locality Filter */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">Locality</label>
              <select
                value={localityParam}
                onChange={e => updateFilter('locality', e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-[#075E54] outline-none"
              >
                <option value="all">All Localities</option>
                {localities.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">Project Status</label>
              <select
                value={statusParam}
                onChange={e => updateFilter('status', e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-[#075E54] outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="New Launch">New Launch</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready to Move">Ready to Move</option>
              </select>
            </div>

            {/* BHK Filter */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">BHK Configuration</label>
              <select
                value={bhkParam}
                onChange={e => updateFilter('bhk', e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-[#075E54] outline-none"
              >
                <option value="all">All Configurations</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
              </select>
            </div>

          </div>

          {/* Active Quick Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100">
            <span className="text-[11px] text-gray-400 font-medium mr-1">Quick Select:</span>
            {[
              { label: 'Neopolis 57 Floors', loc: 'Neopolis' },
              { label: 'Prestige Projects', dev: 'Prestige Group' },
              { label: 'Budvel Lakeview', loc: 'Budvel' },
              { label: 'Myscape High-Rises', dev: 'Myscape Group' },
              { label: 'New Launches Only', status: 'New Launch' }
            ].map(tag => (
              <button
                key={tag.label}
                onClick={() => {
                  if (tag.loc) updateFilter('locality', tag.loc);
                  if (tag.dev) updateFilter('developer', tag.dev);
                  if (tag.status) updateFilter('status', tag.status);
                }}
                className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 hover:bg-[#E8F5F2] hover:text-[#075E54] text-gray-700 font-medium transition-colors cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-gray-100 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No Projects Found Matching Filters</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              We couldn't find any projects matching your exact criteria. Try resetting filters or talk to our team for custom project matches.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 rounded-xl bg-[#075E54] text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
              <WhatsAppButton
                variant="outline"
                size="md"
                label="Enquire via WhatsApp"
              />
            </div>
          </div>
        )}

        {/* Project Assurance Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#075E54] to-[#043E37] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-[#DFCA98] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent Advisory by KK Associates</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Need Assistance Selecting the Right Project?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              We offer direct coordination with developer sales desks, verified price sheets, site visit transport, and legal link document guidance with zero brokerage on new developer bookings.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <WhatsAppButton
              size="lg"
              variant="glass"
              label="Contact on WhatsApp"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
