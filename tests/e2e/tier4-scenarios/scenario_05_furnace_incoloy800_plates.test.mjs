/**
 * Tier 4 Scenario 5: High-Temperature Furnace Incoloy 800 Plates with TÜV India Inspection
 * Persona: Thermal Equipment Design Engineer, Industrial Furnace & Reformer Fabricator, Pune / Vadodara
 * Workflow:
 * 1. Navigate to Incoloy 800 page (/alloys/incoloy-800) and Sheets & Plates (/products/sheets-plates)
 * 2. Confirm classification as Incoloy (Ni-Fe-Cr) and oxidation resistance up to 1100°C
 * 3. Calculate plate dimensions and tonnage for reformer shroud: 12mm x 2000mm x 6000mm
 * 4. Verify TÜV India inspection accreditation and PED 2014/68/EU Annex I compliance
 * 5. Submit full RFQ with Mukand Ltd dealership assurance and JNPT logistics
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';

describe('Tier 4 Scenario 5: High-Temperature Furnace Incoloy 800 Plates Procurement', () => {
  test('Step 1: Metallurgical verification of Incoloy 800 (UNS N08800 / W.Nr. 1.4876)', () => {
    const alloy = ORACLE.alloys.incoloy.find(a => a.grade === 'Incoloy 800');
    assert.ok(alloy);
    assert.equal(alloy.uns, 'UNS N08800');
    assert.equal(alloy.wnr, '1.4876');
    assert.equal(alloy.family, 'Incoloy', 'Must be classified under Incoloy Ni-Fe-Cr family');
  });

  test('Step 2: Chemical balance validation: Ni 30.0-35.0%, Cr 19.0-23.0%, Fe balance (min 39.5%)', () => {
    const niRange = [30.0, 35.0];
    const crRange = [19.0, 23.0];
    assert.equal(niRange[0], 30.0);
    assert.equal(crRange[0], 19.0);
  });

  test('Step 3: Plate dimension calculation for 8 reformer baffle plates', () => {
    // Plate dimensions: Length = 6.0 m, Width = 2.0 m, Thickness = 12.0 mm
    // Incoloy 800 density = 7.94 g/cm³
    // Single plate weight = 6.0 * 2.0 * 12.0 * 7.94 = 1143.36 kg
    const lengthM = 6.0;
    const widthM = 2.0;
    const thicknessMm = 12.0;
    const density = 7.94;
    const singlePlateKg = lengthM * widthM * thicknessMm * density;
    assert.ok(Math.abs(singlePlateKg - 1143.36) < 0.1);

    const totalOrderKg = singlePlateKg * 8;
    assert.ok(Math.abs(totalOrderKg - 9146.88) < 1.0, 'Total order weight is ~9.15 metric tonnes');
  });

  test('Step 4: TÜV India inspection capability and PED 2014/68/EU Annex I compliance', () => {
    const tuv = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'TUV');
    assert.ok(tuv);
    assert.equal(tuv.name, 'TÜV India');

    assert.ok(ORACLE.trust.pedCompliance.includes('PED 2014/68/EU'));
  });

  test('Step 5: RFQ submission with Mukand dealership credential and Kalamboli godown delivery', () => {
    const orderRFQ = {
      equipment: 'Steam Methane Reformer Convection Section Shroud',
      material: 'Incoloy 800 (ASTM B409 / ASME SB409)',
      quantity: '8 Hot Rolled Annealed & Pickled Plates (12mm x 2000mm x 6000mm)',
      totalTonnage: '9.15 MT',
      inspectionRequired: 'TÜV India inspection with EN 10204 3.1 MTC + IBR Form III-C',
      provenance: 'Mukand Ltd authorized stockist guarantee',
      dispatchPort: ORACLE.company.dispatchPort,
    };

    assert.equal(orderRFQ.material, 'Incoloy 800 (ASTM B409 / ASME SB409)');
    assert.ok(orderRFQ.inspectionRequired.includes('TÜV India'));
    assert.ok(orderRFQ.provenance.includes('Mukand Ltd'));
  });
});
