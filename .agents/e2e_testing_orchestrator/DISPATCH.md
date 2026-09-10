# Task Dispatch: E2E Testing Orchestrator

## Identity
- Role: E2E Testing Orchestrator
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\e2e_testing_orchestrator
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Design and create a comprehensive, opaque-box, requirement-driven E2E test suite for Bhansali Metals derived purely from user requirements in `ORIGINAL_REQUEST.md`, independent of implementation internals. Publish `TEST_READY.md` upon completion.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`

## Scope & Deliverables
1. **Test Infrastructure (`TEST_INFRA.md`)**:
   - Establish test runner, test harness, directory layout in `tests/e2e/`.
   - Ensure tests can run via a clean command (e.g., `npm run test:e2e` or Node test runner) with exit code 0 on pass.
2. **4-Tier Test Suite Implementation**:
   - **Tier 1 - Feature Coverage**: Minimum 5 test cases per feature covering all 35 features in `PROJECT.md § Feature Inventory` (happy path isolation, route accessibility, schema presence, token compliance).
   - **Tier 2 - Boundary & Corner Cases**: Edge cases, invalid parameters, boundary pressure classes, extreme pipe schedules, mobile viewport collapses, empty/malformed RFQ inputs.
   - **Tier 3 - Cross-Feature Combinations**: Pairwise combinations (e.g. Inconel 625 Flanges + ASME B16.5 + WhatsApp parameters + MTC 3.1 guarantee).
   - **Tier 4 - Real-World Application Scenarios**: Multi-feature EPC procurement workflows (e.g. offshore platform piping BOQ, sour service NACE MR0175 compliance check, third-party inspection verification).
3. **Publish `TEST_READY.md`**:
   - Publish at project root `c:\AllStuff\Coding\bhansalimetals-local\TEST_READY.md` with full coverage summary, test execution command, and feature checklist.
