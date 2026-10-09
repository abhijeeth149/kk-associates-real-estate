# KK ASSOCIATES (Klinkaaraa Associates)
### Premium Real Estate Platform — Hyderabad, Telangana, India

[![Built with React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20TypeScript-075E54?style=flat-square)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-0D8B78?style=flat-square)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Bundler-Vite%208-C7A76C?style=flat-square)](https://vite.dev)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel%20SPA-172522?style=flat-square)](https://vercel.com)

A world-class, production-ready real estate web application designed and engineered specifically for **KK ASSOCIATES (Klinkaaraa Associates)**, headquartered in **Gachibowli, Hyderabad, Telangana**.

---

## 🌟 Business Overview

- **Business Name:** KK ASSOCIATES (Klinkaaraa Associates)
- **Specialization:** Buying, Selling & Reselling Residential Plots, Open Plots, Apartments, and Premium Flats
- **Headquarters:** Gachibowli, Hyderabad, Telangana, India
- **WhatsApp / Phone:** `+91 9063613496` (Direct API: `https://wa.me/919063613496`)
- **Official Email:** `klinakaaraassociates@gmail.com`
- **Core Market Localities:** Gachibowli, Tellapur, Mokila, Shankarpally, Kokapet, Kollur, Kondapur, Narsingi, Shadnagar, Regional Ring Road (RRR) Corridor

---

## ✨ Key Features & Architecture

1. **Brand Identity & Luxury Aesthetic**
   - Architectural double-chevron brand mark icon (SVG).
   - Tailored palette: Deep Forest Green (`#075E54`), Emerald (`#0D8B78`), Warm Gold (`#C7A76C`), Dark Charcoal (`#172522`), and Soft Gray (`#E8EFEC`).
   - High-end typography using Google Fonts: *Plus Jakarta Sans*, *Outfit*, and *Playfair Display*.

2. **Full Responsive Navigation**
   - Sticky navbar with backdrop blur and responsive mobile navigation drawer.
   - Quick header banner featuring direct Gachibowli phone link and active hiring notice.

3. **Interactive Hero Section & Search Engine**
   - Full-width hero with high-resolution visual community photography.
   - Multi-tab search panel (**Buy / Resale / Sell**) with real-time Hyderabad locality, category, and budget parameters.

4. **Curated Property Categories**
   - Residential Plots (HMDA & DTCP)
   - Open Plots & Land Enclaves
   - Premium 2 & 3 BHK Flats
   - Residential Gated Apartments
   - Verified Resale Flats
   - Verified Resale Plots

5. **Deep WhatsApp Integration**
   - Universal `WhatsAppButton` and sticky `FloatingWhatsApp` launcher with animated popover.
   - URL-encoded specialized templates for:
     - General property guidance
     - Property-specific enquiries (includes Title, ID, Locality, Budget)
     - Property selling requests (Owner name, Area, Expected price)
     - Resale inquiries
     - Site visit scheduling
     - Career / Sales Executive job applications

6. **Dedicated Property Detail Pages (`/property/:id`)**
   - Interactive high-res photo gallery with thumbnail switcher.
   - Hyderabad property units (**Sq. Yds** for plots, **Sq. Ft** for flats, BHK counters, facing directions).
   - HMDA / DTCP / TS RERA document verification notes.
   - Sticky 4-Action desktop sidebar:
     1. *Enquire on WhatsApp*
     2. *Call Now (+91 9063613496)*
     3. *Send Email Enquiry*
     4. *Request a Free Site Visit*
   - Similar property recommendation carousel.

7. **Property Selling Portal (`/sell`)**
   - Complete property owner submission form with validation for 10-digit Indian phone numbers, expected prices, and preferred contact mode.
   - Instant WhatsApp submission generation + callback logging.

8. **Home Loan & EMI Calculator**
   - Interactive slider calculator for loan amount, interest rate (p.a.), and tenure (years).
   - Real-time monthly EMI, principal vs. interest breakdown visual bar, and bank loan advisory CTA.

9. **Careers Portal (`/careers`)**
   - Tailored to KK Associates' official Sales Executive hiring campaign (Gachibowli site, competitive salary + incentives).

10. **Admin Portal & Live Management (`/admin`)**
    - PIN protected dashboard (Demo PIN: `9063` or `1234`).
    - Add, edit, delete listings, and toggle Available/Sold statuses with live `localStorage` persistence.

11. **Technical SEO & Legal Trust**
    - Semantic HTML5, canonical URLs, descriptive meta tags, Open Graph preview data, `sitemap.xml`, and `robots.txt`.
    - Dedicated Privacy Policy (`/privacy`) and Terms of Service (`/terms`).

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 + `@tailwindcss/vite`
- **Routing:** React Router DOM v7 (SPA with `ScrollToTop`)
- **Icons:** Lucide React
- **Micro-Animations:** CSS Keyframes + Canvas Confetti

---

## 📁 Project Directory Structure

```
kk/
├── public/
│   ├── favicon.svg
│   ├── logo-icon.svg        # Official KK Associates SVG brand mark
│   ├── robots.txt           # SEO crawler instructions
│   └── sitemap.xml          # XML sitemap for Google indexing
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrandLogo.tsx
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   ├── ToastContainer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── modals/
│   │   │   ├── EnquiryModal.tsx
│   │   │   └── SiteVisitModal.tsx
│   │   ├── property/
│   │   │   ├── HeroSearchPanel.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   └── PropertyFilters.tsx
│   │   └── tools/
│   │       └── EmiCalculator.tsx
│   ├── config/
│   │   └── company.ts       # Centralized business configuration
│   ├── context/
│   │   ├── ModalContext.tsx
│   │   └── PropertyContext.tsx
│   ├── data/
│   │   └── properties.ts    # Demonstration property dataset
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── BuyPage.tsx
│   │   ├── CareersPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── PropertiesPage.tsx
│   │   ├── PropertyDetailPage.tsx
│   │   ├── ResalePage.tsx
│   │   ├── SellPage.tsx
│   │   └── TermsPage.tsx
│   ├── types/
│   │   └── property.ts
│   ├── utils/
│   │   └── whatsapp.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json              # Vercel SPA routing
└── vite.config.ts
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository and navigate into the project directory
cd kk

# Install all dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Production Build & Validation

```bash
# Run TypeScript type check and compile production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

1. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```
2. **Via GitHub / Vercel Web Dashboard:**
   - Push this directory to your GitHub / GitLab repository.
   - Import the repository into [Vercel](https://vercel.com).
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Deploy! (The included `vercel.json` ensures all client-side routes resolve properly).

---

## 📞 Business Contact Information

**KK ASSOCIATES (Klinkaaraa Associates)**  
📍 Gachibowli, Hyderabad, Telangana, India  
💬 WhatsApp: [+91 9063613496](https://wa.me/919063613496)  
✉️ Email: [klinakaaraassociates@gmail.com](mailto:klinakaaraassociates@gmail.com)
