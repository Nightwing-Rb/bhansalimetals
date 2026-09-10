# Task Dispatch: Sub-orchestrator Milestone 1 (M1)

## Identity
- Role: Sub-orchestrator: Milestone 1
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\sub_orch_m1
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Execute Milestone 1: Astro Static Foundation & Design System Engine according to `PROJECT.md` and `DESIGN.md`.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`
4. `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md`
5. `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\handoff.md`

## Milestone 1 Scope
1. Initialize package environment: `package.json`, `astro.config.mjs` (static output, sitemap integration, legacy redirects), `tsconfig.json`, install dependencies (`astro`, `@astrojs/sitemap`, `@astrojs/check`, `typescript`).
2. Implement DESIGN.md Tokens & Global CSS:
   - `src/styles/tokens.css` (HP Electric Blue #024ad8, Bright Blue #296ef9, Deep Navy #0e3191, Soft Blue #c9e0fc, Canvas #ffffff, Cloud #f7f7f7, Fog #e8e8e8, Steel #c2c2c2, Ink #1a1a1a, etc.)
   - `src/styles/global.css` (Forma DJR Micro / Inter fallback, weight 500 displays line-height 1.0, weight 400 body line-height 1.4, weight 600 uppercase buttons 0.7px tracking, 2-tier radii 4px sharp / 16px soft, Soft Lift shadows)
   - `src/styles/tables.css` (High-density industrial tables, sticky headers)
3. Implement Shell & Layout Components:
   - `src/components/common/BaseHead.astro`
   - `src/components/common/Button.astro` (4px radius buttons)
   - `src/components/common/Badge.astro`
   - `src/components/hero/HeroChevrons.astro` (45° blue chevrons)
   - `src/components/layout/UtilityStrip.astro` (36px #1a1a1a bar)
   - `src/components/layout/Navbar.astro` (64px white nav)
   - `src/components/layout/MobileNav.astro`
   - `src/components/layout/Footer.astro` (5-column closing dark slab)
   - `src/components/layout/BottomBar.astro` (compliance bar)
   - `src/components/trust/TrustStrip.astro` (ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC)
   - `src/components/trust/TpiGrid.astro` (BV, TÜV, Lloyd's, EIL, DNV, SGS stamps)
   - `src/layouts/BaseLayout.astro`
4. Implement Homepage Shell:
   - `src/pages/index.astro` adhering strictly to section rhythm: Utility strip -> Navbar -> Hero with 45° chevrons -> Cloud band (featured alloys/products) -> Fog band (quality & capacity) -> Trust strip -> Ink closing slab -> 5-column footer.
5. Create clean SVG assets in `public/images/` (logo.svg, badges for ISO and 6 TPI agencies, favicon.svg).
6. Verify build succeeds with `npm run build` with zero errors.

## Execution Rules
- Run your iteration loop: Explorer -> Worker -> Reviewer -> Challenger -> Forensic Auditor -> Gate.
- Worker must build and verify all files.
- Report milestone completion back to Project Orchestrator.
