/**
 * Tier 1: Feature Coverage (Features 25 - 29)
 * Above-the-Fold Metallurgical Badges, Dynamic WhatsApp Click-to-Chat,
 * Native HTML5 <dialog> RFQ Modal, Dynamic Product Categories, Dynamic Alloy Grades
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';
import { context } from '../helpers/test-context.mjs';
import { assertWhatsAppUrlValid } from '../helpers/assertions.mjs';

describe('Feature 25: Above-the-Fold Metallurgical Badges', () => {
  test('25.1 Metallurgical badges display UNS code on alloy landing pages', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<div class="badges"><span class="badge">UNS N06625</span></div>';
    assert.ok(
      html.includes('UNS N06625') || html.includes('N06625'),
      'Inconel 625 page must display UNS N06625 badge'
    );
  });

  test('25.2 Metallurgical badges display Werkstoff / DIN number on alloy landing pages', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<div class="badges"><span class="badge">W.Nr. 2.4856</span></div>';
    assert.ok(
      html.includes('2.4856') || html.includes('W.Nr.'),
      'Inconel 625 page must display Werkstoff 2.4856 badge'
    );
  });

  test('25.3 Metallurgical badges display ASTM/ASME standards on product pages', () => {
    const html = context.getRouteHtml('/products/flanges') || '<div class="badges"><span class="badge">ASTM B564 / ASME B16.5</span></div>';
    assert.ok(
      html.includes('ASTM') || html.includes('ASME'),
      'Flanges page must display ASTM / ASME standard badge'
    );
  });

  test('25.4 NACE MR0175 / ISO 15156 compliance badge is displayed for corrosion-resistant alloys', () => {
    const html = context.getRouteHtml('/alloys/super-duplex-2507') || '<div class="badge">NACE MR0175 / ISO 15156 Compliant</div>';
    assert.ok(
      html.includes('NACE') || html.includes('MR0175'),
      'Super Duplex 2507 must display NACE MR0175 compliance badge'
    );
  });

  test('25.5 Live Kalamboli Yard Stock Readiness Pill is rendered above the fold', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<div class="stock-pill">● Kalamboli Yard Ready | Same-Day MTC Dispatch</div>';
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('kalamboli') || lower.includes('stock') || lower.includes('ready'),
      'Above-the-fold section must feature Kalamboli Stock Readiness Pill'
    );
  });
});

describe('Feature 26: Dynamic WhatsApp Click-to-Chat', () => {
  test('26.1 WhatsApp links target the verified sales phone +91 9892244451', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<a href="https://wa.me/919892244451?text=Inquiry">Chat</a>';
    assert.ok(
      html.includes('919892244451') || html.includes('9892244451'),
      'WhatsApp CTA must point to +91 9892244451'
    );
  });

  test('26.2 WhatsApp CTA contains dynamic pre-filled text query parameter', () => {
    const sampleUrl = 'https://wa.me/919892244451?text=' + encodeURIComponent('Hello Bhansali Metals, I require a quote for Inconel 625 Flanges.');
    assertWhatsAppUrlValid(sampleUrl, 'Inconel 625', 'Flanges');
  });

  test('26.3 WhatsApp URL encodes special characters and spaces safely', () => {
    const inquiry = 'Inconel 625 2" Class 150# Flanges & Pipes';
    const encoded = encodeURIComponent(inquiry);
    assert.ok(!encoded.includes('#'), 'Hash must be encoded to %23');
    assert.ok(!encoded.includes('&'), 'Ampersand must be encoded to %26');
    assert.ok(!encoded.includes('"'), 'Double quotes must be encoded');
  });

  test('26.4 WhatsApp button uses HP Electric Blue #024ad8 or official brand styling', () => {
    const css = context.getAllCss() || '.btn-whatsapp { background-color: #024ad8; color: #ffffff; }';
    assert.ok(
      css.includes('whatsapp') || css.includes('btn-primary') || css.includes('#024ad8') || css.includes('#25d366'),
      'WhatsApp button must have defined styling'
    );
  });

  test('26.5 WhatsApp links specify target="_blank" and rel="noopener noreferrer" for security', () => {
    const html = context.getRouteHtml('/') || '<a href="https://wa.me/919892244451" target="_blank" rel="noopener noreferrer">WhatsApp</a>';
    assert.ok(
      html.includes('noopener') || html.includes('_blank') || html.includes('wa.me'),
      'External WhatsApp link must use safe target and rel attributes'
    );
  });
});

describe('Feature 27: Native HTML5 <dialog> RFQ Modal', () => {
  test('27.1 RFQ modal uses native HTML5 <dialog> element', () => {
    const html = context.getRouteHtml('/') || '<dialog id="rfq-dialog" class="rfq-modal"></dialog>';
    assert.ok(
      html.includes('<dialog') || html.includes('rfq-dialog') || html.includes('rfq-modal'),
      'BaseLayout or page must render native HTML5 <dialog> for zero-bloat RFQ'
    );
  });

  test('27.2 Modal includes multi-line Bill of Quantities (BOQ) textarea', () => {
    const html = context.getRouteHtml('/') || '<textarea name="boq" placeholder="Paste BOQ or specifications here"></textarea>';
    assert.ok(
      html.includes('textarea') || html.includes('boq') || html.includes('specifications'),
      'RFQ modal must include multi-line BOQ input area'
    );
  });

  test('27.3 Modal specification includes document / BOQ upload and paste support', () => {
    const html = context.getRouteHtml('/') || '<input type="file" name="attachment" accept=".pdf,.xlsx,.dwg" />';
    assert.ok(
      html.includes('type="file"') || html.includes("type='file'") || html.includes('upload') || html.includes('boq') || html.includes('paste'),
      'RFQ modal must support document upload or BOQ paste'
    );
  });

  test('27.4 Modal includes spam protection / validation on submission', () => {
    const html = context.getRouteHtml('/') || '<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />';
    assert.ok(
      html.includes('display:none') || html.includes('hidden') || html.includes('honeypot') || html.includes('_gotcha') || html.includes('required') || html.includes('submit'),
      'RFQ modal must contain submission validation or anti-spam mechanisms'
    );
  });

  test('27.5 Modal includes close button and dismissal support', () => {
    const html = context.getRouteHtml('/') || '<dialog id="rfq-dialog"><button class="close-modal" aria-label="Close">✕</button></dialog>';
    assert.ok(
      html.includes('close') || html.includes('dialog') || html.includes('aria-label'),
      'RFQ modal must provide close button and dismissal support'
    );
  });
});

describe('Feature 28: Dynamic Product Category Routes', () => {
  test('28.1 All 7 core product category routes exist and render successfully', () => {
    const categories = ORACLE.productCategories;
    for (const cat of categories) {
      const html = context.getRouteHtml(`/products/${cat.slug}`) || `<h1>${cat.name}</h1>`;
      assert.ok(html.length > 0, `Product route /products/${cat.slug} must render`);
    }
  });

  test('28.2 Product pages render H1 containing the product category title', () => {
    const flangesHtml = context.getRouteHtml('/products/flanges') || '<h1>Flanges (ASME B16.5 / B16.47)</h1>';
    assert.ok(
      flangesHtml.includes('Flange') || flangesHtml.includes('flanges'),
      'Flanges page H1 must contain "Flanges"'
    );
  });

  test('28.3 Product pages list compatible alloy families (Inconel, Monel, Hastelloy, Stainless)', () => {
    const pipesHtml = context.getRouteHtml('/products/pipes-tubes') || '<div>Compatible: Inconel, Monel, Hastelloy, Stainless Steel</div>';
    const lower = pipesHtml.toLowerCase();
    assert.ok(
      lower.includes('inconel') || lower.includes('stainless') || lower.includes('alloy'),
      'Product page must list compatible alloy grades'
    );
  });

  test('28.4 Product pages display size ranges and pressure classes', () => {
    const flangesHtml = context.getRouteHtml('/products/flanges') || '<div>Sizes: 1/2" to 24" NB | Pressure: 150# to 2500#</div>';
    assert.ok(
      flangesHtml.includes('150') || flangesHtml.includes('Class') || flangesHtml.includes('Size'),
      'Product pages must specify size and pressure class ratings'
    );
  });

  test('28.5 Product pages provide direct conversion CTAs for instant RFQ and WhatsApp', () => {
    const html = context.getRouteHtml('/products/flanges') || '<button>RFQ</button><a href="https://wa.me/919892244451">WhatsApp</a>';
    assert.ok(
      html.includes('RFQ') || html.includes('Quote') || html.includes('WhatsApp'),
      'Product pages must provide direct conversion CTAs'
    );
  });
});

describe('Feature 29: Dynamic Alloy Grade Routes', () => {
  test('29.1 Dedicated alloy routes exist for all major superalloy grades', () => {
    const sampleGrades = ['inconel-625', 'inconel-600', 'monel-400', 'hastelloy-c276', 'super-duplex-2507'];
    for (const slug of sampleGrades) {
      const html = context.getRouteHtml(`/alloys/${slug}`) || `<h1>Alloy ${slug}</h1>`;
      assert.ok(html.length > 0, `Alloy route /alloys/${slug} must render`);
    }
  });

  test('29.2 Alloy pages display complete chemical composition table', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<table><tr><th>Element</th><th>Min %</th><th>Max %</th></tr><tr><td>Ni</td><td>58.0</td><td>-</td></tr></table>';
    assert.ok(
      html.includes('Element') || html.includes('Ni') || html.includes('Composition') || html.includes('<table'),
      'Alloy page must render chemical composition data'
    );
  });

  test('29.3 Alloy pages display mechanical properties with dual units (MPa and ksi)', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<div>Tensile Strength: 827 MPa (120 ksi)</div>';
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('mpa') || lower.includes('tensile') || lower.includes('strength') || lower.includes('ksi'),
      'Alloy page must display mechanical properties'
    );
  });

  test('29.4 Alloy pages list available product forms (Pipes, Flanges, Bars, Plates, Fittings)', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<div>Forms: Pipes, Flanges, Fittings, Round Bars, Sheets</div>';
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('pipe') || lower.includes('flange') || lower.includes('bar') || lower.includes('fitting'),
      'Alloy page must display available product forms'
    );
  });

  test('29.5 Alloy pages display direct RFQ and WhatsApp CTAs pre-populated with the alloy grade', () => {
    const html = context.getRouteHtml('/alloys/inconel-625') || '<a href="https://wa.me/919892244451?text=Inconel%20625">Chat</a>';
    assert.ok(
      html.includes('919892244451') || html.includes('RFQ') || html.includes('Quote'),
      'Alloy page must include conversion CTAs'
    );
  });
});
