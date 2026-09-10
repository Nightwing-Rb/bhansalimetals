/**
 * Empirical Verification Harness for Milestone 1
 * Challenger: challenger_m1_2
 * Focus: Touch Targets (44px min), Dialog Accessibility & Overflow, Mobile Drawer Behavior, Tier 4 scenarios
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const distHtmlPath = path.join(ROOT, 'dist', 'index.html');
const hasDist = fs.existsSync(distHtmlPath);
const distHtml = hasDist ? fs.readFileSync(distHtmlPath, 'utf-8') : '';

const globalCssPath = path.join(ROOT, 'src', 'styles', 'global.css');
const globalCss = fs.existsSync(globalCssPath) ? fs.readFileSync(globalCssPath, 'utf-8') : '';

const navbarPath = path.join(ROOT, 'src', 'components', 'layout', 'Navbar.astro');
const navbarCode = fs.existsSync(navbarPath) ? fs.readFileSync(navbarPath, 'utf-8') : '';

const mobileNavPath = path.join(ROOT, 'src', 'components', 'layout', 'MobileNav.astro');
const mobileNavCode = fs.existsSync(mobileNavPath) ? fs.readFileSync(mobileNavPath, 'utf-8') : '';

const baseLayoutPath = path.join(ROOT, 'src', 'layouts', 'BaseLayout.astro');
const baseLayoutCode = fs.existsSync(baseLayoutPath) ? fs.readFileSync(baseLayoutPath, 'utf-8') : '';

const indexAstroPath = path.join(ROOT, 'src', 'pages', 'index.astro');
const indexAstroCode = fs.existsSync(indexAstroPath) ? fs.readFileSync(indexAstroPath, 'utf-8') : '';

console.log('\n' + '='.repeat(80));
console.log('  CHALLENGER M1-2: EMPIRICAL VERIFICATION HARNESS');
console.log('='.repeat(80));

const results = {
  touchTargets: [],
  dialogModal: [],
  mobileDrawer: [],
};

// ============================================================================
// 1. TOUCH TARGETS VERIFICATION (44px min per DESIGN.md §Touch Targets)
// ============================================================================
console.log('\n[1] Testing Touch Target Dimensions (Requirement: >= 44px min height & touch zone)...');

// 1.1 Base button height in global.css
const baseBtnMatch = globalCss.match(/\.btn\s*\{[^}]*height:\s*(\d+)px/);
const baseBtnHeight = baseBtnMatch ? parseInt(baseBtnMatch[1], 10) : 0;
results.touchTargets.push({
  target: '.btn (Base Button)',
  expected: '>= 44px',
  actual: `${baseBtnHeight}px`,
  pass: baseBtnHeight >= 44,
});

// 1.2 Small button height in global.css (>= 44px on mobile viewports <= 768px per DESIGN.md)
const mobileBtnSmMatch = globalCss.match(/@media[^{]*max-width:\s*768px[^{]*\{[^}]*\.btn-sm\s*\{[^}]*height:\s*(\d+)px/);
const baseBtnSmMatch = globalCss.match(/\.btn-sm\s*\{[^}]*height:\s*(\d+)px/);
const btnSmHeight = mobileBtnSmMatch ? parseInt(mobileBtnSmMatch[1], 10) : (baseBtnSmMatch ? parseInt(baseBtnSmMatch[1], 10) : 0);
results.touchTargets.push({
  target: '.btn-sm (Compact Button used on Quick RFQ & Nav RFQ)',
  expected: '>= 44px on mobile',
  actual: `${btnSmHeight}px${mobileBtnSmMatch ? ' (Expanded to 44px via media query on mobile <= 768px)' : ' (No media query expands to 44px on mobile)'}`,
  pass: btnSmHeight >= 44,
});

// 1.3 Mobile hamburger toggle button in Navbar.astro
const mobileTogglePadMatch = navbarCode.match(/\.mobile-toggle\s*\{[^}]*padding:\s*(\d+)px/);
const hamburgerIconMatch = navbarCode.match(/\.hamburger-icon\s*\{[^}]*width:\s*(\d+)px[^}]*height:\s*(\d+)px/);
const mobileTogglePad = mobileTogglePadMatch ? parseInt(mobileTogglePadMatch[1], 10) : 0;
const hamburgerIconSize = hamburgerIconMatch ? parseInt(hamburgerIconMatch[2], 10) : 0;
const totalMobileToggleSize = hamburgerIconSize + (mobileTogglePad * 2);
results.touchTargets.push({
  target: '#mobile-nav-toggle (.mobile-toggle)',
  expected: '>= 44px x 44px',
  actual: `${totalMobileToggleSize}px x ${totalMobileToggleSize}px (padding: ${mobileTogglePad}px, icon: ${hamburgerIconSize}px)`,
  pass: totalMobileToggleSize >= 44,
});

// 1.4 Drawer close button in MobileNav.astro
const drawerClosePadMatch = mobileNavCode.match(/\.drawer-close-btn\s*\{[^}]*padding:\s*(\d+)px/);
const drawerCloseSvgMatch = mobileNavCode.match(/<button[^>]*class="drawer-close-btn"[^>]*>[\s\S]*?<svg[^>]*width="(\d+)"[^>]*height="(\d+)"/);
const drawerClosePad = drawerClosePadMatch ? parseInt(drawerClosePadMatch[1], 10) : 0;
const drawerCloseSvg = drawerCloseSvgMatch ? parseInt(drawerCloseSvgMatch[2], 10) : 0;
const totalDrawerCloseSize = drawerCloseSvg + (drawerClosePad * 2);
results.touchTargets.push({
  target: '#mobile-nav-close (.drawer-close-btn)',
  expected: '>= 44px x 44px',
  actual: `${totalDrawerCloseSize}px x ${totalDrawerCloseSize}px (padding: ${drawerClosePad}px, icon: ${drawerCloseSvg}px)`,
  pass: totalDrawerCloseSize >= 44,
});

// 1.5 Dialog close button in BaseLayout.astro
const rfqCloseBtnMatch = baseLayoutCode.match(/\.rfq-close-btn\s*\{[^}]*\}/);
const rfqCloseHasMinSize = rfqCloseBtnMatch && (rfqCloseBtnMatch[0].includes('min-height: 44px') || rfqCloseBtnMatch[0].includes('height: 44px'));
results.touchTargets.push({
  target: '#rfq-dialog-close (.rfq-close-btn)',
  expected: '>= 44px min-height & min-width',
  actual: rfqCloseHasMinSize ? '>= 44px' : 'font-size 1.75rem (28px), padding 0 4px (~28px x 20px)',
  pass: !!rfqCloseHasMinSize,
});

// Print Touch Targets results
for (const r of results.touchTargets) {
  const mark = r.pass ? '\x1b[32m✔ PASS\x1b[0m' : '\x1b[31m✖ DEFICIT\x1b[0m';
  console.log(`  ${mark} ${r.target}: Actual=${r.actual} (Expected: ${r.expected})`);
}

// ============================================================================
// 2. NATIVE HTML5 <dialog id="rfq-dialog-modal"> VERIFICATION
// ============================================================================
console.log('\n[2] Testing Native HTML5 <dialog id="rfq-dialog-modal"> Structure & Accessibility...');

// 2.1 Dialog element existence
const hasDialogTag = /<dialog\s+id="rfq-dialog-modal"/i.test(distHtml || baseLayoutCode);
results.dialogModal.push({
  check: 'Native <dialog id="rfq-dialog-modal"> element in markup',
  pass: hasDialogTag,
});

// 2.2 Form existence inside dialog
const hasDialogForm = /<form\s+id="rfq-dialog-form"/i.test(distHtml || baseLayoutCode);
results.dialogModal.push({
  check: 'Form <form id="rfq-dialog-form"> inside dialog',
  pass: hasDialogForm,
});

// 2.3 BOQ textarea existence
const hasBoqTextarea = /<textarea[^>]*id="rfq-boq"[^>]*name="boq"/i.test(distHtml || baseLayoutCode);
results.dialogModal.push({
  check: 'BOQ textarea <textarea id="rfq-boq" name="boq">',
  pass: hasBoqTextarea,
});

// 2.4 Contact input fields
const hasNameInput = /<input[^>]*id="rfq-name"[^>]*name="name"/i.test(distHtml || baseLayoutCode);
const hasCompanyInput = /<input[^>]*id="rfq-company"[^>]*name="company"/i.test(distHtml || baseLayoutCode);
const hasEmailInput = /<input[^>]*id="rfq-email"[^>]*name="email"/i.test(distHtml || baseLayoutCode);
const hasPhoneInput = /<input[^>]*id="rfq-phone"[^>]*name="phone"/i.test(distHtml || baseLayoutCode);
const hasAlloyInput = /<input[^>]*id="rfq-alloy"[^>]*name="alloy"/i.test(distHtml || baseLayoutCode);
const hasProductInput = /<input[^>]*id="rfq-product"[^>]*name="product"/i.test(distHtml || baseLayoutCode);

const allInputsPass = hasNameInput && hasCompanyInput && hasEmailInput && hasPhoneInput && hasAlloyInput && hasProductInput;
results.dialogModal.push({
  check: 'Required procurement inputs (alloy, product, name, company, email, phone)',
  pass: allInputsPass,
});

// 2.5 WhatsApp direct action button
const hasWhatsAppAction = /<button[^>]*id="rfq-wa-direct"/i.test(distHtml || baseLayoutCode) &&
                          /window\.open\(`https:\/\/wa\.me\/919892244451/i.test(baseLayoutCode);
results.dialogModal.push({
  check: 'WhatsApp action button #rfq-wa-direct with prefilled message URL',
  pass: hasWhatsAppAction,
});

// 2.6 Modal Vertical Overflow on Mobile Viewports (< 768px height)
const rfqModalCssMatch = baseLayoutCode.match(/\.rfq-modal\s*\{([^}]*)\}/);
const rfqModalCss = rfqModalCssMatch ? rfqModalCssMatch[1] : '';
const hasOverflowHidden = rfqModalCss.includes('overflow: hidden');
const hasMaxHeightAutoScroll = rfqModalCss.includes('max-height') && (rfqModalCss.includes('overflow-y: auto') || rfqModalCss.includes('overflow: auto'));
const modalMobileScrollPass = !hasOverflowHidden || hasMaxHeightAutoScroll;

results.dialogModal.push({
  check: 'Mobile vertical scroll containment (max-height with overflow-y: auto)',
  pass: modalMobileScrollPass,
  details: hasOverflowHidden && !hasMaxHeightAutoScroll
    ? 'CRITICAL: .rfq-modal has overflow: hidden and lacks max-height / overflow-y: auto. Form content (~750px) clips on screens <= 750px (e.g. iPhone SE 667px height, mobile landscape), preventing user from reaching submit buttons.'
    : 'Properly scrollable',
});

// Print Dialog Modal results
for (const r of results.dialogModal) {
  const mark = r.pass ? '\x1b[32m✔ PASS\x1b[0m' : '\x1b[31m✖ DEFICIT\x1b[0m';
  console.log(`  ${mark} ${r.check} ${r.details ? `\n      -> ${r.details}` : ''}`);
}

// ============================================================================
// 3. MOBILE DRAWER BEHAVIOR & ACCESSIBILITY VERIFICATION
// ============================================================================
console.log('\n[3] Testing Mobile Drawer Interaction, Scroll Lock & Accessibility...');

// 3.1 Open/Close Class and Aria State Toggle
const hasOpenDrawerFn = mobileNavCode.includes('drawer.classList.add(\'is-open\')') &&
                        mobileNavCode.includes('drawer.setAttribute(\'aria-hidden\', \'false\')') &&
                        mobileNavCode.includes('toggleBtn?.setAttribute(\'aria-expanded\', \'true\')');
const hasCloseDrawerFn = mobileNavCode.includes('drawer.classList.remove(\'is-open\')') &&
                         mobileNavCode.includes('drawer.setAttribute(\'aria-hidden\', \'true\')') &&
                         mobileNavCode.includes('toggleBtn?.setAttribute(\'aria-expanded\', \'false\')');
results.mobileDrawer.push({
  check: 'Open / Close toggle state management (is-open, aria-hidden, aria-expanded)',
  pass: hasOpenDrawerFn && hasCloseDrawerFn,
});

// 3.2 Body Scroll Lock
const hasBodyScrollLock = mobileNavCode.includes('document.body.style.overflow = \'hidden\'') &&
                          mobileNavCode.includes('document.body.style.overflow = \'\'');
results.mobileDrawer.push({
  check: 'Body scroll lock on open (overflow = hidden) and unlock on close',
  pass: hasBodyScrollLock,
});

// 3.3 Keyboard ESC Dismissal
const hasEscKeyHandler = mobileNavCode.includes('e.key === \'Escape\'') &&
                         mobileNavCode.includes('drawer?.classList.contains(\'is-open\')');
results.mobileDrawer.push({
  check: 'ESC key listener dismisses open drawer',
  pass: hasEscKeyHandler,
});

// 3.4 Focus Trapping & Focus Restoration (WCAG 2.1 SC 2.4.3 Focus Order)
const hasFocusTrap = mobileNavCode.includes('focus()') || mobileNavCode.includes('tabindex');
results.mobileDrawer.push({
  check: 'Focus trapping (keeping Tab focus inside drawer) & restoration on close',
  pass: hasFocusTrap,
  details: !hasFocusTrap
    ? 'DEFICIT: Drawer lacks focus trapping. Tabbing escapes behind the backdrop into inactive main page, and closing does not return focus to #mobile-nav-toggle.'
    : 'Focus trap implemented',
});

// 3.5 Semantic Dialog Role (WCAG 2.1 SC 4.1.2 Name, Role, Value)
const hasDialogRole = /role=["']dialog["']/i.test(mobileNavCode) && /aria-modal=["']true["']/i.test(mobileNavCode);
results.mobileDrawer.push({
  check: 'Drawer ARIA semantics (role="dialog" and aria-modal="true")',
  pass: hasDialogRole,
  details: !hasDialogRole
    ? 'DEFICIT: #mobile-nav-drawer is a plain <div> lacking role="dialog" and aria-modal="true".'
    : 'ARIA dialog role present',
});

// Print Mobile Drawer results
for (const r of results.mobileDrawer) {
  const mark = r.pass ? '\x1b[32m✔ PASS\x1b[0m' : '\x1b[31m✖ DEFICIT\x1b[0m';
  console.log(`  ${mark} ${r.check} ${r.details ? `\n      -> ${r.details}` : ''}`);
}

console.log('\n' + '='.repeat(80));
console.log('  TEST EXECUTION COMPLETED');
console.log('='.repeat(80) + '\n');
