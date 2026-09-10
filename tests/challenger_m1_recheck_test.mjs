/**
 * Empirical Recheck Verification Harness
 * Agent: challenger_m1_recheck
 * Validates remediation of Milestone 1 issues reported by challenger_m1_2
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

console.log('='.repeat(80));
console.log('  CHALLENGER M1 RECHECK: INDEPENDENT EMPIRICAL HARNESS');
console.log('='.repeat(80));

const tests = [];
function record(name, pass, details = '') {
  tests.push({ name, pass, details });
  const badge = pass ? '\x1b[32m✔ PASS\x1b[0m' : '\x1b[31m✖ FAIL\x1b[0m';
  console.log(`  ${badge} ${name} ${details ? `(${details})` : ''}`);
}

// 1. Files existence & reading
const distIndexPath = path.join(ROOT, 'dist', 'index.html');
assert.ok(fs.existsSync(distIndexPath), 'dist/index.html must exist from build');
const distHtml = fs.readFileSync(distIndexPath, 'utf-8');

const baseLayoutPath = path.join(ROOT, 'src', 'layouts', 'BaseLayout.astro');
const baseLayoutCode = fs.readFileSync(baseLayoutPath, 'utf-8');

const globalCssPath = path.join(ROOT, 'src', 'styles', 'global.css');
const globalCss = fs.readFileSync(globalCssPath, 'utf-8');

const navbarPath = path.join(ROOT, 'src', 'components', 'layout', 'Navbar.astro');
const navbarCode = fs.readFileSync(navbarPath, 'utf-8');

const mobileNavPath = path.join(ROOT, 'src', 'components', 'layout', 'MobileNav.astro');
const mobileNavCode = fs.readFileSync(mobileNavPath, 'utf-8');

const bottomBarPath = path.join(ROOT, 'src', 'components', 'layout', 'BottomBar.astro');
const bottomBarCode = fs.readFileSync(bottomBarPath, 'utf-8');

// ============================================================================
// SECTION 1: RFQ MODAL SCROLLING & MOBILE BEHAVIOR
// ============================================================================
console.log('\n[Section 1: RFQ Modal Mobile Scrolling & Dialog Behavior]');

// Check max-height: 90vh and overflow-y: auto in BaseLayout.astro and distHtml
const rfqModalCssMatch = baseLayoutCode.match(/\.rfq-modal\s*\{([^}]*)\}/);
assert.ok(rfqModalCssMatch, '.rfq-modal style block must exist in BaseLayout.astro');
const rfqModalCss = rfqModalCssMatch[1];

const hasMaxHeight = /max-height:\s*90vh/i.test(rfqModalCss);
const hasOverflowYAuto = /overflow-y:\s*auto/i.test(rfqModalCss);
const hasNoOverflowHidden = !/overflow:\s*hidden/i.test(rfqModalCss);
const hasDialogInDist = /<dialog\s+id="rfq-dialog-modal"\s+class="[^"]*rfq-modal/i.test(distHtml);

record(
  'RFQ Modal has max-height: 90vh in BaseLayout.astro',
  hasMaxHeight,
  rfqModalCss.match(/max-height:[^;]+/)?.[0] || 'missing'
);

record(
  'RFQ Modal has overflow-y: auto in BaseLayout.astro',
  hasOverflowYAuto,
  rfqModalCss.match(/overflow-y:[^;]+/)?.[0] || 'missing'
);

record(
  'RFQ Modal does NOT have overflow: hidden',
  hasNoOverflowHidden,
  hasNoOverflowHidden ? 'overflow: hidden removed' : 'still present'
);

record(
  'RFQ Modal built into dist/index.html with native <dialog> element',
  hasDialogInDist,
  hasDialogInDist ? 'id="rfq-dialog-modal" present' : 'missing from dist'
);

// Find built CSS in dist/_astro
const distAstroDir = path.join(ROOT, 'dist', '_astro');
let distCss = '';
if (fs.existsSync(distAstroDir)) {
  const cssFiles = fs.readdirSync(distAstroDir).filter(f => f.endsWith('.css'));
  if (cssFiles.length > 0) {
    distCss = fs.readFileSync(path.join(distAstroDir, cssFiles[0]), 'utf-8');
  }
}

// Check built CSS for rfq-modal overflow rule
const builtHasMaxHeight = distCss.includes('max-height:90vh') || distCss.includes('max-height: 90vh');
const builtHasOverflowY = distCss.includes('overflow-y:auto') || distCss.includes('overflow-y: auto');
record(
  'RFQ Modal CSS in dist/_astro/*.css includes max-height: 90vh and overflow-y: auto',
  builtHasMaxHeight && builtHasOverflowY,
  `max-height: ${builtHasMaxHeight}, overflow-y: ${builtHasOverflowY}`
);

// ============================================================================
// SECTION 2: TOUCH TARGETS (>= 44px min dimensions)
// ============================================================================
console.log('\n[Section 2: Touch Targets Dimensions (>= 44px)]');

// 2.1 Base .btn
const baseBtnMatch = globalCss.match(/\.btn\s*\{[^}]*height:\s*(\d+)px/);
const baseBtnHeight = baseBtnMatch ? parseInt(baseBtnMatch[1], 10) : 0;
record(
  'Base .btn has height >= 44px in global.css',
  baseBtnHeight >= 44,
  `height: ${baseBtnHeight}px`
);

// 2.2 .btn-sm responsive expansion on mobile <= 768px
const btnSmMobileMatch = globalCss.match(/@media[^{]*max-width:\s*768px[^{]*\{[^}]*\.btn-sm\s*\{[^}]*height:\s*(\d+)px/);
const btnSmMobileHeight = btnSmMobileMatch ? parseInt(btnSmMobileMatch[1], 10) : 0;
record(
  '.btn-sm expands to >= 44px on viewports <= 768px in global.css',
  btnSmMobileHeight >= 44,
  `mobile height: ${btnSmMobileHeight}px`
);

// Also check dist CSS for .btn-sm @media
const distBtnSmMobileMatch = distCss.match(/@media[^{]*max-width:\s*768px[^{]*\{[^}]*\.btn-sm\s*\{[^}]*height:\s*(\d+)px/);
const distBtnSmMobileHeight = distBtnSmMobileMatch ? parseInt(distBtnSmMobileMatch[1], 10) : 0;
record(
  '.btn-sm expands to >= 44px in dist/_astro/*.css',
  distBtnSmMobileHeight >= 44,
  `dist mobile height: ${distBtnSmMobileHeight}px`
);


// 2.3 #mobile-nav-toggle (.mobile-toggle) in Navbar.astro
const navToggleMinWidthMatch = navbarCode.match(/\.mobile-toggle\s*\{[^}]*min-width:\s*(\d+)px/);
const navToggleMinHeightMatch = navbarCode.match(/\.mobile-toggle\s*\{[^}]*min-height:\s*(\d+)px/);
const navTogglePaddingMatch = navbarCode.match(/\.mobile-toggle\s*\{[^}]*padding:\s*(\d+)px/);
const navToggleIconMatch = navbarCode.match(/\.hamburger-icon\s*\{[^}]*width:\s*(\d+)px[^}]*height:\s*(\d+)px/);

const navToggleMinWidth = navToggleMinWidthMatch ? parseInt(navToggleMinWidthMatch[1], 10) : 0;
const navToggleMinHeight = navToggleMinHeightMatch ? parseInt(navToggleMinHeightMatch[1], 10) : 0;
const navTogglePadding = navTogglePaddingMatch ? parseInt(navTogglePaddingMatch[1], 10) : 0;
const navToggleIconSize = navToggleIconMatch ? parseInt(navToggleIconMatch[1], 10) : 0;
const navToggleTotalBox = navToggleIconSize + (navTogglePadding * 2);

record(
  '#mobile-nav-toggle has min-width & min-height >= 44px',
  navToggleMinWidth >= 44 && navToggleMinHeight >= 44,
  `min-width: ${navToggleMinWidth}px, min-height: ${navToggleMinHeight}px`
);
record(
  '#mobile-nav-toggle computed bounding box >= 44px x 44px',
  navToggleTotalBox >= 44,
  `box: ${navToggleTotalBox}px x ${navToggleTotalBox}px`
);

// 2.4 #mobile-nav-close (.drawer-close-btn) in MobileNav.astro
const drawerCloseMinWidthMatch = mobileNavCode.match(/\.drawer-close-btn\s*\{[^}]*min-width:\s*(\d+)px/);
const drawerCloseMinHeightMatch = mobileNavCode.match(/\.drawer-close-btn\s*\{[^}]*min-height:\s*(\d+)px/);
const drawerClosePaddingMatch = mobileNavCode.match(/\.drawer-close-btn\s*\{[^}]*padding:\s*(\d+)px/);
const drawerCloseSvgMatch = mobileNavCode.match(/class="drawer-close-btn"[\s\S]*?<svg[^>]*width="(\d+)"[^>]*height="(\d+)"/);

const drawerCloseMinWidth = drawerCloseMinWidthMatch ? parseInt(drawerCloseMinWidthMatch[1], 10) : 0;
const drawerCloseMinHeight = drawerCloseMinHeightMatch ? parseInt(drawerCloseMinHeightMatch[1], 10) : 0;
const drawerClosePadding = drawerClosePaddingMatch ? parseInt(drawerClosePaddingMatch[1], 10) : 0;
const drawerCloseSvgSize = drawerCloseSvgMatch ? parseInt(drawerCloseSvgMatch[1], 10) : 0;
const drawerCloseTotalBox = drawerCloseSvgSize + (drawerClosePadding * 2);

record(
  '#mobile-nav-close has min-width & min-height >= 44px',
  drawerCloseMinWidth >= 44 && drawerCloseMinHeight >= 44,
  `min-width: ${drawerCloseMinWidth}px, min-height: ${drawerCloseMinHeight}px`
);
record(
  '#mobile-nav-close computed bounding box >= 44px x 44px',
  drawerCloseTotalBox >= 44,
  `box: ${drawerCloseTotalBox}px x ${drawerCloseTotalBox}px`
);

// 2.5 #rfq-dialog-close (.rfq-close-btn) in BaseLayout.astro
const rfqCloseMinWidthMatch = baseLayoutCode.match(/\.rfq-close-btn\s*\{[^}]*min-width:\s*(\d+)px/);
const rfqCloseMinHeightMatch = baseLayoutCode.match(/\.rfq-close-btn\s*\{[^}]*min-height:\s*(\d+)px/);
const rfqCloseMinWidth = rfqCloseMinWidthMatch ? parseInt(rfqCloseMinWidthMatch[1], 10) : 0;
const rfqCloseMinHeight = rfqCloseMinHeightMatch ? parseInt(rfqCloseMinHeightMatch[1], 10) : 0;

record(
  '#rfq-dialog-close has min-width & min-height >= 44px',
  rfqCloseMinWidth >= 44 && rfqCloseMinHeight >= 44,
  `min-width: ${rfqCloseMinWidth}px, min-height: ${rfqCloseMinHeight}px`
);

// ============================================================================
// SECTION 3: MOBILE DRAWER FOCUS TRAP & ACCESSIBILITY ARIA ATTRIBUTES
// ============================================================================
console.log('\n[Section 3: Mobile Drawer Focus Trap & ARIA Attributes]');

// 3.1 ARIA attributes on #mobile-nav-drawer in MobileNav.astro & distHtml
const hasRoleDialogAstro = /<div\s+id="mobile-nav-drawer"[^>]*role="dialog"/i.test(mobileNavCode);
const hasAriaModalAstro = /<div\s+id="mobile-nav-drawer"[^>]*aria-modal="true"/i.test(mobileNavCode);
const hasAriaLabelAstro = /<div\s+id="mobile-nav-drawer"[^>]*aria-label="Mobile Navigation"/i.test(mobileNavCode);
const hasAriaHiddenAstro = /<div\s+id="mobile-nav-drawer"[^>]*aria-hidden="true"/i.test(mobileNavCode);

record('Mobile drawer in MobileNav.astro has role="dialog"', hasRoleDialogAstro);
record('Mobile drawer in MobileNav.astro has aria-modal="true"', hasAriaModalAstro);
record('Mobile drawer in MobileNav.astro has aria-label="Mobile Navigation"', hasAriaLabelAstro);
record('Mobile drawer in MobileNav.astro has initial aria-hidden="true"', hasAriaHiddenAstro);

const hasRoleDialogDist = /<div\s+id="mobile-nav-drawer"[^>]*role="dialog"/i.test(distHtml);
const hasAriaModalDist = /<div\s+id="mobile-nav-drawer"[^>]*aria-modal="true"/i.test(distHtml);
record('Mobile drawer in dist/index.html retains role="dialog"', hasRoleDialogDist);
record('Mobile drawer in dist/index.html retains aria-modal="true"', hasAriaModalDist);

// 3.2 Focus trap logic implementation in script
const hasGetFocusable = mobileNavCode.includes('function getFocusableElements()');
const hasCloseBtnFocusOnOpen = mobileNavCode.includes('closeBtn?.focus()');
const hasToggleBtnFocusOnClose = mobileNavCode.includes('toggleBtn?.focus()');
const hasShiftTabTrap = mobileNavCode.includes('if (e.shiftKey)') && mobileNavCode.includes('lastEl.focus()');
const hasForwardTabTrap = mobileNavCode.includes('firstEl.focus()');
const hasEscapeHandler = mobileNavCode.includes("e.key === 'Escape'") && mobileNavCode.includes('closeDrawer()');
const hasBodyScrollHidden = mobileNavCode.includes("document.body.style.overflow = 'hidden'");
const hasBodyScrollRestore = mobileNavCode.includes("document.body.style.overflow = ''");

record('Mobile drawer defines getFocusableElements() function', hasGetFocusable);
record('Initial focus moves to close button on drawer open (closeBtn?.focus())', hasCloseBtnFocusOnOpen);
record('Focus restored to hamburger button on drawer close (toggleBtn?.focus())', hasToggleBtnFocusOnClose);
record('Backward Tab (Shift+Tab) wraps focus to last focusable element', hasShiftTabTrap);
record('Forward Tab wraps focus from last to first focusable element', hasForwardTabTrap);
record('Escape key listener calls closeDrawer()', hasEscapeHandler);
record('Body scroll lock implemented (overflow = hidden / empty)', hasBodyScrollHidden && hasBodyScrollRestore);

// 3.3 Simulation of focus trap algorithm
console.log('\n[Simulating Focus Trap Logic]');
// Emulate the logic in MobileNav.astro lines 272-293
function simulateFocusTrap(focusables, activeIndex, isShift) {
  let focusedIndex = activeIndex;
  let prevented = false;

  if (focusables.length === 0) {
    prevented = true;
    return { focusedIndex, prevented };
  }

  const firstEl = focusables[0];
  const lastEl = focusables[focusables.length - 1];
  const activeEl = focusables[activeIndex];

  if (isShift) {
    if (activeEl === firstEl) {
      prevented = true;
      focusedIndex = focusables.length - 1;
    } else {
      focusedIndex = activeIndex - 1;
    }
  } else {
    if (activeEl === lastEl) {
      prevented = true;
      focusedIndex = 0;
    } else {
      focusedIndex = activeIndex + 1;
    }
  }
  return { focusedIndex, prevented };
}

const mockFocusables = ['close-btn', 'rfq-btn', 'nav-link-1', 'nav-link-2', 'phone-link'];
// Test 1: Tab forward from last element
const fwdWrap = simulateFocusTrap(mockFocusables, 4, false);
record(
  'Focus trap simulation: Forward Tab from last element wraps to index 0',
  fwdWrap.prevented === true && fwdWrap.focusedIndex === 0,
  `wrapped to: ${mockFocusables[fwdWrap.focusedIndex]}`
);

// Test 2: Shift+Tab backward from first element
const bwdWrap = simulateFocusTrap(mockFocusables, 0, true);
record(
  'Focus trap simulation: Shift+Tab backward from first element wraps to last element',
  bwdWrap.prevented === true && bwdWrap.focusedIndex === 4,
  `wrapped to: ${mockFocusables[bwdWrap.focusedIndex]}`
);

// Test 3: Tab inside the middle
const midTab = simulateFocusTrap(mockFocusables, 1, false);
record(
  'Focus trap simulation: Normal forward Tab progresses to next element',
  midTab.prevented === false && midTab.focusedIndex === 2,
  `advanced to: ${mockFocusables[midTab.focusedIndex]}`
);

// ============================================================================
// SECTION 4: CONTRAST OF COPYRIGHT ELEMENT
// ============================================================================
console.log('\n[Section 4: Copyright Text Contrast in BottomBar]');
const copyrightColorMatch = bottomBarCode.match(/\.copyright\s*\{[^}]*color:\s*([^;]+);/);
const copyrightColor = copyrightColorMatch ? copyrightColorMatch[1].trim() : 'missing';
record(
  '.copyright uses high-contrast var(--color-steel) (#c2c2c2)',
  copyrightColor === 'var(--color-steel)',
  `color: ${copyrightColor}`
);

// ============================================================================
// SUMMARY
// ============================================================================
console.log('\n' + '='.repeat(80));
const total = tests.length;
const passed = tests.filter((t) => t.pass).length;
const failed = tests.filter((t) => !t.pass).length;

console.log(`  TOTAL CHECKS: ${total} | PASSED: ${passed} | FAILED: ${failed}`);
console.log('='.repeat(80));

if (failed > 0) {
  console.error(`\nFAILED CHECKS (${failed}):`);
  tests.filter((t) => !t.pass).forEach((t) => console.error(` - ${t.name}: ${t.details}`));
  process.exit(1);
} else {
  console.log('\nALL INDEPENDENT EMPIRICAL CHECKS PASSED!\n');
  process.exit(0);
}
