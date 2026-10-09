import React from 'react';
import { ShieldCheck } from 'lucide-react';


export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      
      <div className="space-y-3 pb-6 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F2] text-[#075E54] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Customer Trust & Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last Updated: October 2026 • KK Associates (Klinkaaraa Associates), Gachibowli, Hyderabad
        </p>
      </div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">1. Information We Collect</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            When you interact with KK Associates (Klinkaaraa Associates) through our website, WhatsApp contact channels, site visit booking forms, or property selling submissions, we collect only the necessary information required to assist you with real estate enquiries:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 space-y-1">
            <li>Contact details such as your Full Name, Mobile / WhatsApp Number, and Email Address.</li>
            <li>Property search preferences including desired property type (Plot, Flat, Apartment, Resale), budget, and location preference in Hyderabad.</li>
            <li>Property owner submission details when you request assistance selling a plot or flat.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">2. How We Use Your Information</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Your information is used exclusively to:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 space-y-1">
            <li>Provide personalized real estate advisory and share verified layout plans, pricing, and availability.</li>
            <li>Coordinate site visits and field inspections with our Gachibowli team.</li>
            <li>Connect property owners with verified buyers seeking plots and flats.</li>
            <li>Respond to WhatsApp messages and email communications initiated by you.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">3. Information Protection & Confidentiality</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            We respect your privacy. KK Associates will <strong>never sell, rent, or publish your private phone number or contact details</strong> to third-party marketing agencies or lead scrapers. All enquiry data is handled strictly by our internal real estate team.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 font-display">4. Contact Us Concerning Privacy</h2>
          <p className="text-xs sm:text-sm text-gray-600">
            If you have questions regarding your data or wish to have your details removed from our active enquiry logs, please contact us:
          </p>
          <div className="p-4 bg-[#F8FAF8] rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1 font-medium">
            <p><strong>KK Associates (Klinkaaraa Associates)</strong></p>
            <p>Location: Gachibowli, Hyderabad, Telangana, India</p>
            <p>Email: klinakaaraassociates@gmail.com</p>
            <p>Phone / WhatsApp: +91 9063613496</p>
          </div>
        </section>
      </div>

    </div>
  );
};
