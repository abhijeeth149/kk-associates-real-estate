export type ProjectStatus = 'New Launch' | 'Under Construction' | 'Upcoming' | 'Ready to Move';

export interface ProjectFloorPlan {
  title: string;
  configuration: string;
  superBuiltUpArea: string;
  carpetArea?: string;
  facing?: string;
  image: string;
}

export interface ProjectDocument {
  title: string;
  category: 'Brochure' | 'Price Sheet' | 'Payment Scheme' | 'Master Plan' | 'Floor Plans' | 'Map';
  fileUrl: string;
  fileSize?: string;
  date?: string;
  isPublic: boolean;
}

export interface ProjectPriceInfo {
  basePricePerSqFt?: string;
  startingPrice?: string;
  priceRange?: string;
  effectiveDate?: string;
  floorRiseCharges?: string;
  carParkingCharges?: string;
  amenitiesCharges?: string;
  disclaimer: string;
  specialSchemes?: {
    name: string;
    description: string;
    highlights: string[];
    bankingPartners?: string[];
  }[];
}

export interface Project {
  slug: string;
  name: string;
  developer: string;
  tagline: string;
  category: 'Apartment Complex' | 'Gated Community' | 'Luxury High-Rise' | 'Integrated Township';
  status: ProjectStatus;
  reraNumber?: string;
  location: string;
  locality: string;
  city: string;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  video?: {
    url: string;
    poster: string;
    title: string;
  };
  configurations: string[]; // e.g. ['3 BHK', '4 BHK']
  unitSizes: string; // e.g. '1,571 - 3,233 Sq.Ft'
  totalTowers?: number | string;
  totalFloors?: number | string;
  landArea?: string;
  overview: string[];
  keyHighlights: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
  floorPlans: ProjectFloorPlan[];
  masterPlanImage?: string;
  locationMapImage?: string;
  connectivityHighlights: string[];
  priceInfo: ProjectPriceInfo;
  documents: ProjectDocument[];
  faq: {
    question: string;
    answer: string;
  }[];
}
