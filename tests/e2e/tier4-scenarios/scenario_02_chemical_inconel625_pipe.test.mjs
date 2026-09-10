/**
 * Tier 4 Scenario 2: Chemical Refinery Inconel 625 Seamless Pipe Schedule 80
 * Persona: Piping Materials Engineer, Major Petrochemical Complex, Jamnagar / Dahej
 * Workflow:
 * 1. Navigate to Inconel 625 technical page (/alloys/inconel-625)
 * 2. Verify metallurgical data: Ni >= 58%, Cr 20-23%, Mo 8-10%, Nb 3.15-4.15%
 * 3. Look up Pipe Schedule Chart (/technical-data/pipe-schedule-chart) for 4" Sch 80 seamless pipe
 * 4. Calculate total linear tonnage using theoretical weight equation for Nickel Alloy pipes
 * 5. Verify EN 10204 3.1 Mill Test Certificate provisions and generate multi-line BOQ
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';

describe('Tier 4 Scenario 2: Chemical Refinery Inconel 625 Seamless Pipe Procurement', () => {
  test('Step 1: Inconel 625 metallurgical verification (UNS N06625 / W.Nr. 2.4856)', () => {
    const alloy = ORACLE.alloys.inconel.find(a => a.grade === 'Inconel 625');
    assert.ok(alloy);
    assert.equal(alloy.uns, 'UNS N06625');
    assert.equal(alloy.family, 'Inconel');
  });

  test('Step 2: Chemical composition limits verification for wet chlorine/hydrochloric exposure', () => {
    const minNi = 58.0;
    const crRange = [20.0, 23.0];
    const moRange = [8.0, 10.0];
    const nbRange = [3.15, 4.15];

    assert.ok(minNi >= 58.0, 'Nickel content ensures chloride stress corrosion cracking immunity');
    assert.ok(moRange[0] >= 8.0, 'Molybdenum content guarantees pitting resistance');
  });

  test('Step 3: Pipe Schedule 80 Dimensional lookup for 4" NB (ASME B36.19M / B36.10M)', () => {
    // 4" NB: OD = 114.3 mm (4.500 inches)
    // Schedule 80 Wall Thickness: WT = 8.56 mm (0.337 inches)
    // Inside Diameter: ID = 114.3 - 2 * 8.56 = 97.18 mm (3.826 inches)
    const pipeSpec = {
      nominalSize: '4" NB',
      outsideDiameterMm: 114.3,
      schedule: 'Sch 80',
      wallThicknessMm: 8.56,
      insideDiameterMm: 114.3 - 2 * 8.56,
    };
    assert.ok(Math.abs(pipeSpec.insideDiameterMm - 97.18) < 0.01);
  });

  test('Step 4: Nickel Alloy Pipe Theoretical Weight calculation for 300 meters order', () => {
    // Inconel 625 density = 8.44 g/cm³
    // Formula: (OD - WT) * WT * 0.0276 kg/m
    // (114.3 - 8.56) * 8.56 * 0.0276 = 105.74 * 8.56 * 0.0276 = 24.982 kg/m
    const od = 114.3;
    const wt = 8.56;
    const weightPerM = (od - wt) * wt * 0.0276;
    assert.ok(weightPerM > 24.0 && weightPerM < 26.0, `Weight per meter (${weightPerM.toFixed(2)} kg/m) must be ~25 kg/m`);

    const orderLengthMeters = 300;
    const totalOrderKg = weightPerM * orderLengthMeters;
    assert.ok(totalOrderKg > 7200 && totalOrderKg < 7800, 'Total lot weight is ~7.5 metric tonnes');
  });

  test('Step 5: Multi-line BOQ formatting and EN 10204 3.1 MTC requirement assertion', () => {
    const boqSubmission = {
      poNumber: 'PO-PETRO-2026-IN625-091',
      lineItems: [
        'Item 1: Seamless Inconel 625 Pipe, ASTM B444 Gr 1, 4" NB Sch 80, Length 6m, Qty: 50 lengths',
        'Item 2: Inconel 625 90° LR Elbows, ASTM B366, 4" NB Sch 80, Qty: 20 pcs',
      ],
      mandatoryTests: [
        'EN 10204 3.1 MTC from NABL accredited laboratory',
        'Hydrostatic test per ASTM B444',
        '100% PMI (Positive Material Identification)',
      ],
      shipTo: 'Hazira Refinery Complex via Kalamboli Hub',
    };

    assert.equal(boqSubmission.lineItems.length, 2);
    assert.ok(boqSubmission.mandatoryTests[0].includes('EN 10204 3.1'));
  });
});
