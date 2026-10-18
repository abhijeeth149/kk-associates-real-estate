# KK ASSOCIATES (Klinkaaraa Associates)
### Premium Real Estate Marketplace & Project Advisory — Hyderabad, Telangana, India

[![Built with React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20TypeScript-075E54?style=flat-square)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-0D8B78?style=flat-square)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Bundler-Vite%208-C7A76C?style=flat-square)](https://vite.dev)
[![Code Splitting](https://img.shields.io/badge/Architecture-Route--based%20Lazy%20Splitting-075E54?style=flat-square)](https://react.dev)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel%20Production-172522?style=flat-square)](https://vercel.com)

A high-performance real estate marketplace and advisory platform designed and engineered specifically for **KK ASSOCIATES (Klinkaaraa Associates)**, headquartered in **Gachibowli, Hyderabad, Telangana**. 

Inspired by the navigation clarity, mega menus, property discovery, and project showcase architectures of top portals (99acres, Search Homes India, My Home Group) with an original, architectural visual identity.

---

## 🌟 Business Profile

- **Business Name:** KK ASSOCIATES (Klinkaaraa Associates)
- **Specialization:** Buying, Selling & Reselling Residential Plots, Open Plots, Luxury Apartments, High-Rises, and Gated Communities
- **Primary Business Activities:**
  - Buying residential & open plots (Clear titles & sanctioned layouts)
  - Buying flats & apartments (2, 3 & 4 BHK luxury residences)
  - Resale plots & flats advisory
  - Landmark new residential launches (Direct developer coordination, zero brokerage)
  - Property selling assistance & listing desk
  - Home loan & bank EMI guidance
  - Document scrutiny & sale deed guidance
  - Complimentary escorted site visit coordination
- **Headquarters:** Gachibowli, Hyderabad, Telangana, India
- **WhatsApp / Phone:** `+91 9063613496` (Direct link: `https://wa.me/919063613496`)
- **Official Email:** `klinakaaraassociates@gmail.com`
- **Core Market Localities:** Neopolis, Kokapet, Budvel / Rajendra Nagar, Gachibowli, Tellapur, Mokila, Shankarpally, Kondapur, Narsingi, Kollur, Regional Ring Road (RRR) Corridor

---

## 🏗️ Verified Project Inventory (Extracted from Real Documents)

All project media, brochures, floor plans, and pricing schemes are extracted directly from genuine developer documents located in `IMAGES AND DETAILS OF ALL PROJECTS` and organized under `public/assets/projects/`:

| Project Name | Developer | Locality | Type / Floors | Base Price / Scheme | RERA Registration |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lansum Elena** | Lansum Properties | Kokapet (Golden Mile) | 3 & 4 BHK Luxury Apartments | Rs 8,499 / sft (Clubhouse Rs 6L) | P02400007304 |
| **Godrej Epoque** | Godrej Properties | Neopolis, Kokapet | 3 & 4 BHK Ultra-Luxury (57 Floors) | Rs 10,500 / sft (Pre-launch) | P02400007812 |
| **The Prestige City** | Prestige Group | Budvel, Rajendra Nagar | 1, 2, 3 & 4 BHK (64-Acre Township) | Smart 40:60 Payment Scheme | P02400007228 |
| **Prestige Spring Heights** | Prestige Group | Rajendra Nagar | 3 & 4 BHK High-Rises | EMI Azadi Scheme (Rs 9,999/mo) | P02400007550 |
| **Myscape Palma** | Myscape Group | Tellapur | 3 & 4 BHK Apartments | Rs 7,200 / sft (Slab plan) | P02400006981 |
| **Myscape Songs of the Sun** | Myscape Group | Financial District | 3 & 4 BHK Residences | Rs 8,100 / sft (Slab plan) | P02400007119 |
| **The Eminent** | Ramky Estates | Financial District Extension | 3 & 4 BHK Residences | Rs 7,999 / sft | P02400007441 |
| **The Marquise** | Lansum / Developer | Kokapet | 3 & 4 BHK Apartments | Price on Request | P02400007620 |

---

## 🚀 Architectural & Engineering Highlights

### 1. Navigation & Mega Menus
- **Sticky Desktop Header:** Glassmorphic header with hover-intent dropdowns, auto-dismiss on scroll or Escape key, and outside-click detection.
- **Buy Mega Menu:** 4-column discovery covering Property Types, Popular Hyderabad Localities, Configurations (1, 2, 3, 4 BHK, Plots, Villas), and Popular Search filters.
- **Resale Mega Menu:** Resale categories, key locations, resale owner services (Sell My Flat, Property Valuation Enquiry), and customer action points.
- **New Launches Mega Menu:** Live thumbnail grid of all verified landmark projects featuring verified RERA numbers, builder badges, and price indicators.
- **Our Services Mega Menu:** 4 structured advisory pillars:
  1. *Property Advisory* (Plot buying, High-rise selection, Commercial)
  2. *Finance & Loans* (Home loan assistance, Bank documentation, EMI Calculator)
  3. *Legal & Due Diligence* (Title verification, layout sanctions & DTCP, Encumbrance checks)
  4. *Customer Support* (Complimentary site visit coordination, property handover)
- **Projects / Areas Menu:** Filter projects by developer (Prestige, Godrej, Myscape, Lansum, Ramky), locality, or format.
- **Responsive Mobile Drawer:** Smooth slide-out mobile drawer with touch accordions for all navigation menus.

### 2. Rich Digital Document & Media Experience
- **Interactive Floor Plan Viewer (`FloorPlanViewer.tsx`):** Tabbed navigation across 2, 3, and 4 BHK configurations with dimension counters, full-resolution modal lightbox with zoom controls, and direct high-res plan downloads.
- **Embedded HTML5 Video Player (`ProjectVideoPlayer.tsx`):** Responsive 16:9 video player with custom poster frames, play overlays, and safe non-autoplay behavior for genuine project intro videos (`PRESTIGE CITY INTRO VIDEO.mp4`, `NEOPOLIS PROJECT INTRO.mp4`).
- **PDF Document Download Cards (`DocumentDownloadCard.tsx`):** Dedicated cards for brochures, price sheets, and payment plans (e.g. Smart 40:60, EMI Azadi) with direct download and preview actions.
- **Multi-Filter Project Directory (`/projects`):** Filter by developer, locality, construction status, BHK format, and free-text search with quick-select tags.

### 3. Route-Based Code Splitting & Performance
- All page views (`HomePage`, `ProjectDetailPage`, `ProjectsPage`, `ServicesPage`, `BlogsPage`, `BuyPage`, `ResalePage`, `SellPage`, `AdminPage`) are lazily loaded via `React.lazy()` and `Suspense`.
- Production bundle size reduced significantly with sub-10 kB lazy chunks for instantaneous first-paint performance.
- Zero external image placeholder dependencies for project data — all assets are served directly from the public asset directory.

### 4. Direct WhatsApp Ecosystem
- Contextual personalized pre-filled messages for:
  - Project enquiries (e.g., `Hello KK Associates, I am interested in Godrej Epoque Neopolis (3 & 4 BHK)...`)
  - Latest price requests
  - Floor plan & brochure requests
  - Resale property inquiries
  - Complimentary site visit scheduling
  - Property owner selling submissions
  - Sales Executive job applications

---

## 📁 Public Asset Directory Organization

```
public/
├── assets/
│   └── projects/
│       ├── godrej-epoque-neopolis/
│       │   ├── images/         # High-res architectural renders
│       │   ├── floor-plans/    # Tower layout & unit plans
│       │   ├── documents/      # Price sheets & sales presentations
│       │   └── videos/         # 1080p project flythrough video
│       ├── lansum-elena/
│       │   ├── images/         # Elevations & newsletter renders
│       │   ├── floor-plans/    # Mobile floor plans & layout sheets
│       │   └── documents/      # Official Lansum brochure & rate cards
│       ├── the-prestige-city/
│       │   ├── images/         # Master plans, posters, location maps
│       │   ├── documents/      # Smart 40:60 payment scheme & brochures
│       │   └── videos/         # The Prestige City intro walkthrough video
│       ├── prestige-spring-heights/
│       │   ├── floor-plans/    # Unit floor plans
│       │   └── documents/      # EMI Azadi payment plan & price sheets
│       ├── myscape-palma/
│       │   ├── images/         # Render elevations
│       │   └── documents/      # Palma mini brochure & price sheet
│       ├── myscape-songs-of-the-sun/
│       │   ├── images/         # Elevation & master layout renders
│       │   └── documents/      # SOTS brochure & price schedule
│       ├── the-eminent-ramky/
│       │   ├── images/         # Tower renders
│       │   └── documents/      # Ramky official brochure & Sep '26 price sheet
│       └── the-marquise-kokapet/
│           ├── images/         # Project elevation render
│           └── floor-plans/    # Comprehensive all-areas plan sheet
├── favicon.svg
├── logo-icon.svg
├── robots.txt
└── sitemap.xml
```

---

## 🔍 Technical SEO & Google Search Console Setup

1. **Structured Data (Schema.org):** `index.html` includes JSON-LD for `RealEstateAgent`:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "RealEstateAgent",
     "name": "KK Associates",
     "alternateName": "Klinkaaraa Associates",
     "url": "https://kk-associates.vercel.app",
     "telephone": "+919063613496",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Gachibowli",
       "addressRegion": "Telangana",
       "addressCountry": "IN"
     }
   }
   ```
2. **Search Console & Sitemap Submission:**
   - Verify ownership in [Google Search Console](https://search.google.com/search-console).
   - Submit the sitemap: `https://<your-domain>/sitemap.xml`.
   - The sitemap includes all static pages, services, blogs, and dedicated project URLs (`/projects/lansum-elena`, `/projects/godrej-epoque-neopolis`, etc.).

---

## 🔒 Content Management & Architecture Notice

The application includes an administrative management panel at `/admin` (Demo PIN: `9063` or `1234`).

> **Architectural Notice for Production:**  
> The current listing manager stores newly created or edited properties in client-side browser `localStorage` for demonstration and immediate preview purposes. Changes made in one user's browser do not replicate to other visitors. For a multi-user production deployment, connect a serverless database (such as Supabase, Firebase, or PostgreSQL) with authenticated REST/GraphQL endpoints.

---

## 💻 Local Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check & Vite production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Vercel Deployment

1. Push changes to the `main` branch of the GitHub repository:  
   `https://github.com/abhijeeth149/kk-associates-real-estate`
2. Connect repository to [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. `vercel.json` is pre-configured for Single Page Application rewrite rules (`/* -> /index.html`).

---

## 📞 Official Contact Information

**KK ASSOCIATES (Klinkaaraa Associates)**  
📍 Gachibowli, Hyderabad, Telangana, India  
💬 WhatsApp: [+91 9063613496](https://wa.me/919063613496)  
✉️ Email: [klinakaaraassociates@gmail.com](mailto:klinakaaraassociates@gmail.com)
