# Task Dispatch: Astro Architecture & Technical Infrastructure Explorer

## Identity
- Role: Astro Technical Architect Explorer
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2
- Parent: Orchestrator (orchestrator_r1)

## Mission
Investigate the existing codebase environment at `c:\AllStuff\Coding\bhansalimetals-local` (Node.js, npm, package.json, Astro installation, build configurations) and architect the modern Astro static site implementation.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\package.json` (if exists) and root filesystem

## Scope & Tasks
1. Survey the current repository root:
   - Check Node and npm environment capabilities.
   - Check if an Astro project or package.json exists, or what files are present in the project root.
2. Architect the Modern Astro Static Architecture:
   - Directory layout: `src/components/`, `src/layouts/`, `src/pages/`, `src/data/` or `src/content/`.
   - Dynamic routing templates:
     - `/products/[category]`
     - `/alloys/[grade]`
     - `/technical-data/[slug]`
     - Product detail / alloy combination routes
   - Data modeling: TypeScript interfaces and JSON/Markdown content collections for alloys, products, specifications, and dimension tables.
   - Build system: static generation (`output: 'static'`), zero client JS by default, minimal vanilla TS/JS for client interactions (RFQ modal, unit toggles, filters).
   - SEO & Site generation: `@astrojs/sitemap`, meta tags, JSON-LD schema generation helper.
   - Performance: sub-second load times, inline critical CSS, zero external CDN dependencies or bloat.
3. Recommend exact project initialization and build steps, package dependencies, and file layout for workers to implement.

## Output
Write your comprehensive architectural blueprint and findings to `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md` and send a completion message to the orchestrator.
