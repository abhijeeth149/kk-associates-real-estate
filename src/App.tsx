import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import { ModalProvider } from './context/ModalContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/modals/EnquiryModal';
import { SiteVisitModal } from './components/modals/SiteVisitModal';
import { ToastContainer } from './components/common/ToastContainer';

import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { BuyPage } from './pages/BuyPage';
import { ResalePage } from './pages/ResalePage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { SellPage } from './pages/SellPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Auto scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PropertyProvider>
        <ModalProvider>
          <ScrollToTop />
          
          <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#172522]">
            {/* Main Navigation Bar */}
            <Navbar />

            {/* Main Application Routes */}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/resale" element={<ResalePage />} />
                <Route path="/property/:id" element={<PropertyDetailPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Floating Widgets & Interactive Modals */}
            <FloatingWhatsApp />
            <EnquiryModal />
            <SiteVisitModal />
            <ToastContainer />
          </div>

        </ModalProvider>
      </PropertyProvider>
    </BrowserRouter>
  );
};

export default App;
