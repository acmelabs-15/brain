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
    id: "git-workflow-and-versioning",
    inventoryPath: "docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md",
    sourcePath: "sources/addy/skills/git-workflow-and-versioning/SKILL.md",
    expectedBytes: 14063,
    expectedType: "skill",
  },
  {
    id: "documentation-and-adrs",
    inventoryPath: "docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md",
    sourcePath: "sources/addy/skills/documentation-and-adrs/SKILL.md",
    expectedBytes: 9782,
    expectedType: "skill",
  },
  {
    id: "agents-md",
    inventoryPath: "docs/analysis/inventory/addy/agents-md.md",
    sourcePath: "sources/addy/AGENTS.md",
    expectedBytes: 5386,
    expectedType: "doc",
  },
  {
    id: "codex-plugin-plugin-json",
    inventoryPath: "docs/analysis/inventory/addy/codex-plugin-plugin-json.md",
    sourcePath: "sources/addy/.codex-plugin/plugin.json",
    expectedBytes: 1119,
    expectedType: "config",
  },
  {
    id: "claude-md",
    inventoryPath: "docs/analysis/inventory/addy/claude-md.md",
    sourcePath: "sources/addy/CLAUDE.md",
    expectedBytes: 4094,
    expectedType: "doc",
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
console.log("   INDEPENDENT VICTORY AUDITOR FORENSIC HARNESS: inv-addy-20    ");
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
assert(totalSourceBytes === 34444, `Total source bytes equals 34,444 (actual: ${totalSourceBytes})`);

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
    assert(fm.includes("unit: inv-addy-20"), `Frontmatter unit: inv-addy-20 in ${file.id}`);
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

  // Verify Purpose
  const purposeMatch = invContent.match(/## Purpose — required, verbatim\n> ([\s\S]*?) — ([^:\n]+):(\d+)(?:-(\d+))?/);
  assert(purposeMatch !== null, `Purpose block format in ${file.id}`);
  if (purposeMatch) {
    const rawQuote = purposeMatch[1];
    // Clean markdown blockquote styling to compare verbatim text
    const cleanQuote = rawQuote
      .split("\n")
      .map((l) => l.replace(/^>\s*/, "").trim())
      .join(" ")
      .replace(/^"|"$/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const lineStart = parseInt(purposeMatch[3], 10);
    const lineEnd = purposeMatch[4] ? parseInt(purposeMatch[4], 10) : lineStart;
    const sourceSlice = sourceLines.slice(lineStart - 1, lineEnd).join(" ").replace(/\s+/g, " ");
    const matchesVerbatim = sourceSlice.includes(cleanQuote) || sourceContent.replace(/\s+/g, " ").includes(cleanQuote);
    assert(matchesVerbatim, `Verbatim Purpose quote in ${file.id} matches lines ${lineStart}-${lineEnd}`);
  }

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
        // Check window around lines, stripping punctuation and quotes
        const windowText = cSource
          .slice(Math.max(0, startLine - 5), Math.min(cSource.length, endLine + 6))
          .join(" ")
          .toLowerCase();
        const normConcept = concept.toLowerCase().replace(/[`"'\\]/g, "");
        const normWindow = windowText.replace(/[`"'\\]/g, "");
        const found = normWindow.includes(normConcept) || normConcept.split(/\s+/).every((word) => normWindow.includes(word));
        if (!found) {
          assert(false, `Concept '${concept}' cited at ${citedPath}:${startLine} not found in nearby source lines`);
        }
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
    let refPath = firstPart.replace(/^(dir|skill|command|agent|reference|doc|config|script|fixture|external-doc|file)\s+/, "").trim();
    totalPathsChecked++;
    const fullAddyPath = join(addyDir, refPath);
    const fullRootPath = join(rootDir, refPath);
    if (!existsSync(fullAddyPath) && !existsSync(fullRootPath)) {
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
    let refPath = firstPart.replace(/^(dir|skill|command|agent|reference|doc|config|script|fixture|external-doc|file)\s+/, "").trim();
    totalPathsChecked++;
    const fullAddyPath = join(addyDir, refPath);
    const fullRootPath = join(rootDir, refPath);
    if (!existsSync(fullAddyPath) && !existsSync(fullRootPath)) {
      assert(false, `Missing Invoked by path in ${file.id}: ${refPath}`);
      missingPathsDetected++;
    }
  }
}
assert(missingPathsDetected === 0, `All ${totalPathsChecked} paths cited in Invokes and Invoked by exist on disk`);

// 5. DEFECT AUTHENTICITY AND EMPIRICAL VERIFICATION
console.log("\n--- 5. DEFECT AUTHENTICITY VERIFICATION ---");

// Check 5.1: sources/addy/CHANGELOG.md does not exist
assert(!existsSync(join(addyDir, "CHANGELOG.md")), "Confirmed defect: sources/addy/CHANGELOG.md does not exist");

// Check 5.2: sources/addy/docs/decisions does not exist
assert(!existsSync(join(addyDir, "docs/decisions")), "Confirmed defect: sources/addy/docs/decisions directory does not exist");

// Check 5.3: .codex-plugin/plugin.json claims 24 workflows vs 25 skills
const codexJson = JSON.parse(readFileSync(join(addyDir, ".codex-plugin/plugin.json"), "utf-8"));
assert(
  codexJson.interface?.longDescription?.includes("24 production engineering workflows") === true,
  "Confirmed defect: .codex-plugin/plugin.json claims 24 workflows"
);
const skillDirs = spawnSync("find", ["sources/addy/skills", "-name", "SKILL.md"], { encoding: "utf-8" })
  .stdout.trim().split("\n").filter((s) => s.length > 0);
assert(skillDirs.length === 25, `Confirmed defect: exactly 25 skills in sources/addy/skills (actual: ${skillDirs.length})`);

// Check 5.4: CLAUDE.md:21-26 lists 23 skills, omitting 2
const claudeMdContent = readFileSync(join(addyDir, "CLAUDE.md"), "utf-8");
assert(!claudeMdContent.includes("constraint-driven-development") && !claudeMdContent.includes("using-agent-skills"),
  "Confirmed defect: CLAUDE.md omits constraint-driven-development and using-agent-skills from Skills by Phase");

// Check 5.5: CLAUDE.md lists 8 slash commands, omitting /constraints
assert(!claudeMdContent.includes("constraints.md") && !claudeMdContent.includes("/constraints"),
  "Confirmed defect: CLAUDE.md omits /constraints command");

// Check 5.6: AGENTS.md contradiction with docs/antigravity-setup.md:107
const antigravityDoc = readFileSync(join(addyDir, "docs/antigravity-setup.md"), "utf-8");
assert(antigravityDoc.includes("copy or link `AGENTS.md` into the root of your workspace"),
  "Confirmed defect: docs/antigravity-setup.md instructs copying AGENTS.md to workspace root");
const agentsMd = readFileSync(join(addyDir, "AGENTS.md"), "utf-8");
assert(agentsMd.includes("It is not meant to be copied into other projects"),
  "Confirmed defect: AGENTS.md explicitly prohibits copying into other projects");

// Check 5.7: Node CommonJS error in ESM root for run-evals.js
const nodeRun = spawnSync("node", ["scripts/run-evals.js"], { cwd: addyDir, encoding: "utf-8" });
assert(nodeRun.status === 1 && nodeRun.stderr.includes("ReferenceError: require is not defined in ES module scope"),
  "Confirmed defect: node scripts/run-evals.js fails under Node with require is not defined in ES module scope");

// 6. WORK UNIT REPORT VERIFICATION
console.log("\n--- 6. WORK UNIT REPORT (_units/inv-addy-20.md) VERIFICATION ---");
const unitReportPath = "docs/analysis/inventory/addy/_units/inv-addy-20.md";
assert(existsSync(unitReportPath), `Work unit report exists: ${unitReportPath}`);
const unitReportContent = readFileSync(unitReportPath, "utf-8");
assert(unitReportContent.includes("unit: inv-addy-20"), "Unit report frontmatter unit: inv-addy-20");
assert(unitReportContent.includes("subagent_returned: complete"), "Unit report frontmatter subagent_returned: complete");
for (const file of assignedFiles) {
  const shortPath = file.sourcePath.replace("sources/addy/", "");
  assert(unitReportContent.includes(`- [x] \`${shortPath}\``), `Unit report marks assigned file read: ${shortPath}`);
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
  stateContent.includes("| inv-addy-20 | addy | 5 | 34444 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-20.md |"),
  "STATE.md has inv-addy-20 recorded as complete with correct file count (5) and bytes (34444)"
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
