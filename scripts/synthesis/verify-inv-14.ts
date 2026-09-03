import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

const inventoryFiles = [
  { skill: "incremental-implementation", file: "docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md", source: "sources/addy/skills/incremental-implementation/SKILL.md" },
  { skill: "api-and-interface-design", file: "docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md", source: "sources/addy/skills/api-and-interface-design/SKILL.md" },
  { skill: "ci-cd-and-automation", file: "docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md", source: "sources/addy/skills/ci-cd-and-automation/SKILL.md" },
  { skill: "context-engineering", file: "docs/analysis/inventory/addy/skills-context-engineering-skill-md.md", source: "sources/addy/skills/context-engineering/SKILL.md" },
];

function parseSection(content: string, sectionName: string): string[] {
  const lines = content.split("\n");
  const startIndex = lines.findIndex(l => l.startsWith(`## ${sectionName}`));
  if (startIndex === -1) return [];
  const result: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) break;
    if (line.trim().startsWith("- ")) {
      result.push(line.trim().substring(2));
    }
  }
  return result;
}

console.log("=================================================");
console.log("  EMPIRICAL CHALLENGER 2 VERIFICATION SUITE      ");
console.log("  Work Unit: inv-addy-14                         ");
console.log("=================================================\n");

// 1. EXISTENCE CHALLENGE: Invokes & Invoked by paths
console.log("--- 1. EXISTENCE CHALLENGE (Paths in Invokes and Invoked by) ---");
let totalPathsChecked = 0;
let missingPaths = 0;

for (const item of inventoryFiles) {
  const content = readFileSync(item.file, "utf-8");
  
  // Invokes
  const invokes = parseSection(content, "Invokes");
  for (const inv of invokes) {
    if (inv === "none") continue;
    const parts = inv.split(" — ");
    const ref = parts[0];
    let target = "";
    if (ref.startsWith("skill ")) {
      target = `skills/${ref.replace("skill ", "").trim()}/SKILL.md`;
    } else if (ref.startsWith("reference ")) {
      const refPath = ref.replace("reference ", "").trim();
      target = refPath.startsWith("../../") ? refPath.replace("../../", "") : refPath;
    }
    const fullPath = join(addyDir, target);
    totalPathsChecked++;
    if (!existsSync(fullPath)) {
      console.error(`  [MISSING PATH] Invokes: ${fullPath} in ${item.file}`);
      missingPaths++;
    }
  }

  // Invoked by
  const invokedBy = parseSection(content, "Invoked by");
  for (const ib of invokedBy) {
    if (ib === "none") continue;
    const parts = ib.split(" — ");
    let targetFile = parts[0].trim().replace(/^`?([a-z]+ )?`?/, "").replace(/`/g, "");
    if (targetFile.startsWith("command ")) targetFile = targetFile.replace("command ", "");
    if (targetFile.startsWith("doc ")) targetFile = targetFile.replace("doc ", "");
    if (targetFile.startsWith("skill ")) targetFile = targetFile.replace("skill ", "");
    if (targetFile.startsWith("reference ")) targetFile = targetFile.replace("reference ", "");
    if (targetFile.startsWith("script ")) targetFile = targetFile.replace("script ", "");
    if (targetFile.startsWith("config ")) targetFile = targetFile.replace("config ", "");

    const fullPath = join(addyDir, targetFile);
    totalPathsChecked++;
    if (!existsSync(fullPath)) {
      console.error(`  [MISSING PATH] Invoked by: ${fullPath} in ${item.file}`);
      missingPaths++;
    }
  }
}

console.log(`Paths checked: ${totalPathsChecked}`);
console.log(`Missing paths: ${missingPaths}`);
console.log(`Result: ${missingPaths === 0 ? "PASSED (100% paths exist on disk)" : "FAILED"}\n`);

// 2. DEFECT CHALLENGE: ci-cd-and-automation:364 doc-drift & other defects
console.log("--- 2. DEFECT CHALLENGE ---");
const ciFile = "sources/addy/skills/ci-cd-and-automation/SKILL.md";
const ciLines = readFileSync(ciFile, "utf-8").split("\n");
const rationalizationLine = ciLines[363]; // Line 364 (1-indexed)
const ciOptimizationHeaderIdx = ciLines.findIndex(l => l.trim() === "## CI Optimization");

console.log(`Line 364 text: "${rationalizationLine}"`);
console.log(`"## CI Optimization" located at line: ${ciOptimizationHeaderIdx + 1}`);
const isDocDriftGenuine = rationalizationLine.includes("see CI Optimization below") && (ciOptimizationHeaderIdx + 1 < 364);
console.log(`Is doc-drift defect at L364 genuine? ${isDocDriftGenuine ? "YES (CONFIRMED)" : "NO"}`);

// Check for other potential defects
console.log("\nChecking internal consistency in ci-cd-and-automation quality gates:");
const pipelineGates = ciLines.slice(32, 48).filter(l => l.includes("│   ") && l.includes("│"));
console.log(`  Quality gate pipeline defines: ${pipelineGates.length} diagram steps`);
const verificationLine = ciLines.find(l => l.includes("All quality gates are present"));
console.log(`  Verification checklist line: "${verificationLine?.trim()}"`);
if (verificationLine && !verificationLine.includes("integration") && !verificationLine.includes("e2e")) {
  console.log("  [FINDING] Verification checklist parenthetical omits integration, e2e, and bundle size gates.");
}

// Check Invoked by citation accuracy
console.log("\nChecking Invoked by citation accuracy:");
const shipToml = readFileSync("sources/addy/commands/ship.toml", "utf-8");
const shipTomlHasCiCd = shipToml.includes("ci-cd-and-automation");
console.log(`  Does commands/ship.toml reference ci-cd-and-automation? ${shipTomlHasCiCd}`);
if (!shipTomlHasCiCd) {
  console.log("  [FINDING] skills-ci-cd-and-automation-skill-md.md erroneously lists commands/ship.toml:4 in Invoked by.");
}

// 3. CONCEPT COVERAGE CHALLENGE (R6)
console.log("\n--- 3. CONCEPT COVERAGE CHALLENGE (R6) ---");
let totalConcepts = 0;
for (const item of inventoryFiles) {
  const content = readFileSync(item.file, "utf-8");
  const concepts = parseSection(content, "Concepts named");
  totalConcepts += concepts.length;
  console.log(`  ${item.skill}: ${concepts.length} concepts captured`);
}
console.log(`Total concepts across work unit: ${totalConcepts}`);

// Acceptance criteria citation check
const incFile = readFileSync("sources/addy/skills/incremental-implementation/SKILL.md", "utf-8");
const incLines = incFile.split("\n");
const l249 = incLines[248];
const l249HasAC = l249.includes("acceptance criteria");
console.log(`\nChecking incremental-implementation L249 for 'acceptance criteria':`);
console.log(`  L249: "${l249}"`);
console.log(`  Contains 'acceptance criteria'? ${l249HasAC}`);
if (!l249HasAC) {
  console.log("  [FINDING] 'acceptance criteria' was attributed to SKILL.md:249, but actually resides in references/definition-of-done.md:3.");
}

console.log("\n=================================================");
console.log("  VERIFICATION COMPLETE                          ");
console.log("=================================================");
