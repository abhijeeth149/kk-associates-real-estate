import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Property } from '../types/property';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface ModalContextType {
  isEnquiryModalOpen: boolean;
  selectedPropertyForEnquiry: Property | null;
  openEnquiryModal: (property?: Property | null) => void;
  closeEnquiryModal: () => void;
  
  isSiteVisitModalOpen: boolean;
  selectedPropertyForSiteVisit: Property | null;
  openSiteVisitModal: (property?: Property | null) => void;
  closeSiteVisitModal: () => void;

  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedPropertyForEnquiry, setSelectedPropertyForEnquiry] = useState<Property | null>(null);

  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [selectedPropertyForSiteVisit, setSelectedPropertyForSiteVisit] = useState<Property | null>(null);

  const [toasts, setToasts] = useState<Toast[]>([]);

  const openEnquiryModal = (property: Property | null = null) => {
    setSelectedPropertyForEnquiry(property);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setSelectedPropertyForEnquiry(null);
  };

  const openSiteVisitModal = (property: Property | null = null) => {
    setSelectedPropertyForSiteVisit(property);
    setIsSiteVisitModalOpen(true);
  };

  const closeSiteVisitModal = () => {
    setIsSiteVisitModalOpen(false);
    setSelectedPropertyForSiteVisit(null);
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ModalContext.Provider value={{
      isEnquiryModalOpen,
      selectedPropertyForEnquiry,
      openEnquiryModal,
      closeEnquiryModal,
      isSiteVisitModalOpen,
      selectedPropertyForSiteVisit,
      openSiteVisitModal,
      closeSiteVisitModal,
      toasts,
      showToast,
      removeToast
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
