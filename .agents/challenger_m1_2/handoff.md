# Milestone 1 Empirical Challenge Report: Interactive & Scenario Verification

**Agent**: `challenger_m1_2`  
**Role**: Empirical Challenger (Critic & Specialist)  
**Working Directory**: `c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m1_2`  
**Target Project**: `c:\AllStuff\Coding\bhansalimetals-local`  
**Timestamp**: `2026-09-10T17:10:00Z`  
**Parent**: Project Orchestrator (`bbdc7135-7e29-4a7f-b522-f18a400345b1`)  
**Explicit Verdict**: **`REQUEST_CHANGES`**

---

## 1. Observation

Direct observations and measurements conducted across codebase, CSS layout tokens, DOM structure, and test executions:

### 1.1 Native HTML5 Dialog Modal: Mobile Vertical Overflow Clipping
- **File**: `src/layouts/BaseLayout.astro:184-194`
- **Verbatim Code**:
  ```css
  .rfq-modal {
    margin: auto;
    border: 1px solid var(--color-fog);
    border-radius: var(--radius-soft);
    padding: 0;
    max-width: 620px;
    width: 92vw;
    box-shadow: var(--shadow-floating-modal);
    background-color: var(--color-canvas);
    overflow: hidden;
  }
  ```
- **Modal Content Sizing**:
  - `src/layouts/BaseLayout.astro:250-254` switches form rows to a single column on viewports `<= 580px`:
    ```css
    @media (max-width: 580px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }
    ```
  - Header: ~70px.
  - Form Fields: 6 text inputs (`alloy`, `product`, `name`, `company`, `email`, `phone`) at 44px height + 18px label + 4px gap + 16px row gap = 492px.
  - BOQ Textarea (`rows="3"`): 18px label + 4px gap + 72px textarea + 16px gap = 110px.
  - Form Actions: 2 wrapped buttons ("Submit RFQ to Sales Desk" and "Send via WhatsApp") = 96px.
  - Notice & Form Padding: 20px notice + 48px padding = 68px.
  - **Total unconstrained dialog height on mobile**: ~836px.
- **Deficit**:
  Because `.rfq-modal` declares `overflow: hidden;` without `max-height` (e.g. `max-height: 90vh;`) and without `overflow-y: auto;`, on any device with viewport height below 840px (iPhone SE 667px, iPhone 12/13/14 at 844px minus browser UI ~720px, Android 640px, or any landscape device at ~375-450px), the bottom 100px–400px of the modal is clipped outside the viewport. The user **cannot scroll** to reach or tap the submit or WhatsApp action buttons.

### 1.2 Touch Targets: Interactive Elements Below 44px Minimum
- **Reference**: `DESIGN.md` lines 320-323:
  > "Every interactive element clears 44×44px on mobile. `button-primary` at 44px height + 24px horizontal padding meets WCAG-AAA touch target... Sticky cart/sign-in icons in the top nav use 44×44 invisible hit boxes around their visible 24×24 glyph."
- **Deficit 1 — `.btn-sm` (36px height)**:
  - `src/styles/global.css:316-321`:
    ```css
    .btn-sm {
      height: 36px;
      padding: 0 1rem;
      font-size: 0.7875rem; /* ~12.6px */
      letter-spacing: 0.5px;
    }
    ```
  - Applied to:
    - Navbar Instant RFQ button (`src/components/layout/Navbar.astro:62`):
      `<Button variant="primary" href="/rfq" size="sm" class="rfq-nav-btn">`
    - Homepage Quick RFQ buttons (`src/pages/index.astro:223-231`):
      `<button type="button" class="btn btn-outline btn-sm" data-open-rfq data-product={product.title}>Quick RFQ</button>`
  - Result: Height is **36px** on mobile viewports (8px below 44px threshold). No media query exists to expand `.btn-sm` to 44px on touch screens.
- **Deficit 2 — `#mobile-nav-toggle` (38px × 38px)**:
  - `src/components/layout/Navbar.astro:257-275`:
    ```css
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      padding: 6px;
      cursor: pointer;
      color: var(--color-ink);
      border-radius: var(--radius-sharp);
    }
    .hamburger-icon {
      width: 26px;
      height: 26px;
    }
    ```
  - Total bounding box: `26px + (2 × 6px) = 38px × 38px` (6px below 44px minimum).
- **Deficit 3 — `#mobile-nav-close` (36px × 36px)**:
  - `src/components/layout/MobileNav.astro:120-127`:
    ```css
    .drawer-close-btn {
      background: none;
      border: none;
      padding: 6px;
      color: var(--color-ink);
      cursor: pointer;
      border-radius: var(--radius-sharp);
    }
    ```
  - SVG dimensions: `width="24" height="24"`.
  - Total bounding box: `24px + (2 × 6px) = 36px × 36px` (8px below 44px minimum).
- **Deficit 4 — `#rfq-dialog-close` (~28px × 20px)**:
  - `src/layouts/BaseLayout.astro:223-231`:
    ```css
    .rfq-close-btn {
      background: none;
      border: none;
      color: var(--color-steel);
      font-size: 1.75rem;
      line-height: 1;
      cursor: pointer;
      padding: 0 4px;
    }
    ```
  - Font size is 1.75rem (28px) with 4px padding. Total touch box is ~28px high by ~20px wide (below 44px minimum on both axes).

### 1.3 Mobile Drawer Accessibility Deficits
- **File**: `src/components/layout/MobileNav.astro:7-18, 218-251`
- **Observed Behavior**:
  1. **Focus Trapping**: When opened, the drawer does not move focus into the panel, nor does it intercept the `Tab` key. Pressing `Tab` moves focus to hidden/inactive interactive elements on `#main-content` behind the backdrop.
  2. **Focus Restoration**: Dismissing the drawer via ESC key, close button, or backdrop click fails to return focus to `#mobile-nav-toggle`.
  3. **ARIA Roles**: Element `#mobile-nav-drawer` is declared as `<div id="mobile-nav-drawer" class="mobile-drawer" aria-hidden="true">`. It lacks `role="dialog"` and `aria-modal="true"`, preventing screen readers from recognizing it as a modal dialog.
  4. **Masked Test in Boundary Suite**: In `tests/e2e/tier2-boundaries/boundaries_08_12_nav_trust.test.mjs:55-57`, `test('B9.3 Mobile drawer focus trap keeps focus within drawer container when open')` is an inert placeholder:
     ```javascript
     test('B9.3 Mobile drawer focus trap keeps focus within drawer container when open', () => {
       assert.ok(true, 'Focus trap accessibility pattern verified');
     });
     ```
     This masked the absence of focus trapping.

### 1.4 Tier 4 Real-World Scenario Test Results
- **Command**: `node tests/e2e/runner.mjs --tier=4`
- **Output**:
  ```
  ✔ Step 1: Metallurgical validation of Super Duplex 2507 (UNS S32750)
  ✔ Step 2: NACE MR0175 / ISO 15156 Sour Service Compliance Verification
  ✔ Step 3: Dimensional check for 6" Class 1500# RTJ Flange
  ✔ Step 4: Third-Party Witness Verification (DNV / Lloyd’s Register)
  ✔ Step 5: End-to-end RFQ Generation with Same-Day MTC from Kalamboli Stockyard
  ✔ Step 1: Inconel 625 metallurgical verification (UNS N06625 / W.Nr. 2.4856)
  ✔ Step 2: Chemical composition limits verification for wet chlorine/hydrochloric exposure
  ✔ Step 3: Pipe Schedule 80 Dimensional lookup for 4" NB (ASME B36.19M / B36.10M)
  ✔ Step 4: Nickel Alloy Pipe Theoretical Weight calculation for 300 meters order
  ✔ Step 5: Multi-line BOQ formatting and EN 10204 3.1 MTC requirement assertion
  ✔ Step 1: Metallurgical verification of Monel 400 (UNS N04400 / W.Nr. 2.4360)
  ✔ Step 2: Natural nickel-copper ratio verification for marine bio-fouling resistance
  ✔ Step 3: Fastener specification configuration for M24 naval stud bolts
  ✔ Step 4: Bureau Veritas (BV) Marine Class Inspection validation
  ✔ Step 5: Logistics review: Opera House sales office and Kalamboli packaging
  ✔ Step 1: Hastelloy C-276 metallurgy check (UNS N10276 / W.Nr. 2.4819)
  ✔ Step 2: Chemical composition limits: Mo 15.0-17.0%, W 3.0-4.5%, Fe 4.0-7.0%
  ✔ Step 3: Buttweld Fittings dimensional conformity to ASME B16.9
  ✔ Step 4: Engineers India Limited (EIL) and SGS inspection agency capability
  ✔ Step 5: Turnaround BOQ paste payload with immediate WhatsApp escalation
  ✔ Step 1: Metallurgical verification of Incoloy 800 (UNS N08800 / W.Nr. 1.4876)
  ✔ Step 2: Chemical balance validation: Ni 30.0-35.0%, Cr 19.0-23.0%, Fe balance (min 39.5%)
  ✔ Step 3: Plate dimension calculation for 8 reformer baffle plates
  ✔ Step 4: TÜV India inspection capability and PED 2014/68/EU Annex I compliance
  ✔ Step 5: RFQ submission with Mukand dealership credential and Kalamboli godown delivery
  ```
- **Evaluation**: All 5 scenarios (25 steps) executed and passed with exit code 0.

### 1.5 Automated Verification Harness Execution
- **Command**: `node tests/challenger_m1_2_empirical_test.mjs`
- **Output**:
  - Touch Targets: 1 PASS (`.btn` at 44px), 4 DEFICITS (`.btn-sm` at 36px, `#mobile-nav-toggle` at 38px, `#mobile-nav-close` at 36px, `#rfq-dialog-close` at ~28px).
  - Dialog Modal: 5 PASS (tag, form, BOQ textarea, contact inputs, WhatsApp action), 1 CRITICAL DEFICIT (`.rfq-modal` vertical overflow clipping).
  - Mobile Drawer: 3 PASS (toggle state, scroll lock, ESC key), 2 DEFICITS (focus trap & restoration, ARIA semantics).

---

## 2. Logic Chain

1. **Premise 1 (Conversion Funnel Priority)**: ORIGINAL_REQUEST §R4 and PROJECT.md §Acceptance Criteria mandate that the instant RFQ modal must function properly on mobile devices.
2. **Observation 1**: The modal markup in `BaseLayout.astro` generates ~836px of vertical content on single-column mobile viewports (`<= 580px`), while `.rfq-modal` has `overflow: hidden;` and lacks `max-height` and `overflow-y: auto`.
3. **Inference 1**: On devices with viewport heights under 840px, the submit and WhatsApp buttons are clipped below the viewport fold and are physically unreachable because scrolling is disabled. This is a critical conversion funnel blocker.
4. **Premise 2 (Touch Target Specification)**: DESIGN.md §Touch Targets specifies that every interactive element clears 44×44px on mobile viewports.
5. **Observation 2**: `.btn-sm` (36px), `#mobile-nav-toggle` (38px), `#mobile-nav-close` (36px), and `#rfq-dialog-close` (28px) have computed hitboxes below 44px, with no responsive CSS rules bumping them on mobile.
6. **Inference 2**: Interactive controls fail the 44px minimum touch target requirement mandated by DESIGN.md and DISPATCH.md.
7. **Premise 3 (Accessibility Standard)**: A slide-over mobile drawer that overlays the entire viewport must satisfy WCAG 2.1 modal dialog patterns (role, focus management).
8. **Observation 3**: `MobileNav.astro` contains no focus trap, no focus restoration, and no `role="dialog"`.
9. **Inference 3**: Keyboard and assistive tech users can lose focus into the hidden page beneath the backdrop, failing accessible mobile navigation criteria.

---

## 3. Caveats

- **Desktop Experience**: On desktop displays (>=1024px, 1080p+), the RFQ modal renders within ~520px height (due to 2-column input rows) and does not clip. The overflow bug manifests specifically on mobile viewports and landscape orientations.
- **Form Submission Action**: Form submission currently triggers a client-side `alert()` confirmation. Full server-side backend / API processing is slated for Milestone 4.
- **No implementation code modified**: In compliance with Challenger constraints, no source code in `src/` was modified. All verification was conducted through empirical testing harnesses and static inspection.

---

## 4. Conclusion & Verdict

### Final Assessment: **`REQUEST_CHANGES`**

Milestone 1 has established an excellent Astro static foundation, clean design tokens, high-quality vector SVGs, and successfully passed all 5 Tier 4 scenario tests. However, Milestone 1 cannot be approved in its current state due to 1 Critical conversion defect, 1 High touch-target compliance defect, and 1 Medium accessibility defect:

1. **[CRITICAL] RFQ Modal Vertical Scroll Failure on Mobile**:
   In `src/layouts/BaseLayout.astro`, `.rfq-modal` has `overflow: hidden;` and lacks `max-height: 90vh; overflow-y: auto;`. On mobile viewports (<840px height), the form submit button and WhatsApp button are clipped off-screen and unreachable.
2. **[HIGH] Touch Target Violations (< 44px)**:
   - In `src/styles/global.css`, `.btn-sm` is 36px high.
   - In `src/components/layout/Navbar.astro`, `.mobile-toggle` is 38px × 38px.
   - In `src/components/layout/MobileNav.astro`, `.drawer-close-btn` is 36px × 36px.
   - In `src/layouts/BaseLayout.astro`, `.rfq-close-btn` is ~28px × 20px.
3. **[MEDIUM] Mobile Drawer Focus Trap & ARIA Semantics**:
   In `src/components/layout/MobileNav.astro`, add `role="dialog"`, `aria-modal="true"`, focus trapping within the drawer when open, and focus restoration to `#mobile-nav-toggle` on close.

### Actionable Remediation Plan for `worker_m1`:
1. **Fix RFQ Modal Mobile Scroll (`src/layouts/BaseLayout.astro`)**:
   Update `.rfq-modal`:
   ```css
   .rfq-modal {
     margin: auto;
     border: 1px solid var(--color-fog);
     border-radius: var(--radius-soft);
     padding: 0;
     max-width: 620px;
     width: 92vw;
     max-height: 90vh;
     overflow-y: auto;
     box-shadow: var(--shadow-floating-modal);
     background-color: var(--color-canvas);
   }
   ```
2. **Fix Touch Targets to Clear 44px Minimum**:
   - In `src/styles/global.css`:
     ```css
     @media (max-width: 768px) {
       .btn-sm {
         height: 44px;
         padding: 0 1.25rem;
       }
     }
     ```
   - In `src/components/layout/Navbar.astro`:
     ```css
     .mobile-toggle {
       min-width: 44px;
       min-height: 44px;
       display: none;
       align-items: center;
       justify-content: center;
       padding: 8px;
     }
     ```
   - In `src/components/layout/MobileNav.astro`:
     ```css
     .drawer-close-btn {
       min-width: 44px;
       min-height: 44px;
       display: inline-flex;
       align-items: center;
       justify-content: center;
       padding: 8px;
     }
     ```
   - In `src/layouts/BaseLayout.astro`:
     ```css
     .rfq-close-btn {
       min-width: 44px;
       min-height: 44px;
       display: inline-flex;
       align-items: center;
       justify-content: center;
     }
     ```
3. **Enhance Mobile Drawer Accessibility (`src/components/layout/MobileNav.astro`)**:
   - Add `role="dialog"` and `aria-modal="true"` to `#mobile-nav-drawer`.
   - In `openDrawer()`, call `closeBtn.focus()`.
   - In `closeDrawer()`, call `toggleBtn?.focus()`.
   - Add `keydown` handler trapping `Tab` / `Shift+Tab` within `drawer-panel`.

---

## 5. Verification Method

To independently verify the findings and confirm when changes have resolved the issues:

1. **Run Challenger Automated Verification**:
   ```bash
   node tests/challenger_m1_2_empirical_test.mjs
   ```
   *Current Result*: 4 Touch Target deficits, 1 Dialog Modal overflow deficit, 2 Mobile Drawer deficits.  
   *Target Result after remediation*: 100% PASS across all categories.

2. **Run Tier 4 Scenarios**:
   ```bash
   node tests/e2e/runner.mjs --tier=4
   ```
   *Result*: 5 scenarios (25 steps) PASS.

3. **Invalidation Condition**:
   If `.rfq-modal` contains `max-height: 90vh; overflow-y: auto;` (or equivalent) and all buttons/toggles have computed bounds >= 44px on viewport widths <= 768px, this `REQUEST_CHANGES` verdict is resolved.
