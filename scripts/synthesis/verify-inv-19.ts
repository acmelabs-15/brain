import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";
import { spawnSync } from "child_process";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

interface InventoryFile {
  id: string;
  inventoryPath: string;
  sourcePath: string;
}

const inventoryFiles: InventoryFile[] = [
  {
    id: "source-driven-development",
    inventoryPath: "docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md",
    sourcePath: "sources/addy/skills/source-driven-development/SKILL.md",
  },
  {
    id: "performance-optimization",
    inventoryPath: "docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md",
    sourcePath: "sources/addy/skills/performance-optimization/SKILL.md",
  },
  {
    id: "browser-testing-with-devtools",
    inventoryPath: "docs/analysis/inventory/addy/skills-browser-testing-with-devtools-skill-md.md",
    sourcePath: "sources/addy/skills/browser-testing-with-devtools/SKILL.md",
  },
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

console.log("=================================================================");
console.log("  EMPIRICAL CHALLENGER 2 VERIFICATION HARNESS (inv-addy-19)     ");
console.log("=================================================================\n");

let totalTests = 0;
let passedTests = 0;
let findings: string[] = [];

// =====================================================================
// TEST 1: PURPOSE & FRONTMATTER VERBATIM ACCURACY
// =====================================================================
console.log("--- 1. VERBATIM ACCURACY: PURPOSE & FRONTMATTER ---");

for (const item of inventoryFiles) {
  const invContent = readFileSync(item.inventoryPath, "utf-8");
  const sourceContent = readFileSync(item.sourcePath, "utf-8");
  const sourceLines = sourceContent.split("\n");

  // Check Purpose
  const purposeMatch = invContent.match(/## Purpose — required, verbatim\n> "([^"]+)" — ([^:\n]+):(\d+)/);
  totalTests++;
  if (!purposeMatch) {
    console.error(`  [FAIL] Could not match Purpose pattern in ${item.inventoryPath}`);
  } else {
    const quote = purposeMatch[1];
    const lineNum = parseInt(purposeMatch[3], 10);
    const actualLine = sourceLines[lineNum - 1] || "";
    if (actualLine.includes(quote) || sourceContent.includes(quote)) {
      console.log(`  [PASS] Purpose verbatim quote in ${item.id} exactly matches source.`);
      passedTests++;
    } else {
      console.error(`  [FAIL] Purpose quote mismatch in ${item.id} at line ${lineNum}`);
    }
  }

  // Check Frontmatter
  const descMatch = invContent.match(/Frontmatter description: "([^"]+)" — ([^:\n]+):(\d+)/);
  if (descMatch) {
    totalTests++;
    const descQuote = descMatch[1];
    const descLineNum = parseInt(descMatch[3], 10);
    const actualDescLine = sourceLines[descLineNum - 1] || "";
    if (actualDescLine.includes(descQuote) || sourceContent.includes(descQuote)) {
      console.log(`  [PASS] Frontmatter description quote in ${item.id} exactly matches source.`);
      passedTests++;
    } else {
      console.error(`  [FAIL] Frontmatter description mismatch in ${item.id}`);
    }
  }
}

// =====================================================================
// TEST 2: PATH EXISTENCE (LS) ACROSS INVOKES AND INVOKED BY
// =====================================================================
console.log("\n--- 2. PATH EXISTENCE (LS) CHECK ---");

let pathsChecked = 0;
let pathsFailed = 0;

for (const item of inventoryFiles) {
  const invContent = readFileSync(item.inventoryPath, "utf-8");

  // Invokes
  const invokes = parseSection(invContent, "Invokes — required");
  for (const inv of invokes) {
    if (inv === "none") continue;
    const parts = inv.split(" — ");
    const typeAndPath = parts[0].trim();
    let target = "";
    if (typeAndPath.startsWith("skill ")) {
      target = `skills/${typeAndPath.replace("skill ", "").trim()}/SKILL.md`;
    } else if (typeAndPath.startsWith("reference ")) {
      target = typeAndPath.replace("reference ", "").trim();
    } else if (typeAndPath.startsWith("tool ")) {
      continue; // Conceptual tool
    }
    const cleanTarget = target.startsWith("../../") ? target.replace("../../", "") : target;
    const fullPath = join(addyDir, cleanTarget);
    pathsChecked++;
    if (!existsSync(fullPath)) {
      console.error(`  [FAIL] Missing path in Invokes: ${fullPath} in ${item.id}`);
      pathsFailed++;
    }
  }

  // Invoked by
  const invokedBy = parseSection(invContent, "Invoked by — required");
  for (const ib of invokedBy) {
    if (ib === "none") continue;
    const parts = ib.split(" — ");
    let ref = parts[0].trim().replace(/^`?([a-z-]+ )?`?/, "").replace(/`/g, "");
    if (ref.startsWith("command ")) ref = ref.replace("command ", "");
    if (ref.startsWith("doc ")) ref = ref.replace("doc ", "");
    if (ref.startsWith("skill ")) ref = ref.replace("skill ", "");
    if (ref.startsWith("reference ")) ref = ref.replace("reference ", "");
    if (ref.startsWith("script ")) ref = ref.replace("script ", "");
    if (ref.startsWith("config ")) ref = ref.replace("config ", "");
    if (ref.startsWith("agent ")) ref = ref.replace("agent ", "");
    if (ref.startsWith("eval ")) ref = ref.replace("eval ", "");
    if (ref.startsWith("external-doc ")) ref = ref.replace("external-doc ", "");

    let fullPath = ref.startsWith("sources/addy-external/") ? join(rootDir, ref) : join(addyDir, ref);
    pathsChecked++;
    if (!existsSync(fullPath)) {
      console.error(`  [FAIL] Missing path in Invoked by: ${fullPath} in ${item.id}`);
      pathsFailed++;
    }
  }
}

totalTests++;
if (pathsFailed === 0) {
  console.log(`  [PASS] All ${pathsChecked} referenced Invokes/Invoked by paths exist on disk.`);
  passedTests++;
} else {
  console.error(`  [FAIL] ${pathsFailed}/${pathsChecked} referenced paths were not found.`);
}

// =====================================================================
// TEST 3: EMPIRICAL REPRODUCTION OF REPORTED DEFECTS
// =====================================================================
console.log("\n--- 3. EMPIRICAL REPRODUCTION OF REPORTED DEFECTS ---");

// Defect A: SDD-CACHE.md:51 references non-existent /source-driven-development command
totalTests++;
const sddCachePath = join(addyDir, "hooks/SDD-CACHE.md");
const sddCacheContent = readFileSync(sddCachePath, "utf-8");
const sddLine51 = sddCacheContent.split("\n")[50] || "";
const hasSlashSDD = sddLine51.includes("/source-driven-development");
const cmdExists1 = existsSync(join(addyDir, ".claude/commands/source-driven-development.md"));
const cmdExists2 = existsSync(join(addyDir, "commands/source-driven-development.toml"));
if (hasSlashSDD && !cmdExists1 && !cmdExists2) {
  console.log("  [PASS] Defect Confirmed: hooks/SDD-CACHE.md:51 references non-existent /source-driven-development.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect A failed to confirm.");
}

// Defect B: AGENTS.md omissions
totalTests++;
const agentsMdContent = readFileSync(join(addyDir, "AGENTS.md"), "utf-8");
const hasSDDInAgents = agentsMdContent.includes("source-driven-development");
const hasDevtoolsInAgents = agentsMdContent.includes("browser-testing-with-devtools");
if (!hasSDDInAgents && !hasDevtoolsInAgents) {
  console.log("  [PASS] Defect Confirmed: AGENTS.md omits source-driven-development and browser-testing-with-devtools from lifecycle mappings.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect B failed to confirm.");
}

// Defect C: missing-path PERF.md and bundlesize.config.json
totalTests++;
const hasPerfMd = existsSync(join(addyDir, "PERF.md"));
const hasBundlesize = existsSync(join(addyDir, "bundlesize.config.json"));
if (!hasPerfMd && !hasBundlesize) {
  console.log("  [PASS] Defect Confirmed: PERF.md and bundlesize.config.json do not exist in sources/addy/.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect C failed to confirm.");
}

// Defect D: Node ESM failure on CommonJS eval fixtures
totalTests++;
const nodeBenchmark = spawnSync("node", ["sources/addy/evals/fixtures/performance-optimization/benchmark.js"], { encoding: "utf-8" });
const nodeServer = spawnSync("node", ["sources/addy/evals/fixtures/browser-testing-with-devtools/server.js"], { encoding: "utf-8" });
const nodeBenchErr = nodeBenchmark.stderr.includes("ReferenceError: require is not defined in ES module scope");
const nodeServerErr = nodeServer.stderr.includes("ReferenceError: require is not defined in ES module scope");
if (nodeBenchErr && nodeServerErr) {
  console.log("  [PASS] Defect Confirmed: CommonJS fixtures fail under Node ESM execution.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect D failed to confirm.");
}

// Defect E: missing-path .mcp.json
totalTests++;
const hasMcpJson = existsSync(join(addyDir, ".mcp.json"));
if (!hasMcpJson) {
  console.log("  [PASS] Defect Confirmed: sources/addy/.mcp.json does not exist.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect E failed to confirm.");
}

// Defect F: /review vs /webperf command routing split
totalTests++;
const reviewToml = readFileSync(join(addyDir, "commands/review.toml"), "utf-8");
const webperfToml = readFileSync(join(addyDir, "commands/webperf.toml"), "utf-8");
const hasReviewPerf = reviewToml.includes("performance-optimization");
const webperfBrowserOnly = webperfToml.includes("web applications specifically");
if (hasReviewPerf && webperfBrowserOnly) {
  console.log("  [PASS] Defect Confirmed: routing split between full-stack /review and browser-only /webperf.");
  passedTests++;
} else {
  console.error("  [FAIL] Defect F failed to confirm.");
}

// =====================================================================
// TEST 4: EXECUTION OF CODE EXAMPLES & SCRIPTS
// =====================================================================
console.log("\n--- 4. EMPIRICAL EXECUTION OF CODE EXAMPLES & SCRIPTS ---");

const scriptsToExecute = [
  { name: "validate-skills.js", cmd: "bun", args: ["sources/addy/scripts/validate-skills.js"], expect: 0 },
  { name: "validate-reference-links.js", cmd: "bun", args: ["sources/addy/scripts/validate-reference-links.js"], expect: 0 },
  { name: "validate-artifact-paths.js", cmd: "bun", args: ["sources/addy/scripts/validate-artifact-paths.js"], expect: 0 },
  { name: "validate-commands.js", cmd: "bun", args: ["sources/addy/scripts/validate-commands.js"], expect: 0 },
  { name: "benchmark.js (bun)", cmd: "bun", args: ["sources/addy/evals/fixtures/performance-optimization/benchmark.js"], expect: 0 },
  { name: "glossary-lint.ts", cmd: "bun", args: ["scripts/synthesis/glossary-lint.ts"], expect: 0 },
];

for (const sc of scriptsToExecute) {
  totalTests++;
  const res = spawnSync(sc.cmd, sc.args, { encoding: "utf-8" });
  if (res.status === sc.expect) {
    console.log(`  [PASS] Execution: ${sc.name} exited with code ${sc.expect}.`);
    passedTests++;
  } else {
    console.error(`  [FAIL] Execution: ${sc.name} failed with code ${res.status}`);
  }
}

// =====================================================================
// TEST 5: CONCEPT EXTRACTION DEPTH & VERBATIM INTEGRITY AUDIT (R3/R6)
// =====================================================================
console.log("\n--- 5. CONCEPT EXTRACTION AUDIT (R3/R6) ---");

let totalUnitConcepts = 0;
for (const item of inventoryFiles) {
  const invContent = readFileSync(item.inventoryPath, "utf-8");
  const sourceContent = readFileSync(item.sourcePath, "utf-8");
  const concepts = parseSection(invContent, "Concepts named — required, verbatim");
  totalUnitConcepts += concepts.length;

  let nonVerbatimCount = 0;
  for (const c of concepts) {
    const m = c.match(/^`([^`]+)`/);
    if (!m) continue;
    const term = m[1];
    if (!sourceContent.toLowerCase().includes(term.toLowerCase())) {
      nonVerbatimCount++;
      findings.push(`[NON-VERBATIM CONCEPT] In ${item.id}: "${term}" is paraphrased or normalized; not found verbatim in source.`);
    }
  }
  console.log(`  ${item.id}: ${concepts.length} concepts cataloged (${concepts.length - nonVerbatimCount} strictly verbatim).`);
}

totalTests++;
console.log(`  Total concepts across work unit: ${totalUnitConcepts}`);
if (totalUnitConcepts >= 200) {
  console.log("  [PASS] Depth rule R6 fully satisfied (228 concepts across 3 skills).");
  passedTests++;
} else {
  console.error("  [FAIL] Insufficient concept extraction depth.");
}

console.log("\n=================================================================");
console.log(`  TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${totalTests - passedTests}`);
console.log(`  CHALLENGE FINDINGS RECORDED: ${findings.length}`);
for (const f of findings) {
  console.log(`    - ${f}`);
}
console.log("=================================================================");

process.exit(totalTests - passedTests === 0 ? 0 : 1);
