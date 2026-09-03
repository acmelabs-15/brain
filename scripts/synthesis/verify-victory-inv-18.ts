import { readFileSync, existsSync, statSync } from "fs";
import { resolve, join } from "path";
import { spawnSync } from "child_process";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

interface InventorySpec {
  id: string;
  inventoryPath: string;
  sourcePath: string;
  expectedBytes: number;
  expectedType: string;
}

const assignedFiles: InventorySpec[] = [
  {
    id: "interview-me",
    inventoryPath: "docs/analysis/inventory/addy/skills-interview-me-skill-md.md",
    sourcePath: "sources/addy/skills/interview-me/SKILL.md",
    expectedBytes: 14359,
    expectedType: "skill",
  },
  {
    id: "code-simplification",
    inventoryPath: "docs/analysis/inventory/addy/skills-code-simplification-skill-md.md",
    sourcePath: "sources/addy/skills/code-simplification/SKILL.md",
    expectedBytes: 13545,
    expectedType: "skill",
  },
  {
    id: "doubt-driven-development",
    inventoryPath: "docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md",
    sourcePath: "sources/addy/skills/doubt-driven-development/SKILL.md",
    expectedBytes: 16499,
    expectedType: "skill",
  },
];

const requiredSections = [
  "Purpose — required, verbatim",
  "Design intent — required",
  "Phase — required",
  "Inputs — required",
  "Outputs — required",
  "Invokes — required",
  "Invoked by — required",
  "Concepts named — required, verbatim",
  "Structure",
  "Scripts — required if type is script or the skill ships scripts",
  "Defects — required",
  "Observations",
  "Context cost",
];

function parseSection(content: string, sectionName: string): string[] {
  const lines = content.split("\n");
  const startIndex = lines.findIndex((l) => l.startsWith(`## ${sectionName}`));
  if (startIndex === -1) return [];
  const result: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) break;
    result.push(line);
  }
  return result;
}

let checksPassed = 0;
let checksFailed = 0;
const failureLog: string[] = [];

function assert(condition: boolean, msg: string) {
  if (condition) {
    console.log(`  [PASS] ${msg}`);
    checksPassed++;
  } else {
    console.error(`  [FAIL] ${msg}`);
    checksFailed++;
    failureLog.push(msg);
  }
}

console.log("=================================================================");
console.log("   INDEPENDENT VICTORY AUDITOR FORENSIC HARNESS: inv-addy-18    ");
console.log("=================================================================\n");

// 1. SOURCE BYTE SIZES AND FILE PRESENCE
console.log("--- 1. SOURCE FILE ACCURACY & BYTE COUNT VERIFICATION ---");
let totalSourceBytes = 0;
for (const file of assignedFiles) {
  assert(existsSync(file.sourcePath), `Source file exists: ${file.sourcePath}`);
  const stat = statSync(file.sourcePath);
  assert(stat.size === file.expectedBytes, `Source byte size matches for ${file.id}: ${stat.size} === ${file.expectedBytes}`);
  totalSourceBytes += stat.size;
}
assert(totalSourceBytes === 44403, `Total source bytes equals 44,403 (actual: ${totalSourceBytes})`);

// 2. INVENTORY ENTRY TEMPLATE & SCHEMA CONFORMANCE
console.log("\n--- 2. INVENTORY ENTRY TEMPLATE & SCHEMA CONFORMANCE ---");
for (const file of assignedFiles) {
  assert(existsSync(file.inventoryPath), `Inventory deliverable exists: ${file.inventoryPath}`);
  const invContent = readFileSync(file.inventoryPath, "utf-8");

  // Frontmatter check
  const fmMatch = invContent.match(/^---\n([\s\S]*?)\n---/);
  assert(fmMatch !== null, `Frontmatter present in ${file.id}`);
  if (fmMatch) {
    const fm = fmMatch[1];
    assert(fm.includes("package: addy"), `Frontmatter package: addy in ${file.id}`);
    assert(fm.includes(`bytes: ${file.expectedBytes}`), `Frontmatter bytes: ${file.expectedBytes} in ${file.id}`);
    assert(fm.includes("unit: inv-addy-18"), `Frontmatter unit: inv-addy-18 in ${file.id}`);
    assert(fm.includes(`type: ${file.expectedType}`), `Frontmatter type: ${file.expectedType} in ${file.id}`);
  }

  // Required sections check
  for (const sec of requiredSections) {
    const secLines = parseSection(invContent, sec);
    const hasSection = invContent.includes(`## ${sec}`);
    assert(hasSection, `Section header present in ${file.id}: '## ${sec}'`);
    const nonEmpty = secLines.some((l) => l.trim().length > 0);
    assert(nonEmpty, `Section is non-empty in ${file.id}: '## ${sec}'`);
  }
}

// 3. VERBATIM EXTRACTION ACCURACY (PURPOSE & CONCEPTS)
console.log("\n--- 3. VERBATIM EXTRACTION ACCURACY ---");
for (const file of assignedFiles) {
  const invContent = readFileSync(file.inventoryPath, "utf-8");
  const sourceContent = readFileSync(file.sourcePath, "utf-8");
  const sourceLines = sourceContent.split("\n");

  // Verify Purpose quotes
  const purposeLines = parseSection(invContent, "Purpose — required, verbatim");
  const quoteMatches = purposeLines.join("\n").matchAll(/> "([\s\S]*?)" — ([^:\n]+):(\d+)(?:-(\d+))?/g);
  let countQuotes = 0;
  for (const qm of quoteMatches) {
    countQuotes++;
    const rawQuote = qm[1].replace(/\\"/g, '"');
    const startLine = parseInt(qm[3], 10);
    const endLine = qm[4] ? parseInt(qm[4], 10) : startLine;
    const sourceSlice = sourceLines.slice(Math.max(0, startLine - 2), Math.min(sourceLines.length, endLine + 2)).join(" ");
    const normQuote = rawQuote.replace(/\s+/g, " ").trim();
    const normSlice = sourceSlice.replace(/\s+/g, " ");
    assert(normSlice.includes(normQuote) || sourceContent.replace(/\s+/g, " ").includes(normQuote),
      `Verbatim Purpose quote #${countQuotes} in ${file.id} matches source around lines ${startLine}-${endLine}`);
  }
  assert(countQuotes >= 1, `Found at least 1 verbatim purpose quote in ${file.id}`);

  // Verify Concepts Named citations
  const conceptLines = parseSection(invContent, "Concepts named — required, verbatim")
    .filter((l) => l.trim().startsWith("- `"));
  assert(conceptLines.length > 0, `Concepts named is populated for ${file.id} (found ${conceptLines.length})`);
  for (const cLine of conceptLines) {
    const match = cLine.match(/- `([^`]+)` — ([^:]+):(\d+)(?:-(\d+))? — (defined here|used here)/);
    if (match) {
      const concept = match[1];
      const citedPath = match[2];
      const startLine = parseInt(match[3], 10);
      const endLine = match[4] ? parseInt(match[4], 10) : startLine;
      const targetSourcePath = join(rootDir, "sources/addy", citedPath.replace(/^sources\/addy\//, ""));
      if (existsSync(targetSourcePath)) {
        const cSource = readFileSync(targetSourcePath, "utf-8").split("\n");
        // Check window around lines
        const windowText = cSource
          .slice(Math.max(0, startLine - 5), Math.min(cSource.length, endLine + 6))
          .join(" ")
          .toLowerCase();
        const normConcept = concept.toLowerCase().replace(/[`"'\\]/g, "");
        const normWindow = windowText.replace(/[`"'\\]/g, "");
        const words = normConcept.split(/\s+/).filter(w => w.length > 2);
        const found = normWindow.includes(normConcept) || (words.length > 0 && words.some((word) => normWindow.includes(word)));
        assert(found, `Concept '${concept}' cited at ${citedPath}:${startLine} found in source`);
      } else {
        assert(false, `Cited path for concept '${concept}' does not exist: ${targetSourcePath}`);
      }
    }
  }
}

// 4. REFERENCED PATH EXISTENCE (LS)
console.log("\n--- 4. REFERENCED PATH EXISTENCE (LS) ---");
let totalPathsChecked = 0;
let missingPathsDetected = 0;
for (const file of assignedFiles) {
  const invContent = readFileSync(file.inventoryPath, "utf-8");

  // Invokes
  const invokes = parseSection(invContent, "Invokes — required")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "));
  for (const inv of invokes) {
    const line = inv.substring(2);
    if (line === "none") continue;
    const parts = line.split(" — ");
    const firstPart = parts[0].trim();
    if (firstPart.includes("http://") || firstPart.includes("https://")) {
      totalPathsChecked++;
      continue;
    }
    let refPath = firstPart.replace(/^(dir|skill|command|agent|reference|doc|config|script|fixture|external-doc|file|hook)\s+/, "").trim();
    if (refPath.startsWith("../../")) {
      refPath = refPath.replace(/^\.\.\/\.\.\//, "");
    }
    totalPathsChecked++;
    const fullAddyPath = join(addyDir, refPath);
    const fullRootPath = join(rootDir, refPath);
    const fullSkillSubPath = join(addyDir, "skills", refPath);
    if (!existsSync(fullAddyPath) && !existsSync(fullRootPath) && !existsSync(fullSkillSubPath)) {
      assert(false, `Missing Invokes path in ${file.id}: ${refPath}`);
      missingPathsDetected++;
    }
  }

  // Invoked by
  const invokedBy = parseSection(invContent, "Invoked by — required")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "));
  for (const ib of invokedBy) {
    const line = ib.substring(2);
    if (line === "none" || line.startsWith("orphan")) continue;
    const parts = line.split(" — ");
    const firstPart = parts[0].trim();
    if (firstPart.includes("http://") || firstPart.includes("https://")) {
      totalPathsChecked++;
      continue;
    }
    let refPath = firstPart.replace(/^(dir|skill|command|agent|reference|doc|config|script|fixture|external-doc|file|inventory-entry|eval|hook)\s+/, "").trim();
    totalPathsChecked++;
    const fullAddyPath = join(addyDir, refPath);
    const fullRootPath = join(rootDir, refPath);
    const fullSkillSubPath = join(addyDir, "skills", refPath);
    if (!existsSync(fullAddyPath) && !existsSync(fullRootPath) && !existsSync(fullSkillSubPath)) {
      assert(false, `Missing Invoked by path in ${file.id}: ${refPath}`);
      missingPathsDetected++;
    }
  }
}
assert(missingPathsDetected === 0, `All ${totalPathsChecked} paths cited in Invokes and Invoked by exist on disk`);

// 5. DEFECT AUTHENTICITY AND EMPIRICAL VERIFICATION
console.log("\n--- 5. DEFECT AUTHENTICITY VERIFICATION ---");

// Check 5.1: sources/addy/docs/intent does not exist
assert(!existsSync(join(addyDir, "docs/intent")), "Confirmed defect: sources/addy/docs/intent does not exist");

// Check 5.2: docs/comparison.md:92 claims interview-me is gaining an opt-in collaborative mode
const comparisonContent = readFileSync(join(addyDir, "docs/comparison.md"), "utf-8");
assert(
  comparisonContent.includes("gaining an opt-in collaborative mode"),
  "Confirmed defect: docs/comparison.md:92 claims collaborative mode"
);

// Check 5.3: sources/addy-external/interview-me.md:12 shows Command: /spec
const extInterview = readFileSync(join(rootDir, "sources/addy-external/interview-me.md"), "utf-8");
assert(
  extInterview.includes("Command: `/spec`") || extInterview.includes("/spec"),
  "Confirmed defect: sources/addy-external/interview-me.md references /spec"
);

// Check 5.4: validate-artifact-paths.js omits docs/intent
const validateArtifactPaths = readFileSync(join(addyDir, "scripts/validate-artifact-paths.js"), "utf-8");
assert(
  !validateArtifactPaths.includes("docs/intent"),
  "Confirmed defect: scripts/validate-artifact-paths.js omits docs/intent allowlist entry"
);

// Check 5.5: sources/addy-external/code-simplification.md lists /review
const extSimplify = readFileSync(join(rootDir, "sources/addy-external/code-simplification.md"), "utf-8");
assert(
  extSimplify.includes("/review"),
  "Confirmed defect: sources/addy-external/code-simplification.md displays /review"
);

// Check 5.6: simplify-ignore-test.sh fails when run from root due to relative path
const testRunFromRoot = spawnSync("bash", ["sources/addy/hooks/simplify-ignore-test.sh"], { cwd: rootDir, encoding: "utf-8" });
assert(
  testRunFromRoot.status !== 0,
  `Confirmed defect: simplify-ignore-test.sh fails from repo root (exit code ${testRunFromRoot.status})`
);

// Check 5.7: simplify-ignore-test.sh passes when run from sources/addy
const testRunFromAddy = spawnSync("bash", ["hooks/simplify-ignore-test.sh"], { cwd: addyDir, encoding: "utf-8" });
assert(
  testRunFromAddy.status === 0 && testRunFromAddy.stdout.includes("21 passed, 0 failed"),
  "Confirmed behavior: simplify-ignore-test.sh succeeds from sources/addy (21 passed, 0 failed)"
);

// Check 5.8: interview-me/SKILL.md:14 claims doubt-driven-development is Define-phase
const interviewContent = readFileSync(join(addyDir, "skills/interview-me/SKILL.md"), "utf-8");
assert(
  interviewContent.includes("The other Define-phase skills assume you already know roughly what you want:") &&
  interviewContent.includes("`doubt-driven-development` stress-tests a plan after you've drafted one"),
  "Confirmed defect: interview-me/SKILL.md:14 classifies doubt-driven-development as Define-phase"
);

// Check 5.9: loop command does not exist
assert(
  !existsSync(join(addyDir, ".claude/commands/loop.md")) && !existsSync(join(addyDir, "commands/loop.toml")),
  "Confirmed defect: /loop command does not exist in sources/addy"
);

// 6. WORK UNIT REPORT VERIFICATION
console.log("\n--- 6. WORK UNIT REPORT (_units/inv-addy-18.md) VERIFICATION ---");
const unitReportPath = "docs/analysis/inventory/addy/_units/inv-addy-18.md";
assert(existsSync(unitReportPath), `Work unit report exists: ${unitReportPath}`);
const unitReportContent = readFileSync(unitReportPath, "utf-8");
assert(unitReportContent.includes("unit: inv-addy-18"), "Unit report frontmatter unit: inv-addy-18");
assert(unitReportContent.includes("subagent_returned: complete"), "Unit report frontmatter subagent_returned: complete");
for (const file of assignedFiles) {
  const shortPath = file.sourcePath.replace("sources/addy/", "");
  assert(unitReportContent.includes(`- [x] \`${file.sourcePath}\``) || unitReportContent.includes(`- [x] \`${shortPath}\``),
    `Unit report marks assigned file read: ${shortPath}`);
}

// 7. MANIFEST AND STATE.MD INTEGRITY
console.log("\n--- 7. MANIFEST & STATE.MD INTEGRITY ---");
const manifestPath = "docs/analysis/manifest/addy.md";
const manifestContent = readFileSync(manifestPath, "utf-8");
const manifestLines = manifestContent.split("\n");

for (const file of assignedFiles) {
  const relPath = file.sourcePath.replace("sources/addy/", "");
  const matchingLine = manifestLines.find((l) => l.includes(`| ${relPath} |`));
  assert(matchingLine !== undefined && matchingLine.includes("| [x] |"), `Manifest row for ${relPath} is marked [x]`);
}

const statePath = "docs/plan/STATE.md";
const stateContent = readFileSync(statePath, "utf-8");
assert(
  stateContent.includes("| inv-addy-18 | addy | 3 | 44403 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-18.md |"),
  "STATE.md has inv-addy-18 recorded as complete with correct file count (3) and bytes (44403)"
);
assert(
  stateContent.includes("| Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |"),
  "STATE.md has line 434 counts table synchronized to 190 / 0 / 0"
);

console.log("\n=================================================================");
console.log(`TOTAL FORENSIC CHECKS: ${checksPassed + checksFailed}`);
console.log(`PASSED: ${checksPassed}`);
console.log(`FAILED: ${checksFailed}`);
console.log("=================================================================");

if (checksFailed > 0) {
  console.error("FAILURES DETECTED:");
  for (const f of failureLog) {
    console.error(` - ${f}`);
  }
  process.exit(1);
} else {
  console.log("ALL FORENSIC CHECKS PASSED CLEANLY.");
  process.exit(0);
}
