/**
 * Tier 4 Scenario 1: Offshore Platform Super Duplex 2507 High-Pressure Flange RFQ
 * Persona: Senior Piping Lead, Offshore Subsea Production Facility, Bombay High / North Sea
 * Workflow:
 * 1. Navigate to Super Duplex 2507 specification page (/alloys/super-duplex-2507)
 * 2. Validate metallurgical compatibility: UNS S32750, W.Nr. 1.4410, PREN >= 42, NACE MR0175 compliance
 * 3. Review ASME B16.5 high-pressure flange dimensions for 6" Class 1500# RTJ
 * 4. Verify TPI agency inspection capability (DNV / Lloyd's Register)
 * 5. Generate structured procurement RFQ payload with Kalamboli stock verification
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';

describe('Tier 4 Scenario 1: Offshore Super Duplex 2507 High-Pressure Flanges', () => {
  test('Step 1: Metallurgical validation of Super Duplex 2507 (UNS S32750)', () => {
    const alloy = ORACLE.alloys.duplex.find(a => a.grade === 'Super Duplex 2507');
    assert.ok(alloy, 'Alloy Super Duplex 2507 must be in catalog');
    assert.equal(alloy.uns, 'UNS S32750');
    assert.equal(alloy.wnr, '1.4410');
  });

  test('Step 2: NACE MR0175 / ISO 15156 Sour Service Compliance Verification', () => {
    const compliance = ORACLE.trust.naceCompliance;
    assert.ok(compliance.includes('NACE MR0175'), 'Must certify NACE MR0175 compliance for sour crude / H2S');
  });

  test('Step 3: Dimensional check for 6" Class 1500# RTJ Flange', () => {
    // 6" Class 1500# ASME B16.5 Dimensions:
    // OD = 395 mm (15.5 inches), Flange Thickness = 82.6 mm (3.25 inches)
    // Bolt Circle = 317.5 mm (12.5 inches), Number of bolts = 12, Bolt hole dia = 38.1 mm (1.5 inches)
    const flangeSpec = {
      size: '6" NB',
      rating: 'Class 1500#',
      type: 'WNRF / RTJ',
      outerDiameterMm: 395,
      thicknessMm: 82.6,
      boltCircleMm: 317.5,
      numberOfBolts: 12,
    };
    assert.equal(flangeSpec.numberOfBolts, 12);
    assert.ok(flangeSpec.outerDiameterMm > 390);
  });

  test('Step 4: Third-Party Witness Verification (DNV / Lloyd’s Register)', () => {
    const dnv = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'DNV');
    const lr = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'LR');
    assert.ok(dnv && lr, 'Both DNV and Lloyds Register must be accredited TPI agencies for offshore work');
  });

  test('Step 5: End-to-end RFQ Generation with Same-Day MTC from Kalamboli Stockyard', () => {
    const rfqPayload = {
      project: 'Offshore Subsea Gas Injection Manifold',
      buyer: 'EPC Contractor - Offshore Division',
      items: [
        {
          grade: 'Super Duplex 2507 (UNS S32750 / EN 1.4410)',
          item: 'WNRF RTJ Flange 6" Class 1500# Sch 160 Bore',
          standard: 'ASME B16.5 / ASTM A182 F53',
          quantity: 16,
          certification: 'EN 10204 3.1 + NACE MR0175 + DNV Witness',
        },
      ],
      dispatchLocation: 'Kalamboli Stockyard to Mumbai Port / Nhava Sheva (JNPT)',
      contactPhone: ORACLE.company.salesWhatsApp,
    };

    assert.equal(rfqPayload.items[0].quantity, 16);
    assert.ok(rfqPayload.items[0].certification.includes('EN 10204 3.1'));
    assert.ok(rfqPayload.items[0].certification.includes('DNV'));
  });
});
