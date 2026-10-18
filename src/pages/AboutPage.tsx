import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Users, 
  Compass 
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { WhatsAppButton } from '../components/common/WhatsAppButton';


export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      {/* Brand Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F2] text-[#075E54] text-xs font-bold uppercase tracking-wider">
            <span>About Klinkaaraa Associates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#172522] leading-tight">
            A Trusted Real Estate Partner Built on Transparency & Integrity
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Headquartered in <strong>Gachibowli, Hyderabad</strong>, <strong>KK Associates (Klinkaaraa Associates)</strong> was founded with a singular mission: to simplify property buying, selling, and reselling for homebuyers, landowners, and smart real estate investors.
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            In a fast-evolving Hyderabad property landscape, we stand for clear legal titles, verified layout sanctions (DTCP, TS RERA), and transparent client communication.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <WhatsAppButton
              variant="primary"
              size="md"
              label="Connect with Our Founders"
            />
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm transition-all"
            >
              Visit Our Gachibowli Office
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Hyderabad Real Estate Architecture"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider">Operational Base</span>
              <p className="font-extrabold text-lg font-display">Gachibowli, Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-12 border border-gray-200/70 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78]">
            Core Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
            What Sets KK Associates Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Clear Title Verification</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We never promote disputed or unverified lands. Every residential plot and flat is vetted for legal link documents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Growth Corridor Focus</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We identify high-potential growth zones around Mokila, Shankarpally, Tellapur, Kokapet, and the Regional Ring Road (RRR).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Customer-Centric Advisory</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We take the time to understand your financial plan and family requirements before arranging customized site visits.
            </p>
          </div>
        </div>
      </div>

      {/* Hyderabad Growth Locations Overview */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78]">
            Local Market Presence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">
            Active Hyderabad Real Estate Hubs
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            We maintain active property listings and verified owner connects in these prime zones:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {COMPANY_CONFIG.primeLocations.map((loc, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-2 text-xs font-semibold text-gray-800">
              <MapPin className="w-4 h-4 text-[#075E54] flex-shrink-0" />
              <span>{loc}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
