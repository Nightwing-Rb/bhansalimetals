/**
 * Test Context & Target Environment Resolver
 * Manages dual-target resolution: dist/ (production build) vs src/ (source & contracts)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PROJECT_ROOT = path.resolve(__dirname, '../../..');

export const PATHS = {
  root: PROJECT_ROOT,
  dist: path.join(PROJECT_ROOT, 'dist'),
  src: path.join(PROJECT_ROOT, 'src'),
  publicDir: path.join(PROJECT_ROOT, 'public'),
  legacyDir: path.join(PROJECT_ROOT, 'www.bhansalimetals.com'),
  content: path.join(PROJECT_ROOT, 'src', 'content'),
  styles: path.join(PROJECT_ROOT, 'src', 'styles'),
};

export class TestContext {
  constructor() {
    this.distExists = fs.existsSync(PATHS.dist);
    this.srcExists = fs.existsSync(PATHS.src);
    this.publicExists = fs.existsSync(PATHS.publicDir);
    this.legacyExists = fs.existsSync(PATHS.legacyDir);
  }

  refresh() {
    this.distExists = fs.existsSync(PATHS.dist);
    this.srcExists = fs.existsSync(PATHS.src);
    this.publicExists = fs.existsSync(PATHS.publicDir);
    this.legacyExists = fs.existsSync(PATHS.legacyDir);
  }

  isDistAvailable() {
    this.refresh();
    return this.distExists;
  }

  /**
   * Resolve an HTML route to file path or content.
   * Route can be '/', '/about', '/products/flanges', '/alloys/inconel-625', etc.
   */
  getRouteHtml(route) {
    this.refresh();
    const cleanRoute = route.replace(/^\/+|\/+$/g, '');

    // 1. Try dist directory if built
    if (this.distExists) {
      const possiblePaths = [
        cleanRoute === '' ? path.join(PATHS.dist, 'index.html') : null,
        path.join(PATHS.dist, cleanRoute, 'index.html'),
        path.join(PATHS.dist, `${cleanRoute}.html`),
        path.join(PATHS.dist, cleanRoute),
      ].filter(Boolean);

      for (const p of possiblePaths) {
        if (fs.existsSync(p) && fs.statSync(p).isFile()) {
          return fs.readFileSync(p, 'utf-8');
        }
      }
    }

    // 2. Try src/pages or templates
    if (this.srcExists) {
      const srcPages = path.join(PATHS.src, 'pages');
      const possibleSrcPaths = [
        cleanRoute === '' ? path.join(srcPages, 'index.astro') : null,
        path.join(srcPages, `${cleanRoute}.astro`),
        path.join(srcPages, cleanRoute, 'index.astro'),
      ].filter(Boolean);

      for (const sp of possibleSrcPaths) {
        if (fs.existsSync(sp) && fs.statSync(sp).isFile()) {
          let pageContent = fs.readFileSync(sp, 'utf-8');
          // If page uses BaseLayout, also append layout definition so tests see full document context
          const baseLayoutPath = path.join(PATHS.src, 'layouts', 'BaseLayout.astro');
          if (pageContent.includes('BaseLayout') && fs.existsSync(baseLayoutPath)) {
            pageContent += '\n' + fs.readFileSync(baseLayoutPath, 'utf-8');
          }
          return pageContent;
        }
      }
    }

    return null;
  }

  /**
   * Check if a route exists in dist or src
   */
  hasRoute(route) {
    return this.getRouteHtml(route) !== null;
  }

  /**
   * Get all CSS content bundled or in src/styles
   */
  getAllCss() {
    this.refresh();
    let combinedCss = '';

    // From dist/_astro/
    if (this.distExists) {
      const astroDist = path.join(PATHS.dist, '_astro');
      if (fs.existsSync(astroDist)) {
        const files = fs.readdirSync(astroDist).filter(f => f.endsWith('.css'));
        for (const f of files) {
          combinedCss += fs.readFileSync(path.join(astroDist, f), 'utf-8') + '\n';
        }
      }
    }

    // From src/styles/
    if (this.srcExists && fs.existsSync(PATHS.styles)) {
      const files = fs.readdirSync(PATHS.styles).filter(f => f.endsWith('.css'));
      for (const f of files) {
        combinedCss += fs.readFileSync(path.join(PATHS.styles, f), 'utf-8') + '\n';
      }
    }

    return combinedCss;
  }

  /**
   * Read a JSON collection file from src/content/<collection>/<entry>.json
   */
  getContentEntry(collection, slug) {
    const entryPath = path.join(PATHS.content, collection, `${slug}.json`);
    if (fs.existsSync(entryPath)) {
      return JSON.parse(fs.readFileSync(entryPath, 'utf-8'));
    }
    return null;
  }

  /**
   * List all entry slugs in a collection
   */
  listContentSlugs(collection) {
    const colDir = path.join(PATHS.content, collection);
    if (!fs.existsSync(colDir)) return [];
    return fs.readdirSync(colDir)
      .filter(f => f.endsWith('.json') || f.endsWith('.md'))
      .map(f => f.replace(/\.(json|md)$/, ''));
  }

  /**
   * Check if public asset exists
   */
  hasPublicAsset(relativePath) {
    const pubPath = path.join(PATHS.publicDir, relativePath);
    if (fs.existsSync(pubPath)) return true;

    if (this.distExists) {
      const distPath = path.join(PATHS.dist, relativePath);
      if (fs.existsSync(distPath)) return true;
    }

    return false;
  }
}

export const context = new TestContext();
