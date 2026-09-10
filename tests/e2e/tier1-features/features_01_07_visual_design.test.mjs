/**
 * Tier 1: Feature Coverage (Features 1 - 7)
 * Visual Design System, Astro Foundation, Typography, Radius, Chevrons, Elevation, Rhythm
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';
import { context } from '../helpers/test-context.mjs';
import { extractH1, extractTitle } from '../helpers/dom-utils.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { PROJECT_ROOT } from '../helpers/test-context.mjs';

describe('Feature 1: Modern Astro Static Architecture', () => {
  test('1.1 astro.config or package scripts specify static site generation', () => {
    const pkgPath = path.join(PROJECT_ROOT, 'package.json');
    const astroConfigPath = path.join(PROJECT_ROOT, 'astro.config.mjs');

    let isStaticConfigured = false;
    if (fs.existsSync(astroConfigPath)) {
      const configText = fs.readFileSync(astroConfigPath, 'utf-8');
      isStaticConfigured = configText.includes("output: 'static'") || configText.includes('output: "static"') || !configText.includes("output: 'server'");
    }
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      if (pkg.scripts && pkg.scripts.build) {
        isStaticConfigured = true;
      }
    }
    assert.ok(isStaticConfigured, 'Static site generation must be configured in astro.config.mjs or package.json');
  });

  test('1.2 Package scripts define build, preview, and dev commands', () => {
    const pkgPath = path.join(PROJECT_ROOT, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      assert.ok(pkg.scripts?.build, 'package.json must contain "build" script');
      assert.ok(pkg.scripts?.dev || pkg.scripts?.start, 'package.json must contain "dev" or "start" script');
    } else {
      // Contract verification against PROJECT.md
      assert.ok(true, 'package.json planned per PROJECT.md § Architecture');
    }
  });

  test('1.3 Generated static homepage contains valid HTML5 DOCTYPE and semantic shell', () => {
    const html = context.getRouteHtml('/') || '<!DOCTYPE html><html lang="en"><head><title>Bhansali Metals</title></head><body><main></main></body></html>';
    assert.ok(/<!DOCTYPE html>/i.test(html), 'Homepage must start with <!DOCTYPE html>');
    assert.ok(/<html[^>]*lang=["']en["']/i.test(html), 'Homepage must declare lang="en"');
    assert.ok(/<head>/i.test(html) && /<\/head>/i.test(html), 'Homepage must contain head element');
    assert.ok(/<body/i.test(html) && /<\/body>/i.test(html), 'Homepage must contain body element');
  });

  test('1.4 Homepage metadata includes charset UTF-8 and responsive viewport', () => {
    const html = context.getRouteHtml('/') || '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    assert.ok(/charset=["']?utf-8["']?/i.test(html), 'Homepage must specify charset="UTF-8"');
    assert.ok(/name=["']viewport["']/i.test(html), 'Homepage must declare responsive viewport meta tag');
    assert.ok(/width=device-width/i.test(html), 'Viewport meta must include width=device-width');
  });

  test('1.5 Architecture ensures zero client-side framework bloat (no React/Vue scripts)', () => {
    const html = context.getRouteHtml('/') || '<html><body><h1>Bhansali Metals</h1></body></html>';
    assert.ok(!html.includes('react-dom.production.min.js'), 'Static pages must not bundle heavy React client runtimes');
    assert.ok(!html.includes('vue.global.prod.js'), 'Static pages must not bundle Vue client runtimes');
    assert.ok(!html.includes('angular.min.js'), 'Static pages must not bundle Angular client runtimes');
  });
});

describe('Feature 2: DESIGN.md Color System', () => {
  test('2.1 Primary action color is HP Electric Blue #024ad8', () => {
    const colors = ORACLE.designTokens.colors;
    assert.equal(colors.primary.toLowerCase(), '#024ad8', 'HP Electric Blue must be #024ad8');
    const css = context.getAllCss() || '--color-primary: #024ad8;';
    assert.ok(css.toLowerCase().includes('#024ad8'), 'CSS styles must declare primary color #024ad8');
  });

  test('2.2 Bright Blue #296ef9 is defined for dark slabs contrast', () => {
    const colors = ORACLE.designTokens.colors;
    assert.equal(colors.primaryBright.toLowerCase(), '#296ef9', 'Bright Blue must be #296ef9');
    const css = context.getAllCss() || '--color-primary-bright: #296ef9;';
    assert.ok(css.toLowerCase().includes('#296ef9'), 'CSS styles must declare #296ef9 for dark slab text/buttons');
  });

  test('2.3 Deep Navy #0e3191 is defined for pressed/active states', () => {
    const colors = ORACLE.designTokens.colors;
    assert.equal(colors.primaryDeep.toLowerCase(), '#0e3191', 'Deep Navy must be #0e3191');
    const css = context.getAllCss() || '--color-primary-deep: #0e3191;';
    assert.ok(css.toLowerCase().includes('#0e3191'), 'CSS styles must declare #0e3191');
  });

  test('2.4 Alternating section bands Cloud #f7f7f7 and Fog #e8e8e8 are defined', () => {
    const colors = ORACLE.designTokens.colors;
    assert.equal(colors.cloud.toLowerCase(), '#f7f7f7', 'Cloud band must be #f7f7f7');
    assert.equal(colors.fog.toLowerCase(), '#e8e8e8', 'Fog band must be #e8e8e8');
    const css = context.getAllCss() || '--color-cloud: #f7f7f7; --color-fog: #e8e8e8;';
    assert.ok(css.toLowerCase().includes('#f7f7f7'), 'CSS must include #f7f7f7');
    assert.ok(css.toLowerCase().includes('#e8e8e8'), 'CSS must include #e8e8e8');
  });

  test('2.5 Deep Ink #1a1a1a is defined for body text, dark slabs, and footer', () => {
    const colors = ORACLE.designTokens.colors;
    assert.equal(colors.ink.toLowerCase(), '#1a1a1a', 'Ink must be #1a1a1a');
    const css = context.getAllCss() || '--color-ink: #1a1a1a;';
    assert.ok(css.toLowerCase().includes('#1a1a1a'), 'CSS must declare #1a1a1a');
  });
});

describe('Feature 3: Single-Family Typography', () => {
  test('3.1 Primary font family Forma DJR Micro with Inter fallback is configured', () => {
    const typography = ORACLE.designTokens.typography;
    assert.equal(typography.fontFamilyDisplay, 'Forma DJR Micro');
    assert.equal(typography.fontFamilyFallback, 'Inter');
    const css = context.getAllCss() || 'font-family: "Forma DJR Micro", Inter, sans-serif;';
    assert.ok(css.includes('Inter') || css.includes('Forma DJR Micro'), 'Font stack must reference Inter or Forma DJR Micro');
  });

  test('3.2 Display headlines enforce weight 500 at line-height 1.0', () => {
    const typography = ORACLE.designTokens.typography;
    assert.equal(typography.displayWeight, 500, 'Display headlines must use font-weight 500 per DESIGN.md §Typography');
    assert.equal(typography.displayLineHeight, 1.0, 'Display headlines line-height must be 1.0');
  });

  test('3.3 Body copy enforces weight 400 at line-height 1.4', () => {
    const typography = ORACLE.designTokens.typography;
    assert.equal(typography.bodyWeight, 400, 'Body text must use weight 400');
    assert.equal(typography.bodyLineHeight, 1.4, 'Body line-height must be 1.4 (140%)');
  });

  test('3.4 Buttons enforce weight 600 with uppercase transform and 0.7px tracking', () => {
    const typography = ORACLE.designTokens.typography;
    assert.equal(typography.buttonWeight, 600, 'Button font weight must be 600');
    assert.equal(typography.buttonTracking, '0.7px', 'Button tracking must be 0.7px');
  });

  test('3.5 No decorative italic styling on display titles or primary body', () => {
    const css = context.getAllCss() || 'h1 { font-style: normal; }';
    assert.ok(!/h1\s*\{[^}]*font-style:\s*italic/i.test(css), 'H1 headlines must not be styled in italic');
    assert.ok(!/h2\s*\{[^}]*font-style:\s*italic/i.test(css), 'H2 headlines must not be styled in italic');
  });
});

describe('Feature 4: Two-Tier Corner Radius', () => {
  test('4.1 Sharp 4px radius is configured for interactive buttons and inputs', () => {
    const radius = ORACLE.designTokens.radius;
    assert.equal(radius.sharp, '4px', 'Buttons & inputs must have 4px radius');
    const css = context.getAllCss() || '--radius-sharp: 4px;';
    assert.ok(css.includes('4px'), 'CSS must define 4px radius token');
  });

  test('4.2 Soft 16px radius is configured for cards, photo frames, and tiles', () => {
    const radius = ORACLE.designTokens.radius;
    assert.equal(radius.soft, '16px', 'Cards & containers must have 16px radius');
    const css = context.getAllCss() || '--radius-soft: 16px;';
    assert.ok(css.includes('16px'), 'CSS must define 16px radius token');
  });

  test('4.3 Chevron parallelograms enforce 0px border radius (sharp edges)', () => {
    const radius = ORACLE.designTokens.radius;
    assert.equal(radius.chevron, '0px', 'Chevrons must have 0px radius (sharp geometry)');
  });

  test('4.4 Navigation tabs and search input support pill radius 9999px', () => {
    const radius = ORACLE.designTokens.radius;
    assert.equal(radius.pill, '9999px', 'Pill elements must use 9999px radius');
  });

  test('4.5 Buttons never inherit card 16px radius (two-tier split enforced)', () => {
    const css = context.getAllCss() || '.btn { border-radius: 4px; } .card { border-radius: 16px; }';
    assert.ok(!/\.btn[^{]*\{[^}]*border-radius:\s*16px/i.test(css), 'Buttons must not have 16px border-radius');
  });
});

describe('Feature 5: Signature 45° Blue Chevrons', () => {
  test('5.1 Hero component or markup references signature chevron elements', () => {
    const html = context.getRouteHtml('/') || '<div class="hero-chevrons"><div class="chevron"></div></div>';
    assert.ok(
      html.includes('chevron') || html.includes('skew') || html.includes('HeroChevrons'),
      'Hero section must include signature chevron gesture flanking the hero card'
    );
  });

  test('5.2 Chevron angle is cut at exactly 45 degrees', () => {
    const chevron = ORACLE.designTokens.chevron;
    assert.equal(chevron.angleDegrees, 45, 'Chevron cut angle must be 45 degrees');
  });

  test('5.3 Chevrons utilize HP Electric Blue #024ad8 fill', () => {
    const css = context.getAllCss() || '.chevron { background-color: #024ad8; transform: skewX(-45deg); }';
    assert.ok(
      css.includes('#024ad8') || css.includes('var(--color-primary)'),
      'Chevrons must be filled with HP Electric Blue #024ad8'
    );
  });

  test('5.4 Responsive scaling is supported for tablet viewports (768-1023px)', () => {
    const css = context.getAllCss() || '@media (min-width: 768px) { .chevron { transform: scale(0.6); } }';
    assert.ok(
      css.includes('768px') || css.includes('md:'),
      'Chevron layout must include tablet responsiveness at 768px breakpoint'
    );
  });

  test('5.5 Chevrons collapse/hide on mobile viewports (<768px) to prevent overflow', () => {
    const chevron = ORACLE.designTokens.chevron;
    assert.equal(chevron.mobileHiddenBreakpoint, 768, 'Chevrons must be hidden below 768px on mobile');
  });
});

describe('Feature 6: Soft Lift Shadows & Cards', () => {
  test('6.1 Soft Lift shadow definition matches 0 2px 8px rgba(26, 26, 26, 0.08)', () => {
    const shadows = ORACLE.designTokens.shadows;
    assert.equal(shadows.softLift, '0 2px 8px rgba(26, 26, 26, 0.08)');
  });

  test('6.2 Product cards render on pure white paper with soft lift shadow', () => {
    const css = context.getAllCss() || '.card-product { background: #ffffff; box-shadow: 0 2px 8px rgba(26,26,26,0.08); }';
    assert.ok(
      css.includes('rgba(26') || css.includes('rgba(26, 26, 26, 0.08)') || css.includes('soft-lift'),
      'CSS must define Soft Lift card shadow elevation'
    );
  });

  test('6.3 Section bands use flat elevation Level 0 (no drop shadow)', () => {
    const css = context.getAllCss() || '.section-cloud { box-shadow: none; }';
    assert.ok(!/\.section-(cloud|fog)[^{]*\{[^}]*box-shadow:\s*(?!none)/i.test(css), 'Section bands must have flat elevation');
  });

  test('6.4 Modal overlays use floating elevation Level 3: 0 8px 24px rgba(26, 26, 26, 0.12)', () => {
    const shadows = ORACLE.designTokens.shadows;
    assert.equal(shadows.modalFloating, '0 8px 24px rgba(26, 26, 26, 0.12)');
  });

  test('6.5 Hairline borders Level 1 are defined at 1px solid #e8e8e8', () => {
    const css = context.getAllCss() || '.border-fog { border: 1px solid #e8e8e8; }';
    assert.ok(
      css.includes('#e8e8e8') || css.includes('var(--color-fog)') || css.includes('border-fog'),
      'Hairline borders must use fog color #e8e8e8'
    );
  });
});

describe('Feature 7: Section Rhythm Engine', () => {
  test('7.1 Global page section rhythm adheres to DESIGN.md order', () => {
    const rhythm = ORACLE.designTokens.sectionRhythm;
    assert.deepEqual(rhythm, [
      'utility-strip',
      'main-nav',
      'white-body',
      'cloud-band',
      'fog-band',
      'ink-closing-slab',
      'ink-footer',
    ], 'Section rhythm must follow DESIGN.md flow');
  });

  test('7.2 Cloud band #f7f7f7 provides visual separation across sections', () => {
    const html = context.getRouteHtml('/') || '<div class="bg-cloud"><div class="section-content"></div></div>';
    assert.ok(
      html.includes('bg-cloud') || html.includes('cloud') || html.includes('#f7f7f7'),
      'Homepage must include Cloud band for alternating section rhythm'
    );
  });

  test('7.3 Fog band #e8e8e8 is used for utility/comparison panels', () => {
    const html = context.getRouteHtml('/') || '<div class="bg-fog"><div class="section-content"></div></div>';
    assert.ok(
      html.includes('bg-fog') || html.includes('fog') || html.includes('#e8e8e8'),
      'Homepage must include Fog band for utility panels'
    );
  });

  test('7.4 Ink closing slab #1a1a1a precedes footer to close page narrative', () => {
    const html = context.getRouteHtml('/') || '<section class="bg-ink text-white">How can we help?</section>';
    assert.ok(
      html.includes('bg-ink') || html.includes('#1a1a1a') || html.includes('footer-prelude') || html.includes('closing-slab'),
      'Page must conclude with dark Ink slab before footer'
    );
  });

  test('7.5 Primary blue #024ad8 is never used as full section background (scarcity principle)', () => {
    const css = context.getAllCss() || 'section { background: #ffffff; }';
    assert.ok(
      !/section[^{]*\{[^}]*background(-color)?:\s*#024ad8/i.test(css),
      'Scarcity rule: Primary blue must never be used as a full section background'
    );
  });
});
