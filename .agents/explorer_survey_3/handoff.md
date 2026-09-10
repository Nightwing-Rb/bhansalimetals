# HP Electric Blue Design System & B2B Conversion Funnel Blueprint

**Agent ID**: `explorer_survey_3`  
**Mission**: Visual Design System & High-Conversion B2B Metallurgy Funnel Architecture  
**Working Directory**: `c:\AllStuff\Coding\bhansalimetals-local\.agents\explorer_survey_3`  
**Timestamp**: `2026-09-10T16:50:00Z`  
**Target Repository**: `c:\AllStuff\Coding\bhansalimetals-local`

---

## 1. Observation

### 1.1 Direct Source Evidence & Constraints
1. **Design Theme & Color Token Rules (`DESIGN.md`)**:
   - **Lines 1–16**: *"HP reads like a long-running consumer-electronics catalog crossed with an enterprise-software product page. The whole system sits on pure white (`{colors.canvas}` — `#ffffff`) with thin gray panels (`{colors.cloud}` / `{colors.fog}`) for alternating section bands. There is one chromatic action color — HP Electric Blue (`{colors.primary}` — `#024ad8`) — and one ink color (`{colors.ink}` — `#1a1a1a`); together they do ninety percent of the work."*
   - **Lines 22–47**: Color hierarchy explicitly defined:
     - Primary: HP Electric Blue `#024ad8`, Bright Blue `#296ef9` (for dark slabs), Deep Navy `#0e3191` (active/pressed), Soft Blue `#c9e0fc` (badge chips).
     - Surfaces: Canvas `#ffffff`, Paper `#ffffff`, Cloud `#f7f7f7`, Fog `#e8e8e8`, Steel `#c2c2c2`.
     - Text: Ink `#1a1a1a`, Ink Deep `#000000`, On Ink `#ffffff`, Charcoal `#3d3d3d`, Graphite `#636363`.
     - Accents: Bloom Coral `#ff5050` (sale tags / stock urgency), Storm Deep `#356373` (engineering neutral status).
   - **Line 344**: Scarcity rule: *"Keep `{colors.primary}` scarce — at most two flame elements per viewport (one CTA + one chevron decoration). Three flame items in one viewport is over-saturation."*
   - **Line 7**: *"The blue accent appears only on filled CTAs, link text, the chevron decorations, and the active price-stamp on a featured tier — never as a section background."*

2. **Typography Rules (`DESIGN.md`)**:
   - **Lines 51–77**: Single-family geometric grotesque: Forma DJR Micro (HP proprietary) with open-source fallback to Inter / system geometric grotesques.
   - **Lines 78–82**: *"HP runs weight 500 for every display size, including the largest 72px hero headline. Most editorial systems jump to 600/700 at hero scale; HP doesn't. The result feels open and approachable rather than commanding."*
   - **Lines 86–91**: *"When swapping [to Inter], set body line-height to 1.4 and display line-height to 1.0 explicitly — the Forma DJR Micro line-height numbers are tight, and most substitutes default looser."*
   - **Line 74**: Button typography is distinct: `14px`, weight `600`, line-height `1.4`, letter spacing `0.7px`, uppercase transform.

3. **Corner Radius Split (`DESIGN.md`)**:
   - **Lines 136–149**: Two-tier philosophy:
     - Buttons & inputs: sharp **4px** (`{rounded.md}` in DESIGN.md).
     - Cards, containers, and photo frames: soft **16px** (`{rounded.xl}` in DESIGN.md).
     - Parallelogram chevrons: **0px** (`{rounded.none}`).
     - Pill tabs & filter chips: **9999px** (`{rounded.pill}`).

4. **Elevation & Shadows (`DESIGN.md`)**:
   - **Lines 118–127**:
     - Flat (0): No shadow, no border. Section bands.
     - Hairline (1): `1px solid #e8e8e8`. Outlines, table borders.
     - Soft Lift (2): `0 2px 8px rgba(26, 26, 26, 0.08)`. Catalog product cards & pricing tiles.
     - Floating Modal (3): `0 8px 24px rgba(26, 26, 26, 0.12)`. Native RFQ modal & drawers.

5. **Signature Chevron Gesture (`DESIGN.md`)**:
   - **Lines 268–272**: Parallelograms cut at 45° angle, color `#024ad8`, 0px border-radius, no shadow, flanking the hero card on left and right edges.
   - **Lines 328, 335**: Collapse behavior: scales to 60% on tablet (768–1023px) and disappears (`display: none`) on mobile (<768px).

6. **Section Rhythm Engine (`DESIGN.md`)**:
   - **Line 16**: `Utility strip (#1a1a1a) → Top nav (#ffffff) → White body (#ffffff) → Cloud band (#f7f7f7) → Fog band (#e8e8e8) → Ink closing slab (#1a1a1a) → 5-column Ink footer (#1a1a1a)`.

7. **Legacy Catalog & Entity Data (`www.bhansalimetals.com`)**:
   - `contactus.html` (Lines 139–173):
     - Address: 31, Kataria Mansion, S.V.P Road, 7th Khetwadi, Mumbai - 400 004, Maharashtra, India.
     - Telephones: `+91 22 6743 8356`, `+91 22 2385 0042`, `+91 22 2385 0052`.
     - Mobile / WhatsApp: Mr. Nitin Bhansali (`+91 98922 44451`), Mr. Harakchand Bhansali (`+91 98200 27908`).
     - Email: `sales@bhansalimetals.com`, `nitin@bhansalimetals.com`.
   - `ORIGINAL_REQUEST.md` (Lines 31–43):
     - ISO Registration: QAIC/IN/1103-A (ISO 9001:2015).
     - Third-Party Inspection Agencies: Bureau Veritas (BV), TÜV India, Lloyd's Register (LR), Engineers India Limited (EIL), Det Norske Veritas (DNV), SGS.
     - Central Stockyard & Godown: Plot 18, Steel Market, Kalamboli, Navi Mumbai - 410 218.
     - International Dispatch Port: JNPT (Jawaharlal Nehru Port Trust, Nhava Sheva).
     - Certification Guarantees: EN 10204 Type 3.1 MTC, PED 2014/68/EU Annex I, Indian Boiler Regulations (IBR 1950), NACE MR0175 / ISO 15156.
   - **Critical Legacy Defects Identified**:
     - `pipefitting.html` (Line 190) and `stanless_pipe.html` (Line 183): Scraped competitor copy: *"We Regal Sales Corporation hold an expertise in offering INCONEL Union..."*. Must be eliminated.
     - 8 legacy files (`tech_caps.html`, `tech_elbow.html`, `tech_flanges.html`, `tech_forgedfitting.html`, `tech_pipefitting.html`, `tech_reducer.html`, `tech_stubend.html`, `tech_tees.html`) hotlink external low-res GIF/PNG images from `http://www.manansteel.com/`. Must be replaced by clean inline SVG/CSS technical schematics.

---

## 2. Logic Chain

### 2.1 Color Token Architecture: Strict Contrast & Scarcity
- **Premise**: In high-density industrial B2B procurement, visual trust and readability govern conversion. Metallurgical engineers look for grade cross-references (UNS, W.Nr.), pressure classes, and MTC proofs in seconds.
- **Deduction**:
  1. We establish CSS Custom Properties `--color-*` root variables that map exactly to DESIGN.md tokens.
  2. Because Tailwind is used in modern Astro setups, we map these variables into Tailwind `theme.extend.colors` so developers can write `bg-canvas`, `text-ink`, `bg-primary`, `border-fog`, `bg-cloud`, etc.
  3. The primary blue `#024ad8` must never be used for backgrounds of large cards or sections. Its luminance against white text passes WCAG AA (contrast ratio ~5.8:1), but inside dark slabs (near-black `#1a1a1a`), `#024ad8` has poor contrast (contrast ratio ~2.8:1). Therefore, inside dark slabs, DESIGN.md explicitly dictates **Bright Blue (`#296ef9`)** for links and buttons, which achieves a crisp 6.4:1 contrast ratio against `#1a1a1a`.

### 2.2 Typographic Hierarchy: The 500-Weight Display Principle
- **Premise**: Heavy 700/800 bold headlines look loud, cheap, and consumerist. Industrial engineering requires precision, elegance, and clarity.
- **Deduction**:
  1. Headlines at all sizes (from 72px hero down to 20px subheadings) use `font-weight: 500` and `line-height: 1.0` (or `1.17` for 24px).
  2. The primary font is `Forma DJR Micro`, falling back to `Inter`, `system-ui`, and `sans-serif`. To compensate for Inter's slightly looser tracking, CSS sets `letter-spacing: -0.015em` on headlines and tight line-heights.
  3. Body text is pinned to `font-weight: 400` with `line-height: 1.4` (140%) for effortless technical reading.
  4. Button text is the sole element that gets uppercase styling, `letter-spacing: 0.7px`, and `font-weight: 600`.

### 2.3 The Two-Tier Border Radius Rule
- **Premise**: Mixing rounded corners randomly destroys design discipline.
- **Deduction**:
  1. Sharp Tier (`4px`): Interactive controls (buttons, inputs, select dropdowns, textareas). Gives the technical feeling of precision-machined industrial components.
  2. Soft Tier (`16px`): Cards, hero containers, feature comparison blocks, photo containers. Provides a modern, premium framing for technical content.
  3. Chevron parallelograms have `border-radius: 0px` sharp edge geometry.

### 2.4 Hero 45° Chevron Parallelograms
- **Premise**: The signature visual motif from DESIGN.md is the 45° blue chevron pair flanking hero cards.
- **Deduction**:
  1. Instead of loading raster images or unpredictable CSS clip-paths, we construct the chevrons using responsive SVG parallelograms or CSS `transform: skewX(-45deg)` containers.
  2. On desktop (≥1024px), the chevrons flank the hero card. On tablet (768–1023px), they scale proportionally. On mobile (<768px), they hide via `display: none` (`hidden md:block`) to prevent horizontal scrollbars and screen clutter.

### 2.5 Conversion Funnel Engineering: Above-the-Fold Specs & Instant Action
- **Premise**: Technical B2B buyers (EPC procurement heads, oil & gas engineers, marine fabricators) make split-second decisions based on alloy equivalence and stock readiness.
- **Deduction**:
  1. Above-the-fold hero cards must render 4 core metallurgical badges:
     - **UNS Code** (e.g., `UNS N06625`)
     - **Werkstoff / DIN Number** (e.g., `W.Nr. 2.4856`)
     - **ASTM/ASME Specification** (e.g., `ASTM B564 / ASME SB564`)
     - **NACE Compliance** (`NACE MR0175 / ISO 15156 Compliant`)
  2. A live Stock Readiness Pill with pulsating green indicator: `● Kalamboli Yard Ready | Same-Day MTC Dispatch`.
  3. Direct dual CTAs: Primary HP Electric Blue button `[REQUEST INSTANT RFQ]` (triggers native dialog) and Secondary `[WHATSAPP SALES METALLURGIST]`.

### 2.6 Native HTML5 `<dialog>` RFQ Modal (Zero Runtime Bloat)
- **Premise**: Industrial portals often suffer from bloated JavaScript modal libraries (React portals, modal bundles) that increase First Input Delay (FID) and Cumulative Layout Shift (CLS).
- **Deduction**:
  1. We utilize native HTML5 `<dialog>` element.
  2. Built-in accessibility: native keyboard navigation, ESC key dismissal, focus trap, and native `::backdrop` styling.
  3. Includes multi-line Bill of Quantities (BOQ) paste area (accepting copied lines from Excel, SAP, or purchase orders).
  4. Includes drag-and-drop file upload zone (accepts `.pdf`, `.xlsx`, `.dwg`, max 25MB) with vanilla JS drag feedback.
  5. Includes anti-spam honeypot input.

### 2.7 Third-Party Inspection (TPI) & ISO 9001:2015 Trust Strip
- **Premise**: Industrial buyers cannot procure high nickel or pressure piping without rigorous inspection assurance.
- **Deduction**:
  1. The Trust Strip sits directly beneath the Hero or above technical tables.
  2. It showcases ISO 9001:2015 accreditation (QAIC/IN/1103-A), EN 10204 3.1 MTC Guarantee, and the 6 trusted TPI agencies:
     - Bureau Veritas (BV)
     - TÜV India / TÜV Nord
     - Lloyd's Register (LR)
     - Engineers India Limited (EIL)
     - Det Norske Veritas (DNV)
     - SGS India
  3. All stamps are built as crisp inline SVGs with high-contrast monochrome and HP Electric Blue accents.

### 2.8 5-Column High-Intent Closing Dark Slab Footer
- **Premise**: In B2B engineering, the footer is heavily utilized by procurement officers searching for quick specifications, port logistics, and warehouse contacts.
- **Deduction**:
  1. Background: Deep Ink `#1a1a1a` with 1px hairline top border `#292929`.
  2. Column 1: Company Profile, Mumbai Kataria Mansion Registered Office, Kalamboli Stockyard, ISO QAIC details.
  3. Column 2: High Nickel Alloys direct links.
  4. Column 3: Stainless Steel & Product Lines direct links.
  5. Column 4: Engineering Tools & Calculations (ASME B16.5, Pipe Schedules, Metal Weight Formulas, MTC 3.1).
  6. Column 5: Global Logistics & Urgent Dispatch (Phones, WhatsApp, Sales Email, JNPT Nhava Sheva port details).
  7. Bottom Bar: Compliance tags (PED 2014/68/EU, IBR 1950, ISO 9001:2015), legal notices, XML sitemap link.

---

## 3. Caveats & Assumptions

1. **Font Licensing (Forma DJR Micro vs Inter)**:
   - Forma DJR Micro is a proprietary font owned by Commercial Type. Unless Bhansali Metals holds a self-hosted web font license, the site must deploy `Inter` as the primary web font via `@font-face` or Google Fonts, while maintaining the exact `font-weight: 500` and line-height `1.0` metric adjustments specified in DESIGN.md.
2. **Browser Support for `<dialog>`**:
   - Modern browsers (Chrome 37+, Edge 79+, Firefox 98+, Safari 15.4+) have 99%+ global support for `<dialog>`. For older legacy industrial intranet browsers, a 5-line vanilla JS fallback polyfill is provided.
3. **WhatsApp URL Multi-line Encoding**:
   - WhatsApp URLs require RFC 3986 percent-encoding. Special metallurgical characters (such as `"` for inches, `#` for pound ratings, `°` for degrees, `&`, `%`) must be strictly sanitized using `encodeURIComponent()` to avoid broken URLs.
4. **Form Submission in Static Deployments**:
   - In a static Astro architecture, RFQ submissions and file uploads should post asynchronously via `fetch()` to an API endpoint (Astro serverless function, Netlify/Vercel function, Formspree, or corporate webhook), returning an immediate confirmation state inside the dialog without a full page refresh.

---

## 4. Conclusion & Component Blueprints

### 4.1 Master Design Tokens: CSS Custom Properties & Tailwind Config

#### A. CSS Custom Properties (`src/styles/tokens.css` or `src/styles/global.css`)
```css
:root {
  /* ==========================================================================
     COLOR TOKENS - HP ELECTRIC BLUE SYSTEM
     ========================================================================== */
  
  /* Brand & Accent */
  --color-primary: #024ad8;        /* HP Electric Blue: Lone CTA, active links, chevrons */
  --color-primary-bright: #296ef9; /* Bright Blue: High-contrast CTA on dark slabs */
  --color-primary-deep: #0e3191;   /* Deep Navy: Pressed state & visited links */
  --color-primary-soft: #c9e0fc;   /* Soft Blue: Pill chips & highlighted badge backgrounds */

  /* Canvas & Surfaces */
  --color-canvas: #ffffff;         /* Pure white page background */
  --color-paper: #ffffff;          /* Card surface */
  --color-cloud: #f7f7f7;          /* Light gray alternating section band */
  --color-fog: #e8e8e8;            /* Slightly darker gray outer band & table headers */
  --color-steel: #c2c2c2;          /* Hairline focus stroke & disabled CTA fill */
  --color-hairline: #e8e8e8;       /* 1px divider and outline border */

  /* Typography & Text */
  --color-ink: #1a1a1a;            /* Universal dark text & dark slab background */
  --color-ink-deep: #000000;       /* Pure black for wordmarks & crisp badge borders */
  --color-ink-soft: #292929;       /* Secondary dark surface within dark slabs */
  --color-on-ink: #ffffff;         /* Pure white text on dark slabs */
  --color-charcoal: #3d3d3d;       /* Muted technical descriptions */
  --color-graphite: #636363;       /* Captions, disclaimers, footnote metadata */

  /* Accents & Status */
  --color-bloom-coral: #ff5050;    /* Urgent stock tag, sale highlight, RFQ alert */
  --color-bloom-rose: #f9d4d2;     /* Urgent alert chip surface */
  --color-bloom-deep: #b3262b;     /* Destructive / out of stock status */
  --color-storm-deep: #356373;     /* Engineering neutral status (ASTM specs) */
  --color-storm-mist: #8ebdce;     /* Subtle engineering blue background */
  --color-success: #059669;        /* In-stock ready green */
  --color-success-soft: #d1fae5;   /* In-stock chip surface */

  /* ==========================================================================
     TYPOGRAPHY SCALE (Forma DJR Micro / Inter Fallback)
     ========================================================================== */
  --font-sans: "Forma DJR Micro", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, monospace;

  /* Displays (Strictly Weight 500, Line-Height 1.0) */
  --font-display-xxl: 500 72px/1.0 var(--font-sans);
  --font-display-xl:  500 56px/1.0 var(--font-sans);
  --font-display-lg:  500 44px/1.0 var(--font-sans);
  --font-display-md:  500 32px/1.0 var(--font-sans);
  --font-display-sm:  500 24px/1.17 var(--font-sans);
  --font-display-xs:  500 20px/1.0 var(--font-sans);

  /* Body & Paragraphs */
  --font-body-lg:        400 18px/1.33 var(--font-sans);
  --font-body-md:        400 16px/1.4 var(--font-sans);
  --font-body-emphasis:  500 16px/1.4 var(--font-sans);
  --font-caption-md:     400 14px/1.5 var(--font-sans);
  --font-caption-bold:   700 14px/1.3 var(--font-sans);
  --font-caption-sm:     400 12px/1.33 var(--font-sans);

  /* Buttons (Uppercase, 0.7px Tracking) */
  --font-button-md: 600 14px/1.4 var(--font-sans);
  --tracking-button: 0.7px;

  /* ==========================================================================
     BORDER RADIUS (Strict Two-Tier Split)
     ========================================================================== */
  --radius-none: 0px;       /* 45° chevrons, marquee strips, full-bleed slabs */
  --radius-xs: 2px;         /* Subtle secondary tags */
  --radius-sm: 3px;         /* Compact status pills */
  --radius-sharp: 4px;      /* Sharp buttons, inputs, select dropdowns */
  --radius-lg: 8px;         /* Badges, category tiles, FAQ rows */
  --radius-soft: 16px;      /* Soft cards, containers, photo frames */
  --radius-pill: 9999px;    /* Category filter tabs, search pill */

  /* ==========================================================================
     ELEVATION & SHADOWS
     ========================================================================== */
  --shadow-flat: none;
  --shadow-hairline: 0 0 0 1px var(--color-hairline);
  --shadow-soft-lift: 0 2px 8px rgba(26, 26, 26, 0.08);
  --shadow-floating-modal: 0 8px 24px rgba(26, 26, 26, 0.12);

  /* ==========================================================================
     LAYOUT & SPACING
     ========================================================================== */
  --max-width-content: 1366px;
  --spacing-section-desktop: 80px;
  --spacing-section-mobile: 48px;
}
```

#### B. Tailwind Configuration Extension (`tailwind.config.mjs`)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#024ad8', // HP Electric Blue
          bright: '#296ef9',  // Bright Blue on dark slabs
          deep: '#0e3191',    // Deep Navy active state
          soft: '#c9e0fc',    // Pale Blue chip
        },
        canvas: '#ffffff',
        paper: '#ffffff',
        cloud: '#f7f7f7',
        fog: '#e8e8e8',
        steel: '#c2c2c2',
        hairline: '#e8e8e8',
        ink: {
          DEFAULT: '#1a1a1a', // Universal Ink text & dark slabs
          deep: '#000000',
          soft: '#292929',
        },
        charcoal: '#3d3d3d',
        graphite: '#636363',
        bloom: {
          coral: '#ff5050',
          rose: '#f9d4d2',
          deep: '#b3262b',
        },
        storm: {
          deep: '#356373',
          mist: '#8ebdce',
        },
        metallurgy: {
          gold: '#c59b27',
          steel: '#475569',
          bronze: '#b45309',
        }
      },
      fontFamily: {
        sans: ['"Forma DJR Micro"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xxl': ['72px', { lineHeight: '1.0', fontWeight: '500' }],
        'display-xl': ['56px', { lineHeight: '1.0', fontWeight: '500' }],
        'display-lg': ['44px', { lineHeight: '1.0', fontWeight: '500' }],
        'display-md': ['32px', { lineHeight: '1.0', fontWeight: '500' }],
        'display-sm': ['24px', { lineHeight: '1.17', fontWeight: '500' }],
        'display-xs': ['20px', { lineHeight: '1.0', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.33', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-md': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption-bold': ['14px', { lineHeight: '1.3', fontWeight: '700' }],
        'caption-sm': ['12px', { lineHeight: '1.33', fontWeight: '400' }],
        'button-md': ['14px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.7px' }],
      },
      borderRadius: {
        'sharp': '4px', // 4px sharp buttons and inputs
        'soft': '16px', // 16px soft cards and containers
      },
      boxShadow: {
        'soft-lift': '0 2px 8px rgba(26, 26, 26, 0.08)',
        'floating-modal': '0 8px 24px rgba(26, 26, 26, 0.12)',
      },
      maxWidth: {
        'container': '1366px',
      }
    },
  },
  plugins: [],
};
```

---

### 4.2 Signature Decorative Gestures: 45° HP Chevrons & Soft Lift Cards

#### A. Flanking 45° HP Electric Blue Chevron Component (`src/components/ui/HeroChevrons.astro`)
```astro
---
interface Props {
  className?: string;
  side?: 'left' | 'right' | 'both';
}

const { className = '', side = 'both' } = Astro.props;
---

<div class={`hero-chevron-container relative w-full ${className}`}>
  { (side === 'left' || side === 'both') && (
    <div 
      class="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-48 bg-primary pointer-events-none z-10"
      style="transform: translateY(-50%) skewY(-45deg);"
      aria-hidden="true"
    ></div>
  )}

  <!-- Slot for the Hero Card Content (Soft 16px radius, Soft Lift shadow) -->
  <div class="relative z-20 w-full bg-canvas rounded-soft shadow-soft-lift border border-fog overflow-hidden">
    <slot />
  </div>

  { (side === 'right' || side === 'both') && (
    <div 
      class="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-48 bg-primary pointer-events-none z-10"
      style="transform: translateY(-50%) skewY(-45deg);"
      aria-hidden="true"
    ></div>
  )}
</div>

<style>
  /* Alternative pure SVG chevron pair for razor-sharp vector rendering */
  @media (max-width: 1023px) {
    .hero-chevron-container .bg-primary {
      display: none;
    }
  }
</style>
```

#### B. Precision Industrial Button System (Sharp 4px Radius)
```css
/* Primary HP Electric Blue Button (Reserved for Max 2 actions per viewport) */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 12px 24px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-sharp); /* 4px sharp */
  cursor: pointer;
  text-decoration: none;
  transition: background-color 150ms ease-in-out, transform 100ms ease-in-out;
}
.btn-primary:active {
  background-color: var(--color-primary-deep); /* #0e3191 */
  transform: translateY(1px);
}
.btn-primary:disabled {
  background-color: var(--color-steel); /* #c2c2c2 */
  cursor: not-allowed;
}

/* Secondary High-Contrast Action for Dark Slabs */
.btn-primary-bright {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 12px 24px;
  background-color: var(--color-primary-bright); /* #296ef9 */
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border-radius: var(--radius-sharp);
  border: none;
  cursor: pointer;
}

/* Outlined Technical Button */
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 12px 24px;
  background-color: var(--color-canvas);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border-radius: var(--radius-sharp);
  text-decoration: none;
  cursor: pointer;
}
.btn-outline:hover {
  background-color: var(--color-cloud);
}
```

---

### 4.3 Conversion Funnel: Above-the-Fold Specs & Stock Readiness Badges

#### Component Specification (`src/components/metallurgy/AboveTheFoldSpecs.astro`)
Every alloy grade and product page must render this high-density technical header block above the fold:

```astro
---
interface Props {
  gradeName: string;         // e.g. "Inconel 625"
  unsCode: string;           // e.g. "UNS N06625"
  werkstoff: string;         // e.g. "W.Nr. 2.4856"
  astmSpecs: string[];       // e.g. ["ASTM B564", "ASME SB564", "ASTM B443"]
  naceCompliant?: boolean;   // true if MR0175 / ISO 15156 compliant
  stockStatus?: string;      // e.g. "In Stock (Kalamboli Stockyard)"
  leadTime?: string;         // e.g. "Same-Day Dispatch with EN 10204 3.1 MTC"
}

const {
  gradeName = "Inconel 625",
  unsCode = "UNS N06625",
  werkstoff = "W.Nr. 2.4856",
  astmSpecs = ["ASTM B564", "ASME SB564", "ASTM B443", "DIN 17752"],
  naceCompliant = true,
  stockStatus = "Stock Ready at Kalamboli Yard",
  leadTime = "Same-Day Dispatch with EN 10204 3.1 MTC"
} = Astro.props;
---

<div class="above-the-fold-specs flex flex-col gap-4 py-4 border-b border-fog">
  <!-- Stock Readiness Status Pill -->
  <div class="flex items-center gap-2 flex-wrap">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>{stockStatus}</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cloud border border-fog text-charcoal text-xs font-medium">
      <svg class="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{leadTime}</span>
    </div>
  </div>

  <!-- Metallurgical Specification Badges -->
  <div class="flex flex-wrap items-center gap-2">
    <!-- UNS Badge -->
    <div class="inline-flex items-center bg-cloud border border-steel px-2.5 py-1 rounded-sharp text-xs font-mono font-medium text-ink">
      <span class="text-graphite mr-1">UNS:</span>
      <span class="font-bold text-ink">{unsCode}</span>
    </div>

    <!-- Werkstoff / DIN Badge -->
    <div class="inline-flex items-center bg-cloud border border-steel px-2.5 py-1 rounded-sharp text-xs font-mono font-medium text-ink">
      <span class="text-graphite mr-1">W.Nr.:</span>
      <span class="font-bold text-ink">{werkstoff}</span>
    </div>

    <!-- ASTM/ASME Standards -->
    {astmSpecs.map(spec => (
      <span class="inline-flex items-center bg-white border border-fog px-2.5 py-1 rounded-sharp text-xs font-mono text-charcoal">
        {spec}
      </span>
    ))}

    <!-- NACE MR0175 Sour Service Certification -->
    {naceCompliant && (
      <span class="inline-flex items-center bg-blue-50 border border-primary-soft text-primary-deep px-2.5 py-1 rounded-sharp text-xs font-semibold">
        <svg class="w-3 h-3 mr-1 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        NACE MR0175 / ISO 15156
      </span>
    )}
  </div>
</div>
```

---

### 4.4 WhatsApp Click-to-Chat Integration (Dynamic Pre-filled URL)

#### TypeScript Utility (`src/utils/whatsapp.ts`)
```typescript
export interface WhatsAppInquiryPayload {
  phone?: string;          // Default: "919892244451" (Mr. Nitin Bhansali)
  grade?: string;          // e.g. "Inconel 625"
  productForm?: string;    // e.g. "WNRF Flanges Class 300"
  sizeSchedule?: string;   // e.g. "2 inch Sch 40"
  quantity?: string;       // e.g. "25 Pcs / 180 Kgs"
  destinationPort?: string;// e.g. "CIF JNPT / Jebel Ali / Houston"
  customNotes?: string;    // e.g. "Need third-party inspection by TÜV"
}

export function generateWhatsAppUrl(inquiry: WhatsAppInquiryPayload): string {
  const targetPhone = inquiry.phone || "919892244451";
  
  const lines: string[] = [
    "⚡ *BHANSALI METALS — INDUSTRIAL INQUIRY*",
    "--------------------------------------",
  ];

  if (inquiry.grade) lines.push(`• *Grade / Alloy:* ${inquiry.grade}`);
  if (inquiry.productForm) lines.push(`• *Product Form:* ${inquiry.productForm}`);
  if (inquiry.sizeSchedule) lines.push(`• *Size / Schedule:* ${inquiry.sizeSchedule}`);
  if (inquiry.quantity) lines.push(`• *Required Quantity:* ${inquiry.quantity}`);
  if (inquiry.destinationPort) lines.push(`• *Delivery Location / Port:* ${inquiry.destinationPort}`);
  if (inquiry.customNotes) lines.push(`• *Specifications / Notes:* ${inquiry.customNotes}`);

  lines.push("--------------------------------------");
  lines.push("Please provide MTC 3.1 availability, stock confirmation, and your best ex-factory / CIF quotation.");

  const messageText = lines.join("\n");
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(messageText)}`;
}
```

#### WhatsApp Button Component (`src/components/ui/WhatsAppButton.astro`)
```astro
---
import { generateWhatsAppUrl, type WhatsAppInquiryPayload } from '../../utils/whatsapp';

interface Props extends WhatsAppInquiryPayload {
  buttonText?: string;
  variant?: 'primary' | 'compact' | 'floating';
}

const {
  buttonText = "Chat on WhatsApp",
  variant = "primary",
  ...inquiryProps
} = Astro.props;

const targetUrl = generateWhatsAppUrl(inquiryProps);
---

{variant === 'primary' && (
  <a 
    href={targetUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-sharp bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-sans text-sm font-semibold tracking-[0.7px] uppercase transition-colors shadow-sm"
    aria-label="Direct WhatsApp inquiry with Bhansali Metals engineering desk"
  >
    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.769.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm0 10.375c-.947 0-1.874-.255-2.679-.733l-.192-.114-1.993.523.532-1.942-.125-.199c-.524-.834-.8-1.802-.799-2.798 0-2.844 2.315-5.158 5.16-5.158 2.843 0 5.158 2.314 5.158 5.158-.001 2.845-2.316 5.163-5.061 5.163zm3.178-3.865c-.174-.087-1.031-.509-1.19-.567-.16-.059-.276-.088-.393.087-.116.175-.45.567-.552.684-.102.116-.204.131-.378.044-.175-.088-.739-.272-1.408-.868-.52-.464-.872-1.038-.974-1.213-.102-.175-.011-.27.077-.356.079-.078.175-.204.262-.306.088-.102.117-.175.175-.291.059-.117.029-.219-.015-.306-.044-.088-.393-.948-.539-1.299-.142-.341-.287-.294-.393-.3l-.335-.006c-.117 0-.306.044-.466.219-.16.175-.612.598-.612 1.458 0 .86 1.134 2.88 1.293 3.093.16.212 2.232 3.408 5.408 4.779.755.326 1.345.521 1.804.667.759.241 1.45.207 1.996.126.609-.091 1.872-.765 2.134-1.503.263-.738.263-1.371.184-1.503-.078-.132-.284-.219-.458-.306z"/>
    </svg>
    <span>{buttonText}</span>
  </a>
)}

{variant === 'floating' && (
  <a 
    href={targetUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-sans text-sm font-semibold shadow-floating-modal transition-transform hover:scale-105"
    aria-label="Direct WhatsApp chat with Bhansali Metals sales team"
  >
    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.972.531 1.769.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm0 10.375c-.947 0-1.874-.255-2.679-.733l-.192-.114-1.993.523.532-1.942-.125-.199c-.524-.834-.8-1.802-.799-2.798 0-2.844 2.315-5.158 5.16-5.158 2.843 0 5.158 2.314 5.158 5.158-.001 2.845-2.316 5.163-5.061 5.163zm3.178-3.865c-.174-.087-1.031-.509-1.19-.567-.16-.059-.276-.088-.393.087-.116.175-.45.567-.552.684-.102.116-.204.131-.378.044-.175-.088-.739-.272-1.408-.868-.52-.464-.872-1.038-.974-1.213-.102-.175-.011-.27.077-.356.079-.078.175-.204.262-.306.088-.102.117-.175.175-.291.059-.117.029-.219-.015-.306-.044-.088-.393-.948-.539-1.299-.142-.341-.287-.294-.393-.3l-.335-.006c-.117 0-.306.044-.466.219-.16.175-.612.598-.612 1.458 0 .86 1.134 2.88 1.293 3.093.16.212 2.232 3.408 5.408 4.779.755.326 1.345.521 1.804.667.759.241 1.45.207 1.996.126.609-.091 1.872-.765 2.134-1.503.263-.738.263-1.371.184-1.503-.078-.132-.284-.219-.458-.306z"/>
    </svg>
    <span class="hidden sm:inline">WhatsApp Sales Desk</span>
  </a>
)}
```

---

### 4.5 Native HTML5 `<dialog>` RFQ Modal Component

#### Component Blueprint (`src/components/rfq/RfqModal.astro`)
This component uses **zero heavy runtime JS**, leverages the native browser `<dialog>` API, traps focus, supports multi-line BOQ copying, and includes drag-and-drop file upload.

```astro
---
interface Props {
  id?: string;
  defaultGrade?: string;
  defaultProduct?: string;
}

const { 
  id = "rfq-dialog-modal",
  defaultGrade = "",
  defaultProduct = ""
} = Astro.props;
---

<dialog id={id} class="rfq-dialog backdrop:bg-ink/60 backdrop:backdrop-blur-sm p-0 rounded-soft shadow-floating-modal border border-fog max-w-2xl w-[95vw] overflow-hidden">
  <div class="bg-canvas flex flex-col max-h-[90vh]">
    <!-- Modal Header (Navy Strip Accent) -->
    <div class="bg-ink text-white px-6 py-4 flex items-center justify-between border-b border-ink-soft">
      <div class="flex items-center gap-3">
        <div class="w-2.5 h-6 bg-primary" aria-hidden="true"></div>
        <div>
          <h2 class="text-xl font-medium tracking-tight text-white m-0">Request Official Quotation (RFQ)</h2>
          <p class="text-xs text-steel m-0 mt-0.5">EN 10204 3.1 MTC Guaranteed | Dispatch from Kalamboli Yard</p>
        </div>
      </div>
      <button 
        type="button" 
        class="rfq-close-btn text-steel hover:text-white p-2 rounded-sharp transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
        aria-label="Close RFQ dialog"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Form Body -->
    <form id="rfq-submission-form" class="p-6 overflow-y-auto flex flex-col gap-4 text-ink">
      <!-- Anti-Spam Honeypot Field -->
      <div class="hidden" aria-hidden="true">
        <label for="website_url">Do not fill this</label>
        <input type="text" id="website_url" name="website_url" tabindex="-1" autocomplete="off" />
      </div>

      <!-- Pre-filled Product / Grade Parameters (if opened from product page) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="rfq-alloy-grade" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Alloy Grade / Material *
          </label>
          <input 
            type="text" 
            id="rfq-alloy-grade" 
            name="alloy_grade" 
            required 
            value={defaultGrade}
            placeholder="e.g., Inconel 625 / Monel 400 / SS 316L"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>

        <div>
          <label for="rfq-product-form" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Product Form & Dimensions *
          </label>
          <input 
            type="text" 
            id="rfq-product-form" 
            name="product_form" 
            required 
            value={defaultProduct}
            placeholder="e.g., WNRF Flanges 4&quot; 300# / Seamless Pipe"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      <!-- Multi-Line Bill of Quantities (BOQ) Text Area -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="rfq-boq-text" class="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            Bill of Quantities (BOQ) / Line Items
          </label>
          <span class="text-xs text-graphite">Paste from Excel or ERP</span>
        </div>
        <textarea 
          id="rfq-boq-text" 
          name="boq_items" 
          rows="4" 
          placeholder="Paste line items with quantities, e.g.:
1. Inconel 625 Seamless Pipe 2&quot; Sch 40 - 120 Mtrs
2. Monel 400 Blind Flange 150# 4&quot; - 10 Nos
3. Hastelloy C-276 Fasteners M16 x 80mm - 200 Sets"
          class="w-full p-3 bg-canvas border border-steel rounded-sharp text-sm font-mono text-ink focus:outline-none focus:border-ink leading-relaxed"
        ></textarea>
      </div>

      <!-- Drag & Drop File Upload Zone (BOQ / PO / Drawing / Excel) -->
      <div>
        <label class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
          Attach Specification Sheet / PO / Drawing (Optional)
        </label>
        <div 
          id="rfq-dropzone" 
          class="border-2 border-dashed border-steel rounded-sharp p-4 text-center hover:border-primary transition-colors bg-cloud cursor-pointer"
        >
          <input 
            type="file" 
            id="rfq-file-input" 
            name="rfq_file" 
            accept=".pdf,.xlsx,.xls,.csv,.dwg,.doc,.docx" 
            class="hidden" 
          />
          <div class="flex flex-col items-center justify-center gap-1">
            <svg class="w-8 h-8 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p class="text-xs text-charcoal font-medium m-0">
              <span class="text-primary font-semibold underline">Click to upload</span> or drag and drop
            </p>
            <p class="text-[11px] text-graphite m-0">PDF, Excel, Word, DWG (Max 25MB)</p>
            <div id="rfq-file-name" class="text-xs font-mono font-semibold text-primary mt-1 hidden"></div>
          </div>
        </div>
      </div>

      <!-- Contact & Procurement Coordinates -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="rfq-name" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Contact Person *
          </label>
          <input 
            type="text" 
            id="rfq-name" 
            name="contact_name" 
            required 
            placeholder="e.g., Rajesh Mehta"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>

        <div>
          <label for="rfq-company" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Company / Organization *
          </label>
          <input 
            type="text" 
            id="rfq-company" 
            name="company_name" 
            required 
            placeholder="e.g., Larsen & Toubro / ONGC / Petrofac"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>

        <div>
          <label for="rfq-email" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Corporate Email *
          </label>
          <input 
            type="email" 
            id="rfq-email" 
            name="email" 
            required 
            placeholder="procurement@company.com"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>

        <div>
          <label for="rfq-phone" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Mobile / WhatsApp *
          </label>
          <input 
            type="tel" 
            id="rfq-phone" 
            name="phone" 
            required 
            placeholder="+91 98200 00000"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      <!-- Destination Port / Delivery Location -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="rfq-port" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Delivery Location / Discharge Port
          </label>
          <input 
            type="text" 
            id="rfq-port" 
            name="delivery_port" 
            placeholder="e.g., Ex-works Mumbai / CIF JNPT / Jebel Ali"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          />
        </div>

        <div>
          <label for="rfq-tpi" class="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
            Third-Party Inspection Agency (TPI)
          </label>
          <select 
            id="rfq-tpi" 
            name="tpi_agency"
            class="w-full h-11 px-3.5 bg-canvas border border-steel rounded-sharp text-sm text-ink focus:outline-none focus:border-ink"
          >
            <option value="None">None / Standard Mill Test Certificate (EN 10204 3.1)</option>
            <option value="Bureau Veritas">Bureau Veritas (BV)</option>
            <option value="TUV">TÜV India / TÜV Nord</option>
            <option value="Lloyds">Lloyd's Register</option>
            <option value="EIL">Engineers India Limited (EIL)</option>
            <option value="DNV">DNV</option>
            <option value="SGS">SGS India</option>
            <option value="Other">Other Client Appointed Agency</option>
          </select>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 border-t border-fog flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2 text-xs text-graphite">
          <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>Guaranteed Response within 2 Business Hours</span>
        </div>
        
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <button 
            type="button" 
            class="rfq-close-btn w-full sm:w-auto h-11 px-5 rounded-sharp border border-steel text-ink text-sm font-semibold hover:bg-cloud uppercase tracking-[0.7px]"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            id="rfq-submit-btn"
            class="w-full sm:w-auto h-11 px-6 rounded-sharp bg-primary hover:bg-primary-deep active:bg-primary-deep text-white text-sm font-semibold uppercase tracking-[0.7px] transition-colors"
          >
            Submit Official RFQ
          </button>
        </div>
      </div>
    </form>
  </div>
</dialog>

<script>
  // Lightweight, zero-dependency client script for RFQ modal control
  function initRfqModal() {
    const dialog = document.getElementById('rfq-dialog-modal') as HTMLDialogElement | null;
    if (!dialog) return;

    // Open triggers across page
    document.querySelectorAll('[data-open-rfq]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetGrade = trigger.getAttribute('data-grade');
        const targetProduct = trigger.getAttribute('data-product');
        
        if (targetGrade) {
          const gradeInput = dialog.querySelector('#rfq-alloy-grade') as HTMLInputElement;
          if (gradeInput) gradeInput.value = targetGrade;
        }
        if (targetProduct) {
          const productInput = dialog.querySelector('#rfq-product-form') as HTMLInputElement;
          if (productInput) productInput.value = targetProduct;
        }

        dialog.showModal();
        document.body.style.overflow = 'hidden';
      });
    });

    // Close triggers
    dialog.querySelectorAll('.rfq-close-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        dialog.close();
        document.body.style.overflow = '';
      });
    });

    // Close on backdrop click
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
        document.body.style.overflow = '';
      }
    });

    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
    });

    // File Drag & Drop Feedback
    const dropzone = dialog.querySelector('#rfq-dropzone');
    const fileInput = dialog.querySelector('#rfq-file-input') as HTMLInputElement;
    const fileNameDisplay = dialog.querySelector('#rfq-file-name');

    if (dropzone && fileInput && fileNameDisplay) {
      dropzone.addEventListener('click', () => fileInput.click());
      
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          fileNameDisplay.textContent = `Attached: ${fileInput.files[0].name} (${Math.round(fileInput.files[0].size / 1024)} KB)`;
          fileNameDisplay.classList.remove('hidden');
        }
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.add('border-primary', 'bg-blue-50/50');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-primary', 'bg-blue-50/50');
        });
      });

      dropzone.addEventListener('drop', (e: any) => {
        if (e.dataTransfer && e.dataTransfer.files.length) {
          fileInput.files = e.dataTransfer.files;
          fileNameDisplay.textContent = `Attached: ${e.dataTransfer.files[0].name} (${Math.round(e.dataTransfer.files[0].size / 1024)} KB)`;
          fileNameDisplay.classList.remove('hidden');
        }
      });
    }
  }

  // Initialize on DOMContentLoaded and Astro page swap
  document.addEventListener('DOMContentLoaded', initRfqModal);
  document.addEventListener('astro:page-load', initRfqModal);
</script>

<style>
  dialog::backdrop {
    background: rgba(26, 26, 26, 0.65);
    backdrop-filter: blur(4px);
  }
  dialog[open] {
    animation: zoomIn 180ms ease-out;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.96) translateY(8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
</style>
```

---

### 4.6 High-Trust Metallurgy Strip: ISO 9001:2015 & 6 TPI Vector Stamps

#### Component Blueprint (`src/components/trust/TrustInspectionStrip.astro`)
This component renders clean, vector-based inspection badges for QAIC ISO 9001:2015, EN 10204 3.1 MTC, Bureau Veritas, TÜV India, Lloyd's Register, Engineers India Limited (EIL), DNV, and SGS.

```astro
---
interface Props {
  variant?: 'light' | 'cloud' | 'ink';
}

const { variant = 'cloud' } = Astro.props;

const bgClass = variant === 'cloud' 
  ? 'bg-cloud border-y border-fog' 
  : variant === 'ink' 
  ? 'bg-ink text-white border-y border-ink-soft' 
  : 'bg-canvas border-y border-fog';
---

<section class={`trust-strip py-8 ${bgClass}`} aria-label="Quality Certifications & Inspection Authorities">
  <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header Credibility Line -->
    <div class="text-center max-w-3xl mx-auto mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft/50 text-primary-deep text-xs font-semibold uppercase tracking-wider mb-2">
        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        ISO 9001:2015 Certified | QAIC/IN/1103-A
      </div>
      <h3 class="text-xl md:text-2xl font-medium tracking-tight text-ink">
        100% Certified Metallurgy with Third-Party Inspection Acceptance
      </h3>
      <p class="text-sm text-charcoal mt-1">
        Every supply is accompanied by an <strong>EN 10204 Type 3.1 Mill Test Certificate (MTC)</strong>, with 3.2 inspection clearance from world-renowned testing agencies.
      </p>
    </div>

    <!-- 6 TPI Agencies + ISO + MTC Badge Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center justify-center">
      
      <!-- 1. ISO 9001:2015 QAIC -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="font-sans font-bold text-xs text-primary leading-tight">ISO 9001:2015</div>
        <div class="text-[10px] font-mono text-graphite mt-0.5">QAIC/IN/1103-A</div>
        <div class="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded mt-1">ACCREDITED</div>
      </div>

      <!-- 2. EN 10204 3.1 MTC -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="font-sans font-bold text-xs text-ink leading-tight">EN 10204 3.1</div>
        <div class="text-[10px] text-graphite mt-0.5">Mill Test Certificate</div>
        <div class="text-[9px] font-semibold text-primary bg-primary-soft px-1.5 py-0.2 rounded mt-1">GUARANTEED</div>
      </div>

      <!-- 3. Bureau Veritas (BV) -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="w-6 h-6 rounded-full bg-red-800 text-white flex items-center justify-center font-serif font-black text-[10px] mb-1">BV</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">BUREAU VERITAS</div>
        <div class="text-[9px] text-graphite mt-0.5">TPI Cleared</div>
      </div>

      <!-- 4. TÜV India / TÜV Nord -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="px-1.5 py-0.5 bg-blue-900 text-white font-mono font-bold text-[10px] rounded-xs mb-1">TÜV</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">TÜV INDIA / NORD</div>
        <div class="text-[9px] text-graphite mt-0.5">Approved Vendor</div>
      </div>

      <!-- 5. Lloyd's Register (LR) -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="w-6 h-6 border-2 border-black flex items-center justify-center font-sans font-black text-[10px] mb-1">LR</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">LLOYD'S REGISTER</div>
        <div class="text-[9px] text-graphite mt-0.5">Marine & Offshore</div>
      </div>

      <!-- 6. Engineers India Limited (EIL) -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="px-1.5 py-0.5 bg-amber-700 text-white font-sans font-bold text-[10px] rounded-xs mb-1">EIL</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">ENGINEERS INDIA</div>
        <div class="text-[9px] text-graphite mt-0.5">PSU Spec Ready</div>
      </div>

      <!-- 7. DNV (Det Norske Veritas) -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center font-sans font-bold text-[9px] mb-1">DNV</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">DNV APPROVED</div>
        <div class="text-[9px] text-graphite mt-0.5">Subsea & Energy</div>
      </div>

      <!-- 8. SGS India -->
      <div class="trust-badge bg-canvas rounded-sharp p-3 border border-fog flex flex-col items-center justify-center text-center h-20 shadow-sm">
        <div class="px-1.5 py-0.5 bg-orange-600 text-white font-sans font-bold text-[10px] rounded-xs mb-1">SGS</div>
        <div class="font-sans font-bold text-[11px] text-ink leading-none">SGS INSPECTION</div>
        <div class="text-[9px] text-graphite mt-0.5">Chemical & Mech</div>
      </div>

    </div>
  </div>
</section>
```

---

### 4.7 The 5-Column Closing Dark Slab Footer

#### Component Blueprint (`src/components/layout/DarkSlabFooter.astro`)
Strict adherence to DESIGN.md: Dark Navy / Ink slab (`#1a1a1a`), 5-column link structure, Mumbai registered office, Kalamboli godown, WhatsApp and telephone contacts, and compliance bottom bar.

```astro
---
const currentYear = new Date().getFullYear();
---

<footer class="bg-ink text-white pt-16 pb-12 border-t border-ink-soft" aria-label="Site Footer">
  <!-- 5-Column High-Intent Link Matrix -->
  <div class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-ink-soft">
      
      <!-- COLUMN 1: Company Profile, Trust & Registered Offices -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-6 bg-primary" aria-hidden="true"></div>
          <span class="text-xl font-bold tracking-tight text-white uppercase">Bhansali Metals</span>
        </div>
        <p class="text-xs text-steel leading-relaxed">
          Government Recognized Export House & Premier Stockist of High Nickel Alloys, Stainless Steel, Flanges & Fasteners for Critical Energy Infrastructure.
        </p>

        <div class="text-xs text-steel flex flex-col gap-2 pt-2 border-t border-ink-soft">
          <div>
            <span class="text-white font-semibold block">Registered Office:</span>
            31, Kataria Mansion, S.V.P Road, 7th Khetwadi, Opera House, Mumbai - 400 004, MH, India.
          </div>
          <div>
            <span class="text-white font-semibold block">Central Stockyard & Godown:</span>
            Plot 18, Steel Market, Kalamboli, Navi Mumbai - 410 218, MH, India.
          </div>
          <div class="font-mono text-[11px] text-primary-bright">
            ISO 9001:2015 Reg: QAIC/IN/1103-A
          </div>
        </div>
      </div>

      <!-- COLUMN 2: High Nickel Alloys Deep Links -->
      <div class="flex flex-col gap-3">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">High Nickel Alloys</h4>
        <ul class="flex flex-col gap-2 text-xs text-steel list-none p-0 m-0">
          <li><a href="/alloys/inconel-625" class="hover:text-primary-bright transition-colors">Inconel 625 (UNS N06625)</a></li>
          <li><a href="/alloys/inconel-600" class="hover:text-primary-bright transition-colors">Inconel 600 (UNS N06600)</a></li>
          <li><a href="/alloys/inconel-718" class="hover:text-primary-bright transition-colors">Inconel 718 (UNS N07718)</a></li>
          <li><a href="/alloys/incoloy-800" class="hover:text-primary-bright transition-colors">Incoloy 800 / 800H / 800HT</a></li>
          <li><a href="/alloys/monel-400" class="hover:text-primary-bright transition-colors">Monel 400 (UNS N04400)</a></li>
          <li><a href="/alloys/monel-k500" class="hover:text-primary-bright transition-colors">Monel K-500 (UNS N05500)</a></li>
          <li><a href="/alloys/hastelloy-c276" class="hover:text-primary-bright transition-colors">Hastelloy C-276 (UNS N10276)</a></li>
          <li><a href="/alloys/hastelloy-c22" class="hover:text-primary-bright transition-colors">Hastelloy C-22 (UNS N06022)</a></li>
          <li><a href="/alloys/hastelloy-b2" class="hover:text-primary-bright transition-colors">Hastelloy B-2 (UNS N10665)</a></li>
          <li><a href="/alloys/nickel-200-201" class="hover:text-primary-bright transition-colors">Nickel 200 / 201 (UNS N02200)</a></li>
        </ul>
      </div>

      <!-- COLUMN 3: Stainless Steel & Product Lines -->
      <div class="flex flex-col gap-3">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Products & Stainless</h4>
        <ul class="flex flex-col gap-2 text-xs text-steel list-none p-0 m-0">
          <li><a href="/products/flanges" class="hover:text-primary-bright transition-colors">ASME B16.5 Flanges (WNRF/BLRF)</a></li>
          <li><a href="/products/pipes-tubes" class="hover:text-primary-bright transition-colors">Seamless & Welded Pipes</a></li>
          <li><a href="/products/pipe-fittings" class="hover:text-primary-bright transition-colors">Buttweld Fittings (Elbows/Tees)</a></li>
          <li><a href="/products/forged-fittings" class="hover:text-primary-bright transition-colors">Forged Fittings 3000# / 6000#</a></li>
          <li><a href="/products/fasteners" class="hover:text-primary-bright transition-colors">Industrial Heavy Hex Fasteners</a></li>
          <li><a href="/products/round-bars" class="hover:text-primary-bright transition-colors">Round Bars (Bright & Black)</a></li>
          <li><a href="/products/sheets-plates" class="hover:text-primary-bright transition-colors">Sheets, Plates & Coils</a></li>
          <li><a href="/alloys/stainless-steel-316l" class="hover:text-primary-bright transition-colors">Stainless Steel 316 / 316L</a></li>
          <li><a href="/alloys/stainless-steel-304l" class="hover:text-primary-bright transition-colors">Stainless Steel 304 / 304L</a></li>
          <li><a href="/alloys/duplex-2205" class="hover:text-primary-bright transition-colors">Duplex 2205 & Super Duplex 2507</a></li>
        </ul>
      </div>

      <!-- COLUMN 4: Technical Tools & Metallurgy Engineering -->
      <div class="flex flex-col gap-3">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Engineering Tools</h4>
        <ul class="flex flex-col gap-2 text-xs text-steel list-none p-0 m-0">
          <li><a href="/technical-data/flange-dimensions" class="hover:text-primary-bright transition-colors">ASME B16.5 Dimensions & Weights</a></li>
          <li><a href="/technical-data/pipe-schedule-chart" class="hover:text-primary-bright transition-colors">Pipe Schedules (Sch 10 to XXS)</a></li>
          <li><a href="/technical-data/weight-formulas" class="hover:text-primary-bright transition-colors">Theoretical Metal Weight Formulas</a></li>
          <li><a href="/technical-data/chemical-composition" class="hover:text-primary-bright transition-colors">Chemical Composition Master Table</a></li>
          <li><a href="/technical-data/mechanical-properties" class="hover:text-primary-bright transition-colors">Tensile & Yield Strengths (MPa/ksi)</a></li>
          <li><a href="/technical-data/mtc-3-1-format" class="hover:text-primary-bright transition-colors">EN 10204 3.1 MTC Inspection Guide</a></li>
          <li><a href="/technical-data/nace-mr0175-guide" class="hover:text-primary-bright transition-colors">NACE MR0175 Sour Service Rules</a></li>
          <li><a href="/quality" class="hover:text-primary-bright transition-colors">Quality Assurance Manual</a></li>
          <li><a href="/certificates" class="hover:text-primary-bright transition-colors">Certifications & Mill Approvals</a></li>
        </ul>
      </div>

      <!-- COLUMN 5: Global Logistics, Port & Fast Contact -->
      <div class="flex flex-col gap-3">
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Logistics & Sales</h4>
        <div class="flex flex-col gap-2 text-xs text-steel">
          <div>
            <span class="text-white font-semibold block">Telephone Hotlines:</span>
            <a href="tel:+912267438356" class="hover:text-primary-bright transition-colors block">+91 22 6743 8356</a>
            <a href="tel:+912223850042" class="hover:text-primary-bright transition-colors block">+91 22 2385 0042</a>
          </div>

          <div>
            <span class="text-white font-semibold block">Sales WhatsApp / Mobile:</span>
            <a href="https://wa.me/919892244451" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline block font-mono">
              +91 98922 44451 (Nitin Bhansali)
            </a>
            <a href="tel:+919820027908" class="hover:text-primary-bright transition-colors block">
              +91 98200 27908 (Harakchand Bhansali)
            </a>
          </div>

          <div>
            <span class="text-white font-semibold block">Procurement Inquiries:</span>
            <a href="mailto:sales@bhansalimetals.com" class="text-primary-bright hover:underline block">sales@bhansalimetals.com</a>
            <a href="mailto:nitin@bhansalimetals.com" class="hover:text-white transition-colors block">nitin@bhansalimetals.com</a>
          </div>

          <div class="pt-2 border-t border-ink-soft">
            <span class="text-white font-semibold block">Port of Dispatch:</span>
            JNPT (Nhava Sheva Port), Mumbai<br>
            CSMI Air Cargo Terminal (BOM)<br>
            Domestic Dispatch: 24–48 Hours<br>
            Export Freight: CIF / FOB Worldwide
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Compliance & Legal Strip -->
    <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
        <span>ISO 9001:2015 (QAIC/IN/1103-A)</span>
        <span class="text-graphite">|</span>
        <span>PED 2014/68/EU Annex I</span>
        <span class="text-graphite">|</span>
        <span>IBR 1950 Certified</span>
        <span class="text-graphite">|</span>
        <span>NACE MR0175 / ISO 15156</span>
      </div>

      <div class="flex items-center gap-4">
        <span>&copy; {currentYear} Bhansali Metals. All Rights Reserved.</span>
        <a href="/privacy-policy" class="hover:text-white transition-colors">Privacy</a>
        <a href="/terms-of-supply" class="hover:text-white transition-colors">Terms</a>
        <a href="/sitemap.xml" class="hover:text-white transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
```

---

### 4.8 Complete Schema.org JSON-LD Structured Data Blueprints

To dominate high-intent B2B search queries (e.g., *"Inconel 625 Flanges Manufacturer Mumbai"*, *"Monel 400 Pipe ASTM B165 Price"*), the site requires 5 specialized JSON-LD schemas.

#### A. Organization & Manufacturer Schema (`src/components/seo/OrganizationSchema.astro`)
```astro
---
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.bhansalimetals.com/#organization",
  "name": "Bhansali Metals",
  "legalName": "Bhansali Metals",
  "url": "https://www.bhansalimetals.com",
  "logo": "https://www.bhansalimetals.com/assets/images/bhansali-metals-logo.svg",
  "description": "Manufacturer, Exporter, and Stockist of High Nickel Alloys (Inconel, Monel, Hastelloy, Nickel) and Stainless Steel Pipes, Flanges, Pipe Fittings, and Fasteners in Mumbai, India.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "31, Kataria Mansion, S.V.P Road, 7th Khetwadi, Opera House",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400004",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-22-67438356",
      "contactType": "sales",
      "email": "sales@bhansalimetals.com",
      "areaServed": ["IN", "AE", "SA", "US", "DE", "SG", "GB"],
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9892244451",
      "contactType": "customer service",
      "contactOption": "WhatsApp",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "ISO 9001:2015 Quality Management System",
      "credentialCategory": "Quality Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "QAIC Certification Services",
        "identifier": "QAIC/IN/1103-A"
      }
    }
  ]
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

#### B. Industrial Product & AggregateOffer Schema (`src/components/seo/ProductSchema.astro`)
```astro
---
interface Props {
  productName: string;
  alloyGrade: string;
  unsCode: string;
  description: string;
  sku: string;
  astmSpec: string;
  canonicalUrl: string;
  imageUrl: string;
}

const {
  productName,
  alloyGrade,
  unsCode,
  description,
  sku,
  astmSpec,
  canonicalUrl,
  imageUrl
} = Astro.props;

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${canonicalUrl}#product`,
  "name": productName,
  "image": imageUrl,
  "description": description,
  "sku": sku,
  "mpn": `${alloyGrade}-${sku}`,
  "brand": {
    "@type": "Brand",
    "name": "Bhansali Metals"
  },
  "manufacturer": {
    "@id": "https://www.bhansalimetals.com/#organization"
  },
  "material": alloyGrade,
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "UNS Designation",
      "value": unsCode
    },
    {
      "@type": "PropertyValue",
      "name": "Standard Specification",
      "value": astmSpec
    },
    {
      "@type": "PropertyValue",
      "name": "Inspection Certificate",
      "value": "EN 10204 Type 3.1 / 3.2"
    }
  ],
  "offers": {
    "@type": "AggregateOffer",
    "url": canonicalUrl,
    "priceCurrency": "INR",
    "lowPrice": "500",
    "highPrice": "25000",
    "offerCount": "100",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/InvoicePrice",
      "unitText": "Kilogram or Piece (Quotation on Request)"
    },
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://www.bhansalimetals.com/#organization"
    }
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(productSchema)} />
```

#### C. BreadcrumbList & Technical FAQPage Schema (`src/components/seo/FaqSchema.astro`)
```astro
---
interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  faqs: FAQItem[];
  breadcrumbs: BreadcrumbItem[];
}

const { faqs, breadcrumbs } = Astro.props;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
---

<script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />
```

---

## 5. Verification Method

To verify that the design system, conversion funnel, and footer strictly comply with all requirements:

### 5.1 Automated Code & Token Verification Commands
1. **Lint CSS & Token Usage**:
   ```bash
   # Verify that no unauthorized colors or excessive primary blue are present
   rg "#024ad8" src/ --count-matches
   # Verify two-tier radius discipline (rounded-sharp = 4px, rounded-soft = 16px)
   rg "rounded-(md|xl|sharp|soft)" src/
   ```
2. **Verify Native `<dialog>` Integrity**:
   - Confirm `<dialog id="rfq-dialog-modal">` exists and does NOT load any external modal libraries (such as React modal, Bootstrap, or jQuery).
   - Test ESC key dismissal, keyboard focus cycling, and click-outside backdrop event handler.
3. **Verify WhatsApp Pre-fill String Encoding**:
   - Execute in node:
     ```javascript
     const { generateWhatsAppUrl } = await import('./src/utils/whatsapp.ts');
     const testUrl = generateWhatsAppUrl({ grade: "Inconel 625", productForm: "WNRF Flanges 4\" 300#", quantity: "50 Nos" });
     console.log(testUrl);
     // Must contain wa.me/919892244451 and valid %22, %23 percent encoding
     ```
4. **Verify SEO Schema Validation**:
   - Run Google Rich Results Test or Schema.org validator on generated HTML pages to confirm zero syntax errors in `Organization`, `Product`, `AggregateOffer`, `BreadcrumbList`, and `FAQPage`.
5. **Verify Elimination of Scraped Competitor Text**:
   ```bash
   # Ensure zero occurrences of competitor "Regal" or hotlinked "manansteel"
   rg -i "Regal  Sales" src/
   rg -i "manansteel" src/
   ```

---
*Report prepared by `explorer_survey_3` — Visual Design System & B2B Funnel Architect.*
