# Task Dispatch: Forensic Auditor for Milestone 1

## Identity
- Role: Forensic Integrity Auditor
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m1
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Conduct a thorough forensic audit of the implementation created by `worker_m1` for Milestone 1.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`
4. `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1\handoff.md`

## Audit Checks
1. **Anti-Hardcoding & Authentic Logic**:
   - Verify that components, CSS tokens, and layouts are genuine implementations, not fake mocks or test-pleasing facades.
2. **Competitor Scrape Check**:
   - Scan all newly created files in `src/`, `public/`, and configs for forbidden scraped text ("Regal Sales Corp"). None must exist.
3. **Asset Authenticity**:
   - Inspect all 8 SVGs in `public/images/badges/` and verify they are authentic, well-formed vector artwork, not empty or corrupt files.
4. **Build & Route Legitimacy**:
   - Verify `npm run build` runs genuinely and generates real static HTML in `dist/`.
5. Issue a binary verdict: `CLEAN` or `INTEGRITY VIOLATION`.

## Output
Write your audit report with full evidence to `c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m1\handoff.md` and send completion message to Project Orchestrator.

## 2026-09-10T17:00:00Z
You are auditor_m1.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m1.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m1\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md, c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md, and c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md first.
Perform forensic integrity verification:
1. Check for hardcoding, dummy/facade implementations, or test circumvention.
2. Verify genuine Astro static build and valid static files.
3. Check for forbidden competitor text ('Regal Sales Corp').
4. Inspect all 8 vector SVGs in public/images/badges/ for validity and authenticity.
Write your audit report with full evidence to c:\AllStuff\Coding\bhansalimetals-local\.agents\auditor_m1\handoff.md with a binary verdict (CLEAN or INTEGRITY VIOLATION) and report back via send_message.
