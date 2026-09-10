/**
 * Custom Assertion Helpers for E2E Metallurgical Catalog & Design System Testing
 */

import assert from 'node:assert/strict';
import { ORACLE } from './oracle-data.mjs';

export function assertDesignTokenPresent(cssOrHtml, tokenName, expectedValue) {
  const normalized = cssOrHtml.toLowerCase();
  const tokenNormalized = tokenName.toLowerCase();
  const valueNormalized = expectedValue.toLowerCase();

  const found = normalized.includes(tokenNormalized) || normalized.includes(valueNormalized);
  assert.ok(
    found,
    `Expected design token [${tokenName} = ${expectedValue}] to be present in styles or markup.`
  );
}

export function assertRadiusTwoTier(cssContent) {
  const has4px = /4px|rounded-md|--radius-sharp:\s*4px/i.test(cssContent);
  const has16px = /16px|rounded-xl|--radius-soft:\s*16px/i.test(cssContent);

  assert.ok(has4px, 'DESIGN.md violation: Sharp 4px corner radius must be defined for buttons/inputs.');
  assert.ok(has16px, 'DESIGN.md violation: Soft 16px corner radius must be defined for cards/containers.');
}

export function assertNoCompetitorScrape(htmlOrText) {
  for (const pattern of ORACLE.bannedPatterns) {
    const matched = pattern.test(htmlOrText);
    assert.ok(
      !matched,
      `Banned legacy competitor copy or insecure asset matched pattern ${pattern} in generated output!`
    );
  }
}

export function assertWhatsAppUrlValid(urlStr, expectedGrade = null, expectedProduct = null) {
  assert.ok(urlStr, 'WhatsApp URL cannot be empty');
  assert.ok(
    urlStr.includes('api.whatsapp.com') || urlStr.includes('wa.me'),
    `Expected WhatsApp URL domain (api.whatsapp.com or wa.me), got: ${urlStr}`
  );
  assert.ok(
    urlStr.includes('919892244451') || urlStr.includes('+919892244451') || urlStr.includes('9892244451'),
    `Expected phone number 919892244451 in WhatsApp URL, got: ${urlStr}`
  );

  if (expectedGrade) {
    const encodedGrade = encodeURIComponent(expectedGrade).toLowerCase();
    const rawGrade = expectedGrade.toLowerCase();
    const urlLower = urlStr.toLowerCase();
    assert.ok(
      urlLower.includes(encodedGrade) || urlLower.includes(rawGrade),
      `Expected alloy grade "${expectedGrade}" in WhatsApp inquiry text parameter.`
    );
  }

  if (expectedProduct) {
    const encodedProduct = encodeURIComponent(expectedProduct).toLowerCase();
    const rawProduct = expectedProduct.toLowerCase();
    const urlLower = urlStr.toLowerCase();
    assert.ok(
      urlLower.includes(encodedProduct) || urlLower.includes(rawProduct),
      `Expected product form "${expectedProduct}" in WhatsApp inquiry text parameter.`
    );
  }
}

export function assertValidJsonLd(schemaObj, expectedType = null) {
  assert.ok(schemaObj, 'JSON-LD schema object must be present');
  assert.equal(typeof schemaObj, 'object', 'JSON-LD must be a valid JSON object');
  assert.ok(
    schemaObj['@context'] === 'https://schema.org' || schemaObj['@context'] === 'http://schema.org',
    `Invalid @context in JSON-LD: ${schemaObj['@context']}`
  );

  if (expectedType) {
    const type = schemaObj['@type'];
    if (Array.isArray(type)) {
      assert.ok(type.includes(expectedType), `Expected @type to include "${expectedType}", got: ${type.join(', ')}`);
    } else {
      assert.equal(type, expectedType, `Expected @type to be "${expectedType}", got: ${type}`);
    }
  }
}

export function assertTrustStripComplete(html) {
  const lower = html.toLowerCase();
  assert.ok(
    lower.includes('qaic/in/1103-a') || lower.includes('qaic') || lower.includes('1103-a'),
    'ISO 9001 registration QAIC/IN/1103-A must be prominently displayed'
  );
  assert.ok(
    lower.includes('en 10204 3.1') || lower.includes('en 10204') || lower.includes('3.1 mtc'),
    'EN 10204 3.1 MTC guarantee must be declared'
  );

  const agencyMatches = ORACLE.trust.tpiAgencies.filter(agency =>
    lower.includes(agency.id) || lower.includes(agency.symbol.toLowerCase()) || lower.includes(agency.name.toLowerCase())
  );
  assert.ok(
    agencyMatches.length >= 4,
    `At least 4 of 6 TPI agencies must be present in trust strip. Found: ${agencyMatches.length}`
  );
}

export function assertDualUnitsPresent(tableOrText) {
  const lower = tableOrText.toLowerCase();
  const hasMetricStress = lower.includes('mpa') || lower.includes('n/mm');
  const hasImperialStress = lower.includes('ksi') || lower.includes('psi');
  const hasMetricDim = lower.includes('mm');
  const hasImperialDim = lower.includes('inch') || lower.includes('in.');
  const hasMetricWeight = lower.includes('kg');
  const hasImperialWeight = lower.includes('lb') || lower.includes('lbs');

  const metricScore = (hasMetricStress ? 1 : 0) + (hasMetricDim ? 1 : 0) + (hasMetricWeight ? 1 : 0);
  const imperialScore = (hasImperialStress ? 1 : 0) + (hasImperialDim ? 1 : 0) + (hasImperialWeight ? 1 : 0);

  assert.ok(
    metricScore >= 1 && imperialScore >= 1,
    `Table must support dual units (Metric and Imperial). Found metric=${metricScore}, imperial=${imperialScore}`
  );
}
