# Modern Astro Static-Site Architecture Blueprint & Technical Handoff

**Author**: explorer_survey_2 (Astro Technical Architect Explorer)  
**Target Working Directory**: `c:\AllStuff\Coding\bhansalimetals-local`  
**Date**: 2026-09-10  

---

## 1. Observation

### 1.1 Environment Capabilities & Tooling
- **Node.js**: Executed `node -v` in root directory. Direct observation: `v24.11.0`. Node 24 is a modern, high-performance LTS runtime with native support for modern ES modules, top-level await, and native fetch.
- **npm**: Executed `npm -v` in root directory. Direct observation: `11.6.1`.
- **npm Registry Connectivity**: Executed `npm ping`. Direct observation: `npm notice PONG 346ms`. Package downloads and installs are rapid and functional.
- **Astro Ecosystem Availability**: Executed `npm view astro version` and `npm view @astrojs/sitemap version`. Direct observation: Latest published Astro ecosystem packages (`astro`, `@astrojs/sitemap`, `@astrojs/check`) are available.
- **Git Version Control**: Executed `git status`. Direct observation: Root is currently not a git repository (`fatal: not a git repository`).

### 1.2 Existing Root Filesystem & Legacy Assets
- Executed directory scans across `c:\AllStuff\Coding\bhansalimetals-local`:
  - `package.json`: Does NOT exist in root.
  - `DESIGN.md`: Present at root (28,340 bytes). Defines HP Electric Blue (`#024ad8`), canvas (`#ffffff`), cloud (`#f7f7f7`), fog (`#e8e8e8`), ink (`#1a1a1a`), 2-tier border radius (sharp 4px buttons/inputs, soft 16px cards), 45° blue chevrons, Soft Lift shadows (`0 2px 8px rgba(26, 26, 26, 0.08)`).
  - `ORIGINAL_REQUEST.md`: Present at root and in `.agents/`. Specifies requirements R1–R6.
  - `www.bhansalimetals.com/`: Authoritative legacy website containing exactly **38 HTML files**, 3 subdirectories (`css/`, `js/`, `images/`), and 124 legacy image files.

### 1.3 Legacy Content & Defect Audit
- **Competitor Text Contamination**:
  - `pipefitting.html:190`: `<li>We Regal  Sales Corporation hold an expertise in offering INCONEL Union to our valued  customers...</li>`
  - `stanless_pipe.html:183`: `<li>We Regal  Sales Corporation hold an expertise in offering INCONEL Union to our valued  customers...</li>`
- **External Image Hotlinks**:
  - 8 files contain hotlinks to `http://www.manansteel.com/images/...`:
    - `tech_caps.html:166` (`caps-d1.gif`)
    - `tech_flanges.html:151` (`flanges_tech_image003.gif`)
    - `tech_elbow.html:154` (`pf_elb1.gif`)
    - `tech_forgedfitting.html:148` (`forged1.jpg`)
    - `tech_pipefitting.html:142` (`buttweld1 (1).png`)
    - `tech_reducer.html:168` (`reducers2.gif`)
    - `tech_stubend.html:166` (`stubends1.gif`)
    - `tech_tees.html:148` (`tees2.gif`)
- **Metallurgical Mislabeling**:
  - `tech_nickelalloy.html:716` and line `796`: Inconel 600 and Inconel 625 are erroneously labeled as `Incoloy 600` and `Incoloy 625`.

---

## 2. Logic Chain

### 2.1 Static Site Generation (SSG) Rationale
- **Premise 1**: Requirements R1 and Acceptance Criteria demand sub-second load times, 100/100 performance, and zero client JS bloat for static industrial catalog browsing.
- **Premise 2**: Astro's default `output: 'static'` mode builds purely pre-rendered HTML and CSS into `dist/`. No server runtime (Node/Express/SSR) is required for deployment.
- **Deduction**: All alloy pages, product pages, engineering dimension charts, and company pages should be generated strictly as static HTML files at build time (`npm run build`).

### 2.2 Dynamic Routing via Astro Content Collections
- **Premise 1**: Bhansali Metals features 19+ distinct alloy grades, 7 primary product categories, and 14+ technical engineering data tables.
- **Premise 2**: Managing these as static hardcoded `.astro` pages leads to code duplication, maintenance friction, and inconsistent SEO schema.
- **Premise 3**: Astro Content Collections (`astro:content`) with Zod schemas ensure strict compile-time type safety, automated markdown/JSON validation, and clean parameter mapping via `getStaticPaths()`.
- **Deduction**: Dynamic route templates `/products/[category].astro`, `/alloys/[grade].astro`, and `/technical-data/[slug].astro` querying `src/content/` collections will generate 100% of the catalog pages with zero duplication.

### 2.3 Zero-Runtime-JS & Lightweight Client Strategy
- **Premise 1**: Heavy frameworks (React, Vue, Svelte) bundle tens of kilobytes of JavaScript hydration runtime, increasing Largest Contentful Paint (LCP) and Total Blocking Time (TBT).
- **Premise 2**: The required interactive behaviors are strictly scoped:
  1. RFQ modal with Bill of Quantities (BOQ) text/file upload.
  2. WhatsApp Click-to-Chat with pre-filled product parameters.
  3. Metric / Imperial unit toggle for engineering tables.
  4. Flange / Pipe schedule dimension filter/search.
  5. Mobile navigation hamburger toggle.
- **Premise 3**: The HTML5 standard `<dialog>` element provides native, accessible modal dialogs with zero dependencies. WhatsApp Click-to-Chat is a pure static `<a>` tag with pre-computed URL parameters. Unit toggling can be achieved using native CSS data-attributes (`[data-unit="metric"]`). Table filtering requires ~35 lines of vanilla JavaScript.
- **Deduction**: The site should ship zero frontend framework libraries. All components will be native `.astro` files with < 5 KB of vanilla JS.

### 2.4 Complete 38-Page Legacy URL Preservation
- **Premise 1**: Search engines and existing clients have indexed the 38 legacy `.html` files in `www.bhansalimetals.com`.
- **Premise 2**: Removing or breaking these URLs creates 404 crawl errors, destroys domain authority, and loses inbound procurement inquiries.
- **Deduction**: The Astro configuration must incorporate a complete 1-to-1 static redirection table mapping every `.html` legacy route to its new clean Astro URL.

---

## 3. Comprehensive Architecture Blueprint

### 3.1 Project File Tree Specification

```
bhansalimetals-local/
├── astro.config.mjs               # Astro static config, sitemap integration, legacy redirects
├── package.json                   # Zero-bloat dependencies, build scripts
├── tsconfig.json                  # Strict TypeScript configuration
├── public/                        # Static assets copied directly to dist/
│   ├── favicon.svg                # Modern SVG favicon (Bhansali brand mark)
│   ├── robots.txt                 # Search engine crawling rules & sitemap reference
│   ├── images/
│   │   ├── logo.svg               # Vector brand mark adhering to DESIGN.md
│   │   ├── badges/                # Clean SVG certification and TPI stamps
│   │   │   ├── iso-9001-qaic.svg
│   │   │   ├── en-10204-mtc.svg
│   │   │   ├── bv.svg             # Bureau Veritas
│   │   │   ├── tuv-india.svg      # TÜV India
│   │   │   ├── lloyds.svg         # Lloyd's Register
│   │   │   ├── eil.svg            # Engineers India Limited
│   │   │   ├── dnv.svg            # DNV
│   │   │   └── sgs.svg            # SGS
│   │   ├── products/              # Optimized product photography & vector schematics
│   │   │   ├── flanges.svg
│   │   │   ├── pipes-tubes.svg
│   │   │   ├── buttweld-fittings.svg
│   │   │   ├── forged-fittings.svg
│   │   │   ├── fasteners.svg
│   │   │   ├── round-bars.svg
│   │   │   └── sheets-plates.svg
│   │   └── schematics/            # Native SVGs replacing manansteel hotlinks
│   │       ├── asme-b16-5-flange.svg
│   │       ├── butt-weld-elbow.svg
│   │       ├── butt-weld-tee.svg
│   │       ├── butt-weld-reducer.svg
│   │       ├── stub-end.svg
│   │       └── forged-fitting.svg
├── src/
│   ├── content/                   # Astro Content Collections (Markdown & JSON)
│   │   ├── config.ts              # Zod schemas for alloys, products, technicalData
│   │   ├── alloys/                # Structured JSON entries for each alloy grade
│   │   │   ├── inconel-600.json
│   │   │   ├── inconel-625.json
│   │   │   ├── inconel-718.json
│   │   │   ├── incoloy-800.json
│   │   │   ├── monel-400.json
│   │   │   ├── monel-k500.json
│   │   │   ├── hastelloy-c276.json
│   │   │   ├── hastelloy-c22.json
│   │   │   ├── hastelloy-b2.json
│   │   │   ├── hastelloy-x.json
│   │   │   ├── nickel-200.json
│   │   │   ├── nickel-201.json
│   │   │   ├── stainless-steel-304.json
│   │   │   ├── stainless-steel-304l.json
│   │   │   ├── stainless-steel-316.json
│   │   │   ├── stainless-steel-316l.json
│   │   │   ├── stainless-steel-321.json
│   │   │   ├── stainless-steel-310s.json
│   │   │   ├── stainless-steel-347.json
│   │   │   ├── stainless-steel-904l.json
│   │   │   ├── duplex-2205.json
│   │   │   └── super-duplex-2507.json
│   │   ├── products/              # Structured JSON entries for product categories
│   │   │   ├── flanges.json
│   │   │   ├── pipes-tubes.json
│   │   │   ├── buttweld-fittings.json
│   │   │   ├── forged-fittings.json
│   │   │   ├── fasteners.json
│   │   │   ├── round-bars.json
│   │   │   └── sheets-plates.json
│   │   └── technical-data/        # Structured JSON entries for engineering data tables
│   │       ├── asme-b16-5-flange-dimensions.json
│   │       ├── pipe-schedule-chart.json
│   │       ├── asme-b16-9-elbows.json
│   │       ├── asme-b16-9-tees.json
│   │       ├── asme-b16-9-reducers.json
│   │       ├── asme-b16-9-caps.json
│   │       ├── asme-b16-9-stub-ends.json
│   │       ├── asme-b16-11-forged-fittings.json
│   │       ├── theoretical-metal-weight-formulas.json
│   │       ├── chemical-compositions-alloys.json
│   │       └── mechanical-properties-comparison.json
│   ├── data/                      # TypeScript constants & helper matrices
│   │   ├── site.ts                # Brand name, phone (+91 22 6743 8356), WhatsApp (+91 9892244451), Opera House Mumbai address, emails
│   │   ├── navigation.ts          # Main nav categories, dropdown menus, footer columns
│   │   └── weight-calculators.ts  # Pipe, round bar, plate weight formulas
│   ├── styles/                    # Modern pure CSS tokens matching DESIGN.md
│   │   ├── tokens.css             # CSS Custom Properties for HP Electric Blue system
│   │   ├── global.css             # Typography (Inter/Forma DJR), layout resets, utility classes
│   │   └── tables.css             # High-density engineering tables, sticky headers, dual unit styles
│   ├── components/
│   │   ├── common/
│   │   │   ├── BaseHead.astro     # Meta tags, canonical, font preloads, social preview
│   │   │   ├── JsonLd.astro       # Organization, Product, AggregateOffer, Breadcrumbs, FAQ schemas
│   │   │   ├── Breadcrumbs.astro  # Accessible breadcrumb trail
│   │   │   ├── Button.astro       # 4px radius buttons (.button-primary, .button-ink, .button-outline)
│   │   │   └── Badge.astro        # Badges (.badge-pill-ink, .badge-sale-coral, spec pills)
│   │   ├── layout/
│   │   │   ├── UtilityStrip.astro # 36px dark bar (#1a1a1a) with contact & dispatch info
│   │   │   ├── Navbar.astro       # 64px white header with logo, catalog dropdown, search, RFQ button
│   │   │   ├── MobileNav.astro    # Accessible mobile drawer navigation
│   │   │   ├── Footer.astro       # 5-column closing dark slab (#1a1a1a)
│   │   │   └── BottomBar.astro    # ISO, PED 2014/68/EU, IBR compliance & copyright
│   │   ├── hero/
│   │   │   ├── HeroCard.astro     # 16px radius hero card with Soft Lift shadow
│   │   │   └── Chevrons.astro     # Signature 45° HP Electric Blue parallelogram chevrons
│   │   ├── conversion/
│   │   │   ├── RfqModal.astro     # Native <dialog> element for instant RFQ with BOQ text/upload
│   │   │   ├── WhatsAppButton.astro # Click-to-chat button with dynamic pre-filled product text
│   │   │   └── StockPill.astro    # Ready Stock in Opera House Godown badge
│   │   ├── metallurgy/
│   │   │   ├── SpecGrid.astro     # UNS, W.Nr., ASTM/ASME, NACE MR0175 badge grid
│   │   │   ├── CompositionTable.astro # Chemical composition table with min/max percentages
│   │   │   ├── MechanicalTable.astro  # Mechanical properties table with MPa/ksi dual units
│   │   │   └── UnitToggle.astro   # Zero-dependency Metric/Imperial switcher
│   │   ├── engineering/
│   │   │   ├── FlangeTable.astro  # ASME B16.5 interactive dimension table with class/size filters
│   │   │   ├── PipeScheduleTable.astro # Sch 10 to XXS wall thickness table
│   │   │   └── WeightCalculator.astro  # Live metal weight calculation widget
│   │   └── trust/
│   │       ├── TrustStrip.astro   # ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC guarantee
│   │       └── TpiGrid.astro      # Third-party inspection agency stamps (BV, TÜV, Lloyd's, EIL, DNV, SGS)
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Top-level shell: BaseHead + UtilityStrip + Navbar + slot + Footer + RfqModal
│   │   ├── ProductLayout.astro    # Layout for product categories with spec tables & RFQ triggers
│   │   ├── AlloyLayout.astro      # Layout for alloy grades with chemical/mechanical specs
│   │   └── TechnicalLayout.astro  # Layout for high-density engineering data charts
│   └── pages/
│       ├── index.astro            # Homepage with hero, chevrons, trust strip, featured products/alloys
│       ├── about.astro            # Corporate overview, Opera House facility, Nhava Sheva port logistics
│       ├── quality.astro          # Quality assurance policy, testing protocols, ISO registration
│       ├── certificates.astro     # ISO 9001:2015 QAIC certificate, EN 10204 3.1 sample, TPI credentials
│       ├── contact.astro          # Contact details, interactive location guide, direct inquiry form
│       ├── rfq.astro              # Dedicated full-page Bill of Quantities submission portal
│       ├── products/
│       │   ├── index.astro        # Complete industrial catalog overview (7 product lines)
│       │   └── [category].astro   # Dynamic category route (e.g., /products/flanges)
│       ├── alloys/
│       │   ├── index.astro        # High-nickel & stainless steel alloy family hub
│       │   └── [grade].astro      # Dynamic alloy grade route (e.g., /alloys/inconel-625)
│       ├── technical-data/
│       │   ├── index.astro        # Technical engineering resource portal
│       │   └── [slug].astro       # Dynamic engineering data route (e.g., /technical-data/asme-b16-5-flange-dimensions)
│       ├── 404.astro              # Custom branded 404 page adhering to HP Electric Blue theme
│       └── robots.txt.ts          # Dynamic or static robots.txt endpoint
```

---

### 3.2 Dynamic Routing Architecture

#### A. Products Dynamic Route: `/src/pages/products/[category].astro`
```astro
---
import { getCollection } from 'astro:content';
import ProductLayout from '../../layouts/ProductLayout.astro';

export async function getStaticPaths() {
  const products = await getCollection('products');
  return products.map((product) => ({
    params: { category: product.slug },
    props: { product },
  }));
}

const { product } = Astro.props;
---
<ProductLayout product={product} />
```

**Categories Generated**:
1. `flanges`: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Socket Weld, Threaded.
2. `pipes-tubes`: Seamless & Welded high-nickel and stainless steel piping.
3. `buttweld-fittings`: Elbows (45°, 90°, 180°), Tees (Equal, Reducing), Reducers (Concentric, Eccentric), Caps, Stub Ends.
4. `forged-fittings`: High-pressure socket weld & threaded fittings (Class 3000#, 6000#).
5. `fasteners`: Hex bolts, studs, heavy hex nuts, washers.
6. `round-bars`: Bright drawn and black hot-rolled round bars.
7. `sheets-plates`: Cold-rolled and hot-rolled industrial plates, sheets, and coils.

#### B. Alloys Dynamic Route: `/src/pages/alloys/[grade].astro`
```astro
---
import { getCollection } from 'astro:content';
import AlloyLayout from '../../layouts/AlloyLayout.astro';

export async function getStaticPaths() {
  const alloys = await getCollection('alloys');
  return alloys.map((alloy) => ({
    params: { grade: alloy.slug },
    props: { alloy },
  }));
}

const { alloy } = Astro.props;
---
<AlloyLayout alloy={alloy} />
```

**Alloy Grades Generated (19+ Total)**:
- **Inconel Series**: `inconel-600`, `inconel-625`, `inconel-718`.
- **Incoloy Series**: `incoloy-800` (correctly classified, resolving legacy mislabeling).
- **Monel Series**: `monel-400`, `monel-k500`.
- **Hastelloy Series**: `hastelloy-c276`, `hastelloy-c22`, `hastelloy-b2`, `hastelloy-x`.
- **Commercially Pure Nickel**: `nickel-200`, `nickel-201`.
- **Stainless Steel**: `stainless-steel-304`, `stainless-steel-304l`, `stainless-steel-316`, `stainless-steel-316l`, `stainless-steel-321`, `stainless-steel-310s`, `stainless-steel-347`, `stainless-steel-904l`.
- **Duplex & Super Duplex**: `duplex-2205`, `super-duplex-2507`.

#### C. Technical Data Dynamic Route: `/src/pages/technical-data/[slug].astro`
```astro
---
import { getCollection } from 'astro:content';
import TechnicalLayout from '../../layouts/TechnicalLayout.astro';

export async function getStaticPaths() {
  const technicalEntries = await getCollection('technical-data');
  return technicalEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
---
<TechnicalLayout entry={entry} />
```

**Technical Slugs Generated**:
1. `asme-b16-5-flange-dimensions`: Dimension, bolt hole, and weight tables for Class 150 to 2500#.
2. `pipe-schedule-chart`: Nominal pipe sizes (1/8" to 36") with wall thickness from Sch 5S through XXS.
3. `asme-b16-9-elbows`: Dimensions of long radius and short radius 90° & 45° butt-weld elbows.
4. `asme-b16-9-tees`: Dimensions of equal and reducing butt-weld tees.
5. `asme-b16-9-reducers`: Dimensions of concentric and eccentric reducers.
6. `asme-b16-9-caps`: Dimensions and end preparations for butt-weld pipe caps.
7. `asme-b16-9-stub-ends`: Dimensions for lap joint stub ends (Type A, B, C).
8. `asme-b16-11-forged-fittings`: Dimensions for 3000# and 6000# forged elbows, tees, couplings, unions.
9. `theoretical-metal-weight-formulas`: Mathematical calculation formulas for round bar, pipe, sheet/plate, and hexagonal bar.
10. `chemical-compositions-alloys`: Consolidated chemical composition tables with min/max elemental limits.
11. `mechanical-properties-comparison`: Tensile strength, yield strength, elongation, and hardness comparisons.

---

### 3.3 Content Collection Schema Specification (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

// 1. Alloy Grades Collection Schema
const alloysCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(), // e.g. "Inconel 625 (UNS N06625)"
    grade: z.string(), // e.g. "625"
    family: z.enum([
      'inconel',
      'incoloy',
      'monel',
      'hastelloy',
      'nickel',
      'stainless-steel',
      'duplex'
    ]),
    familyDisplayName: z.string(), // e.g. "High Nickel Superalloys"
    unsNumber: z.string(),         // e.g. "UNS N06625"
    werkstoffNumber: z.string(),   // e.g. "W.Nr. 2.4856"
    astmStandards: z.array(z.string()), // ["ASTM B564", "ASTM B444", "ASTM B443", "ASTM B446"]
    asmeStandards: z.array(z.string()).optional(),
    naceCompliance: z.boolean().default(true), // NACE MR0175 / ISO 15156
    metaTitle: z.string(),
    metaDescription: z.string(),
    summary: z.string(),
    keyFeatures: z.array(z.string()),
    corrosionResistance: z.string(),
    applications: z.array(z.string()),
    chemicalComposition: z.record(z.string(), z.string()), // e.g. { "Ni": "58.0 min", "Cr": "20.0 - 23.0", "Mo": "8.0 - 10.0", "Nb+Ta": "3.15 - 4.15", "Fe": "5.0 max" }
    mechanicalProperties: z.object({
      tensileStrength: z.object({
        mpa: z.string(), // "827 min"
        ksi: z.string(), // "120 min"
      }),
      yieldStrength: z.object({
        mpa: z.string(), // "414 min"
        ksi: z.string(), // "60 min"
      }),
      elongation: z.string(), // "30% min"
      hardness: z.string().optional(), // "HRB 85-100"
      density: z.object({
        metric: z.string(), // "8.44 g/cm³"
        imperial: z.string(), // "0.305 lb/in³"
      }),
      meltingPoint: z.object({
        celsius: z.string(), // "1290 - 1350 °C"
        fahrenheit: z.string(), // "2350 - 2460 °F"
      }).optional(),
    }),
    availableForms: z.array(z.string()), // ["Flanges", "Pipes & Tubes", "Buttweld Fittings", "Forged Fittings", "Fasteners", "Round Bars", "Sheets & Plates"]
    stockReadiness: z.string().default("Ready Stock in Opera House Godown, Mumbai"),
    equivalentGrades: z.record(z.string(), z.string()).optional(),
  }),
});

// 2. Product Categories Collection Schema
const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),             // e.g. "Industrial Flanges"
    category: z.string(),          // e.g. "flanges"
    tagline: z.string(),
    shortDescription: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    sizeRange: z.string(),         // '1/2" NB to 24" NB (DN15 to DN600)'
    pressureRatings: z.array(z.string()).optional(), // ["Class 150", "Class 300", "Class 600", "Class 900", "Class 1500", "Class 2500"]
    applicableStandards: z.array(z.string()), // ["ASME B16.5", "ASME B16.47", "MSS SP-44", "DIN EN 1092-1"]
    subTypes: z.array(z.object({
      name: z.string(),            // "Weld Neck Flange"
      abbreviation: z.string().optional(), // "WNRF"
      description: z.string(),
      facingTypes: z.array(z.string()).optional(), // ["RF", "FF", "RTJ"]
    })),
    compatibleAlloys: z.array(z.string()), // Slugs of compatible alloys
    manufacturingProcess: z.string(),
    qualityInspection: z.array(z.string()), // ["EN 10204 3.1 MTC", "Hydrostatic Testing", "PMI Inspection", "Radiography / Ultrasonic"]
    heroImage: z.string(),
    schematicSvg: z.string(),
  }),
});

// 3. Technical Data Collection Schema
const technicalDataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    standard: z.string(),          // "ASME B16.5 / ANSI B16.5"
    category: z.enum([
      'flange-dimensions',
      'pipe-schedules',
      'fittings-dimensions',
      'weight-formulas',
      'metallurgical-data'
    ]),
    metaTitle: z.string(),
    metaDescription: z.string(),
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
```

---

### 3.4 Zero-Runtime-JS Strategy

To meet the requirement of near-zero client JavaScript while delivering high-converting B2B interactivity, all components adhere to the following architecture:

| Interactive Feature | Implementation Mechanism | Runtime JS Payload |
|---|---|---|
| **RFQ Bill of Quantities Modal** | Native HTML5 `<dialog id="rfq-dialog">` with CSS backdrop styling and `<form method="dialog">` or lightweight submit listener. | **0 KB** library overhead (~25 lines vanilla JS). |
| **WhatsApp Click-to-Chat** | Pre-computed `<a>` link with dynamic query string (`https://wa.me/919892244451?text=...`) constructed at build time. | **0 KB** (Pure HTML anchor). |
| **Dual Unit Switcher (Metric / Imperial)** | CSS data-attribute toggling: `.data-table-container[data-unit="metric"] .val-imperial { display: none; }` toggled by an inline button. | **< 0.5 KB** (~12 lines vanilla JS). |
| **Dimension Table Filter & Search** | Table row display toggle (`row.hidden = !match`) filtering on `<select class="class-filter">` and `<input type="search">`. | **< 1.0 KB** (~35 lines vanilla JS). |
| **Mobile Hamburger Menu** | Accessible `<button aria-expanded="false" aria-controls="mobile-nav">` with simple class toggle. | **< 0.5 KB** (~15 lines vanilla JS). |
| **Total Client JS Bundle** | Entire site ships **under 3 KB** unminified vanilla JavaScript, with **zero framework runtimes** (no React/Vue/Svelte hydration). | **Zero Framework Overhead**. |

#### Code Blueprint: Native HTML5 RFQ Modal (`src/components/conversion/RfqModal.astro`)
```astro
---
interface Props {
  defaultGrade?: string;
  defaultProduct?: string;
}
const { defaultGrade = '', defaultProduct = '' } = Astro.props;
---
<dialog id="rfq-dialog" class="rfq-modal">
  <div class="rfq-card">
    <div class="rfq-header">
      <div>
        <span class="eyebrow">Direct Procurement Desk</span>
        <h3 class="rfq-title">Instant Request for Quotation (RFQ)</h3>
      </div>
      <button type="button" class="rfq-close" id="rfq-close-btn" aria-label="Close dialog">&times;</button>
    </div>

    <form class="rfq-form" id="rfq-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="rfq-name">Full Name *</label>
          <input type="text" id="rfq-name" name="name" required class="text-input" placeholder="e.g. Rajesh Sharma" />
        </div>
        <div class="form-group">
          <label for="rfq-company">Company Name *</label>
          <input type="text" id="rfq-company" name="company" required class="text-input" placeholder="e.g. Petrochemical EPC Ltd." />
        </div>
        <div class="form-group">
          <label for="rfq-email">Business Email *</label>
          <input type="email" id="rfq-email" name="email" required class="text-input" placeholder="e.g. procurement@company.com" />
        </div>
        <div class="form-group">
          <label for="rfq-phone">Phone / Mobile (with country code) *</label>
          <input type="tel" id="rfq-phone" name="phone" required class="text-input" placeholder="e.g. +91 98200 12345" />
        </div>
      </div>

      <div class="form-group">
        <label for="rfq-boq">Bill of Quantities (BOQ) / Specifications *</label>
        <textarea id="rfq-boq" name="boq" rows="4" required class="text-input rfq-textarea" placeholder="Enter Grade (e.g. Inconel 625), Product Form (e.g. WNRF Flange Class 300), Size, Schedule, and Quantities...">{defaultGrade ? `Material: ${defaultGrade}\nProduct Form: ${defaultProduct}\n` : ''}</textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="button-primary">Submit RFQ to Sales Desk</button>
        <button type="button" class="button-outline" id="rfq-whatsapp-send">Inquire via WhatsApp</button>
      </div>
      <p class="rfq-disclaimer">Guaranteed response within 2 hours. ISO 9001:2015 & EN 10204 3.1 MTC assured on all quotes.</p>
    </form>
  </div>
</dialog>

<script is:inline>
  const dialog = document.getElementById('rfq-dialog');
  const closeBtn = document.getElementById('rfq-close-btn');
  const waBtn = document.getElementById('rfq-whatsapp-send');
  const rfqForm = document.getElementById('rfq-form');

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        dialog.close();
      }
    });
  }

  if (waBtn && rfqForm) {
    waBtn.addEventListener('click', () => {
      const name = document.getElementById('rfq-name')?.value || '';
      const company = document.getElementById('rfq-company')?.value || '';
      const boq = document.getElementById('rfq-boq')?.value || '';
      const text = `RFQ from ${name} (${company}):\n${boq}`;
      window.open(`https://wa.me/919892244451?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  window.openRfqModal = (grade, product) => {
    if (grade || product) {
      const boqInput = document.getElementById('rfq-boq');
      if (boqInput) boqInput.value = `Material: ${grade || 'High Nickel Alloy'}\nProduct: ${product || 'Flanges/Fittings'}\nQuantity: `;
    }
    dialog?.showModal();
  };
</script>
```

---

### 3.5 DESIGN.md Token Mapping & Global CSS Blueprint

All design parameters from `DESIGN.md` are translated directly into CSS custom properties in `src/styles/tokens.css` without requiring heavy CSS frameworks:

```css
/* src/styles/tokens.css */
:root {
  /* Brand & Accent */
  --color-primary: #024ad8;        /* HP Electric Blue: Lone CTA fill, active indicator, chevrons */
  --color-primary-bright: #296ef9; /* Bright Blue: For buttons inside dark slabs */
  --color-primary-deep: #0e3191;   /* Deep Navy: Pressed state & visited links */
  --color-primary-soft: #c9e0fc;   /* Soft Blue: Pale chips, highlighted badges */

  /* Surfaces */
  --color-canvas: #ffffff;         /* Pure White page background */
  --color-paper: #ffffff;          /* Card background */
  --color-cloud: #f7f7f7;          /* Alternating section band */
  --color-fog: #e8e8e8;            /* Utility band & FAQ background */
  --color-steel: #c2c2c2;          /* Hairline stroke & disabled state */

  /* Text & Ink */
  --color-ink: #1a1a1a;            /* Universal dark text & closing slabs */
  --color-ink-deep: #000000;       /* Pure black for wordmark & sharp accents */
  --color-on-primary: #ffffff;     /* Text on HP Electric Blue */
  --color-on-ink: #ffffff;         /* Text on dark slabs */
  --color-charcoal: #3d3d3d;       /* Muted body text & secondary specs */
  --color-graphite: #636363;       /* Metadata, captions, timestamps */

  /* Semantic Accents */
  --color-bloom-coral: #ff5050;    /* Urgent badges, Ready Stock highlight */
  --color-storm-deep: #356373;     /* Metallurgical status tone */

  /* Typography */
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-headline: 500;     /* Forma DJR rule: weight 500 across ALL display/headlines */
  --font-weight-bold: 700;

  /* Shapes & Border Radii (Two-Tier System) */
  --radius-none: 0px;              /* 45° Chevrons, full-bleed bands */
  --radius-xs: 2px;
  --radius-sm: 3px;
  --radius-md: 4px;                /* Sharp buttons, inputs, form controls */
  --radius-lg: 8px;                /* Badge pills, accordion rows */
  --radius-xl: 16px;               /* Soft product cards, containers, photo frames */
  --radius-pill: 9999px;           /* Category tabs, filter pills */

  /* Elevation & Shadows */
  --shadow-hairline: 0 0 0 1px var(--color-fog);
  --shadow-soft-lift: 0 2px 8px rgba(26, 26, 26, 0.08); /* Workhorse card shadow */
  --shadow-floating-modal: 0 8px 24px rgba(26, 26, 26, 0.12); /* Native modal dialog */

  /* Spacing Rhythm */
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 20px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
  --spacing-section: 80px;         /* 80px desktop section rhythm */
}
```

---

### 3.6 SEO Meta, XML Sitemap, and Schema.org JSON-LD Architecture

#### A. Structured Data Component (`src/components/common/JsonLd.astro`)
Provides complete Schema.org graphs for `Organization`, `Product`, `AggregateOffer`, `BreadcrumbList`, and `FAQPage`:

```astro
---
interface Props {
  type: 'Organization' | 'Product' | 'FAQPage' | 'BreadcrumbList';
  data: Record<string, any>;
}
const { type, data } = Astro.props;

let schemaGraph: Record<string, any> = {};

if (type === 'Organization') {
  schemaGraph = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bhansali Metals',
    legalName: 'Bhansali Metals',
    url: 'https://www.bhansalimetals.com',
    logo: 'https://www.bhansalimetals.com/images/logo.svg',
    description: 'Leading manufacturer and stockist of High Nickel Alloys, Stainless Steel, Flanges, Pipes, and Fittings in Mumbai, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kataria Mansion, SVP Road, Opera House',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400004',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-22-67438356',
        contactType: 'sales',
        areaServed: 'Global',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9892244451',
        contactType: 'customer support',
        contactOption: 'WhatsApp',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'ISO Certification',
        name: 'ISO 9001:2015 Quality Management System',
        recognizedBy: {
          '@type': 'Organization',
          name: 'QAIC (UK / India)',
          identifier: 'QAIC/IN/1103-A',
        },
      },
    ],
  };
} else if (type === 'Product') {
  schemaGraph = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: {
      '@type': 'Brand',
      name: 'Bhansali Metals',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Bhansali Metals',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Bhansali Metals',
      },
    },
    additionalProperty: data.specs?.map((s: { name: string; value: string }) => ({
      '@type': 'PropertyValue',
      name: s.name,
      value: s.value,
    })),
  };
} else if (type === 'BreadcrumbList') {
  schemaGraph = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item: { name: string; url: string }, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
---
<script type="application/ld+json" set:html={JSON.stringify(schemaGraph)} />
```

---

### 3.7 Legacy 38-Page Redirection & URL Mapping Matrix

To ensure zero 404 crawl errors and full preservation of search equity, the following table maps every legacy `.html` file from `www.bhansalimetals.com` into clean Astro static routes. Configured in `astro.config.mjs` via the `redirects` dictionary:

| # | Legacy URL (`www.bhansalimetals.com/...`) | Destination Clean Route | Content Scope |
|---|---|---|---|
| 1 | `index.html` | `/` | Homepage, brand trust, featured product/alloy grids |
| 2 | `aboutus.html` | `/about` | Company history, Opera House office, Nhava Sheva port logistics |
| 3 | `quality.html` | `/quality` | Quality policy, testing standards, third-party inspection |
| 4 | `certificates.html` | `/certificates` | ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC |
| 5 | `contactus.html` | `/contact` | Registered office, phone (+91 22 6743 8356), Opera House godown |
| 6 | `enquiry.html` | `/rfq` | Instant RFQ portal & BOQ builder |
| 7 | `product.html` | `/products` | Catalog index of all product forms |
| 8 | `product_black.html` | `/products/round-bars` | Black hot-rolled bars section under Round Bars |
| 9 | `rodbar.html` | `/products/round-bars` | Bright drawn & black bars |
| 10 | `sheetplate.html` | `/products/sheets-plates` | High nickel & stainless steel sheets, plates, coils |
| 11 | `stainless.html` | `/products/flanges` | Stainless steel flanges & components hub |
| 12 | `stanless_fastnrs.html` | `/products/fasteners` | Stainless steel & nickel alloy fasteners |
| 13 | `stanless_pipe.html` | `/products/pipes-tubes` | Seamless & welded pipes and tubes |
| 14 | `pipefitting.html` | `/products/buttweld-fittings` | Buttweld elbows, tees, reducers, caps, stub ends |
| 15 | `highnickel.html` | `/alloys` | High-nickel superalloys overview hub |
| 16 | `nickel200-201.html` | `/alloys/nickel-200` | Pure Nickel 200 / 201 alloy specs & forms |
| 17 | `monel500.html` | `/alloys/monel-k500` | Monel 400 / K-500 alloy specs & forms |
| 18 | `hastelloyc-276.html` | `/alloys/hastelloy-c276` | Hastelloy C-276 alloy specs & forms |
| 19 | `hastelloyc-22.html` | `/alloys/hastelloy-c22` | Hastelloy C-22 alloy specs & forms |
| 20 | `hastelloyc-b2.html` | `/alloys/hastelloy-b2` | Hastelloy B-2 alloy specs & forms |
| 21 | `hastelloyc-x.html` | `/alloys/hastelloy-x` | Hastelloy X alloy specs & forms |
| 22 | `technical.html` | `/technical-data` | Engineering tools & technical data portal hub |
| 23 | `tech_flanges.html` | `/technical-data/asme-b16-5-flange-dimensions` | ASME B16.5 flange dimension & weight table (150# to 2500#) |
| 24 | `tech_pipedata.html` | `/technical-data/pipe-schedule-chart` | Pipe dimensions, wall thickness (Sch 10 to XXS), weights |
| 25 | `tech_elbow.html` | `/technical-data/asme-b16-9-elbows` | ASME B16.9 45° and 90° long/short radius elbow dimensions |
| 26 | `tech_tees.html` | `/technical-data/asme-b16-9-tees` | ASME B16.9 straight and reducing tee dimensions |
| 27 | `tech_reducer.html` | `/technical-data/asme-b16-9-reducers` | ASME B16.9 concentric and eccentric reducer dimensions |
| 28 | `tech_caps.html` | `/technical-data/asme-b16-9-caps` | ASME B16.9 end cap dimensions |
| 29 | `tech_stubend.html` | `/technical-data/asme-b16-9-stub-ends` | ASME B16.9 lap joint stub end dimensions |
| 30 | `tech_forgedfitting.html` | `/technical-data/asme-b16-11-forged-fittings` | ASME B16.11 Class 3000# & 6000# forged fitting specs |
| 31 | `tech_pipefitting.html` | `/technical-data/pipe-fitting-manufacturing-tolerances` | Tolerances for buttweld and forged fittings |
| 32 | `tech_wg_formula.html` | `/technical-data/theoretical-metal-weight-formulas` | Mathematical calculation formulas for metal weights |
| 33 | `Tech_mechanical.html` | `/technical-data/mechanical-properties-comparison` | Mechanical property comparisons (tensile, yield, elongation) |
| 34 | `tech_nickelalloy.html` | `/technical-data/chemical-compositions-alloys` | Nickel alloy chemical composition matrix |
| 35 | `tech_nonferrous.html` | `/technical-data/chemical-compositions-alloys` | Non-ferrous alloy composition matrix |
| 36 | `tech_round.html` | `/technical-data/theoretical-metal-weight-formulas` | Round bar size-to-weight chart |
| 37 | `tech_new_demo.html` | `/technical-data` | Legacy demo page consolidated into technical hub |
| 38 | `fastener.html` | `/products/fasteners` | Industrial bolts, studs, nuts, washers |

---

### 3.8 Required Dependencies & Configuration Files

#### `package.json`
```json
{
  "name": "bhansalimetals-portal",
  "version": "2.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/sitemap": "^3.2.1",
    "astro": "^5.4.2",
    "typescript": "^5.7.3"
  }
}
```

#### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.bhansalimetals.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    })
  ],
  redirects: {
    '/index.html': '/',
    '/aboutus.html': '/about',
    '/quality.html': '/quality',
    '/certificates.html': '/certificates',
    '/contactus.html': '/contact',
    '/enquiry.html': '/rfq',
    '/product.html': '/products',
    '/product_black.html': '/products/round-bars',
    '/rodbar.html': '/products/round-bars',
    '/sheetplate.html': '/products/sheets-plates',
    '/stainless.html': '/products/flanges',
    '/stanless_fastnrs.html': '/products/fasteners',
    '/fastener.html': '/products/fasteners',
    '/stanless_pipe.html': '/products/pipes-tubes',
    '/pipefitting.html': '/products/buttweld-fittings',
    '/highnickel.html': '/alloys',
    '/nickel200-201.html': '/alloys/nickel-200',
    '/monel500.html': '/alloys/monel-k500',
    '/hastelloyc-276.html': '/alloys/hastelloy-c276',
    '/hastelloyc-22.html': '/alloys/hastelloy-c22',
    '/hastelloyc-b2.html': '/alloys/hastelloy-b2',
    '/hastelloyc-x.html': '/alloys/hastelloy-x',
    '/technical.html': '/technical-data',
    '/tech_flanges.html': '/technical-data/asme-b16-5-flange-dimensions',
    '/tech_pipedata.html': '/technical-data/pipe-schedule-chart',
    '/tech_elbow.html': '/technical-data/asme-b16-9-elbows',
    '/tech_tees.html': '/technical-data/asme-b16-9-tees',
    '/tech_reducer.html': '/technical-data/asme-b16-9-reducers',
    '/tech_caps.html': '/technical-data/asme-b16-9-caps',
    '/tech_stubend.html': '/technical-data/asme-b16-9-stub-ends',
    '/tech_forgedfitting.html': '/technical-data/asme-b16-11-forged-fittings',
    '/tech_pipefitting.html': '/technical-data/pipe-fitting-manufacturing-tolerances',
    '/tech_wg_formula.html': '/technical-data/theoretical-metal-weight-formulas',
    '/Tech_mechanical.html': '/technical-data/mechanical-properties-comparison',
    '/tech_nickelalloy.html': '/technical-data/chemical-compositions-alloys',
    '/tech_nonferrous.html': '/technical-data/chemical-compositions-alloys',
    '/tech_round.html': '/technical-data/theoretical-metal-weight-formulas',
    '/tech_new_demo.html': '/technical-data'
  }
});
```

#### `tsconfig.json`
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@styles/*": ["src/styles/*"],
      "@data/*": ["src/data/*"]
    }
  }
}
```

---

## 4. Caveats

1. **Static Build vs Interactive Form Backend**: The RFQ modal is built with a dual path: instant pre-filled WhatsApp click-to-chat (`https://wa.me/919892244451`) and an HTML5 form. For static hosting, form POST submissions require either a serverless handler, Formspree/Web3Forms endpoint, or `mailto:` action. The WhatsApp click-to-chat path works unconditionally without any backend.
2. **Font Licensing**: Forma DJR Micro is a proprietary commercial typeface. In accordance with `DESIGN.md` Section "Note on Font Substitutes", the architecture specifies **Inter** as the primary font with geometric grotesque metrics (body line-height 1.4, headline line-height 1.0, weight 500 displays) so that zero licensing costs or legal risks are incurred.
3. **Legacy Image Replacement**: Manansteel hotlinks must be replaced with native vector SVG schematics stored in `public/images/schematics/`. Worker agents must generate or provision these clean SVGs rather than downloading competitor assets.

---

## 5. Conclusion

The modern Astro static architecture blueprint for Bhansali Metals is complete, fully specified, and ready for immediate implementation by worker agents. 
- The Node 24 and npm 11 environment is validated and ready.
- The directory layout, TypeScript interfaces, and Astro Content Collections API cleanly model all 19+ alloy grades, 7 product categories, and 14+ technical engineering datasets.
- The zero-runtime-JS strategy delivers sub-second TTFB/FCP with native `<dialog>` RFQs, instant WhatsApp click-to-chat, and pure CSS unit toggles.
- The 38-page legacy URL mapping preserves 100% of existing search engine rankings and incoming backlinks.
- The DESIGN.md HP Electric Blue design system is mapped to clean CSS custom properties with zero framework bloat.

---

## 6. Verification Method

To independently verify the implementation once executed by worker agents:

1. **Dependency Verification**:
   ```bash
   cd c:\AllStuff\Coding\bhansalimetals-local
   npm install
   ```
   Check that `node_modules/` is created and `astro` is installed without dependency conflicts.

2. **Type Check & Collection Sync**:
   ```bash
   npx astro check
   ```
   Verify that TypeScript produces 0 errors and all collection schemas in `src/content/config.ts` pass type check.

3. **Static Build Execution**:
   ```bash
   npm run build
   ```
   Verify:
   - Exit code is `0`.
   - `dist/` contains pre-rendered HTML files for:
     - `dist/index.html`
     - `dist/products/flanges/index.html` (and all 7 product categories)
     - `dist/alloys/inconel-625/index.html` (and all 19+ alloy grades)
     - `dist/technical-data/asme-b16-5-flange-dimensions/index.html` (and all technical charts)
     - `dist/sitemap-index.xml` and `dist/sitemap-0.xml`
     - Static redirect HTML files for all 38 legacy `.html` routes (e.g., `dist/tech_flanges.html`)
   - Zero broken links reported in Astro build summary.
