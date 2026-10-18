import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Calculator, 
  FileCheck2, 
  Car, 
  ArrowRight, 
  ShieldCheck, 
  Landmark
} from 'lucide-react';
import { useModalContext } from '../../../context/ModalContext';

interface ServicesMegaMenuProps {
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ onClose }) => {
  const { openSiteVisitModal } = useModalContext();

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 animate-fadeIn z-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">

        {/* Column 1: Property Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Building2 className="w-4 h-4 text-[#075E54]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Property Services</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: 'Property Buying Assistance', path: '/buy', desc: 'End-to-end guidance' },
              { label: 'Property Selling Assistance', path: '/sell', desc: 'Direct owner listings' },
              { label: 'Resale Property Advisory', path: '/resale', desc: 'Flats & layout plots' },
              { label: 'Residential Plot Buying Advisory', path: '/properties?type=Residential+Plot', desc: 'Clear titles' },
              { label: 'Luxury Flat & Villa Search', path: '/properties?type=Premium+Flat', desc: 'High-rise communities' },
              { label: 'Commercial Property Guidance', path: '/properties', desc: 'Strategic locations' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex flex-col py-1.5 px-2 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-[#E8F5F2] transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] text-gray-400">{item.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Finance & Loans */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Landmark className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172522]">Finance & Loans</h4>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services#emi-calculator"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Home Loan EMI Calculator</span>
                  <Calculator className="w-4 h-4 text-[#C7A76C]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">Calculate monthly EMIs, principal, and total interest</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact?service=loan-assistance"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Home Loan Facilitation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#075E54]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">Assistance with partner banks (SBI, HDFC, ICICI, Axis)</p>
              </Link>
            </li>
            <li>
              <Link
                to="/contact?service=payment-plans"
                onClick={onClose}
                className="block p-2.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-[#E8F5F2] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#075E54]">Smart Payment Schemes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#075E54]" />
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">Guidance on EMI Azadi & 40:60 construction milestones</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Documentation */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <FileCheck2 className="w-4 h-4 text-[#0D8B78]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#075E54]">Legal & Due-Diligence</h4>
          </div>
          <ul className="space-y-1.5 text-sm">
            {[
              { label: 'Sale Deed Process Guidance', path: '/services#documentation', desc: 'Drafting & execution stages' },
              { label: 'Registration Process Guidance', path: '/services#documentation', desc: 'Sub-registrar coordination' },
              { label: 'Layout & Title Sanctions Verification', path: '/services#documentation', desc: 'Sanctions & title deeds' },
              { label: 'TS RERA Project Compliance', path: '/services#documentation', desc: 'Registered project verification' },
              { label: 'Document Checklist for Buyers', path: '/blogs#document-checklist', desc: '30-year link papers list' }
            ].map(item => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex flex-col py-1.5 px-2 rounded-lg text-gray-700 hover:text-[#075E54] hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                  <span className="text-[10px] text-gray-400">{item.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Site Visits & Customer Support */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
            <Car className="w-4 h-4 text-[#C7A76C]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A76C]">Site Visits & Care</h4>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#075E54] to-[#0D8B78] text-white space-y-3">
            <div className="flex items-center gap-1.5 text-[#DFCA98] text-xs font-bold">
              <Car className="w-4 h-4" />
              <span>Complimentary Site Visit</span>
            </div>
            <p className="text-xs text-white/90 leading-relaxed">
              We arrange escorted private site visits to all verified projects and layout plots across Hyderabad.
            </p>
            <button
              onClick={() => {
                onClose();
                openSiteVisitModal();
              }}
              className="w-full py-2 px-3 text-center rounded-lg bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold text-xs transition-all shadow-sm"
            >
              Book Free Site Visit
            </button>
          </div>

          <div className="text-[11px] text-gray-500 space-y-1">
            <div className="flex items-center gap-1 font-semibold text-gray-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparency First</span>
            </div>
            <p>
              KK Associates assists in coordinating banking, documentation, and vendor services through licensed third-party authorities and developer channels.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
