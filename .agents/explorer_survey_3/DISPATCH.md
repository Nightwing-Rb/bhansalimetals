# Task Dispatch: Design System & B2B Conversion Funnel Explorer

## Identity
- Role: Visual & Conversion Funnel Explorer
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3
- Parent: Orchestrator (orchestrator_r1)

## Mission
Analyze `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md` and design the UI components, CSS design tokens, conversion funnel (RFQ modal, WhatsApp integration), trust strip, and 5-column footer adhering strictly to the HP Electric Blue theme.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`

## Scope & Tasks
1. Map DESIGN.md Tokens to CSS Custom Properties / Tailwind / Vanilla CSS:
   - Primary: HP Electric Blue `#024ad8`, Bright Blue `#296ef9`, Deep Navy `#0e3191`, Soft Blue `#c9e0fc`
   - Canvas & Surfaces: Canvas `#ffffff`, Paper `#ffffff`, Cloud `#f7f7f7`, Fog `#e8e8e8`, Steel `#c2c2c2`
   - Text: Ink `#1a1a1a`, Ink Deep `#000000`, On Ink `#ffffff`, Charcoal `#3d3d3d`, Graphite `#636363`
   - Accents: Bloom Coral `#ff5050`, Storm Deep `#356373`
   - Typography: Single family geometric grotesque (Inter / fallback stack), Display weight 500 with line-height 1.0; body weight 400 with line-height 1.4; button weight 600/700 with uppercase + 0.7px letter spacing.
   - Border radius: Sharp 4px on buttons & inputs (`rounded-md`); soft 16px on cards & containers (`rounded-xl`).
   - Signature Gestures: 45° HP Electric Blue chevrons flanking hero cards; Soft Lift shadow (`0 2px 8px rgba(26,26,26,0.08)`).
   - Section rhythm: Utility strip (#1a1a1a) -> Top nav (#ffffff) -> White hero/body -> Cloud band (#f7f7f7) -> Fog band (#e8e8e8) -> Ink closing slab (#1a1a1a) -> 5-column Ink footer (#1a1a1a).
2. Detail the Conversion Funnel Components:
   - Above-the-fold specs: Metallurgical badges (UNS, W.Nr., ASTM/ASME, NACE MR0175), stock readiness pill, direct RFQ action.
   - WhatsApp Click-to-Chat: Dynamic pre-filled URL (`https://wa.me/919892244451?text=...`) with alloy grade, product form, quantity.
   - RFQ Modal: Native dialog element, multi-line Bill of Quantities (BOQ) text/upload, zero heavy JS libraries.
   - Trust Strip: ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC guarantee, TPI badges (BV, TÜV India, Lloyd's, EIL, DNV, SGS).
3. Detail 5-Column High-Intent Footer:
   - Col 1: Brand & Trust, Registered Office (Kataria Mansion, SVP Rd, Opera House, Mumbai 400 004), Godown details, ISO info.
   - Col 2: High Nickel Alloys links.
   - Col 3: Stainless Steel & Products links.
   - Col 4: Technical Resources (ASME B16.5, Pipe schedules, Weight formulas, MTC 3.1).
   - Col 5: Global Logistics & Contact (+91 22 6743 8356, +91 98922 44451, sales@bhansalimetals.com, JNPT Nhava Sheva dispatch).
   - Bottom bar: ISO, PED 2014/68/EU, IBR, copyright, sitemap.
4. Schema.org JSON-LD definitions for Organization, Product, AggregateOffer, BreadcrumbList, FAQPage.

## Output
Write your comprehensive design system specification and component blueprints to `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\handoff.md` and send a completion message to the orchestrator.

## 2026-09-10T16:42:40Z
You are explorer_survey_3.
Your working directory is c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3.
Read your instructions in c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\DISPATCH.md.
Mandatory: Read c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md and c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md first.
Analyze the HP Electric Blue design system: colors, typography (Forma DJR Micro / Inter fallback), 2-tier border radius (4px sharp buttons/inputs, 16px soft cards), 45° blue chevrons, Soft Lift shadows, section rhythm, and components.
Blueprint the conversion funnel: above-the-fold metallurgical badges, WhatsApp click-to-chat with dynamic pre-filled text, native dialog RFQ modal with multi-line BOQ text/upload, trust strip with ISO 9001:2015 and TPI inspection stamps (BV, TÜV, Lloyd's, EIL, DNV, SGS), and the 5-column closing dark slab footer.
Write your detailed design system blueprint to c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3\handoff.md and report back via send_message to the orchestrator.
