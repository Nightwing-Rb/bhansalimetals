export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const headerNav: NavItem[] = [
  {
    title: 'Products',
    href: '/products',
    children: [
      { title: 'ASME B16.5 Flanges', href: '/products/flanges', description: 'WNRF, SORF, BLRF, Socket Weld, Threaded' },
      { title: 'Pipes & Tubes', href: '/products/pipes-tubes', description: 'Seamless and welded heavy wall piping' },
      { title: 'Buttweld Fittings', href: '/products/buttweld-fittings', description: 'Elbows, tees, reducers, caps, stub ends' },
      { title: 'Forged Fittings', href: '/products/forged-fittings', description: '3000# & 6000# high pressure socket weld & screwed' },
      { title: 'Industrial Fasteners', href: '/products/fasteners', description: 'Hex bolts, stud bolts, heavy hex nuts' },
      { title: 'Round Bars', href: '/products/round-bars', description: 'Bright drawn and hot rolled black bars' },
      { title: 'Sheets & Plates', href: '/products/sheets-plates', description: 'Cut-to-size plates, shims, coils' },
    ],
  },
  {
    title: 'High Nickel Alloys',
    href: '/alloys',
    children: [
      { title: 'Inconel 625', href: '/alloys/inconel-625', description: 'UNS N06625 / W.Nr. 2.4856' },
      { title: 'Inconel 600', href: '/alloys/inconel-600', description: 'UNS N06600 / W.Nr. 2.4816' },
      { title: 'Inconel 718', href: '/alloys/inconel-718', description: 'UNS N07718 / W.Nr. 2.4668' },
      { title: 'Incoloy 800 / 800H', href: '/alloys/incoloy-800', description: 'UNS N08800 / W.Nr. 1.4876' },
      { title: 'Monel 400', href: '/alloys/monel-400', description: 'UNS N04400 / W.Nr. 2.4360' },
      { title: 'Monel K-500', href: '/alloys/monel-k500', description: 'UNS N05500 / W.Nr. 2.4375' },
      { title: 'Hastelloy C-276', href: '/alloys/hastelloy-c276', description: 'UNS N10276 / W.Nr. 2.4819' },
      { title: 'Hastelloy C-22', href: '/alloys/hastelloy-c22', description: 'UNS N06022 / W.Nr. 2.4602' },
      { title: 'Hastelloy B-2', href: '/alloys/hastelloy-b2', description: 'UNS N10665 / W.Nr. 2.4617' },
      { title: 'Hastelloy X', href: '/alloys/hastelloy-x', description: 'UNS N06002 / W.Nr. 2.4665' },
      { title: 'Nickel 200 / 201', href: '/alloys/nickel-200', description: 'UNS N02200 / UNS N02201' },
    ],
  },
  {
    title: 'Stainless & Duplex',
    href: '/alloys',
    children: [
      { title: 'Stainless Steel 316 / 316L', href: '/alloys/stainless-steel-316l', description: 'UNS S31603 / W.Nr. 1.4404' },
      { title: 'Stainless Steel 304 / 304L', href: '/alloys/stainless-steel-304l', description: 'UNS S30403 / W.Nr. 1.4306' },
      { title: 'Stainless Steel 321 / 347', href: '/alloys/stainless-steel-321', description: 'Titanium / Niobium stabilized' },
      { title: 'Stainless Steel 310S', href: '/alloys/stainless-steel-310s', description: 'High temperature 1150°C service' },
      { title: 'Stainless Steel 904L', href: '/alloys/stainless-steel-904l', description: 'Sulfuric acid corrosion resistant' },
      { title: 'Duplex 2205', href: '/alloys/duplex-2205', description: 'UNS S32205 / W.Nr. 1.4462' },
      { title: 'Super Duplex 2507', href: '/alloys/super-duplex-2507', description: 'UNS S32750 / W.Nr. 1.4410' },
    ],
  },
  {
    title: 'Technical Data',
    href: '/technical-data',
    children: [
      { title: 'ASME B16.5 Flange Dimensions', href: '/technical-data/asme-b16-5-flange-dimensions', description: 'Class 150 to 2500# dimension tables' },
      { title: 'Pipe Schedule Chart', href: '/technical-data/pipe-schedule-chart', description: 'Nominal pipe sizes, wall thickness Sch 10-XXS' },
      { title: 'ASME B16.9 Butt-Weld Fittings', href: '/technical-data/asme-b16-9-elbows', description: 'Elbows, tees, reducers, stub ends' },
      { title: 'ASME B16.11 Forged Fittings', href: '/technical-data/asme-b16-11-forged-fittings', description: 'Class 3000# & 6000# dimensions' },
      { title: 'Theoretical Metal Weight Formulas', href: '/technical-data/theoretical-metal-weight-formulas', description: 'Pipes, bars, plates weight calculations' },
      { title: 'Chemical Composition Matrix', href: '/technical-data/chemical-compositions-alloys', description: 'Elemental min/max specs' },
      { title: 'Mechanical Properties Comparison', href: '/technical-data/mechanical-properties-comparison', description: 'Tensile, yield, elongation (MPa/ksi)' },
    ],
  },
  { title: 'Quality Assurance', href: '/quality' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export const footerLinks = {
  highNickel: [
    { title: 'Inconel 625 (UNS N06625)', href: '/alloys/inconel-625' },
    { title: 'Inconel 600 (UNS N06600)', href: '/alloys/inconel-600' },
    { title: 'Inconel 718 (UNS N07718)', href: '/alloys/inconel-718' },
    { title: 'Incoloy 800 / 800H', href: '/alloys/incoloy-800' },
    { title: 'Monel 400 (UNS N04400)', href: '/alloys/monel-400' },
    { title: 'Monel K-500 (UNS N05500)', href: '/alloys/monel-k500' },
    { title: 'Hastelloy C-276 (UNS N10276)', href: '/alloys/hastelloy-c276' },
    { title: 'Hastelloy C-22 (UNS N06022)', href: '/alloys/hastelloy-c22' },
    { title: 'Hastelloy B-2 (UNS N10665)', href: '/alloys/hastelloy-b2' },
    { title: 'Nickel 200 / 201', href: '/alloys/nickel-200' },
  ],
  products: [
    { title: 'ASME B16.5 Flanges (WNRF/BLRF)', href: '/products/flanges' },
    { title: 'Seamless & Welded Pipes', href: '/products/pipes-tubes' },
    { title: 'Buttweld Fittings (Elbows/Tees)', href: '/products/buttweld-fittings' },
    { title: 'Forged Fittings 3000# / 6000#', href: '/products/forged-fittings' },
    { title: 'Industrial Heavy Hex Fasteners', href: '/products/fasteners' },
    { title: 'Round Bars (Bright & Black)', href: '/products/round-bars' },
    { title: 'Sheets, Plates & Coils', href: '/products/sheets-plates' },
    { title: 'Stainless Steel 316 / 316L', href: '/alloys/stainless-steel-316l' },
    { title: 'Stainless Steel 304 / 304L', href: '/alloys/stainless-steel-304l' },
    { title: 'Duplex 2205 & Super Duplex', href: '/alloys/duplex-2205' },
  ],
  engineering: [
    { title: 'ASME B16.5 Flange Dimensions', href: '/technical-data/asme-b16-5-flange-dimensions' },
    { title: 'Pipe Schedules (Sch 10 to XXS)', href: '/technical-data/pipe-schedule-chart' },
    { title: 'Theoretical Metal Weight Formulas', href: '/technical-data/theoretical-metal-weight-formulas' },
    { title: 'Chemical Composition Tables', href: '/technical-data/chemical-compositions-alloys' },
    { title: 'Mechanical Properties (MPa/ksi)', href: '/technical-data/mechanical-properties-comparison' },
    { title: 'ASME B16.9 Butt-Weld Fittings', href: '/technical-data/asme-b16-9-elbows' },
    { title: 'ASME B16.11 Forged Fittings', href: '/technical-data/asme-b16-11-forged-fittings' },
    { title: 'Quality Assurance Policy', href: '/quality' },
    { title: 'ISO & Mill Certificates', href: '/certificates' },
  ],
};
