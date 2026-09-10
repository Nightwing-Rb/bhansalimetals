# Bhansali Metals E2E Test Infrastructure & Methodology

## 1. Test Architecture Overview

The Bhansali Metals E2E test suite provides an ultra-fast, zero-dependency, opaque-box, requirement-driven verification engine for the modernized Bhansali Metals static portal. Built natively on Node.js v24 (`node:test`, `node:assert`, `node:http`, and `node:fs`), it executes in under 2 seconds without requiring bulky headless browsers, third-party test runnners, or network access.

```
tests/e2e/
├── runner.mjs                          # CLI Runner & Aggregated Reporter
├── helpers/
│   ├── oracle-data.mjs                 # Authoritative specifications from requirements
│   ├── dom-utils.mjs                   # High-speed static HTML/DOM parser & query engine
│   ├── assertions.mjs                  # Specialized domain assertions (tokens, radius, schemas)
│   ├── http-server.mjs                 # Ephemeral static HTTP server for live route testing
│   └── test-context.mjs                # Multi-phase target resolver (dist/ vs src/ contracts)
├── tier1-features/                     # Tier 1: 35 Features x >=5 tests (>=175 tests)
│   ├── f01_astro_architecture.test.mjs
│   ├── ...
│   └── f35_adversarial_hardening.test.mjs
├── tier2-boundaries/                   # Tier 2: 35 Boundary suites x >=5 tests (>=175 tests)
│   ├── b01_astro_boundaries.test.mjs
│   ├── ...
│   └── b35_adversarial_injection_boundaries.test.mjs
├── tier3-pairwise/                     # Tier 3: Cross-Feature Pairwise Combinations
│   └── pairwise_combinations.test.mjs
└── tier4-scenarios/                    # Tier 4: Real-World EPC Procurement Workloads
    ├── scenario_01_offshore_superduplex_flange.test.mjs
    ├── scenario_02_chemical_inconel625_pipe.test.mjs
    ├── scenario_03_marine_monel400_fasteners.test.mjs
    ├── scenario_04_fertilizer_hastelloy_fittings.test.mjs
    └── scenario_05_furnace_incoloy800_plates.test.mjs
```

---

## 2. The 4-Tier Testing Methodology

The suite implements a strict 4-tier testing hierarchy guaranteeing deep requirement validation:

### Tier 1: Isolated Feature Coverage
- **Scope**: Every single feature from `PROJECT.md § Feature Inventory` (Features 1 through 35) is tested in isolation.
- **Rule**: Minimum 5 tests per feature (35 * 5 = 175 tests minimum).
- **Focus**:
  - Route existence and HTTP 200 responses.
  - Semantic HTML headings (H1, H2, H3 hierarchy).
  - HP Electric Blue design token conformity (`#024ad8`, `#296ef9`, `#1a1a1a`, `#ffffff`).
  - Corner radius enforcement (4px sharp buttons/inputs, 16px soft cards, 0px chevrons).
  - 45° angular chevron geometry and responsive collapse.
  - Contact details (Kataria Mansion Opera House, Kalamboli godown, +91 9892244451).
  - Trust strip & inspection stamps (ISO 9001:2015 QAIC/IN/1103-A, EN 10204 3.1 MTC, 6 TPI agencies).
  - Metallurgical datasets across Inconel, Monel, Hastelloy, Nickel, SS, and Duplex.
  - Complete elimination of scraped competitor copy ("Regal Sales Corp") and hotlinks (`manansteel.com`).
  - 14 engineering formulas, ASME B16.5 tables, and pipe schedule wall thickness charts.
  - Dynamic WhatsApp URLs and native HTML5 `<dialog>` RFQ modal.
  - All 38 legacy 1-to-1 redirections and XML sitemaps.

### Tier 2: Boundary & Corner Cases
- **Scope**: Boundary, extreme condition, and error handling for all 35 features.
- **Rule**: Minimum 5 tests per feature (35 * 5 = 175 tests minimum).
- **Focus**:
  - Extreme pressure classes (ASME Class 150# vs 2500#).
  - Extreme pipe diameters (1/8" to 36") and wall schedules (Sch 10 to XXS).
  - Extreme chemical limits (min/max bounds, trace elements, carbon limits <=0.02% in Nickel 201).
  - Empty, whitespace-only, and negative inputs in engineering weight calculators.
  - Special character escaping in WhatsApp query strings (`"`, `#`, `&`, `+`, non-ASCII).
  - Mobile viewport responsiveness (45° chevrons hidden below 768px, mobile drawer active).
  - Malformed URL parameters and legacy redirect loop prevention.
  - Dialog modal escape key dismissal, focus trap semantics, and anti-spam honeypot isolation.

### Tier 3: Cross-Feature Combinations (Pairwise Coverage)
- **Scope**: Interoperability between disparate modules and subsystems.
- **Focus**:
  - Inconel 625 Flanges + ASME B16.5 Dimensions + WhatsApp Pre-fill + MTC 3.1.
  - Hastelloy C-276 Pipe + Schedule Chart + RFQ BOQ Modal + Chemical Bounds.
  - Monel 400 Round Bar + Weight Calculator + Kalamboli Stock Pill + Dual Units.
  - Super Duplex 2507 Plates + Dual-Unit Composition + NACE MR0175 + TPI Badges.
  - Stainless Steel 316L Fittings + Buttweld Dimensions + MTC 3.1 + Email RFQ.

### Tier 4: Real-World EPC Procurement Workloads
- **Scope**: End-to-end user workflows simulating actual global EPC engineers and procurement officers:
  - **Scenario 1: Offshore Platform Super Duplex 2507 High-Pressure Flanges**:
    Procurement engineer searches for 6" Class 1500 RTJ flanges in Super Duplex (UNS S32750), verifies NACE MR0175 compliance, confirms bolt circle dimensions, and generates instant WhatsApp inquiry.
  - **Scenario 2: Chemical Refinery Inconel 625 Seamless Pipe Schedule 80**:
    Process piping lead checks wall thickness for 4" Sch 80 Inconel 625 pipe, computes theoretical linear weight, reviews EN 10204 3.1 certification guarantees, and pastes multi-line BOQ into RFQ modal.
  - **Scenario 3: Marine Hardware Monel 400 Fasteners & Round Bars**:
    Marine contractor verifies seawater corrosion resistance of Monel 400, selects M24 stud bolts, inspects Bureau Veritas third-party testing badge, and reviews Opera House Mumbai dispatch details.
  - **Scenario 4: Fertilizer Plant Hastelloy C-276 Buttweld Fittings BOQ**:
    Maintenance director specifies Concentric Reducers & 90° Elbows in Hastelloy C-276 for hot hydrochloric acid service, verifies dimensional conformity, and requests same-day quote from Kalamboli stockyard.
  - **Scenario 5: High-Temperature Furnace Incoloy 800 Plates**:
    Petrochemical furnace designer inspects Incoloy 800 (Ni-Fe-Cr) plate thicknesses, validates TÜV India third-party inspection capability, and verifies dual-unit mechanical properties.

---

## 3. Test Runner & Execution

### Running the Complete Suite
```bash
node tests/e2e/runner.mjs
```

### Filtering by Tier
```bash
# Run Tier 1 (Isolated Feature Coverage)
node tests/e2e/runner.mjs --tier=1

# Run Tier 2 (Boundary & Corner Cases)
node tests/e2e/runner.mjs --tier=2

# Run Tier 3 (Pairwise Cross-Feature Combinations)
node tests/e2e/runner.mjs --tier=3

# Run Tier 4 (Real-World EPC Scenarios)
node tests/e2e/runner.mjs --tier=4
```

### Filtering by Feature
```bash
# Run tests for Feature 12 (Trust Strip & Inspection Badges)
node tests/e2e/runner.mjs --feature=12

# Run tests matching a keyword
node tests/e2e/runner.mjs --match=flange
```

### Test Runner Capabilities
1. **Multi-Target Context Resolution**:
   - When `dist/` is present, tests run directly against the built production artifacts, asserting real static HTML, CSS custom properties, and serving pages over an ephemeral HTTP test server.
   - When running against source contracts (`src/` / `public/`), tests validate Content Collection Zod schemas, JSON datasets, route templates, vector assets, and design token files.
2. **Deterministic Output & Zero Flakiness**:
   - Zero timers or race conditions.
   - Self-contained, isolated state per test.
   - Independent ephemeral ports for HTTP tests.
3. **Exit Code Discipline**:
   - Exits with `0` on 100% test pass.
   - Exits with `1` on any failure, providing precise stack traces, expected vs actual values, and file line references.

---

## 4. Authoritative Oracle Sources
Every test derives its expected values directly from:
1. `ORIGINAL_REQUEST.md`: Core system requirements R1-R6 and acceptance criteria.
2. `PROJECT.md`: Feature inventory, interface contracts, and code layout.
3. `DESIGN.md`: HP Electric Blue tokens, typography hierarchy, corner radius rules, chevrons, and section rhythm.
4. Legacy Survey (`spec_miner_survey_1` & `explorer_survey_3`): 38 legacy URLs, ASME B16.5 flange data, pipe schedule tables, 14 weight calculation equations, and metallurgical chemical bounds.
