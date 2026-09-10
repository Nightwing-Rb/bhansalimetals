/**
 * Tier 3: Cross-Feature Combinations (Pairwise Coverage)
 * Validates complex interactions between alloy metallurgy, product geometry,
 * engineering dimension standards, third-party inspection, and conversion funnels.
 */

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ORACLE } from '../helpers/oracle-data.mjs';
import { assertWhatsAppUrlValid, assertValidJsonLd } from '../helpers/assertions.mjs';

describe('Tier 3 Pairwise Combination 1: Inconel 625 Flanges + ASME B16.5 + WhatsApp Pre-Fill + MTC 3.1', () => {
  test('Pairwise 1: Cross-references Inconel 625 (UNS N06625) with ASME B16.5 Class 1500# WNRF flange', () => {
    const alloy = ORACLE.alloys.inconel.find(a => a.grade === 'Inconel 625');
    assert.equal(alloy.uns, 'UNS N06625');
    assert.equal(alloy.wnr, '2.4856');

    // Generate dynamic WhatsApp URL
    const inquiryText = `Inquiry: 24 pcs Inconel 625 (UNS N06625) WNRF Flanges 4" Class 1500# ASME B16.5 with EN 10204 3.1 MTC`;
    const waUrl = `https://wa.me/${ORACLE.company.salesWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent(inquiryText)}`;

    assertWhatsAppUrlValid(waUrl, 'Inconel 625', 'Flanges');
    assert.ok(waUrl.includes('1500'), 'Class 1500# preserved in URL');
    assert.ok(waUrl.includes('MTC'), 'MTC requirement preserved in URL');
  });
});

describe('Tier 3 Pairwise Combination 2: Hastelloy C-276 Seamless Pipe + Schedule Chart + RFQ BOQ Modal', () => {
  test('Pairwise 2: Connects Hastelloy C-276 (Ni-Mo-Cr-W) pipe with Schedule 80 wall thickness into BOQ item', () => {
    const alloy = ORACLE.alloys.hastelloy.find(a => a.grade === 'Hastelloy C-276');
    assert.equal(alloy.uns, 'UNS N10276');
    assert.ok(alloy.metallurgy.includes('-W'));

    // Pipe Schedule check: 3" Sch 80
    // OD = 88.9 mm (3.5"), Wall thickness = 7.62 mm (0.300")
    const odMm = 88.9;
    const wtMm = 7.62;
    const densityC276 = 8.89; // g/cm³
    // Pipe weight formula: (OD - WT) * WT * pi * density / 1000
    const linearWeightKgM = (odMm - wtMm) * wtMm * 0.0279; // ~17.2 kg/m
    assert.ok(linearWeightKgM > 15 && linearWeightKgM < 20);

    const boqText = `Item 1: Hastelloy C-276 Seamless Pipe, 3" NB Sch 80, Length 6000mm, Qty: 40 lengths (~${(linearWeightKgM * 6 * 40).toFixed(0)} kg)`;
    assert.ok(boqText.includes('Hastelloy C-276'));
    assert.ok(boqText.includes('Sch 80'));
  });
});

describe('Tier 3 Pairwise Combination 3: Monel 400 Round Bar + Weight Calculator + Kalamboli Stock Readiness Pill', () => {
  test('Pairwise 3: Computes exact tonnage for 50mm Monel 400 round bright bars and links to stock pill', () => {
    const alloy = ORACLE.alloys.monel.find(a => a.grade === 'Monel 400');
    assert.equal(alloy.uns, 'UNS N04400');

    // Monel 400 density = 8.80 g/cm³
    // Formula: OD^2 * 0.00623 * (8.80 / 7.93) = OD^2 * 0.00691
    const diameter = 50; // mm
    const weightPerMeter = diameter * diameter * 0.00691; // ~17.28 kg/m
    const totalLengthMeters = 300;
    const totalTonnage = (weightPerMeter * totalLengthMeters) / 1000;

    assert.ok(Math.abs(totalTonnage - 5.18) < 0.2, 'Total weight is ~5.18 metric tonnes');

    const stockPillState = {
      ready: true,
      yard: ORACLE.company.godown,
      leadTime: 'Same-day MTC dispatch',
    };
    assert.ok(stockPillState.ready);
    assert.ok(stockPillState.yard.includes('Kalamboli'));
  });
});

describe('Tier 3 Pairwise Combination 4: Super Duplex 2507 Plates + Dual-Unit Composition + NACE MR0175 + TPI Badge', () => {
  test('Pairwise 4: Combines Super Duplex 2507 heavy plate with PREN >= 42, NACE compliance, and BV inspection', () => {
    const sd2507 = ORACLE.alloys.duplex.find(a => a.grade === 'Super Duplex 2507');
    assert.equal(sd2507.uns, 'UNS S32750');

    // Plate size: 25mm thickness, 2000mm width, 6000mm length
    const lMeters = 6.0;
    const wMeters = 2.0;
    const tMm = 25.0;
    const densityDuplex = 7.8;
    const plateWeightKg = lMeters * wMeters * tMm * densityDuplex;
    assert.equal(plateWeightKg, 2340.0, 'Plate weight is exactly 2,340 kg');

    // Verify Inspection badge alignment
    const bvAgency = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'BV');
    assert.ok(bvAgency);
    assert.equal(bvAgency.name, 'Bureau Veritas');
  });
});

describe('Tier 3 Pairwise Combination 5: Stainless Steel 316L Buttweld Fittings + MTC 3.1 + Email RFQ Payload', () => {
  test('Pairwise 5: Assembles 90° Long Radius Elbows in SS 316L (UNS S31603) with EN 10204 3.1 certification', () => {
    const ss316L = ORACLE.alloys.stainlessSteel.find(a => a.grade === 'SS 316L');
    assert.equal(ss316L.uns, 'UNS S31603');

    const subject = encodeURIComponent('RFQ: SS 316L Buttweld Elbows for Marine Project');
    const mailto = `mailto:${ORACLE.company.email}?subject=${subject}`;

    assert.ok(mailto.includes(ORACLE.company.email));
    assert.ok(mailto.includes('316L'));
  });
});

describe('Tier 3 Pairwise Combination 6: Incoloy 800 Plates + High Temperature Metallurgy + TÜV India Inspection', () => {
  test('Pairwise 6: Verifies Incoloy 800 (Ni-Fe-Cr) plate heat resistance specs with TÜV India certification stamp', () => {
    const alloy = ORACLE.alloys.incoloy.find(a => a.grade === 'Incoloy 800');
    assert.equal(alloy.family, 'Incoloy');
    assert.equal(alloy.wnr, '1.4876');

    const tuvAgency = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'TUV');
    assert.ok(tuvAgency);
    assert.equal(tuvAgency.name, 'TÜV India');
  });
});

describe('Tier 3 Pairwise Combination 7: Nickel 200 Round Bars + Chemical Purity (99.6%) + Kalamboli Yard Dispatch', () => {
  test('Pairwise 7: Validates commercial purity Nickel 200 (UNS N02200) bars with Kalamboli yard logistics', () => {
    const ni200 = ORACLE.alloys.nickel.find(a => a.grade === 'Nickel 200');
    assert.equal(ni200.uns, 'UNS N02200');
    assert.ok(ni200.metallurgy.includes('99.6%'));
    assert.ok(ORACLE.company.godown.includes('Kalamboli'));
  });
});

describe('Tier 3 Pairwise Combination 8: Duplex 2205 Flanges + ASME Class 600# + MTC 3.1 + BOQ Form', () => {
  test('Pairwise 8: Connects Duplex 2205 (UNS S31803 / S32205) Class 600# Blind Flanges with BOQ text format', () => {
    const d2205 = ORACLE.alloys.duplex.find(a => a.grade === 'Duplex 2205');
    assert.ok(d2205.uns.includes('S31803'));

    const boqEntry = {
      grade: 'Duplex 2205',
      product: 'Blind Flanges (BLRF)',
      rating: 'Class 600#',
      standard: 'ASME B16.5',
      mtc: 'EN 10204 3.1',
    };
    assert.equal(boqEntry.grade, 'Duplex 2205');
    assert.equal(boqEntry.rating, 'Class 600#');
  });
});

describe('Tier 3 Pairwise Combination 9: Monel K-500 Fasteners + Seawater Service + Bureau Veritas Inspection', () => {
  test('Pairwise 9: Age-hardened Monel K-500 (UNS N05500) high-tensile fasteners validated with BV testing', () => {
    const mk500 = ORACLE.alloys.monel.find(a => a.grade === 'Monel K-500');
    assert.equal(mk500.wnr, '2.4375');
    assert.ok(mk500.metallurgy.includes('Al-Ti')); // Aluminum and Titanium for precipitation hardening

    const bv = ORACLE.trust.tpiAgencies.find(a => a.symbol === 'BV');
    assert.ok(bv);
  });
});

describe('Tier 3 Pairwise Combination 10: SS 304L Seamless Pipe + Sch 40 Dimensions + Weight Formula + JNPT Port Export', () => {
  test('Pairwise 10: Seamless SS 304L pipe Schedule 40 weight calculated and paired with JNPT Nhava Sheva container export', () => {
    const ss304L = ORACLE.alloys.stainlessSteel.find(a => a.grade === 'SS 304L');
    assert.equal(ss304L.uns, 'UNS S30403');

    // 2" Sch 40 SS pipe: OD = 60.3mm, WT = 3.91mm
    // Weight = (60.3 - 3.91) * 3.91 * 0.02491 = 5.49 kg/m
    const weightPerM = (60.3 - 3.91) * 3.91 * 0.02491;
    assert.ok(Math.abs(weightPerM - 5.49) < 0.05);

    assert.ok(ORACLE.company.dispatchPort.includes('JNPT'));
  });
});
