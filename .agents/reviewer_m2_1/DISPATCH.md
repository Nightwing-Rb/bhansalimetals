# Task Dispatch: Reviewer 1 for Milestone 2

## Identity
- Role: Content Schema & Metallurgy Datasets Reviewer
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\reviewer_m2_1
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Independently review the work product of Milestone 2 (Content Collections & Metallurgy Data Engine) delivered by `worker_m2`.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md`

## Verification Scope
1. Inspect `src/content/config.ts`: Verify strict Zod schemas for `alloys`, `products`, and `technical-data`.
2. Inspect all 23 alloy JSON files in `src/content/alloys/`:
   - High Nickel (Inconel 600/625/718, Incoloy 800/825, Monel 400/K-500, Hastelloy C-276/C-22/B-2/X, Nickel 200/201)
   - Stainless Steel (304, 304L, 316, 316L, 321, 310S, 347, 904L)
   - Duplex (2205, 2507)
   - Verify UNS numbers, Werkstoff codes, ASTM/ASME standards, elemental min/max %, and dual-unit mechanical properties.
3. Inspect all 7 product category JSON files in `src/content/products/`.
4. Run verification commands:
   - `npx astro check`
   - `npm run build`
   - `node tests/e2e/runner.mjs --feature=13`
   - `node tests/e2e/runner.mjs --feature=14`
   - `node tests/e2e/runner.mjs --feature=15`
   - `node tests/e2e/runner.mjs --feature=16`
5. Issue an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

## Output
Write your review report to `c:\AllStuff\Coding\bhansalimetals-local\.agents\reviewer_m2_1\handoff.md` and send a completion message to the Project Orchestrator.

## 2026-09-10T17:22:59Z
You are reviewer_m2_1.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\reviewer_m2_1.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\reviewer_m2_1\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md, c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md, and c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md first.

Review Milestone 2 content collections:
1. Inspect `src/content/config.ts` for strict Zod validation.
2. Inspect all 23 alloy JSON files in `src/content/alloys/` for accurate UNS, W.Nr., ASTM/ASME standards, chemistry bounds, and dual units (MPa/ksi).
3. Inspect all 7 product category JSON files in `src/content/products/`.
4. Run `npx astro check`, `npm run build`, and `node tests/e2e/runner.mjs --feature=13` through `--feature=16`.
Write your report to c:\AllStuff\Coding\bhansalimetals-local\.agents\reviewer_m2_1\handoff.md with an explicit verdict (APPROVE or REQUEST_CHANGES) and report back via send_message.

