# Task Dispatch: Milestone 1 Implementation Worker

## Identity
- Role: Milestone 1 Implementation Worker
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Implement Milestone 1: Astro Static Foundation & Design System Engine according to `PROJECT.md`, `DESIGN.md`, and the blueprints from `explorer_survey_2` and `explorer_survey_3`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`
4. `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md` (Architecture blueprint)
5. `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\handoff.md` (Design tokens & components blueprint)

## Write Ownership Boundaries
You exclusively own:
- `package.json`, `astro.config.mjs`, `tsconfig.json`
- `src/styles/*` (`tokens.css`, `global.css`, `tables.css`)
- `src/components/common/*` (`BaseHead.astro`, `Button.astro`, `Badge.astro`)
- `src/components/hero/*` (`HeroChevrons.astro`)
- `src/components/layout/*` (`UtilityStrip.astro`, `Navbar.astro`, `MobileNav.astro`, `Footer.astro`, `BottomBar.astro`)
- `src/components/trust/*` (`TrustStrip.astro`, `TpiGrid.astro`)
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `public/*` (favicons, SVG brand mark, certification badges in `public/images/badges/`)

## Detailed Implementation Tasks
1. **Initialize Project Environment**:
   - Create `package.json` with dependencies: `astro` (^5.0.0), `@astrojs/sitemap`, `@astrojs/check`, `typescript`.
   - Create `tsconfig.json` with strict mode and Astro types.
   - Create `astro.config.mjs` with `site: 'https://www.bhansalimetals.com'`, `output: 'static'`, and sitemap integration.
   - Run `npm install` to install all packages.
2. **Implement CSS Design Tokens & Styles**:
   - `src/styles/tokens.css`: Exactly implement all DESIGN.md tokens: HP Electric Blue `#024ad8`, Bright Blue `#296ef9`, Deep Navy `#0e3191`, Soft Blue `#c9e0fc`, Canvas `#ffffff`, Cloud `#f7f7f7`, Fog `#e8e8e8`, Steel `#c2c2c2`, Ink `#1a1a1a`, On Ink `#ffffff`, Charcoal `#3d3d3d`, Graphite `#636363`, Bloom Coral `#ff5050`, Storm Deep `#356373`.
   - `src/styles/global.css`: Forma DJR Micro / Inter fallback; weight 500 for displays with line-height 1.0; weight 400 for body with line-height 1.4; uppercase buttons with weight 600 and 0.7px letter spacing; 2-tier corner radii (sharp 4px buttons/inputs, soft 16px cards); Soft Lift shadows (`0 2px 8px rgba(26,26,26,0.08)`).
   - `src/styles/tables.css`: Sticky table headers, borders `#e8e8e8`, monospace font for numerical data.
3. **Implement Atomic & Layout Components**:
   - `src/components/common/BaseHead.astro`: Meta charset, viewport, SEO title/description, Inter web font preloading, canonical URL.
   - `src/components/common/Button.astro`: Sharp 4px radius buttons with variants (`primary`, `primary-bright`, `outline`, `ink`).
   - `src/components/common/Badge.astro`: Badge pills (`ink`, `outline`, `coral`, `soft-blue`).
   - `src/components/hero/HeroChevrons.astro`: Signature 45° HP Electric Blue parallelograms flanking the hero card on desktop, scaling on tablet, collapsing on mobile (<768px).
   - `src/components/layout/UtilityStrip.astro`: 36px `#1a1a1a` bar with Mumbai phone (+91 22 6743 8356), sales WhatsApp (+91 9892244451), email (`sales@bhansalimetals.com`), and Kalamboli yard dispatch.
   - `src/components/layout/Navbar.astro`: 64px white header with brand logo, catalog dropdown links, search pill input, and RFQ CTA button.
   - `src/components/layout/MobileNav.astro`: Accessible slide-over sheet for mobile viewports.
   - `src/components/layout/Footer.astro`: Comprehensive 5-column closing dark slab (#1a1a1a):
     - Col 1: Brand & Trust, 31 Kataria Mansion Mumbai office, Kalamboli godown, ISO details.
     - Col 2: High Nickel Alloys deep links.
     - Col 3: Stainless Steel & Product Lines deep links.
     - Col 4: Engineering Resources links.
     - Col 5: Global Logistics, contact phones, JNPT port dispatch.
   - `src/components/layout/BottomBar.astro`: ISO 9001:2015, PED 2014/68/EU, IBR 1950, copyright, and XML sitemap link.
   - `src/components/trust/TrustStrip.astro`: Showcasing ISO 9001:2015 QAIC/IN/1103-A and EN 10204 3.1 MTC guarantee.
   - `src/components/trust/TpiGrid.astro`: Clean SVG badges for the 6 inspection agencies: Bureau Veritas, TÜV India, Lloyd's Register, Engineers India Limited (EIL), DNV, SGS.
4. **Create Vector Assets**:
   - `public/images/logo.svg` (Bhansali Metals brand mark)
   - `public/favicon.svg`
   - `public/images/badges/` (Clean SVG badges for ISO 9001, BV, TÜV, Lloyd's, EIL, DNV, SGS)
5. **Implement BaseLayout & Homepage**:
   - `src/layouts/BaseLayout.astro`: Shell containing BaseHead, UtilityStrip, Navbar, slot, Footer, BottomBar.
   - `src/pages/index.astro`: Section rhythm: Utility strip -> Navbar -> Hero with 45° chevrons and dual CTAs -> Cloud band (featured alloys & products with Soft Lift cards) -> Fog band (quality testing & manufacturing capacity) -> Trust strip -> Ink closing slab ("Request Instant Technical Consultation") -> 5-column footer.
6. **Build & Verify**:
   - Run `npm run build` and ensure exit code 0.
   - Verify that `dist/index.html` is generated cleanly with valid static HTML and CSS.


## 2026-09-10T16:50:06Z
You are worker_m1.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md and c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md first.
Review blueprints in c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md and c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\handoff.md.

Implement Milestone 1:
- package.json, astro.config.mjs, tsconfig.json, install packages.
- src/styles/ (tokens.css, global.css, tables.css) adhering strictly to DESIGN.md colors, typography, 2-tier radius, and Soft Lift shadows.
- src/components/ (BaseHead, Button, Badge, HeroChevrons with 45° chevrons, UtilityStrip, Navbar, MobileNav, Footer 5-column dark slab, BottomBar, TrustStrip, TpiGrid).
- public/ (logo.svg, favicon.svg, badges for ISO and 6 TPI agencies: BV, TÜV, Lloyd's, EIL, DNV, SGS).
- src/layouts/BaseLayout.astro and src/pages/index.astro.
- Run `npm run build` and ensure exit code 0.
Write your completion handoff report to c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1\handoff.md and report back via send_message.

## 2026-09-10T16:59:17Z
**Context**: astro.config.mjs build configuration
**Content**: Please ensure `'/index.html': '/'` is omitted from the `redirects` object in `astro.config.mjs`. Since `/` automatically generates `dist/index.html`, having a redirect for `/index.html` creates an `EEXIST: file already exists` collision during Astro static generation. All other legacy redirects (e.g. `/aboutus.html`, `/pipefitting.html`) should remain.
**Action**: Apply this in your astro.config.mjs, verify with `npm run build`, and complete your milestone handoff.


