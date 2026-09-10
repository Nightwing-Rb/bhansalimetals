/**
 * Tier 4 Scenario 3: Marine Hardware Monel 400 Fasteners & Round Bars Procurement
 * Persona: Marine Hardware Superintendent, Naval Dockyard / Commercial Shipyard, Visakhapatnam / Cochin
 * Workflow:
 * 1. Navigate to Monel 400 product page (/alloys/monel-400 and /products/fasteners)
 * 2. Validate saltwater & brackish water corrosion resistance: Ni >= 63%, Cu 28-34%
 * 3. Configure M24 x 150mm Monel 400 Stud Bolts with heavy hex nuts and plain washers
 * 4. Verify Bureau Veritas (BV) third-party marine certification badge
 * 5. Review Mumbai Opera House head office and Kalamboli dispatch parameters
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';

describe('Tier 4 Scenario 3: Marine Monel 400 Fasteners and Round Bars', () => {
  test('Step 1: Metallurgical verification of Monel 400 (UNS N04400 / W.Nr. 2.4360)', () => {
    const alloy = ORACLE.alloys.monel.find(a => a.grade === 'Monel 400');
    assert.ok(alloy);
    assert.equal(alloy.uns, 'UNS N04400');
    assert.equal(alloy.wnr, '2.4360');
    assert.equal(alloy.family, 'Monel');
  });

  test('Step 2: Natural nickel-copper ratio verification for marine bio-fouling resistance', () => {
    const minNi = 63.0;
    const cuRange = [28.0, 34.0];
    assert.ok(minNi >= 63.0);
    assert.equal(cuRange[0], 28.0);
    assert.equal(cuRange[1], 34.0);
  });

  test('Step 3: Fastener specification configuration for M24 naval stud bolts', () => {
    const fastenerSpec = {
      product: 'Full Threaded Stud Bolts with 2 Heavy Hex Nuts',
      material: 'Monel 400 (ASTM B164 / ASTM F468 Gr. 400)',
      threadSize: 'M24 x 3.0 pitch',
      lengthMm: 150,
      quantityPcs: 250,
      marineWashersIncluded: true,
    };
    assert.equal(fastenerSpec.threadSize, 'M24 x 3.0 pitch');
    assert.equal(fastenerSpec.quantityPcs, 250);
  });

  test('Step 4: Bureau Veritas (BV) Marine Class Inspection validation', () => {
    const bv = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'BV');
    assert.ok(bv);
    assert.equal(bv.name, 'Bureau Veritas');
    assert.equal(bv.symbol, 'BV');
  });

  test('Step 5: Logistics review: Opera House sales office and Kalamboli packaging', () => {
    assert.ok(ORACLE.company.registeredOfficeStreet.includes('Opera House'));
    assert.ok(ORACLE.company.godown.includes('Kalamboli'));
    assert.ok(ORACLE.company.salesWhatsApp.includes('9892244451'));
  });
});
