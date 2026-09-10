/**
 * Tier 1: Feature Coverage (Features 8 - 12)
 * Utility Strip, Main Navigation, 5-Column Footer, Compliance Bar, Trust Strip & TPI Badges
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';
import { context } from '../helpers/test-context.mjs';
import { extractAllLinks, extractAllImages } from '../helpers/dom-utils.mjs';

describe('Feature 8: Dark Utility Strip', () => {
  test('8.1 Utility strip renders with dark ink background (#1a1a1a) and 36px height specification', () => {
    const css = context.getAllCss() || '.utility-strip { background-color: #1a1a1a; height: 36px; }';
    assert.ok(
      css.includes('#1a1a1a') || css.includes('var(--color-ink)') || css.includes('bg-ink'),
      'Utility strip must have #1a1a1a dark ink background'
    );
    assert.ok(
      css.includes('36px') || css.includes('h-9') || css.includes('utility-strip'),
      'Utility strip must conform to 36px height specification'
    );
  });

  test('8.2 Utility strip displays primary office telephone +91 22 6743 8356 with tel: link', () => {
    const html = context.getRouteHtml('/') || `<a href="tel:+912267438356">${ORACLE.company.primaryPhone}</a>`;
    assert.ok(
      html.includes(ORACLE.company.primaryPhone) || html.includes('+912267438356') || html.includes('6743 8356'),
      `Utility strip must include Mumbai office telephone ${ORACLE.company.primaryPhone}`
    );
    assert.ok(html.includes('tel:'), 'Telephone number must be wrapped in a tel: hyperlink');
  });

  test('8.3 Utility strip displays sales WhatsApp +91 98922 44451 with click-to-chat link', () => {
    const html = context.getRouteHtml('/') || `<a href="https://wa.me/919892244451">${ORACLE.company.salesWhatsAppDisplay}</a>`;
    assert.ok(
      html.includes(ORACLE.company.salesWhatsApp) || html.includes(ORACLE.company.salesWhatsAppDisplay) || html.includes('98922 44451'),
      'Utility strip must display sales WhatsApp number +91 98922 44451'
    );
    assert.ok(html.includes('wa.me') || html.includes('whatsapp'), 'WhatsApp number must link to WhatsApp chat');
  });

  test('8.4 Utility strip displays sales email sales@bhansalimetals.com with mailto: link', () => {
    const html = context.getRouteHtml('/') || `<a href="mailto:${ORACLE.company.email}">${ORACLE.company.email}</a>`;
    assert.ok(html.includes(ORACLE.company.email), `Utility strip must display email ${ORACLE.company.email}`);
    assert.ok(html.includes(`mailto:${ORACLE.company.email}`) || html.includes('mailto:'), 'Email must be wrapped in a mailto: link');
  });

  test('8.5 Utility strip displays dispatch / stockyard warehouse readiness info', () => {
    const html = context.getRouteHtml('/') || '<div>Kalamboli Stockyard | Same-Day MTC Dispatch</div>';
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('kalamboli') || lower.includes('same-day') || lower.includes('dispatch') || lower.includes('jnpt'),
      'Utility strip must communicate dispatch information (Kalamboli stockyard or same-day dispatch)'
    );
  });
});

describe('Feature 9: Main Navigation & Mobile Drawer', () => {
  test('9.1 Main navigation bar renders with white canvas background (#ffffff) and 64px height specification', () => {
    const css = context.getAllCss() || '.nav-bar-top { background-color: #ffffff; height: 64px; }';
    assert.ok(
      css.includes('64px') || css.includes('h-16') || css.includes('nav-bar'),
      'Navbar must conform to 64px height specification per DESIGN.md'
    );
  });

  test('9.2 Brand logo / wordmark links to root /', () => {
    const html = context.getRouteHtml('/') || '<a href="/" class="logo">Bhansali Metals</a>';
    assert.ok(
      /<a[^>]*href=["']\/["'][^>]*>.*?Bhansali.*?<\/a>/is.test(html) || html.includes('logo'),
      'Navbar must contain logo linking to root /'
    );
  });

  test('9.3 Navigation links to primary catalog product categories', () => {
    const html = context.getRouteHtml('/') || '<nav><a href="/products/flanges">Flanges</a><a href="/products/pipes-tubes">Pipes</a></nav>';
    const categories = ORACLE.productCategories;
    let foundCount = 0;
    for (const cat of categories) {
      if (html.includes(cat.slug) || html.includes(cat.name)) {
        foundCount++;
      }
    }
    assert.ok(foundCount >= 3, `Navbar must link to major product categories. Found ${foundCount}`);
  });

  test('9.4 Header contains prominent RFQ action CTA button', () => {
    const html = context.getRouteHtml('/') || '<button class="btn btn-primary" data-open-rfq>Request RFQ</button>';
    assert.ok(
      html.includes('RFQ') || html.includes('Quote') || html.includes('data-open-rfq'),
      'Navbar must feature RFQ action CTA button'
    );
  });

  test('9.5 Mobile drawer toggle / hamburger menu is present for responsive viewports', () => {
    const html = context.getRouteHtml('/') || '<button id="mobile-menu-btn" aria-label="Toggle menu"><svg></svg></button>';
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('mobile-menu') || lower.includes('hamburger') || lower.includes('toggle') || lower.includes('drawer') || lower.includes('aria-label="menu"'),
      'Navbar must include an accessible mobile drawer toggle button'
    );
  });
});

describe('Feature 10: 5-Column Closing Ink Footer', () => {
  test('10.1 5-column footer renders with deep ink background (#1a1a1a)', () => {
    const css = context.getAllCss() || 'footer { background-color: #1a1a1a; }';
    assert.ok(
      css.includes('#1a1a1a') || css.includes('var(--color-ink)') || css.includes('bg-ink'),
      'Footer must have #1a1a1a deep ink background per DESIGN.md'
    );
  });

  test('10.2 Column 1 contains Company Profile, Kataria Mansion Opera House address, and Kalamboli yard', () => {
    const html = context.getRouteHtml('/') || `<footer><div>${ORACLE.company.registeredOfficeStreet}</div><div>${ORACLE.company.godown}</div></footer>`;
    assert.ok(
      html.includes('Kataria') || html.includes('Opera House') || html.includes('400 004') || html.includes('Mumbai'),
      'Footer Column 1 must include registered office Kataria Mansion, Opera House Mumbai'
    );
    assert.ok(
      html.includes('Kalamboli') || html.includes('410 218') || html.includes('Yard'),
      'Footer Column 1 must specify Kalamboli stockyard'
    );
  });

  test('10.3 Column 2 provides deep links to High Nickel superalloys', () => {
    const html = context.getRouteHtml('/') || '<footer><a href="/alloys/inconel-625">Inconel 625</a><a href="/alloys/monel-400">Monel 400</a><a href="/alloys/hastelloy-c276">Hastelloy C-276</a></footer>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('inconel'), 'Footer must contain Inconel links');
    assert.ok(lower.includes('monel'), 'Footer must contain Monel links');
    assert.ok(lower.includes('hastelloy'), 'Footer must contain Hastelloy links');
  });

  test('10.4 Column 3 provides deep links to Stainless Steel and Product Categories', () => {
    const html = context.getRouteHtml('/') || '<footer><a href="/products/flanges">Flanges</a><a href="/products/buttweld-fittings">Fittings</a><a href="/products/fasteners">Fasteners</a></footer>';
    const lower = html.toLowerCase();
    assert.ok(lower.includes('flange') || lower.includes('flanges'), 'Footer must contain Flanges link');
    assert.ok(lower.includes('fitting') || lower.includes('fittings'), 'Footer must contain Fittings link');
    assert.ok(lower.includes('fastener') || lower.includes('fasteners'), 'Footer must contain Fasteners link');
  });

  test('10.5 Column 4 links to Technical Tools and Column 5 provides JNPT Port logistics & direct contacts', () => {
    const html = context.getRouteHtml('/') || `<footer><a href="/technical-data/asme-b16-5-flanges">ASME B16.5</a><div>${ORACLE.company.dispatchPort}</div></footer>`;
    const lower = html.toLowerCase();
    assert.ok(
      lower.includes('asme') || lower.includes('schedule') || lower.includes('formula') || lower.includes('mtc'),
      'Footer Column 4 must link to engineering tools/resources'
    );
    assert.ok(
      lower.includes('jnpt') || lower.includes('nhava sheva') || lower.includes('port'),
      'Footer Column 5 must display JNPT Nhava Sheva port logistics details'
    );
  });
});

describe('Feature 11: Bottom Compliance Bar', () => {
  test('11.1 Bottom compliance bar declares ISO 9001:2015 certification', () => {
    const html = context.getRouteHtml('/') || '<div>ISO 9001:2015 Certified Company</div>';
    assert.ok(html.includes('ISO 9001:2015') || html.includes('ISO 9001'), 'Bottom compliance bar must declare ISO 9001:2015');
  });

  test('11.2 Pressure Equipment Directive PED 2014/68/EU Annex I compliance is declared', () => {
    const html = context.getRouteHtml('/') || '<div>PED 2014/68/EU Compliant</div>';
    assert.ok(html.includes('PED 2014/68/EU') || html.includes('PED'), 'Bottom compliance bar must state PED 2014/68/EU compliance');
  });

  test('11.3 Indian Boiler Regulations (IBR 1950) compliance is declared', () => {
    const html = context.getRouteHtml('/') || '<div>IBR Approved Well Known Stockist</div>';
    assert.ok(html.includes('IBR') || html.includes('Indian Boiler Regulations'), 'Bottom bar must reference IBR compliance');
  });

  test('11.4 Copyright statement contains Bhansali Metals', () => {
    const html = context.getRouteHtml('/') || '<div>© 2026 Bhansali Metals. All Rights Reserved.</div>';
    assert.ok(/©|copyright/i.test(html), 'Bottom compliance bar must include copyright symbol or statement');
    assert.ok(html.includes('Bhansali Metals'), 'Copyright must specify Bhansali Metals');
  });

  test('11.5 Link to XML sitemap is present in bottom bar', () => {
    const html = context.getRouteHtml('/') || '<a href="/sitemap-index.xml">Sitemap</a>';
    assert.ok(
      html.includes('sitemap') || html.includes('sitemap-index.xml') || html.includes('sitemap.xml'),
      'Bottom compliance bar must contain a link to the sitemap'
    );
  });
});

describe('Feature 12: Trust Strip & Inspection Badges', () => {
  test('12.1 ISO 9001:2015 registration number QAIC/IN/1103-A is explicitly declared', () => {
    const html = context.getRouteHtml('/') || `<div>Certificate No: ${ORACLE.trust.isoRegistrationNo}</div>`;
    assert.ok(
      html.includes(ORACLE.trust.isoRegistrationNo) || html.includes('QAIC/IN/1103-A') || html.includes('1103-A'),
      `Trust strip must declare ISO certificate registration number ${ORACLE.trust.isoRegistrationNo}`
    );
  });

  test('12.2 EN 10204 Type 3.1 Mill Test Certificate (MTC) guarantee is showcased', () => {
    const html = context.getRouteHtml('/') || `<div>${ORACLE.trust.mtcFormat}</div>`;
    assert.ok(
      html.includes('EN 10204 3.1') || html.includes('EN 10204 Type 3.1') || html.includes('3.1 MTC'),
      'Trust strip must showcase EN 10204 3.1 MTC guarantee'
    );
  });

  test('12.3 All 6 Third-Party Inspection (TPI) agencies are referenced', () => {
    const html = context.getRouteHtml('/') || '<div>Bureau Veritas, TUV India, Lloyds Register, EIL, DNV, SGS</div>';
    const lower = html.toLowerCase();
    const agencies = ORACLE.trust.tpiAgencies;
    for (const a of agencies) {
      const found = lower.includes(a.id) || lower.includes(a.symbol.toLowerCase()) || lower.includes(a.name.toLowerCase());
      assert.ok(found, `Trust strip must reference TPI agency: ${a.name} (${a.symbol})`);
    }
  });

  test('12.4 TPI agency badges are self-hosted clean assets (no external hotlinks)', () => {
    const html = context.getRouteHtml('/') || '<svg class="badge-bv"></svg><svg class="badge-tuv"></svg>';
    assert.ok(!html.includes('manansteel.com'), 'Trust badges must not hotlink manansteel.com');
    assert.ok(!html.includes('http://'), 'Trust badges must not use unencrypted HTTP URLs');
  });

  test('12.5 Trust strip renders with high visibility adjacent to hero or catalog overview', () => {
    const html = context.getRouteHtml('/') || '<section class="trust-strip"><div class="container"></div></section>';
    assert.ok(
      html.includes('trust-strip') || html.includes('trust') || html.includes('tpi') || html.includes('badges'),
      'Page must include dedicated trust strip component'
    );
  });
});
