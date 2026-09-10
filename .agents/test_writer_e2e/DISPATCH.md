# Task Dispatch: E2E Test Suite Writer

## 2026-09-10T16:50:06Z
You are test_writer_e2e.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\test_writer_e2e.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\test_writer_e2e\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md and c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md first.

Design and implement the complete, opaque-box, requirement-driven E2E test suite for Bhansali Metals in `tests/e2e/`.
1. Create `TEST_INFRA.md` at project root documenting test architecture, runner, and 4-tier methodology.
2. Implement test runner in `tests/e2e/runner.mjs` validating generated routes, static HTML outputs, schema graphs, components, and HTTP responses.
3. Implement test cases:
   - Tier 1: Feature Coverage (>=5 tests per feature across all 35 features in PROJECT.md).
   - Tier 2: Boundary & Corner Cases (>=5 tests per feature).
   - Tier 3: Cross-Feature Combinations (pairwise coverage).
   - Tier 4: Real-World Application Scenarios (>=5 realistic EPC procurement scenarios).
4. Publish `TEST_READY.md` at project root with full coverage counts, command instructions, and feature checklist.
Write your handoff report to c:\AllStuff\Coding\bhansalimetals-local\.agents\test_writer_e2e\handoff.md and report back via send_message.

## Identity
- Role: E2E Test Suite Writer
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\test_writer_e2e
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Design and implement the complete, opaque-box, requirement-driven E2E test suite for Bhansali Metals in `tests/e2e/`, derived strictly from `ORIGINAL_REQUEST.md`, `PROJECT.md`, and `DESIGN.md`. Write `TEST_INFRA.md` and publish `TEST_READY.md` upon completion.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`

## Scope & Deliverables
1. **Test Infrastructure (`TEST_INFRA.md`)**:
   - Establish an ultra-fast, zero-flakiness test runner in `tests/e2e/` (using Node.js built-in `node:test` and `node:assert` or lightweight test runner) that validates the generated static site in `dist/` or checks route generation and content output.
   - Configure npm test script or standalone executable runner: `node tests/e2e/runner.mjs`.
2. **4-Tier Test Cases Implementation**:
   - **Tier 1 - Feature Coverage (>=5 tests per feature)**:
     - All 35 features in `PROJECT.md § Feature Inventory` tested in isolation (route existence, status 200, semantic headings, color tokens, button radius 4px, card radius 16px, 45° chevrons, utility strip info, 5-col footer links, ISO 9001 registration QAIC/IN/1103-A, EN 10204 3.1 MTC, 6 TPI agencies BV/TÜV/Lloyd's/EIL/DNV/SGS, alloy pages, product pages, engineering tables, weight formulas, WhatsApp links, RFQ modal).
   - **Tier 2 - Boundary & Corner Cases (>=5 tests per feature)**:
     - Boundary pressure ratings (Class 150# and 2500#), extreme pipe sizes (1/8" to 36", Sch 10 to XXS), empty inputs, negative weight inputs, mobile viewport collapsible behaviors (chevrons hidden on mobile, hamburger toggle), special character encoding in WhatsApp URLs (`"`, `#`, `&`).
   - **Tier 3 - Cross-Feature Combinations (Pairwise)**:
     - Inconel 625 Flanges + ASME B16.5 + WhatsApp pre-fill + MTC 3.1; Hastelloy C-276 Pipe + Schedule Chart + RFQ BOQ; Monel 400 Round Bar + Weight Calculator + Kalamboli Stock Pill.
   - **Tier 4 - Real-World Application Scenarios (>=5 scenarios)**:
     - Scenario 1: Offshore Platform Super Duplex 2507 High-Pressure Flange RFQ with NACE MR0175 compliance.
     - Scenario 2: Chemical Refinery Inconel 625 Seamless Pipe Schedule 80 procurement workflow with EN 10204 3.1 MTC.
     - Scenario 3: Marine Hardware Monel 400 Fasteners and Round Bars procurement with Bureau Veritas inspection.
     - Scenario 4: Fertilizer Plant Hastelloy C-276 Buttweld Fittings Bill of Quantities submission.
     - Scenario 5: High-Temperature Furnace Incoloy 800 Plates with TÜV India third-party inspection.
3. **Artifacts to Generate**:
   - `c:\AllStuff\Coding\bhansalimetals-local\TEST_INFRA.md` at project root.
   - Complete executable test suite files in `c:\AllStuff\Coding\bhansalimetals-local\tests/e2e/`.
   - `c:\AllStuff\Coding\bhansalimetals-local\TEST_READY.md` at project root summarizing test counts, tiers, execution instructions, and feature checklist.

## Output
Write your handoff report to `c:\AllStuff\Coding\bhansalimetals-local\.agents\test_writer_e2e\handoff.md` and report completion back to the Project Orchestrator via send_message.
