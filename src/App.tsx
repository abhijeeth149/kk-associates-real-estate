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

import { Suspense, lazy } from 'react';

// Route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage').then(m => ({ default: m.PropertiesPage })));
const BuyPage = lazy(() => import('./pages/BuyPage').then(m => ({ default: m.BuyPage })));
const ResalePage = lazy(() => import('./pages/ResalePage').then(m => ({ default: m.ResalePage })));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage').then(m => ({ default: m.PropertyDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(m => ({ default: m.BlogsPage })));
const SellPage = lazy(() => import('./pages/SellPage').then(m => ({ default: m.SellPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then(m => ({ default: m.AdminPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
    <div className="w-10 h-10 border-4 border-[#075E54]/20 border-t-[#075E54] rounded-full animate-spin mb-4" />
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Loading KK Associates...</p>
  </div>
);

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
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/properties" element={<PropertiesPage />} />
                  <Route path="/buy" element={<BuyPage />} />
                  <Route path="/resale" element={<ResalePage />} />
                  <Route path="/property/:id" element={<PropertyDetailPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/sell" element={<SellPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
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
