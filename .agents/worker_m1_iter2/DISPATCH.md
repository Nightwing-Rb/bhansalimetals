# Task Dispatch: Milestone 1 Remediation Worker (Iteration 2)

## Identity
- Role: Milestone 1 Remediation Worker
- Working Directory: c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1_iter2
- Parent: Project Orchestrator (orchestrator_r1)

## Mission
Remediate the 3 specific defects identified during the Milestone 1 Gate by `challenger_m1_2`:
1. RFQ Modal vertical scroll clipping on mobile viewports.
2. Touch targets below 44px minimum.
3. Mobile drawer accessibility & focus trapping.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Mandatory Inputs to Read
1. `c:\AllStuff\Coding\bhansalimetals-local\.agents\ORIGINAL_REQUEST.md` (Read first)
2. `c:\AllStuff\Coding\bhansalimetals-local\PROJECT.md`
3. `c:\AllStuff\Coding\bhansalimetals-local\DESIGN.md`
4. `c:\AllStuff\Coding\bhansalimetals-local\.agents\challenger_m1_2\handoff.md` (Defect evidence and recommended fixes)

## Exact Remediation Steps
1. **Fix RFQ Modal Mobile Scroll (`src/layouts/BaseLayout.astro`)**:
   In `<style>`, update `.rfq-modal`:
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
   .rfq-close-btn {
     min-width: 44px;
     min-height: 44px;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     background: none;
     border: none;
     color: var(--color-steel);
     font-size: 1.75rem;
     cursor: pointer;
     border-radius: var(--radius-sharp);
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
       cursor: pointer;
       background: none;
       border: none;
       color: var(--color-ink);
       border-radius: var(--radius-sharp);
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
       background: none;
       border: none;
       color: var(--color-ink);
       cursor: pointer;
       border-radius: var(--radius-sharp);
     }
     ```
3. **Enhance Mobile Drawer Accessibility (`src/components/layout/MobileNav.astro`)**:
   - Add `role="dialog"` and `aria-modal="true"` to `#mobile-nav-drawer`.
   - In the client script:
     - On open: set focus to `closeBtn.focus()`.
     - On close: restore focus to `#mobile-nav-toggle`.
     - Add `keydown` listener trapping `Tab` and `Shift+Tab` within `#mobile-nav-drawer`.
4. **Contrast Polish (`src/components/layout/BottomBar.astro`)**:
   - Update `.copyright` color to `var(--color-steel)` (`#c2c2c2`) for optimal dark-slab contrast (10.57:1).
5. **Verification Commands**:
   - Run `node tests/challenger_m1_2_empirical_test.mjs` — ensure all tests PASS.
   - Run `npx astro check` — ensure 0 errors.
   - Run `npm run build` — ensure exit code 0.
   - Run `node tests/e2e/runner.mjs` — ensure 100% pass.

## Output
Write your completion report to `c:\AllStuff\Coding\bhansalimetals-local\.agents\worker_m1_iter2\handoff.md` and report back via send_message.
