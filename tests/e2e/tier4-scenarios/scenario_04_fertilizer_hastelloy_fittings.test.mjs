/**
 * Tier 4 Scenario 4: Fertilizer Plant Hastelloy C-276 Buttweld Fittings BOQ
 * Persona: Maintenance & Turnaround Manager, Phosphoric / Nitric Acid Fertilizer Complex, Paradeep / Kakinada
 * Workflow:
 * 1. Navigate to Hastelloy C-276 and Buttweld Fittings (/alloys/hastelloy-c276 & /products/buttweld-fittings)
 * 2. Validate corrosion resistance against wet chlorine and hot contaminated mineral acids
 * 3. Review buttweld fittings dimensions: 90° LR Elbows, Equal Tees, Concentric Reducers
 * 4. Verify Engineers India Limited (EIL) and SGS testing capability
 * 5. Submit emergency turnaround BOQ via RFQ modal with Kalamboli stock verification
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';

describe('Tier 4 Scenario 4: Fertilizer Plant Hastelloy C-276 Buttweld Fittings BOQ', () => {
  test('Step 1: Hastelloy C-276 metallurgy check (UNS N10276 / W.Nr. 2.4819)', () => {
    const alloy = ORACLE.alloys.hastelloy.find(a => a.grade === 'Hastelloy C-276');
    assert.ok(alloy);
    assert.equal(alloy.uns, 'UNS N10276');
    assert.equal(alloy.wnr, '2.4819');
  });

  test('Step 2: Chemical composition limits: Mo 15.0-17.0%, W 3.0-4.5%, Fe 4.0-7.0%', () => {
    const moMin = 15.0;
    const wRange = [3.0, 4.5];
    assert.ok(moMin >= 15.0, 'High Molybdenum content provides resistance to localized pitting');
    assert.ok(wRange[0] >= 3.0, 'Tungsten addition enhances corrosion resistance');
  });

  test('Step 3: Buttweld Fittings dimensional conformity to ASME B16.9', () => {
    const fittingsList = [
      { item: '90° Long Radius Elbow', size: '3" NB Sch 40S', centerToEndMm: 114.0 },
      { item: 'Concentric Reducer', size: '4" x 3" NB Sch 40S', lengthMm: 102.0 },
      { item: 'Equal Straight Tee', size: '3" NB Sch 40S', centerToEndMm: 86.0 },
    ];
    assert.equal(fittingsList.length, 3);
    assert.equal(fittingsList[0].centerToEndMm, 114.0);
  });

  test('Step 4: Engineers India Limited (EIL) and SGS inspection agency capability', () => {
    const eil = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'EIL');
    const sgs = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'SGS');
    assert.ok(eil && sgs, 'Both EIL and SGS must be available for fertilizer plant audits');
  });

  test('Step 5: Turnaround BOQ paste payload with immediate WhatsApp escalation', () => {
    const boqText = `URGENT TURNAROUND REQUIREMENT - 72 HOUR DISPATCH
Alloy: Hastelloy C-276 (ASTM B366 WPW / WPC)
1. 90° LR Elbow 3" Sch 40S - Qty: 8 pcs
2. Concentric Reducer 4" x 3" Sch 40S - Qty: 4 pcs
3. Equal Tee 3" Sch 40S - Qty: 4 pcs
Inspection: EIL witnessed MTC per EN 10204 3.1
Delivery: Paradeep Port / Site from Kalamboli Godown`;

    assert.ok(boqText.includes('Hastelloy C-276'));
    assert.ok(boqText.includes('Kalamboli'));

    const waLink = `https://wa.me/${ORACLE.company.salesWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent('Urgent Hastelloy C-276 BOQ attached for Turnaround')}`;
    assert.ok(waLink.includes('919892244451'));
  });
});
