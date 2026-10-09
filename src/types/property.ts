export type PropertyType = 
  | 'Residential Plot' 
  | 'Open Plot' 
  | 'Premium Flat' 
  | 'Residential Apartment' 
  | 'Resale Flat' 
  | 'Resale Plot';

export type PropertyPurpose = 'buy' | 'resale' | 'all';

export type PropertyStatus = 'Available' | 'Under Offer' | 'Sold';

export interface Property {
  id: string;
  listingId: string;
  title: string;
  tagline?: string;
  purpose: 'buy' | 'resale';
  type: PropertyType;
  category: 'plot' | 'flat' | 'apartment';
  location: string;
  locality: string;
  city: string;
  priceDisplay: string;
  priceNumeric: number; // For sorting & filtering
  pricePerSqFt?: string;
  area: string;
  areaNumeric: number;
  areaUnit: 'Sq. Yds' | 'Sq. Ft' | 'Acres';
  bedrooms?: number;
  bathrooms?: number;
  facing?: string;
  status: PropertyStatus;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  highlights: string[];
  documentStatus?: string;
  reraNumber?: string;
  mapCoordinates?: {
    lat: number;
    lng: number;
  };
  isDemonstrationData: boolean;
  createdAt: string;
}

export interface PropertyFilter {
  purpose: PropertyPurpose;
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  bedrooms?: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  interestType: 'buy' | 'resale' | 'sell' | 'general';
  propertyType: string;
  location: string;
  budget: string;
  message: string;
  propertyId?: string;
  propertyTitle?: string;
}

export interface SellPropertyFormData {
  ownerName: string;
  phone: string;
  email: string;
  propertyType: string;
  location: string;
  locality: string;
  plotArea: string;
  expectedPrice: string;
  description: string;
  preferredContact: 'whatsapp' | 'call' | 'email';
  consent: boolean;
}

export interface SiteVisitFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  propertyId: string;
  propertyTitle: string;
  numberOfPersons: string;
  notes?: string;
}
