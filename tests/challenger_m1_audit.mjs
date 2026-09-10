/**
 * Challenger M1 Empirical Audit Script
 * Verifies HTML semantics, CSS syntax, font metrics, contrast ratios, and broken links.
 */

import fs from 'node:fs';
import path from 'node:path';

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');
const cssDir = path.join(distPath, '_astro');

console.log('='.repeat(80));
console.log('  CHALLENGER M1: EMPIRICAL AUDIT REPORT');
console.log('='.repeat(80));

if (!fs.existsSync(indexPath)) {
  console.error('ERROR: dist/index.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

// --- 1. HTML Semantics & Structure ---
console.log('\n--- 1. HTML Semantics & Structure ---');
const hasDocType = /^<!DOCTYPE html>/i.test(html.trim());
console.log('1.1 DOCTYPE:', hasDocType ? 'PASS (<!DOCTYPE html>)' : 'FAIL');

const hasLang = /<html[^>]+lang=["'][a-z]+["']/i.test(html);
console.log('1.2 <html> lang attribute:', hasLang ? 'PASS' : 'FAIL');

const hasMetaCharset = /<meta[^>]+charset=/i.test(html);
console.log('1.3 <meta charset>:', hasMetaCharset ? 'PASS' : 'FAIL');

const hasMetaViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
console.log('1.4 <meta viewport>:', hasMetaViewport ? 'PASS' : 'FAIL');

const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
console.log('1.5 <title>:', titleMatch ? `PASS ("${titleMatch[1].trim()}")` : 'FAIL');

const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
console.log('1.6 Meta Description:', metaDescMatch ? `PASS ("${metaDescMatch[1].trim().slice(0, 50)}...")` : 'FAIL');

const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
console.log('1.7 Canonical Link:', canonicalMatch ? `PASS ("${canonicalMatch[1]}")` : 'FAIL');

// Landmarks
const landmarks = {
  header: (html.match(/<header\b/gi) || []).length,
  nav: (html.match(/<nav\b/gi) || []).length,
  main: (html.match(/<main\b/gi) || []).length,
  section: (html.match(/<section\b/gi) || []).length,
  footer: (html.match(/<footer\b/gi) || []).length,
  dialog: (html.match(/<dialog\b/gi) || []).length,
};
console.log('1.8 Landmarks:', landmarks);
const landmarksPass = landmarks.header >= 1 && landmarks.nav >= 1 && landmarks.main >= 1 && landmarks.footer >= 1;
console.log('    Landmarks Status:', landmarksPass ? 'PASS' : 'FAIL');

// Heading hierarchy
const h1Count = (html.match(/<h1\b/gi) || []).length;
const h2Count = (html.match(/<h2\b/gi) || []).length;
const h3Count = (html.match(/<h3\b/gi) || []).length;
console.log(`1.9 Heading hierarchy: h1=${h1Count}, h2=${h2Count}, h3=${h3Count}`);
console.log('    Single H1 rule:', h1Count === 1 ? 'PASS' : 'FAIL');

// Unclosed tag / tag nesting check for major tags
const openDivs = (html.match(/<div\b/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log(`1.10 <div> balance: open=${openDivs}, close=${closeDivs}, diff=${openDivs - closeDivs}`);

const openSections = (html.match(/<section\b/gi) || []).length;
const closeSections = (html.match(/<\/section>/gi) || []).length;
console.log(`1.11 <section> balance: open=${openSections}, close=${closeSections}`);

// Check for unescaped characters (< or & not in entity)
const rawAmpersands = (html.match(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g) || []).length;
console.log(`1.12 Raw unescaped ampersands: ${rawAmpersands} instances`);

// --- 2. Image and Link Accessibility ---
console.log('\n--- 2. Image & Link Accessibility ---');
const imgs = [...html.matchAll(/<img\b([^>]*)>/gi)];
let imgsMissingAlt = 0;
for (const img of imgs) {
  if (!/\balt=["']/i.test(img[1])) {
    imgsMissingAlt++;
    console.log('   Missing alt attribute:', img[0]);
  }
}
console.log(`2.1 Images with alt attribute: ${imgs.length - imgsMissingAlt} / ${imgs.length} (${imgsMissingAlt === 0 ? 'PASS' : 'FAIL'})`);

const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
let emptyLinks = 0;
for (const l of links) {
  const innerText = l[2].replace(/<[^>]+>/g, '').trim();
  const hasAria = /aria-label=/i.test(l[1]);
  const hasImgOrSvg = /<img|<svg/i.test(l[2]);
  if (!innerText && !hasAria && !hasImgOrSvg) {
    emptyLinks++;
    console.log('   Empty link:', l[0]);
  }
}
console.log(`2.2 Non-empty accessible links: ${links.length - emptyLinks} / ${links.length} (${emptyLinks === 0 ? 'PASS' : 'FAIL'})`);

const buttons = [...html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)];
let emptyButtons = 0;
for (const b of buttons) {
  const innerText = b[2].replace(/<[^>]+>/g, '').trim();
  const hasAria = /aria-label=/i.test(b[1]);
  const hasImgOrSvg = /<img|<svg/i.test(b[2]);
  if (!innerText && !hasAria && !hasImgOrSvg) {
    emptyButtons++;
    console.log('   Empty button:', b[0]);
  }
}
console.log(`2.3 Non-empty accessible buttons: ${buttons.length - emptyButtons} / ${buttons.length} (${emptyButtons === 0 ? 'PASS' : 'FAIL'})`);

// --- 3. Broken Internal Links Check ---
console.log('\n--- 3. Internal Links & Asset Audit ---');
const internalLinks = new Set();
for (const l of links) {
  const hrefMatch = l[1].match(/\bhref=["']([^"']+)["']/i);
  if (hrefMatch) {
    const href = hrefMatch[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      internalLinks.add(href);
    }
  }
}

console.log(`Discovered ${internalLinks.size} unique internal routes/links in index.html:`);
let brokenLinks = 0;
for (const link of internalLinks) {
  const [cleanPath, hash] = link.split('#');
  // Check if file or directory exists in dist/ or redirects
  let valid = false;
  if (cleanPath === '/' || cleanPath === '') {
    valid = true;
  } else {
    const targetPath1 = path.join(distPath, cleanPath);
    const targetPath2 = path.join(distPath, cleanPath + '.html');
    const targetPath3 = path.join(distPath, cleanPath, 'index.html');
    if (fs.existsSync(targetPath1) || fs.existsSync(targetPath2) || fs.existsSync(targetPath3)) {
      valid = true;
    }
  }
  if (valid) {
    console.log(`   ✔ ${link} (Target exists)`);
  } else {
    // Note if it is a planned route for M2-M4
    console.log(`   ⚠ ${link} (Target not found in dist - check if future milestone)`);
    brokenLinks++;
  }
}

// --- 4. CSS Custom Properties & Syntax ---
console.log('\n--- 4. CSS Custom Properties & Syntax ---');
const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
console.log(`Found ${cssFiles.length} CSS bundle(s):`, cssFiles);

let allCss = '';
for (const f of cssFiles) {
  allCss += fs.readFileSync(path.join(cssDir, f), 'utf8') + '\n';
}

const requiredTokens = [
  '--color-primary',
  '--color-primary-bright',
  '--color-primary-deep',
  '--color-primary-soft',
  '--color-canvas',
  '--color-cloud',
  '--color-fog',
  '--color-ink',
  '--color-ink-deep',
  '--color-charcoal',
  '--color-graphite',
  '--color-steel',
  '--radius-sharp',
  '--radius-soft',
  '--shadow-soft-lift'
];

let missingTokens = 0;
for (const token of requiredTokens) {
  const tokenRegex = new RegExp(token + '\\s*:', 'i');
  if (tokenRegex.test(allCss)) {
    console.log(`   ✔ ${token} is defined`);
  } else {
    console.log(`   ✖ MISSING TOKEN: ${token}`);
    missingTokens++;
  }
}
console.log(`CSS Token Check: ${missingTokens === 0 ? 'PASS (All 15 tokens defined)' : 'FAIL'}`);

// Verify token values in CSS
console.log('\n--- 4.1 Checking Token Values against DESIGN.md ---');
const tokenChecks = [
  ['--color-primary', '#024ad8'],
  ['--color-primary-bright', '#296ef9'],
  ['--color-primary-deep', '#0e3191'],
  ['--color-canvas', '#ffffff'],
  ['--color-cloud', '#f7f7f7'],
  ['--color-fog', '#e8e8e8'],
  ['--color-ink', '#1a1a1a'],
  ['--radius-sharp', '4px'],
  ['--radius-soft', '16px'],
  ['--shadow-soft-lift', '0 2px 8px rgba(26, 26, 26, 0.08)']
];

for (const [prop, expected] of tokenChecks) {
  // Normalize whitespace for comparison
  const regex = new RegExp(`${prop}\\s*:\\s*([^;]+);`);
  const match = allCss.match(regex);
  if (match) {
    const val = match[1].trim().replace(/\s+/g, ' ');
    const exp = expected.replace(/\s+/g, ' ');
    const isMatch = val.toLowerCase().includes(exp.toLowerCase());
    console.log(`   ${prop}: ${val} (expected ~ ${exp}) -> ${isMatch ? 'PASS' : 'WARN'}`);
  } else {
    console.log(`   ${prop}: NOT FOUND in built CSS`);
  }
}

// Check CSS unclosed braces
const openBraces = (allCss.match(/{/g) || []).length;
const closeBraces = (allCss.match(/}/g) || []).length;
console.log(`4.2 CSS Braces balance: open=${openBraces}, close=${closeBraces} (${openBraces === closeBraces ? 'PASS' : 'FAIL'})`);

// --- 5. Font Metrics Verification ---
console.log('\n--- 5. Font Metrics Verification ---');
const hasInterPreload = html.includes('Inter') || html.includes('fonts.googleapis.com');
console.log('5.1 Font preloading/connection in HTML:', hasInterPreload ? 'PASS' : 'FAIL');

const fontSansMatch = allCss.match(/--font-sans\s*:\s*([^;]+);/);
console.log('5.2 --font-sans family stack:', fontSansMatch ? fontSansMatch[1].trim() : 'NOT FOUND');

// Check line-height for display vs body
const displayLh = allCss.includes('line-height: 1.0') || allCss.includes('line-height: 1;') || allCss.includes('--lh-display');
console.log('5.3 Display line-height (1.0) defined:', displayLh ? 'PASS' : 'CHECK');

const bodyLh = allCss.includes('line-height: 1.4') || allCss.includes('--lh-body');
console.log('5.4 Body line-height (1.4) defined:', bodyLh ? 'PASS' : 'CHECK');

const buttonTracking = allCss.includes('letter-spacing: 0.7px') || allCss.includes('letter-spacing: 0.05em') || allCss.includes('--tracking-button');
console.log('5.5 Button letter-spacing (0.7px) defined:', buttonTracking ? 'PASS' : 'CHECK');

// --- 6. Contrast Ratio Verification ---
console.log('\n--- 6. WCAG AA Contrast Ratios ---');
function sRGBtoLin(c) {
  c = c / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function lum(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
}
function contrast(h1, h2) {
  const l1 = lum(h1);
  const l2 = lum(h2);
  const max = Math.max(l1, l2);
  const min = Math.min(l1, l2);
  return (max + 0.05) / (min + 0.05);
}

const colorPairs = [
  ['#024ad8', '#ffffff', 'HP Electric Blue text on White canvas', 4.5],
  ['#ffffff', '#024ad8', 'White text on HP Electric Blue button', 4.5],
  ['#1a1a1a', '#ffffff', 'Ink text on White canvas', 4.5],
  ['#1a1a1a', '#f7f7f7', 'Ink text on Cloud section band', 4.5],
  ['#1a1a1a', '#e8e8e8', 'Ink text on Fog section band', 4.5],
  ['#ffffff', '#1a1a1a', 'White text on Ink footer/slab', 4.5],
  ['#3d3d3d', '#ffffff', 'Charcoal text on White canvas', 4.5],
  ['#636363', '#ffffff', 'Graphite text on White canvas', 4.5],
  ['#296ef9', '#1a1a1a', 'Bright Blue text on Ink dark slab', 3.0],
  ['#c2c2c2', '#1a1a1a', 'Steel border/caption on Ink dark slab', 4.5],
  ['#c9e0fc', '#1a1a1a', 'Soft Blue accent on Ink slab', 4.5]
];

for (const [fg, bg, desc, minReq] of colorPairs) {
  const ratio = contrast(fg, bg);
  const pass = ratio >= minReq;
  console.log(`   ${desc.padEnd(45)}: ${ratio.toFixed(2)}:1 (req >= ${minReq}:1) -> ${pass ? 'PASS' : 'FAIL'}`);
}

// --- 3.1 On-Page Hash Anchors & Asset Verification ---
console.log('\n--- 3.1 On-Page Hash Anchors & Asset Verification ---');
const hashLinks = [...html.matchAll(/href=["'](#[^"']+)["']/gi)].map(m => m[1]);
console.log(`Found ${hashLinks.length} on-page hash links:`, [...new Set(hashLinks)]);
let missingHashTargets = 0;
for (const h of new Set(hashLinks)) {
  const targetId = h.slice(1);
  const exists = html.includes(`id="${targetId}"`) || html.includes(`id='${targetId}'`);
  console.log(`   ${h} target element: ${exists ? 'EXISTS (PASS)' : 'MISSING (FAIL)'}`);
  if (!exists) missingHashTargets++;
}

// Asset references (<img src>, <link href>, <script src>)
console.log('\n--- 3.2 Static Assets Existence Check ---');
const srcMatches = [...html.matchAll(/(?:src|href)=["'](\/(?:images|favicon|_astro)[^"']+)["']/gi)].map(m => m[1]);
const uniqueAssets = [...new Set(srcMatches)];
console.log(`Checking ${uniqueAssets.length} referenced local assets:`);
let missingAssets = 0;
for (const assetPath of uniqueAssets) {
  // Strip leading slash for path.join
  const relPath = assetPath.replace(/^\//, '');
  const localFile = path.join(distPath, relPath);
  const exists = fs.existsSync(localFile);
  if (!exists) {
    console.log(`   ✖ MISSING ASSET: ${assetPath}`);
    missingAssets++;
  } else {
    console.log(`   ✔ ${assetPath} exists (${fs.statSync(localFile).size} bytes)`);
  }
}
console.log(`Asset Verification: ${missingAssets === 0 ? 'PASS (All referenced static assets exist)' : 'FAIL'}`);

// --- 3.3 SVG Content & Validity Check ---
console.log('\n--- 3.3 SVG Asset Validity Check ---');
const badgesDir = path.join(distPath, 'images', 'badges');
if (fs.existsSync(badgesDir)) {
  const badgeFiles = fs.readdirSync(badgesDir).filter(f => f.endsWith('.svg'));
  console.log(`Found ${badgeFiles.length} badge SVGs in dist/images/badges:`);
  let invalidSvgs = 0;
  for (const bf of badgeFiles) {
    const svgContent = fs.readFileSync(path.join(badgesDir, bf), 'utf8');
    const hasSvgTag = svgContent.includes('<svg') && svgContent.includes('</svg>');
    const hasViewBox = svgContent.includes('viewBox=');
    if (hasSvgTag && hasViewBox) {
      console.log(`   ✔ ${bf}: Valid SVG (${svgContent.length} bytes, viewBox present)`);
    } else {
      console.log(`   ✖ ${bf}: Invalid or malformed SVG`);
      invalidSvgs++;
    }
  }
  console.log(`SVG Badges Status: ${invalidSvgs === 0 ? 'PASS' : 'FAIL'}`);
}

console.log('\n' + '='.repeat(80));
console.log('  AUDIT COMPLETE');
console.log('='.repeat(80));

