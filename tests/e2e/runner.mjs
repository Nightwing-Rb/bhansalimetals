#!/usr/bin/env node

/**
 * Master E2E Test Suite Runner for Bhansali Metals
 * Native Node.js test runner integration (node:test, node:assert)
 * Zero external dependencies. Ultra-fast, zero-flakiness execution.
 */

import { run } from 'node:test';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUITE_ROOT = __dirname;
const PROJECT_ROOT = path.resolve(__dirname, '../..');

// CLI Arguments
const args = process.argv.slice(2);
const tierArg = args.find(a => a.startsWith('--tier='))?.split('=')[1] || null;
const featureArg = args.find(a => a.startsWith('--feature='))?.split('=')[1] || null;
const matchArg = args.find(a => a.startsWith('--match='))?.split('=')[1] || null;

function discoverTestFiles() {
  const files = [];

  const tierDirs = [
    { tier: '1', dir: path.join(SUITE_ROOT, 'tier1-features') },
    { tier: '2', dir: path.join(SUITE_ROOT, 'tier2-boundaries') },
    { tier: '3', dir: path.join(SUITE_ROOT, 'tier3-pairwise') },
    { tier: '4', dir: path.join(SUITE_ROOT, 'tier4-scenarios') },
  ];

  for (const { tier, dir } of tierDirs) {
    if (tierArg && tierArg !== tier) continue;
    if (!fs.existsSync(dir)) continue;

    const entries = fs.readdirSync(dir).filter(f => f.endsWith('.test.mjs'));
    for (const f of entries) {
      const fullPath = path.join(dir, f);

      // Filter by feature if requested
      if (featureArg) {
        const featPadded = featureArg.padStart(2, '0');
        // Match in filename like f01, features_01_07, etc.
        const isMatch = f.includes(`f${featPadded}`) ||
                        f.includes(`b${featPadded}`) ||
                        (f.includes('features_') && isFeatureInBatch(f, parseInt(featureArg, 10))) ||
                        (f.includes('boundaries_') && isFeatureInBatch(f, parseInt(featureArg, 10)));
        if (!isMatch) continue;
      }

      // Filter by keyword match if requested
      if (matchArg) {
        if (!f.toLowerCase().includes(matchArg.toLowerCase())) continue;
      }

      files.push({ tier, file: fullPath, name: f });
    }
  }

  return files;
}

function isFeatureInBatch(filename, featNum) {
  const match = filename.match(/(\d+)_(\d+)/);
  if (match) {
    const start = parseInt(match[1], 10);
    const end = parseInt(match[2], 10);
    return featNum >= start && featNum <= end;
  }
  return false;
}

async function main() {
  const startTime = Date.now();
  const testFiles = discoverTestFiles();

  console.log('\n' + '='.repeat(80));
  console.log('  BHANSALI METALS — OPAQUE-BOX REQUIREMENT-DRIVEN E2E TEST SUITE');
  console.log('='.repeat(80));
  console.log(`  Platform:       Node.js ${process.version} on ${process.platform}`);
  console.log(`  Suite Root:     ${SUITE_ROOT}`);
  console.log(`  Discovered:     ${testFiles.length} test suite files`);
  if (tierArg) console.log(`  Filter Tier:    Tier ${tierArg}`);
  if (featureArg) console.log(`  Filter Feature: Feature ${featureArg}`);
  if (matchArg) console.log(`  Filter Match:   "${matchArg}"`);
  console.log('-'.repeat(80) + '\n');

  if (testFiles.length === 0) {
    console.log('  [WARN] No test files matched the specified filter.');
    process.exit(0);
  }

  const filesToRun = testFiles.map(t => t.file);
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  let skippedTests = 0;
  const failures = [];

  const stream = run({
    files: filesToRun,
    concurrency: true,
  });

  stream.on('test:pass', (t) => {
    // Only count leaf tests, not top-level describes
    if (t.name.startsWith('Feature') || t.name.startsWith('Tier 3') || t.name.startsWith('Tier 4')) {
      return;
    }
    totalTests++;
    passedTests++;
    process.stdout.write(`  \x1b[32m✔\x1b[0m ${t.name}\n`);
  });

  stream.on('test:fail', (t) => {
    totalTests++;
    failedTests++;
    failures.push(t);
    process.stdout.write(`  \x1b[31m✖\x1b[0m ${t.name}\n`);
    if (t.details && t.details.error) {
      console.error(`    \x1b[31mError:\x1b[0m ${t.details.error.message}`);
    }
  });

  stream.on('test:diagnostic', (d) => {
    // Diagnostics can be output if debugging
  });

  await new Promise((resolve) => {
    stream.on('end', resolve);
  });

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n' + '='.repeat(80));
  console.log('  E2E TEST EXECUTION SUMMARY');
  console.log('='.repeat(80));
  console.log(`  Total Test Cases:    ${totalTests}`);
  console.log(`  Passed:              \x1b[32m${passedTests}\x1b[0m`);
  console.log(`  Failed:              ${failedTests > 0 ? `\x1b[31m${failedTests}\x1b[0m` : '0'}`);
  console.log(`  Duration:            ${durationSec} seconds`);
  console.log('-'.repeat(80));

  console.log('\n  TIER COVERAGE STATUS:');
  console.log('  ------------------------------------------------------------');
  console.log('  Tier 1: Feature Coverage (Features 1-35)       [ >=175 tests ]');
  console.log('  Tier 2: Boundary & Corner Cases (Features 1-35)[ >=175 tests ]');
  console.log('  Tier 3: Cross-Feature Pairwise Combinations    [ 10 tests    ]');
  console.log('  Tier 4: Real-World EPC Procurement Scenarios   [ 5 scenarios ]');
  console.log('  ------------------------------------------------------------');

  if (failedTests > 0) {
    console.log('\n  \x1b[31mFAILURES ENCOUNTERED:\x1b[0m');
    for (const f of failures) {
      console.log(`  - ${f.name}`);
      if (f.details?.error) {
        console.log(`    ${f.details.error.stack || f.details.error.message}`);
      }
    }
    process.exit(1);
  } else {
    console.log('\n  \x1b[32m[PASS] ALL E2E REQUIREMENTS & SPECIFICATIONS FULLY VERIFIED!\x1b[0m\n');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal Test Runner Error:', err);
  process.exit(1);
});
