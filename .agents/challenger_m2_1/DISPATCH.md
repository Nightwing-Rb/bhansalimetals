# Task Dispatch: Challenger 1 for Milestone 2

## Identity
- Role: Data Integrity & Cross-Feature Challenger
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m2_1
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Empirically test the integrity, physical consistency, and pairwise combinations of the content collections created in Milestone 2.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md`

## Testing Scope
1. Validate data integrity of all 23 alloy JSON files:
   - Check that chemical composition values are mathematically sane and match ASTM bounds.
   - Check that mechanical properties have valid dual units (MPa and ksi with accurate conversion: 1 ksi ≈ 6.895 MPa).
   - Check that density values match standard physical values (e.g. Inconel 625 ~8.44 g/cm³, SS 304 ~8.0 g/cm³).
2. Validate that all product categories reference valid compatible alloy slugs that actually exist in `src/content/alloys/`.
3. Run Tier 3 and Tier 4 tests:
   - `node tests/e2e/runner.mjs --tier=3`
   - `node tests/e2e/runner.mjs --tier=4`
4. Issue an explicit verdict: `APPROVE` or `REQUEST_CHANGES`.

## Output
Write your challenge report to `c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m2_1\handoff.md` and send a completion message to the Project Orchestrator.

## 2026-09-10T17:22:59Z
You are challenger_m2_1.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m2_1.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m2_1\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md, c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md, and c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md first.

Empirically challenge Milestone 2 data integrity:
1. Validate chemical compositions, mechanical dual units, and densities for all 23 alloys.
2. Validate that product categories reference valid compatible alloy slugs.
3. Run `node tests/e2e/runner.mjs --tier=3` and `node tests/e2e/runner.mjs --tier=4`.
Write your report to c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m2_1\handoff.md with an explicit verdict (APPROVE or REQUEST_CHANGES) and report back via send_message.

