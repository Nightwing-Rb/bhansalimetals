import { defineCollection, z } from 'astro:content';

/**
 * 1. Alloy Grades Content Collection Schema
 * Validates high nickel superalloys, stainless steel, and duplex grades.
 */
const alloysCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().min(1),
    grade: z.string().min(1),
    family: z.enum([
      'Inconel',
      'Incoloy',
      'Monel',
      'Hastelloy',
      'Nickel',
      'Stainless Steel',
      'Duplex',
      'Super Duplex',
      'inconel',
      'incoloy',
      'monel',
      'hastelloy',
      'nickel',
      'stainless-steel',
      'duplex',
      'super-duplex'
    ]),
    familyDisplayName: z.string().optional(),
    metallurgy: z.string().optional(),
    pren: z.number().optional(),
    uns: z.string().optional(),
    unsNumber: z.string(),
    wnr: z.string().nullable().optional(),
    werkstoffNumber: z.string().nullable().optional(),
    astmStandards: z.array(z.string()).min(1),
    asmeStandards: z.array(z.string()).optional(),
    naceCompliance: z.boolean().default(true),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    summary: z.string(),
    keyFeatures: z.array(z.string()).optional(),
    corrosionResistance: z.string().optional(),
    applications: z.array(z.string()).optional(),
    chemicalComposition: z.record(
      z.string(),
      z.union([z.string(), z.number().nonnegative()])
    ),
    mechanicalProperties: z.object({
      tensileStrength: z.object({
        mpa: z.union([z.string(), z.number()]),
        ksi: z.union([z.string(), z.number()]),
      }),
      yieldStrength: z.object({
        mpa: z.union([z.string(), z.number()]),
        ksi: z.union([z.string(), z.number()]),
      }),
      elongation: z.union([z.string(), z.number()]),
      hardness: z.string().optional(),
      density: z.object({
        metric: z.string(),
        imperial: z.string(),
      }).optional(),
      meltingPoint: z.object({
        celsius: z.string(),
        fahrenheit: z.string(),
      }).optional(),
    }),
    availableForms: z.array(z.string()).min(1),
    stockReadiness: z.string().default('Ready Stock in Opera House Godown, Mumbai'),
    equivalentGrades: z.record(z.string(), z.string()).optional(),
  }),
});

/**
 * 2. Product Categories Content Collection Schema
 * Validates the 7 primary industrial product categories.
 */
const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().min(1),
    category: z.string().min(1),
    tagline: z.string().optional(),
    shortDescription: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    sizeRange: z.string(),
    pressureRatings: z.array(z.string()).optional(),
    applicableStandards: z.array(z.string()).min(1),
    forms: z.array(z.string()).min(1).optional(),
    subTypes: z.array(
      z.object({
        name: z.string(),
        abbreviation: z.string().optional(),
        description: z.string(),
        facingTypes: z.array(z.string()).optional(),
      })
    ).optional(),
    compatibleAlloys: z.array(z.string()).min(1),
    manufacturingProcess: z.string().optional(),
    qualityInspection: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    schematicSvg: z.string().optional(),
  }),
});

/**
 * 3. Technical Data Content Collection Schema
 * Validates engineering dimension tables, schedules, formulas, and metallurgical charts.
 */
const technicalDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().min(1),
    standard: z.string(),
    category: z.enum([
      'flange-dimensions',
      'pipe-schedules',
      'fittings-dimensions',
      'weight-formulas',
      'metallurgical-data'
    ]),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    description: z.string(),
    downloadablePdf: z.string().optional(),
    tableHeaders: z.array(z.string()),
    rows: z.array(z.record(z.string(), z.union([z.string(), z.number()]))),
    dualUnitAvailable: z.boolean().default(true),
    notes: z.array(z.string()).optional(),
  }),
});

export const collections = {
  alloys: alloysCollection,
  products: productsCollection,
  'technical-data': technicalDataCollection,
};
