import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const ROOT = "/Users/peterkloss/Dev/ACMElabs/brain-v2";

interface AuditResult {
  passed: boolean;
  phaseA: {
    manifestValid: boolean;
    manifestCheckedCount: number;
    manifestTotalCount: number;
    unitReportValid: boolean;
    assignedFilesCount: number;
    stateValid: boolean;
    errors: string[];
  };
  phaseB: {
    inventoryFilesCount: number;
    schemaValidCount: number;
    noPlaceholders: boolean;
    citationsChecked: number;
    citationsValid: number;
    errors: string[];
  };
  phaseC: {
    scriptTests: Array<{ command: string; cwd: string; expectedExit: number; actualExit: number; passed: boolean }>;
    bunTestPassed: boolean;
    coveragePassed: boolean;
    glossaryLintPassed: boolean;
    errors: string[];
  };
}

const auditResult: AuditResult = {
  passed: true,
  phaseA: {
    manifestValid: true,
    manifestCheckedCount: 0,
    manifestTotalCount: 0,
    unitReportValid: true,
    assignedFilesCount: 0,
    stateValid: true,
    errors: [],
  },
  phaseB: {
    inventoryFilesCount: 0,
    schemaValidCount: 0,
    noPlaceholders: true,
    citationsChecked: 0,
    citationsValid: 0,
    errors: [],
  },
  phaseC: {
    scriptTests: [],
    bunTestPassed: true,
    coveragePassed: true,
    glossaryLintPassed: true,
    errors: [],
  },
};

console.log("=== STARTING VICTORY AUDITOR INDEPENDENT VERIFICATION ===");

// --- PHASE A: TIMELINE & ARTIFACT ANALYSIS ---
console.log("\n[PHASE A] Verifying manifest, unit report, and state tracking...");

// 1. Manifest
const manifestPath = join(ROOT, "docs/analysis/manifest/addy.md");
const manifestContent = readFileSync(manifestPath, "utf-8");
const manifestLines = manifestContent.trim().split("\n").filter(l => l.startsWith("|") && !l.includes("Path | Bytes") && !l.includes("---|---"));
auditResult.phaseA.manifestTotalCount = manifestLines.length;

let checkedCount = 0;
const manifestAssignedInv2: Array<{ path: string; bytes: number; type: string }> = [];

for (let i = 0; i < manifestLines.length; i++) {
  const line = manifestLines[i];
  const parts = line.split("|").map(s => s.trim()).filter(Boolean);
  const path = parts[0];
  const bytes = parseInt(parts[1], 10);
  const type = parts[2];
  const isChecked = parts[3] === "[x]";
  if (isChecked) {
    checkedCount++;
  }
  if (i >= 28 && i < 85) { // rows 29..85 (57 files assigned to inv-addy-2)
    manifestAssignedInv2.push({ path, bytes, type });
    if (!isChecked) {
      auditResult.phaseA.manifestValid = false;
      auditResult.phaseA.errors.push(`Manifest row ${i + 1} (${path}) is not marked [x] in inv-addy-2 range`);
    }
  } else if (i >= 85) {
    if (isChecked) {
      auditResult.phaseA.manifestValid = false;
      auditResult.phaseA.errors.push(`Manifest row ${i + 1} (${path}) should be unchecked [ ]`);
    }
  }
}
auditResult.phaseA.manifestCheckedCount = checkedCount;
console.log(`Manifest addy.md total rows: ${manifestLines.length}, checked rows: ${checkedCount} (expected: 85)`);
if (checkedCount !== 85) {
  auditResult.phaseA.manifestValid = false;
  auditResult.phaseA.errors.push(`Expected 85 checked rows, got ${checkedCount}`);
}

// 2. Unit report
const unitReportPath = join(ROOT, "docs/analysis/inventory/addy/_units/inv-addy-2.md");
if (!existsSync(unitReportPath)) {
  auditResult.phaseA.unitReportValid = false;
  auditResult.phaseA.errors.push("Unit report docs/analysis/inventory/addy/_units/inv-addy-2.md does not exist");
} else {
  const unitContent = readFileSync(unitReportPath, "utf-8");
  if (!unitContent.includes("unit: inv-addy-2")) auditResult.phaseA.errors.push("Unit report missing 'unit: inv-addy-2'");
  if (!unitContent.includes("phase: 1")) auditResult.phaseA.errors.push("Unit report missing 'phase: 1'");
  if (!unitContent.includes("package: addy")) auditResult.phaseA.errors.push("Unit report missing 'package: addy'");
  if (!unitContent.includes("session: 002")) auditResult.phaseA.errors.push("Unit report missing 'session: 002'");
  if (!unitContent.includes("subagent_returned: complete")) auditResult.phaseA.errors.push("Unit report missing 'subagent_returned: complete'");

  const assignedMatches = [...unitContent.matchAll(/- \[x\] sources\/addy\/(.+)/g)].map(m => m[1]);
  auditResult.phaseA.assignedFilesCount = assignedMatches.length;
  console.log(`Unit report assigned files: ${assignedMatches.length} (expected: 57)`);
  if (assignedMatches.length !== 57) {
    auditResult.phaseA.unitReportValid = false;
    auditResult.phaseA.errors.push(`Expected 57 assigned files in unit report, found ${assignedMatches.length}`);
  }

  // Check Outputs produced in unit report
  const outputsMatches = [...unitContent.matchAll(/- (docs\/analysis\/inventory\/addy\/[^\s]+)/g)].map(m => m[1]);
  console.log(`Unit report outputs produced: ${outputsMatches.length} (expected: 57)`);
  if (outputsMatches.length !== 57) {
    auditResult.phaseA.unitReportValid = false;
    auditResult.phaseA.errors.push(`Expected 57 outputs produced in unit report, found ${outputsMatches.length}`);
  }

  // Check coverage self-check checkboxes
  const checkMatches = [...unitContent.matchAll(/- \[x\] .+/g)];
  if (checkMatches.length < 5) {
    auditResult.phaseA.unitReportValid = false;
    auditResult.phaseA.errors.push("Unit report coverage self-check has unchecked boxes");
  }
}

// 3. STATE.md
const statePath = join(ROOT, "docs/plan/STATE.md");
const stateContent = readFileSync(statePath, "utf-8");
if (!stateContent.includes("| inv-addy-2 | addy | 57 | 44728 | complete | 002 | docs/analysis/inventory/addy/_units/inv-addy-2.md |")) {
  auditResult.phaseA.stateValid = false;
  auditResult.phaseA.errors.push("STATE.md does not record inv-addy-2 as complete");
}
if (!stateContent.includes("| Rows inventoried (addy / matt / rjm) | 85 / 0 / 0 |")) {
  auditResult.phaseA.stateValid = false;
  auditResult.phaseA.errors.push("STATE.md does not record 85 rows inventoried for addy");
}

console.log(`Phase A verification: ${auditResult.phaseA.errors.length === 0 ? "PASS" : "FAIL"}`);


// --- PHASE B: INTEGRITY & FORENSIC CHEATING DETECTION ---
console.log("\n[PHASE B] Performing forensic integrity checks across all 57 entries...");

const requiredSections = [
  "## Purpose",
  "## Design intent",
  "## Phase",
  "## Inputs",
  "## Outputs",
  "## Invokes",
  "## Invoked by",
  "## Concepts named",
  "## Structure",
  "## Defects",
  "## Observations",
  "## Context cost",
];

const placeholderPatterns = [
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\bFIXME\b/i,
  /<insert[^>]*>/i,
  /<placeholder[^>]*>/i,
  /<fill[^>]*>/i,
  /lorem ipsum/i
];

const inventoryDir = join(ROOT, "docs/analysis/inventory/addy");
const invFiles = readdirSync(inventoryDir).filter(f => f.endsWith(".md") && !f.startsWith("_"));
auditResult.phaseB.inventoryFilesCount = invFiles.length;
console.log(`Total inventory files in docs/analysis/inventory/addy/: ${invFiles.length} (85 expected)`);

for (const item of manifestAssignedInv2) {
  const relPath = item.path;
  const expectedBytes = item.bytes;
  const expectedType = item.type;
  const sourcePath = join(ROOT, "sources/addy", relPath);

  if (!existsSync(sourcePath)) {
    auditResult.phaseB.errors.push(`Source file does not exist: ${sourcePath}`);
    continue;
  }
  const sourceStat = statSync(sourcePath);
  const sourceContent = readFileSync(sourcePath, "utf-8");
  const sourceLines = sourceContent.split("\n");

  // Find matching inventory entry
  let matchedInvFile: string | null = null;
  let matchedInvContent: string = "";

  for (const invFile of invFiles) {
    const invContent = readFileSync(join(inventoryDir, invFile), "utf-8");
    if (invContent.includes(`path: ${relPath}`) || invContent.includes(`path: sources/addy/${relPath}`)) {
      matchedInvFile = invFile;
      matchedInvContent = invContent;
      break;
    }
  }

  if (!matchedInvFile) {
    auditResult.phaseB.errors.push(`No inventory file found for source path: ${relPath}`);
    continue;
  }

  auditResult.phaseB.schemaValidCount++;

  // 1. Frontmatter checks
  if (!matchedInvContent.includes("package: addy")) {
    auditResult.phaseB.errors.push(`${matchedInvFile}: Missing 'package: addy'`);
  }
  if (!matchedInvContent.includes("unit: inv-addy-2")) {
    auditResult.phaseB.errors.push(`${matchedInvFile}: Missing 'unit: inv-addy-2'`);
  }
  if (!matchedInvContent.includes(`bytes: ${expectedBytes}`)) {
    auditResult.phaseB.errors.push(`${matchedInvFile}: Byte count mismatch (expected ${expectedBytes})`);
  }
  if (!matchedInvContent.includes(`type: ${expectedType}`)) {
    auditResult.phaseB.errors.push(`${matchedInvFile}: Type mismatch (expected ${expectedType})`);
  }

  // 2. Section presence and non-emptiness
  for (let s = 0; s < requiredSections.length; s++) {
    const sec = requiredSections[s];
    const secIdx = matchedInvContent.indexOf(sec);
    if (secIdx === -1) {
      auditResult.phaseB.errors.push(`${matchedInvFile}: Missing required section '${sec}'`);
    } else {
      const nextSec = s < requiredSections.length - 1 ? requiredSections[s + 1] : "```";
      const nextSecIdx = matchedInvContent.indexOf(nextSec, secIdx + sec.length);
      const body = (nextSecIdx !== -1 ? matchedInvContent.substring(secIdx + sec.length, nextSecIdx) : matchedInvContent.substring(secIdx + sec.length)).trim();
      if (body.length === 0) {
        auditResult.phaseB.errors.push(`${matchedInvFile}: Empty body in required section '${sec}'`);
      }
    }
  }

  // 3. Placeholder checks
  for (const pattern of placeholderPatterns) {
    if (pattern.test(matchedInvContent)) {
      auditResult.phaseB.noPlaceholders = false;
      auditResult.phaseB.errors.push(`${matchedInvFile}: Matched placeholder pattern ${pattern}`);
    }
  }

  // 4. Citation verification
  const citationMatches = [...matchedInvContent.matchAll(/(?:—|at|line|lines)\s+(?:sources\/addy\/)?([^:\s\n`\(\)]+):(\d+)(?:-(\d+))?/g)];
  for (const cm of citationMatches) {
    const citedPath = cm[1];
    const startLine = parseInt(cm[2], 10);
    const endLine = cm[3] ? parseInt(cm[3], 10) : startLine;

    // If citation is targeting the current source file or another source file
    let targetSourceLines = sourceLines;
    if (citedPath !== relPath && existsSync(join(ROOT, "sources/addy", citedPath))) {
      targetSourceLines = readFileSync(join(ROOT, "sources/addy", citedPath), "utf-8").split("\n");
    }

    auditResult.phaseB.citationsChecked++;
    if (startLine > 0 && startLine <= targetSourceLines.length && endLine >= startLine && endLine <= targetSourceLines.length) {
      auditResult.phaseB.citationsValid++;
    } else {
      auditResult.phaseB.errors.push(`${matchedInvFile}: Citation ${citedPath}:${startLine}${cm[3] ? "-" + endLine : ""} out of bounds (file has ${targetSourceLines.length} lines)`);
    }
  }
}

console.log(`Schema verified: ${auditResult.phaseB.schemaValidCount}/57 files`);
console.log(`Citations verified: ${auditResult.phaseB.citationsValid}/${auditResult.phaseB.citationsChecked} valid citations`);
console.log(`Phase B verification: ${auditResult.phaseB.errors.length === 0 ? "PASS" : "FAIL"}`);


// --- PHASE C: INDEPENDENT TEST EXECUTION ---
console.log("\n[PHASE C] Executing canonical and fixture test commands...");

const testCommands = [
  { cmd: "bun test", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun run scripts/synthesis/glossary-lint.ts", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun run sources/addy/scripts/run-evals.js", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun run sources/addy/scripts/run-evals.js --min-rank1 80", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun run sources/addy/scripts/run-evals.js --behavioral test-driven-development --dry-run", cwd: ROOT, expectedExit: 0 },
  { cmd: "node --test sources/addy/evals/fixtures/debugging-and-error-recovery/pagination.test.js", cwd: ROOT, expectedExit: 1 },
  { cmd: "npm test", cwd: join(ROOT, "sources/addy/evals/fixtures/test-driven-development"), expectedExit: 0 },
  { cmd: "bun test reports.test.js", cwd: join(ROOT, "sources/addy/evals/fixtures/incremental-implementation"), expectedExit: 0 },
  { cmd: "node --check sources/addy/evals/fixtures/ci-cd-and-automation/src/slug.js", cwd: ROOT, expectedExit: 0 },
  { cmd: "node --test sources/addy/evals/fixtures/ci-cd-and-automation/test/slug.test.js", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun sources/addy/evals/fixtures/incremental-implementation-pressure/draft-export.js", cwd: ROOT, expectedExit: 0 },
  { cmd: "bun test webhook.test.js", cwd: join(ROOT, "sources/addy/evals/fixtures/security-and-hardening"), expectedExit: 0 },
  { cmd: "bun test config-parser.test.js", cwd: join(ROOT, "sources/addy/evals/fixtures/code-simplification"), expectedExit: 0 },
  { cmd: "bun run sources/addy/evals/fixtures/performance-optimization/benchmark.js", cwd: ROOT, expectedExit: 0 },
  { cmd: "python3 -m unittest", cwd: join(ROOT, "sources/addy/evals/fixtures/test-driven-development-ecosystem"), expectedExit: 0 },
  { cmd: "bun test app.test.js", cwd: join(ROOT, "sources/addy/evals/fixtures/git-workflow-and-versioning"), expectedExit: 0 },
  { cmd: "git apply --check git-workflow-and-versioning/.eval/working-tree.patch", cwd: join(ROOT, "sources/addy/evals/fixtures"), expectedExit: 0 },
];

for (const tc of testCommands) {
  try {
    const stdout = execSync(tc.cmd, { cwd: tc.cwd, stdio: ["pipe", "pipe", "pipe"] });
    const actualExit = 0;
    const passed = actualExit === tc.expectedExit;
    auditResult.phaseC.scriptTests.push({ command: tc.cmd, cwd: tc.cwd, expectedExit: tc.expectedExit, actualExit, passed });
    if (!passed) {
      auditResult.phaseC.errors.push(`Command '${tc.cmd}' (cwd: ${tc.cwd}) expected exit ${tc.expectedExit} but exited 0`);
    }
  } catch (err: any) {
    const actualExit = err.status !== undefined ? err.status : 1;
    const passed = actualExit === tc.expectedExit;
    auditResult.phaseC.scriptTests.push({ command: tc.cmd, cwd: tc.cwd, expectedExit: tc.expectedExit, actualExit, passed });
    if (!passed) {
      auditResult.phaseC.errors.push(`Command '${tc.cmd}' (cwd: ${tc.cwd}) expected exit ${tc.expectedExit} but got ${actualExit}: ${err.message}`);
    }
  }
}

console.log(`Executed ${auditResult.phaseC.scriptTests.length} independent test commands. All passed: ${auditResult.phaseC.errors.length === 0}`);

const allErrors = [
  ...auditResult.phaseA.errors,
  ...auditResult.phaseB.errors,
  ...auditResult.phaseC.errors,
];

auditResult.passed = allErrors.length === 0;

console.log("\n================ VICTORY AUDIT SUMMARY ================");
console.log(`OVERALL VERDICT: ${auditResult.passed ? "VICTORY CONFIRMED" : "VICTORY REJECTED"}`);
console.log(`PHASE A (Timeline & Artifacts): ${auditResult.phaseA.errors.length === 0 ? "PASS" : "FAIL"}`);
console.log(`PHASE B (Integrity & Forensics): ${auditResult.phaseB.errors.length === 0 ? "PASS" : "FAIL"}`);
console.log(`PHASE C (Independent Test Execution): ${auditResult.phaseC.errors.length === 0 ? "PASS" : "FAIL"}`);
console.log(`TOTAL DISCREPANCIES / ERRORS: ${allErrors.length}`);
if (allErrors.length > 0) {
  console.log("ERRORS:", allErrors);
}
console.log("========================================================\n");
