import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { BrandLogo } from '../components/common/BrandLogo';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl max-w-lg w-full text-center space-y-6">
        <BrandLogo size="lg" className="justify-center" />

        <div className="space-y-2">
          <span className="text-5xl sm:text-6xl font-black font-display text-[#075E54]">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-xs sm:text-sm shadow flex items-center justify-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/properties"
            className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Browse Properties</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <WhatsAppButton
            fullWidth
            size="sm"
            label="Need help? Ask our team on WhatsApp"
          />
        </div>
      </div>
    </div>
  );
};
