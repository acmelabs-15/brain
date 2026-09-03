import { readFileSync, statSync, existsSync } from "fs";
import { resolve, join } from "path";
import { createHash } from "crypto";
import { spawnSync } from "child_process";

const PROJECT_ROOT = resolve(__dirname, "../..");
const SOURCE_FILE = join(PROJECT_ROOT, "sources/addy-external/api-and-interface-design.md");
const INVENTORY_FILE = join(PROJECT_ROOT, "docs/analysis/inventory/addy/external-api-and-interface-design-md.md");
const UNIT_FILE = join(PROJECT_ROOT, "docs/analysis/inventory/addy/_units/inv-addy-24.md");
const MANIFEST_FILE = join(PROJECT_ROOT, "docs/analysis/manifest/addy.md");
const STATE_FILE = join(PROJECT_ROOT, "docs/plan/STATE.md");

interface CheckResult {
  category: string;
  name: string;
  passed: boolean;
  details?: string;
}

const results: CheckResult[] = [];

function check(category: string, name: string, condition: boolean, details?: string) {
  results.push({ category, name, passed: condition, details });
  if (condition) {
    console.log(`[PASS] [${category}] ${name}`);
  } else {
    console.error(`[FAIL] [${category}] ${name}${details ? ` -> ${details}` : ""}`);
  }
}

console.log("=== EMPIRICAL CHALLENGER 1 ADVERSARIAL TEST SUITE (inv-addy-24) ===\n");

// 1. Source file verification
console.log("--- Category 1: Target Source File Verification ---");
check("Source", "File exists", existsSync(SOURCE_FILE), SOURCE_FILE);
const sourceRaw = readFileSync(SOURCE_FILE);
const sourceText = sourceRaw.toString("utf-8");
const sourceBytes = sourceRaw.byteLength;
check("Source", "Byte length matches 26,413", sourceBytes === 26413, `Actual: ${sourceBytes}`);
const sourceLines = sourceText.split("\n");
check("Source", "Line count matches 20", sourceLines.length === 20, `Actual: ${sourceLines.length}`);
const sourceSha256 = createHash("sha256").update(sourceRaw).digest("hex");
console.log(`Source SHA-256: ${sourceSha256}`);

// 2. Deliverable files existence & byte sizes
console.log("\n--- Category 2: Deliverable Files & Byte Counts ---");
check("Deliverables", "Inventory entry exists", existsSync(INVENTORY_FILE), INVENTORY_FILE);
const invRaw = readFileSync(INVENTORY_FILE);
const invText = invRaw.toString("utf-8");
const invBytes = invRaw.byteLength;
console.log(`Inventory entry actual bytes: ${invBytes}`);

check("Deliverables", "Unit report exists", existsSync(UNIT_FILE), UNIT_FILE);
const unitRaw = readFileSync(UNIT_FILE);
const unitText = unitRaw.toString("utf-8");
const unitBytes = unitRaw.byteLength;
console.log(`Unit report actual bytes: ${unitBytes}`);

// Check byte counts claimed in unit report vs actual
// Claimed:
// - `docs/analysis/inventory/addy/external-api-and-interface-design-md.md` (23,192 bytes)
// - `docs/analysis/inventory/addy/_units/inv-addy-24.md` (6,546 bytes)
check("Unit Report Claims", "Inventory entry byte size claim matches actual", invBytes === 23192, `Claimed: 23192, Actual: ${invBytes}`);
check("Unit Report Claims", "Unit report byte size claim matches actual", unitBytes === 6546, `Claimed: 6546, Actual: ${unitBytes}`);

// 3. Manifest Verification
console.log("\n--- Category 3: Manifest Verification ---");
const manifestText = readFileSync(MANIFEST_FILE, "utf-8");
const manifestLines = manifestText.split("\n");
const row199 = manifestLines[198]; // 0-indexed line 198 is 1-indexed line 199
console.log(`Line 199 in manifest: "${row199}"`);
check("Manifest", "Manifest row 199 contains api-and-interface-design.md", row199?.includes("../addy-external/api-and-interface-design.md") ?? false, row199);
check("Manifest", "Manifest row 199 has byte count 26413", row199?.includes("26413") ?? false, row199);
check("Manifest", "Manifest row 199 has type external-doc", row199?.includes("external-doc") ?? false, row199);
check("Manifest", "CRITICAL: Manifest row 199 is marked [x]", row199?.includes("[x]") ?? false, `Actual row 199: "${row199}"`);

// 4. STATE.md Verification
console.log("\n--- Category 4: STATE.md Verification ---");
const stateText = readFileSync(STATE_FILE, "utf-8");
const stateUnitMatch = stateText.match(/\|\s*inv-addy-24\s*\|\s*addy\s*\|\s*1\s*\|\s*26413\s*\|\s*(\w+)\s*\|\s*(\w+)\s*\|\s*([^|]+)\s*\|/);
check("STATE.md", "Unit inv-addy-24 entry exists in STATE.md", stateUnitMatch !== null);
if (stateUnitMatch) {
  const [_, status, session, outputPath] = stateUnitMatch;
  check("STATE.md", "Status is complete", status.trim() === "complete", `Actual: "${status.trim()}"`);
  check("STATE.md", "Session is 007", session.trim() === "007", `Actual: "${session.trim()}"`);
  check("STATE.md", "Output path matches unit report", outputPath.trim() === "docs/analysis/inventory/addy/_units/inv-addy-24.md", `Actual: "${outputPath.trim()}"`);
}

// Check ledger count in STATE.md vs actual manifest checked count
const checkedAddyInManifest = (manifestText.match(/\|\s*\[x\]\s*\|/g) || []).length;
console.log(`Actual checked rows in docs/analysis/manifest/addy.md: ${checkedAddyInManifest}`);
const stateLedgerMatch = stateText.match(/\|\s*Rows inventoried \(addy \/ matt \/ rjm\)\s*\|\s*(\d+)\s*\/\s*(\d+)\s*\/\s*(\d+)\s*\|/);
check("STATE.md", "STATE ledger contains Rows inventoried row", stateLedgerMatch !== null);
if (stateLedgerMatch) {
  const claimedAddyInventoried = parseInt(stateLedgerMatch[1], 10);
  console.log(`Claimed Rows inventoried (addy) in STATE.md: ${claimedAddyInventoried}`);
  check("STATE.md", "STATE ledger claimed count matches actual manifest checked rows", claimedAddyInventoried === checkedAddyInManifest, `Claimed in STATE.md: ${claimedAddyInventoried}, Actual in manifest: ${checkedAddyInManifest}`);
}

// 5. Verbatim Quotes in Inventory Entry Verification
console.log("\n--- Category 5: Verbatim Quote Verification (R3) ---");

// Helper to get lines from range e.g. "1, 5" or "1" or "13-14"
function getLinesFromCitation(citation: string): number[] {
  const lines: number[] = [];
  const parts = citation.split(",").map(s => s.trim());
  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(n => parseInt(n.trim(), 10));
      for (let i = start; i <= end; i++) lines.push(i);
    } else {
      const num = parseInt(part, 10);
      if (!isNaN(num)) lines.push(num);
    }
  }
  return lines;
}

// Verify Section: Purpose
const purposeQuotes = [
  {
    desc: "Primary purpose",
    quote: "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules.",
    citation: "1, 5"
  },
  {
    desc: "Additional triggering purpose",
    quote: "Designing APIs, module boundaries, or public interfaces.",
    citation: "5"
  },
  {
    desc: "Sidebar summary",
    quote: "Write the code in thin, tested vertical slices.",
    citation: "12"
  },
  {
    desc: "Global package tagline",
    quote: "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle.",
    citation: "13-14"
  }
];

for (const pq of purposeQuotes) {
  const lineNums = getLinesFromCitation(pq.citation);
  // Check if quote is present in the source text
  const inSource = sourceText.includes(pq.quote) || sourceText.replace(/\s+/g, " ").includes(pq.quote.replace(/\s+/g, " "));
  check("Verbatim Quote", `${pq.desc}: present in source`, inSource, `Quote: "${pq.quote.slice(0, 50)}..."`);

  // Check if quote appears in the cited line(s)
  let inCitedLines = false;
  if (lineNums.length === 1) {
    const lText = sourceLines[lineNums[0] - 1] || "";
    inCitedLines = lText.includes(pq.quote);
  } else {
    // Check either across joined lines or in any of the cited lines
    const combinedCited = lineNums.map(n => sourceLines[n - 1] || "").join("\n");
    inCitedLines = combinedCited.includes(pq.quote) || combinedCited.replace(/\s+/g, " ").includes(pq.quote.replace(/\s+/g, " "));
    if (!inCitedLines) {
      // maybe it's in each of the cited lines individually (like line 1 and line 5)
      inCitedLines = lineNums.some(n => (sourceLines[n - 1] || "").includes(pq.quote));
    }
  }
  check("Line Citation", `${pq.desc}: appears on cited line(s) ${pq.citation}`, inCitedLines, `Citation: ${pq.citation}`);
}

// 6. Section 6: Concepts named verification
console.log("\n--- Category 6: Concepts Named Citations Verification ---");
// Parse all items in "## Concepts named — required, verbatim"
const conceptsNamedSection = invText.split("## Concepts named — required, verbatim")[1]?.split("## Structure")[0] || "";
const conceptLines = conceptsNamedSection.split("\n").filter(l => l.trim().startsWith("- `"));

console.log(`Total concepts named to verify: ${conceptLines.length}`);

for (const cLine of conceptLines) {
  // Format: - `concept` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
  const match = cLine.match(/- `([^`]+)`\s*—\s*\.\.\/addy-external\/api-and-interface-design\.md:([0-9,\s-]+)\s*—\s*(.*)/);
  if (!match) {
    check("Concepts Parsing", `Parse concept line: ${cLine.slice(0, 40)}...`, false, `Could not parse: "${cLine}"`);
    continue;
  }
  const [_, concept, citation, usage] = match;
  const lineNums = getLinesFromCitation(citation);

  // Check concept presence in source
  const inSource = sourceText.includes(concept);
  check("Concept Existence", `Concept '${concept}' in source`, inSource, `Concept: "${concept}"`);

  // Check citation lines: verify that EACH cited line actually contains the concept
  for (const ln of lineNums) {
    const lContent = sourceLines[ln - 1] || "";
    const hasConcept = lContent.includes(concept);
    check("Concept Line Citation", `Concept '${concept}' on line ${ln}`, hasConcept, `Line ${ln} content preview: "${lContent.slice(0, 80)}..."`);
  }
}

// 7. Inputs, Outputs, Invokes citations verification
console.log("\n--- Category 7: Inputs, Outputs, Invokes Citations Verification ---");

// Check all citations of the form `../addy-external/api-and-interface-design.md:<lines>` in the inventory entry
const citationRegex = /([^\n]+)—\s*\.\.\/addy-external\/api-and-interface-design\.md:([0-9,\s-]+)/g;
let m: RegExpExecArray | null;
let citationCount = 0;
while ((m = citationRegex.exec(invText)) !== null) {
  citationCount++;
  const [fullMatch, textBefore, citation] = m;
  // If it's a concept line or purpose quote, already checked, but let's check general citations too
  const lineNums = getLinesFromCitation(citation);
  for (const ln of lineNums) {
    check("Citation Bounds", `Line number ${ln} <= 20`, ln >= 1 && ln <= 20, `Cited: ${ln}`);
  }
}
console.log(`Total line citations validated: ${citationCount}`);

// 8. Test Runner Executions & Linters
console.log("\n--- Category 8: External Validation & Linters ---");

// Run explorer's verify-inv-addy-24.ts
const expTest = spawnSync("bun", ["run", join(PROJECT_ROOT, ".agents/explorer_inv_addy_24_3/verify-inv-addy-24.ts")], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
check("Test Execution", "explorer verify-inv-addy-24.ts exits 0", expTest.status === 0, `Status: ${expTest.status}, Stderr: ${expTest.stderr}`);

// Run glossary-lint.ts
const glossTest = spawnSync("bun", ["run", join(PROJECT_ROOT, "scripts/synthesis/glossary-lint.ts")], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
check("Linter", "glossary-lint.ts exits 0", glossTest.status === 0, `Status: ${glossTest.status}, Stderr: ${glossTest.stderr}`);

// Run coverage.ts
const covTest = spawnSync("bun", ["run", join(PROJECT_ROOT, "scripts/synthesis/coverage.ts")], {
  cwd: PROJECT_ROOT,
  encoding: "utf-8",
});
console.log(`coverage.ts status: ${covTest.status}`);
console.log(`coverage.ts stdout: ${covTest.stdout.trim()}`);
const emptyFields = covTest.stdout.includes("Empty required inventory fields: 0");
check("Coverage", "Zero empty required inventory fields", emptyFields, covTest.stdout.trim());

// Summary
console.log("\n=== CHALLENGER SUMMARY ===");
const total = results.length;
const passed = results.filter(r => r.passed).length;
const failed = results.filter(r => !r.passed).length;
console.log(`Total checks: ${total}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed > 0) {
  console.log("\nFAILED CHECKS:");
  for (const f of results.filter(r => !r.passed)) {
    console.log(`- [${f.category}] ${f.name} -> ${f.details || "Failed"}`);
  }
}
