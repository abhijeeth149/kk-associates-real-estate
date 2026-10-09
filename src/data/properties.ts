import type { Property } from '../types/property';

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 'kk-plot-01',
    listingId: 'KK-PL-101',
    title: 'HMDA Approved Villa Plot in Premium Gated Community',
    tagline: 'Prime West Hyderabad Growth Corridor',
    purpose: 'buy',
    type: 'Residential Plot',
    category: 'plot',
    location: 'Mokila, Shankarpally Road, Hyderabad',
    locality: 'Mokila',
    city: 'Hyderabad',
    priceDisplay: '₹42,000 / Sq. Yd',
    priceNumeric: 10500000, // 250 * 42000 = 1.05 Cr
    pricePerSqFt: '₹4,666 / Sq. Ft',
    area: '250 Sq. Yds',
    areaNumeric: 250,
    areaUnit: 'Sq. Yds',
    facing: 'East Facing',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elevate your lifestyle with a 100% Vaastu compliant residential plot situated in a gated township along the booming Mokila corridor. Features underground drainage, 40ft blacktop roads, landscaped parks, and instant access to Neopolis & Financial District via 4-lane highway.',
    amenities: [
      'HMDA Approved Layout',
      '100% Clear Title',
      '40 & 30 Ft CC Roads',
      'Underground Electricity & Drainage',
      'Avenue Plantation',
      'Compound Wall with 24/7 Security',
      'Children Play Area',
      'Overhead Water Tank'
    ],
    highlights: [
      '15 mins drive to Financial District & Kokapet',
      'Surrounded by top international schools',
      'Rapidly appreciating capital appreciation zone',
      'Bank loans approved by major banks'
    ],
    documentStatus: 'HMDA & RERA Approved Layout',
    reraNumber: 'P02400005821 (Layout)',
    isDemonstrationData: true,
    createdAt: '2026-03-15'
  },
  {
    id: 'kk-flat-02',
    listingId: 'KK-FL-202',
    title: 'Ultra-Luxury 3 BHK High-Rise Sky Residence',
    tagline: 'Panoramic Lake & City Views in Tellapur',
    purpose: 'buy',
    type: 'Premium Flat',
    category: 'flat',
    location: 'Tellapur, Near Gachibowli, Hyderabad',
    locality: 'Tellapur',
    city: 'Hyderabad',
    priceDisplay: '₹1.85 Cr',
    priceNumeric: 18500000,
    pricePerSqFt: '₹8,400 / Sq. Ft',
    area: '2,200 Sq. Ft',
    areaNumeric: 2200,
    areaUnit: 'Sq. Ft',
    bedrooms: 3,
    bathrooms: 3,
    facing: 'North-East Facing',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],


    description: 'Exquisite 3 BHK luxury apartment offering high ceilings, Italian marble flooring in living areas, expansive balcony facing serene green views, and 50,000 sq.ft state-of-the-art clubhouse with infinity rooftop pool and sports courts.',
    amenities: [
      'Grand 50,000 Sq.Ft Clubhouse',
      'Infinity Rooftop Swimming Pool',
      'Fully Equipped Gymnasium',
      'EV Charging Bays for each flat',
      'Double Height Entrance Lobby',
      '100% DG Power Backup',
      'Piped Gas Connection',
      'High-Speed Schindler Elevators'
    ],
    highlights: [
      '10 Mins from Wipro Circle & Financial District',
      'Close to ORR Exit 2',
      'Zero dead space floor plan',
      'Pre-fitted Smart Home Automation'
    ],
    documentStatus: 'TS RERA Verified & Occupancy in progress',
    reraNumber: 'P02400004918',
    isDemonstrationData: true,
    createdAt: '2026-03-20'
  },
  {
    id: 'kk-plot-03',
    listingId: 'KK-PL-103',
    title: 'Strategic Open Commercial/Residential Corner Plot',
    tagline: 'High Return Investment Near ORR Growth Hub',
    purpose: 'buy',
    type: 'Open Plot',
    category: 'plot',
    location: 'Kollur – Tellapur Growth Zone, Hyderabad',
    locality: 'Kollur',
    city: 'Hyderabad',
    priceDisplay: '₹48,000 / Sq. Yd',
    priceNumeric: 14400000,
    pricePerSqFt: '₹5,333 / Sq. Ft',
    area: '300 Sq. Yds',
    areaNumeric: 300,
    areaUnit: 'Sq. Yds',
    facing: 'North-East Corner',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Prime 300 Sq. Yds corner open plot directly abutting a 60ft masterplan road. Ideal for custom independent bungalow construction or long-term high-yield land banking with rapid infrastructure expansion around Kollur and Neopolis.',
    amenities: [
      '60 Ft & 40 Ft Corner Roads',
      'HMDA Approved Layout',
      'Clear Spot Registration',
      'Underground Electrical Cabling',
      'Storm Water Drainage System',
      'Designer Street Lighting',
      'Park & Play Zone on 2 Sides'
    ],
    highlights: [
      'Direct connectivity to ORR Exit 2',
      '5 mins to Kollur Multi-speciality hub',
      'Fast developing IT professional neighborhood'
    ],
    documentStatus: 'Clear Title with 30-Year Link Documents',
    isDemonstrationData: true,
    createdAt: '2026-03-22'
  },
  {
    id: 'kk-resale-04',
    listingId: 'KK-RS-304',
    title: 'Ready-to-Move 2.5 BHK Resale Flat with Modular Interiors',
    tagline: 'Well Maintained Gated Community in Kondapur',
    purpose: 'resale',
    type: 'Resale Flat',
    category: 'flat',
    location: 'Kondapur, Close to Gachibowli Flyover, Hyderabad',
    locality: 'Kondapur',
    city: 'Hyderabad',
    priceDisplay: '₹1.15 Cr (Negotiable)',
    priceNumeric: 11500000,
    pricePerSqFt: '₹7,666 / Sq. Ft',
    area: '1,500 Sq. Ft',
    areaNumeric: 1500,
    areaUnit: 'Sq. Ft',
    bedrooms: 2,
    bathrooms: 2,
    facing: 'West Facing',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],


    description: 'Exceptional resale opportunity: Impeccably maintained 2.5 BHK unit featuring complete modular kitchen, customized teak wardrobes, false ceiling with ambient warm lighting, and dedicated 2-car covered parking in cellar.',
    amenities: [
      'Ready to Move In Immediately',
      'Fully Furnished Modular Kitchen',
      '2 Covered Car Parkings',
      'Clubhouse & Badminton Court',
      '24/7 Security with CCTV Surveillance',
      'Manjeera & Bore Water Supply'
    ],
    highlights: [
      '5 mins drive to HITEC City metro station',
      'Walking distance to Sarath City Capital Mall',
      'Clear bank-cleared property papers'
    ],
    documentStatus: 'Verified Legal Title with Clean Encumbrance',
    isDemonstrationData: true,
    createdAt: '2026-03-25'
  },
  {
    id: 'kk-resale-05',
    listingId: 'KK-RS-305',
    title: 'Verified Resale Plot in Established Shankarpally Enclave',
    tagline: 'Immediate Registration Ready Plot',
    purpose: 'resale',
    type: 'Resale Plot',
    category: 'plot',
    location: 'Shankarpally Main Road, Hyderabad',
    locality: 'Shankarpally',
    city: 'Hyderabad',
    priceDisplay: '₹28,000 / Sq. Yd',
    priceNumeric: 5600000, // 200 * 28000
    pricePerSqFt: '₹3,111 / Sq. Ft',
    area: '200 Sq. Yds',
    areaNumeric: 200,
    areaUnit: 'Sq. Yds',
    facing: 'North Facing',
    status: 'Available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Resale residential plot in an already gated layout with houses built nearby. Peaceful green surroundings, good groundwater table, clear demarcations, and spot registration facility.',
    amenities: [
      'Gated Layout with Security Guard',
      'Clear Ownership Documents',
      'Electricity & Street Lights Active',
      'Surrounded by Luxury Farmhouses',
      'Immediate Boundary Construction Allowed'
    ],
    highlights: [
      'Low entry ticket size for smart investors',
      'Direct access from Shankarpally arterial road',
      '30 mins from Gachibowli ORR junction'
    ],
    documentStatus: 'DTCP Final Layout Approved & Encumbrance Verified',
    isDemonstrationData: true,
    createdAt: '2026-03-26'
  },
  {
    id: 'kk-apt-06',
    listingId: 'KK-AP-406',
    title: 'Spacious 4 BHK Presidential Flat in Gated Community',
    tagline: 'Supreme Elegance in Kokapet Financial District',
    purpose: 'buy',
    type: 'Residential Apartment',
    category: 'apartment',
    location: 'Kokapet – Neopolis Growth Hub, Hyderabad',
    locality: 'Kokapet',
    city: 'Hyderabad',
    priceDisplay: '₹3.40 Cr',
    priceNumeric: 34000000,
    pricePerSqFt: '₹10,300 / Sq. Ft',
    area: '3,300 Sq. Ft',
    areaNumeric: 3300,
    areaUnit: 'Sq. Ft',
    bedrooms: 4,
    bathrooms: 4,
    facing: 'East Facing',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],


    description: 'Magnificent 4 BHK apartment with separate maid room, expansive wrap-around sit-out deck, German engineered windows, and private elevator foyer. Located minutes from international corporate headquarters in Financial District.',
    amenities: [
      'Private Elevator Foyer',
      'Temperature Controlled Indoor Pool',
      'Squash Court & Lawn Tennis',
      'Banquet Hall & Guest Suites',
      '3 Car Parking Spaces',
      'Smart Access Biometric Security'
    ],
    highlights: [
      'Adjacent to Neopolis High-Growth Commercial Hub',
      'Zero noise acoustic double glazed glass',
      '100% Vaastu compliant architecture'
    ],
    documentStatus: 'TS RERA & HMDA Sanctioned',
    reraNumber: 'P02400003710',
    isDemonstrationData: true,
    createdAt: '2026-03-28'
  },
  {
    id: 'kk-plot-07',
    listingId: 'KK-PL-107',
    title: 'Highway-Facing Open Plot for Villa Construction',
    tagline: 'Prime Hyderabad – Bengaluru Growth Corridor',
    purpose: 'buy',
    type: 'Open Plot',
    category: 'plot',
    location: 'Shadnagar – Regional Ring Road Corridor, Hyderabad',
    locality: 'Shadnagar',
    city: 'Hyderabad',
    priceDisplay: '₹18,500 / Sq. Yd',
    priceNumeric: 3700000, // 200 * 18500
    pricePerSqFt: '₹2,055 / Sq. Ft',
    area: '200 Sq. Yds',
    areaNumeric: 200,
    areaUnit: 'Sq. Yds',
    facing: 'East Facing',
    status: 'Available',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ready-to-register open plot in a township layout adjacent to upcoming Regional Ring Road (RRR) junction. Clear title, spot registration, and high capital growth prospect.',
    amenities: [
      'DTCP Approved & LP Number Sanctioned',
      'Underground Drainage & Water Lines',
      'Children Play Park & Walking Track',
      'Solar Street Lighting',
      'Gated Entrance Arch'
    ],
    highlights: [
      'Direct approach from 6-lane National Highway',
      'Nearby SEZ and Aerospace industrial corridor',
      'High rental & land appreciation potential'
    ],
    documentStatus: 'DTCP Sanctioned Layout',
    isDemonstrationData: true,
    createdAt: '2026-03-29'
  },
  {
    id: 'kk-flat-08',
    listingId: 'KK-FL-208',
    title: 'Contemporary 3 BHK Smart Flat Near Financial District',
    tagline: 'Modern Living with 75% Open Greenery',
    purpose: 'buy',
    type: 'Premium Flat',
    category: 'flat',
    location: 'Narsingi, Near ORR Junction, Hyderabad',
    locality: 'Narsingi',
    city: 'Hyderabad',
    priceDisplay: '₹1.45 Cr',
    priceNumeric: 14500000,
    pricePerSqFt: '₹8,055 / Sq. Ft',
    area: '1,800 Sq. Ft',
    areaNumeric: 1800,
    areaUnit: 'Sq. Ft',
    bedrooms: 3,
    bathrooms: 3,
    facing: 'North Facing',
    status: 'Available',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],

    description: 'Spacious 3 BHK home featuring expansive living-dining space, wooden textured tiles in master bedroom, modern sanitaryware, and balcony facing central landscaped garden.',
    amenities: [
      'Clubhouse with Swimming Pool',
      'Gym & Yoga Studio',
      'Jogging Track & Cricket Net',
      '24/7 Security & CCTV',
      'Intercom & Video Door Phone'
    ],
    highlights: [
      '8 Mins from Gachibowli Junction',
      'Walking distance to reputed schools',
      'Excellent rental yields for investors'
    ],
    documentStatus: 'HMDA & TS RERA Approved',
    isDemonstrationData: true,
    createdAt: '2026-03-30'
  }
];
