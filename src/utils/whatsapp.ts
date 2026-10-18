import { COMPANY_CONFIG } from '../config/company';
import type { Property, SellPropertyFormData, SiteVisitFormData } from '../types/property';

const PHONE_NUMBER = COMPANY_CONFIG.rawPhone; // '919063613496'

/**
 * Builds standard safe WhatsApp URL
 */
export const buildWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;
};

/**
 * Opens WhatsApp in new tab safely
 */
export const openWhatsApp = (message: string): void => {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * 1. General Business WhatsApp Message
 */
export const getGeneralWhatsAppMessage = (): string => {
  return `Hello KK Associates, I visited your website and would like to know more about your real estate services and available properties.`;
};

/**
 * 2. Property Specific WhatsApp Enquiry
 */
export const getPropertyWhatsAppMessage = (property: Property, customBudget?: string): string => {
  return `Hello KK Associates, I am interested in the following property:

Property: ${property.title}
Property ID: ${property.listingId}
Location: ${property.location}
Property Type: ${property.type}
Price / Budget: ${customBudget || property.priceDisplay}
Area: ${property.area}

Please share more details and let me know if a site visit can be arranged.`;
};

/**
 * 3. Selling Property WhatsApp Message
 */
export const getSellPropertyWhatsAppMessage = (data: Partial<SellPropertyFormData>): string => {
  return `Hello KK Associates, I would like to sell my property.

Owner Name: ${data.ownerName || 'Not specified'}
Property Type: ${data.propertyType || 'Residential Plot / Flat'}
Location: ${data.location || data.locality || 'Hyderabad'}
Area: ${data.plotArea || 'Not specified'}
Expected Price: ${data.expectedPrice || 'Contact to discuss'}
Phone: ${data.phone || 'Available'}

Please contact me to discuss the next steps.`;
};

/**
 * 4. Resale Property WhatsApp Enquiry
 */
export const getResaleWhatsAppMessage = (location?: string, budget?: string, propertyType?: string): string => {
  return `Hello KK Associates, I am looking for verified Resale Properties in Hyderabad.

Preferred Location: ${location || 'Hyderabad (Gachibowli / Tellapur / Mokila)'}
Property Type: ${propertyType || 'Resale Flat / Plot'}
Budget: ${budget || 'Flexible'}

Please share suitable verified resale options available with you.`;
};

/**
 * 5. Site Visit Booking WhatsApp Message
 */
export const getSiteVisitWhatsAppMessage = (data: SiteVisitFormData): string => {
  return `Hello KK Associates, I would like to arrange a site visit.

Property: ${data.propertyTitle} (ID: ${data.propertyId})
Visitor Name: ${data.fullName}
Contact: ${data.phone}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Number of Persons: ${data.numberOfPersons}
${data.notes ? `Notes: ${data.notes}` : ''}

Please confirm the appointment.`;
};

/**
 * 6. Career Application (Sales Executive)
 */
export const getCareerWhatsAppMessage = (applicantName: string, experience: string): string => {
  return `Hello KK Associates Hiring Team,

I am interested in applying for the Sales Executive position at your Gachibowli office.

Name: ${applicantName}
Experience/Background: ${experience}
Work Location: Gachibowli Site

Please let me know when we can connect for a discussion.`;
};

/**
 * 7. Verified Project Specific WhatsApp Enquiry
 */
export const getProjectWhatsAppMessage = (
  project: { name: string; developer: string; location: string; slug: string },
  action: 'general' | 'price' | 'brochure' | 'visit' | 'scheme' = 'general',
  schemeName?: string
): string => {
  if (action === 'price') {
    return `Hello KK Associates, I would like to request the latest verified price sheet and payment schedule for:

Project: ${project.name}
Developer: ${project.developer}
Location: ${project.location}

Please share the current per sq.ft rate, available floor inventory, and any applicable launch offers.`;
  }

  if (action === 'brochure') {
    return `Hello KK Associates, I am interested in exploring:

Project: ${project.name} (${project.developer})
Location: ${project.location}

Please share the detailed floor plans, master plan, and brochure.`;
  }

  if (action === 'scheme' && schemeName) {
    return `Hello KK Associates, I would like details regarding the special payment scheme for:

Project: ${project.name}
Payment Scheme: ${schemeName}
Location: ${project.location}

Please explain the eligibility, bank tie-ups, and booking requirements.`;
  }

  if (action === 'visit') {
    return `Hello KK Associates, I would like to arrange a site visit for:

Project: ${project.name} (${project.developer})
Location: ${project.location}

Please let me know when your team can coordinate an escorted site visit.`;
  }

  return `Hello KK Associates, I am interested in learning more about:

Project: ${project.name}
Developer: ${project.developer}
Location: ${project.location}

Please share complete project information and available configurations.`;
};

/**
 * 8. Service Specific WhatsApp Enquiry
 */
export const getServiceWhatsAppMessage = (serviceName: string, customerDetails?: string): string => {
  return `Hello KK Associates, I am interested in your real estate service:

Service: ${serviceName}
${customerDetails ? `Details: ${customerDetails}\n` : ''}
Location: Hyderabad

Please get in touch with me to discuss further.`;
};

