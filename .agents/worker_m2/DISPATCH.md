# Task Dispatch: Milestone 2 Implementation Worker

## Identity
- Role: Milestone 2 Implementation Worker
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Implement Milestone 2: Content Collections & Metallurgy Data Engine according to `PROJECT.md`, `ORIGINAL_REQUEST.md`, and the survey findings in `.agents/spec_miner_survey_1/handoff.md` and `.agents/explorer_survey_2/handoff.md`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1\handoff.md` (Contains exact elemental compositions, mechanical specs, and defect locations)
4. `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md` (Contains exact Zod schemas)

## Write Ownership Boundaries
You exclusively own:
- `src/content/config.ts`
- `src/content/alloys/*` (JSON files for all 22+ alloy grades)
- `src/content/products/*` (JSON files for all 7 product categories)
- `public/images/schematics/*` (8 native clean SVGs replacing legacy manansteel hotlinks)

## Detailed Tasks
1. **Define Content Collections Schema (`src/content/config.ts`)**:
   - Define strict Zod schemas for `alloys`, `products`, and `technical-data` as detailed in `PROJECT.md` and `explorer_survey_2/handoff.md`.
2. **Implement Alloy Datasets (`src/content/alloys/`)**:
   Create valid JSON entries for all 22+ alloy grades:
   - High Nickel: `inconel-600.json`, `inconel-625.json`, `inconel-718.json`, `incoloy-800.json`, `monel-400.json`, `monel-k500.json`, `hastelloy-c276.json`, `hastelloy-c22.json`, `hastelloy-b2.json`, `hastelloy-x.json`, `nickel-200.json`, `nickel-201.json`
   - Stainless Steel: `stainless-steel-304.json`, `stainless-steel-304l.json`, `stainless-steel-316.json`, `stainless-steel-316l.json`, `stainless-steel-321.json`, `stainless-steel-310s.json`, `stainless-steel-347.json`, `stainless-steel-904l.json`
   - Duplex: `duplex-2205.json`, `super-duplex-2507.json`
   - Include accurate UNS, W.Nr., ASTM/ASME standards, chemical compositions (min/max % wt), and mechanical properties with dual units (MPa and ksi).
3. **Implement Product Forms Datasets (`src/content/products/`)**:
   Create valid JSON entries for all 7 product forms:
   - `flanges.json`: Weld Neck (WNRF), Slip-On (SORF), Blind (BLRF), Socket Weld, Threaded.
   - `pipes-tubes.json`: Seamless & Welded pipes and tubes.
   - `buttweld-fittings.json`: Elbows (45°, 90° SR/LR), Equal/Reducing Tees, Concentric/Eccentric Reducers, Caps, Stub Ends.
   - `forged-fittings.json`: Class 3000#, 6000#, 9000# fittings.
   - `fasteners.json`: Stud bolts, hex bolts, heavy hex nuts, washers.
   - `round-bars.json`: Bright drawn (h9/h11) and black hot-rolled round bars.
   - `sheets-plates.json`: Cold rolled & hot rolled plates and coils.
4. **Purge Catalog Defects**:
   - Ensure ZERO mentions of scraped competitor text ("Regal Sales Corp") in any description.
   - Ensure Inconel 600-718 are classified under Inconel and Incoloy 800 is classified under Incoloy.
5. **Create 8 Clean Native SVGs in `public/images/schematics/`**:
   Replace legacy hotlinks with clean, scalable, self-hosted SVGs:
   - `asme-b16-5-flange.svg`
   - `butt-weld-elbow.svg`
   - `butt-weld-tee.svg`
   - `butt-weld-reducer.svg`
   - `stub-end.svg`
   - `caps.svg`
   - `forged-fitting.svg`
   - `pipe-fitting.svg`
6. **Verify Build**:
   - Run `npx astro check` (must pass with 0 errors).
   - Run `npm run build` (must pass with exit code 0).
   - Run `node tests/e2e/runner.mjs --feature=13` through `--feature=19` (all tests must pass).

## Output
Write your handoff report to `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md` and send a completion message to the Project Orchestrator.

## 2026-09-10T17:15:59Z
You are worker_m2.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md and c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md first.
Review the metallurgy dataset in c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1\handoff.md and Zod schemas in c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_2\handoff.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Implement Milestone 2:
- Define Zod schemas in `src/content/config.ts` for alloys, products, technical-data.
- Populate `src/content/alloys/` with all 22+ alloy JSON entries (Inconel 600/625/718, Incoloy 800, Monel 400/K-500, Hastelloy C-276/C-22/B-2/X, Nickel 200/201, Stainless 304/304L/316/316L/321/310S/347/904L, Duplex 2205, Super Duplex 2507) with accurate UNS, W.Nr., ASTM/ASME standards, min/max chemistry, and dual-unit mechanical properties.
- Populate `src/content/products/` with all 7 product category JSON entries (flanges, pipes-tubes, buttweld-fittings, forged-fittings, fasteners, round-bars, sheets-plates).
- Zero occurrences of 'Regal Sales Corp' competitor scrape. Correct Inconel/Incoloy classification.
- Create 8 clean SVGs in `public/images/schematics/` replacing legacy manansteel hotlinks.
- Run `npx astro check`, `npm run build`, and `node tests/e2e/runner.mjs --feature=13` through `--feature=19`.
Write your handoff report to c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md and report back via send_message.

