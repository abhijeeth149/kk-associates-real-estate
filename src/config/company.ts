export const COMPANY_CONFIG = {
  name: 'KK ASSOCIATES',
  legalName: 'Klinkaaraa Associates',
  tagline: 'Find Your Place. Build Your Future.',
  shortDescription: 'Your trusted real estate partner in Hyderabad for premium residential plots, open plots, luxury apartments, and verified resale properties.',
  
  // Contact details
  phone: '+91 9063613496',
  rawPhone: '919063613496',
  email: 'klinakaaraassociates@gmail.com',
  
  // Location
  location: {
    area: 'Gachibowli',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    addressString: 'Gachibowli, Hyderabad, Telangana, India',
    coordinates: {
      lat: 17.4401,
      lng: 78.3489
    }
  },

  // Working hours
  workingHours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 7:30 PM',
    sunday: 'Sunday: By Appointment for Site Visits'
  },

  // Color theme constants
  colors: {
    forest: '#075E54',
    emerald: '#0D8B78',
    gold: '#C7A76C',
    charcoal: '#172522',
    softGray: '#E8EFEC',
    warmWhite: '#F8FAF8'
  },

  // Popular Hyderabad prime locations
  primeLocations: [
    'Gachibowli',
    'Financial District',
    'Tellapur',
    'Kokapet',
    'Mokila',
    'Shankarpally',
    'Kollur',
    'Kondapur',
    'Manikonda',
    'Patancheru',
    'Narsingi',
    'Shadnagar'
  ],

  // Property categories
  categories: [
    {
      id: 'residential-plots',
      title: 'Residential Plots',
      slug: 'residential-plots',
      description: 'HMDA & DTCP approved layout plots in fast-growing growth corridors.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
      badge: 'High Appreciation'
    },
    {
      id: 'open-plots',
      title: 'Open Plots',
      slug: 'open-plots',
      description: 'Strategic open land plots ready for custom villa construction and long-term asset security.',
      image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1000&q=80',
      badge: 'Clear Title'
    },
    {
      id: 'premium-flats',
      title: 'Premium Flats',
      slug: 'premium-flats',
      description: 'Modern 2 & 3 BHK high-rise residences with world-class clubhouse amenities.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      badge: 'Ready / Under Construction'
    },

    {
      id: 'residential-apartments',
      title: 'Residential Apartments',
      slug: 'residential-apartments',
      description: 'Gated community luxury apartments close to IT corridors and international schools.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      badge: 'Family Living'
    },
    {
      id: 'resale-flats',
      title: 'Resale Flats',
      slug: 'resale-flats',
      description: 'Immediate possession, verified resale apartments with competitive pricing in prime localities.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      badge: 'Immediate Move-in'
    },

    {
      id: 'resale-plots',
      title: 'Resale Plots',
      slug: 'resale-plots',
      description: 'Prime resale plots in established gated layouts with clear historical title records.',
      image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1000&q=80',
      badge: 'Verified Resale'
    }
  ]
};
