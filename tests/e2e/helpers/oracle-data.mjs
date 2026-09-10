/**
 * Authoritative Oracle Data & Specifications for Bhansali Metals
 * Derived strictly from:
 * 1. ORIGINAL_REQUEST.md
 * 2. PROJECT.md
 * 3. DESIGN.md
 * 4. Survey Audits (spec_miner_survey_1, explorer_survey_3)
 */

export const ORACLE = {
  // Company & Registration
  company: {
    name: 'Bhansali Metals',
    shortName: 'Bhansali',
    registeredOffice: '31, Kataria Mansion, Ground Floor, 7th Khetwadi Lane, S.V.P. Road, Mumbai - 400 004, India',
    registeredOfficeStreet: 'Kataria Mansion, SVP Rd, Opera House, Mumbai 400 004',
    godown: 'Plot 18, Steel Market, Kalamboli, Navi Mumbai - 410 218',
    telephones: ['+91 22 6743 8356', '+91 22 2385 0042', '+91 22 2385 0052'],
    primaryPhone: '+91 22 6743 8356',
    salesWhatsApp: '+91 9892244451',
    salesWhatsAppDisplay: '+91 98922 44451',
    managementPhone: '+91 98200 27908',
    email: 'sales@bhansalimetals.com',
    dispatchPort: 'JNPT (Nhava Sheva)',
    portDetails: 'JNPT (Jawaharlal Nehru Port Trust, Nhava Sheva)',
  },

  // Trust, ISO, and Compliance
  trust: {
    isoStandard: 'ISO 9001:2015',
    isoRegistrationNo: 'QAIC/IN/1103-A',
    isoRegistrar: 'QA International Certification Limited (UKAS accredited)',
    mtcFormat: 'EN 10204 Type 3.1 Mill Test Certificate',
    mtcShort: 'EN 10204 3.1 MTC',
    pedCompliance: 'PED 2014/68/EU Annex I',
    ibrCompliance: 'IBR 1950 (Indian Boiler Regulations)',
    naceCompliance: 'NACE MR0175 / ISO 15156',
    tpiAgencies: [
      { id: 'bv', name: 'Bureau Veritas', symbol: 'BV' },
      { id: 'tuv', name: 'TÜV India', symbol: 'TUV' },
      { id: 'lr', name: "Lloyd's Register", symbol: 'LR' },
      { id: 'eil', name: 'Engineers India Limited', symbol: 'EIL' },
      { id: 'dnv', name: 'Det Norske Veritas', symbol: 'DNV' },
      { id: 'sgs', name: 'SGS India', symbol: 'SGS' },
    ],
  },

  // Visual Design System (DESIGN.md)
  designTokens: {
    colors: {
      primary: '#024ad8',        // HP Electric Blue
      primaryBright: '#296ef9',  // Bright Blue for dark slabs
      primaryDeep: '#0e3191',    // Deep Navy pressed / visited
      primarySoft: '#c9e0fc',    // Soft Blue badge chip
      canvas: '#ffffff',         // Canvas pure white
      paper: '#ffffff',          // Paper card surface
      cloud: '#f7f7f7',          // Cloud band
      fog: '#e8e8e8',            // Fog band & hairline border
      steel: '#c2c2c2',          // Hairline focus / disabled
      ink: '#1a1a1a',            // Universal text on white, dark slabs, footer
      inkDeep: '#000000',        // Pure black
      inkSoft: '#292929',        // Dark slab subtle shift
      onInk: '#ffffff',          // White text on dark slabs
      charcoal: '#3d3d3d',       // Secondary copy
      graphite: '#636363',       // Fine print / timestamps
      bloomCoral: '#ff5050',     // Urgency / stock tags
      stormDeep: '#356373',      // Technical neutral accent
    },
    radius: {
      sharp: '4px',              // Buttons, inputs (rounded.md)
      soft: '16px',              // Cards, containers (rounded.xl)
      chevron: '0px',            // Chevron parallelograms (rounded.none)
      pill: '9999px',            // Tabs, search pill, chips
    },
    shadows: {
      softLift: '0 2px 8px rgba(26, 26, 26, 0.08)',
      modalFloating: '0 8px 24px rgba(26, 26, 26, 0.12)',
    },
    typography: {
      fontFamilyDisplay: 'Forma DJR Micro',
      fontFamilyFallback: 'Inter',
      displayWeight: 500,
      displayLineHeight: 1.0,
      bodyWeight: 400,
      bodyLineHeight: 1.4,
      buttonWeight: 600,
      buttonTracking: '0.7px',
    },
    chevron: {
      angleDegrees: 45,
      desktopVisible: true,
      mobileHiddenBreakpoint: 768, // hidden < 768px
    },
    sectionRhythm: [
      'utility-strip',
      'main-nav',
      'white-body',
      'cloud-band',
      'fog-band',
      'ink-closing-slab',
      'ink-footer',
    ],
  },

  // Alloy Families and 22+ Grades
  alloys: {
    inconel: [
      { grade: 'Inconel 600', uns: 'UNS N06600', wnr: '2.4816', family: 'Inconel', metallurgy: 'Ni-Cr' },
      { grade: 'Inconel 625', uns: 'UNS N06625', wnr: '2.4856', family: 'Inconel', metallurgy: 'Ni-Cr-Mo-Nb' },
      { grade: 'Inconel 718', uns: 'UNS N07718', wnr: '2.4668', family: 'Inconel', metallurgy: 'Ni-Cr-Fe-Mo-Nb' },
    ],
    incoloy: [
      { grade: 'Incoloy 800', uns: 'UNS N08800', wnr: '1.4876', family: 'Incoloy', metallurgy: 'Ni-Fe-Cr' },
      { grade: 'Incoloy 825', uns: 'UNS N08825', wnr: '2.4858', family: 'Incoloy', metallurgy: 'Ni-Fe-Cr-Mo-Cu' },
    ],
    monel: [
      { grade: 'Monel 400', uns: 'UNS N04400', wnr: '2.4360', family: 'Monel', metallurgy: 'Ni-Cu' },
      { grade: 'Monel K-500', uns: 'UNS N05500', wnr: '2.4375', family: 'Monel', metallurgy: 'Ni-Cu-Al-Ti' },
    ],
    hastelloy: [
      { grade: 'Hastelloy C-276', uns: 'UNS N10276', wnr: '2.4819', family: 'Hastelloy', metallurgy: 'Ni-Mo-Cr-W' },
      { grade: 'Hastelloy C-22', uns: 'UNS N06022', wnr: '2.4602', family: 'Hastelloy', metallurgy: 'Ni-Cr-Mo-W' },
      { grade: 'Hastelloy B-2', uns: 'UNS N10665', wnr: '2.4617', family: 'Hastelloy', metallurgy: 'Ni-Mo' },
      { grade: 'Hastelloy X', uns: 'UNS N06002', wnr: '2.4665', family: 'Hastelloy', metallurgy: 'Ni-Cr-Fe-Mo' },
    ],
    nickel: [
      { grade: 'Nickel 200', uns: 'UNS N02200', wnr: '2.4066', family: 'Nickel', metallurgy: 'Pure Wrought Nickel (99.6%)' },
      { grade: 'Nickel 201', uns: 'UNS N02201', wnr: '2.4068', family: 'Nickel', metallurgy: 'Low Carbon Nickel (C max 0.02%)' },
    ],
    stainlessSteel: [
      { grade: 'SS 304', uns: 'UNS S30400', wnr: '1.4301', family: 'Stainless Steel' },
      { grade: 'SS 304L', uns: 'UNS S30403', wnr: '1.4306', family: 'Stainless Steel' },
      { grade: 'SS 316', uns: 'UNS S31600', wnr: '1.4401', family: 'Stainless Steel' },
      { grade: 'SS 316L', uns: 'UNS S31603', wnr: '1.4404', family: 'Stainless Steel' },
      { grade: 'SS 321', uns: 'UNS S32100', wnr: '1.4541', family: 'Stainless Steel' },
      { grade: 'SS 310S', uns: 'UNS S31008', wnr: '1.4845', family: 'Stainless Steel' },
      { grade: 'SS 347', uns: 'UNS S34700', wnr: '1.4550', family: 'Stainless Steel' },
      { grade: 'SS 904L', uns: 'UNS N08904', wnr: '1.4539', family: 'Stainless Steel' },
    ],
    duplex: [
      { grade: 'Duplex 2205', uns: 'UNS S31803 / S32205', wnr: '1.4462', family: 'Duplex' },
      { grade: 'Super Duplex 2507', uns: 'UNS S32750', wnr: '1.4410', family: 'Super Duplex' },
    ],
  },

  // Product Categories (7 core forms)
  productCategories: [
    { slug: 'pipes-tubes', name: 'Pipes & Tubes', forms: ['Seamless', 'Welded', 'ERW', 'EFW'] },
    { slug: 'flanges', name: 'Flanges', forms: ['Weld Neck (WNRF)', 'Slip-On (SORF)', 'Blind (BLRF)', 'Socket Weld (SWRF)', 'Threaded', 'Lap Joint', 'RTJ'] },
    { slug: 'buttweld-fittings', name: 'Buttweld Fittings', forms: ['45° Elbow', '90° Elbow', '180° Return', 'Equal Tee', 'Reducing Tee', 'Concentric Reducer', 'Eccentric Reducer', 'Cap', 'Stub End'] },
    { slug: 'forged-fittings', name: 'Forged High-Pressure Fittings', forms: ['3000# Elbow', '6000# Tee', 'Coupling', 'Union', 'Nipple', 'Olet (Weldolet, Threadolet, Sockolet)'] },
    { slug: 'fasteners', name: 'Fasteners & Hardware', forms: ['Stud Bolts', 'Hex Bolts', 'Heavy Hex Nuts', 'Plain Washers', 'Spring Washers', 'Threaded Rods'] },
    { slug: 'round-bars', name: 'Round Bars & Rods', forms: ['Cold Drawn Ground Polished (Bright)', 'Hot Rolled Black Bars', 'Forged Round Bars', 'Hexagonal Bars', 'Square Bars', 'Wire'] },
    { slug: 'sheets-plates', name: 'Sheets & Plates', forms: ['Hot Rolled Plates', 'Cold Rolled Sheets', 'Coils', 'Strips', 'Shim Sheets'] },
  ],

  // Technical Reference Standards
  technicalStandards: [
    { slug: 'asme-b16-5-flanges', title: 'ASME B16.5 Flange Dimensions & Weights' },
    { slug: 'pipe-schedule-chart', title: 'Pipe Schedule Wall Thickness & Dimensions' },
    { slug: 'theoretical-weight-formulas', title: 'Theoretical Metal Weight Calculation Formulas' },
    { slug: 'stainless-chemical-composition', title: 'Stainless Steel Chemical Composition' },
    { slug: 'nickel-chemical-composition', title: 'Nickel Alloy Chemical Composition' },
    { slug: 'mechanical-properties', title: 'Mechanical Properties & Tensile Data' },
    { slug: 'bar-tolerances', title: 'Round Bar Dimensional Tolerances (PN-EN 754/755)' },
    { slug: 'international-equivalents', title: 'International Standard Equivalence (ASTM/DIN/UNS/JIS)' },
    { slug: 'elbow-dimensions', title: 'Buttweld Elbows Dimensions & Weights' },
    { slug: 'tee-dimensions', title: 'Equal & Reducing Tees Dimensions' },
    { slug: 'reducer-dimensions', title: 'Concentric & Eccentric Reducers Dimensions' },
  ],

  // 14 Theoretical Weight Formulas
  weightFormulas: [
    { id: 'round-bar-ss', name: 'SS Round Bar', formula: 'OD * OD * 0.00623', unit: 'kg/m', params: ['od'] },
    { id: 'round-bar-cs', name: 'CS Round Bar', formula: 'OD * OD * 0.006165', unit: 'kg/m', params: ['od'] },
    { id: 'hex-bar', name: 'Hexagonal Bar', formula: 'AF * AF * 0.00679', unit: 'kg/m', params: ['af'] },
    { id: 'square-bar', name: 'Square Bar', formula: 'Side * Side * 0.00787', unit: 'kg/m', params: ['side'] },
    { id: 'ss-sheet-304', name: 'SS 304 Sheet', formula: 'Length * Width * Thickness * 8.0', unit: 'kg/piece', params: ['l', 'w', 't'] },
    { id: 'ss-sheet-316', name: 'SS 316 Sheet', formula: 'Length * Width * Thickness * 8.02', unit: 'kg/piece', params: ['l', 'w', 't'] },
    { id: 'cs-sheet', name: 'CS Sheet', formula: 'Length * Width * Thickness * 7.85', unit: 'kg/piece', params: ['l', 'w', 't'] },
    { id: 'ss-pipe-304', name: 'SS 304 Pipe', formula: '(OD - WT) * WT * 0.02491', unit: 'kg/m', params: ['od', 'wt'] },
    { id: 'ss-pipe-316', name: 'SS 316 Pipe', formula: '(OD - WT) * WT * 0.02507', unit: 'kg/m', params: ['od', 'wt'] },
    { id: 'cs-pipe', name: 'CS Pipe', formula: '(OD - WT) * WT * 0.02466', unit: 'kg/m', params: ['od', 'wt'] },
    { id: 'flat-bar', name: 'Flat Bar', formula: 'Width * Thickness * 0.00785', unit: 'kg/m', params: ['w', 't'] },
    { id: 'circle-blank', name: 'Circle / Blank', formula: 'OD * OD * Thickness * 0.00000623', unit: 'kg/piece', params: ['od', 't'] },
    { id: 'copper-sheet', name: 'Copper Sheet', formula: 'Length * Width * Thickness * 8.9', unit: 'kg/piece', params: ['l', 'w', 't'] },
    { id: 'nickel-alloy-pipe', name: 'Nickel Alloy Pipe', formula: '(OD - WT) * WT * 0.0276', unit: 'kg/m', params: ['od', 'wt'] },
  ],

  // ASME B16.5 Flange Classes
  flangeClasses: [150, 300, 600, 900, 1500, 2500],

  // Pipe Schedule Range
  pipeSizes: ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"', '1"', '1-1/4"', '1-1/2"', '2"', '2-1/2"', '3"', '4"', '6"', '8"', '10"', '12"', '16"', '20"', '24"', '36"'],
  pipeSchedules: ['Sch 10', 'Sch 20', 'Sch 30', 'Sch 40', 'STD', 'Sch 60', 'Sch 80', 'XS', 'Sch 100', 'Sch 120', 'Sch 140', 'Sch 160', 'XXS'],

  // Legacy Redirect Mappings (all 38 legacy files)
  legacyRedirects: [
    { from: 'index.html', to: '/' },
    { from: 'aboutus.html', to: '/about' },
    { from: 'certificates.html', to: '/certificates' },
    { from: 'quality.html', to: '/quality' },
    { from: 'contactus.html', to: '/contact' },
    { from: 'enquiry.html', to: '/rfq' },
    { from: 'product.html', to: '/products/round-bars' },
    { from: 'product_black.html', to: '/products/round-bars' },
    { from: 'rodbar.html', to: '/products/round-bars' },
    { from: 'sheetplate.html', to: '/products/sheets-plates' },
    { from: 'stainless.html', to: '/products/flanges' },
    { from: 'stanless_fastnrs.html', to: '/products/fasteners' },
    { from: 'fastener.html', to: '/products/fasteners' },
    { from: 'stanless_pipe.html', to: '/products/pipes-tubes' },
    { from: 'pipefitting.html', to: '/products/buttweld-fittings' },
    { from: 'highnickel.html', to: '/alloys/inconel-600' },
    { from: 'monel500.html', to: '/alloys/monel-k500' },
    { from: 'hastelloyc-276.html', to: '/alloys/hastelloy-c276' },
    { from: 'hastelloyc-22.html', to: '/alloys/hastelloy-c22' },
    { from: 'hastelloyc-b2.html', to: '/alloys/hastelloy-b2' },
    { from: 'hastelloyc-x.html', to: '/alloys/hastelloy-x' },
    { from: 'nickel200-201.html', to: '/alloys/nickel-200' },
    { from: 'technical.html', to: '/technical-data/stainless-chemical-composition' },
    { from: 'tech_new_demo.html', to: '/technical-data/international-equivalents' },
    { from: 'Tech_mechanical.html', to: '/technical-data/mechanical-properties' },
    { from: 'tech_pipefitting.html', to: '/products/buttweld-fittings' },
    { from: 'tech_forgedfitting.html', to: '/products/forged-fittings' },
    { from: 'tech_elbow.html', to: '/technical-data/elbow-dimensions' },
    { from: 'tech_stubend.html', to: '/technical-data/stub-end-dimensions' },
    { from: 'tech_tees.html', to: '/technical-data/tee-dimensions' },
    { from: 'tech_reducer.html', to: '/technical-data/reducer-dimensions' },
    { from: 'tech_caps.html', to: '/technical-data/cap-dimensions' },
    { from: 'tech_round.html', to: '/technical-data/bar-tolerances' },
    { from: 'tech_pipedata.html', to: '/technical-data/pipe-schedule-chart' },
    { from: 'tech_nickelalloy.html', to: '/technical-data/nickel-chemical-composition' },
    { from: 'tech_flanges.html', to: '/technical-data/asme-b16-5-flanges' },
    { from: 'tech_wg_formula.html', to: '/technical-data/theoretical-weight-formulas' },
    { from: 'tech_nonferrous.html', to: '/technical-data/non-ferrous-weights' },
  ],

  // Banned Strings (Must never appear in production markup)
  bannedPatterns: [
    /Regal\s+Sales\s+Corporation/i,
    /manansteel\.com/i,
    /mesotek\.com/i,
    /http:\/\//, // No insecure HTTP resources in modern layout
  ],
};
