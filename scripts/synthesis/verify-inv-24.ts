import { readFileSync, existsSync, statSync } from "fs";
import { resolve, join } from "path";
import { spawnSync } from "child_process";

const rootDir = resolve(".");

console.log("=================================================================");
console.log("  VERIFICATION HARNESS: inv-addy-24 (Iteration 2 Deliverables)  ");
console.log("=================================================================\n");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures: string[] = [];

function check(desc: string, condition: boolean, detail?: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${desc}`);
  } else {
    failedChecks++;
    const msg = `[FAIL] ${desc}${detail ? ` -> ${detail}` : ""}`;
    console.error(msg);
    failures.push(msg);
  }
}

// 1. Source file verification
const sourcePath = join(rootDir, "sources/addy-external/api-and-interface-design.md");
check("Source file exists: sources/addy-external/api-and-interface-design.md", existsSync(sourcePath));
const sourceStat = existsSync(sourcePath) ? statSync(sourcePath) : null;
check("Source file byte size is 26,413", sourceStat?.size === 26413, `actual: ${sourceStat?.size}`);

// 2. Deliverable 1: Inventory entry
const invPath = join(rootDir, "docs/analysis/inventory/addy/external-api-and-interface-design-md.md");
check("Inventory entry exists", existsSync(invPath));
const invContent = existsSync(invPath) ? readFileSync(invPath, "utf-8") : "";
check("Inventory entry has frontmatter", invContent.startsWith("---\n"));
check("Inventory entry contains unit: inv-addy-24", invContent.includes("unit: inv-addy-24"));
check("Inventory entry contains phase addy:Build", invContent.includes("addy:Build"));
check("Inventory entry has non-trivial size (>20KB)", Buffer.byteLength(invContent, "utf-8") > 20000);

// 3. Deliverable 2: Unit report
const unitPath = join(rootDir, "docs/analysis/inventory/addy/_units/inv-addy-24.md");
check("Unit report exists", existsSync(unitPath));
const unitContent = existsSync(unitPath) ? readFileSync(unitPath, "utf-8") : "";
check("Unit report marked complete", unitContent.includes("subagent_returned: complete"));

// Verify coverage.ts live output matching unit report line 31
const coverageProc = spawnSync("bun", ["run", "scripts/synthesis/coverage.ts"], {
  cwd: rootDir,
  encoding: "utf-8",
});
const coverageStdout = (coverageProc.stdout || "").trim();
const uncheckedMatch = coverageStdout.match(/Unchecked manifest rows:\s*(\d+)/);
const uncheckedCount = uncheckedMatch ? uncheckedMatch[1] : "";
check("coverage.ts executed and reported unchecked count", !!uncheckedCount, `stdout: ${coverageStdout}`);

const expectedCoverageLine = `- Synthesis Coverage Check — \`bun run scripts/synthesis/coverage.ts\` — Exit code: \`1\` (Output: Unchecked manifest rows: ${uncheckedCount}, Empty required inventory fields: 0)`;
check(
  `Unit report line 31 matches live coverage.ts output (${uncheckedCount} unchecked rows)`,
  unitContent.includes(expectedCoverageLine),
  `expected line: ${expectedCoverageLine}`
);

// 4. Deliverable 3: Manifest row 199 marked [x]
const manifestPath = join(rootDir, "docs/analysis/manifest/addy.md");
check("Manifest exists", existsSync(manifestPath));
const manifestContent = existsSync(manifestPath) ? readFileSync(manifestPath, "utf-8") : "";
const manifestLines = manifestContent.split("\n");
const row199 = manifestLines[198]; // 0-indexed line 199 is index 198
const expectedRow199 = "| ../addy-external/api-and-interface-design.md | 26413 | external-doc | [x] |";
check(
  "Manifest line 199 is marked [x]",
  row199 === expectedRow199,
  `actual line 199: "${row199}"`
);

const checkedCountInManifest = (manifestContent.match(/\|\s*\[x\]\s*\|/g) || []).length;
check(`Manifest has 198 checked rows`, checkedCountInManifest === 198, `actual: ${checkedCountInManifest}`);

// 5. Deliverable 4: STATE.md
const statePath = join(rootDir, "docs/plan/STATE.md");
check("STATE.md exists", existsSync(statePath));
const stateContent = existsSync(statePath) ? readFileSync(statePath, "utf-8") : "";
const stateLines = stateContent.split("\n");
const line88 = stateLines[87]; // 0-indexed line 88 is index 87
const expectedLine88 = "| inv-addy-24 | addy | 1 | 26413 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-24.md |";
check("STATE.md line 88 marks inv-addy-24 as complete", line88 === expectedLine88, `actual line 88: "${line88}"`);

const ledgerMatch = stateContent.match(/\|\s*Rows inventoried \(addy \/ matt \/ rjm\)\s*\|\s*(\d+)\s*\/\s*0\s*\/\s*0\s*\|/);
const ledgerAddyCount = ledgerMatch ? parseInt(ledgerMatch[1], 10) : -1;
check(
  "STATE.md ledger count matches checked manifest rows (198)",
  ledgerAddyCount === checkedCountInManifest,
  `ledger: ${ledgerAddyCount}, manifest: ${checkedCountInManifest}`
);

console.log("\n=================================================================");
console.log(`TOTAL CHECKS: ${totalChecks} | PASSED: ${passedChecks} | FAILED: ${failedChecks}`);
console.log("=================================================================\n");

if (failedChecks > 0) {
  console.error("FAILURES ENCOUNTERED:");
  failures.forEach((f) => console.error(f));
  process.exit(1);
} else {
  console.log("ALL DELIVERABLES AND SYNCHRONIZATION CHECKS PASSED!");
  process.exit(0);
}
