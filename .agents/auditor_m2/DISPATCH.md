# Task Dispatch: Forensic Auditor for Milestone 2

## Identity
- Role: Forensic Integrity Auditor
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m2
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Conduct a thorough forensic audit of the implementation created by `worker_m2` for Milestone 2.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md`

## Audit Checks
1. **Anti-Hardcoding & Authentic Logic**:
   - Verify that all 23 alloy JSON files and 7 product JSON files contain genuine, rich, authentic metallurgical data, not dummy placeholders or test mocks.
2. **Competitor Text Verification**:
   - Perform a full-codebase ripgrep scan for "Regal Sales" across all files in `src/`, `public/`, and `dist/`. Zero occurrences allowed.
3. **SVG Asset Authenticity**:
   - Inspect all 8 SVGs in `public/images/schematics/` to confirm they are genuine, valid, scalable vector artwork and not corrupt/empty stubs.
4. **Build Legitimacy**:
   - Verify `npm run build` runs genuinely and generates valid static output.
5. Issue a binary verdict: `CLEAN` or `INTEGRITY VIOLATION`.

## Output
Write your audit report with full evidence to `c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m2\handoff.md` and send a completion message to the Project Orchestrator.

## 2026-09-10T17:23:00Z
You are auditor_m2.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m2.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m2\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md, c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md, and c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m2\handoff.md first.

Perform forensic integrity verification for Milestone 2:
1. Verify genuine, authentic metallurgical data in all 23 alloy JSON files and 7 product JSON files.
2. Confirm zero competitor scrapes ('Regal Sales') in src/, public/, dist/.
3. Verify all 8 SVGs in public/images/schematics/ are valid, non-empty vector graphics.
4. Verify build succeeds with `npm run build`.
Write your audit report with full evidence to c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m2\handoff.md with a binary verdict (CLEAN or INTEGRITY VIOLATION) and report back via send_message.
