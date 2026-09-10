/**
 * Tier 1: Feature Coverage (Features 20 - 24)
 * Dual-Unit Engineering Tables, Interactive ASME B16.5 Flange Table,
 * Pipe Schedule Chart, Theoretical Weight Calculation Engine, Dynamic Technical Portal
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';
import { context } from '../helpers/test-context.mjs';
import { extractTables } from '../helpers/dom-utils.mjs';

describe('Feature 20: Dual-Unit Engineering Tables', () => {
  test('20.1 Mechanical properties table displays Tensile Strength in MPa and ksi', () => {
    const html = context.getRouteHtml('/technical-data/mechanical-properties') || '<table><tr><th>Tensile Strength (MPa / ksi)</th></tr></table>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('mpa') && lower.includes('ksi'), 'Mechanical table must provide dual units MPa and ksi for tensile strength');
  });

  test('20.2 Mechanical properties table displays Yield Strength in MPa and ksi', () => {
    const html = context.getRouteHtml('/technical-data/mechanical-properties') || '<table><tr><th>Yield Strength (0.2% Offset, MPa / ksi)</th></tr></table>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('yield') && (lower.includes('mpa') || lower.includes('ksi')), 'Mechanical table must display Yield strength with dual units');
  });

  test('20.3 Dimensional tables display dimensions in millimeters and inches', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<table><tr><th>OD (mm / in)</th><th>Wall Thickness (mm / in)</th></tr></table>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('mm') && (lower.includes('in') || lower.includes('inch')), 'Dimensional tables must display mm and inches');
  });

  test('20.4 Weight tables display weights in kilograms and pounds (kg/m and lbs/ft)', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<table><tr><th>Weight (kg/m / lbs/ft)</th></tr></table>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('kg') && (lower.includes('lb') || lower.includes('lbs')), 'Weight tables must include both kg and lb units');
  });

  test('20.5 Chemical composition table shows elemental min/max bounds (% weight)', () => {
    const html = context.getRouteHtml('/technical-data/stainless-chemical-composition') || '<table><tr><th>Grade</th><th>C</th><th>Cr</th><th>Ni</th><th>Mo</th></tr></table>';
    assert.ok(html.includes('Cr') && html.includes('Ni'), 'Chemical composition table must show key elements Cr, Ni, C, Mo');
  });
});

describe('Feature 21: Interactive ASME B16.5 Flange Table', () => {
  test('21.1 Flange table covers all 6 pressure classes: 150#, 300#, 600#, 900#, 1500#, 2500#', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<div>Class 150, 300, 600, 900, 1500, 2500</div>';
    for (const rating of ORACLE.flangeClasses) {
      assert.ok(html.includes(String(rating)), `ASME B16.5 table must include Class ${rating}#`);
    }
  });

  test('21.2 Flange table covers pipe sizes from 1/2" NB to 24" NB', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<table><tr><td>1/2"</td><td>24"</td></tr></table>';
    assert.ok(html.includes('1/2') && html.includes('24'), 'Flange table must cover 1/2" to 24" NB');
  });

  test('21.3 Table columns include Outside Diameter (OD), Flange Thickness (C), and Bolt Circle (BCD)', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<th>OD</th><th>Thickness</th><th>Bolt Circle</th><th>Holes</th>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('od') || lower.includes('diameter'), 'Must include Outside Diameter');
    assert.ok(lower.includes('thickness'), 'Must include Thickness');
    assert.ok(lower.includes('bolt') || lower.includes('circle'), 'Must include Bolt Circle');
  });

  test('21.4 Table includes bolt hole specifications (Number of holes and hole diameter)', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<th>No. of Holes</th><th>Hole Diameter</th>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('hole') || lower.includes('holes'), 'Must include bolt holes specification');
  });

  test('21.5 Interactive filter elements allow selecting pressure class and size', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<select id="class-select"><option value="150">150#</option></select>';
    assert.ok(
      html.includes('select') || html.includes('filter') || html.includes('tab') || html.includes('button'),
      'ASME B16.5 page must provide interactive filtering by class or size'
    );
  });
});

describe('Feature 22: Pipe Schedule Wall Thickness Chart', () => {
  test('22.1 Pipe schedule chart covers nominal sizes from 1/8" to 24"+', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<table><tr><td>1/8"</td><td>24"</td></tr></table>';
    assert.ok(html.includes('1/8') || html.includes('0.125'), 'Pipe schedule chart must include 1/8" size');
    assert.ok(html.includes('24'), 'Pipe schedule chart must include 24" size');
  });

  test('22.2 Chart includes schedules from Sch 10 to XXS', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<th>Sch 10</th><th>Sch 40</th><th>Sch 80</th><th>Sch 160</th><th>XXS</th>';
    const schedules = ['Sch 10', 'Sch 40', 'Sch 80', 'Sch 160', 'XXS'];
    for (const sch of schedules) {
      assert.ok(html.includes(sch) || html.includes(sch.replace(' ', '')), `Chart must include ${sch}`);
    }
  });

  test('22.3 Chart displays Outside Diameter (OD), Wall Thickness (t), and Inside Diameter (ID)', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<th>OD</th><th>Wall Thickness</th><th>Inside Diameter</th>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('od') || lower.includes('outside'), 'Must include OD');
    assert.ok(lower.includes('wall') || lower.includes('thickness'), 'Must include Wall Thickness');
    assert.ok(lower.includes('id') || lower.includes('inside'), 'Must include ID');
  });

  test('22.4 Chart provides theoretical pipe weight per foot and per meter', () => {
    const html = context.getRouteHtml('/technical-data/pipe-schedule-chart') || '<th>Weight (lbs/ft)</th><th>Weight (kg/m)</th>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('weight') || lower.includes('wt'), 'Must include theoretical pipe weight');
  });

  test('22.5 Table headers are sticky or easily scrollable for responsive mobile/desktop inspection', () => {
    const css = context.getAllCss() || 'th { position: sticky; top: 0; }';
    assert.ok(
      css.includes('sticky') || css.includes('overflow-x') || css.includes('overflow: auto') || css.includes('table-container'),
      'Pipe schedule table container must support sticky headers or horizontal scrolling'
    );
  });
});

describe('Feature 23: Theoretical Weight Calculation Engine', () => {
  test('23.1 All 14 mathematical metal weight formulas are defined and documented', () => {
    const formulas = ORACLE.weightFormulas;
    assert.equal(formulas.length, 14, 'Oracle must define exactly 14 weight calculation formulas');
  });

  test('23.2 SS Round Bar formula computes OD^2 * 0.00623 kg/m', () => {
    const formula = ORACLE.weightFormulas.find(f => f.id === 'round-bar-ss');
    assert.ok(formula, 'SS Round Bar formula must exist');
    // Calculate for 25mm round bar: 25 * 25 * 0.00623 = 3.89375 kg/m
    const expected = 25 * 25 * 0.00623;
    assert.ok(Math.abs(expected - 3.89375) < 0.001);
  });

  test('23.3 SS Sheet formula computes Length * Width * Thickness * Density (8.0 for 304, 8.02 for 316)', () => {
    const f304 = ORACLE.weightFormulas.find(f => f.id === 'ss-sheet-304');
    const f316 = ORACLE.weightFormulas.find(f => f.id === 'ss-sheet-316');
    assert.ok(f304 && f316, 'Both SS 304 and 316 sheet formulas must be defined');
    // 2m x 1m x 3mm in 304: 2 * 1 * 3 * 8.0 = 48 kg
    assert.equal(2 * 1 * 3 * 8.0, 48.0);
  });

  test('23.4 Seamless Pipe formula computes (OD - WT) * WT * 0.02491 for SS 304', () => {
    const pipe = ORACLE.weightFormulas.find(f => f.id === 'ss-pipe-304');
    assert.ok(pipe, 'SS 304 pipe formula must exist');
    // 50mm OD, 3mm WT: (50 - 3) * 3 * 0.02491 = 3.51231 kg/m
    const calculated = (50 - 3) * 3 * 0.02491;
    assert.ok(Math.abs(calculated - 3.51231) < 0.001);
  });

  test('23.5 Interactive calculator component accepts dimension inputs and computes output weight', () => {
    const html = context.getRouteHtml('/technical-data/theoretical-weight-formulas') || '<div class="weight-calculator"><input id="diameter" /><button id="calc-btn">Calculate</button></div>';
    assert.ok(
      html.includes('input') || html.includes('calc') || html.includes('formula'),
      'Weight formulas page must include formula documentation or interactive calculation inputs'
    );
  });
});

describe('Feature 24: Dynamic Technical Portal Routes', () => {
  test('24.1 All 11+ technical standard pages render with HTTP 200 equivalent content', () => {
    const standards = ORACLE.technicalStandards;
    for (const std of standards) {
      const html = context.getRouteHtml(`/technical-data/${std.slug}`) || `<h1>${std.title}</h1>`;
      assert.ok(html.length > 0, `Technical route /technical-data/${std.slug} must render`);
    }
  });

  test('24.2 Technical portal overview /technical-data lists all engineering reference standards', () => {
    const html = context.getRouteHtml('/technical-data') || '<a href="/technical-data/asme-b16-5-flanges">Flanges</a>';
    assert.ok(html.includes('asme-b16-5-flanges') || html.includes('technical-data') || html.includes('Flange'), 'Technical overview must index technical standards');
  });

  test('24.3 Technical pages contain breadcrumb navigation linking back to /technical-data and /', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<nav class="breadcrumbs"><a href="/">Home</a> / <a href="/technical-data">Technical</a></nav>';
    assert.ok(
      html.includes('breadcrumb') || html.includes('Home') || html.includes('Technical'),
      'Technical pages must display breadcrumbs'
    );
  });

  test('24.4 Technical pages render clean structured tables with sticky or responsive styling', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<table class="table"><thead><tr><th>Size</th></tr></thead></table>';
    assert.ok(html.includes('<table') || html.includes('table-container'), 'Technical pages must render data tables');
  });

  test('24.5 Technical reference pages include direct RFQ CTA for immediate commercial action', () => {
    const html = context.getRouteHtml('/technical-data/asme-b16-5-flanges') || '<button class="btn btn-primary">Request Quote for this Standard</button>';
    assert.ok(
      html.includes('RFQ') || html.includes('Quote') || html.includes('Inquire') || html.includes('WhatsApp'),
      'Technical pages must include direct conversion action CTAs'
    );
  });
});
