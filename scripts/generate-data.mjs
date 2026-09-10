import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const ALLOYS_DIR = path.join(CONTENT_DIR, 'alloys');
const PRODUCTS_DIR = path.join(CONTENT_DIR, 'products');
const SCHEMATICS_DIR = path.join(ROOT, 'public', 'images', 'schematics');

fs.mkdirSync(ALLOYS_DIR, { recursive: true });
fs.mkdirSync(PRODUCTS_DIR, { recursive: true });
fs.mkdirSync(SCHEMATICS_DIR, { recursive: true });

console.log('Generating Alloy datasets...');

const ALLOY_DATASETS = [
  // 1. Inconel 600
  {
    slug: 'inconel-600',
    data: {
      title: 'Inconel 600 (UNS N06600 / W.Nr. 2.4816)',
      grade: 'Inconel 600',
      family: 'Inconel',
      familyDisplayName: 'High Nickel Superalloys',
      metallurgy: 'Ni-Cr superalloy',
      uns: 'UNS N06600',
      unsNumber: 'UNS N06600',
      wnr: '2.4816',
      werkstoffNumber: '2.4816',
      astmStandards: ['ASTM B166', 'ASTM B167', 'ASTM B168', 'ASTM B163', 'ASTM B564'],
      asmeStandards: ['SB-166', 'SB-167', 'SB-168', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Inconel 600 Pipes, Flanges & Fittings Manufacturer Mumbai | Bhansali Metals',
      metaDescription: 'Bhansali Metals manufactures & stocks Inconel 600 (UNS N06600 / W.Nr. 2.4816) pipes, flanges, fittings, and sheets with EN 10204 3.1 MTC from Mumbai, India.',
      summary: 'Inconel 600 is a standard engineering material for applications requiring high temperature resistance and corrosion resistance. It offers excellent mechanical properties and high strength combined with good workability.',
      keyFeatures: [
        'Resistant to a wide range of corrosive media',
        'Virtually immune to chlorine-ion stress-corrosion cracking',
        'Non-magnetic with excellent mechanical properties',
        'High strength and good weldability under wide temperature ranges'
      ],
      corrosionResistance: 'High nickel content provides resistance to reducing environments, while chromium provides resistance to oxidizing conditions. Immune to chloride-ion stress corrosion cracking.',
      applications: [
        'Chemical and food processing equipment',
        'Heat treating muffles, retorts, and furnace components',
        'Nuclear reactor components and steam generator tubing',
        'Pulp and paper manufacturing digestors'
      ],
      chemicalComposition: {
        Ni: '72.0 min',
        Cr: '14.0 - 17.0',
        Fe: '6.0 - 10.0',
        C: '0.15 max',
        Mn: '1.0 max',
        S: '0.015 max',
        Si: '0.50 max',
        Cu: '0.50 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '550 min', ksi: '80 min' },
        yieldStrength: { mpa: '240 min', ksi: '35 min' },
        elongation: '30% min',
        hardness: 'HRB 65 - 85',
        density: { metric: '8.47 g/cm³', imperial: '0.306 lb/in³' },
        meltingPoint: { celsius: '1354 - 1413 °C', fahrenheit: '2470 - 2575 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC15Fe',
        DIN: 'W.Nr. 2.4816',
        JIS: 'NCF 600',
        EN: 'NiCr15Fe'
      }
    }
  },

  // 2. Inconel 625
  {
    slug: 'inconel-625',
    data: {
      title: 'Inconel 625 (UNS N06625 / W.Nr. 2.4856)',
      grade: 'Inconel 625',
      family: 'Inconel',
      familyDisplayName: 'High Nickel Superalloys',
      metallurgy: 'Ni-Cr-Mo-Nb superalloy',
      uns: 'UNS N06625',
      unsNumber: 'UNS N06625',
      wnr: '2.4856',
      werkstoffNumber: '2.4856',
      astmStandards: ['ASTM B443', 'ASTM B444', 'ASTM B446', 'ASTM B564'],
      asmeStandards: ['SB-443', 'SB-444', 'SB-446', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Inconel 625 Flanges, Pipes & Forged Fittings Supplier Mumbai | Bhansali Metals',
      metaDescription: 'High-strength Inconel 625 (UNS N06625 / 2.4856) forged flanges, seamless pipes, and buttweld fittings supplied by Bhansali Metals Mumbai with EN 10204 3.1 MTC.',
      summary: 'Inconel 625 is a nickel-chromium-molybdenum-niobium superalloy formulated for high strength, outstanding fabricability, and superior corrosion resistance. Operating temperatures range from cryogenic up to 1800°F (982°C).',
      keyFeatures: [
        'Exceptional resistance to pitting, crevice, and intercrystalline corrosion',
        'Virtually free from chloride-induced stress corrosion cracking',
        'High tensile, creep, and rupture strength without age hardening',
        'Superb weldability with no post-weld cracking susceptibility'
      ],
      corrosionResistance: 'Molybdenum and niobium solid solution hardening provides outstanding resistance to severely oxidizing and non-oxidizing acids, seawater, and pitting.',
      applications: [
        'Offshore oil & gas production flare stacks, piping, and risers',
        'Marine seawater piping, heat exchangers, and fasteners',
        'Aerospace ducting systems, exhaust systems, and thrust reversers',
        'Chemical and petrochemical processing vessels and transfer lines'
      ],
      chemicalComposition: {
        Ni: '58.0 min',
        Cr: '20.0 - 23.0',
        Mo: '8.0 - 10.0',
        'Nb+Ta': '3.15 - 4.15',
        Fe: '5.0 max',
        C: '0.10 max',
        Mn: '0.50 max',
        Si: '0.50 max',
        P: '0.015 max',
        S: '0.015 max',
        Al: '0.40 max',
        Ti: '0.40 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '827 min', ksi: '120 min' },
        yieldStrength: { mpa: '414 min', ksi: '60 min' },
        elongation: '30% min',
        hardness: 'HRB 85 - 100',
        density: { metric: '8.44 g/cm³', imperial: '0.305 lb/in³' },
        meltingPoint: { celsius: '1290 - 1350 °C', fahrenheit: '2350 - 2460 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC22FeDNb',
        DIN: 'W.Nr. 2.4856',
        JIS: 'NCF 625',
        EN: 'NiCr22Mo9Nb'
      }
    }
  },

  // 3. Inconel 718
  {
    slug: 'inconel-718',
    data: {
      title: 'Inconel 718 (UNS N07718 / W.Nr. 2.4668)',
      grade: 'Inconel 718',
      family: 'Inconel',
      familyDisplayName: 'High Nickel Superalloys',
      metallurgy: 'Ni-Cr-Fe-Mo-Nb superalloy',
      uns: 'UNS N07718',
      unsNumber: 'UNS N07718',
      wnr: '2.4668',
      werkstoffNumber: '2.4668',
      astmStandards: ['ASTM B637', 'ASTM B670'],
      asmeStandards: ['SB-637', 'SB-670'],
      naceCompliance: true,
      metaTitle: 'Inconel 718 Fasteners, Round Bars & Forged Rings Mumbai | Bhansali Metals',
      metaDescription: 'Precipitation-hardened Inconel 718 (UNS N07718 / 2.4668) high-tensile fasteners, round bars, and forged fittings certified to NACE MR0175 and EN 10204 3.1 MTC.',
      summary: 'Inconel 718 is a precipitation-hardenable nickel-chromium alloy containing significant amounts of iron, niobium, and molybdenum along with lesser amounts of aluminum and titanium. It combines corrosion resistance and high strength with outstanding weldability.',
      keyFeatures: [
        'Extreme yield and tensile strength up to 1300°F (704°C)',
        'Excellent creep-rupture strength at high temperatures',
        'Post-weld age hardening without spontaneous cracking',
        'High resistance to chloride and sulfide stress corrosion cracking'
      ],
      corrosionResistance: 'Excellent resistance to a wide range of atmospheric and chemical environments including sour gas (H2S), CO2, chlorides, and organic acids.',
      applications: [
        'Gas turbine engines, turbocharger rotors, and fasteners',
        'High-strength downhole drilling tools, packers, and wellhead valves',
        'Cryogenic storage tanks and liquid fuel rocket motors',
        'High-tensile naval bolts and marine drive shafts'
      ],
      chemicalComposition: {
        Ni: '50.0 - 55.0',
        Cr: '17.0 - 21.0',
        Fe: 'Bal (approx 17.0)',
        Mo: '2.80 - 3.30',
        'Nb+Ta': '4.75 - 5.50',
        Ti: '0.65 - 1.15',
        Al: '0.20 - 0.80',
        Co: '1.0 max',
        C: '0.08 max',
        Mn: '0.35 max',
        Si: '0.35 max',
        P: '0.015 max',
        S: '0.015 max',
        B: '0.006 max',
        Cu: '0.30 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '1240 min', ksi: '180 min' },
        yieldStrength: { mpa: '1034 min', ksi: '150 min' },
        elongation: '12% min',
        hardness: 'HRC 36 - 44',
        density: { metric: '8.19 g/cm³', imperial: '0.296 lb/in³' },
        meltingPoint: { celsius: '1260 - 1336 °C', fahrenheit: '2300 - 2437 °F' }
      },
      availableForms: ['Round Bars', 'Forged Fittings', 'Fasteners', 'Sheets & Plates', 'Flanges', 'Pipes & Tubes'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC19FeNb',
        DIN: 'W.Nr. 2.4668',
        JIS: 'NCF 718',
        EN: 'NiCr19Fe19Nb5Mo3'
      }
    }
  },

  // 4. Incoloy 800
  {
    slug: 'incoloy-800',
    data: {
      title: 'Incoloy 800 (UNS N08800 / W.Nr. 1.4876)',
      grade: 'Incoloy 800',
      family: 'Incoloy',
      familyDisplayName: 'Nickel-Iron-Chromium Alloys',
      metallurgy: 'Ni-Fe-Cr superalloy',
      uns: 'UNS N08800',
      unsNumber: 'UNS N08800',
      wnr: '1.4876',
      werkstoffNumber: '1.4876',
      astmStandards: ['ASTM B408', 'ASTM B409', 'ASTM B407', 'ASTM B564'],
      asmeStandards: ['SB-408', 'SB-409', 'SB-407', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Incoloy 800 Pipes, Sheets & Heat Exchanger Tubes Mumbai | Bhansali Metals',
      metaDescription: 'Authentic Incoloy 800 (UNS N08800 / 1.4876) nickel-iron-chromium plates, seamless pipes, and buttweld fittings from Bhansali Metals Mumbai with MTC guarantee.',
      summary: 'Incoloy 800 is a nickel-iron-chromium alloy engineered to resist oxidation, carburization, and other high-temperature corrosion mechanisms. Its high nickel content maintains an austenitic structure while resisting chloride stress-corrosion cracking.',
      keyFeatures: [
        'High creep and stress-rupture strength at elevated temperatures',
        'Resistance to oxidation and carburization up to 1500°F (816°C)',
        'Good resistance to many aqueous environments',
        'Readily formed and welded by standard industrial procedures'
      ],
      corrosionResistance: 'Nickel content imparts high resistance to stress-corrosion cracking; chromium confers resistance to oxidation and sulfidation.',
      applications: [
        'Ethylene furnace quench boilers and pyrolysis tubes',
        'Hydrocarbon steam reforming pigtails and headers',
        'Industrial heating elements and radiant tubes',
        'Thermal processing baskets, fixtures, and retorts'
      ],
      chemicalComposition: {
        Fe: '39.5 min',
        Ni: '30.0 - 35.0',
        Cr: '19.0 - 23.0',
        C: '0.10 max',
        Al: '0.15 - 0.60',
        Ti: '0.15 - 0.60',
        'Al+Ti': '0.30 - 1.20',
        Cu: '0.75 max',
        Mn: '1.50 max',
        Si: '1.0 max',
        S: '0.015 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '520 min', ksi: '75 min' },
        yieldStrength: { mpa: '205 min', ksi: '30 min' },
        elongation: '30% min',
        hardness: 'HRB 70 - 85',
        density: { metric: '7.94 g/cm³', imperial: '0.287 lb/in³' },
        meltingPoint: { celsius: '1357 - 1385 °C', fahrenheit: '2475 - 2525 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z8NC32-21',
        DIN: 'W.Nr. 1.4876',
        JIS: 'NCF 800',
        EN: 'X10NiCrAlTi32-20'
      }
    }
  },

  // 5. Incoloy 825
  {
    slug: 'incoloy-825',
    data: {
      title: 'Incoloy 825 (UNS N08825 / W.Nr. 2.4858)',
      grade: 'Incoloy 825',
      family: 'Incoloy',
      familyDisplayName: 'Nickel-Iron-Chromium Alloys',
      metallurgy: 'Ni-Fe-Cr-Mo-Cu superalloy',
      uns: 'UNS N08825',
      unsNumber: 'UNS N08825',
      wnr: '2.4858',
      werkstoffNumber: '2.4858',
      astmStandards: ['ASTM B423', 'ASTM B424', 'ASTM B425', 'ASTM B564'],
      asmeStandards: ['SB-423', 'SB-424', 'SB-425', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Incoloy 825 Pipes, Flanges & Acid Handling Fittings | Bhansali Metals',
      metaDescription: 'Bhansali Metals supplies Incoloy 825 (UNS N08825 / 2.4858) sulfuric acid resistant seamless pipes, flanges, and fittings with EN 10204 3.1 certification.',
      summary: 'Incoloy 825 is a titanium-stabilized fully austenitic nickel-iron-chromium alloy with additions of copper and molybdenum. It offers exceptional resistance to both reducing and oxidizing acids and stress-corrosion cracking.',
      keyFeatures: [
        'Superb resistance to sulfuric and phosphoric acids',
        'Virtually immune to chloride-induced stress-corrosion cracking',
        'Resistance to pitting and crevice corrosion in sour gas wells',
        'Stabilized against sensitization during welding'
      ],
      corrosionResistance: 'Copper addition provides high resistance to sulfuric acid. Molybdenum enhances pitting and crevice corrosion resistance in chloride environments.',
      applications: [
        'Sulfuric acid piping, heating coils, and pickling tanks',
        'Phosphoric acid evaporators and wet process equipment',
        'Sour gas oil & gas downhole tubing and wellhead components',
        'Nuclear fuel reprocessing dissolvers and effluent cooling'
      ],
      chemicalComposition: {
        Ni: '38.0 - 46.0',
        Fe: '22.0 min',
        Cr: '19.5 - 23.5',
        Mo: '2.5 - 3.5',
        Cu: '1.5 - 3.0',
        Ti: '0.6 - 1.2',
        C: '0.05 max',
        Mn: '1.0 max',
        S: '0.03 max',
        Si: '0.5 max',
        Al: '0.2 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '586 min', ksi: '85 min' },
        yieldStrength: { mpa: '241 min', ksi: '35 min' },
        elongation: '30% min',
        hardness: 'HRB 75 - 90',
        density: { metric: '8.14 g/cm³', imperial: '0.294 lb/in³' },
        meltingPoint: { celsius: '1370 - 1400 °C', fahrenheit: '2500 - 2550 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z8NCUD34-21',
        DIN: 'W.Nr. 2.4858',
        JIS: 'NCF 825',
        EN: 'NiCr21Mo'
      }
    }
  },

  // 6. Monel 400
  {
    slug: 'monel-400',
    data: {
      title: 'Monel 400 (UNS N04400 / W.Nr. 2.4360)',
      grade: 'Monel 400',
      family: 'Monel',
      familyDisplayName: 'Nickel-Copper Alloys',
      metallurgy: 'Ni-Cu alloy',
      uns: 'UNS N04400',
      unsNumber: 'UNS N04400',
      wnr: '2.4360',
      werkstoffNumber: '2.4360',
      astmStandards: ['ASTM B127', 'ASTM B163', 'ASTM B164', 'ASTM B165', 'ASTM B564'],
      asmeStandards: ['SB-127', 'SB-163', 'SB-164', 'SB-165', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Monel 400 Flanges, Seawater Piping & Round Bars | Bhansali Metals',
      metaDescription: 'Monel 400 (UNS N04400 / 2.4360) marine-grade nickel-copper flanges, seamless pipes, and round bars from Bhansali Metals Mumbai with EN 10204 3.1 MTC.',
      summary: 'Monel 400 is a solid-solution binary nickel-copper alloy that can be hardened only by cold working. It provides high strength and toughness across temperature extremes with outstanding resistance to seawater, hydrofluoric acid, and caustic solutions.',
      keyFeatures: [
        'Exceptional resistance to rapidly flowing seawater and marine bio-fouling',
        'Immune to chloride stress corrosion cracking',
        'Excellent resistance to hydrofluoric acid in all concentrations',
        'Good mechanical properties from subzero cryogenic up to 1020°F (550°C)'
      ],
      corrosionResistance: 'Exhibits low corrosion rates in rapidly flowing seawater and brackish water. Highly resistant to non-oxidizing acids, deaerated hydrochloric and sulfuric acid, and dry chlorine.',
      applications: [
        'Marine engineering piping, propeller shafts, and pump impellers',
        'Chemical and hydrocarbon processing crude distillation columns',
        'Hydrofluoric (HF) alkylation units in oil refineries',
        'Boiler feedwater heaters and industrial heat exchangers'
      ],
      chemicalComposition: {
        Ni: '63.0 min',
        Cu: '28.0 - 34.0',
        Fe: '2.5 max',
        Mn: '2.0 max',
        C: '0.30 max',
        Si: '0.50 max',
        S: '0.024 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '480 min', ksi: '70 min' },
        yieldStrength: { mpa: '170 min', ksi: '25 min' },
        elongation: '35% min',
        hardness: 'HRB 60 - 80',
        density: { metric: '8.80 g/cm³', imperial: '0.318 lb/in³' },
        meltingPoint: { celsius: '1300 - 1350 °C', fahrenheit: '2370 - 2460 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NU-30M',
        DIN: 'W.Nr. 2.4360',
        JIS: 'NCU 400',
        EN: 'NiCu30Fe'
      }
    }
  },

  // 7. Monel K-500
  {
    slug: 'monel-k500',
    data: {
      title: 'Monel K-500 (UNS N05500 / W.Nr. 2.4375)',
      grade: 'Monel K-500',
      family: 'Monel',
      familyDisplayName: 'Nickel-Copper Alloys',
      metallurgy: 'Ni-Cu-Al-Ti alloy',
      uns: 'UNS N05500',
      unsNumber: 'UNS N05500',
      wnr: '2.4375',
      werkstoffNumber: '2.4375',
      astmStandards: ['ASTM B865', 'QQ-N-286'],
      asmeStandards: ['SB-865'],
      naceCompliance: true,
      metaTitle: 'Monel K-500 High-Strength Fasteners, Shafts & Bars | Bhansali Metals',
      metaDescription: 'Age-hardened Monel K-500 (UNS N05500 / 2.4375) non-magnetic pump shafts, high-tensile studs, and marine fasteners with EN 10204 3.1 MTC from Bhansali Metals.',
      summary: 'Monel K-500 is an age-hardenable nickel-copper alloy that combines the excellent corrosion resistance of Monel 400 with substantially greater strength and hardness obtained through the additions of aluminum and titanium.',
      keyFeatures: [
        'Yield strength three times and tensile strength twice that of Monel 400',
        'Substantially non-magnetic down to -101°C (-150°F)',
        'Maintains high toughness and strength at cryogenic temperatures',
        'Outstanding resistance to sour gas environments per NACE MR0175'
      ],
      corrosionResistance: 'Corrosion resistance is virtually identical to Monel 400 with high resistance to marine environments, salts, and non-oxidizing mineral acids.',
      applications: [
        'Marine drive shafts, pump shafts, and impeller shafts',
        'Oil well drill collars, non-magnetic drilling equipment, and downhole instruments',
        'High-strength marine fasteners, spring wire, and safety valves',
        'Chemical and paper processing scraper blades and doctor blades'
      ],
      chemicalComposition: {
        Ni: '63.0 min',
        Cu: '27.0 - 33.0',
        Al: '2.30 - 3.15',
        Ti: '0.35 - 0.85',
        Fe: '2.0 max',
        Mn: '1.5 max',
        C: '0.18 max',
        Si: '0.50 max',
        S: '0.010 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '965 min', ksi: '140 min' },
        yieldStrength: { mpa: '690 min', ksi: '100 min' },
        elongation: '20% min',
        hardness: 'HRC 27 - 38',
        density: { metric: '8.44 g/cm³', imperial: '0.305 lb/in³' },
        meltingPoint: { celsius: '1315 - 1350 °C', fahrenheit: '2400 - 2460 °F' }
      },
      availableForms: ['Round Bars', 'Fasteners', 'Forged Fittings', 'Sheets & Plates', 'Flanges', 'Pipes & Tubes'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NU-30AT',
        DIN: 'W.Nr. 2.4375',
        JIS: 'NCU 500',
        EN: 'NiCu30Al'
      }
    }
  },

  // 8. Hastelloy C-276
  {
    slug: 'hastelloy-c276',
    data: {
      title: 'Hastelloy C-276 (UNS N10276 / W.Nr. 2.4819)',
      grade: 'Hastelloy C-276',
      family: 'Hastelloy',
      familyDisplayName: 'Nickel-Molybdenum-Chromium Superalloys',
      metallurgy: 'Ni-Mo-Cr-W superalloy',
      uns: 'UNS N10276',
      unsNumber: 'UNS N10276',
      wnr: '2.4819',
      werkstoffNumber: '2.4819',
      astmStandards: ['ASTM B574', 'ASTM B575', 'ASTM B619', 'ASTM B622', 'ASTM B564'],
      asmeStandards: ['SB-574', 'SB-575', 'SB-619', 'SB-622', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Hastelloy C-276 Flanges, Buttweld Fittings & Pipes | Bhansali Metals',
      metaDescription: 'Bhansali Metals manufactures & exports Hastelloy C-276 (UNS N10276 / 2.4819) forged flanges, pipes, and fittings for aggressive chemical environments.',
      summary: 'Hastelloy C-276 is a premier nickel-molybdenum-chromium-tungsten alloy widely considered the most versatile corrosion resistant alloy available. It resists formation of grain-boundary precipitates in weld heat-affected zones.',
      keyFeatures: [
        'Resistant to wet chlorine gas, hypochlorite, and chlorine dioxide solutions',
        'Exceptional resistance to pitting, crevice corrosion, and stress-corrosion cracking',
        'Tungsten addition (3.0-4.5%) bolsters resistance in reducing acid solutions',
        'One of the few materials resistant to wet chlorine gas and ferric/cupric chlorides'
      ],
      corrosionResistance: 'Outstanding resistance to strong solutions of oxidizing salts (such as ferric and cupric chlorides), hot contaminated organic and inorganic media, chlorine, formic and acetic acids, and wet chlorine gas.',
      applications: [
        'Flue gas desulfurization (FGD) scrubber scrubbers, reheaters, and dampers',
        'Sour gas downhole piping and production components',
        'Bleach plants and digesters in the pulp and paper industry',
        'Chemical reactors, distillation columns, and waste incineration evaporators'
      ],
      chemicalComposition: {
        Ni: 'Bal (approx 57.0)',
        Mo: '15.0 - 17.0',
        Cr: '14.5 - 16.5',
        Fe: '4.0 - 7.0',
        W: '3.0 - 4.5',
        Co: '2.5 max',
        Mn: '1.0 max',
        V: '0.35 max',
        Si: '0.08 max',
        C: '0.010 max',
        P: '0.04 max',
        S: '0.03 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '690 min', ksi: '100 min' },
        yieldStrength: { mpa: '283 min', ksi: '41 min' },
        elongation: '40% min',
        hardness: 'HRB 88 - 98',
        density: { metric: '8.89 g/cm³', imperial: '0.321 lb/in³' },
        meltingPoint: { celsius: '1325 - 1370 °C', fahrenheit: '2415 - 2500 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC17D',
        DIN: 'W.Nr. 2.4819',
        JIS: 'NW 0276',
        EN: 'NiMo16Cr15W'
      }
    }
  },

  // 9. Hastelloy C-22
  {
    slug: 'hastelloy-c22',
    data: {
      title: 'Hastelloy C-22 (UNS N06022 / W.Nr. 2.4602)',
      grade: 'Hastelloy C-22',
      family: 'Hastelloy',
      familyDisplayName: 'Nickel-Chromium-Molybdenum Superalloys',
      metallurgy: 'Ni-Cr-Mo-W superalloy',
      uns: 'UNS N06022',
      unsNumber: 'UNS N06022',
      wnr: '2.4602',
      werkstoffNumber: '2.4602',
      astmStandards: ['ASTM B574', 'ASTM B575', 'ASTM B619', 'ASTM B622', 'ASTM B564'],
      asmeStandards: ['SB-574', 'SB-575', 'SB-619', 'SB-622', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Hastelloy C-22 Pipes, Flanges & Process Equipment | Bhansali Metals',
      metaDescription: 'Hastelloy C-22 (UNS N06022 / 2.4602) superior chromium-nickel-moly piping, fittings, and flanges from Bhansali Metals Mumbai with EN 10204 3.1 MTC.',
      summary: 'Hastelloy C-22 is a versatile nickel-chromium-molybdenum-tungsten alloy with superior resistance to pitting, crevice corrosion, and stress corrosion cracking compared to other Ni-Cr-Mo alloys including C-276 and alloy 625.',
      keyFeatures: [
        'Higher chromium content (20-22.5%) for superior oxidizing resistance',
        'Exceptional resistance in mixed acid environments (nitric/hydrochloric)',
        'Outstanding resistance to chloride-induced localized attack',
        'Excellent thermal stability preventing HAZ intergranular attack'
      ],
      corrosionResistance: 'Provides outstanding resistance in aqueous media across a spectrum of oxidizing and reducing chemicals, wet chlorine, and mixtures containing nitric acid or oxidizing acids with chlorine ions.',
      applications: [
        'Pharmaceutical reactors, centrifuges, and synthesis vessels',
        'Waste water treatment, chlorination systems, and incinerator scrubbers',
        'Nuclear waste processing and spent fuel reprocessing containers',
        'Cellophane manufacturing, pesticide synthesis, and agrochemicals'
      ],
      chemicalComposition: {
        Ni: 'Bal (approx 56.0)',
        Cr: '20.0 - 22.5',
        Mo: '12.5 - 14.5',
        Fe: '2.0 - 6.0',
        W: '2.5 - 3.5',
        Co: '2.5 max',
        Mn: '0.50 max',
        V: '0.35 max',
        Si: '0.08 max',
        C: '0.010 max',
        P: '0.02 max',
        S: '0.02 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '690 min', ksi: '100 min' },
        yieldStrength: { mpa: '310 min', ksi: '45 min' },
        elongation: '45% min',
        hardness: 'HRB 93 max',
        density: { metric: '8.69 g/cm³', imperial: '0.314 lb/in³' },
        meltingPoint: { celsius: '1357 - 1399 °C', fahrenheit: '2475 - 2550 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC21FeD',
        DIN: 'W.Nr. 2.4602',
        JIS: 'NW 06022',
        EN: 'NiCr21Mo14W'
      }
    }
  },

  // 10. Hastelloy B-2
  {
    slug: 'hastelloy-b2',
    data: {
      title: 'Hastelloy B-2 (UNS N10665 / W.Nr. 2.4617)',
      grade: 'Hastelloy B-2',
      family: 'Hastelloy',
      familyDisplayName: 'Nickel-Molybdenum Alloys',
      metallurgy: 'Ni-Mo alloy',
      uns: 'UNS N10665',
      unsNumber: 'UNS N10665',
      wnr: '2.4617',
      werkstoffNumber: '2.4617',
      astmStandards: ['ASTM B333', 'ASTM B335', 'ASTM B619', 'ASTM B622', 'ASTM B564'],
      asmeStandards: ['SB-333', 'SB-335', 'SB-619', 'SB-622', 'SB-564'],
      naceCompliance: true,
      metaTitle: 'Hastelloy B-2 Hydrochloric Acid Resistant Piping & Flanges | Bhansali Metals',
      metaDescription: 'Bhansali Metals manufactures Hastelloy B-2 (UNS N10665 / 2.4617) nickel-moly fittings, pipes, and flanges specialized for hydrochloric acid service with MTC.',
      summary: 'Hastelloy B-2 is a solid-solution strengthened nickel-molybdenum alloy with significant resistance to reducing environments like hydrogen chloride gas, sulfuric, acetic, and phosphoric acids. It controls carbon and silicon to resist HAZ grain boundary precipitation.',
      keyFeatures: [
        'Resistant to hydrochloric acid at all concentrations and temperatures',
        'Significant resistance to reducing media including sulfuric and acetic acids',
        'Resists pitting and stress corrosion cracking in reducing halides',
        'Can be used in the as-welded condition in chemical process equipment'
      ],
      corrosionResistance: 'Excellent resistance to pure hydrochloric, phosphoric, and sulfuric acids, and organic acids. Note: Not recommended for service with oxidizing contaminants (ferric or cupric salts).',
      applications: [
        'Hydrochloric acid synthesis, storage, and transfer lines',
        'Alkylation units, isomerisation units, and acetic acid synthesis',
        'Styrene and ethylbenzene manufacturing units',
        'Pharmaceutical production equipment for handling HCl gas'
      ],
      chemicalComposition: {
        Ni: 'Bal (approx 68.0)',
        Mo: '26.0 - 30.0',
        Fe: '2.0 max',
        Cr: '1.0 max',
        Co: '1.0 max',
        Mn: '1.0 max',
        Si: '0.10 max',
        C: '0.010 max',
        P: '0.04 max',
        S: '0.03 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '760 min', ksi: '110 min' },
        yieldStrength: { mpa: '350 min', ksi: '51 min' },
        elongation: '40% min',
        hardness: 'HRB 94 max',
        density: { metric: '9.22 g/cm³', imperial: '0.333 lb/in³' },
        meltingPoint: { celsius: '1332 - 1377 °C', fahrenheit: '2430 - 2510 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'N-Mo28',
        DIN: 'W.Nr. 2.4617',
        JIS: 'NW 0665',
        EN: 'NiMo28'
      }
    }
  },

  // 11. Hastelloy X
  {
    slug: 'hastelloy-x',
    data: {
      title: 'Hastelloy X (UNS N06002 / W.Nr. 2.4665)',
      grade: 'Hastelloy X',
      family: 'Hastelloy',
      familyDisplayName: 'Nickel-Chromium-Iron-Molybdenum Superalloys',
      metallurgy: 'Ni-Cr-Fe-Mo superalloy',
      uns: 'UNS N06002',
      unsNumber: 'UNS N06002',
      wnr: '2.4665',
      werkstoffNumber: '2.4665',
      astmStandards: ['ASTM B572', 'ASTM B435', 'ASTM B619', 'ASTM B622'],
      asmeStandards: ['SB-572', 'SB-435', 'SB-619', 'SB-622'],
      naceCompliance: true,
      metaTitle: 'Hastelloy X High-Temperature Gas Turbine Sheets & Fasteners | Bhansali Metals',
      metaDescription: 'Oxidation-resistant Hastelloy X (UNS N06002 / 2.4665) high-temperature plates, round bars, and combustion components supplied by Bhansali Metals Mumbai.',
      summary: 'Hastelloy X is a nickel-chromium-iron-molybdenum superalloy characterized by outstanding high-temperature strength, oxidation resistance, and fabricability up to 2200°F (1200°C). It exhibits exceptional resistance to stress-corrosion cracking in petrochemical applications.',
      keyFeatures: [
        'Superior oxidation resistance up to 2200°F (1200°C)',
        'High tensile and creep-rupture strength at elevated temperatures',
        'Excellent resistance to carburization and nitriding atmospheres',
        'Easily formed and welded by all standard processes'
      ],
      corrosionResistance: 'Resistant to oxidizing, reducing, and neutral atmospheres. Forms a protective tenacity oxide film that resists spalling in cyclic heating.',
      applications: [
        'Gas turbine combustion cans, transition ducts, and spray bars',
        'Industrial furnace retorts, baffles, and heat-treating muffles',
        'Petrochemical pyrolysis units and catalyst support grids',
        'Aircraft engine exhaust tailpipes and afterburner parts'
      ],
      chemicalComposition: {
        Ni: 'Bal (approx 47.0)',
        Cr: '20.5 - 23.0',
        Fe: '17.0 - 20.0',
        Mo: '8.0 - 10.0',
        Co: '0.50 - 2.50',
        W: '0.20 - 1.0',
        C: '0.05 - 0.15',
        Mn: '1.0 max',
        Si: '1.0 max',
        P: '0.04 max',
        S: '0.03 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '715 min', ksi: '104 min' },
        yieldStrength: { mpa: '325 min', ksi: '47 min' },
        elongation: '35% min',
        hardness: 'HRB 90 max',
        density: { metric: '8.22 g/cm³', imperial: '0.297 lb/in³' },
        meltingPoint: { celsius: '1260 - 1355 °C', fahrenheit: '2300 - 2470 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'NC22FeD8M',
        DIN: 'W.Nr. 2.4665',
        JIS: 'NW 0002',
        EN: 'NiCr22Fe18Mo'
      }
    }
  },

  // 12. Nickel 200
  {
    slug: 'nickel-200',
    data: {
      title: 'Nickel 200 (UNS N02200 / W.Nr. 2.4066)',
      grade: 'Nickel 200',
      family: 'Nickel',
      familyDisplayName: 'Commercially Pure Nickel',
      metallurgy: 'Pure Wrought Nickel (99.6%)',
      uns: 'UNS N02200',
      unsNumber: 'UNS N02200',
      wnr: '2.4066',
      werkstoffNumber: '2.4066',
      astmStandards: ['ASTM B160', 'ASTM B161', 'ASTM B162', 'ASTM B163', 'ASTM B366'],
      asmeStandards: ['SB-160', 'SB-161', 'SB-162', 'SB-163', 'SB-366'],
      naceCompliance: true,
      metaTitle: 'Nickel 200 Pipes, Flanges & Caustic Soda Equipment | Bhansali Metals',
      metaDescription: 'Commercially pure Nickel 200 (UNS N02200 / 2.4066) seamless pipes, plates, and fittings from Bhansali Metals Mumbai with EN 10204 3.1 MTC.',
      summary: 'Nickel 200 is commercially pure wrought nickel (99.6% nominal) with good mechanical properties and excellent resistance to a range of corrosive media, especially caustic alkalies across all concentrations and temperatures.',
      keyFeatures: [
        'Virtually immune to caustic soda and alkali attack',
        'High thermal and electrical conductivity',
        'Magnetostrictive properties and low vapor pressure',
        'Excellent ductility and wide service temperature range'
      ],
      corrosionResistance: 'Highly resistant to caustic alkalies up to and including the molten state. Outstanding resistance in dry halogens and neutral/alkaline salt solutions.',
      applications: [
        'Caustic soda concentration evaporators and transfer piping',
        'Synthetic fiber (rayon, nylon) processing vessels',
        'Chlorine storage tanks and hydrogen chloride manufacturing',
        'Food processing equipment and alkali handling pumps'
      ],
      chemicalComposition: {
        Ni: '99.0 min',
        C: '0.15 max',
        Cu: '0.25 max',
        Fe: '0.40 max',
        Mn: '0.35 max',
        Si: '0.35 max',
        S: '0.010 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '380 min', ksi: '55 min' },
        yieldStrength: { mpa: '105 min', ksi: '15 min' },
        elongation: '40% min',
        hardness: 'HRB 45 - 70',
        density: { metric: '8.89 g/cm³', imperial: '0.321 lb/in³' },
        meltingPoint: { celsius: '1435 - 1446 °C', fahrenheit: '2615 - 2635 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Ni-99.6',
        DIN: 'W.Nr. 2.4066',
        JIS: 'NNi 200',
        EN: 'Ni 99.2'
      }
    }
  },

  // 13. Nickel 201
  {
    slug: 'nickel-201',
    data: {
      title: 'Nickel 201 (UNS N02201 / W.Nr. 2.4068)',
      grade: 'Nickel 201',
      family: 'Nickel',
      familyDisplayName: 'Low Carbon Pure Nickel',
      metallurgy: 'Low Carbon Nickel (C max 0.02%)',
      uns: 'UNS N02201',
      unsNumber: 'UNS N02201',
      wnr: '2.4068',
      werkstoffNumber: '2.4068',
      astmStandards: ['ASTM B160', 'ASTM B161', 'ASTM B162', 'ASTM B163', 'ASTM B366'],
      asmeStandards: ['SB-160', 'SB-161', 'SB-162', 'SB-163', 'SB-366'],
      naceCompliance: true,
      metaTitle: 'Nickel 201 Low-Carbon Flanges & High-Temp Tubes | Bhansali Metals',
      metaDescription: 'Dual-certified Nickel 201 (UNS N02201 / 2.4068, C<=0.02%) seamless pipes, flanges, and fittings for high temperature caustic service above 315°C.',
      summary: 'Nickel 201 is the low-carbon version of Nickel 200 (carbon strictly capped at 0.02% max), specifically designed for applications above 600°F (315°C) to prevent intergranular embrittlement by graphitic precipitation.',
      keyFeatures: [
        'Strict carbon limit <= 0.02% preventing high-temperature graphitization',
        'Service capability at temperatures exceeding 600°F (315°C)',
        'Outstanding resistance to molten caustic salts and anhydrous alkalies',
        'Excellent ductile-to-brittle transition resistance'
      ],
      corrosionResistance: 'Identical corrosion resistance to Nickel 200, with immunity to graphitic embrittlement during prolonged exposure to elevated temperatures.',
      applications: [
        'Caustic evaporators and fusion pots operating above 315°C',
        'Fluorine generation electrodes and fluorine transfer systems',
        'Production of vinyl chloride monomer (VCM)',
        'Alkali metal storage and high-temperature furnace hardware'
      ],
      chemicalComposition: {
        Ni: '99.0 min',
        C: '0.02 max',
        Cu: '0.25 max',
        Fe: '0.40 max',
        Mn: '0.35 max',
        Si: '0.35 max',
        S: '0.010 max'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '350 min', ksi: '50 min' },
        yieldStrength: { mpa: '80 min', ksi: '12 min' },
        elongation: '40% min',
        hardness: 'HRB 40 - 65',
        density: { metric: '8.89 g/cm³', imperial: '0.321 lb/in³' },
        meltingPoint: { celsius: '1435 - 1446 °C', fahrenheit: '2615 - 2635 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Ni-99.2LC',
        DIN: 'W.Nr. 2.4068',
        JIS: 'NNi 201',
        EN: 'LC-Ni 99'
      }
    }
  },

  // 14. Stainless Steel 304
  {
    slug: 'stainless-steel-304',
    data: {
      title: 'Stainless Steel 304 (UNS S30400 / W.Nr. 1.4301)',
      grade: 'SS 304',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Austenitic Stainless Steel (18-8)',
      uns: 'UNS S30400',
      unsNumber: 'UNS S30400',
      wnr: '1.4301',
      werkstoffNumber: '1.4301',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: false,
      metaTitle: 'Stainless Steel 304 Pipes, Flanges & Sheets Stockist Mumbai | Bhansali Metals',
      metaDescription: 'Premium Stainless Steel 304 (UNS S30400 / 1.4301) flanges, buttweld fittings, round bars, and seamless pipes from Bhansali Metals Mumbai with MTC.',
      summary: 'Grade 304 is the classic 18/8 austenitic stainless steel. It is the most widely utilized stainless steel across all industrial, commercial, and architectural sectors due to its excellent combination of corrosion resistance, fabricability, and hygiene.',
      keyFeatures: [
        'Standard 18% chromium and 8% nickel metallurgical matrix',
        'Excellent drawability and deep-draw forming characteristics',
        'Outstanding cryogenic toughness down to -196°C',
        'Non-magnetic in annealed condition with easy sanitary cleanability'
      ],
      corrosionResistance: 'Resistant to a wide variety of atmospheric environments and many corrosive media. Subject to pitting and crevice corrosion in warm chloride environments.',
      applications: [
        'Food and beverage processing equipment and dairy tanks',
        'Architectural paneling, railings, and trims',
        'Chemical storage containers and domestic appliances',
        'Automotive exhaust headers and general industrial piping'
      ],
      chemicalComposition: {
        Cr: '18.00 - 20.00',
        Ni: '8.00 - 10.50',
        C: '0.08 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '515 min', ksi: '74.7 min' },
        yieldStrength: { mpa: '205 min', ksi: '29.7 min' },
        elongation: '40% min',
        hardness: 'BHN 201 max / HRB 92 max',
        density: { metric: '8.00 g/cm³', imperial: '0.289 lb/in³' },
        meltingPoint: { celsius: '1400 - 1450 °C', fahrenheit: '2550 - 2650 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z7CN18-09',
        DIN: 'W.Nr. 1.4301',
        JIS: 'SUS 304',
        EN: 'X5CrNi18-10'
      }
    }
  },

  // 15. Stainless Steel 304L
  {
    slug: 'stainless-steel-304l',
    data: {
      title: 'Stainless Steel 304L (UNS S30403 / W.Nr. 1.4306)',
      grade: 'SS 304L',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Low Carbon Austenitic Stainless Steel',
      uns: 'UNS S30403',
      unsNumber: 'UNS S30403',
      wnr: '1.4306',
      werkstoffNumber: '1.4306',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: false,
      metaTitle: 'Stainless Steel 304L Welded Pipes, Flanges & Fittings | Bhansali Metals',
      metaDescription: 'Extra low carbon SS 304L (UNS S30403 / 1.4306, C<=0.030%) seamless pipes, flanges, and fittings with EN 10204 3.1 MTC supplied by Bhansali Metals Mumbai.',
      summary: 'Grade 304L is the extra low-carbon variation of 304 (carbon strictly capped at 0.030% max). It eliminates harmful carbide precipitation in the heat-affected zone (HAZ) during welding, making it ideal for heavy-gauge welded construction.',
      keyFeatures: [
        'Strict carbon cap <= 0.030% preventing intergranular sensitization',
        'Immunity to intergranular corrosion in the as-welded condition',
        'No requirement for post-weld solution annealing on heavy joints',
        'High cryogenic impact toughness at subzero temperatures'
      ],
      corrosionResistance: 'Identical corrosion resistance to 304 in most environments, but with superior resistance to intergranular corrosion in welded components.',
      applications: [
        'Chemical and petrochemical heavy-wall welded vessels',
        'Brewery, winery, and pharmaceutical processing equipment',
        'Cryogenic storage tanks, LNG piping, and transfer manifolds',
        'Water treatment and municipal sewage plant structures'
      ],
      chemicalComposition: {
        Cr: '18.00 - 20.00',
        Ni: '8.00 - 12.00',
        C: '0.030 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '485 min', ksi: '70.3 min' },
        yieldStrength: { mpa: '170 min', ksi: '24.7 min' },
        elongation: '40% min',
        hardness: 'BHN 201 max / HRB 92 max',
        density: { metric: '8.00 g/cm³', imperial: '0.289 lb/in³' },
        meltingPoint: { celsius: '1400 - 1450 °C', fahrenheit: '2550 - 2650 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z3CN18-10',
        DIN: 'W.Nr. 1.4306',
        JIS: 'SUS 304L',
        EN: 'X2CrNi19-11'
      }
    }
  },

  // 16. Stainless Steel 316
  {
    slug: 'stainless-steel-316',
    data: {
      title: 'Stainless Steel 316 (UNS S31600 / W.Nr. 1.4401)',
      grade: 'SS 316',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Molybdenum Bearing Austenitic Stainless Steel',
      uns: 'UNS S31600',
      unsNumber: 'UNS S31600',
      wnr: '1.4401',
      werkstoffNumber: '1.4401',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: true,
      metaTitle: 'Stainless Steel 316 Flanges, Pipes & Marine Fittings | Bhansali Metals',
      metaDescription: 'Molybdenum-bearing SS 316 (UNS S31600 / 1.4401) flanges, valves, seamless tubes, and fittings from Bhansali Metals Mumbai with EN 10204 3.1 MTC guarantee.',
      summary: 'Grade 316 is the second most common austenitic stainless steel. The addition of 2.0 to 3.0% molybdenum provides significantly improved corrosion resistance compared to grade 304, especially pitting and crevice resistance in chloride environments.',
      keyFeatures: [
        'Contains 2.0-3.0% molybdenum for enhanced pitting resistance',
        'Higher creep, stress-rupture, and tensile strength at high temperatures',
        'Resistant to sulfuric, acetic, formic, and tartaric acid solutions',
        'Standard grade for marine equipment and coastal architectural systems'
      ],
      corrosionResistance: 'Substantially more resistant to sulfuric acid, sulfurous acids, chlorides, and ocean atmospheres than grade 304.',
      applications: [
        'Chemical and petrochemical processing columns and heat exchangers',
        'Marine fittings, boat hardware, and offshore platform structures',
        'Pharmaceutical processing cleanroom piping and surgical tools',
        'Food preparation equipment exposed to high chloride food processing'
      ],
      chemicalComposition: {
        Cr: '16.00 - 18.00',
        Ni: '10.00 - 14.00',
        Mo: '2.00 - 3.00',
        C: '0.08 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '515 min', ksi: '74.7 min' },
        yieldStrength: { mpa: '205 min', ksi: '29.7 min' },
        elongation: '40% min',
        hardness: 'BHN 217 max / HRB 95 max',
        density: { metric: '8.02 g/cm³', imperial: '0.290 lb/in³' },
        meltingPoint: { celsius: '1375 - 1400 °C', fahrenheit: '2500 - 2550 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z7CND17-11-02',
        DIN: 'W.Nr. 1.4401',
        JIS: 'SUS 316',
        EN: 'X5CrNiMo17-12-2'
      }
    }
  },

  // 17. Stainless Steel 316L
  {
    slug: 'stainless-steel-316l',
    data: {
      title: 'Stainless Steel 316L (UNS S31603 / W.Nr. 1.4404)',
      grade: 'SS 316L',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Low Carbon Moly Austenitic Stainless Steel',
      uns: 'UNS S31603',
      unsNumber: 'UNS S31603',
      wnr: '1.4404',
      werkstoffNumber: '1.4404',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: true,
      metaTitle: 'Stainless Steel 316L Flanges, Pipes & Buttweld Fittings | Bhansali Metals',
      metaDescription: 'Low-carbon SS 316L (UNS S31603 / 1.4404, C<=0.030%) forged flanges, seamless pipes, and buttweld fittings supplied by Bhansali Metals Mumbai with MTC.',
      summary: 'Grade 316L is the low-carbon version of 316 stainless steel (carbon strictly capped at 0.030% max). It is immune to grain-boundary carbide precipitation during welding, providing maximum corrosion resistance in heavy welded sections.',
      keyFeatures: [
        'Strict carbon cap <= 0.030% eliminating sensitization during welding',
        'Molybdenum content (2.0-3.0%) resisting chloride pitting',
        'NACE MR0175 compliant for sour service piping systems',
        'Superior biopharmaceutical and electropolished surface finish characteristics'
      ],
      corrosionResistance: 'Exceptional resistance to pitting in chloride-bearing environments, industrial chemicals, and organic and inorganic acids.',
      applications: [
        'Offshore topside piping, instrumentation lines, and chemical manifolds',
        'Pharmaceutical bioprocess vessels, fermenters, and pure steam lines',
        'Marine exhaust scrubbers and coastal power plant cooling piping',
        'Paper and pulp bleaching equipment and fertilizer manufacturing'
      ],
      chemicalComposition: {
        Cr: '16.00 - 18.00',
        Ni: '10.00 - 14.00',
        Mo: '2.00 - 3.00',
        C: '0.030 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '485 min', ksi: '70.3 min' },
        yieldStrength: { mpa: '170 min', ksi: '24.7 min' },
        elongation: '40% min',
        hardness: 'BHN 217 max / HRB 95 max',
        density: { metric: '8.02 g/cm³', imperial: '0.290 lb/in³' },
        meltingPoint: { celsius: '1375 - 1400 °C', fahrenheit: '2500 - 2550 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z3CND17-11-02',
        DIN: 'W.Nr. 1.4404',
        JIS: 'SUS 316L',
        EN: 'X2CrNiMo17-12-2'
      }
    }
  },

  // 18. Stainless Steel 321
  {
    slug: 'stainless-steel-321',
    data: {
      title: 'Stainless Steel 321 (UNS S32100 / W.Nr. 1.4541)',
      grade: 'SS 321',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Titanium Stabilized Austenitic Stainless Steel',
      uns: 'UNS S32100',
      unsNumber: 'UNS S32100',
      wnr: '1.4541',
      werkstoffNumber: '1.4541',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: false,
      metaTitle: 'Stainless Steel 321 Heat Exchanger Pipes & High-Temp Flanges | Bhansali Metals',
      metaDescription: 'Titanium-stabilized SS 321 (UNS S32100 / 1.4541) high-temperature pipes, flanges, and buttweld fittings from Bhansali Metals Mumbai with EN 10204 3.1 MTC.',
      summary: 'Grade 321 is a titanium-stabilized austenitic stainless steel formulated to resist intergranular corrosion in the chromium carbide precipitation temperature range of 800°F to 1500°F (427°C to 816°C). It offers higher creep and stress-rupture properties than 304.',
      keyFeatures: [
        'Titanium addition at least 5x(C+N) ties up carbon preventing chromium carbide formation',
        'Immune to intergranular corrosion after prolonged elevated temperature exposure',
        'Superior creep and stress-rupture properties compared to 304 and 304L',
        'Maintains good mechanical toughness down to cryogenic temperatures'
      ],
      corrosionResistance: 'Equivalent corrosion resistance to 304 in the annealed condition, but superior in preventing intergranular attack when service involves heating between 427°C and 816°C.',
      applications: [
        'Aircraft piston engine manifolds and jet engine exhaust components',
        'Chemical expansion joints, thermal oxidizers, and furnace piping',
        'Refinery catalytic cracking units and high-temperature steam piping',
        'Boiler casings, superheater tubes, and radiant reheaters'
      ],
      chemicalComposition: {
        Cr: '17.00 - 19.00',
        Ni: '9.00 - 12.00',
        Ti: '5x(C+N) min, 0.70 max',
        C: '0.08 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '515 min', ksi: '74.7 min' },
        yieldStrength: { mpa: '205 min', ksi: '29.7 min' },
        elongation: '40% min',
        hardness: 'BHN 217 max / HRB 95 max',
        density: { metric: '7.92 g/cm³', imperial: '0.286 lb/in³' },
        meltingPoint: { celsius: '1400 - 1427 °C', fahrenheit: '2550 - 2600 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z6CNT18-10',
        DIN: 'W.Nr. 1.4541',
        JIS: 'SUS 321',
        EN: 'X6CrNiTi18-10'
      }
    }
  },

  // 19. Stainless Steel 310S
  {
    slug: 'stainless-steel-310s',
    data: {
      title: 'Stainless Steel 310S (UNS S31008 / W.Nr. 1.4845)',
      grade: 'SS 310S',
      family: 'Stainless Steel',
      familyDisplayName: 'High Temperature Stainless Steel',
      metallurgy: 'High Chromium-Nickel Heat Resistant Stainless Steel',
      uns: 'UNS S31008',
      unsNumber: 'UNS S31008',
      wnr: '1.4845',
      werkstoffNumber: '1.4845',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: false,
      metaTitle: 'Stainless Steel 310S Furnace Pipes, Plates & High-Temp Flanges | Bhansali Metals',
      metaDescription: 'Heat-resistant SS 310S (UNS S31008 / 1.4845, Cr 24-26%, Ni 19-22%) plates, furnace tubes, and flanges rated for 1150°C service from Bhansali Metals Mumbai.',
      summary: 'Grade 310S is a high chromium (24.0-26.0%) and high nickel (19.0-22.0%) austenitic heat-resistant stainless steel. It exhibits exceptional resistance to oxidation up to 2010°F (1100°C) under cyclic conditions and 2100°F (1150°C) under continuous service.',
      keyFeatures: [
        'High Cr (24-26%) and Ni (19-22%) content for extreme scaling resistance',
        'Continuous oxidation resistance up to 1150°C (2100°F)',
        'Excellent resistance to thermal fatigue and cyclic heating',
        'High creep strength and superior ductility at elevated temperatures'
      ],
      corrosionResistance: 'Excellent resistance to high-temperature oxidation, carburizing atmospheres, and sulfidation. Good resistance to hot fuming nitric acid at room temperature.',
      applications: [
        'Industrial furnace parts, conveyor belts, burners, and retorts',
        'Petrochemical radiant tubes and fluidized bed coal combustor tubes',
        'Kiln liners, combustion chambers, and flare tips',
        'Ore roasting equipment and waste incineration plant recuperators'
      ],
      chemicalComposition: {
        Cr: '24.00 - 26.00',
        Ni: '19.00 - 22.00',
        C: '0.08 max',
        Mn: '2.00 max',
        Si: '1.50 max',
        P: '0.045 max',
        S: '0.030 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '515 min', ksi: '74.7 min' },
        yieldStrength: { mpa: '205 min', ksi: '29.7 min' },
        elongation: '40% min',
        hardness: 'BHN 217 max / HRB 95 max',
        density: { metric: '7.98 g/cm³', imperial: '0.288 lb/in³' },
        meltingPoint: { celsius: '1402 - 1454 °C', fahrenheit: '2555 - 2650 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z8CN25-20',
        DIN: 'W.Nr. 1.4845',
        JIS: 'SUS 310S',
        EN: 'X8CrNi25-21'
      }
    }
  },

  // 20. Stainless Steel 347
  {
    slug: 'stainless-steel-347',
    data: {
      title: 'Stainless Steel 347 (UNS S34700 / W.Nr. 1.4550)',
      grade: 'SS 347',
      family: 'Stainless Steel',
      familyDisplayName: 'Austenitic Stainless Steel',
      metallurgy: 'Niobium Stabilized Austenitic Stainless Steel',
      uns: 'UNS S34700',
      unsNumber: 'UNS S34700',
      wnr: '1.4550',
      werkstoffNumber: '1.4550',
      astmStandards: ['ASTM A240', 'ASTM A312', 'ASTM A182', 'ASTM A276', 'ASTM A403'],
      asmeStandards: ['SA-240', 'SA-312', 'SA-182', 'SA-276', 'SA-403'],
      naceCompliance: false,
      metaTitle: 'Stainless Steel 347 High-Temperature Tubes, Flanges & Fittings | Bhansali Metals',
      metaDescription: 'Niobium-stabilized SS 347 (UNS S34700 / 1.4550) seamless pipes, flanges, and fittings for severe thermal service from Bhansali Metals Mumbai with MTC guarantee.',
      summary: 'Grade 347 is a columbium (niobium) stabilized austenitic chromium-nickel stainless steel. The addition of columbium suppresses chromium carbide precipitation in the 800-1500°F (427-816°C) temperature range, providing superior intergranular corrosion resistance.',
      keyFeatures: [
        'Niobium stabilization (10x C min, 1.0% max) prevents intergranular attack',
        'Higher creep and stress rupture properties than 304 and 321',
        'Excellent resistance to polythionic acid stress corrosion cracking (PASCC)',
        'Superior performance in severe refinery hydrotreating and cracking units'
      ],
      corrosionResistance: 'Excellent resistance to general corrosion and polythionic acid cracking in oil refinery desulfurization units.',
      applications: [
        'Refinery catalytic hydrocracker units and hydrotreating piping',
        'Boiler tubes, steam headers, and superheater manifolds',
        'Heavy-wall welded process equipment operating between 450°C and 850°C',
        'High-temperature chemical synthesis reactors and radiant heater coils'
      ],
      chemicalComposition: {
        Cr: '17.00 - 19.00',
        Ni: '9.00 - 13.00',
        'Nb+Ta': '10x(C min), 1.00 max',
        C: '0.08 max',
        Mn: '2.00 max',
        Si: '0.75 max',
        P: '0.045 max',
        S: '0.030 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '515 min', ksi: '74.7 min' },
        yieldStrength: { mpa: '205 min', ksi: '29.7 min' },
        elongation: '40% min',
        hardness: 'BHN 201 max / HRB 92 max',
        density: { metric: '7.96 g/cm³', imperial: '0.287 lb/in³' },
        meltingPoint: { celsius: '1400 - 1425 °C', fahrenheit: '2550 - 2600 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z6CNNb18-10',
        DIN: 'W.Nr. 1.4550',
        JIS: 'SUS 347',
        EN: 'X6CrNiNb18-10'
      }
    }
  },

  // 21. Stainless Steel 904L
  {
    slug: 'stainless-steel-904l',
    data: {
      title: 'Stainless Steel 904L (UNS N08904 / W.Nr. 1.4539)',
      grade: 'SS 904L',
      family: 'Stainless Steel',
      familyDisplayName: 'Super Austenitic Stainless Steel',
      metallurgy: 'Super Austenitic Stainless Steel (Cu-Mo Enhanced)',
      uns: 'UNS N08904',
      unsNumber: 'UNS N08904',
      wnr: '1.4539',
      werkstoffNumber: '1.4539',
      astmStandards: ['ASTM B625', 'ASTM B673', 'ASTM B674', 'ASTM B677', 'ASTM A182'],
      asmeStandards: ['SB-625', 'SB-673', 'SB-674', 'SB-677', 'SA-182'],
      naceCompliance: true,
      metaTitle: 'Stainless Steel 904L Flanges, Pipes & Sulfuric Acid Valves | Bhansali Metals',
      metaDescription: 'Super austenitic SS 904L (UNS N08904 / 1.4539, Cu 1-2%, Mo 4-5%) sulfuric acid resistant pipes, plates, and flanges from Bhansali Metals Mumbai with MTC.',
      summary: 'Grade 904L is a high-alloy super austenitic stainless steel containing 4.5% molybdenum and 1.5% copper additions. It was originally engineered to resist dilute sulfuric acid across full concentration ranges and temperatures up to 40°C.',
      keyFeatures: [
        'Copper addition (1.0-2.0%) provides exceptional resistance to sulfuric acid',
        'High molybdenum (4.0-5.0%) and nickel (23-28%) resist chloride pitting',
        'Fully austenitic structure with very low carbon (0.020% max)',
        'Excellent resistance to warm seawater and concentrated organic acids'
      ],
      corrosionResistance: 'Outstanding resistance to sulfuric, phosphoric, acetic, and formic acids. Virtually immune to pitting and crevice corrosion in seawater and chloride brine.',
      applications: [
        'Sulfuric acid pickling plants, cooling coils, and pipe distribution',
        'Phosphate fertilizer production evaporators and reaction tanks',
        'Flue gas desulfurization (FGD) scrubbers and coastal sea water cooling',
        'Bleach plant washing stages in pulp and paper manufacturing'
      ],
      chemicalComposition: {
        Ni: '23.00 - 28.00',
        Cr: '19.00 - 23.00',
        Mo: '4.00 - 5.00',
        Cu: '1.00 - 2.00',
        C: '0.020 max',
        Mn: '2.00 max',
        Si: '1.00 max',
        P: '0.045 max',
        S: '0.035 max',
        N: '0.10 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '490 min', ksi: '71.1 min' },
        yieldStrength: { mpa: '220 min', ksi: '31.9 min' },
        elongation: '35% min',
        hardness: 'BHN 192 max / HRB 90 max',
        density: { metric: '8.05 g/cm³', imperial: '0.291 lb/in³' },
        meltingPoint: { celsius: '1300 - 1390 °C', fahrenheit: '2370 - 2535 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z1NCDU25-20-04',
        DIN: 'W.Nr. 1.4539',
        JIS: 'SUS 890L',
        EN: 'X1NiCrMoCu25-20-5'
      }
    }
  },

  // 22. Duplex 2205
  {
    slug: 'duplex-2205',
    data: {
      title: 'Duplex 2205 (UNS S31803 / S32205 / W.Nr. 1.4462)',
      grade: 'Duplex 2205',
      family: 'Duplex',
      familyDisplayName: 'Duplex Stainless Steel',
      metallurgy: 'Austenitic-Ferritic Duplex Stainless Steel',
      uns: 'UNS S31803 / S32205',
      unsNumber: 'UNS S31803 / S32205',
      wnr: '1.4462',
      werkstoffNumber: '1.4462',
      astmStandards: ['ASTM A240', 'ASTM A789', 'ASTM A790', 'ASTM A182', 'ASTM A276', 'ASTM A815'],
      asmeStandards: ['SA-240', 'SA-789', 'SA-790', 'SA-182', 'SA-276', 'SA-815'],
      naceCompliance: true,
      metaTitle: 'Duplex 2205 Flanges, Seamless Pipes & Fittings Stockist | Bhansali Metals',
      metaDescription: 'High-strength Duplex 2205 (UNS S31803 / S32205 / 1.4462) flanges, pipes, and fittings supplied by Bhansali Metals Mumbai with EN 10204 3.1 certification.',
      summary: 'Duplex 2205 is a nitrogen-enhanced 22% chromium duplex stainless steel with an approximate 50/50 austenitic-ferritic microstructure. It delivers twice the design yield strength of standard austenitic grades along with superior resistance to stress-corrosion cracking.',
      keyFeatures: [
        'Approximately double the yield strength of 316L and standard austenitics',
        'High resistance to chloride stress corrosion cracking and pitting',
        'Pitting Resistance Equivalent (PREN) > 35 for aggressive marine environments',
        'High energy absorption and fatigue strength under cyclic loads'
      ],
      corrosionResistance: 'Excellent resistance to general corrosion, pitting, crevice corrosion, and chloride stress-corrosion cracking in marine, oilfield, and refinery operations.',
      applications: [
        'Oil and gas exploration subsea manifolds, piping, and separation vessels',
        'Chemical process tanks, heat exchangers, and chlorination equipment',
        'Marine cargo tanks, chemical tankers, and seawater cooling systems',
        'Desalination plant reverse osmosis high-pressure piping and pumps'
      ],
      chemicalComposition: {
        Cr: '21.0 - 23.0',
        Ni: '4.5 - 6.5',
        Mo: '2.5 - 3.5',
        N: '0.08 - 0.20',
        C: '0.030 max',
        Mn: '2.00 max',
        Si: '1.00 max',
        P: '0.030 max',
        S: '0.020 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '655 min', ksi: '95 min' },
        yieldStrength: { mpa: '450 min', ksi: '65 min' },
        elongation: '25% min',
        hardness: 'HRC 32 max / BHN 293 max',
        density: { metric: '7.82 g/cm³', imperial: '0.282 lb/in³' },
        meltingPoint: { celsius: '1385 - 1443 °C', fahrenheit: '2525 - 2630 °F' }
      },
      availableForms: ['Pipes & Tubes', 'Flanges', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z3CND22-05-02',
        DIN: 'W.Nr. 1.4462',
        JIS: 'SUS 329J3L',
        EN: 'X2CrNiMoN22-5-3'
      }
    }
  },

  // 23. Super Duplex 2507
  {
    slug: 'super-duplex-2507',
    data: {
      title: 'Super Duplex 2507 (UNS S32750 / W.Nr. 1.4410)',
      grade: 'Super Duplex 2507',
      family: 'Super Duplex',
      familyDisplayName: 'Super Duplex Stainless Steel',
      metallurgy: 'Super Duplex Stainless Steel (PREN >= 42)',
      pren: 42.68,
      uns: 'UNS S32750',
      unsNumber: 'UNS S32750',
      wnr: '1.4410',
      werkstoffNumber: '1.4410',
      astmStandards: ['ASTM A240', 'ASTM A789', 'ASTM A790', 'ASTM A182', 'ASTM A276', 'ASTM A815'],
      asmeStandards: ['SA-240', 'SA-789', 'SA-790', 'SA-182', 'SA-276', 'SA-815'],
      naceCompliance: true,
      metaTitle: 'Super Duplex 2507 Flanges, Subsea Pipes & Fittings | Bhansali Metals',
      metaDescription: 'Super Duplex 2507 (UNS S32750 / 1.4410, PREN >= 42) high-strength forged flanges, subsea pipes, and buttweld fittings from Bhansali Metals Mumbai with MTC.',
      summary: 'Super Duplex 2507 is a 25% chromium, 4% molybdenum, and 0.28% nitrogen super duplex alloy designed for demanding offshore, chemical, and marine applications requiring exceptional strength and chloride corrosion resistance.',
      keyFeatures: [
        'Pitting Resistance Equivalent Number (PREN) strictly >= 42 (Nominal 42.7)',
        'Extremely high tensile (795 MPa min) and yield strength (550 MPa min)',
        'Outstanding resistance to pitting, crevice corrosion, and erosion corrosion',
        'NACE MR0175 / ISO 15156 compliant for extreme sour gas offshore service'
      ],
      corrosionResistance: 'Highly resistant to general corrosion by organic and inorganic acids. Exceptional resistance to chloride-induced stress corrosion cracking, crevice corrosion, and seawater erosion.',
      applications: [
        'Offshore oil & gas subsea manifolds, umbilicals, risers, and flowlines',
        'Seawater reverse osmosis (SWRO) desalination high-pressure headers and pumps',
        'Marine scrubbers, coastal power generation, and chemical process piping',
        'High-pressure chemical injection systems and subsea hydraulic lines'
      ],
      chemicalComposition: {
        Cr: '24.0 - 26.0',
        Ni: '6.0 - 8.0',
        Mo: '3.0 - 5.0',
        N: '0.24 - 0.32',
        C: '0.030 max',
        Mn: '1.20 max',
        Si: '0.80 max',
        Cu: '0.50 max',
        P: '0.035 max',
        S: '0.020 max',
        Fe: 'Bal'
      },
      mechanicalProperties: {
        tensileStrength: { mpa: '795 min', ksi: '116 min' },
        yieldStrength: { mpa: '550 min', ksi: '80 min' },
        elongation: '15% min',
        hardness: 'HRC 32 max / BHN 310 max',
        density: { metric: '7.80 g/cm³', imperial: '0.281 lb/in³' },
        meltingPoint: { celsius: '1390 - 1425 °C', fahrenheit: '2535 - 2600 °F' }
      },
      availableForms: ['Flanges', 'Pipes & Tubes', 'Buttweld Fittings', 'Forged Fittings', 'Fasteners', 'Round Bars', 'Sheets & Plates'],
      stockReadiness: 'Ready Stock in Opera House Godown, Mumbai',
      equivalentGrades: {
        AFNOR: 'Z3CND25-06-Az',
        DIN: 'W.Nr. 1.4410',
        JIS: 'SUS 329J4L',
        EN: 'X2CrNiMoN25-7-4'
      }
    }
  }
];

for (const alloy of ALLOY_DATASETS) {
  const filePath = path.join(ALLOYS_DIR, `${alloy.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(alloy.data, null, 2), 'utf-8');
  console.log(`  Created alloy: ${alloy.slug}.json`);
}

console.log('Generating Product category datasets...');

const PRODUCT_DATASETS = [
  // 1. Flanges
  {
    slug: 'flanges',
    data: {
      title: 'Industrial Flanges',
      category: 'flanges',
      tagline: 'ASME B16.5 & B16.47 Precision Forged Flanges in High Nickel & Stainless Alloys',
      shortDescription: 'Bhansali Metals manufactures and supplies precision forged industrial flanges in Inconel, Monel, Hastelloy, Stainless Steel, and Duplex grades across Class 150# to 2500#.',
      metaTitle: 'ASME B16.5 Flanges Manufacturer Mumbai India | Bhansali Metals',
      metaDescription: 'Leading manufacturer of ASME B16.5 Weld Neck (WNRF), Slip-On (SORF), and Blind (BLRF) flanges in Inconel, Monel, Hastelloy & Stainless Steel in Mumbai, India.',
      sizeRange: '1/2" NB to 48" NB (DN15 to DN1200)',
      pressureRatings: [
        'Class 150',
        'Class 300',
        'Class 600',
        'Class 900',
        'Class 1500',
        'Class 2500',
        'PN6',
        'PN10',
        'PN16',
        'PN25',
        'PN40',
        'PN64',
        'PN100'
      ],
      applicableStandards: [
        'ASME B16.5',
        'ASME B16.47 Series A & B',
        'MSS SP-44',
        'DIN EN 1092-1',
        'BS 4504',
        'JIS B2220'
      ],
      forms: [
        'Weld Neck (WNRF)',
        'Slip-On (SORF)',
        'Blind (BLRF)',
        'Socket Weld (SWRF)',
        'Threaded',
        'Lap Joint',
        'Ring Type Joint (RTJ)'
      ],
      subTypes: [
        {
          name: 'Weld Neck Flange',
          abbreviation: 'WNRF',
          description: 'High-stress flanged joint with a long tapered hub welded to pipe, preferred for severe temperature and pressure cycling.',
          facingTypes: ['Raised Face (RF)', 'Flat Face (FF)', 'Ring Type Joint (RTJ)']
        },
        {
          name: 'Slip-On Flange',
          abbreviation: 'SORF',
          description: 'Low installation cost flange that slips over the pipe before fillet welding both inside and outside.',
          facingTypes: ['Raised Face (RF)', 'Flat Face (FF)']
        },
        {
          name: 'Blind Flange',
          abbreviation: 'BLRF',
          description: 'Solid forged disc used to seal piping system terminations, vessel nozzles, or test ports.',
          facingTypes: ['Raised Face (RF)', 'Flat Face (FF)', 'Ring Type Joint (RTJ)']
        },
        {
          name: 'Socket Weld Flange',
          abbreviation: 'SWRF',
          description: 'Designed for high-pressure small-diameter piping with an internal socket shoulder and single fillet weld.',
          facingTypes: ['Raised Face (RF)', 'Ring Type Joint (RTJ)']
        },
        {
          name: 'Threaded Flange',
          abbreviation: 'THRF',
          description: 'Bored with internal NPT or BSPT taper pipe threads for connection without field welding.',
          facingTypes: ['Raised Face (RF)', 'Flat Face (FF)']
        },
        {
          name: 'Lap Joint Flange',
          abbreviation: 'LJRF',
          description: 'Loose backing flange used in conjunction with a stub end to facilitate easy bolt hole alignment.',
          facingTypes: ['Flat Face (FF)']
        }
      ],
      compatibleAlloys: [
        'inconel-625',
        'inconel-600',
        'inconel-718',
        'incoloy-800',
        'incoloy-825',
        'monel-400',
        'hastelloy-c276',
        'hastelloy-c22',
        'stainless-steel-316l',
        'stainless-steel-304l',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Precision closed-die and open-die hot forging from certified billets, heat treatment (solution annealing and water quenching), followed by high-precision CNC machining of gasket facings and bolt holes per ASME B16.5.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Hydrostatic Pressure Testing',
        'Positive Material Identification (PMI 100%)',
        'Ultrasonic Examination (UT) per ASTM A388',
        'Magnetic Particle Inspection (MPI) / Dye Penetrant (DP)',
        'Third-Party Inspection by BV, TÜV India, Lloyd\'s Register, EIL, DNV, SGS'
      ],
      heroImage: '/images/products/flanges.svg',
      schematicSvg: '/images/schematics/asme-b16-5-flange.svg'
    }
  },

  // 2. Pipes & Tubes
  {
    slug: 'pipes-tubes',
    data: {
      title: 'Pipes & Tubes (Seamless & Welded)',
      category: 'pipes-tubes',
      tagline: 'High-Integrity Piping Solutions in Nickel Superalloys and Stainless Steels',
      shortDescription: 'Bhansali Metals manufactures and supplies seamless and welded industrial pipes and tubes engineered for high-temperature, cryogenic, and corrosive process applications.',
      metaTitle: 'Seamless & Welded Pipes & Tubes Manufacturer Mumbai | Bhansali Metals',
      metaDescription: 'Premium seamless and welded pipes and tubes in Inconel 625, Hastelloy C-276, Monel 400, SS 316L, and Super Duplex 2507 from Bhansali Metals Mumbai.',
      sizeRange: '1/8" NB to 36" NB (OD: 6.0mm to 914.4mm; WT: 0.5mm to 60mm)',
      pressureRatings: [
        'Sch 5S',
        'Sch 10S',
        'Sch 10',
        'Sch 20',
        'Sch 30',
        'Sch 40S',
        'Sch 40',
        'STD',
        'Sch 60',
        'Sch 80S',
        'Sch 80',
        'XS',
        'Sch 100',
        'Sch 120',
        'Sch 140',
        'Sch 160',
        'XXS'
      ],
      applicableStandards: [
        'ASTM B167',
        'ASTM B444',
        'ASTM B163',
        'ASTM B165',
        'ASTM B622',
        'ASTM A312',
        'ASTM A213',
        'ASTM A269',
        'ASTM A790',
        'ASME SB-167',
        'ASME SB-444',
        'ASME SA-312'
      ],
      forms: ['Seamless', 'Welded', 'ERW', 'EFW'],
      subTypes: [
        {
          name: 'Seamless Pipes & Tubes',
          description: 'Manufactured through hot extrusion and cold pilgering without any weld seam, offering maximum pressure integrity and fatigue resistance.'
        },
        {
          name: 'Welded Pipes (ERW / EFW)',
          description: 'Formed from rolled strip or plate and automatically welded using continuous TIG or plasma arc welding with 100% radiographic inspection.'
        },
        {
          name: 'Heat Exchanger & Condenser Tubes',
          description: 'High-precision bright-annealed U-tubes and straight tubes calibrated for optimal heat transfer and pressure containment.'
        },
        {
          name: 'Instrumentation & Capillary Tubing',
          description: 'Cold-drawn micro-bore tubes with mirror-like inner diameter finish for high-pressure hydraulic and instrumentation hook-ups.'
        }
      ],
      compatibleAlloys: [
        'inconel-600',
        'inconel-625',
        'inconel-718',
        'incoloy-800',
        'incoloy-825',
        'monel-400',
        'monel-k500',
        'hastelloy-c276',
        'nickel-200',
        'nickel-201',
        'stainless-steel-304',
        'stainless-steel-304l',
        'stainless-steel-316',
        'stainless-steel-316l',
        'stainless-steel-321',
        'stainless-steel-310s',
        'stainless-steel-347',
        'stainless-steel-904l',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Hot piercing, cold drawing on precision benches, cold pilgering, continuous hydrogen bright annealing, straightening, and pickling/passivation.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Hydrostatic Pressure Testing (up to 500 bar)',
        '100% Non-Destructive Eddy Current Testing',
        'Radiographic Testing (RT) of longitudinal weld seams',
        'Intergranular Corrosion Testing per ASTM A262 Practice E'
      ],
      heroImage: '/images/products/pipes-tubes.svg',
      schematicSvg: '/images/schematics/pipe-fitting.svg'
    }
  },

  // 3. Buttweld Fittings
  {
    slug: 'buttweld-fittings',
    data: {
      title: 'Buttweld Fittings',
      category: 'buttweld-fittings',
      tagline: 'Precision Engineered Elbows, Tees, Reducers & Caps per ASME B16.9',
      shortDescription: 'Bhansali Metals manufactures precision seamless and welded buttweld pipe fittings in high nickel alloys, stainless steel, and duplex steel with full material traceability.',
      metaTitle: 'ASME B16.9 Buttweld Fittings Manufacturer Mumbai | Bhansali Metals',
      metaDescription: 'Precision buttweld elbows (45/90°), equal/reducing tees, concentric/eccentric reducers, and caps in Inconel, Hastelloy, Monel & SS from Bhansali Metals Mumbai.',
      sizeRange: '1/2" NB to 36" NB (DN15 to DN900; Sch 5S to Sch XXS)',
      pressureRatings: [
        'Sch 5S',
        'Sch 10S',
        'Sch 40S',
        'Sch 80S',
        'Sch 160',
        'Sch XXS'
      ],
      applicableStandards: [
        'ASME B16.9',
        'ASME B16.28',
        'MSS SP-43',
        'DIN 2605',
        'DIN 2615',
        'DIN 2616',
        'EN 10253'
      ],
      forms: [
        '45° Elbow',
        '90° Elbow',
        '180° Return',
        'Equal Tee',
        'Reducing Tee',
        'Concentric Reducer',
        'Eccentric Reducer',
        'Cap',
        'Stub End'
      ],
      subTypes: [
        {
          name: '90° Long & Short Radius Elbow',
          abbreviation: '90E',
          description: 'Directional piping component for 90° line redirection. Long radius (1.5D) minimizes friction losses; short radius (1.0D) optimizes compact skid layouts.'
        },
        {
          name: '45° Long Radius Elbow',
          abbreviation: '45E',
          description: 'Directional fitting changing fluid line path by 45 degrees with smooth low-turbulence flow.'
        },
        {
          name: 'Equal & Straight Tee',
          abbreviation: 'TEE',
          description: 'T-shaped branch connection providing a 90-degree branch of the identical nominal pipe diameter.'
        },
        {
          name: 'Reducing Tee',
          abbreviation: 'RTEE',
          description: 'Branch connection providing a stepped-down branch pipe diameter while maintaining full run flow.'
        },
        {
          name: 'Concentric Reducer',
          abbreviation: 'CR',
          description: 'Cone-shaped transition between pipes of differing nominal sizes aligned along a common center line.'
        },
        {
          name: 'Eccentric Reducer',
          abbreviation: 'ER',
          description: 'Asymmetric conical fitting maintaining a flat bottom or flat top, preventing air pocket accumulation in horizontal pump suction lines.'
        },
        {
          name: 'Pipe End Cap',
          abbreviation: 'CAP',
          description: 'Ellipsoidal protective end closure welded directly to the pipe terminus to permanently seal process lines.'
        },
        {
          name: 'Lap Joint Stub End',
          abbreviation: 'STUB',
          description: 'Flanged sleeve fitting paired with loose backing lap-joint flanges to ease bolt alignment in tight spaces.'
        }
      ],
      compatibleAlloys: [
        'inconel-625',
        'inconel-600',
        'incoloy-800',
        'incoloy-825',
        'monel-400',
        'hastelloy-c276',
        'hastelloy-c22',
        'stainless-steel-304l',
        'stainless-steel-316l',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Hot mandrel pushing for seamless elbows, hydraulic cold press forming for tees and reducers, full solution annealing heat treatment, and precision CNC end beveling per ASME B16.25.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Liquid Penetrant Examination (PT) of weld preps',
        'Ultrasonic Thickness Measurement across extruded crotch zones',
        '100% Dimensional Inspection against ASME B16.9 tolerances',
        'PMI Spectrometry Verification'
      ],
      heroImage: '/images/products/buttweld-fittings.svg',
      schematicSvg: '/images/schematics/butt-weld-elbow.svg'
    }
  },

  // 4. Forged Fittings
  {
    slug: 'forged-fittings',
    data: {
      title: 'Forged High-Pressure Fittings',
      category: 'forged-fittings',
      tagline: 'ASME B16.11 Class 3000#, 6000#, and 9000# Heavy Industrial Fittings',
      shortDescription: 'Bhansali Metals manufactures high-pressure socket weld and threaded forged fittings and branch outlets engineered for critical petrochemical and offshore services.',
      metaTitle: 'ASME B16.11 Forged Fittings Class 3000# 6000# Mumbai | Bhansali Metals',
      metaDescription: 'High-pressure forged socket-weld & threaded fittings (Class 3000#, 6000#), couplings, unions, and olets in Inconel, Monel, Hastelloy & SS from Bhansali Metals.',
      sizeRange: '1/8" NB to 4" NB (DN6 to DN100)',
      pressureRatings: [
        'Class 2000#',
        'Class 3000#',
        'Class 6000#',
        'Class 9000#'
      ],
      applicableStandards: [
        'ASME B16.11',
        'MSS SP-79',
        'MSS SP-83',
        'MSS SP-95',
        'MSS SP-97',
        'BS 3799'
      ],
      forms: [
        '3000# Elbow',
        '6000# Tee',
        'Coupling',
        'Union',
        'Nipple',
        'Olet (Weldolet, Threadolet, Sockolet)'
      ],
      subTypes: [
        {
          name: 'Socket Weld Fittings',
          description: 'High-pressure 90° and 45° elbows, tees, crosses, couplings, half couplings, and caps featuring deep socket bores for fillet welded assembly.'
        },
        {
          name: 'Threaded (Screwed) Fittings',
          description: 'Precision machined NPT, BSPT, and BSPP threaded elbows, tees, hex nipples, bushings, and square/hex head plugs.'
        },
        {
          name: 'High-Pressure Forged Unions',
          description: 'Ground-joint three-piece unions rated for Class 3000# and 6000# service with integral precision-seated metal sealing faces.'
        },
        {
          name: 'Branch Outlets (Olets)',
          description: 'Self-reinforced branch outlet fittings including Weldolets, Threadolets, Sockolets, Elbolets, and Latrolets per MSS SP-97.'
        }
      ],
      compatibleAlloys: [
        'inconel-625',
        'inconel-600',
        'incoloy-800',
        'incoloy-825',
        'monel-400',
        'hastelloy-c276',
        'stainless-steel-304l',
        'stainless-steel-316l',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Closed-die drop forging from round bar stock, solution annealing, and CNC precision turning/threading per ASME B1.20.1 / ISO 7-1.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Thread Inspection using calibrated Go/No-Go plug gauges',
        'Magnetic Particle Testing (MT) / Liquid Penetrant Testing (PT)',
        'Positive Material Identification (PMI 100%)',
        'Proof and Burst Pressure Validation'
      ],
      heroImage: '/images/products/forged-fittings.svg',
      schematicSvg: '/images/schematics/forged-fitting.svg'
    }
  },

  // 5. Fasteners
  {
    slug: 'fasteners',
    data: {
      title: 'Industrial Fasteners & Hardware',
      category: 'fasteners',
      tagline: 'High-Tensile Stud Bolts, Hex Bolts & Heavy Nuts in Corrosion Resistant Alloys',
      shortDescription: 'Bhansali Metals manufactures industrial bolting hardware, full-thread stud bolts, heavy hex nuts, and precision washers for extreme pressure and marine environments.',
      metaTitle: 'Industrial Fasteners, Stud Bolts & Nuts Manufacturer Mumbai | Bhansali Metals',
      metaDescription: 'High-tensile stud bolts, heavy hex nuts, and bolts in Inconel 718, Monel K-500, Hastelloy C-276, and Stainless Steel 316/304 from Bhansali Metals Mumbai.',
      sizeRange: 'M6 to M64 (Metric) / 1/4" to 2-1/2" (Imperial); Lengths up to 6000mm',
      pressureRatings: [
        'ASTM A193 Grade B8 / B8M Class 1 & Class 2',
        'ASTM A194 Grade 8 / 8M Heavy Hex',
        'ASTM A453 Grade 660 High Temp',
        'Inconel 718 NACE MR0175 Bolting'
      ],
      applicableStandards: [
        'ASTM A193',
        'ASTM A194',
        'ASTM A320',
        'ASTM A453',
        'ASME B18.2.1',
        'ASME B18.2.2',
        'DIN 931',
        'DIN 933',
        'DIN 934',
        'DIN 976'
      ],
      forms: [
        'Stud Bolts',
        'Hex Bolts',
        'Heavy Hex Nuts',
        'Plain Washers',
        'Spring Washers',
        'Threaded Rods'
      ],
      subTypes: [
        {
          name: 'Fully Threaded Stud Bolts',
          description: 'Continuous-thread stud bolts engineered for ASME B16.5 and B16.47 flange connections, supplied with dual heavy hex nuts.'
        },
        {
          name: 'Heavy Hex Bolts & Screws',
          description: 'High-strength structural and pressure-vessel bolts with enlarged hex heads for uniform clamp load distribution.'
        },
        {
          name: 'Heavy Hex Nuts',
          description: 'Thick cross-section industrial nuts hot forged and tapped per ASME B18.2.2 to prevent thread stripping under severe tension.'
        },
        {
          name: 'Industrial Washers',
          description: 'Flat, spring, and spherical seating washers engineered to maintain preload tension under thermal cycling and vibrational loads.'
        }
      ],
      compatibleAlloys: [
        'inconel-718',
        'inconel-625',
        'monel-400',
        'monel-k500',
        'hastelloy-c276',
        'stainless-steel-316',
        'stainless-steel-316l',
        'stainless-steel-304',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Cold heading for small sizes, precision hot forging for large diameters, precision thread rolling, controlled heat treatment, and anti-galling surface coatings (PTFE, Xylan, Zinc-Nickel, Hot Dip Galvanizing).',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Proof Load and Tensile Testing',
        'Charpy V-Notch Impact Testing at subzero temperatures (-196°C to -46°C)',
        'Coating Thickness and Salt Spray Corrosion Testing',
        '100% PMI Material Verification'
      ],
      heroImage: '/images/products/fasteners.svg',
      schematicSvg: '/images/schematics/pipe-fitting.svg'
    }
  },

  // 6. Round Bars
  {
    slug: 'round-bars',
    data: {
      title: 'Round Bars & Rods',
      category: 'round-bars',
      tagline: 'Precision Bright Drawn & Hot Rolled Black Round Bars from 3mm to 400mm',
      shortDescription: 'Bhansali Metals is an authorized distributor and manufacturer of bright drawn, centerless ground, and hot-rolled black bars in high nickel superalloys and stainless steels.',
      metaTitle: 'Stainless Steel & Nickel Alloy Round Bars Stockist Mumbai | Bhansali Metals',
      metaDescription: 'Bright drawn (h9/h11), centerless ground, and black hot-rolled round bars in Inconel, Monel, Hastelloy, SS 304/316, and Duplex 2205 from Bhansali Metals.',
      sizeRange: '3mm to 400mm Diameter (Round); 10mm to 40mm (Hex & Square); 0.6mm to 23mm (Wire)',
      pressureRatings: [
        'Dimensional Tolerances: h8, h9, h11, k12, k13 per ISO 286 / PN-EN 754-3'
      ],
      applicableStandards: [
        'ASTM A276',
        'ASTM A484',
        'ASTM A479',
        'ASTM A582',
        'ASTM B166',
        'ASTM B446',
        'ASTM B637',
        'ASTM B164',
        'ASTM B574',
        'DIN EN 10278'
      ],
      forms: [
        'Cold Drawn Ground Polished (Bright)',
        'Hot Rolled Black Bars',
        'Forged Round Bars',
        'Hexagonal Bars',
        'Square Bars',
        'Wire'
      ],
      subTypes: [
        {
          name: 'Bright Drawn Ground Polished Bars',
          description: 'Precision cold-drawn and centerless ground bars with h9/h11 tolerance and mirror-like surface finish for high-speed machining and shafts.'
        },
        {
          name: 'Hot Rolled Black Round Bars',
          description: 'Heavy structural and forging bar stock supplied in the annealed and pickled or as-rolled condition for re-forging and heavy fabrication.'
        },
        {
          name: 'Forged Round Bars & Shafts',
          description: 'Large diameter (up to 400mm) rough-turned forged bars with verified internal grain structure for critical pump and turbine shafts.'
        },
        {
          name: 'Hexagonal & Square Bars',
          description: 'Cold-finished hex and square cross-section bar stock for fastener manufacturing, valves, and precision mechanical components.'
        },
        {
          name: 'Stainless & Superalloy Wire Rods',
          description: 'Cold-drawn coils from 0.6mm to 23mm diameter for spring manufacturing, wire mesh, welding consumables, and cold heading.'
        }
      ],
      compatibleAlloys: [
        'inconel-600',
        'inconel-625',
        'inconel-718',
        'incoloy-800',
        'monel-400',
        'monel-k500',
        'hastelloy-c276',
        'nickel-200',
        'nickel-201',
        'stainless-steel-304',
        'stainless-steel-304l',
        'stainless-steel-316',
        'stainless-steel-316l',
        'stainless-steel-321',
        'stainless-steel-310s',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Electric arc furnace melting, AOD refining, continuous casting, hot rolling, solution annealing, precision cold drawing, centerless grinding, and rotary straightening.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        '100% Ultrasonic Testing (UT) per ASTM A388 / SEP 1921',
        'Surface Roughness (Ra) Measurement',
        'PMI Chemical Spectroscopy Verification',
        'Macro-etch and Grain Size Testing'
      ],
      heroImage: '/images/products/round-bars.svg',
      schematicSvg: '/images/schematics/pipe-fitting.svg'
    }
  },

  // 7. Sheets & Plates
  {
    slug: 'sheets-plates',
    data: {
      title: 'Sheets, Plates & Coils',
      category: 'sheets-plates',
      tagline: 'Hot-Rolled Heavy Plates & Cold-Rolled Precision Sheets up to 200mm Thick',
      shortDescription: 'Bhansali Metals stocks and processes industrial sheets, plates, coils, and shim sheets in high nickel alloys, stainless steel, and duplex steel with custom cutting capabilities.',
      metaTitle: 'Stainless Steel & Nickel Alloy Plates, Sheets & Coils | Bhansali Metals',
      metaDescription: 'High nickel and stainless steel plates, cold-rolled sheets, and coils from 0.5mm to 200mm thickness. Custom plasma and laser cutting from Bhansali Metals Mumbai.',
      sizeRange: 'Thickness: 0.5mm to 200mm; Width: 1000mm to 3000mm; Length: 2000mm to 12500mm (or custom cut)',
      pressureRatings: [
        'Tolerances per ASTM A480 / EN 10029 Class A & Class B'
      ],
      applicableStandards: [
        'ASTM A240',
        'ASTM B168',
        'ASTM B443',
        'ASTM B670',
        'ASTM B409',
        'ASTM B127',
        'ASTM B575',
        'ASME SA-240',
        'ASME SB-168',
        'ASME SB-443',
        'ASME SB-409'
      ],
      forms: [
        'Hot Rolled Plates',
        'Cold Rolled Sheets',
        'Coils',
        'Strips',
        'Shim Sheets'
      ],
      subTypes: [
        {
          name: 'Hot Rolled Industrial Plates (No. 1 / 1D Finish)',
          description: 'Heavy gauge plates for pressure vessels, storage tanks, heat exchangers, and marine offshore structures.'
        },
        {
          name: 'Cold Rolled Precision Sheets (2B / BA Finish)',
          description: 'Smooth high-accuracy sheets for sanitary, pharmaceutical, architectural, and food processing applications.'
        },
        {
          name: 'Continuous Coils & Slit Strips',
          description: 'Precision slit coils for automated stamping, deep drawing, and welded tube fabrication lines.'
        },
        {
          name: 'Thin Gauge Shim Sheets',
          description: 'Precision ground shim foil and thin sheet (0.5mm to 3.0mm) for mechanical leveling and gasket support.'
        }
      ],
      compatibleAlloys: [
        'inconel-600',
        'inconel-625',
        'inconel-718',
        'incoloy-800',
        'incoloy-825',
        'monel-400',
        'monel-k500',
        'hastelloy-c276',
        'hastelloy-c22',
        'hastelloy-x',
        'nickel-200',
        'stainless-steel-304',
        'stainless-steel-304l',
        'stainless-steel-316',
        'stainless-steel-316l',
        'stainless-steel-321',
        'stainless-steel-310s',
        'stainless-steel-904l',
        'duplex-2205',
        'super-duplex-2507'
      ],
      manufacturingProcess: 'Hot slab breakdown rolling, continuous vacuum annealing, descaling, multi-stand cold rolling reduction, tension leveling, and CNC plasma/waterjet cutting.',
      qualityInspection: [
        'EN 10204 3.1 Mill Test Certificate (MTC)',
        'Ultrasonic Plate Testing per ASTM A435 / A578',
        'Intergranular Corrosion Testing per ASTM A262',
        'Mechanical Tensile and Charpy Impact Testing',
        'PMI Material Verification'
      ],
      heroImage: '/images/products/sheets-plates.svg',
      schematicSvg: '/images/schematics/pipe-fitting.svg'
    }
  }
];

for (const product of PRODUCT_DATASETS) {
  const filePath = path.join(PRODUCTS_DIR, `${product.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(product.data, null, 2), 'utf-8');
  console.log(`  Created product: ${product.slug}.json`);
}

console.log('Generating clean native SVGs in public/images/schematics/ ...');

const SCHEMATICS = [
  // 1. ASME B16.5 Flange
  {
    fileName: 'asme-b16-5-flange.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.5 WELD NECK FLANGE (WNRF) SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Class 150 - 2500# Engineering Cross-Section</text>

  <!-- Flange Cross-section Profile -->
  <path d="M 120 280 L 120 230 L 220 230 L 240 120 L 260 120 L 260 280 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5"/>
  <path d="M 480 280 L 480 230 L 380 230 L 360 120 L 340 120 L 340 280 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5"/>

  <!-- Raised Face -->
  <rect x="230" y="280" width="140" height="15" fill="#e8e8e8" stroke="#024ad8" stroke-width="2"/>

  <!-- Centerline -->
  <line x1="300" y1="80" x2="300" y2="330" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Bolt Holes -->
  <rect x="150" y="230" width="24" height="50" fill="#f7f7f7" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4,2"/>
  <rect x="426" y="230" width="24" height="50" fill="#f7f7f7" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- Dimension Lines -->
  <!-- OD (Outer Diameter) -->
  <line x1="120" y1="320" x2="480" y2="320" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="120,317 110,320 120,323" fill="#1a1a1a"/>
  <polygon points="480,317 490,320 480,323" fill="#1a1a1a"/>
  <text x="300" y="340" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">O (Outside Diameter)</text>

  <!-- PCD (Bolt Circle) -->
  <line x1="162" y1="210" x2="438" y2="210" stroke="#024ad8" stroke-width="1.2" stroke-dasharray="3,3"/>
  <polygon points="162,207 152,210 162,213" fill="#024ad8"/>
  <polygon points="438,207 448,210 438,213" fill="#024ad8"/>
  <text x="300" y="200" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#024ad8">C (Bolt Circle Diameter / PCD)</text>

  <!-- Bore ID (B) -->
  <line x1="260" y1="100" x2="340" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="260,97 250,100 260,103" fill="#1a1a1a"/>
  <polygon points="340,97 350,100 340,103" fill="#1a1a1a"/>
  <text x="300" y="92" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">B (Bore / Inside Diameter)</text>

  <!-- Thickness (T) -->
  <line x1="80" y1="230" x2="80" y2="280" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="77,230 80,220 83,230" fill="#1a1a1a"/>
  <polygon points="77,280 80,290 83,280" fill="#1a1a1a"/>
  <text x="60" y="260" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">T</text>

  <!-- Height (Y) -->
  <line x1="520" y1="120" x2="520" y2="280" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="517,120 520,110 523,120" fill="#024ad8"/>
  <polygon points="517,280 520,290 523,280" fill="#024ad8"/>
  <text x="545" y="205" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#024ad8">Y (Hub Ht)</text>
</svg>`
  },

  // 2. Butt Weld Elbow
  {
    fileName: 'butt-weld-elbow.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.9 90° LONG RADIUS ELBOW SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Center-to-Face (A) & Radius (R = 1.5D)</text>

  <!-- Outer Arc & Inner Arc of Elbow -->
  <path d="M 180 320 A 180 180 0 0 1 360 140 L 440 140 A 260 260 0 0 0 180 400 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5" transform="translate(40, -40)"/>

  <!-- Centerline Arc -->
  <path d="M 220 320 A 220 220 0 0 1 440 100" fill="none" stroke="#ff5050" stroke-width="1.8" stroke-dasharray="6,4"/>

  <!-- Beveled Ends -->
  <line x1="220" y1="280" x2="220" y2="360" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="400" y1="100" x2="480" y2="100" stroke="#1a1a1a" stroke-width="2"/>

  <!-- Center-to-Face Dimension A (Vertical) -->
  <line x1="160" y1="100" x2="160" y2="320" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="157,100 160,90 163,100" fill="#024ad8"/>
  <polygon points="157,320 160,330 163,320" fill="#024ad8"/>
  <text x="140" y="215" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">A</text>

  <!-- Center-to-Face Dimension A (Horizontal) -->
  <line x1="220" y1="60" x2="440" y2="60" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="220,57 210,60 220,63" fill="#024ad8"/>
  <polygon points="440,57 450,60 440,63" fill="#024ad8"/>
  <text x="330" y="50" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">A (Center to Face)</text>

  <!-- Outer Diameter D -->
  <line x1="510" y1="100" x2="510" y2="180" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="507,100 510,90 513,100" fill="#1a1a1a"/>
  <polygon points="507,180 510,190 513,180" fill="#1a1a1a"/>
  <text x="545" y="145" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">D (OD)</text>
</svg>`
  },

  // 3. Butt Weld Tee
  {
    fileName: 'butt-weld-tee.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.9 EQUAL & REDUCING TEE SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Run Center-to-End (C) & Branch Center-to-End (M)</text>

  <!-- Tee Profile -->
  <path d="M 120 220 L 250 220 L 250 110 L 350 110 L 350 220 L 480 220 L 480 300 L 120 300 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5"/>

  <!-- Centerlines -->
  <line x1="80" y1="260" x2="520" y2="260" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="300" y1="80" x2="300" y2="330" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Run Dimension C (Left to Center) -->
  <line x1="120" y1="340" x2="300" y2="340" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="120,337 110,340 120,343" fill="#024ad8"/>
  <polygon points="300,337 310,340 300,343" fill="#024ad8"/>
  <text x="210" y="360" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">C (Run C-to-E)</text>

  <!-- Run Dimension C (Center to Right) -->
  <line x1="300" y1="340" x2="480" y2="340" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="300,337 290,340 300,343" fill="#024ad8"/>
  <polygon points="480,337 490,340 480,343" fill="#024ad8"/>
  <text x="390" y="360" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">C (Run C-to-E)</text>

  <!-- Branch Dimension M -->
  <line x1="380" y1="110" x2="380" y2="260" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="377,110 380,100 383,110" fill="#1a1a1a"/>
  <polygon points="377,260 380,270 383,260" fill="#1a1a1a"/>
  <text x="440" y="190" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">M (Branch C-to-E)</text>

  <!-- Run OD -->
  <line x1="90" y1="220" x2="90" y2="300" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="87,220 90,210 93,220" fill="#1a1a1a"/>
  <polygon points="87,300 90,310 93,300" fill="#1a1a1a"/>
  <text x="65" y="265" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">OD</text>
</svg>`
  },

  // 4. Butt Weld Reducer
  {
    fileName: 'butt-weld-reducer.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.9 CONCENTRIC & ECCENTRIC REDUCER</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Large End (D), Small End (d), and Length (H)</text>

  <!-- Concentric Reducer Profile -->
  <polygon points="160,120 440,170 440,270 160,320" fill="#ffffff" stroke="#024ad8" stroke-width="2.5"/>

  <!-- Centerline -->
  <line x1="120" y1="220" x2="480" y2="220" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Large End D -->
  <line x1="130" y1="120" x2="130" y2="320" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="127,120 130,110 133,120" fill="#1a1a1a"/>
  <polygon points="127,320 130,330 133,320" fill="#1a1a1a"/>
  <text x="95" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#1a1a1a">D (Large OD)</text>

  <!-- Small End d -->
  <line x1="470" y1="170" x2="470" y2="270" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="467,170 470,160 473,170" fill="#1a1a1a"/>
  <polygon points="467,270 470,280 473,270" fill="#1a1a1a"/>
  <text x="520" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#1a1a1a">d (Small OD)</text>

  <!-- Length H -->
  <line x1="160" y1="350" x2="440" y2="350" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="160,347 150,350 160,353" fill="#024ad8"/>
  <polygon points="440,347 450,350 440,353" fill="#024ad8"/>
  <text x="300" y="375" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#024ad8">H (End to End Length)</text>
</svg>`
  },

  // 5. Stub End
  {
    fileName: 'stub-end.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.9 LAP JOINT STUB END SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Length (F), Flange Lap (G), and Barrel OD (D)</text>

  <!-- Stub End Cross-Section Profile -->
  <path d="M 160 110 L 190 110 L 190 170 L 460 170 L 460 270 L 190 270 L 190 330 L 160 330 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5"/>

  <!-- Centerline -->
  <line x1="120" y1="220" x2="500" y2="220" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Lap Diameter G -->
  <line x1="130" y1="110" x2="130" y2="330" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="127,110 130,100 133,110" fill="#024ad8"/>
  <polygon points="127,330 130,340 133,330" fill="#024ad8"/>
  <text x="90" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">G (Lap OD)</text>

  <!-- Overall Length F -->
  <line x1="160" y1="360" x2="460" y2="360" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="160,357 150,360 160,363" fill="#1a1a1a"/>
  <polygon points="460,357 470,360 460,363" fill="#1a1a1a"/>
  <text x="310" y="380" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">F (Length)</text>

  <!-- Pipe OD D -->
  <line x1="490" y1="170" x2="490" y2="270" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="487,170 490,160 493,170" fill="#1a1a1a"/>
  <polygon points="487,270 490,280 493,270" fill="#1a1a1a"/>
  <text x="530" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">D (OD)</text>
</svg>`
  },

  // 6. Caps
  {
    fileName: 'caps.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.9 PIPE END CAP SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Outer Diameter (OD), Height (E), and Wall Thickness (t)</text>

  <!-- Cap Dome Profile -->
  <path d="M 220 300 L 220 220 C 220 140 380 140 380 220 L 380 300" fill="#ffffff" stroke="#024ad8" stroke-width="3"/>
  <path d="M 245 300 L 245 220 C 245 165 355 165 355 220 L 355 300" fill="none" stroke="#1a1a1a" stroke-width="1.8"/>

  <!-- Centerline -->
  <line x1="300" y1="100" x2="300" y2="340" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Outer Diameter OD -->
  <line x1="220" y1="330" x2="380" y2="330" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="220,327 210,330 220,333" fill="#1a1a1a"/>
  <polygon points="380,327 390,330 380,333" fill="#1a1a1a"/>
  <text x="300" y="355" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#1a1a1a">OD (Outer Diameter)</text>

  <!-- Overall Height E -->
  <line x1="420" y1="140" x2="420" y2="300" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="417,140 420,130 423,140" fill="#024ad8"/>
  <polygon points="417,300 420,310 423,300" fill="#024ad8"/>
  <text x="455" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">E (Length)</text>

  <!-- Thickness t -->
  <text x="210" y="260" text-anchor="end" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#024ad8">t (Wall)</text>
</svg>`
  },

  // 7. Forged Fitting
  {
    fileName: 'forged-fitting.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">ASME B16.11 FORGED HIGH-PRESSURE 90° ELBOW</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Socket Weld & Threaded (Class 3000# / 6000#)</text>

  <!-- Heavy Forged Body -->
  <path d="M 180 320 L 180 180 L 320 180 L 320 320 Z" fill="#ffffff" stroke="#024ad8" stroke-width="2.5" transform="translate(60, -30)"/>
  <rect x="240" y="210" width="140" height="80" fill="#e8e8e8" stroke="#1a1a1a" stroke-width="1.5"/>

  <!-- Socket Bore -->
  <rect x="240" y="150" width="60" height="60" fill="#ffffff" stroke="#024ad8" stroke-width="1.5"/>
  <rect x="320" y="230" width="60" height="60" fill="#ffffff" stroke="#024ad8" stroke-width="1.5"/>

  <!-- Center-to-End A -->
  <line x1="200" y1="150" x2="200" y2="290" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="197,150 200,140 203,150" fill="#024ad8"/>
  <polygon points="197,290 200,300 203,290" fill="#024ad8"/>
  <text x="175" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">A</text>

  <line x1="240" y1="330" x2="380" y2="330" stroke="#024ad8" stroke-width="1.5"/>
  <polygon points="240,327 230,330 240,333" fill="#024ad8"/>
  <polygon points="380,327 390,330 380,333" fill="#024ad8"/>
  <text x="310" y="355" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#024ad8">A (Center to End)</text>

  <!-- Socket Depth J -->
  <text x="420" y="265" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">J (Socket Depth)</text>
  <text x="270" y="125" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">B (Socket Bore)</text>
</svg>`
  },

  // 8. Pipe Fitting General
  {
    fileName: 'pipe-fitting.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%" fill="none">
  <rect width="600" height="400" fill="#f7f7f7" rx="8"/>
  <text x="300" y="36" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">BHANSALI METALS INDUSTRIAL PIPING SCHEMATIC</text>
  <text x="300" y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#636363">Standard Piping Assembly: Pipe, Flanges, Fittings & Gaskets</text>

  <!-- Pipe Run 1 -->
  <rect x="80" y="180" width="160" height="80" fill="#ffffff" stroke="#024ad8" stroke-width="2"/>

  <!-- Weld Neck Flange 1 -->
  <polygon points="240,180 270,160 270,280 240,260" fill="#e8e8e8" stroke="#024ad8" stroke-width="2"/>
  <rect x="270" y="140" width="20" height="160" fill="#ffffff" stroke="#1a1a1a" stroke-width="2"/>

  <!-- Gasket -->
  <rect x="290" y="150" width="6" height="140" fill="#ff5050"/>

  <!-- Weld Neck Flange 2 -->
  <rect x="296" y="140" width="20" height="160" fill="#ffffff" stroke="#1a1a1a" stroke-width="2"/>
  <polygon points="346,180 316,160 316,280 346,260" fill="#e8e8e8" stroke="#024ad8" stroke-width="2"/>

  <!-- Pipe Run 2 -->
  <rect x="346" y="180" width="174" height="80" fill="#ffffff" stroke="#024ad8" stroke-width="2"/>

  <!-- Centerline -->
  <line x1="50" y1="220" x2="550" y2="220" stroke="#ff5050" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Labels -->
  <text x="160" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#024ad8">Seamless Pipe</text>
  <text x="430" y="225" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#024ad8">Seamless Pipe</text>
  <text x="293" y="120" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#1a1a1a">ASME B16.5 Joint</text>
  <text x="293" y="330" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#ff5050">Spiral Wound Gasket</text>
</svg>`
  }
];

for (const s of SCHEMATICS) {
  const filePath = path.join(SCHEMATICS_DIR, s.fileName);
  fs.writeFileSync(filePath, s.content, 'utf-8');
  console.log(`  Created schematic SVG: ${s.fileName}`);
}

console.log('Done generating Milestone 2 datasets and SVGs.');
