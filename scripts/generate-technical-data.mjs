import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TECH_DIR = path.join(ROOT, 'src', 'content', 'technical-data');
fs.mkdirSync(TECH_DIR, { recursive: true });

// 1. ASME B16.5 Flanges (all 6 classes 150, 300, 600, 900, 1500, 2500 and sizes 1/2" to 24")
const flangeRows = [];
const flangeSizes = [
  { nps: '1/2"', dn: 15, od150: 89, thk150: 11.2, pcd150: 60.5, holes150: 4, hDia150: 16, wt150: 0.9, od300: 95, thk300: 14.3, pcd300: 66.7, holes300: 4, hDia300: 16, wt300: 1.4, od600: 95, thk600: 14.3, pcd600: 66.7, holes600: 4, hDia600: 16, wt600: 1.6, od900: 120, thk900: 22.3, pcd900: 82.6, holes900: 4, hDia900: 22, wt900: 2.8, od1500: 120, thk1500: 22.3, pcd1500: 82.6, holes1500: 4, hDia1500: 22, wt1500: 2.9, od2500: 135, thk2500: 30.2, pcd2500: 88.9, holes2500: 4, hDia2500: 22, wt2500: 3.4 },
  { nps: '3/4"', dn: 20, od150: 98.5, thk150: 12.7, pcd150: 69.8, holes150: 4, hDia150: 16, wt150: 1.2, od300: 117, thk300: 15.9, pcd300: 82.6, holes300: 4, hDia300: 19, wt300: 2.0, od600: 117, thk600: 15.9, pcd600: 82.6, holes600: 4, hDia600: 19, wt600: 2.2, od900: 130, thk900: 25.4, pcd900: 88.9, holes900: 4, hDia900: 22, wt900: 3.8, od1500: 130, thk1500: 25.4, pcd1500: 88.9, holes1500: 4, hDia1500: 22, wt1500: 3.8, od2500: 140, thk2500: 31.8, pcd2500: 95.2, holes2500: 4, hDia2500: 22, wt2500: 4.8 },
  { nps: '1"', dn: 25, od150: 108.0, thk150: 14.3, pcd150: 79.2, holes150: 4, hDia150: 16, wt150: 1.5, od300: 124, thk300: 17.5, pcd300: 88.9, holes300: 4, hDia300: 19, wt300: 2.6, od600: 124, thk600: 17.5, pcd600: 88.9, holes600: 4, hDia600: 19, wt600: 2.8, od900: 150, thk900: 28.6, pcd900: 101.6, holes900: 4, hDia900: 25, wt900: 5.2, od1500: 150, thk1500: 28.6, pcd1500: 101.6, holes1500: 4, hDia1500: 25, wt1500: 5.2, od2500: 160, thk2500: 35.0, pcd2500: 108.0, holes2500: 4, hDia2500: 25, wt2500: 6.8 },
  { nps: '1-1/2"', dn: 40, od150: 127.0, thk150: 17.5, pcd150: 98.6, holes150: 4, hDia150: 16, wt150: 2.4, od300: 155, thk300: 20.6, pcd300: 114.3, holes300: 4, hDia300: 22, wt300: 4.2, od600: 155, thk600: 22.3, pcd600: 114.3, holes600: 4, hDia600: 22, wt600: 4.8, od900: 180, thk900: 31.8, pcd900: 124.0, holes900: 4, hDia900: 29, wt900: 8.0, od1500: 180, thk1500: 31.8, pcd1500: 124.0, holes1500: 4, hDia1500: 29, wt1500: 8.0, od2500: 205, thk2500: 44.5, pcd2500: 146.0, holes2500: 4, hDia2500: 32, wt2500: 13.5 },
  { nps: '2"', dn: 50, od150: 152.4, thk150: 19.1, pcd150: 120.7, holes150: 4, hDia150: 19, wt150: 3.2, od300: 165, thk300: 22.3, pcd300: 127.0, holes300: 8, hDia300: 19, wt300: 5.0, od600: 165, thk600: 25.4, pcd600: 127.0, holes600: 8, hDia600: 19, wt600: 6.2, od900: 215, thk900: 38.1, pcd900: 165.1, holes900: 8, hDia900: 25, wt900: 14.0, od1500: 215, thk1500: 38.1, pcd1500: 165.1, holes1500: 8, hDia1500: 25, wt1500: 14.0, od2500: 235, thk2500: 50.8, pcd2500: 171.4, holes2500: 8, hDia2500: 29, wt2500: 20.5 },
  { nps: '3"', dn: 80, od150: 190.5, thk150: 23.9, pcd150: 152.4, holes150: 4, hDia150: 19, wt150: 5.6, od300: 210, thk300: 28.6, pcd300: 168.3, holes300: 8, hDia300: 22, wt300: 8.5, od600: 210, thk600: 31.8, pcd600: 168.3, holes600: 8, hDia600: 22, wt600: 10.5, od900: 240, thk900: 38.1, pcd900: 190.5, holes900: 8, hDia900: 25, wt900: 17.0, od1500: 265, thk1500: 47.8, pcd1500: 203.2, holes1500: 8, hDia1500: 32, wt1500: 24.5, od2500: 305, thk2500: 66.7, pcd2500: 228.6, holes2500: 8, hDia2500: 35, wt2500: 45.0 },
  { nps: '4"', dn: 100, od150: 228.6, thk150: 23.9, pcd150: 190.5, holes150: 8, hDia150: 19, wt150: 8.0, od300: 255, thk300: 31.8, pcd300: 200.0, holes300: 8, hDia300: 22, wt300: 13.5, od600: 275, thk600: 38.1, pcd600: 215.9, holes600: 8, hDia600: 25, wt600: 19.5, od900: 290, thk900: 44.5, pcd900: 235.0, holes900: 8, hDia900: 32, wt900: 28.0, od1500: 310, thk1500: 53.8, pcd1500: 241.3, holes1500: 8, hDia1500: 35, wt1500: 38.0, od2500: 355, thk2500: 76.2, pcd2500: 273.0, holes2500: 8, hDia2500: 41, wt2500: 75.0 },
  { nps: '6"', dn: 150, od150: 279.4, thk150: 25.4, pcd150: 241.3, holes150: 8, hDia150: 22, wt150: 12.0, od300: 320, thk300: 36.5, pcd300: 269.9, holes300: 12, hDia300: 22, wt300: 22.0, od600: 355, thk600: 47.8, pcd600: 292.1, holes600: 12, hDia600: 29, wt600: 39.0, od900: 380, thk900: 55.6, pcd900: 317.5, holes900: 12, hDia900: 32, wt900: 55.0, od1500: 395, thk1500: 82.6, pcd1500: 317.5, holes1500: 12, hDia1500: 38, wt1500: 95.0, od2500: 485, thk2500: 108.0, pcd2500: 368.3, holes2500: 8, hDia2500: 54, wt2500: 175.0 },
  { nps: '8"', dn: 200, od150: 342.9, thk150: 28.4, pcd150: 298.5, holes150: 8, hDia150: 22, wt150: 19.5, od300: 380, thk300: 41.1, pcd300: 330.2, holes300: 12, hDia300: 25, wt300: 35.0, od600: 420, thk600: 55.6, pcd600: 349.2, holes600: 12, hDia600: 32, wt600: 60.0, od900: 470, thk900: 63.5, pcd900: 393.7, holes900: 12, hDia900: 38, wt900: 95.0, od1500: 485, thk1500: 92.2, pcd1500: 393.7, holes1500: 12, hDia1500: 44, wt1500: 155.0, od2500: 550, thk2500: 127.0, pcd2500: 438.2, holes2500: 8, hDia2500: 54, wt2500: 280.0 },
  { nps: '10"', dn: 250, od150: 406.4, thk150: 30.2, pcd150: 362.0, holes150: 12, hDia150: 25, wt150: 27.5, od300: 445, thk300: 47.8, pcd300: 387.4, holes300: 16, hDia300: 29, wt300: 53.0, od600: 510, thk600: 63.5, pcd600: 431.8, holes600: 16, hDia600: 35, wt600: 105.0, od900: 545, thk900: 69.9, pcd900: 469.9, holes900: 16, hDia900: 38, wt900: 145.0, od1500: 585, thk1500: 108.0, pcd1500: 482.6, holes1500: 12, hDia1500: 51, wt1500: 260.0, od2500: 675, thk2500: 165.0, pcd2500: 539.8, holes2500: 8, hDia2500: 67, wt2500: 510.0 },
  { nps: '12"', dn: 300, od150: 482.6, thk150: 31.8, pcd150: 431.8, holes150: 12, hDia150: 25, wt150: 40.0, od300: 520, thk300: 50.8, pcd300: 450.8, holes300: 16, hDia300: 32, wt300: 74.0, od600: 560, thk600: 66.5, pcd600: 489.0, holes600: 20, hDia600: 35, wt600: 135.0, od900: 610, thk900: 79.2, pcd900: 533.4, holes900: 20, hDia900: 38, wt900: 215.0, od1500: 675, thk1500: 124.0, pcd1500: 571.5, holes1500: 16, hDia1500: 54, wt1500: 395.0, od2500: 760, thk2500: 184.0, pcd2500: 616.0, holes2500: 8, hDia2500: 73, wt2500: 760.0 },
  { nps: '16"', dn: 400, od150: 596.9, thk150: 36.6, pcd150: 539.8, holes150: 16, hDia150: 29, wt150: 65.0, od300: 650, thk300: 57.2, pcd300: 571.5, holes300: 20, hDia300: 35, wt300: 120.0, od600: 685, thk600: 76.2, pcd600: 603.2, holes600: 20, hDia600: 41, wt600: 215.0, od900: 705, thk900: 88.9, pcd900: 616.0, holes900: 20, hDia900: 44, wt900: 320.0, od1500: 825, thk1500: 146.0, pcd1500: 692.2, holes1500: 16, hDia1500: 67, wt1500: 695.0, od2500: 890, thk2500: 216.0, pcd2500: 749.3, holes2500: 8, hDia2500: 79, wt2500: 1100.0 },
  { nps: '20"', dn: 500, od150: 698.5, thk150: 42.9, pcd150: 635.0, holes150: 20, hDia150: 32, wt150: 98.0, od300: 775, thk300: 63.5, pcd300: 685.8, holes300: 24, hDia300: 35, wt300: 185.0, od600: 815, thk600: 88.9, pcd600: 723.9, holes600: 24, hDia600: 44, wt600: 345.0, od900: 855, thk900: 108.0, pcd900: 749.3, holes900: 20, hDia900: 54, wt900: 530.0, od1500: 985, thk1500: 178.0, pcd1500: 831.8, holes1500: 16, hDia1500: 79, wt1500: 1250.0, od2500: 1070, thk2500: 248.0, pcd2500: 901.7, holes2500: 8, hDia2500: 92, wt2500: 2100.0 },
  { nps: '24"', dn: 600, od150: 812.8, thk150: 47.8, pcd150: 749.3, holes150: 20, hDia150: 35, wt150: 140.0, od300: 915, thk300: 69.9, pcd300: 812.8, holes300: 24, hDia300: 41, wt300: 270.0, od600: 940, thk600: 101.6, pcd600: 838.2, holes600: 24, hDia600: 51, wt600: 515.0, od900: 1040, thk900: 140.0, pcd900: 901.7, holes900: 20, hDia900: 67, wt900: 940.0, od1500: 1170, thk1500: 203.0, pcd1500: 990.6, holes1500: 16, hDia1500: 92, wt1500: 1950.0, od2500: 1260, thk2500: 298.0, pcd2500: 1060.4, holes2500: 8, hDia2500: 105, wt2500: 3450.0 }
];

const classes = [150, 300, 600, 900, 1500, 2500];
for (const cls of classes) {
  for (const s of flangeSizes) {
    const od = s[`od${cls}`];
    const thk = s[`thk${cls}`];
    const pcd = s[`pcd${cls}`];
    const holes = s[`holes${cls}`];
    const hDia = s[`hDia${cls}`];
    const wt = s[`wt${cls}`];
    flangeRows.push({
      "Nominal Pipe Size (NPS)": s.nps,
      "Pressure Class": `Class ${cls}#`,
      "Outside Diameter (OD mm / in)": `${od} mm / ${(od / 25.4).toFixed(2)}"`,
      "Flange Thickness (mm / in)": `${thk} mm / ${(thk / 25.4).toFixed(2)}"`,
      "Bolt Circle (PCD / BCD mm)": `${pcd} mm`,
      "Number of Holes": holes,
      "Hole Diameter (mm)": `${hDia} mm`,
      "Approx Weight (kg / lbs)": `${wt} kg / ${(wt * 2.20462).toFixed(1)} lbs`
    });
  }
}

const flangeData = {
  title: "ASME B16.5 Flange Dimensions & Bolt Hole Specifications",
  standard: "ASME B16.5 / ASTM A182 / ASTM B564",
  category: "flange-dimensions",
  metaTitle: "ASME B16.5 Flange Dimensions Chart (Class 150 - 2500) | Bhansali Metals",
  metaDescription: "Standard dimensions, bolt circle diameter (PCD/BCD), bolt holes, and weights for ASME B16.5 flanges across 1/2 inch to 24 inch NPS. Class 150, 300, 600, 900, 1500, 2500#.",
  description: "Comprehensive engineering dimensional data for forged steel and high-nickel alloy flanges manufactured to ASME B16.5 standards. Covers Outside Diameter (OD), Flange Thickness, Bolt Circle (BCD), Number of Holes, Hole Diameter, and Approx Weight across all 6 pressure classes: Class 150, 300, 600, 900, 1500, and 2500#.",
  downloadablePdf: "/downloads/asme-b16-5-flange-dimensions-bhansali.pdf",
  tableHeaders: [
    "Nominal Pipe Size (NPS)",
    "Pressure Class",
    "Outside Diameter (OD mm / in)",
    "Flange Thickness (mm / in)",
    "Bolt Circle (PCD / BCD mm)",
    "Number of Holes",
    "Hole Diameter (mm)",
    "Approx Weight (kg / lbs)"
  ],
  rows: flangeRows,
  dualUnitAvailable: true,
  notes: [
    "Dimensions comply with ASME B16.5 for pipe flanges and flanged fittings from NPS 1/2 through NPS 24.",
    "Pressure ratings: Class 150, Class 300, Class 600, Class 900, Class 1500, and Class 2500.",
    "Available in Inconel 625, Monel 400, Hastelloy C-276, Stainless Steel 316L, and Super Duplex 2507 with EN 10204 3.1 MTC."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'asme-b16-5-flanges.json'), JSON.stringify(flangeData, null, 2), 'utf-8');
fs.writeFileSync(path.join(TECH_DIR, 'asme-b16-5-flange-dimensions.json'), JSON.stringify(flangeData, null, 2), 'utf-8');
console.log('Created asme-b16-5-flanges.json and asme-b16-5-flange-dimensions.json');

// 2. Pipe Schedule Chart (1/8" to 24"+, Sch 10, Sch 40, Sch 80, Sch 160, XXS, OD, ID, Wall Thickness, Weights)
const pipeSizesAll = [
  { nps: '1/8"', dn: 6, od: 10.3, s10: 1.24, s40: 1.73, s80: 2.41, s160: 3.15, xxs: 4.83 },
  { nps: '1/4"', dn: 8, od: 13.7, s10: 1.65, s40: 2.24, s80: 3.02, s160: 3.85, xxs: 6.05 },
  { nps: '3/8"', dn: 10, od: 17.1, s10: 1.65, s40: 2.31, s80: 3.20, s160: 4.01, xxs: 6.40 },
  { nps: '1/2"', dn: 15, od: 21.3, s10: 2.11, s40: 2.77, s80: 3.73, s160: 4.78, xxs: 7.47 },
  { nps: '3/4"', dn: 20, od: 26.7, s10: 2.11, s40: 2.87, s80: 3.91, s160: 5.56, xxs: 7.82 },
  { nps: '1"', dn: 25, od: 33.4, s10: 2.77, s40: 3.38, s80: 4.55, s160: 6.35, xxs: 9.09 },
  { nps: '1-1/4"', dn: 32, od: 42.2, s10: 2.77, s40: 3.56, s80: 4.85, s160: 6.35, xxs: 9.70 },
  { nps: '1-1/2"', dn: 40, od: 48.3, s10: 2.77, s40: 3.68, s80: 5.08, s160: 7.14, xxs: 10.15 },
  { nps: '2"', dn: 50, od: 60.3, s10: 2.77, s40: 3.91, s80: 5.54, s160: 8.74, xxs: 11.07 },
  { nps: '2-1/2"', dn: 65, od: 73.0, s10: 3.05, s40: 5.16, s80: 7.01, s160: 9.53, xxs: 14.02 },
  { nps: '3"', dn: 80, od: 88.9, s10: 3.05, s40: 5.49, s80: 7.62, s160: 11.13, xxs: 15.24 },
  { nps: '4"', dn: 100, od: 114.3, s10: 3.05, s40: 6.02, s80: 8.56, s160: 13.49, xxs: 17.12 },
  { nps: '5"', dn: 125, od: 141.3, s10: 3.40, s40: 6.55, s80: 9.53, s160: 15.88, xxs: 19.05 },
  { nps: '6"', dn: 150, od: 168.3, s10: 3.40, s40: 7.11, s80: 10.97, s160: 18.26, xxs: 21.95 },
  { nps: '8"', dn: 200, od: 219.1, s10: 3.76, s40: 8.18, s80: 12.70, s160: 23.01, xxs: 22.23 },
  { nps: '10"', dn: 250, od: 273.0, s10: 4.19, s40: 9.27, s80: 15.09, s160: 28.58, xxs: 25.40 },
  { nps: '12"', dn: 300, od: 323.8, s10: 4.57, s40: 10.31, s80: 17.48, s160: 33.32, xxs: 25.40 },
  { nps: '14"', dn: 350, od: 355.6, s10: 6.35, s40: 11.13, s80: 19.05, s160: 35.71, xxs: 25.40 },
  { nps: '16"', dn: 400, od: 406.4, s10: 6.35, s40: 12.70, s80: 21.44, s160: 40.49, xxs: 25.40 },
  { nps: '18"', dn: 450, od: 457.0, s10: 6.35, s40: 14.27, s80: 23.83, s160: 45.24, xxs: 25.40 },
  { nps: '20"', dn: 500, od: 508.0, s10: 6.35, s40: 15.09, s80: 26.19, s160: 50.01, xxs: 25.40 },
  { nps: '24"', dn: 600, od: 610.0, s10: 6.35, s40: 17.48, s80: 30.96, s160: 59.54, xxs: 25.40 }
];

const pipeScheduleRows = pipeSizesAll.map(p => {
  const wt40 = p.s40;
  const id40 = (p.od - 2 * wt40).toFixed(2);
  const kgm = ((p.od - wt40) * wt40 * 0.02466).toFixed(2);
  const lbsft = (kgm * 0.671969).toFixed(2);
  return {
    "Nominal Pipe Size (NPS)": p.nps,
    "Outside Diameter (OD mm / in)": `${p.od} mm / ${(p.od / 25.4).toFixed(3)}"`,
    "Inside Diameter (ID mm / in)": `${id40} mm / ${(id40 / 25.4).toFixed(3)}"`,
    "Wall Thickness (mm / in)": `${wt40} mm / ${(wt40 / 25.4).toFixed(3)}"`,
    "Sch 10 Wall (mm)": p.s10,
    "Sch 40 / STD (mm)": p.s40,
    "Sch 80 / XS (mm)": p.s80,
    "Sch 160 Wall (mm)": p.s160,
    "Sch XXS Wall (mm)": p.xxs,
    "Weight (kg/m / lbs/ft)": `${kgm} kg/m / ${lbsft} lbs/ft`,
    "Weight (kg/m)": Number(kgm),
    "Weight (lbs/ft)": Number(lbsft)
  };
});

const pipeScheduleData = {
  title: "ASME B36.10M & B36.19M Pipe Schedule Dimensions & Wall Thickness Chart",
  standard: "ASME B36.10M / ASME B36.19M",
  category: "pipe-schedules",
  metaTitle: "Pipe Schedule Chart (Sch 10, 40, 80, 160, XXS) | Bhansali Metals",
  metaDescription: "Comprehensive pipe schedule dimensions chart covering nominal pipe sizes 1/8 inch to 24 inch, outside diameter (OD), inside diameter (ID), wall thickness (WT), and weights in kg/m and lbs/ft.",
  description: "Standard dimensional schedule data for carbon steel, stainless steel, and nickel alloy pipes. Compares wall thicknesses and theoretical weights across Schedule 10, Schedule 40 / STD, Schedule 80 / XS, Schedule 160, and Schedule XXS per ASME B36.10M and B36.19M.",
  downloadablePdf: "/downloads/asme-b36-pipe-schedule-chart-bhansali.pdf",
  tableHeaders: [
    "Nominal Pipe Size (NPS)",
    "Outside Diameter (OD mm / in)",
    "Inside Diameter (ID mm / in)",
    "Wall Thickness (mm / in)",
    "Sch 10 Wall (mm)",
    "Sch 40 / STD (mm)",
    "Sch 80 / XS (mm)",
    "Sch 160 Wall (mm)",
    "Sch XXS Wall (mm)",
    "Weight (kg/m / lbs/ft)",
    "Weight (kg/m)",
    "Weight (lbs/ft)"
  ],
  rows: pipeScheduleRows,
  dualUnitAvailable: true,
  notes: [
    "Covers NPS 1/8\" through 24\" nominal pipe sizes.",
    "Includes schedules from Sch 10 through Sch 40, Sch 80, Sch 160, and XXS.",
    "Outside Diameter (OD), Inside Diameter (ID), Wall Thickness (t), and Theoretical Weight in both kg/m and lbs/ft.",
    "Ready stock at Bhansali Metals Kalamboli Yard with full EN 10204 3.1 MTC."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'pipe-schedule-chart.json'), JSON.stringify(pipeScheduleData, null, 2), 'utf-8');
console.log('Created pipe-schedule-chart.json');

// 3. Theoretical Weight Formulas (all 14 formulas from ORACLE.weightFormulas)
const weightFormulasRows = [
  { "Form / Product": "SS Round Bar", "Material": "Stainless Steel (All Grades)", "Mathematical Formula": "OD * OD * 0.00623", "Unit": "kg/m", "Density (g/cm³)": "7.93 - 8.00", "Variables": "OD = Outside Diameter in mm" },
  { "Form / Product": "CS Round Bar", "Material": "Carbon Steel / Mild Steel", "Mathematical Formula": "OD * OD * 0.006165", "Unit": "kg/m", "Density (g/cm³)": "7.85", "Variables": "OD = Outside Diameter in mm" },
  { "Form / Product": "Hexagonal Bar", "Material": "Stainless & Alloy Steel", "Mathematical Formula": "AF * AF * 0.00679", "Unit": "kg/m", "Density (g/cm³)": "7.93", "Variables": "AF = Across Flats in mm" },
  { "Form / Product": "Square Bar", "Material": "Stainless & Carbon Steel", "Mathematical Formula": "Side * Side * 0.00787", "Unit": "kg/m", "Density (g/cm³)": "7.93", "Variables": "Side = Width in mm" },
  { "Form / Product": "SS 304 Sheet", "Material": "Stainless Steel 304 / 304L", "Mathematical Formula": "Length * Width * Thickness * 8.0", "Unit": "kg/piece", "Density (g/cm³)": "8.00", "Variables": "Length & Width in m, Thickness in mm" },
  { "Form / Product": "SS 316 Sheet", "Material": "Stainless Steel 316 / 316L", "Mathematical Formula": "Length * Width * Thickness * 8.02", "Unit": "kg/piece", "Density (g/cm³)": "8.02", "Variables": "Length & Width in m, Thickness in mm" },
  { "Form / Product": "CS Sheet", "Material": "Carbon Steel Plates", "Mathematical Formula": "Length * Width * Thickness * 7.85", "Unit": "kg/piece", "Density (g/cm³)": "7.85", "Variables": "Length & Width in m, Thickness in mm" },
  { "Form / Product": "SS 304 Pipe", "Material": "Stainless Steel 304 Seamless", "Mathematical Formula": "(OD - WT) * WT * 0.02491", "Unit": "kg/m", "Density (g/cm³)": "8.00", "Variables": "OD & WT in mm" },
  { "Form / Product": "SS 316 Pipe", "Material": "Stainless Steel 316 Seamless", "Mathematical Formula": "(OD - WT) * WT * 0.02507", "Unit": "kg/m", "Density (g/cm³)": "8.02", "Variables": "OD & WT in mm" },
  { "Form / Product": "CS Pipe", "Material": "Carbon Steel Seamless / Welded", "Mathematical Formula": "(OD - WT) * WT * 0.02466", "Unit": "kg/m", "Density (g/cm³)": "7.85", "Variables": "OD & WT in mm" },
  { "Form / Product": "Flat Bar", "Material": "Stainless & Alloy Steel", "Mathematical Formula": "Width * Thickness * 0.00785", "Unit": "kg/m", "Density (g/cm³)": "7.93", "Variables": "Width & Thickness in mm" },
  { "Form / Product": "Circle / Blank", "Material": "Stainless Steel Circles", "Mathematical Formula": "OD * OD * Thickness * 0.00000623", "Unit": "kg/piece", "Density (g/cm³)": "8.00", "Variables": "OD & Thickness in mm" },
  { "Form / Product": "Copper Sheet", "Material": "Pure Copper / Cu-Ni Alloys", "Mathematical Formula": "Length * Width * Thickness * 8.9", "Unit": "kg/piece", "Density (g/cm³)": "8.90", "Variables": "Length & Width in m, Thickness in mm" },
  { "Form / Product": "Nickel Alloy Pipe", "Material": "Inconel 625, Monel 400, Hastelloy", "Mathematical Formula": "(OD - WT) * WT * 0.0276", "Unit": "kg/m", "Density (g/cm³)": "8.44 - 8.90", "Variables": "OD & WT in mm" }
];

const weightFormulasData = {
  title: "Theoretical Metal Weight Calculation Formulas & Density Engine",
  standard: "ASTM / ASME / ISO Density Standards",
  category: "weight-formulas",
  metaTitle: "Theoretical Metal Weight Calculation Formulas | Bhansali Metals",
  metaDescription: "Mathematical formulas and calculator for calculating theoretical weights of stainless steel, carbon steel, and nickel alloy pipes, round bars, sheets, and circles.",
  description: "Complete reference of 14 standardized mathematical formulas for calculating theoretical weights of metal pipes, tubes, round bars, plates, sheets, flats, and hollow sections across Stainless Steel, High Nickel Alloys, and Carbon Steel.",
  downloadablePdf: "/downloads/theoretical-metal-weight-formulas-bhansali.pdf",
  tableHeaders: [
    "Form / Product",
    "Material",
    "Mathematical Formula",
    "Unit",
    "Density (g/cm³)",
    "Variables"
  ],
  rows: weightFormulasRows,
  dualUnitAvailable: true,
  notes: [
    "SS Round Bar formula computes OD * OD * 0.00623 kg/m for stainless steel.",
    "SS Sheet formula computes Length (m) * Width (m) * Thickness (mm) * 8.0 for SS 304 and 8.02 for SS 316.",
    "Seamless Pipe formula computes (OD - WT) * WT * 0.02491 kg/m for SS 304.",
    "Zero dimension inputs guard against division by zero errors."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'theoretical-weight-formulas.json'), JSON.stringify(weightFormulasData, null, 2), 'utf-8');
fs.writeFileSync(path.join(TECH_DIR, 'theoretical-metal-weight-formulas.json'), JSON.stringify(weightFormulasData, null, 2), 'utf-8');
console.log('Created theoretical-weight-formulas.json and theoretical-metal-weight-formulas.json');

// 4. Stainless Steel Chemical Composition
const ssChemRows = [
  { Grade: "SS 304", UNS: "UNS S30400", "W.Nr.": "1.4301", C: "0.08 max", Cr: "18.0 - 20.0", Ni: "8.0 - 10.5", Mo: "-", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "N 0.10 max" },
  { Grade: "SS 304L", UNS: "UNS S30403", "W.Nr.": "1.4306", C: "0.030 max", Cr: "17.5 - 19.5", Ni: "8.0 - 12.0", Mo: "-", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "N 0.10 max" },
  { Grade: "SS 316", UNS: "UNS S31600", "W.Nr.": "1.4401", C: "0.08 max", Cr: "16.0 - 18.0", Ni: "10.0 - 14.0", Mo: "2.00 - 3.00", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "N 0.10 max" },
  { Grade: "SS 316L", UNS: "UNS S31603", "W.Nr.": "1.4404", C: "0.030 max", Cr: "16.0 - 18.0", Ni: "10.0 - 14.0", Mo: "2.00 - 3.00", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "N 0.10 max" },
  { Grade: "SS 321", UNS: "UNS S32100", "W.Nr.": "1.4541", C: "0.08 max", Cr: "17.0 - 19.0", Ni: "9.0 - 12.0", Mo: "-", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "Ti 5x(C+N) min" },
  { Grade: "SS 310S", UNS: "UNS S31008", "W.Nr.": "1.4845", C: "0.08 max", Cr: "24.0 - 26.0", Ni: "19.0 - 22.0", Mo: "-", Mn: "2.00 max", Si: "1.50 max", P: "0.045 max", S: "0.030 max", "Other Elements": "-" },
  { Grade: "SS 347", UNS: "UNS S34700", "W.Nr.": "1.4550", C: "0.08 max", Cr: "17.0 - 19.0", Ni: "9.0 - 13.0", Mo: "-", Mn: "2.00 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", "Other Elements": "Nb 10xC min" },
  { Grade: "SS 904L", UNS: "UNS N08904", "W.Nr.": "1.4539", C: "0.020 max", Cr: "19.0 - 23.0", Ni: "23.0 - 28.0", Mo: "4.00 - 5.00", Mn: "2.00 max", Si: "1.00 max", P: "0.045 max", S: "0.035 max", "Other Elements": "Cu 1.0 - 2.0" },
  { Grade: "Duplex 2205", UNS: "UNS S31803 / S32205", "W.Nr.": "1.4462", C: "0.030 max", Cr: "22.0 - 23.0", Ni: "4.5 - 6.5", Mo: "3.00 - 3.50", Mn: "2.00 max", Si: "1.00 max", P: "0.030 max", S: "0.020 max", "Other Elements": "N 0.14 - 0.20" },
  { Grade: "Super Duplex 2507", UNS: "UNS S32750", "W.Nr.": "1.4410", C: "0.030 max", Cr: "24.0 - 26.0", Ni: "6.0 - 8.0", Mo: "3.00 - 5.00", Mn: "1.20 max", Si: "0.80 max", P: "0.035 max", S: "0.020 max", "Other Elements": "N 0.24 - 0.32" }
];

const ssChemData = {
  title: "Stainless Steel & Duplex Chemical Composition Specification Limits",
  standard: "ASTM A240 / ASTM A182 / ASTM A312 / EN 10088",
  category: "metallurgical-data",
  metaTitle: "Stainless Steel Chemical Composition Matrix | Bhansali Metals",
  metaDescription: "Standard chemical composition bounds (% weight) for austenitic, ferritic, and duplex stainless steels including SS 304, 316, 321, 310S, 904L, 2205, and 2507.",
  description: "Accredited chemical composition ranges and elemental min/max bounds (% weight) showing key elements Cr, Ni, C, Mo, Mn, Si, P, and S per ASTM standards.",
  downloadablePdf: "/downloads/stainless-steel-chemical-composition-bhansali.pdf",
  tableHeaders: ["Grade", "UNS", "W.Nr.", "C", "Cr", "Ni", "Mo", "Mn", "Si", "P", "S", "Other Elements"],
  rows: ssChemRows,
  dualUnitAvailable: true,
  notes: [
    "All values are percentages by weight (% wt) maximum unless a range or minimum is indicated.",
    "ASTM A240 / A182 ladle analysis specification compliance certified on all Bhansali Metals MTC 3.1 documents."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'stainless-chemical-composition.json'), JSON.stringify(ssChemData, null, 2), 'utf-8');
console.log('Created stainless-chemical-composition.json');

// 5. Nickel Alloy Chemical Composition
const nickelChemRows = [
  { Grade: "Inconel 625", UNS: "UNS N06625", "W.Nr.": "2.4856", Ni: "58.0 min", Cr: "20.0 - 23.0", Mo: "8.0 - 10.0", Fe: "5.0 max", "Nb+Ta": "3.15 - 4.15", C: "0.10 max", Mn: "0.50 max", Si: "0.50 max", Al: "0.40 max", Ti: "0.40 max" },
  { Grade: "Inconel 600", UNS: "UNS N06600", "W.Nr.": "2.4816", Ni: "72.0 min", Cr: "14.0 - 17.0", Mo: "-", Fe: "6.0 - 10.0", "Nb+Ta": "-", C: "0.15 max", Mn: "1.00 max", Si: "0.50 max", Al: "-", Ti: "-" },
  { Grade: "Inconel 718", UNS: "UNS N07718", "W.Nr.": "2.4668", Ni: "50.0 - 55.0", Cr: "17.0 - 21.0", Mo: "2.8 - 3.3", Fe: "Balance", "Nb+Ta": "4.75 - 5.50", C: "0.08 max", Mn: "0.35 max", Si: "0.35 max", Al: "0.20 - 0.80", Ti: "0.65 - 1.15" },
  { Grade: "Incoloy 800", UNS: "UNS N08800", "W.Nr.": "1.4876", Ni: "30.0 - 35.0", Cr: "19.0 - 23.0", Mo: "-", Fe: "39.5 min", "Nb+Ta": "-", C: "0.10 max", Mn: "1.50 max", Si: "1.00 max", Al: "0.15 - 0.60", Ti: "0.15 - 0.60" },
  { Grade: "Incoloy 825", UNS: "UNS N08825", "W.Nr.": "2.4858", Ni: "38.0 - 46.0", Cr: "19.5 - 23.5", Mo: "2.5 - 3.5", Fe: "22.0 min", "Nb+Ta": "-", C: "0.05 max", Mn: "1.00 max", Si: "0.50 max", Al: "0.20 max", Ti: "0.60 - 1.20" },
  { Grade: "Monel 400", UNS: "UNS N04400", "W.Nr.": "2.4360", Ni: "63.0 min", Cr: "-", Mo: "-", Fe: "2.5 max", "Nb+Ta": "-", C: "0.30 max", Mn: "2.00 max", Si: "0.50 max", Al: "-", Ti: "-" },
  { Grade: "Monel K-500", UNS: "UNS N05500", "W.Nr.": "2.4375", Ni: "63.0 min", Cr: "-", Mo: "-", Fe: "2.0 max", "Nb+Ta": "-", C: "0.25 max", Mn: "1.50 max", Si: "0.50 max", Al: "2.30 - 3.15", Ti: "0.35 - 0.85" },
  { Grade: "Hastelloy C-276", UNS: "UNS N10276", "W.Nr.": "2.4819", Ni: "Balance", Cr: "14.5 - 16.5", Mo: "15.0 - 17.0", Fe: "4.0 - 7.0", "Nb+Ta": "-", C: "0.010 max", Mn: "1.00 max", Si: "0.08 max", Al: "-", Ti: "-" },
  { Grade: "Hastelloy C-22", UNS: "UNS N06022", "W.Nr.": "2.4602", Ni: "Balance", Cr: "20.0 - 22.5", Mo: "12.5 - 14.5", Fe: "2.0 - 6.0", "Nb+Ta": "-", C: "0.015 max", Mn: "0.50 max", Si: "0.08 max", Al: "-", Ti: "-" },
  { Grade: "Hastelloy B-2", UNS: "UNS N10665", "W.Nr.": "2.4617", Ni: "Balance", Cr: "1.0 max", Mo: "26.0 - 30.0", Fe: "2.0 max", "Nb+Ta": "-", C: "0.010 max", Mn: "1.00 max", Si: "0.10 max", Al: "-", Ti: "-" },
  { Grade: "Hastelloy X", UNS: "UNS N06002", "W.Nr.": "2.4665", Ni: "Balance", Cr: "20.5 - 23.0", Mo: "8.0 - 10.0", Fe: "17.0 - 20.0", "Nb+Ta": "-", C: "0.05 - 0.15", Mn: "1.00 max", Si: "1.00 max", Al: "-", Ti: "-" },
  { Grade: "Nickel 200", UNS: "UNS N02200", "W.Nr.": "2.4066", Ni: "99.0 min", Cr: "-", Mo: "-", Fe: "0.40 max", "Nb+Ta": "-", C: "0.15 max", Mn: "0.35 max", Si: "0.35 max", Al: "-", Ti: "-" },
  { Grade: "Nickel 201", UNS: "UNS N02201", "W.Nr.": "2.4068", Ni: "99.0 min", Cr: "-", Mo: "-", Fe: "0.40 max", "Nb+Ta": "-", C: "0.02 max", Mn: "0.35 max", Si: "0.35 max", Al: "-", Ti: "-" }
];

const nickelChemData = {
  title: "High Nickel Superalloy Chemical Composition Standard Limits",
  standard: "ASTM B166 / B444 / B564 / B575 / DIN 17744",
  category: "metallurgical-data",
  metaTitle: "Nickel Alloy Chemical Composition Matrix | Bhansali Metals",
  metaDescription: "Accredited chemical composition specifications for Inconel, Monel, Hastelloy, and commercial pure Nickel grades with elemental min/max percentage bounds.",
  description: "Comprehensive chemical analysis tables for high-nickel superalloys detailing exact ladle limits for Nickel (Ni), Chromium (Cr), Molybdenum (Mo), Iron (Fe), Niobium (Nb), Titanium (Ti), and Carbon (C).",
  downloadablePdf: "/downloads/nickel-alloy-chemical-composition-bhansali.pdf",
  tableHeaders: ["Grade", "UNS", "W.Nr.", "Ni", "Cr", "Mo", "Fe", "Nb+Ta", "C", "Mn", "Si", "Al", "Ti"],
  rows: nickelChemRows,
  dualUnitAvailable: true,
  notes: [
    "Chemical composition conforms to ASTM / ASME standards.",
    "Certified via Positive Material Identification (PMI) on all stock items."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'nickel-chemical-composition.json'), JSON.stringify(nickelChemData, null, 2), 'utf-8');
fs.writeFileSync(path.join(TECH_DIR, 'chemical-compositions-alloys.json'), JSON.stringify(nickelChemData, null, 2), 'utf-8');
console.log('Created nickel-chemical-composition.json and chemical-compositions-alloys.json');

// 6. Mechanical Properties (Tensile Strength MPa and ksi, Yield Strength MPa and ksi)
const mechRows = [
  { "Alloy Grade": "Inconel 625", "UNS Number": "UNS N06625", "Tensile Strength (MPa / ksi)": "827 MPa / 120 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "414 MPa / 60 ksi min", "Elongation (% in 2\")": "30% min", "Hardness (HRB / HRC)": "HRB 85 - 100", "Density (g/cm³)": 8.44 },
  { "Alloy Grade": "Inconel 600", "UNS Number": "UNS N06600", "Tensile Strength (MPa / ksi)": "550 MPa / 80 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "240 MPa / 35 ksi min", "Elongation (% in 2\")": "30% min", "Hardness (HRB / HRC)": "HRB 65 - 85", "Density (g/cm³)": 8.47 },
  { "Alloy Grade": "Inconel 718", "UNS Number": "UNS N07718", "Tensile Strength (MPa / ksi)": "1240 MPa / 180 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "1034 MPa / 150 ksi min", "Elongation (% in 2\")": "12% min", "Hardness (HRB / HRC)": "HRC 36 - 44", "Density (g/cm³)": 8.19 },
  { "Alloy Grade": "Monel 400", "UNS Number": "UNS N04400", "Tensile Strength (MPa / ksi)": "480 MPa / 70 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "195 MPa / 28 ksi min", "Elongation (% in 2\")": "35% min", "Hardness (HRB / HRC)": "HRB 60 - 80", "Density (g/cm³)": 8.80 },
  { "Alloy Grade": "Monel K-500", "UNS Number": "UNS N05500", "Tensile Strength (MPa / ksi)": "965 MPa / 140 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "690 MPa / 100 ksi min", "Elongation (% in 2\")": "20% min", "Hardness (HRB / HRC)": "HRC 27 - 38", "Density (g/cm³)": 8.44 },
  { "Alloy Grade": "Hastelloy C-276", "UNS Number": "UNS N10276", "Tensile Strength (MPa / ksi)": "690 MPa / 100 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "283 MPa / 41 ksi min", "Elongation (% in 2\")": "40% min", "Hardness (HRB / HRC)": "HRB 88 - 95", "Density (g/cm³)": 8.89 },
  { "Alloy Grade": "Hastelloy C-22", "UNS Number": "UNS N06022", "Tensile Strength (MPa / ksi)": "690 MPa / 100 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "310 MPa / 45 ksi min", "Elongation (% in 2\")": "45% min", "Hardness (HRB / HRC)": "HRB 90 max", "Density (g/cm³)": 8.69 },
  { "Alloy Grade": "SS 316L", "UNS Number": "UNS S31603", "Tensile Strength (MPa / ksi)": "485 MPa / 70 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "170 MPa / 25 ksi min", "Elongation (% in 2\")": "40% min", "Hardness (HRB / HRC)": "HRB 95 max", "Density (g/cm³)": 8.00 },
  { "Alloy Grade": "SS 304L", "UNS Number": "UNS S30403", "Tensile Strength (MPa / ksi)": "485 MPa / 70 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "170 MPa / 25 ksi min", "Elongation (% in 2\")": "40% min", "Hardness (HRB / HRC)": "HRB 92 max", "Density (g/cm³)": 7.93 },
  { "Alloy Grade": "Duplex 2205", "UNS Number": "UNS S32205", "Tensile Strength (MPa / ksi)": "655 MPa / 95 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "450 MPa / 65 ksi min", "Elongation (% in 2\")": "25% min", "Hardness (HRB / HRC)": "HRC 32 max", "Density (g/cm³)": 7.80 },
  { "Alloy Grade": "Super Duplex 2507", "UNS Number": "UNS S32750", "Tensile Strength (MPa / ksi)": "750 MPa / 116 ksi min", "Yield Strength (0.2% Offset, MPa / ksi)": "550 MPa / 80 ksi min", "Elongation (% in 2\")": "15% min", "Hardness (HRB / HRC)": "HRC 32 max", "Density (g/cm³)": 7.80 }
];

const mechData = {
  title: "Mechanical Properties & Tensile Data Dual-Unit Comparison",
  standard: "ASTM A370 / ASTM E8 / ISO 6892-1",
  category: "metallurgical-data",
  metaTitle: "Mechanical Properties Comparison (MPa / ksi) | Bhansali Metals",
  metaDescription: "Dual-unit mechanical properties comparison table showing Tensile Strength (MPa / ksi), Yield Strength (0.2% offset), Elongation %, and Hardness across superalloys.",
  description: "Comprehensive dual-unit mechanical properties matrix. Displays minimum specified values for Tensile Strength in both MPa and ksi, Yield Strength at 0.2% offset in MPa and ksi, percentage elongation, and hardness ratings.",
  downloadablePdf: "/downloads/mechanical-properties-comparison-bhansali.pdf",
  tableHeaders: [
    "Alloy Grade",
    "UNS Number",
    "Tensile Strength (MPa / ksi)",
    "Yield Strength (0.2% Offset, MPa / ksi)",
    "Elongation (% in 2\")",
    "Hardness (HRB / HRC)",
    "Density (g/cm³)"
  ],
  rows: mechRows,
  dualUnitAvailable: true,
  notes: [
    "Dual unit conversions: 1 MPa ≈ 0.145038 ksi; 1 ksi ≈ 6.89476 MPa.",
    "Tested at ambient temperature (20°C / 68°F) to ASTM A370 standards.",
    "Ladle and product test coupons certified with EN 10204 3.1 MTC."
  ]
};

fs.writeFileSync(path.join(TECH_DIR, 'mechanical-properties.json'), JSON.stringify(mechData, null, 2), 'utf-8');
fs.writeFileSync(path.join(TECH_DIR, 'mechanical-properties-comparison.json'), JSON.stringify(mechData, null, 2), 'utf-8');
console.log('Created mechanical-properties.json and mechanical-properties-comparison.json');

// 7. Bar Tolerances
const barTolRows = [
  { "Nominal Diameter (mm)": "Over 3 to 6 mm", "Tolerance Class h9 (mm)": "0 to -0.030", "Tolerance Class h11 (mm)": "0 to -0.075", "Tolerance Class k12 (mm)": "+0.120 to 0", "Straightness (mm/m)": "1.5 mm/m" },
  { "Nominal Diameter (mm)": "Over 6 to 10 mm", "Tolerance Class h9 (mm)": "0 to -0.036", "Tolerance Class h11 (mm)": "0 to -0.090", "Tolerance Class k12 (mm)": "+0.150 to 0", "Straightness (mm/m)": "1.5 mm/m" },
  { "Nominal Diameter (mm)": "Over 10 to 18 mm", "Tolerance Class h9 (mm)": "0 to -0.043", "Tolerance Class h11 (mm)": "0 to -0.110", "Tolerance Class k12 (mm)": "+0.180 to 0", "Straightness (mm/m)": "1.0 mm/m" },
  { "Nominal Diameter (mm)": "Over 18 to 30 mm", "Tolerance Class h9 (mm)": "0 to -0.052", "Tolerance Class h11 (mm)": "0 to -0.130", "Tolerance Class k12 (mm)": "+0.210 to 0", "Straightness (mm/m)": "1.0 mm/m" },
  { "Nominal Diameter (mm)": "Over 30 to 50 mm", "Tolerance Class h9 (mm)": "0 to -0.062", "Tolerance Class h11 (mm)": "0 to -0.160", "Tolerance Class k12 (mm)": "+0.250 to 0", "Straightness (mm/m)": "1.0 mm/m" },
  { "Nominal Diameter (mm)": "Over 50 to 80 mm", "Tolerance Class h9 (mm)": "0 to -0.074", "Tolerance Class h11 (mm)": "0 to -0.190", "Tolerance Class k12 (mm)": "+0.300 to 0", "Straightness (mm/m)": "1.0 mm/m" },
  { "Nominal Diameter (mm)": "Over 80 to 120 mm", "Tolerance Class h9 (mm)": "0 to -0.087", "Tolerance Class h11 (mm)": "0 to -0.220", "Tolerance Class k12 (mm)": "+0.350 to 0", "Straightness (mm/m)": "1.5 mm/m" },
  { "Nominal Diameter (mm)": "Over 120 to 180 mm", "Tolerance Class h9 (mm)": "0 to -0.100", "Tolerance Class h11 (mm)": "0 to -0.250", "Tolerance Class k12 (mm)": "+0.400 to 0", "Straightness (mm/m)": "1.5 mm/m" },
  { "Nominal Diameter (mm)": "Over 180 to 250 mm", "Tolerance Class h9 (mm)": "0 to -0.115", "Tolerance Class h11 (mm)": "0 to -0.290", "Tolerance Class k12 (mm)": "+0.460 to 0", "Straightness (mm/m)": "2.0 mm/m" }
];

const barTolData = {
  title: "Round Bar Dimensional Tolerances (PN-EN 754/755 & ISO 286)",
  standard: "ISO 286 / PN-EN 754 / ASTM A484",
  category: "metallurgical-data",
  metaTitle: "Round Bar Dimensional Tolerances Chart | Bhansali Metals",
  metaDescription: "Precision dimensional tolerance charts for bright drawn, peeled, and centerless ground round bars per ISO 286 h9, h11, and k12 classes.",
  description: "Standard dimensional tolerances and permissible straightness limits for bright drawn, peeled, and turned round bars in stainless steel and high nickel alloys.",
  downloadablePdf: "/downloads/round-bar-tolerances-bhansali.pdf",
  tableHeaders: ["Nominal Diameter (mm)", "Tolerance Class h9 (mm)", "Tolerance Class h11 (mm)", "Tolerance Class k12 (mm)", "Straightness (mm/m)"],
  rows: barTolRows,
  dualUnitAvailable: true,
  notes: ["Class h9 applies to centerless ground and polished bars. Class h11 applies to cold drawn bars."]
};
fs.writeFileSync(path.join(TECH_DIR, 'bar-tolerances.json'), JSON.stringify(barTolData, null, 2), 'utf-8');
console.log('Created bar-tolerances.json');

// 8. International Equivalents
const equivRows = [
  { "Common Name": "Inconel 625", "UNS Code": "UNS N06625", "Werkstoff / DIN": "W.Nr. 2.4856", "EN Designation": "NiCr22Mo9Nb", "JIS Standard": "NCF 625", AFNOR: "NC22FeDNb" },
  { "Common Name": "Inconel 600", "UNS Code": "UNS N06600", "Werkstoff / DIN": "W.Nr. 2.4816", "EN Designation": "NiCr15Fe", "JIS Standard": "NCF 600", AFNOR: "NC15Fe" },
  { "Common Name": "Inconel 718", "UNS Code": "UNS N07718", "Werkstoff / DIN": "W.Nr. 2.4668", "EN Designation": "NiCr19Fe19Nb5Mo3", "JIS Standard": "NCF 718", AFNOR: "NC19FeNb" },
  { "Common Name": "Incoloy 800", "UNS Code": "UNS N08800", "Werkstoff / DIN": "W.Nr. 1.4876", "EN Designation": "X10NiCrAlTi32-20", "JIS Standard": "NCF 800", AFNOR: "Z8NC32-21" },
  { "Common Name": "Incoloy 825", "UNS Code": "UNS N08825", "Werkstoff / DIN": "W.Nr. 2.4858", "EN Designation": "NiCr21Mo", "JIS Standard": "NCF 825", AFNOR: "NC21FeDU" },
  { "Common Name": "Monel 400", "UNS Code": "UNS N04400", "Werkstoff / DIN": "W.Nr. 2.4360", "EN Designation": "NiCu30Fe", "JIS Standard": "NW 4400", AFNOR: "NU-30M" },
  { "Common Name": "Monel K-500", "UNS Code": "UNS N05500", "Werkstoff / DIN": "W.Nr. 2.4375", "EN Designation": "NiCu30Al", "JIS Standard": "NW 5500", AFNOR: "NU-30A" },
  { "Common Name": "Hastelloy C-276", "UNS Code": "UNS N10276", "Werkstoff / DIN": "W.Nr. 2.4819", "EN Designation": "NiMo16Cr15W", "JIS Standard": "NW 0276", AFNOR: "Ni-Mo16Cr" },
  { "Common Name": "Hastelloy C-22", "UNS Code": "UNS N06022", "Werkstoff / DIN": "W.Nr. 2.4602", "EN Designation": "NiCr21Mo14W", "JIS Standard": "NW 6022", AFNOR: "NC21Mo" },
  { "Common Name": "Hastelloy B-2", "UNS Code": "UNS N10665", "Werkstoff / DIN": "W.Nr. 2.4617", "EN Designation": "NiMo28", "JIS Standard": "NW 0665", AFNOR: "N-Mo28" },
  { "Common Name": "Hastelloy X", "UNS Code": "UNS N06002", "Werkstoff / DIN": "W.Nr. 2.4665", "EN Designation": "NiCr22Fe18Mo", "JIS Standard": "NW 6002", AFNOR: "NC22FeD" },
  { "Common Name": "Nickel 200", "UNS Code": "UNS N02200", "Werkstoff / DIN": "W.Nr. 2.4066", "EN Designation": "Ni99.2", "JIS Standard": "NW 2200", AFNOR: "Ni-99.2" },
  { "Common Name": "Nickel 201", "UNS Code": "UNS N02201", "Werkstoff / DIN": "W.Nr. 2.4068", "EN Designation": "LC-Ni99", "JIS Standard": "NW 2201", AFNOR: "LC-Ni99" },
  { "Common Name": "SS 304", "UNS Code": "UNS S30400", "Werkstoff / DIN": "W.Nr. 1.4301", "EN Designation": "X5CrNi18-10", "JIS Standard": "SUS 304", AFNOR: "Z7CN18-09" },
  { "Common Name": "SS 304L", "UNS Code": "UNS S30403", "Werkstoff / DIN": "W.Nr. 1.4306", "EN Designation": "X2CrNi19-11", "JIS Standard": "SUS 304L", AFNOR: "Z3CN18-10" },
  { "Common Name": "SS 316", "UNS Code": "UNS S31600", "Werkstoff / DIN": "W.Nr. 1.4401", "EN Designation": "X5CrNiMo17-12-2", "JIS Standard": "SUS 316", AFNOR: "Z7CND17-11-02" },
  { "Common Name": "SS 316L", "UNS Code": "UNS S31603", "Werkstoff / DIN": "W.Nr. 1.4404", "EN Designation": "X2CrNiMo17-12-2", "JIS Standard": "SUS 316L", AFNOR: "Z3CND17-11-02" },
  { "Common Name": "SS 321", "UNS Code": "UNS S32100", "Werkstoff / DIN": "W.Nr. 1.4541", "EN Designation": "X6CrNiTi18-10", "JIS Standard": "SUS 321", AFNOR: "Z6CNT18-10" },
  { "Common Name": "SS 310S", "UNS Code": "UNS S31008", "Werkstoff / DIN": "W.Nr. 1.4845", "EN Designation": "X8CrNi25-21", "JIS Standard": "SUS 310S", AFNOR: "Z8CN25-20" },
  { "Common Name": "SS 904L", "UNS Code": "UNS N08904", "Werkstoff / DIN": "W.Nr. 1.4539", "EN Designation": "X1NiCrMoCu25-20-5", "JIS Standard": "SUS 890L", AFNOR: "Z2NCDU25-20" },
  { "Common Name": "Duplex 2205", "UNS Code": "UNS S31803 / S32205", "Werkstoff / DIN": "W.Nr. 1.4462", "EN Designation": "X2CrNiMoN22-5-3", "JIS Standard": "SUS 329J3L", AFNOR: "Z3CND22-05Az" },
  { "Common Name": "Super Duplex 2507", "UNS Code": "UNS S32750", "Werkstoff / DIN": "W.Nr. 1.4410", "EN Designation": "X2CrNiMoN25-7-4", "JIS Standard": "SUS 329J4L", AFNOR: "Z3CND25-06Az" }
];

const equivData = {
  title: "International Standard Equivalence Matrix (ASTM / DIN / UNS / JIS / EN)",
  standard: "ASTM / DIN / UNS / JIS / EN / AFNOR",
  category: "metallurgical-data",
  metaTitle: "International Alloy Grade Equivalence Chart | Bhansali Metals",
  metaDescription: "Cross-reference matrix linking US UNS designations to German Werkstoff numbers, European EN standards, Japanese JIS grades, and French AFNOR specs.",
  description: "Comprehensive cross-reference table mapping ASTM/UNS grades to Werkstoff (W.Nr.), DIN, European EN, Japanese JIS, and French AFNOR equivalents for seamless engineering procurement.",
  downloadablePdf: "/downloads/international-grade-equivalents-bhansali.pdf",
  tableHeaders: ["Common Name", "UNS Code", "Werkstoff / DIN", "EN Designation", "JIS Standard", "AFNOR"],
  rows: equivRows,
  dualUnitAvailable: true,
  notes: ["Cross-reference standards are approximate equivalents with verified matching chemical & mechanical properties."]
};
fs.writeFileSync(path.join(TECH_DIR, 'international-equivalents.json'), JSON.stringify(equivData, null, 2), 'utf-8');
console.log('Created international-equivalents.json');

// 9. Elbow Dimensions (ASME B16.9)
const elbowRows = [
  { "Nominal Pipe Size (NPS)": "1/2\"", "Outside Diameter (OD mm)": 21.3, "90° Long Radius A (mm)": 38, "90° Short Radius A (mm)": 25, "45° Long Radius B (mm)": 16, "Approx Weight 90° LR (kg)": 0.08 },
  { "Nominal Pipe Size (NPS)": "3/4\"", "Outside Diameter (OD mm)": 26.7, "90° Long Radius A (mm)": 38, "90° Short Radius A (mm)": 25, "45° Long Radius B (mm)": 19, "Approx Weight 90° LR (kg)": 0.12 },
  { "Nominal Pipe Size (NPS)": "1\"", "Outside Diameter (OD mm)": 33.4, "90° Long Radius A (mm)": 38, "90° Short Radius A (mm)": 25, "45° Long Radius B (mm)": 22, "Approx Weight 90° LR (kg)": 0.18 },
  { "Nominal Pipe Size (NPS)": "1-1/2\"", "Outside Diameter (OD mm)": 48.3, "90° Long Radius A (mm)": 57, "90° Short Radius A (mm)": 38, "45° Long Radius B (mm)": 35, "Approx Weight 90° LR (kg)": 0.38 },
  { "Nominal Pipe Size (NPS)": "2\"", "Outside Diameter (OD mm)": 60.3, "90° Long Radius A (mm)": 76, "90° Short Radius A (mm)": 51, "45° Long Radius B (mm)": 35, "Approx Weight 90° LR (kg)": 0.65 },
  { "Nominal Pipe Size (NPS)": "3\"", "Outside Diameter (OD mm)": 88.9, "90° Long Radius A (mm)": 114, "90° Short Radius A (mm)": 76, "45° Long Radius B (mm)": 51, "Approx Weight 90° LR (kg)": 1.70 },
  { "Nominal Pipe Size (NPS)": "4\"", "Outside Diameter (OD mm)": 114.3, "90° Long Radius A (mm)": 152, "90° Short Radius A (mm)": 102, "45° Long Radius B (mm)": 64, "Approx Weight 90° LR (kg)": 3.20 },
  { "Nominal Pipe Size (NPS)": "6\"", "Outside Diameter (OD mm)": 168.3, "90° Long Radius A (mm)": 229, "90° Short Radius A (mm)": 152, "45° Long Radius B (mm)": 95, "Approx Weight 90° LR (kg)": 8.50 },
  { "Nominal Pipe Size (NPS)": "8\"", "Outside Diameter (OD mm)": 219.1, "90° Long Radius A (mm)": 305, "90° Short Radius A (mm)": 203, "45° Long Radius B (mm)": 127, "Approx Weight 90° LR (kg)": 18.00 },
  { "Nominal Pipe Size (NPS)": "10\"", "Outside Diameter (OD mm)": 273.0, "90° Long Radius A (mm)": 381, "90° Short Radius A (mm)": 254, "45° Long Radius B (mm)": 159, "Approx Weight 90° LR (kg)": 32.00 },
  { "Nominal Pipe Size (NPS)": "12\"", "Outside Diameter (OD mm)": 323.8, "90° Long Radius A (mm)": 457, "90° Short Radius A (mm)": 305, "45° Long Radius B (mm)": 190, "Approx Weight 90° LR (kg)": 52.00 },
  { "Nominal Pipe Size (NPS)": "16\"", "Outside Diameter (OD mm)": 406.4, "90° Long Radius A (mm)": 610, "90° Short Radius A (mm)": 406, "45° Long Radius B (mm)": 254, "Approx Weight 90° LR (kg)": 95.00 },
  { "Nominal Pipe Size (NPS)": "20\"", "Outside Diameter (OD mm)": 508.0, "90° Long Radius A (mm)": 762, "90° Short Radius A (mm)": 508, "45° Long Radius B (mm)": 318, "Approx Weight 90° LR (kg)": 160.00 },
  { "Nominal Pipe Size (NPS)": "24\"", "Outside Diameter (OD mm)": 610.0, "90° Long Radius A (mm)": 914, "90° Short Radius A (mm)": 610, "45° Long Radius B (mm)": 381, "Approx Weight 90° LR (kg)": 245.00 }
];

const elbowData = {
  title: "ASME B16.9 Buttweld Elbows Dimensions & Weights",
  standard: "ASME B16.9 / ASTM A403 / ASTM B366",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.9 Elbows Dimensions (45° / 90° LR / SR) | Bhansali Metals",
  metaDescription: "Center-to-end dimensions, outside diameters, and weights for ASME B16.9 90 degree Long Radius, Short Radius, and 45 degree buttweld elbows.",
  description: "Standard dimensions for seamless and welded factory-made wrought buttwelding elbows covering 45-degree and 90-degree Long Radius (LR) and Short Radius (SR) from 1/2 inch through 24 inch.",
  downloadablePdf: "/downloads/asme-b16-9-elbow-dimensions-bhansali.pdf",
  tableHeaders: ["Nominal Pipe Size (NPS)", "Outside Diameter (OD mm)", "90° Long Radius A (mm)", "90° Short Radius A (mm)", "45° Long Radius B (mm)", "Approx Weight 90° LR (kg)"],
  rows: elbowRows,
  dualUnitAvailable: true,
  notes: ["Manufactured in Inconel 625, Monel 400, Hastelloy C-276, Duplex 2205, and SS 316L."]
};
fs.writeFileSync(path.join(TECH_DIR, 'elbow-dimensions.json'), JSON.stringify(elbowData, null, 2), 'utf-8');
fs.writeFileSync(path.join(TECH_DIR, 'asme-b16-9-elbows.json'), JSON.stringify(elbowData, null, 2), 'utf-8');
console.log('Created elbow-dimensions.json and asme-b16-9-elbows.json');

// 10. Tee Dimensions
const teeRows = [
  { "Nominal Pipe Size (NPS)": "1/2\"", "Outside Diameter Run (mm)": 21.3, "Outside Diameter Branch (mm)": 21.3, "Center to End Run C (mm)": 25, "Center to End Outlet M (mm)": 25, "Approx Weight (kg)": 0.15 },
  { "Nominal Pipe Size (NPS)": "3/4\"", "Outside Diameter Run (mm)": 26.7, "Outside Diameter Branch (mm)": 26.7, "Center to End Run C (mm)": 29, "Center to End Outlet M (mm)": 29, "Approx Weight (kg)": 0.22 },
  { "Nominal Pipe Size (NPS)": "1\"", "Outside Diameter Run (mm)": 33.4, "Outside Diameter Branch (mm)": 33.4, "Center to End Run C (mm)": 38, "Center to End Outlet M (mm)": 38, "Approx Weight (kg)": 0.38 },
  { "Nominal Pipe Size (NPS)": "1-1/2\"", "Outside Diameter Run (mm)": 48.3, "Outside Diameter Branch (mm)": 48.3, "Center to End Run C (mm)": 57, "Center to End Outlet M (mm)": 57, "Approx Weight (kg)": 0.85 },
  { "Nominal Pipe Size (NPS)": "2\"", "Outside Diameter Run (mm)": 60.3, "Outside Diameter Branch (mm)": 60.3, "Center to End Run C (mm)": 64, "Center to End Outlet M (mm)": 64, "Approx Weight (kg)": 1.45 },
  { "Nominal Pipe Size (NPS)": "3\"", "Outside Diameter Run (mm)": 88.9, "Outside Diameter Branch (mm)": 88.9, "Center to End Run C (mm)": 86, "Center to End Outlet M (mm)": 86, "Approx Weight (kg)": 3.10 },
  { "Nominal Pipe Size (NPS)": "4\"", "Outside Diameter Run (mm)": 114.3, "Outside Diameter Branch (mm)": 114.3, "Center to End Run C (mm)": 105, "Center to End Outlet M (mm)": 105, "Approx Weight (kg)": 5.40 },
  { "Nominal Pipe Size (NPS)": "6\"", "Outside Diameter Run (mm)": 168.3, "Outside Diameter Branch (mm)": 168.3, "Center to End Run C (mm)": 143, "Center to End Outlet M (mm)": 143, "Approx Weight (kg)": 14.50 },
  { "Nominal Pipe Size (NPS)": "8\"", "Outside Diameter Run (mm)": 219.1, "Outside Diameter Branch (mm)": 219.1, "Center to End Run C (mm)": 178, "Center to End Outlet M (mm)": 178, "Approx Weight (kg)": 27.50 },
  { "Nominal Pipe Size (NPS)": "10\"", "Outside Diameter Run (mm)": 273.0, "Outside Diameter Branch (mm)": 273.0, "Center to End Run C (mm)": 216, "Center to End Outlet M (mm)": 216, "Approx Weight (kg)": 48.00 },
  { "Nominal Pipe Size (NPS)": "12\"", "Outside Diameter Run (mm)": 323.8, "Outside Diameter Branch (mm)": 323.8, "Center to End Run C (mm)": 254, "Center to End Outlet M (mm)": 254, "Approx Weight (kg)": 72.00 },
  { "Nominal Pipe Size (NPS)": "16\"", "Outside Diameter Run (mm)": 406.4, "Outside Diameter Branch (mm)": 406.4, "Center to End Run C (mm)": 305, "Center to End Outlet M (mm)": 305, "Approx Weight (kg)": 125.00 },
  { "Nominal Pipe Size (NPS)": "20\"", "Outside Diameter Run (mm)": 508.0, "Outside Diameter Branch (mm)": 508.0, "Center to End Run C (mm)": 381, "Center to End Outlet M (mm)": 381, "Approx Weight (kg)": 210.00 },
  { "Nominal Pipe Size (NPS)": "24\"", "Outside Diameter Run (mm)": 610.0, "Outside Diameter Branch (mm)": 610.0, "Center to End Run C (mm)": 432, "Center to End Outlet M (mm)": 432, "Approx Weight (kg)": 320.00 }
];

const teeData = {
  title: "ASME B16.9 Equal & Reducing Tees Dimensions",
  standard: "ASME B16.9 / ASTM A403 / ASTM B366",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.9 Equal & Reducing Tees Dimensions | Bhansali Metals",
  metaDescription: "Center to end run and outlet dimensions for equal straight tees and reducing tees from 1/2 inch to 24 inch NPS per ASME B16.9.",
  description: "Standard dimensional data for seamless and welded ASME B16.9 straight equal tees and reducing branch tees in stainless steel, duplex, and high-nickel alloys.",
  downloadablePdf: "/downloads/asme-b16-9-tee-dimensions-bhansali.pdf",
  tableHeaders: ["Nominal Pipe Size (NPS)", "Outside Diameter Run (mm)", "Outside Diameter Branch (mm)", "Center to End Run C (mm)", "Center to End Outlet M (mm)", "Approx Weight (kg)"],
  rows: teeRows,
  dualUnitAvailable: true,
  notes: ["Equal tees and reducing outlet combinations manufactured to strict wall thickness schedules."]
};
fs.writeFileSync(path.join(TECH_DIR, 'tee-dimensions.json'), JSON.stringify(teeData, null, 2), 'utf-8');
console.log('Created tee-dimensions.json');

// 11. Reducer Dimensions
const reducerRows = [
  { "Large End NPS": "1\"", "Small End NPS": "1/2\"", "Large OD (mm)": 33.4, "Small OD (mm)": 21.3, "Length H (mm)": 51, "Approx Weight (kg)": 0.20 },
  { "Large End NPS": "1-1/2\"", "Small End NPS": "1\"", "Large OD (mm)": 48.3, "Small OD (mm)": 33.4, "Length H (mm)": 64, "Approx Weight (kg)": 0.38 },
  { "Large End NPS": "2\"", "Small End NPS": "1\"", "Large OD (mm)": 60.3, "Small OD (mm)": 33.4, "Length H (mm)": 76, "Approx Weight (kg)": 0.60 },
  { "Large End NPS": "2\"", "Small End NPS": "1-1/2\"", "Large OD (mm)": 60.3, "Small OD (mm)": 48.3, "Length H (mm)": 76, "Approx Weight (kg)": 0.65 },
  { "Large End NPS": "3\"", "Small End NPS": "2\"", "Large OD (mm)": 88.9, "Small OD (mm)": 60.3, "Length H (mm)": 89, "Approx Weight (kg)": 1.15 },
  { "Large End NPS": "4\"", "Small End NPS": "2\"", "Large OD (mm)": 114.3, "Small OD (mm)": 60.3, "Length H (mm)": 102, "Approx Weight (kg)": 1.95 },
  { "Large End NPS": "4\"", "Small End NPS": "3\"", "Large OD (mm)": 114.3, "Small OD (mm)": 88.9, "Length H (mm)": 102, "Approx Weight (kg)": 2.10 },
  { "Large End NPS": "6\"", "Small End NPS": "4\"", "Large OD (mm)": 168.3, "Small OD (mm)": 114.3, "Length H (mm)": 140, "Approx Weight (kg)": 4.80 },
  { "Large End NPS": "8\"", "Small End NPS": "6\"", "Large OD (mm)": 219.1, "Small OD (mm)": 168.3, "Length H (mm)": 152, "Approx Weight (kg)": 9.20 },
  { "Large End NPS": "10\"", "Small End NPS": "8\"", "Large OD (mm)": 273.0, "Small OD (mm)": 219.1, "Length H (mm)": 178, "Approx Weight (kg)": 16.50 },
  { "Large End NPS": "12\"", "Small End NPS": "10\"", "Large OD (mm)": 323.8, "Small OD (mm)": 273.0, "Length H (mm)": 203, "Approx Weight (kg)": 25.00 },
  { "Large End NPS": "16\"", "Small End NPS": "12\"", "Large OD (mm)": 406.4, "Small OD (mm)": 323.8, "Length H (mm)": 356, "Approx Weight (kg)": 45.00 },
  { "Large End NPS": "20\"", "Small End NPS": "16\"", "Large OD (mm)": 508.0, "Small OD (mm)": 406.4, "Length H (mm)": 508, "Approx Weight (kg)": 95.00 },
  { "Large End NPS": "24\"", "Small End NPS": "20\"", "Large OD (mm)": 610.0, "Small OD (mm)": 508.0, "Length H (mm)": 508, "Approx Weight (kg)": 140.00 }
];

const reducerData = {
  title: "ASME B16.9 Concentric & Eccentric Reducers Dimensions",
  standard: "ASME B16.9 / ASTM A403 / ASTM B366",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.9 Reducer Dimensions (Concentric & Eccentric) | Bhansali Metals",
  metaDescription: "Standard length and outside diameters for concentric and eccentric pipe reducers per ASME B16.9 from 1 inch to 24 inch.",
  description: "Dimensional data for concentric and eccentric buttweld reducers manufactured to ASME B16.9 tolerances.",
  downloadablePdf: "/downloads/asme-b16-9-reducer-dimensions-bhansali.pdf",
  tableHeaders: ["Large End NPS", "Small End NPS", "Large OD (mm)", "Small OD (mm)", "Length H (mm)", "Approx Weight (kg)"],
  rows: reducerRows,
  dualUnitAvailable: true,
  notes: ["Concentric and eccentric profiles available in all schedule thicknesses."]
};
fs.writeFileSync(path.join(TECH_DIR, 'reducer-dimensions.json'), JSON.stringify(reducerData, null, 2), 'utf-8');
console.log('Created reducer-dimensions.json');

// 12. Forged Fittings (ASME B16.11)
const forgedRows = [
  { "Nominal Pipe Size (NPS)": "1/8\"", "Socket Bore B (mm)": 10.8, "Socket Depth J (mm)": 9.5, "Body Wall C (mm) 3000#": 3.18, "Body Wall C (mm) 6000#": 4.78, "Center to Bottom A (mm)": 11 },
  { "Nominal Pipe Size (NPS)": "1/4\"", "Socket Bore B (mm)": 14.2, "Socket Depth J (mm)": 9.5, "Body Wall C (mm) 3000#": 3.30, "Body Wall C (mm) 6000#": 4.88, "Center to Bottom A (mm)": 11 },
  { "Nominal Pipe Size (NPS)": "3/8\"", "Socket Bore B (mm)": 17.6, "Socket Depth J (mm)": 9.5, "Body Wall C (mm) 3000#": 3.51, "Body Wall C (mm) 6000#": 5.08, "Center to Bottom A (mm)": 13 },
  { "Nominal Pipe Size (NPS)": "1/2\"", "Socket Bore B (mm)": 21.8, "Socket Depth J (mm)": 9.5, "Body Wall C (mm) 3000#": 4.09, "Body Wall C (mm) 6000#": 5.97, "Center to Bottom A (mm)": 16 },
  { "Nominal Pipe Size (NPS)": "3/4\"", "Socket Bore B (mm)": 27.2, "Socket Depth J (mm)": 12.5, "Body Wall C (mm) 3000#": 4.27, "Body Wall C (mm) 6000#": 6.96, "Center to Bottom A (mm)": 19 },
  { "Nominal Pipe Size (NPS)": "1\"", "Socket Bore B (mm)": 33.9, "Socket Depth J (mm)": 12.5, "Body Wall C (mm) 3000#": 4.98, "Body Wall C (mm) 6000#": 7.92, "Center to Bottom A (mm)": 22 },
  { "Nominal Pipe Size (NPS)": "1-1/4\"", "Socket Bore B (mm)": 42.7, "Socket Depth J (mm)": 12.5, "Body Wall C (mm) 3000#": 5.28, "Body Wall C (mm) 6000#": 7.92, "Center to Bottom A (mm)": 27 },
  { "Nominal Pipe Size (NPS)": "1-1/2\"", "Socket Bore B (mm)": 48.8, "Socket Depth J (mm)": 12.5, "Body Wall C (mm) 3000#": 5.56, "Body Wall C (mm) 6000#": 8.92, "Center to Bottom A (mm)": 32 },
  { "Nominal Pipe Size (NPS)": "2\"", "Socket Bore B (mm)": 61.2, "Socket Depth J (mm)": 16.0, "Body Wall C (mm) 3000#": 6.05, "Body Wall C (mm) 6000#": 10.92, "Center to Bottom A (mm)": 38 },
  { "Nominal Pipe Size (NPS)": "2-1/2\"", "Socket Bore B (mm)": 74.0, "Socket Depth J (mm)": 16.0, "Body Wall C (mm) 3000#": 7.67, "Body Wall C (mm) 6000#": 12.14, "Center to Bottom A (mm)": 41 },
  { "Nominal Pipe Size (NPS)": "3\"", "Socket Bore B (mm)": 89.9, "Socket Depth J (mm)": 16.0, "Body Wall C (mm) 3000#": 8.31, "Body Wall C (mm) 6000#": 15.29, "Center to Bottom A (mm)": 57 },
  { "Nominal Pipe Size (NPS)": "4\"", "Socket Bore B (mm)": 115.3, "Socket Depth J (mm)": 19.0, "Body Wall C (mm) 3000#": 9.35, "Body Wall C (mm) 6000#": 18.67, "Center to Bottom A (mm)": 67 }
];

const forgedData = {
  title: "ASME B16.11 Forged High-Pressure Fittings Dimensions (Class 3000# & 6000#)",
  standard: "ASME B16.11 / ASTM A182 / ASTM B564",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.11 Forged Fittings Dimensions (3000# & 6000#) | Bhansali Metals",
  metaDescription: "Socket weld and threaded forged fittings dimensional chart for 3000# and 6000# elbows, tees, couplings, unions per ASME B16.11.",
  description: "Standard dimensional data for Class 3000# and 6000# forged socket-weld and threaded fittings per ASME B16.11.",
  downloadablePdf: "/downloads/asme-b16-11-forged-fittings-bhansali.pdf",
  tableHeaders: ["Nominal Pipe Size (NPS)", "Socket Bore B (mm)", "Socket Depth J (mm)", "Body Wall C (mm) 3000#", "Body Wall C (mm) 6000#", "Center to Bottom A (mm)"],
  rows: forgedRows,
  dualUnitAvailable: true,
  notes: ["Class 3000# and 6000# ratings suitable for severe offshore and high pressure sour service."]
};
fs.writeFileSync(path.join(TECH_DIR, 'asme-b16-11-forged-fittings.json'), JSON.stringify(forgedData, null, 2), 'utf-8');
console.log('Created asme-b16-11-forged-fittings.json');

// 13. Stub End Dimensions
const stubEndRows = [
  { "Nominal Pipe Size (NPS)": "1/2\"", "Barrel OD (mm)": 21.3, "Lap Diameter G (mm)": 35.0, "Lap Radius r (mm)": 3.0, "Length F Long (mm)": 76, "Length F Short (mm)": 51 },
  { "Nominal Pipe Size (NPS)": "3/4\"", "Barrel OD (mm)": 26.7, "Lap Diameter G (mm)": 43.0, "Lap Radius r (mm)": 3.0, "Length F Long (mm)": 76, "Length F Short (mm)": 51 },
  { "Nominal Pipe Size (NPS)": "1\"", "Barrel OD (mm)": 33.4, "Lap Diameter G (mm)": 51.0, "Lap Radius r (mm)": 3.0, "Length F Long (mm)": 102, "Length F Short (mm)": 51 },
  { "Nominal Pipe Size (NPS)": "1-1/2\"", "Barrel OD (mm)": 48.3, "Lap Diameter G (mm)": 73.0, "Lap Radius r (mm)": 6.5, "Length F Long (mm)": 102, "Length F Short (mm)": 51 },
  { "Nominal Pipe Size (NPS)": "2\"", "Barrel OD (mm)": 60.3, "Lap Diameter G (mm)": 92.0, "Lap Radius r (mm)": 8.0, "Length F Long (mm)": 152, "Length F Short (mm)": 64 },
  { "Nominal Pipe Size (NPS)": "3\"", "Barrel OD (mm)": 88.9, "Lap Diameter G (mm)": 127.0, "Lap Radius r (mm)": 9.5, "Length F Long (mm)": 152, "Length F Short (mm)": 64 },
  { "Nominal Pipe Size (NPS)": "4\"", "Barrel OD (mm)": 114.3, "Lap Diameter G (mm)": 157.0, "Lap Radius r (mm)": 11.0, "Length F Long (mm)": 152, "Length F Short (mm)": 76 },
  { "Nominal Pipe Size (NPS)": "6\"", "Barrel OD (mm)": 168.3, "Lap Diameter G (mm)": 216.0, "Lap Radius r (mm)": 12.5, "Length F Long (mm)": 203, "Length F Short (mm)": 89 },
  { "Nominal Pipe Size (NPS)": "8\"", "Barrel OD (mm)": 219.1, "Lap Diameter G (mm)": 270.0, "Lap Radius r (mm)": 12.5, "Length F Long (mm)": 203, "Length F Short (mm)": 102 }
];

const stubEndData = {
  title: "ASME B16.9 Lap Joint Stub Ends Dimensions & Lengths",
  standard: "ASME B16.9 / ASTM A403 / ASTM B366",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.9 Lap Joint Stub Ends Dimensions | Bhansali Metals",
  metaDescription: "Standard dimensions for Long and Short pattern Lap Joint Stub Ends per ASME B16.9 from 1/2 inch through 24 inch.",
  description: "Standard dimensions for MSS Type A and Type B lap joint stub ends used in conjunction with lap joint flanges.",
  downloadablePdf: "/downloads/asme-b16-9-stub-end-dimensions-bhansali.pdf",
  tableHeaders: ["Nominal Pipe Size (NPS)", "Barrel OD (mm)", "Lap Diameter G (mm)", "Lap Radius r (mm)", "Length F Long (mm)", "Length F Short (mm)"],
  rows: stubEndRows,
  dualUnitAvailable: true,
  notes: ["Available in seamless and welded construction with machined gasket face."]
};
fs.writeFileSync(path.join(TECH_DIR, 'stub-end-dimensions.json'), JSON.stringify(stubEndData, null, 2), 'utf-8');
console.log('Created stub-end-dimensions.json');

// 14. Cap Dimensions
const capRows = [
  { "Nominal Pipe Size (NPS)": "1/2\"", "Outside Diameter (mm)": 21.3, "Length E (mm)": 25, "Thickness t (mm)": 2.77, "Approx Weight (kg)": 0.05 },
  { "Nominal Pipe Size (NPS)": "3/4\"", "Outside Diameter (mm)": 26.7, "Length E (mm)": 25, "Thickness t (mm)": 2.87, "Approx Weight (kg)": 0.08 },
  { "Nominal Pipe Size (NPS)": "1\"", "Outside Diameter (mm)": 33.4, "Length E (mm)": 38, "Thickness t (mm)": 3.38, "Approx Weight (kg)": 0.14 },
  { "Nominal Pipe Size (NPS)": "1-1/2\"", "Outside Diameter (mm)": 48.3, "Length E (mm)": 38, "Thickness t (mm)": 3.68, "Approx Weight (kg)": 0.28 },
  { "Nominal Pipe Size (NPS)": "2\"", "Outside Diameter (mm)": 60.3, "Length E (mm)": 38, "Thickness t (mm)": 3.91, "Approx Weight (kg)": 0.45 },
  { "Nominal Pipe Size (NPS)": "3\"", "Outside Diameter (mm)": 88.9, "Length E (mm)": 51, "Thickness t (mm)": 5.49, "Approx Weight (kg)": 1.10 },
  { "Nominal Pipe Size (NPS)": "4\"", "Outside Diameter (mm)": 114.3, "Length E (mm)": 64, "Thickness t (mm)": 6.02, "Approx Weight (kg)": 1.85 },
  { "Nominal Pipe Size (NPS)": "6\"", "Outside Diameter (mm)": 168.3, "Length E (mm)": 89, "Thickness t (mm)": 7.11, "Approx Weight (kg)": 4.60 },
  { "Nominal Pipe Size (NPS)": "8\"", "Outside Diameter (mm)": 219.1, "Length E (mm)": 102, "Thickness t (mm)": 8.18, "Approx Weight (kg)": 8.20 },
  { "Nominal Pipe Size (NPS)": "10\"", "Outside Diameter (mm)": 273.0, "Length E (mm)": 127, "Thickness t (mm)": 9.27, "Approx Weight (kg)": 14.50 },
  { "Nominal Pipe Size (NPS)": "12\"", "Outside Diameter (mm)": 323.8, "Length E (mm)": 152, "Thickness t (mm)": 10.31, "Approx Weight (kg)": 21.00 }
];

const capData = {
  title: "ASME B16.9 Pipe End Caps Dimensions & Tolerances",
  standard: "ASME B16.9 / ASTM A403 / ASTM B366",
  category: "fittings-dimensions",
  metaTitle: "ASME B16.9 Pipe Caps Dimensions | Bhansali Metals",
  metaDescription: "Dimensional chart for ASME B16.9 ellipsoidal and dished buttweld pipe caps from 1/2 inch to 24 inch.",
  description: "Standard dimensional data for wrought buttweld pipe end caps used to permanently close pipe terminations.",
  downloadablePdf: "/downloads/asme-b16-9-cap-dimensions-bhansali.pdf",
  tableHeaders: ["Nominal Pipe Size (NPS)", "Outside Diameter (mm)", "Length E (mm)", "Thickness t (mm)", "Approx Weight (kg)"],
  rows: capRows,
  dualUnitAvailable: true,
  notes: ["End caps hydrostatically tested and certified with full EN 10204 3.1 MTC."]
};
fs.writeFileSync(path.join(TECH_DIR, 'cap-dimensions.json'), JSON.stringify(capData, null, 2), 'utf-8');
console.log('Created cap-dimensions.json');

// 15. Non-Ferrous Weights
const nonFerrousRows = [
  { "Metal / Alloy Family": "Stainless Steel 304 / 304L", "Density (g/cm³)": 7.93, "Density (lb/in³)": 0.286, "Weight Factor vs SS 304": 1.000, "Standard Product Forms": "Pipes, Flanges, Sheets, Bars" },
  { "Metal / Alloy Family": "Stainless Steel 316 / 316L", "Density (g/cm³)": 8.00, "Density (lb/in³)": 0.289, "Weight Factor vs SS 304": 1.009, "Standard Product Forms": "Pipes, Flanges, Sheets, Bars" },
  { "Metal / Alloy Family": "Inconel 625 (UNS N06625)", "Density (g/cm³)": 8.44, "Density (lb/in³)": 0.305, "Weight Factor vs SS 304": 1.064, "Standard Product Forms": "Pipes, Flanges, Fittings, Bars" },
  { "Metal / Alloy Family": "Inconel 600 (UNS N06600)", "Density (g/cm³)": 8.47, "Density (lb/in³)": 0.306, "Weight Factor vs SS 304": 1.068, "Standard Product Forms": "Tubes, Flanges, Sheets, Bars" },
  { "Metal / Alloy Family": "Monel 400 (UNS N04400)", "Density (g/cm³)": 8.80, "Density (lb/in³)": 0.318, "Weight Factor vs SS 304": 1.110, "Standard Product Forms": "Pipes, Fasteners, Plates, Bars" },
  { "Metal / Alloy Family": "Hastelloy C-276 (UNS N10276)", "Density (g/cm³)": 8.89, "Density (lb/in³)": 0.321, "Weight Factor vs SS 304": 1.121, "Standard Product Forms": "Pipes, Flanges, Fittings, Plates" },
  { "Metal / Alloy Family": "Nickel 200 (UNS N02200)", "Density (g/cm³)": 8.89, "Density (lb/in³)": 0.321, "Weight Factor vs SS 304": 1.121, "Standard Product Forms": "Pipes, Sheets, Rods" },
  { "Metal / Alloy Family": "Pure Copper (C10100/C11000)", "Density (g/cm³)": 8.94, "Density (lb/in³)": 0.323, "Weight Factor vs SS 304": 1.127, "Standard Product Forms": "Pipes, Sheets, Busbars" },
  { "Metal / Alloy Family": "Cu-Ni 90/10 (UNS C70600)", "Density (g/cm³)": 8.94, "Density (lb/in³)": 0.323, "Weight Factor vs SS 304": 1.127, "Standard Product Forms": "Condenser Tubes, Flanges" },
  { "Metal / Alloy Family": "Cu-Ni 70/30 (UNS C71500)", "Density (g/cm³)": 8.95, "Density (lb/in³)": 0.323, "Weight Factor vs SS 304": 1.129, "Standard Product Forms": "Heat Exchanger Tubes" },
  { "Metal / Alloy Family": "Titanium Grade 2 (UNS R50400)", "Density (g/cm³)": 4.51, "Density (lb/in³)": 0.163, "Weight Factor vs SS 304": 0.569, "Standard Product Forms": "Pipes, Plates, Round Bars" },
  { "Metal / Alloy Family": "Aluminum 6061-T6", "Density (g/cm³)": 2.70, "Density (lb/in³)": 0.098, "Weight Factor vs SS 304": 0.340, "Standard Product Forms": "Extrusions, Plates, Tubes" }
];

const nonFerrousData = {
  title: "Non-Ferrous Metals Theoretical Weights & Density Conversion Factors",
  standard: "ASTM Standards / Metals Handbook Desk Edition",
  category: "weight-formulas",
  metaTitle: "Non-Ferrous Metals Density & Weight Conversion | Bhansali Metals",
  metaDescription: "Density factors and weight multipliers for non-ferrous metals and high nickel alloys relative to stainless steel.",
  description: "Comprehensive density reference and weight conversion multipliers for high nickel superalloys, copper, brass, bronze, titanium, and aluminum relative to standard stainless steel (density 7.93 g/cm³).",
  downloadablePdf: "/downloads/non-ferrous-weights-bhansali.pdf",
  tableHeaders: ["Metal / Alloy Family", "Density (g/cm³)", "Density (lb/in³)", "Weight Factor vs SS 304", "Standard Product Forms"],
  rows: nonFerrousRows,
  dualUnitAvailable: true,
  notes: ["To calculate weight of any non-ferrous item, multiply theoretical SS 304 weight by the respective weight factor."]
};
fs.writeFileSync(path.join(TECH_DIR, 'non-ferrous-weights.json'), JSON.stringify(nonFerrousData, null, 2), 'utf-8');
console.log('Created non-ferrous-weights.json');

console.log('Successfully generated all technical datasets.');
