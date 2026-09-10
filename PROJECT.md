# Project: Bhansali Metals Frontend Rebuild & Modernization

## Architecture
- **Framework & Engine**: Astro 5 static site generation (`output: 'static'`), sub-second load times, zero client JS runtime bloat.
- **Visual Design System**: Strict adherence to `DESIGN.md` (Signal Blue `#0f62fe` primary, on-dark tint `#78a9ff`, Ink `#161616`, Cloud `#f4f5f7`, Fog `#e4e6ea`, flat Ink-Navy `#0a1628` dark slabs, 2-tier corner radius: sharp 10px buttons/inputs, soft 20px cards, glassmorphism on nav/modal surfaces). Blue is a *fill* colour: on dark surfaces links and accents use the bright tint, and text on dark uses the explicit `--on-ink-*` ramp rather than white-at-alpha.
- **Typography**: Single-family Inter (SF Pro Display fallback; weight 600 for displays with negative tracking, weight 400 body at line-height 1.6, weight 600 sentence-case buttons). JetBrains Mono for heat numbers, grades, and UNS/W.Nr. specifications.
- **Data Engine**: Astro Content Collections (`astro:content`) with strict Zod schemas for alloys, products, and technical data.
- **Conversion Funnel**: Above-the-fold metallurgical badges (UNS, W.Nr., ASTM/ASME, NACE MR0175), live Kalamboli Yard stock readiness pill, direct WhatsApp click-to-chat (+91 9892244451) with dynamic parameters, native HTML5 `<dialog>` RFQ modal with Bill of Quantities (BOQ) text and drag-and-drop file upload.
- **Trust Strip**: ISO 9001:2015 registration (QAIC/IN/1103-A), EN 10204 3.1 MTC guarantee, vector-accurate inspection agency stamps (BV, TÜV India, Lloyd's Register, EIL, DNV, SGS).
- **Footer**: 5-column closing dark slab (#1a1a1a) with registered Mumbai Opera House office, Kalamboli godown, JNPT logistics, alloy and product deep links, and bottom compliance bar (PED 2014/68/EU, IBR 1950).
- **SEO & Search Equity**: Semantic HTML5, Schema.org JSON-LD (Organization, Product, AggregateOffer, BreadcrumbList, FAQPage), automated XML sitemap (`@astrojs/sitemap`), and 1-to-1 static redirection table preserving all 38 legacy URLs from `www.bhansalimetals.com`.

---

## Feature Inventory
Every feature from the Survey phase and authoritative requirements is mapped below to an assigned milestone:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Modern Astro Static Architecture | Astro project config, static output, package scripts, tsconfig, sub-second load | M1 | ORIGINAL_REQUEST §R1 |
| 2 | DESIGN.md Color System | CSS custom properties & utility classes for #024ad8, #296ef9, #0e3191, #ffffff, #f7f7f7, #e8e8e8, #1a1a1a | M1 | DESIGN.md §Colors |
| 3 | Single-Family Typography | Forma DJR Micro / Inter fallback, weight 500 displays (line-height 1.0), weight 400 body, weight 600 buttons | M1 | DESIGN.md §Typography |
| 4 | Two-Tier Corner Radius | Sharp 4px on buttons/inputs, soft 16px on cards/containers, 0px on chevrons | M1 | DESIGN.md §Shapes |
| 5 | Signature 45° Blue Chevrons | Sharp parallelogram chevrons flanking hero cards with responsive tablet scaling and mobile collapse | M1 | DESIGN.md §Elevation |
| 6 | Soft Lift Shadows & Cards | `0 2px 8px rgba(26,26,26,0.08)` card elevation on product and pricing tiles | M1 | DESIGN.md §Elevation |
| 7 | Section Rhythm Engine | Utility strip -> Main Nav -> Hero/body -> Cloud band -> Fog band -> Ink closing slab -> 5-col footer | M1 | DESIGN.md §Overview |
| 8 | Dark Utility Strip | 36px #1a1a1a top bar with Mumbai office phone, sales WhatsApp, email, and dispatch info | M1 | DESIGN.md §Navigation |
| 9 | Main Navigation & Mobile Drawer | 64px white header with logo, catalog dropdown, search pill, RFQ CTA, and accessible mobile sheet | M1 | DESIGN.md §Navigation |
| 10 | 5-Column Closing Ink Footer | #1a1a1a closing slab with Company, High Nickel, SS & Products, Resources, Global Logistics | M1 | ORIGINAL_REQUEST §R5 |
| 11 | Bottom Compliance Bar | ISO 9001:2015, PED 2014/68/EU, IBR 1950, copyright, and XML sitemap link | M1 | ORIGINAL_REQUEST §R5 |
| 12 | Trust Strip & Inspection Badges | Clean vector SVGs for ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC, BV, TÜV, Lloyd's, EIL, DNV, SGS | M1 | ORIGINAL_REQUEST §R4 |
| 13 | Content Collections Zod Schemas | Strict TypeScript & Zod schemas for alloys, products, and technicalData collections | M2 | ORIGINAL_REQUEST §R1 |
| 14 | High Nickel Alloys Dataset | JSON collections for Inconel (600, 625, 718), Incoloy 800, Monel (400, K-500), Hastelloy (C-276, C-22, B-2, X), Nickel (200, 201) | M2 | ORIGINAL_REQUEST §R3 |
| 15 | Stainless Steel & Duplex Dataset | JSON collections for 304, 304L, 316, 316L, 321, 310S, 347, 904L, Duplex 2205, Super Duplex 2507 | M2 | ORIGINAL_REQUEST §R3 |
| 16 | Product Forms Dataset | JSON collections for Pipes & Tubes, Flanges, Buttweld Fittings, Forged Fittings, Fasteners, Round Bars, Sheets & Plates | M2 | ORIGINAL_REQUEST §R3 |
| 17 | Purge Competitor Copy | Eliminate all scraped text ("Regal Sales Corp") in buttweld and pipe descriptions | M2 | ORIGINAL_REQUEST §R3 |
| 18 | Eliminate External Hotlinks | Replace all 8 manansteel hotlinked graphics with clean self-hosted SVGs and technical diagrams | M2 | ORIGINAL_REQUEST §R3 |
| 19 | Correct Metallurgical Mislabeling | Reclassify Inconel 600-718 as Inconel (Ni-Cr) and Incoloy 800/825 as Incoloy (Ni-Fe-Cr) | M2 | ORIGINAL_REQUEST §R3 |
| 20 | Dual-Unit Engineering Tables | Chemical composition min/max and mechanical properties tables with dual metric/imperial units (MPa/ksi, mm/inch) | M3 | ORIGINAL_REQUEST §R3 |
| 21 | Interactive ASME B16.5 Flange Table | Dimension, bolt circle, and weight table for Class 150 to 2500# with size and rating filters | M3 | ORIGINAL_REQUEST §R3 |
| 22 | Pipe Schedule Wall Thickness Chart | Engineering chart for nominal sizes 1/8" to 24"+ with wall thickness Sch 10 to XXS | M3 | ORIGINAL_REQUEST §R3 |
| 23 | Theoretical Weight Calculation Engine | 14 mathematical calculation formulas for metal weights with interactive client widget | M3 | ORIGINAL_REQUEST §R3 |
| 24 | Dynamic Technical Portal Routes | Dynamic route `/technical-data/[slug].astro` rendering all 11+ engineering reference standards | M3 | ORIGINAL_REQUEST §R1 |
| 25 | Above-the-Fold Metallurgical Badges | Component rendering UNS, W.Nr., ASTM/ASME standards, NACE MR0175, and live Kalamboli Stock Pill | M4 | ORIGINAL_REQUEST §R4 |
| 26 | Dynamic WhatsApp Click-to-Chat | Static URL generator utility and CTA linking to +91 9892244451 with dynamic pre-filled procurement details | M4 | ORIGINAL_REQUEST §R4 |
| 27 | Native HTML5 `<dialog>` RFQ Modal | Zero-bloat modal with multi-line BOQ text paste, drag-and-drop file upload, and anti-spam honeypot | M4 | ORIGINAL_REQUEST §R4 |
| 28 | Dynamic Product Category Routes | Dynamic route `/products/[category].astro` for all 7 product categories with specifications and RFQ actions | M4 | ORIGINAL_REQUEST §R1 |
| 29 | Dynamic Alloy Grade Routes | Dynamic route `/alloys/[grade].astro` for all 19+ alloy grades with chemical, mechanical, and form specs | M4 | ORIGINAL_REQUEST §R1 |
| 30 | High-Trust Company Pages | Corporate overview (`/about`), Quality Assurance (`/quality`), Certificates (`/certificates`), Contact (`/contact`), Full RFQ (`/rfq`), Branded `404` | M4 | ORIGINAL_REQUEST §R4 |
| 31 | Schema.org Structured Data | JSON-LD graphs for Organization, Product, AggregateOffer, BreadcrumbList, and FAQPage | M4 | ORIGINAL_REQUEST §R6 |
| 32 | Automated Sitemap & 38-Page Redirects | Automated XML sitemap generation and 1-to-1 static redirection table preserving all 38 legacy `.html` URLs | M4 | ORIGINAL_REQUEST §R6 |
| 33 | E2E Testing Suite (Tiers 1-4) | Opaque-box requirement-driven test suite covering all features, boundaries, combinations, and workloads | M5 | Acceptance Criteria |
| 34 | Build & Route Verification | Clean Astro static build (`npm run build`) with exit code 0 and zero broken internal routes | M5 | Acceptance Criteria |
| 35 | Adversarial Coverage Hardening | Tier 5 white-box challenger analysis and edge-case test case synthesis | M5 | Acceptance Criteria |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|--------------|--------|
| M1 | Astro Static Foundation & Design System Engine | Package environment, Astro config, DESIGN.md tokens, base layouts, typography, 2-tier radius, 45° chevrons, utility strip, navbar, mobile nav, 5-col footer, trust SVGs, homepage | none | DONE |
| M2 | Content Collections & Metallurgy Data Engine | Content collection schemas (Zod), alloy datasets (22+ grades), product datasets (7 forms), purge competitor copy, native SVG schematics replacing hotlinks, fix Inconel mislabeling | M1 | IN_PROGRESS |
| M3 | Interactive Engineering Tools & Technical Data Engine | ASME B16.5 flange table (150#-2500#), pipe schedule chart, theoretical weight formulas & calculator, chemical/mechanical tables with dual units, `/technical-data/[slug]` dynamic route | M2 | PLANNED |
| M4 | B2B Conversion Funnel & Dynamic Catalog Pages | Above-the-fold specs, WhatsApp click-to-chat (+91 9892244451), native `<dialog>` RFQ modal with BOQ, `/products/[category]`, `/alloys/[grade]`, company trust pages, Schema.org JSON-LD, 38-page redirects | M3 | PLANNED |
| M5 | Final Milestone: E2E Verification & Adversarial Hardening | Phase 1: Pass 100% of E2E test suite (Tiers 1-4). Static build validation (`npm run build`). Phase 2: Tier 5 adversarial coverage hardening. | M4 | PLANNED |

---

## Interface Contracts

### M1 ↔ M2 (Design Shell & Base Layouts ↔ Content Engine)
- **Base Layout Component**: `src/layouts/BaseLayout.astro`
  - Props: `title: string`, `description: string`, `breadcrumbs?: { name: string; url: string }[]`, `schemaType?: 'Organization' | 'Product' | 'FAQPage'`, `schemaData?: Record<string, any>`
- **CSS Design Tokens**: Defined in `src/styles/tokens.css` with CSS custom properties (`--color-primary: #024ad8;`, `--color-ink: #1a1a1a;`, `--radius-sharp: 4px;`, `--radius-soft: 16px;`, `--shadow-soft-lift: 0 2px 8px rgba(26,26,26,0.08);`).
- **UI Atomic Components**:
  - `Button.astro`: `variant?: 'primary' | 'primary-bright' | 'outline' | 'ink'`, `href?: string`, `type?: 'button' | 'submit'`
  - `Badge.astro`: `variant?: 'ink' | 'outline' | 'coral' | 'soft-blue'`, `text: string`
  - `HeroChevrons.astro`: Slot wrapper rendering 45° chevrons on desktop, collapsing on mobile.

### M2 ↔ M3 (Content Collections ↔ Engineering Tools)
- **Content Collections Location**: `src/content/config.ts`
  - Collection `alloys`: Schema exports `grade`, `family`, `unsNumber`, `werkstoffNumber`, `astmStandards`, `chemicalComposition`, `mechanicalProperties`, `availableForms`.
  - Collection `products`: Schema exports `category`, `title`, `sizeRange`, `pressureRatings`, `applicableStandards`, `subTypes`, `compatibleAlloys`.
  - Collection `technicalData`: Schema exports `title`, `standard`, `category`, `tableHeaders`, `rows`, `dualUnitAvailable`.
- **Engineering Data Format**: `rows: Array<Record<string, string | number>>` matching standardized column headers.

### M3 ↔ M4 (Engineering Tools ↔ Conversion Funnel & Dynamic Routing)
- **RFQ Modal Integration**:
  - Global trigger via `data-open-rfq` or `window.openRfqModal(grade?: string, product?: string)`.
  - Native `<dialog id="rfq-dialog-modal">` rendered once in `BaseLayout.astro`.
- **WhatsApp Dynamic URL**:
  - Utility function `generateWhatsAppUrl(payload: WhatsAppInquiryPayload): string` in `src/utils/whatsapp.ts`.
  - Encodes alloy, product form, size, quantity, destination port into WhatsApp query string for `+91 9892244451`.

### M4 ↔ M5 (Full Implementation ↔ E2E Testing Track)
- **Static Output**: `dist/` generated by `npm run build` with exit code 0.
- **Entry Points**:
  - Static URLs: `/`, `/about`, `/quality`, `/certificates`, `/contact`, `/rfq`, `/products`, `/alloys`, `/technical-data`
  - Dynamic URLs: `/products/[category]`, `/alloys/[grade]`, `/technical-data/[slug]`
  - Legacy Redirections: All 38 `.html` URLs redirect with HTTP 301 / static HTML meta refresh.

---

## Code Layout
```
c:\AllStuff\Coding\bhansalimetals-local\
├── astro.config.mjs               # Astro static config, sitemap, 38-page redirects
├── package.json                   # Project dependencies & build scripts
├── tsconfig.json                  # TypeScript configuration
├── public/                        # Static assets (favicons, SVGs, inspection stamps)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/
│   │   ├── logo.svg
│   │   ├── badges/                # Clean SVGs for ISO 9001 and 6 TPI agencies
│   │   └── schematics/            # Clean SVGs replacing manansteel hotlinks
├── src/
│   ├── content/                   # Astro Content Collections (Markdown & JSON)
│   │   ├── config.ts              # Zod collection schemas
│   │   ├── alloys/                # 22+ alloy JSON entries
│   │   ├── products/              # 7 product category JSON entries
│   │   └── technical-data/        # 11+ engineering table JSON entries
│   ├── data/                      # TypeScript constants & site metadata
│   │   ├── site.ts
│   │   └── navigation.ts
│   ├── styles/                    # HP Electric Blue CSS tokens & global styles
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── tables.css
│   ├── components/                # Reusable Astro components
│   │   ├── common/                # BaseHead, JsonLd, Breadcrumbs, Button, Badge
│   │   ├── layout/                # UtilityStrip, Navbar, MobileNav, Footer, BottomBar
│   │   ├── hero/                  # HeroCard, HeroChevrons
│   │   ├── conversion/            # RfqModal, WhatsAppButton, StockPill
│   │   ├── metallurgy/            # AboveTheFoldSpecs, CompositionTable, MechanicalTable, UnitToggle
│   │   ├── engineering/           # FlangeTable, PipeScheduleTable, WeightCalculator
│   │   └── trust/                 # TrustStrip, TpiGrid
│   ├── layouts/                   # BaseLayout, ProductLayout, AlloyLayout, TechnicalLayout
│   ├── pages/                     # Static and dynamic route templates
│   └── utils/                     # whatsapp.ts, schema.ts, calculations.ts
```
