/**
 * Bhansali Metals - Schema.org JSON-LD Structured Data Utilities
 * Produces valid, Google Rich Results compliant schemas for industrial products,
 * breadcrumbs, FAQ pages, and organization entities.
 */

import { siteConfig } from '../data/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductSchemaOptions {
  name: string;
  description: string;
  url?: string;
  image?: string | string[];
  sku?: string;
  material?: string;
  category?: string;
  standard?: string | string[];
  inStock?: boolean;
  priceCurrency?: string;
  price?: string | number;
}

/**
 * Builds standard Organization JSON-LD schema referencing company credentials,
 * ISO certification, registered Opera House office, and Kalamboli stockyard.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.office.address,
      addressLocality: siteConfig.office.city,
      addressRegion: siteConfig.office.state,
      postalCode: siteConfig.office.pincode,
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contacts.landline1,
        contactType: 'sales',
        email: siteConfig.contacts.salesEmail,
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contacts.salesWhatsApp,
        contactType: 'customer service',
        contactOption: 'WhatsApp',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: siteConfig.certifications.iso,
        credentialCategory: 'Quality Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: siteConfig.certifications.isoBody,
          identifier: siteConfig.certifications.isoRegNo,
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: siteConfig.certifications.ped,
        credentialCategory: 'Pressure Equipment Directive',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: siteConfig.certifications.nace,
        credentialCategory: 'Sour Service Metallurgical Standard',
      },
    ],
  };
}

/**
 * Builds Schema.org Product schema for alloy grades, flanges, pipes, and fittings.
 */
export function buildProductSchema(options: ProductSchemaOptions) {
  const {
    name,
    description,
    url = siteConfig.url,
    image = `${siteConfig.url}${siteConfig.logo}`,
    sku,
    material,
    category = 'High Nickel Alloys & Industrial Piping',
    standard,
    inStock = true,
    priceCurrency = 'INR',
    price,
  } = options;

  const imagesArray = Array.isArray(image) ? image : [image];

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: imagesArray,
    category,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency,
      price: price !== undefined ? String(price) : '0.00',
      priceValidUntil: '2026-12-31',
      availability: inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  };

  if (sku) {
    schema.sku = sku;
    schema.mpn = sku;
  }

  if (material) {
    schema.material = material;
  }

  if (standard) {
    schema.additionalProperty = [
      {
        '@type': 'PropertyValue',
        name: 'Applicable Standard',
        value: Array.isArray(standard) ? standard.join(', ') : standard,
      },
    ];
  }

  return schema;
}

/**
 * Builds BreadcrumbList JSON-LD schema for hierarchy navigation.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

/**
 * Builds FAQPage JSON-LD schema for technical & metallurgical Q&A accordions.
 */
export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
