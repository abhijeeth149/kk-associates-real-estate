import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Property, PropertyFilter } from '../types/property';
import { INITIAL_PROPERTIES } from '../data/properties';

interface PropertyContextType {
  properties: Property[];
  favorites: string[];
  toggleFavorite: (propertyId: string) => void;
  isFavorite: (propertyId: string) => boolean;
  filter: PropertyFilter;
  setFilter: React.Dispatch<React.SetStateAction<PropertyFilter>>;
  resetFilter: () => void;
  filteredProperties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (propertyId: string) => void;
  getPropertyById: (id: string) => Property | undefined;
  showDemoNotice: boolean;
  setShowDemoNotice: (show: boolean) => void;
}

const defaultFilter: PropertyFilter = {
  purpose: 'all',
  type: '',
  location: '',
  minPrice: 0,
  maxPrice: 50000000,
  searchQuery: '',
  bedrooms: '',
  sortBy: 'featured'
};

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

const STORAGE_KEY_PROPERTIES = 'kk_properties_data_v4';

const STORAGE_KEY_FAVORITES = 'kk_favorites_v1';

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROPERTIES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROPERTIES;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [];
  });

  const [filter, setFilter] = useState<PropertyFilter>(defaultFilter);
  const [showDemoNotice, setShowDemoNotice] = useState<boolean>(true);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROPERTIES, JSON.stringify(properties));
    } catch (e) {
      console.error('Failed to save properties to localStorage', e);
    }
  }, [properties]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId) 
        : [...prev, propertyId]
    );
  };

  const isFavorite = (propertyId: string) => favorites.includes(propertyId);

  const resetFilter = () => {
    setFilter(defaultFilter);
  };

  const addProperty = (newProp: Property) => {
    setProperties(prev => [newProp, ...prev]);
  };

  const updateProperty = (updatedProp: Property) => {
    setProperties(prev => prev.map(p => p.id === updatedProp.id ? updatedProp : p));
  };

  const deleteProperty = (id: string) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  const getPropertyById = (id: string) => {
    return properties.find(p => p.id === id || p.listingId.toLowerCase() === id.toLowerCase());
  };

  // Filter logic
  const filteredProperties = properties.filter(prop => {
    // Purpose filter
    if (filter.purpose !== 'all' && prop.purpose !== filter.purpose) {
      return false;
    }

    // Type filter
    if (filter.type && filter.type !== 'all' && prop.type !== filter.type && prop.category !== filter.type) {
      return false;
    }

    // Location filter
    if (filter.location && filter.location !== 'all') {
      const locMatch = prop.location.toLowerCase().includes(filter.location.toLowerCase()) ||
                       prop.locality.toLowerCase().includes(filter.location.toLowerCase());
      if (!locMatch) return false;
    }

    // Search query
    if (filter.searchQuery) {
      const q = filter.searchQuery.toLowerCase();
      const match = prop.title.toLowerCase().includes(q) ||
                    prop.location.toLowerCase().includes(q) ||
                    prop.listingId.toLowerCase().includes(q) ||
                    prop.type.toLowerCase().includes(q) ||
                    prop.description.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Bedrooms
    if (filter.bedrooms && filter.bedrooms !== 'all') {
      if (filter.bedrooms === '4+' && (!prop.bedrooms || prop.bedrooms < 4)) {
        return false;
      } else if (filter.bedrooms !== '4+' && prop.bedrooms !== parseInt(filter.bedrooms, 10)) {
        return false;
      }
    }

    // Price range
    if (filter.minPrice > 0 && prop.priceNumeric < filter.minPrice) {
      return false;
    }
    if (filter.maxPrice < 50000000 && prop.priceNumeric > filter.maxPrice) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (filter.sortBy === 'price-asc') return a.priceNumeric - b.priceNumeric;
    if (filter.sortBy === 'price-desc') return b.priceNumeric - a.priceNumeric;
    if (filter.sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    // Default featured
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <PropertyContext.Provider value={{
      properties,
      favorites,
      toggleFavorite,
      isFavorite,
      filter,
      setFilter,
      resetFilter,
      filteredProperties,
      addProperty,
      updateProperty,
      deleteProperty,
      getPropertyById,
      showDemoNotice,
      setShowDemoNotice
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
};
