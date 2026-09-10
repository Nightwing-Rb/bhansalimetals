# Task Dispatch: Legacy Catalog & Metallurgy Spec Miner

## Identity
- Role: Legacy Catalog & Spec Miner
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1
- Parent: Orchestrator (orchestrator_r1)

## Mission
Investigate the authoritative legacy website catalog in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com` (all 38 legacy HTML pages) and extract all technical specifications, product forms, alloy grades, engineering tables, and legacy errors into a comprehensive structured report.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com` (All legacy pages)

## Scope & Tasks
1. Inventory all 38 legacy HTML pages in `www.bhansalimetals.com`.
2. Extract all Alloy Families and Grades:
   - Inconel: 600, 625, 718, 800
   - Monel: 400, K-500
   - Hastelloy: C-276, C-22, B-2, X
   - Nickel: 200, 201
   - Stainless Steel: 304, 304L, 316, 316L, 321, 310S, 347, 904L
   - Duplex & Super Duplex (2205, 2507)
3. Extract all Product Forms:
   - Pipes & Tubes (Seamless, Welded)
   - Flanges (WNRF, SORF, BLRF, Socket Weld, Threaded)
   - Buttweld Fittings (Elbows, Tees, Reducers, Caps, Stub Ends)
   - Forged High-Pressure Fittings (3000#, 6000#)
   - Fasteners (Hex bolts, studs, nuts, washers)
   - Round Bars (Bright, Black)
   - Sheets & Plates
4. Detail Engineering Tools & Data:
   - ASME B16.5 flange dimension & weight table (Class 150 to 2500#)
   - Pipe schedule wall thickness chart (Sch 10 to XXS)
   - Theoretical metal weight formulas
   - Chemical composition & mechanical properties dual units (MPa/ksi, mm/inch, kg/lb)
5. Catalog all Legacy Bugs to eliminate:
   - Mentions of scraped competitor text ("Regal Sales Corp")
   - Hotlinked external manansteel images to be replaced with native clean SVGs/assets
   - Inconel mislabeling as Incoloy
6. Document third-party inspection agency stamps (BV, TÜV India, Lloyd's, EIL, DNV, SGS), ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC.

## Output
Write your comprehensive analysis and findings to `c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1\handoff.md` and send a completion message to the orchestrator.

## 2026-09-10T16:42:40Z
You are spec_miner_survey_1.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md first.
Then thoroughly inspect the legacy website files at c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com (all 38 pages).
Extract all alloy grades, product forms, ASME/ASTM standards, dimension tables, legacy bugs to fix ('Regal Sales Corp', hotlinks, Incoloy mislabeling), and certification details.
Write your complete structured findings to c:\AllStuff\Coding\bhansalimetals-local\.agents\spec_miner_survey_1\handoff.md and report back via send_message to the orchestrator.

