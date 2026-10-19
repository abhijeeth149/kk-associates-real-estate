import React from 'react';
import { FileText } from 'lucide-react';


export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">

      <div className="space-y-3 pb-6 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F2] text-[#075E54] text-xs font-bold uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Website & Advisory Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-500">
          KK Associates (Klinkaaraa Associates) • Gachibowli, Hyderabad, Telangana
        </p>
      </div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">1. Property Listings & Guidance</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            All property listings, layouts, measurements (Sq. Yds / Sq. Ft), photographs, and price indicators published on this website are provided for informative and preliminary advisory guidance. While KK Associates strives to ensure current accuracy, real estate prices and plot availability fluctuate based on market dynamics and spot registrations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">2. Legal & Title Verification Notice</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Prospective buyers and investors are advised to conduct independent legal verification of mother deeds, Encumbrance Certificates (EC), and layout sanction letters (DTCP, TS RERA) through qualified legal professionals before committing funds or executing sale deeds. KK Associates facilitates document access and transparency between buyers and sellers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">3. Property Submissions by Owners</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Submitting a property via our "Sell Your Property" page does not create an exclusive brokerage contract or guarantee a sale. KK Associates reserves the right to review documentation and market suitability prior to listing or presenting opportunities to prospective buyers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">4. Governing Law</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Any dispute arising in connection with services provided by KK Associates shall be governed by the laws of India and subject to the jurisdiction of the courts in Hyderabad / Rangareddy District, Telangana.
          </p>
        </section>
      </div>

    </div>
  );
};
