import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Phone, 
  Users, 
  GraduationCap, 
  DollarSign, 
  MessageCircle 
} from 'lucide-react';
import { openWhatsApp, getCareerWhatsAppMessage } from '../utils/whatsapp';


export const CareersPage: React.FC = () => {
  const [applicantName, setApplicantName] = useState('');
  const [experience, setExperience] = useState('1-2 Years Real Estate / Sales Experience');

  const handleApplyWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName) {
      alert('Please enter your full name');
      return;
    }
    const msg = getCareerWhatsAppMessage(applicantName, experience);
    openWhatsApp(msg);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      {/* Hiring Hero Banner (Matches the visual poster) */}
      <div className="bg-gradient-to-br from-[#075E54] via-[#0D8B78] to-[#172522] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A76C] text-[#172522] text-xs font-bold uppercase tracking-wider">
            <span>Career Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            WE ARE HIRING<br />
            <span className="text-[#dfc48e] italic font-serif text-2xl sm:text-3xl font-normal block mt-1">
              Join Our Team
            </span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base sm:text-lg">
            <Briefcase className="w-5 h-5 text-[#C7A76C]" />
            <span>SALES EXECUTIVES</span>
          </div>

          <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-xl">
            Join KK Associates (Klinkaaraa Associates) at our Gachibowli office. Help homebuyers and investors discover high-appreciating residential plots and luxury apartments in Hyderabad.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-100">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C7A76C]" />
              <span>Gachibowli, Hyderabad</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#C7A76C]" />
              <span>9063613496</span>
            </span>
          </div>
        </div>
      </div>

      {/* Qualifications & Job Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Job Qualifications (Direct from the Flyer) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold font-display text-gray-900 pb-3 border-b border-gray-100">
            Role & Qualifications
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E8F5F2] text-[#075E54]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Educational Qualification</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Minimum Bachelor's degree in a relevant major (Any graduate with strong communication skills).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E8F5F2] text-[#075E54]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Compensation</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Good Salary + Attractive Incentives on every plot and flat closing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E8F5F2] text-[#075E54]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Work Location</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Work from Site & Gachibowli Operational Base with client site visits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#E8F5F2] text-[#075E54]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Team Collaboration</h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Able to work effectively in a team and independently driving customer closures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Application Form */}
        <div className="bg-[#F8FAF8] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold font-display text-gray-900">
              Apply on WhatsApp
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Connect directly with our hiring desk at Gachibowli.
            </p>
          </div>

          <form onSubmit={handleApplyWhatsApp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#075E54] bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#075E54] bg-white cursor-pointer"
              >
                <option value="Fresher / Recent Graduate">Fresher / Recent Graduate</option>
                <option value="1-2 Years Real Estate / Direct Sales">1-2 Years Real Estate / Direct Sales</option>
                <option value="3+ Years Real Estate Specialist">3+ Years Real Estate Specialist</option>
                <option value="Other Field Sales Experience">Other Field Sales Experience</option>
              </select>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl text-xs text-[#075E54] font-medium border border-emerald-100">
              Location: Gachibowli, Hyderabad • Contact: 9063613496
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              <span>Apply via WhatsApp (+91 9063613496)</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
