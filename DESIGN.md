# DESIGN.md — Bhansali Metals Visual System

> This document describes what is **actually implemented** in `src/styles/`.
> The canonical runtime source of truth is `src/styles/tokens.css`; this file
> explains the system and records the accessibility constraints that shaped it.
>
> It previously described an HP-derived system (Forma DJR Micro, `#024ad8`,
> 4px/16px radii, 45° chevrons) that had been replaced in code without the
> document being updated. That drift is what this rewrite closes.

## Overview

A **white-canvas industrial catalog** with a single chromatic accent. The whole
system sits on white with neutral-gray bands for section rhythm, and closes on a
flat **ink-navy** slab. One blue (`#0f62fe`) does all the work; everything else is
neutral or one semantic green for stock readiness.

The defining constraint is not decorative — it is **contrast discipline**. Two
rules govern the system:

1. **Blue is a fill, not a text colour.** `#0f62fe` measures 5.00:1 against white
   (fine) but only 3.62:1 against the navy slab (fails). On dark surfaces, links
   and accents use the light tint `#78a9ff` (7.70:1), which in turn cannot be used
   on white (2.35:1). The two blues are role-separated, and mixing them up is the
   most likely way to break this system.
2. **Text on dark uses an explicit opacity ramp, never `rgba(255,255,255,α)`.**
   An alpha ramp composited over a varying surface produces contrast that drifts
   as the surface brightens. This is exactly what broke the previous footer: the
   same link measured 4.54:1 at the top of the slab and 4.43:1 in the middle.

### Section rhythm

`utility strip (navy) → main nav (white) → white body → cloud band → fog band → ink slab → footer (navy) → compliance bar (navy-deep)`

## Colors

Canonical values live in `src/styles/tokens.css`. Measured contrast is noted
inline because several values are chosen *for* their ratio, not their appearance.

### Brand & Accent

- **Signal Blue** (`--color-primary` — `#0f62fe`): the lone accent. Primary CTA
  fill, link colour, active indicators. 5.00:1 on white — pass for body text.
- **Bright Blue** (`--color-primary-bright` — `#78a9ff`): the on-dark tint.
  Links, accents and CTAs on navy. 7.70:1 on navy, but only 2.35:1 on white, so it
  is **dark-surface only** and always carries `--color-on-primary-bright` text.
- **Ink on Bright** (`--color-on-primary-bright` — `#0a1628`): the label colour
  for bright-blue fills. White on `#78a9ff` is 2.35:1 and must never be used.
- **Hover Blue** (`--color-primary-hover` — `#0353e9`): hover fill. 6.14:1 with a
  white label.
- **Deep Blue** (`--color-primary-deep` — `#0043ce`): pressed state, and text on
  the pale soft-blue chip surface. 5.94:1 on `--color-primary-soft`.
- **Soft Blue** (`--color-primary-soft` — `#d0e2ff`): pale chip, icon-well and
  table-highlight surface.
- **Blue RGB** (`--color-primary-rgb` — `15, 98, 254`): for building alpha values
  as `rgba(var(--color-primary-rgb), α)`. **Never re-embed the raw triplet** —
  that is how eight stale `rgba(2, 74, 216, …)` values survived a palette change.

### Surface

- **Canvas** (`--color-canvas` — `#ffffff`): page background.
- **Paper** (`--color-paper` — `#ffffff`): card surfaces, differentiated by border
  and shadow rather than fill.
- **Cloud** (`--color-cloud` — `#f4f5f7`): lightest alternating band.
- **Fog** (`--color-fog` — `#e4e6ea`): second band; also card borders and
  table rules.
- **Steel** (`--color-steel` — `#c2c2c2`): stronger hairline.
- **Hairline** (`--color-hairline` — `#e4e6ea`): 1px dividers.

### Dark Surfaces

Deliberately **flat, not gradient**. A wide vertical gradient made the lightest
band land mid-column, so identical text passed at the top of a section and failed
in the middle. Depth now comes from a single-hue step, not a luminance sweep.

- **Slab** (`--color-slab` — `#0a1628`): footer and dark bands.
- **Slab Raised** (`--color-slab-raised` — `#12233d`): the lighter end of the
  permitted 1.15:1 gradient step.
- **Slab Deep** (`--color-slab-deep` — `#08111f`): the compliance bar beneath the
  footer — 1.04:1 against slab, enough to read as a band without a seam.

### Text

- **Ink** (`--color-ink` — `#161616`): universal text on light surfaces. 18.10:1.
- **Ink Deep** (`--color-ink-deep` — `#000000`): wordmark and hairline strokes.
- **Charcoal** (`--color-charcoal` — `#3f4652`): body copy. 9.51:1.
- **Graphite** (`--color-graphite` — `#5c6270`): captions, metadata. 6.11:1 on
  canvas, 5.60:1 on cloud.

### On-Dark Text Ramp

Use these tokens on slab surfaces. Never `rgba(255,255,255,α)`.

| Token | Value | Use | vs `--color-slab` |
|---|---|---|---|
| `--on-ink` | `#f4f5f7` | headings | 16.62:1 |
| `--on-ink-2` | `#c7ceda` | labels, sub-headings | 11.46:1 |
| `--on-ink-muted` | `#9aa3b2` | body copy, links | 7.13:1 |
| `--on-ink-faint` | `#7c8698` | legal text, compliance bar | 5.15:1 |

### Semantic

- **Success** (`--color-success` — `#047857`): stock-readiness text. 5.48:1 on
  white. Was `#059669`, which measured 3.77:1 and failed.
- **Success Soft** (`--color-success-soft` — `#d1fae5`) / **Success Deep**
  (`--color-success-deep` — `#065f46`): pill fill + label, 6.78:1 together.
- **Error** (`--color-error` — `#b91c1c`, 6.47:1 on white) / **Error Soft**
  (`--color-error-soft` — `#fee2e2`): required-field marks, validation messages.

**Retired:** the HP-derived `--color-bloom-*` (reds) and `--color-storm-*` (teals)
families were removed. Six of those ten tokens were entirely unused, and the rest
put two unrelated hues next to the brand blue. Error states now use the semantic
error tokens; `.badge-coral` became `.badge-error`.

## Typography

**Inter** (with `SF Pro Display` and system fallbacks) across every surface.
Single family, four weights.

| Token | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| `.display-xxl` | 72px (4.5rem) | 600 | 1.05 | −0.035em |
| `.display-xl` | 56px (3.5rem) | 600 | 1.07 | −0.03em |
| `.display-lg` | 44px (2.75rem) | 600 | 1.1 | −0.025em |
| `.display-md` | 32px (2rem) | 600 | 1.15 | −0.02em |
| `.display-sm` | 24px (1.5rem) | 600 | 1.2 | — |
| `.display-xs` | 20px (1.25rem) | 600 | 1.25 | — |
| `.lead` | 20px (1.25rem) | 400 | 1.5 | — |
| `p` | 16px | 400 | 1.6 | — |
| `.caption-md` | 14px | 400 | 1.5 | — |
| `.caption-sm` | 12px | 400 | 1.33 | — |
| `.eyebrow` | 13px | 600 | — | 0.06em uppercase |
| `.btn` | 15px | 600 | 1.2 | −0.01em |

All display sizes drop to 2.5rem / 2rem / 1.625rem / 1.375rem below 768px.

**Principles.** Headlines are semibold (600) with negative tracking — the opposite
of the retired spec, which used weight 500 at zero tracking. Body runs at 1.6
line-height for long-form spec prose. Buttons are **sentence case, not uppercase**;
the only tracked-uppercase surface is `.eyebrow`.

`.font-mono` (JetBrains Mono) carries heat numbers, grade designations, UNS/W.Nr.
strings, and the XRF readout — anywhere a value must read as a literal.

## Layout

### Spacing

8px base with a 4px half-step. Section rhythm is **120px** desktop / **72px**
mobile (`--spacing-section`), substantially looser than the retired 80px/48px.

`--spacing-xxs` 4 · `--spacing-xs` 8 · `--spacing-sm` 12 · `--spacing-md` 16 ·
`--spacing-lg` 20 · `--spacing-xl` 24 · `--spacing-xxl` 32 · `--spacing-3xl` 48 ·
`--spacing-section` 120 · `--spacing-section-mobile` 72

### Grid & Container

- **Container**: 1280px max-width (`--container-max-width`), 2rem side padding,
  1.25rem below 640px.
- **Product catalog grids**: 3 columns, → 2 at 1024px, → 1 at 640px.
- **Trust pillars / TPI grid**: 4 columns, → 2, → 1.
- **Bento grid**: 12-column track. A 2×2 hero tile plus supporting tiles of
  unequal span. → hero full-width and tiles paired at 1024px, → single column at
  768px. See *Bento Grid* below.
- **Footer**: `1.35fr 1fr 1.05fr 1.1fr 1.4fr` above 1200px, → 3 columns with a
  full-width brand row, → single column at 768px.

### Bento Grid

The testing-protocols section on the homepage uses an intentionally **unequal**
grid: one hero tile spanning 2 columns × 2 rows, five supporting tiles filling the
track around it, with the last tile widened so the bottom row closes flush. This is
the deliberate counter-pattern to the uniform card grids used elsewhere (`.tpi-grid`,
`.trust-pillars`), which read as interchangeable.

The rule that makes it a bento rather than a card rack: **the hero tile carries a
visual, not more text.** It embeds an XRF spectrometer readout (heat number,
Ni/Cr/Mo percentages, UNS verdict) which is the proof of the protocol it describes.
That panel is hidden below 768px, where it would be four rows of noise.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | none | section bands, full-bleed slabs |
| 1 — Hairline | 0 0 0 1px `rgba(0,0,0,0.04)` | outlined elements, table cells |
| 2 — Soft Lift | `0 4px 30px rgba(0,0,0,0.06)` | bento tiles, pillars, cards |
| 3 — Elevated | `0 8px 40px rgba(0,0,0,0.08)` | hover state on lifted cards |
| 4 — Floating | `0 16px 70px rgba(0,0,0,0.15)` | RFQ modal, mobile nav sheet |

The system is mostly flat; depth is communicated by band contrast rather than
shadow. Soft Lift is the workhorse. Hover raises by 3–4px, never more.

### Glassmorphism

`--glass-*` tokens provide `backdrop-filter` surfaces for the navbar, the RFQ
dialog, and overlays, with an `@supports not (backdrop-filter: blur(1px))` fallback
to near-opaque fills.

**Known tension.** The glass layer sits over the blue and softens it, which
contributes to the palette reading muddier than the tokens suggest. It is retained
for consistency, but is the first candidate for removal in a future pass.

**Removed:** glass was previously applied to the footer logistics panel, where it
sat over a *static, smooth* surface — blurring a gradient produces no perceptible
effect, so it was cost with no benefit. It is now a flat bordered panel.

## Shapes

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | small chips |
| `--radius-sm` | 6px | meta panels, sale tags |
| `--radius-sharp` | 10px | buttons, inputs, icon wells |
| `--radius-lg` | 12px | badges, FAQ rows, marquee items |
| `--radius-soft` | 20px | cards, bento tiles, containers |
| `--radius-pill` | 9999px | filter chips, search pill, stock pill |

Two tiers: **buttons stay relatively sharp** (10px), **containers stay soft**
(20px). The retired spec's 4px/16px split has softened on both ends, and the 0-radius
45° chevron has been dropped — `HeroChevrons` now uses `--color-primary` on
unskewed bars (see below).

## Components

### Buttons

- **`.btn-primary`** — blue fill, white label. Hover `#0353e9` (6.14:1). Active
  `--color-primary-deep`.
- **`.btn-primary-bright`** — bright-blue fill with **ink** label, for dark
  surfaces. Hover `#8fb8ff` (9.04:1).
- **`.btn-outline`** — transparent, blue border and label. Hover tint
  `rgba(var(--color-primary-rgb), 0.06)`.
- **`.btn-outline-on-dark`** / **`.btn-glass-dark`** — for navy slabs.
- **`.btn-whatsapp`** — `#25d366`, retained as third-party brand colour.
- **`.btn-ink`**, **`.btn-outline-ink`**, **`.btn-glass`**, **`.btn-sm`**.

Buttons are 48px tall (40px compact), sentence case, and scale 1.02 on hover,
0.98 on active.

### Focus States

Inputs and focusable fields use a **two-part ring**:

```css
border-color: var(--color-primary);                          /* 5.00:1 — carries SC 1.4.11 */
box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.25);  /* decorative halo */
```

The solid border is what satisfies WCAG 2.2 SC 1.4.11 (3:1 non-text). A low-alpha
halo **alone** measures 1.24:1 and fails — the previous system used exactly that
and was non-compliant.

### Badges

`.badge-ink`, `.badge-outline`, `.badge-error`, `.badge-soft-blue`,
`.badge-status-green`, `.badge-mono`, `.badge-glass`, `.badge-glass-dark`.
Note `.badge-coral` was renamed `.badge-error`; the `Badge` component's `coral`
variant is now `error`.

### Marquee

The TPI agency marquee (`TpiMarquee.astro`) scrolls eight accredited inspection
bodies horizontally, with a `mask-image` gradient at both edges so items enter and
leave rather than being clipped. Requirements:

- The track renders **two identical passes** and translates exactly `-50%`.
- The second pass is `aria-hidden` so screen readers announce each agency once.
- `animation-play-state: paused` on `:hover` and `:focus-within`.
- `prefers-reduced-motion: reduce` removes the animation, reveals the duplicate
  pass, and falls back to horizontal scroll.

> **Content rule.** This marquee is **not** a "trusted by our clients" wall. Bureau
> Veritas, TÜV India, Lloyd's Register, Engineers India, DNV and SGS are inspection
> agencies Bhansali Metals *hires*; they are not customers. The copy and the
> accessible label both describe the inspection relationship. Do not relabel it as
> client social proof, and do not add third-party logos without written permission.

### Hero Chevrons

`HeroChevrons.astro` renders two vertical bars in `--color-primary` flanking the
hero. The historical 45° skew and 0-radius cut are gone; the marks are now
unskewed with a 2px radius.

### Stock Pill

`StockPill.astro` — success-soft fill, success-deep label, animated ping. The only
place the semantic green appears as a filled pill.

## Accessibility Constraints

These are not preferences. Each one was a real failure found in the previous
system, verified by measurement. Re-run `.figma/verify.mjs` after any palette change.

| Constraint | Requirement |
|---|---|
| Body text on any surface | ≥ 4.5:1 |
| Non-text UI, focus rings, borders | ≥ 3:1 |
| `--color-primary` on white | 5.00:1 — OK as text |
| `--color-primary` on `--color-slab` | 3.62:1 — **never** as text on dark |
| `--color-primary-bright` on white | 2.35:1 — **never** on light surfaces |
| White label on `--color-primary-bright` | 2.35:1 — **never** |
| Text on dark surfaces | use the `--on-ink-*` ramp, never `rgba(255,255,255,α)` |
| Dark surface gradients | single hue family only, ≤ 1.2:1 luminance spread |
| Alpha blues | build from `--color-primary-rgb`, never re-embed the triplet |

**Not covered by this document:** layout, spacing and copy are verified by build
and review, but visual regression is not automated. Headless browser screenshotting
does not currently run in this environment, so contrast is verified by computation
and the rendering itself needs a human eye on `npm run dev`.
