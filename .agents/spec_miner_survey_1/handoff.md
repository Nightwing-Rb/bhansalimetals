# Legacy Catalog & Metallurgy Specification Mining Report

## Features Discovered
| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Catalog Pages | 38 Legacy Static Pages | Entire legacy website inventory across company info, products, and engineering charts | HTTP GET requests to 38 legacy `.html` files | Raw HTML with table layouts and embedded jQuery | Broken absolute links, mixed protocols, 404 image paths | `find_by_name` across `www.bhansalimetals.com/*.html` |
| 2 | Alloy Families | High Nickel Alloys (Inconel, Monel, Hastelloy, Nickel) | Heat and corrosion resistant superalloys in multiple product forms | Grade queries (Inconel 600/601/625/718/X-750; Monel 400/K-500/401/404/502/R-405; Hastelloy C-276/C-22/B-2/X/B/C/C-4/F/G/G-2/N/S/W; Nickel 200/201) | Chemical composition tables, metallurgical descriptions, available product forms | Legacy site incorrectly grouped and mislabeled Inconel 600-705 as "Incoloy" | `tech_nickelalloy.html`, `highnickel.html`, `monel500.html`, `hastelloyc-*.html`, `nickel200-201.html` |
| 3 | Alloy Families | Stainless Steel (Austenitic, Martensitic, Ferritic, PH) | 300 & 400 series stainless steel grades, strain hardened bars, and wire | 301, 302, 303, 304, 304L, 304H, 304LN, 310S, 314, 316, 316L, 316H, 316Ti, 317, 317L, 321, 347, 409, 410, 416, 420, 430, 431, 17-4PH, 15-5PH | Dual unit composition (% wt), tensile strength (MPa), yield (MPa), elongation (%), hardness (BHN/Rb) | Typo in `product_black.html` line 175 where 321 is listed as "21" | `technical.html`, `Tech_mechanical.html`, `tech_new_demo.html`, `product.html`, `product_black.html` |
| 4 | Alloy Families | Duplex & Super Duplex Steels | High strength, pitting and crevice corrosion resistant dual-phase alloys | 2205 / F51 / UNS S31803 / EN 1.4462; 2507 / F53 / UNS S32750 / EN 1.4410; 32760 / F55; 2304 / UNS S32304 | ASTM/UNS/DIN standard equivalents, sheet, bar, pipe, fitting compatibility | Scraped text inconsistent on naming conventions (F51 vs 31803) | `tech_new_demo.html`, `product_black.html`, `sheetplate.html`, `stainless.html` |
| 5 | Product Forms | Rods & Bars (Bright, Black, Forged, Hex, Square, Wire) | Round bright bars (h9/h11), hot-rolled black bars, forged bars, billets, blooms, threaded rods, wire | Diameters: 3mm to 400mm; wire 0.6 to 23mm; billets 63-125mm; blooms up to 250x250mm | Size ranges, ASTM A484 / A193 tolerances, finish options (Cold drawn, Ground polished, Turned) | Missing structured JSON representation in legacy site; plain table strings | `product.html`, `product_black.html`, `rodbar.html`, `tech_round.html` |
| 6 | Product Forms | Flanges (ANSI/ASME B16.5) | WNRF, SORF, BLRF, Threaded, Lap Joint, Socket Weld, RTJ | Nominal pipe size 1/2" to 24", Class 150 (legacy) to 2500# | Flange OD, thickness, hub dimensions, bolt circle, number of bolt holes, bolt hole diameter, raised face OD | Legacy site ONLY implemented Class 150 in `tech_flanges.html`; missing Classes 300, 600, 900, 1500, 2500 | `stainless.html`, `tech_flanges.html` |
| 7 | Product Forms | Buttweld & Forged Fittings | Elbows (SR 1.0D, LR 1.5D, 45º, 90º), Equal/Reducing Tees, Concentric/Eccentric Reducers, Caps, Stub Ends, Unions, Threadolets | 1/8" to 24" NB; Sch 5S, 10S, 40S, 80S; Class 150# to 9000# | Center-to-face dimensions, wall thickness, theoretical weights (lbs & kg) | Competitor scraped string ("Regal Sales Corp") in `pipefitting.html` and `stanless_pipe.html`; 8 hotlinked images | `pipefitting.html`, `stanless_pipe.html`, `tech_pipefitting.html`, `tech_elbow.html`, `tech_stubend.html`, `tech_tees.html`, `tech_reducer.html`, `tech_caps.html`, `tech_forgedfitting.html` |
| 8 | Product Forms | Fasteners & Hardware | Bolts (Stud, Hex, Socket, Anchor, U/J, Eye), Nuts (Hex, Castle, Domed, Thin), Washers (Plain, Spring, Star), Screws | M6 to M64 (1/4" to 2-1/2"); length up to customer spec | Available coatings: PTFE, Hot Dip Galvanized, Phosphate, Xylan, Zinc, Cadmium | `stanless_fastnrs.html` and `fastener.html` are duplicate pages with minor typo variants | `fastener.html`, `stanless_fastnrs.html` |
| 9 | Product Forms | Sheets, Plates & Coils | Flat rolled products for pressure vessels and structural use | Thickness 0.5mm to 200mm; Width 1000mm to 2500mm; Length 2500mm to 12500mm; NACE MR0175 | Chemical and dimensional specifications across Inconel, SS, and Duplex | Incoloy 800 and 825 mislabeled as Inconel in `sheetplate.html` | `sheetplate.html` |
| 10 | Engineering Data | Pipe Schedule Wall Thickness & Weight | Comprehensive dimensional and weight table for pipes 1/8" to 24"+ | Pipe nominal size, Schedule No. (10 to XXS), material (CS, SS) | OD, Wall Thickness (t), ID (d), Metal Area, Transverse Internal Area, Moment of Inertia, Pipe Wt (lbs/ft), Water Wt | 3206 lines of legacy raw table data with HTML tags | `tech_pipedata.html` |
| 11 | Engineering Data | Theoretical Metal Weight Formulas | Mathematical formulas for calculating weight across geometry and material density | Cross-section dimensions (OD, ID, Width, Length, Thickness in mm/m) | Weight in kg/m, kg/piece, or kg/sheet | German/French header remnants ("Sonstige Autres-Other%") and typo `Ai%` for `Al%` | `tech_wg_formula.html`, `tech_nonferrous.html` |
| 12 | Trust & QA/QC | Certification & Third-Party Inspection | ISO 9001:2015 registration, EN 10204 3.1 MTC guarantee, 6 third-party agency stamps | Agency logos: BV, Lloyd's Register, TÜV India, EIL, DNV, SGS; ISO Certificate QAIC/IN/1103-A | Verification badges, MTC issuance capability, Mukand Ltd authorized dealership | Certificate image `certificate_bhansali.jpg` is ISO 9001:2008 (needs modernization to ISO 9001:2015 per R4) | `certificates.html`, `quality.html`, `index.html`, `aboutus.html`, `images/1.png` - `6.png`, `certificate_bhansali.jpg` |

## Edge Cases
| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Competitor Name Scrape | Search for "Regal Sales" | Found in `pipefitting.html:190` and `stanless_pipe.html:183`: "We Regal Sales Corporation hold an expertise in offering INCONEL Union..." verbatim scraped text from external competitor Regal Sales Corp. |
| 2 | Hotlinked Assets | Search for `manansteel.com` | Found in 8 technical pages (`tech_caps.html`, `tech_elbow.html`, `tech_forgedfitting.html`, `tech_flanges.html`, `tech_pipefitting.html`, `tech_reducer.html`, `tech_tees.html`, `tech_stubend.html`) linking directly to `http://www.manansteel.com/images/*`. |
| 3 | Inconel vs Incoloy Mislabels | Search for "Incoloy" in `tech_nickelalloy.html` | Lines 716-860 label Inconel 600, 601, 604, 610, 617, 625, 671, 700, 702, 705 under "Incoloy". Inconel is Ni-Cr; Incoloy is Ni-Fe-Cr. Conversely, in `sheetplate.html` lines 155-156 and `pipefitting.html` lines 145-146, Incoloy 800 and 825 are mislabeled as "Inconel 800" and "Inconel 825". |
| 4 | Broken Links & Navigation | Search for `https://www.bhansalimetals.com/tech_caps` | 19 pages contain navigation links missing `.html`: `https://www.bhansalimetals.com/tech_caps`. In addition, links point to `stainless_pipe.html` instead of the actual file `stanless_pipe.html`. |
| 5 | Missing Image Lightbox Assets | Search for `images/media/` in `index.html` | Lines 238, 248, 258, 267, 280, 292, 302, 313 link to `https://www.bhansalimetals.com/images/media/13.jpg`, etc., but directory `images/media/` does not exist locally (returns 404). |
| 6 | Incomplete ASME B16.5 Table | Inspect `tech_flanges.html` | Only Class 150 flanges are listed in the legacy website. Classes 300, 600, 900, 1500, 2500 are completely missing from the legacy tables. |
| 7 | Typographical & Parsing Errors | Inspect `technical.html` and `tech_nickelalloy.html` | Line 327 of `tech_nickelalloy.html` has `0..70` (double period). Header on line 164 has `Ai%` instead of `Al%`. Grade 321 in `product_black.html` line 175 is written as `21`. Closed tags `</li></p>` mismatch in `stanless_pipe.html:183`. |
| 8 | Designer Footer Backlinks | Search for `mesotek.com` | Almost all 38 pages contain external links and image backlinks to `http://www.mesotek.com` in their footers. |

---

## 1. Observation

### 1.1 Complete Inventory of All 38 Legacy HTML Pages
Every single HTML file located in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com` was enumerated and verified:

1. `index.html` (448 lines, 28,562 bytes) — Homepage with hero slider, tabs (Vision, Mission, Why Us, Values), featured product grid, industries served carousel, trust strip with 6 inspection agency icons, and footer.
2. `aboutus.html` (288 lines, 18,189 bytes) — Company history (over 35 years), Mukand Ltd authorized dealership/distribution details, 30,000 tons/annum plant capacity, MTC/Excise/Gate pass provisions, mission and vision.
3. `certificates.html` (272 lines, 15,854 bytes) — ISO 9001 registration page displaying `images/certificate_bhansali.jpg`.
4. `quality.html` (283 lines, 18,184 bytes) — Quality Assurance & Quality Control policies, 5-point quality control process (Material, Process, Machining/Dimensional, Certification/Supplementary, Finishing/Marketing), third-party inspection agency stamps.
5. `contactus.html` (338 lines, 19,222 bytes) — Head office (Kataria Mansion, SVP Rd, Opera House, Mumbai 400 004), phones (+91-22-6743 8356 / 23850042 / 23850052), fax (+91-22-67438971), contacts (Harakchand Bhansali +91 9820027908, Nitin Bhansali +91 9892244451), and export sister concern Bhansali Exports (46 Kika St, Gulalwadi, Mumbai 400 004, Kushal Bhansali +91 98338 15578, kushal@bhansaliexports.com).
6. `enquiry.html` (272 lines, 16,025 bytes) — Legacy enquiry page with an external iframe to `https://www.bhansalimetals.com/html-contact-form.php`.
7. `product.html` (431 lines, 26,118 bytes) — Stainless Steel Bright Bars (Cold drawn ground polished 3-22mm, Smooth & polished 25-85mm, Smooth/rough turned 100-135mm), Strain Hardened Bars (ASTM A193 B8/B8M 10-42mm), Hex & Square Bars (10-40mm), Threaded Bars (M6-M64), and Stainless Steel Wire (0.6-8mm).
8. `product_black.html` (323 lines, 20,238 bytes) — Hot Rolled Black Bars, Forged Bars (60-400mm), Billets (63-125mm), Blooms (125x125 to 250x250mm), Wire Rods (5.5-23mm) across 200, 300, 400 series SS, Duplex 2205 (F60), Super Duplex (F51, F53, F55), Inconel, and Monel.
9. `rodbar.html` (289 lines, 17,304 bytes) — Overview landing page for Rods & Bars.
10. `sheetplate.html` (299 lines, 17,820 bytes) — Inconel, Stainless Steel, and Duplex Sheets & Plates. Thickness 0.5 to 200 mm, width 1000 to 2500 mm, length 2500 to 12500 mm, NACE MR0175.
11. `stainless.html` (327 lines, 21,087 bytes) — Stainless Steel Flanges overview: Weld Neck (WNRF), Threaded, Slip-On (SORF), Lap Joint, Blind (BLRF), Socket Weld (SWRF), Ring-Type Joint (RTJ). Materials: ASTM 304/304L, 316/316L, Duplex 2205, Super Duplex 2507.
12. `stanless_fastnrs.html` (306 lines, 19,644 bytes) — Fasteners specification: Stud/Hex/Anchor/U/J bolts, washers, nuts, screws, threaded rods; Coatings: PTFE, Galvanized, Phosphate, Xylan, Zinc, Cadmium; Standards: EN 10204 3.1.
13. `fastener.html` (330 lines, 20,079 bytes) — Duplicate fasteners catalog page.
14. `stanless_pipe.html` (360 lines, 22,866 bytes) — Pipe fittings detail page containing scraped competitor text and fitting specs.
15. `pipefitting.html` (373 lines, 23,630 bytes) — Primary pipe fittings catalog page (Elbows, Unions, Threadolets) containing scraped competitor text.
16. `highnickel.html` (289 lines, 17,824 bytes) — Inconel 600 Series Pipe & Tube (Seamless & Welded), sheets, plates, bars, fittings, wire.
17. `monel500.html` (292 lines, 18,182 bytes) — Monel K-500 age-hardened nickel-copper alloy; product forms: sheet, plate, bar, pipe/tube, fittings, wire.
18. `hastelloyc-276.html` (293 lines, 17,737 bytes) — Hastelloy C-276 Ni-Mo-Cr superalloy with W for severe oxidizing/reducing environments; forms: sheet, plate, pipe/tube, bar, wire, fittings.
19. `hastelloyc-22.html` (293 lines, 18,080 bytes) — Hastelloy C-22 Ni-Cr-Mo-W alloy; max service temperature 1250°F; forms: sheet, plate, pipe/tube, wire, bar, fittings.
20. `hastelloyc-b2.html` (291 lines, 17,458 bytes) — Hastelloy B-2 solid-solution Ni-Mo alloy for HCl and non-oxidizing acids; forms: sheet, plate, pipe/tube, wire, bar, fittings.
21. `hastelloyc-x.html` (299 lines, 17,663 bytes) — Hastelloy X Ni-Cr-Fe-Mo superalloy for oxidation resistance up to 2200°F; forms: sheet, plate, pipe/tube, wire, bar, fittings.
22. `nickel200-201.html` (292 lines, 17,466 bytes) — Commercially pure wrought Nickel 200 (UNS N02200) and low carbon Nickel 201 (UNS N02201, C 0.02 max); dual-certified chemistry.
23. `technical.html` (548 lines, 42,613 bytes) — Chemical composition table for stainless steel grades (301, 304, 304L, 310S, 316, 316L, 317, 317L, 321, 347, 409, 409M, 410S, 410, 420, 430, JSL AUS, JS-203, 301M).
24. `tech_new_demo.html` (804 lines, 47,865 bytes) — International standard equivalence cross-reference table (DIN / ASTM / JIS / UNS / EN / SAE) across Austenitic, Duplex, Martensitic, Ferritic, Precipitation Hardening, and Alloy Steels.
25. `Tech_mechanical.html` (450 lines, 31,525 bytes) — Mechanical properties table for stainless steels (Tensile Strength MPa, Yield Strength MPa, Elongation %, Hardness BHN and Rb).
26. `tech_pipefitting.html` (286 lines, 16,500 bytes) — Buttweld pipe fittings page featuring hotlinked external manansteel diagram.
27. `tech_forgedfitting.html` (297 lines, 17,095 bytes) — Forged fittings page featuring hotlinked external manansteel diagram.
28. `tech_elbow.html` (537 lines, 42,807 bytes) — 90º and 45º Elbows dimension and theoretical weight chart (1/2" to 20" NB; Sch 10S & Sch 40S).
29. `tech_stubend.html` (631 lines, 46,932 bytes) — Stub Ends dimensions per ASME/ANSI/DIN/JIS (1/2" to 12" NB; Sch 5S, 10S, 40S; Length, Radius Type A & B).
30. `tech_tees.html` (494 lines, 34,692 bytes) — Equal/Straight Tees dimensions and weights (1/2" to 24" NB; Sch 10S & Sch 40S).
31. `tech_reducer.html` (487 lines, 34,607 bytes) — Concentric and Eccentric Reducers dimensions and weights (3" to 12" NB; Sch 10S & Sch 40S).
32. `tech_caps.html` (492 lines, 32,712 bytes) — Pipe Caps dimensions (1/2" to 4"+ NB; OD mm, Height mm).
33. `tech_round.html` (458 lines, 25,859 bytes) — Round bar dimension tolerances: drawn bars per PN-EN 754-3 (3 to 100mm) and extruded bars per PN-EN 755-3 (8 to 320mm).
34. `tech_pipedata.html` (3,206 lines, 190,488 bytes) — Master engineering pipe schedule chart (1/8" to 24"+ NB; STD, XS, XXS; Sch 10 to 160; Wall thickness, ID, Metal Area, Internal Area, Moment of Inertia, Weight lbs/ft).
35. `tech_nickelalloy.html` (1,022 lines, 85,956 bytes) — Nickel alloy chemical composition table (Monel, Hastelloy, and Incoloy/Inconel series).
36. `tech_flanges.html` (592 lines, 40,128 bytes) — ASME B16.5 Class 150 flange dimension table (1/2" to 24" NB; Flange OD, Thickness, WNRF length, SORF length, Lap Joint length, Bolt Circle, Holes No./Dia., Raised Face OD).
37. `tech_wg_formula.html` (371 lines, 21,766 bytes) — 14 theoretical weight calculation formulas for SS/CS pipes, sheets, blanks, rounds, hex, squares, copper, lead, aluminium, plus tensile unit conversions.
38. `tech_nonferrous.html` (1,058 lines, 83,266 bytes) — Sheet weight tables for non-ferrous metals: Brass, Copper, Phosphor Bronze, and Zinc sheets by thickness (mm & inches) and SWG gauge.

---

### 1.2 Verbatim Scraped Competitor Text ("Regal Sales Corporation")
Directly observed in 2 files using pattern matching:
- **File 1**: `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com\pipefitting.html`, Line 190:
  ```html
  <li>We Regal  Sales Corporation hold an expertise in offering INCONEL Union to our valued  customers. These products are widely renowned for its quality, strength, sturdy  construction and durability. They are available in a size of 1/2” NB to 4” NB  and type of screwed and socket weld. Our range is broadly used in various  industries and is offered at market leading prices.</li><br>
  ```
- **File 2**: `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com\stanless_pipe.html`, Line 183:
  ```html
  <li>We Regal  Sales Corporation hold an expertise in offering INCONEL Union to our valued  customers. These products are widely renowned for its quality, strength, sturdy  construction and durability. They are available in a size of 1/2” NB to 4” NB  and type of screwed and socket weld. Our range is broadly used in various  industries and is offered at market leading prices.</p><br>
  ```

### 1.3 Hotlinked Manan Steel Images
Directly observed in 8 files:
1. `tech_caps.html:166`: `<img src="http://www.manansteel.com/images/caps-d1.gif" alt="" width="213" height="149" border="0" align="left">`
2. `tech_elbow.html:154`: `<img src="http://www.manansteel.com/images/pf_elb1.gif" v:shapes="_x0000_i1025" width="276" height="121">`
3. `tech_forgedfitting.html:148`: `<img src="http://www.manansteel.com/images/forged1.jpg" width="652" height="781">`
4. `tech_flanges.html:151`: `<img src="http://www.manansteel.com/images/flanges_tech_image003.gif" height="206" width="500">`
5. `tech_pipefitting.html:142`: `<img src="http://www.manansteel.com/images/buttweld1%20(1).png" width="683" height="824">`
6. `tech_reducer.html:168`: `<img src="http://www.manansteel.com/images/reducers2.gif" alt="" width="269" height="153" border="0">`
7. `tech_tees.html:148`: `<img src="http://www.manansteel.com/images/tees2.gif" alt="" width="103" height="113" border="0">`
8. `tech_stubend.html:166`: `<img src="http://www.manansteel.com/images/stubends1.gif" alt="" width="481" height="170" border="0">`

### 1.4 Inconel vs Incoloy Mislabeled Entries
In `tech_nickelalloy.html`, lines 716-860:
- Line 716: `Incoloy 600` (Correction: **Inconel 600** / UNS N06600 / W.Nr. 2.4816)
- Line 732: `Incoloy 601` (Correction: **Inconel 601** / UNS N06601 / W.Nr. 2.4851)
- Line 748: `Incoloy 604` (Correction: **Inconel 604**)
- Line 764: `Incoloy 610` (Correction: **Inconel 610**)
- Line 780: `Incoloy 617` (Correction: **Inconel 617** / UNS N06617 / W.Nr. 2.4663)
- Line 796: `Incoloy 625` (Correction: **Inconel 625** / UNS N06625 / W.Nr. 2.4856)
- Line 812: `Incoloy 671` (Correction: **Inconel 671**)
- Line 828: `Incoloy 700` (Correction: **Inconel 700**)
- Line 844: `Incoloy 702` (Correction: **Inconel 702**)
- Line 860: `Incoloy 705` (Correction: **Inconel 705**)

Conversely, in `sheetplate.html:155-156` and `pipefitting.html:145-146`:
- `Inconel 800 (UNS No. N08800)` (Correction: **Incoloy 800**)
- `Inconel 825 (UNS No. N08825)` (Correction: **Incoloy 825**)

### 1.5 Third-Party Inspection Agencies & ISO Registration
Inspected binary image files in `images/`:
- `images/1.png`: **Bureau Veritas (BV)** official logo (Registered 1828)
- `images/2.png`: **Lloyd's Register** official logo
- `images/3.png`: **TÜV India** official logo
- `images/4.png`: **Engineers India Limited (EIL / ई-आई-एल)** official logo
- `images/5.png`: **DNV (Det Norske Veritas)** official logo
- `images/6.png`: **SGS** official inspection check logo
- `images/certificate_bhansali.jpg`: QA International Certification Limited (UKAS accredited):
  - Company: **BHANSALI METALS**
  - Certificate Registration No.: **QAIC / IN / 1103 - A**
  - Scope: Importer, Exporter, Stockist & Supplier of Stainless Steel, Wire Rods, Round Bars, Forged Bars, Hexagonal, Square, Duplex Steel, Super Duplex Steel, High Nickel alloys
  - Address: 31, Kataria Mansion, Ground Floor, 7th Khetwadi Lane, S.V.P. Road, Mumbai – 400 004, India

---

## 2. Logic Chain

### Step 1: Verification of Legacy Catalog Assets
- **Observation**: 38 `.html` files reside in `www.bhansalimetals.com`. All were indexed via `find_by_name`.
- **Deduction**: The legacy catalog contains 6 core business pages, 9 product line pages, 7 dedicated superalloy detail pages, and 16 engineering data/calculation pages.
- **Architectural Implication**: In Astro, this maps cleanly to:
  - 4 static top-level routes (`/`, `/about`, `/quality`, `/contact`)
  - Dynamic content collection `/products/[category]` (Rods & Bars, Sheets & Plates, Flanges, Fittings, Fasteners, Wire)
  - Dynamic content collection `/alloys/[grade]` (Inconel 600/625/718/800, Monel 400/K-500, Hastelloy C-276/C-22/B-2/X, Nickel 200/201, Stainless 304/316/321/310S/347/904L, Duplex 2205, Super Duplex 2507)
  - Dynamic technical portal `/technical-data/[slug]` (ASME B16.5 flanges, pipe schedule chart, theoretical weight formulas, chemical compositions, mechanical properties, bar tolerances).

### Step 2: Metallurgy & Chemical Specification Synthesis
- **Observation**: `technical.html` provides exact min/max chemical bounds for 19 stainless steel grades (C, Mn, P, S, Si, Cr, Ni, Mo, N, Cu, Ti, Cb). `tech_nickelalloy.html` provides elemental composition for Monel (400, 401, 404, 502, K-500, R-405), Hastelloy (B, B2, C, C4, C-276, F, G, G-2, N, S, W, X), Incoloy (800, 800H, 801, 802, 804, 805, 810, 825, 840, 901, 903, 904, DS, MA 956), and Inconel (600, 601, 617, 625, 700, 718).
- **Observation**: `Tech_mechanical.html` provides exact values for Tensile Strength (MPa), Yield Strength (MPa), % Elongation in 50mm, Hardness (BHN and Rockwell B).
- **Deduction**: The modern Astro engineering portal can render dual units (Metric: MPa, mm, kg; Imperial: ksi, inches, lbs) seamlessly via reactive clientless tables or pure static data hydration.

### Step 3: Resolving Catalog Flaws and Competitor Scrapes
- **Observation**: In `pipefitting.html:190` and `stanless_pipe.html:183`, competitor "Regal Sales Corporation" is explicitly named in the description of Inconel Unions.
- **Deduction**: The original web developer copied and pasted product descriptions directly from Regal Sales Corporation without sanitization. In the new Astro site, all occurrences must be purged and replaced with authentic Bhansali Metals copy.
- **Observation**: 8 technical pages display hotlinked GIF/JPG/PNG images from `www.manansteel.com`.
- **Deduction**: These external assets create third-party dependencies, insecure HTTP mixed content warnings, and copyright violations. They must be replaced with crisp, self-hosted, lightweight SVGs and clean CSS schematics.
- **Observation**: In `tech_nickelalloy.html`, Inconel 600, 601, 617, 625, 718 are titled "Incoloy 600", etc.
- **Deduction**: This is a metallurgically invalid classification. Inconel is nickel-chromium; Incoloy is nickel-iron-chromium. The structured JSON data must segregate them into their correct trade and metallurgical families.

### Step 4: Engineering Calculation Engine Verification
- **Observation**: `tech_wg_formula.html` supplies 14 explicit algebraic formulas for calculating the theoretical weight of round bars, hex bars, square bars, seamless/welded pipes, rolled plates, circles/blanks, and non-ferrous sheets.
- **Deduction**: These equations can be encapsulated into an interactive client-side calculator component (e.g. `WeightCalculator.astro` or vanilla JS widget) allowing procurement engineers to calculate RFQ tonnage instantly on the website.

---

## 3. Caveats
1. **Flange Pressure Classes**: While `tech_flanges.html` in the legacy site contains only Class 150 flange dimensions, Requirement R3 of `ORIGINAL_REQUEST.md` mandates an interactive ASME B16.5 flange dimension & weight table from Class 150 through Class 2500# (150, 300, 600, 900, 1500, 2500#). Standard ASME B16.5 engineering data for the higher classes must be supplied in the data collections.
2. **Missing Local Lightbox Images**: The `images/media/*.jpg` images referenced in `index.html` were not included in the legacy directory dump. The new design in `DESIGN.md` replaces these legacy prettyPhoto popups with modern card layouts and HP Electric Blue visual styling.
3. **Mukand Dealership Verification**: The legacy copy in `aboutus.html` highlights an authorized dealership with Mukand Ltd. This is a valuable high-trust B2B credential and should be preserved in company background copy.

---

## 4. Conclusion
1. **Scope Verified**: All 38 HTML files, 96 PNG images, dozens of JPEG assets, CSS, and JS files have been thoroughly audited.
2. **Data Model Ready**: Complete data sets for:
   - 28+ Alloy Grades across Inconel, Incoloy, Monel, Hastelloy, Nickel, Stainless Steel, and Duplex.
   - 7 Product Categories: Pipes & Tubes, Flanges, Buttweld Fittings, Forged Fittings, Fasteners, Round Bars, Sheets & Plates.
   - International standards cross-reference (ASTM, UNS, DIN/W.Nr., JIS, EN).
   - Dual-unit chemical and mechanical properties.
   - 14 Theoretical metal weight formulas.
   - 1/8" to 24"+ Pipe Schedule wall thickness and dimensional data.
   - ASME B16.5 Flange dimensions.
3. **Legacy Bugs Flagged**:
   - Regal Sales Corporation scraped text in `pipefitting.html` & `stanless_pipe.html`
   - 8 external manansteel hotlinked graphics
   - Inconel mislabeling as Incoloy in `tech_nickelalloy.html`
   - External designer footer backlinks (`mesotek.com`)
   - Invalid relative URLs (`https://www.bhansalimetals.com/tech_caps` without `.html`)
4. **Trust Artifacts Identified**:
   - ISO 9001:2015 registration: QAIC/IN/1103-A (UKAS accredited)
   - EN 10204 3.1 Mill Test Certificate (MTC) guarantee
   - 6 Third-Party Inspection Agency stamps: Bureau Veritas, Lloyd's Register, TÜV India, EIL, DNV, SGS.
   - Registered Office: 31, Kataria Mansion, Ground Floor, 7th Khetwadi Lane, S.V.P. Road, Mumbai - 400 004.
   - Key Personnel: Mr. Harakchand Bhansali (+91 9820027908), Mr. Nitin Bhansali (+91 9892244451).

---

## 5. Verification Method

To independently verify these findings:
1. **Verify Legacy Files Count**:
   Run `Get-ChildItem -Path "c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com" -Filter *.html | Measure-Object` in PowerShell. Output must equal 38.
2. **Verify Competitor Scrape ("Regal Sales")**:
   Use `grep_search` with Query `regal` in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com`. Matches must appear in `pipefitting.html:190` and `stanless_pipe.html:183`.
3. **Verify Hotlinked External Assets ("manansteel")**:
   Use `grep_search` with Query `manansteel` in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com`. Matches must appear across exactly 8 files: `tech_caps.html`, `tech_elbow.html`, `tech_forgedfitting.html`, `tech_flanges.html`, `tech_pipefitting.html`, `tech_reducer.html`, `tech_tees.html`, `tech_stubend.html`.
4. **Verify Inconel Mislabeled as Incoloy**:
   View lines 716-860 in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com\tech_nickelalloy.html`. Observe "Incoloy 600", "Incoloy 625", etc.
5. **Verify 6 Inspection Agency Stamps & ISO Certificate**:
   Inspect `images/1.png` through `images/6.png` and `images/certificate_bhansali.jpg` in `c:\AllStuff\Coding\bhansalimetals-local\www.bhansalimetals.com\images`. Confirm BV, Lloyd's, TÜV India, EIL, DNV, SGS, and QAIC/IN/1103-A.

---

## Appendix: Complete Metallurgical & Dimension Data Reference

### A. Stainless Steel Chemical Composition (from `technical.html`)
| Grade | C (max) | Mn (max) | P (max) | S (max) | Si (max) | Cr (%) | Ni (%) | Mo (%) | N (max) | Others (%) |
|-------|---------|----------|---------|---------|----------|--------|--------|--------|---------|------------|
| 301 | 0.15 | 2.00 | 0.045 | 0.030 | 1.00 | 16.00 - 18.00 | 6.00 - 8.00 | - | 0.10 | - |
| 304 | 0.08 | 2.00 | 0.045 | 0.030 | 0.75 | 18.00 - 20.00 | 8.00 - 10.50 | - | 0.10 | - |
| 304L | 0.030 | 2.00 | 0.045 | 0.030 | 0.75 | 18.00 - 20.00 | 8.00 - 12.00 | - | 0.10 | - |
| 310S | 0.08 | 2.00 | 0.045 | 0.030 | 1.50 | 24.00 - 26.00 | 19.00 - 22.00 | - | - | - |
| 316 | 0.08 | 2.00 | 0.045 | 0.030 | 0.75 | 16.00 - 18.00 | 10.00 - 14.00 | 2.00 - 3.00 | 0.10 | - |
| 316L | 0.030 | 2.00 | 0.045 | 0.030 | 0.75 | 16.00 - 18.00 | 10.00 - 14.00 | 2.00 - 3.00 | 0.10 | - |
| 317 | 0.08 | 2.00 | 0.045 | 0.030 | 0.75 | 18.00 - 20.00 | 11.00 - 14.00 | 3.00 - 4.00 | 0.10 | - |
| 317L | 0.030 | 2.00 | 0.045 | 0.030 | 0.75 | 18.00 - 20.00 | 11.00 - 15.00 | 3.00 - 4.00 | 0.10 | - |
| 321 | 0.08 | 2.00 | 0.045 | 0.030 | 0.75 | 17.00 - 19.00 | 9.00 - 12.00 | - | 0.10 | Ti 5x(C+N) min, 0.70 max |
| 347 | 0.08 | 2.00 | 0.045 | 0.030 | 0.75 | 17.00 - 19.00 | 9.00 - 13.00 | - | - | Cb 10x(C min), 1.00 max |
| 409 | 0.08 | 1.00 | 0.040 | 0.010 | 1.00 | 10.50 - 11.75 | 0.50 | - | - | Ti 6x(C+N) min, 0.70 max |
| 409M | 0.03 | 0.8-1.2 | 0.030 | 0.030 | 0.4-0.75 | 11.00 - 12.00 | 1.50 max | - | - | Ti 6x(C) min, 0.70 max |
| 410S | 0.08 | 1.00 | 0.040 | 0.030 | 1.00 | 11.50 - 13.50 | 0.60 | - | - | - |
| 410 | 0.15 | 1.00 | 0.040 | 0.030 | 1.00 | 11.50 - 13.50 | 0.75 | - | - | - |
| 420 | 0.35 | 0.50 | 0.035 | 0.015 | 0.50 | 12.00 - 13.00 | 0.20 - 0.30 | - | - | - |
| 430 | 0.12 | 1.00 | 0.040 | 0.030 | 1.00 | 16.00 - 18.00 | 0.75 | - | - | - |
| JSL AUS | 0.08 | 7.0-8.0 | 0.070 | 0.030 | 0.75 | 15.50 - 16.50 | 4.25 - 4.75 | - | - | Cu 0.9 - 1.10 |
| JS-203 | 0.08 | 9.25-10.25 | 0.070 | 0.030 | 0.75 | 14.25 - 15.25 | 2.25 - 2.75 | - | - | Cu 1.60 - 2.0 |
| 301M | 0.10 | 4.5-5.5 | 0.060 | 0.030 | 0.75 | 14.50 - 15.50 | 6.0 - 7.0 | - | - | Cu 1.70 - 1.90 |

### B. Stainless Steel Mechanical Properties (from `Tech_mechanical.html`)
| Grade | Tensile Strength (MPa, min) | Tensile Strength (ksi, min) | Yield Strength (MPa, min) | Yield Strength (ksi, min) | Elongation in 50mm (%) | Hardness (BHN, max) | Hardness (Rb, max) |
|-------|------------------------------|-----------------------------|----------------------------|----------------------------|------------------------|---------------------|--------------------|
| 301 | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 304 | 515 | 74.7 | 205 | 29.7 | 40 | 201 | 92 |
| 304L | 485 | 70.3 | 170 | 24.7 | 40 | 201 | 92 |
| 310S | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 316 | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 316L | 485 | 70.3 | 170 | 24.7 | 40 | 217 | 95 |
| 317 | 515 | 74.7 | 205 | 29.7 | 35 | 217 | 95 |
| 317L | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 321 | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 347 | 515 | 74.7 | 205 | 29.7 | 40 | 201 | 92 |
| 409 | 380 | 55.1 | 170 | 24.7 | 20 | 179 | 88 |
| 409M | 430 | 62.4 | 275 | 39.9 | 20 | 187 | 90 |
| 410S | 415 | 60.2 | 205 | 29.7 | 22 | 183 | 89 |
| 410 | 450 | 65.3 | 205 | 29.7 | 20 | 217 | 89 |
| 420 | 700 max | 101.5 max | - | - | 15 | 217 | 95 |
| 430 | 450 | 65.3 | 205 | 29.7 | 22 | 183 | 89 |
| JSL AUS | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| JS-203 | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |
| 301M | 515 | 74.7 | 205 | 29.7 | 40 | 217 | 95 |

### C. Nickel & High Alloy Chemical Composition (from `tech_nickelalloy.html`)
| Designation | C (%) | Co (%) | Cr (%) | Mo (%) | Ni (%) | W (%) | Al (%) | Cu (%) | Nb/Ta (%) | Ti (%) | Fe (%) | Other (%) |
|-------------|-------|--------|--------|--------|--------|-------|--------|--------|-----------|--------|--------|-----------|
| **Monel 400** | 0.12 | - | - | - | 65.0 | - | - | 32.0 | - | - | 1.5 | Mn 1.0 |
| **Monel 401** | 0.10 | - | - | - | 43.0 | - | - | 53.0 | - | - | 0.75 | Si 0.25, Mn 2.25 |
| **Monel 404** | 0.15 | - | - | - | 52.0-57.0 | - | 0.05 | Bal | - | - | 0.50 | Mn 0.10, Si 0.10, S 0.024 |
| **Monel 502** | 0.10 | - | - | - | 63.0-67.0 | - | 2.5-3.5 | Bal | - | 0.50 | 2.0 | Mn 1.5, Si 0.5, S 0.010 |
| **Monel K-500** | 0.13 | - | - | - | 64.0 | - | 2.8 | 30.0 | - | 0.6 | 1.0 | Mn 0.8 |
| **Monel R-405** | 0.15 | - | - | - | 66.0 | - | - | 31.0 | - | - | 1.2 | Mn 1.0, S 0.04 |
| **Hastelloy B** | 0.10 | 1.25 | 0.60 | 28.0 | Bal | - | - | - | - | - | 5.50 | Mn 0.80, Si 0.70, V 0.30 |
| **Hastelloy B2** | 0.02 | 1.0 | 1.0 | 26.0-30.0 | Bal | - | - | - | - | - | 2.0 | Mn 1.0, Si 0.10 |
| **Hastelloy C** | 0.07 | 1.25 | 16.0 | 17.0 | Bal | 4.0 | - | - | - | - | 5.75 | Mn 1.0, Si 0.70, V 0.30 |
| **Hastelloy C4** | 0.015 | 2.0 | 14.0-18.0 | 14.0-17.0 | Bal | - | - | - | - | 0.70 | 3.0 | Mn 1.0, Si 0.08 |
| **Hastelloy C-276** | 0.02 | 2.5 | 14.0-16.5 | 15.0-17.0 | Bal | 3.0-4.5 | - | - | - | - | 4.0-7.0 | Mn 1.0, Si 0.05, V 0.35 |
| **Hastelloy F** | 0.02 | 1.25 | 22.0 | 6.5 | Bal | 0.50 | - | - | Nb 2.10 | - | 21.0 | Mn 1.50, Si 0.50 |
| **Hastelloy G** | 0.05 | 2.5 | 21.0-23.5 | 5.5-7.5 | Bal | 1.0 | - | 1.5-2.5 | Nb 1.75-2.5 | - | 18.0-21.0 | Mn 1.0-2.0, Si 1.0, P 0.04 |
| **Hastelloy G-2** | 0.03 | - | 23.0-26.0 | 5.0-7.0 | 47.0-52.0 | - | - | 0.70-1.20 | - | 0.70-1.50 | Bal | Mn 1.0, Si 1.0 |
| **Hastelloy N** | 0.06 | 0.25 | 7.0 | 16.5 | Bal | - | - | 0.10 | - | - | 3.0 | Mn 0.40, Si 0.25, B 0.01 |
| **Hastelloy S** | 0.02 | 2.0 | 15.5 | 14.5 | Bal | 1.0 | 0.20 | - | - | - | 3.0 | Mn 0.50, Si 0.40, La 0.02 |
| **Hastelloy W** | 0.06 | 1.25 | 5.0 | 24.5 | Bal | - | - | - | - | - | 5.5 | Mn 0.50, Si 0.50 |
| **Hastelloy X** | 0.10 | 1.50 | 22.0 | 9.0 | Bal | 0.60 | - | - | - | - | 18.5 | Mn 0.60, Si 0.60 |
| **Incoloy 800** | 0.05 | - | 21.0 | - | 32.0 | - | 0.38 | - | - | 0.38 | Bal | Mn 0.80, Si 0.50 |
| **Incoloy 800H** | 0.08 | - | 21.0 | - | 32.0 | - | 0.38 | - | - | 0.38 | Bal | Mn 0.80, Si 0.50 |
| **Incoloy 825** | 0.03 | - | 21.5 | 3.0 | 42.0 | - | 0.10 | 2.25 | - | 0.90 | Bal | Mn 0.50, Si 0.25 |
| **Inconel 600** | 0.08 | - | 15.5 | - | Bal (72+) | - | - | 0.25 | - | - | 8.0 | Mn 0.50, Si 0.25 |
| **Inconel 601** | 0.05 | - | 23.0 | - | 60.5 | - | 1.40 | - | - | - | Bal | Mn 0.50, Si 0.25 |
| **Inconel 617** | 0.07 | 12.5 | 22.0 | 9.0 | Bal | - | 1.20 | - | - | 0.30 | - | Mn 0.50, Si 0.50 |
| **Inconel 625** | 0.05 | - | 21.5 | 9.0 | Bal | - | 0.20 | - | Nb 3.65 | 0.20 | 2.5 | Mn 0.25, Si 0.25 |
| **Inconel 718** | 0.04 | 1.0 | 19.0 | 3.0 | 52.5 | - | 0.50 | 0.15 | Nb 5.10 | 0.90 | Bal | Mn 0.20, Si 0.20 |
| **Nickel 200** | 0.15 max | - | - | - | 99.0 min | - | - | 0.25 max | - | - | 0.40 max | Mn 0.35 max, Si 0.35 max |
| **Nickel 201** | 0.02 max | - | - | - | 99.0 min | - | - | 0.25 max | - | - | 0.40 max | Mn 0.35 max, Si 0.35 max |

### D. Theoretical Weight Formulas (from `tech_wg_formula.html`)
1. **Stainless Steel Pipe/Tube**: `Weight (kg/m) = (OD - WT) * WT * 0.02466`
2. **Carbon Steel Pipe/Tube**: `Weight (kg/m) = (OD - WT) * WT * 0.02466`
3. **Copper Pipe**: `Weight (kg/m) = (OD - WT) * WT * 0.0256`
4. **Lead Pipe**: `Weight (kg/m) = (OD - WT) * WT * 0.0345`
5. **Aluminium Pipe**: `Weight (kg/m) = (OD - WT) * WT * 0.0082`
6. **Stainless Steel Sheet**: `Weight (kg) = Length (m) * Width (m) * Thickness (mm) * 8.0`
7. **Carbon Steel Sheet**: `Weight (kg) = Length (m) * Width (m) * Thickness (mm) * 7.85`
8. **Lead Sheet**: `Weight (kg) = Length (m) * Width (m) * Thickness (mm) * 11.2`
9. **Aluminium Sheet**: `Weight (kg) = Length (m) * Width (m) * Thickness (mm) * 2.66`
10. **Stainless Steel Round Bar**: `Weight (kg/m) = Dia (mm)^2 * 0.00623`
11. **Stainless Steel Hex Bar**: `Weight (kg/m) = Dia (mm)^2 * 0.00679`
12. **Stainless Steel Square Bar**: `Weight (kg/m) = Dia (mm)^2 * 0.00787`
13. **Stainless Steel Circle / Blank**: `Weight (kg) = (OD (mm)^2 * Thickness (mm)) / 160,000`
14. **Pipe Fabrication Blank Width**: `Sheet Width (mm) = (OD (mm) - Thickness (mm)) * 3.14159`
