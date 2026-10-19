import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  LandPlot,
  Calculator,
  FileCheck2,
  Car,
  Landmark,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { EmiCalculator } from '../components/tools/EmiCalculator';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { useModalContext } from '../context/ModalContext';
import { getServiceWhatsAppMessage } from '../utils/whatsapp';

export const ServicesPage: React.FC = () => {
  const { openSiteVisitModal } = useModalContext();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#172522]">

      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0B1315] to-[#172522] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFCA98] text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Comprehensive Real Estate Advisory • Hyderabad</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Our Real Estate Services
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            From plot acquisition and high-rise discovery to bank loan facilitation, title due-diligence, and escorted site visits — KK Associates stands with you at every step.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openSiteVisitModal()}
              className="py-2.5 px-5 rounded-xl bg-[#075E54] hover:bg-[#043E37] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Book Free Site Visit
            </button>
            <WhatsAppButton
              size="md"
              variant="glass"
              label="Talk to Advisory Team"
            />
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID & DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">

        {/* Service 1: Property Buying Assistance */}
        <section id="buying-assistance" className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#E8F5F2] text-[#075E54]">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#C7A76C] uppercase tracking-wider">Core Advisory</span>
                <h2 className="text-2xl font-bold font-display text-gray-900">Property Buying Assistance</h2>
              </div>
            </div>

            <WhatsAppButton
              size="sm"
              variant="primary"
              label="Enquire for Buying"
              customMessage={getServiceWhatsAppMessage('Property Buying Assistance')}
            />
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Finding the right property in Hyderabad’s booming market requires local expertise and transparent verification. Whether you are looking for a clear-title Apartments in Mokila, a luxury 3 or 4 BHK high-rise in Kokapet, or an integrated township apartment in Budvel, KK Associates simplifies the search.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: 'Plot Buying Guidance',
                desc: '100% clear titles, 40ft blacktop roads, underground utilities, and sanctioned layout infrastructure.'
              },
              {
                title: 'High-Rise Apartment Selection',
                desc: 'Direct developer pricing on landmark projects like Godrej Epoque Neopolis, Prestige City, and Myscape SOTS.'
              },
              {
                title: 'Zero Brokerage on New Projects',
                desc: 'Enjoy complete buyer consultation, site visits, and unit allotment assistance with zero brokerage.'
              }
            ].map((col, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#075E54]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{col.title}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service 2: Property Selling & Resale Advisory */}
        <section id="selling-assistance" className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-50 text-[#C7A76C]">
                <LandPlot className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#075E54] uppercase tracking-wider">Owner Solutions</span>
                <h2 className="text-2xl font-bold font-display text-gray-900">Property Selling & Resale Assistance</h2>
              </div>
            </div>

            <Link
              to="/sell"
              className="py-2.5 px-4 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs sm:text-sm text-center shadow-xs transition-colors"
            >
              List Your Property Now
            </Link>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Selling your residential plot, flat, or commercial land can be complex. We connect verified property owners with serious, pre-qualified buyers across Gachibowli, Kondapur, Tellapur, Shankarpally, and Mokila without unwarranted spam or endless unvetted calls.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              {
                title: 'Market Rate Consultation',
                desc: 'Guidance on prevailing market transactions and competitive price positioning in your micro-market.'
              },
              {
                title: 'Qualified Buyer Matching',
                desc: 'Direct connection to verified buyers seeking immediate registration and genuine transactions.'
              },
              {
                title: 'Complete Closing Assistance',
                desc: 'Coordinating draft agreements, token verification, and seamless handover scheduling.'
              }
            ].map((col, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#C7A76C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A76C]" />
                  <span>{col.title}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service 3: Interactive Home Loan EMI Calculator & Bank Facilitation */}
        <section id="emi-calculator" className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#E8F5F2] text-[#075E54]">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0D8B78] uppercase tracking-wider">Financial Tools</span>
                <h2 className="text-2xl font-bold font-display text-gray-900">Home Loan Assistance & EMI Calculator</h2>
              </div>
            </div>

            <WhatsAppButton
              size="sm"
              variant="outline"
              label="Consult on Bank Loans"
              customMessage={getServiceWhatsAppMessage('Home Loan Guidance')}
            />
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Planning your purchase budget is the first step toward smart real estate ownership. Use our interactive EMI tool below to simulate monthly payments based on loan tenure and interest rates.
          </p>

          {/* Interactive Calculator Component */}
          <div className="pt-2">
            <EmiCalculator />
          </div>

          {/* Bank Tie-up notice */}
          <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-200 text-xs text-gray-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-gray-800">
              <Landmark className="w-4 h-4 text-[#075E54]" />
              <span>Bank Facilitation & Disclaimers</span>
            </div>
            <p className="leading-relaxed">
              KK Associates assists buyers by connecting them with leading lending institutions including SBI, HDFC Bank, ICICI Bank, and Axis Bank for home loan approvals and documentation checklists. KK Associates is not a bank or registered lending authority; loan eligibility, interest rates, and sanction letters are governed strictly by the respective lender's criteria.
            </p>
          </div>
        </section>

        {/* Service 4: Legal & Documentation Due-Diligence */}
        <section id="documentation" className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50 text-[#0D8B78]">
                <FileCheck2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#075E54] uppercase tracking-wider">Due-Diligence Guidance</span>
                <h2 className="text-2xl font-bold font-display text-gray-900">Property Documentation & Due-Diligence</h2>
              </div>
            </div>

            <WhatsAppButton
              size="sm"
              variant="primary"
              label="Request Title Guidance"
              customMessage={getServiceWhatsAppMessage('Documentation Guidance')}
            />
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Peace of mind starts with clear, encumbrance-free paperwork. We guide clients on verifying essential property documentation before making any advance or agreement of sale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
            {[
              {
                title: '30-Year Link Documents',
                desc: 'Verification of continuous chain of title deeds and parent documents.'
              },
              {
                title: 'Encumbrance Certificate (EC)',
                desc: 'Guidance on obtaining Nil Encumbrance Certificate from Registration Department.'
              },
              {
                title: 'Layout & DTCP Sanctions Guidance',
                desc: 'Guidance on verifying layout approval LP numbers and technical clearance records.'
              },
              {
                title: 'TS RERA Registration',
                desc: 'Confirming RERA project registration numbers and quarterly compliance updates.'
              }
            ].map((card, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F8FAF8] border border-gray-100 space-y-1">
                <span className="font-bold text-gray-900 block">{card.title}</span>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 italic">
            * KK Associates provides general consultancy and facilitates legal verification through qualified legal counsel and document scrutiny experts.
          </p>
        </section>

        {/* Service 5: Site Visit Coordination */}
        <section id="site-visit" className="bg-gradient-to-r from-[#075E54] to-[#0D8B78] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#DFCA98] text-xs font-bold uppercase tracking-wider">
              <Car className="w-4 h-4" />
              <span>Complimentary Service</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Complimentary Escorted Site Visits
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Experience the actual location, topography, approach roads, and neighbourhood before deciding. We coordinate private, escorted site visits directly from our Gachibowli office.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openSiteVisitModal()}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-sm shadow-lg transition-all cursor-pointer"
            >
              Book Site Visit
            </button>
            <WhatsAppButton
              size="lg"
              variant="glass"
              label="WhatsApp Site Visit"
            />
          </div>
        </section>

      </div>

    </div>
  );
};
