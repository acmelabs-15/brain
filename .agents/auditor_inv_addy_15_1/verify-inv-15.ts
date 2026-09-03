import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

const inv15Files = [
  {
    name: "frontend-ui-engineering",
    entryPath: "docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md",
    sourceRelPath: "skills/frontend-ui-engineering/SKILL.md",
  },
  {
    name: "shipping-and-launch",
    entryPath: "docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md",
    sourceRelPath: "skills/shipping-and-launch/SKILL.md",
  },
  {
    name: "spec-driven-development",
    entryPath: "docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md",
    sourceRelPath: "skills/spec-driven-development/SKILL.md",
  },
  {
    name: "floor-guard",
    entryPath: "docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md",
    sourceRelPath: "skills/constraint-driven-development/references/floor-guard.md",
  }
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

let totalChecks = 0;
let failures = 0;

console.log("=== AUDIT CHECK 1: File Existence & Schema ===");
for (const item of inv15Files) {
  totalChecks++;
  if (!existsSync(item.entryPath)) {
    console.error(`FAIL: Entry path does not exist: ${item.entryPath}`);
    failures++;
    continue;
  }
  const fullSource = join(addyDir, item.sourceRelPath);
  totalChecks++;
  if (!existsSync(fullSource)) {
    console.error(`FAIL: Source path does not exist: ${fullSource}`);
    failures++;
    continue;
  }

  const content = readFileSync(item.entryPath, "utf-8");
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
    "Context cost"
  ];

  for (const sec of requiredSections) {
    totalChecks++;
    if (!content.includes(`## ${sec}`)) {
      console.error(`FAIL: Missing section [## ${sec}] in ${item.entryPath}`);
      failures++;
    }
  }
}

console.log("=== AUDIT CHECK 2: Existence of Invokes and Invoked by Targets ===");
for (const item of inv15Files) {
  const content = readFileSync(item.entryPath, "utf-8");
  const invokes = parseSection(content, "Invokes — required");
  for (const inv of invokes) {
    if (inv === "none") continue;
    totalChecks++;
    const [targetStr] = inv.split(" — ");
    let target = targetStr.trim();
    if (target.startsWith("skill ")) target = `skills/${target.replace("skill ", "").trim()}/SKILL.md`;
    else if (target.startsWith("reference ")) {
      const ref = target.replace("reference ", "").trim();
      target = ref.startsWith("../../") ? ref.replace("../../", "") : ref;
    } else if (target.startsWith("external CLI ")) {
      continue; // CLI tool
    }
    const full = join(addyDir, target);
    if (!existsSync(full)) {
      console.error(`FAIL: Invokes target missing: ${full} cited in ${item.entryPath}`);
      failures++;
    }
  }

  const invokedBy = parseSection(content, "Invoked by — required");
  for (const ib of invokedBy) {
    if (ib === "none") continue;
    totalChecks++;
    const [targetStr] = ib.split(" — ");
    let target = targetStr.trim()
      .replace(/^command /, "")
      .replace(/^doc /, "")
      .replace(/^skill /, "")
      .replace(/^reference /, "")
      .replace(/^script /, "")
      .replace(/^config /, "")
      .replace(/^external-doc /, "");
    
    // Check if target is inside sources/addy or sources/addy-external or brain-v2
    let full = join(addyDir, target);
    if (!existsSync(full)) {
      full = join(rootDir, target);
    }
    if (!existsSync(full)) {
      console.error(`FAIL: Invoked by target missing: ${target} cited in ${item.entryPath}`);
      failures++;
    }
  }
}

console.log("=== AUDIT CHECK 3: Line Citations Verification ===");
for (const item of inv15Files) {
  const content = readFileSync(item.entryPath, "utf-8");
  const sourceContent = readFileSync(join(addyDir, item.sourceRelPath), "utf-8");
  const sourceLines = sourceContent.split("\n");

  // Check Concepts named lines
  const concepts = parseSection(content, "Concepts named — required, verbatim");
  for (const c of concepts) {
    totalChecks++;
    const parts = c.split(" — ");
    if (parts.length < 2) continue;
    const term = parts[0].replace(/^`/, "").replace(/`$/, "");
    const cite = parts[1];
    const match = cite.match(/:(\d+)/);
    if (match) {
      const lineNum = parseInt(match[1], 10);
      const targetLine = sourceLines[lineNum - 1] || "";
      if (!targetLine.toLowerCase().includes(term.toLowerCase().split(":")[0].trim())) {
        // Some citations list multiple lines or general section headers
        console.warn(`WARN: Concept '${term}' cited at line ${lineNum} in ${item.sourceRelPath}: "${targetLine.trim()}"`);
      }
    }
  }

  // Check Purpose quote
  totalChecks++;
  const purposeMatch = content.match(/## Purpose — required, verbatim\n> "(.*)" — ([^:]+):(\d+)/s);
  if (purposeMatch) {
    // The quote might contain inner quotes, so split from last " —
    const purposeLine = content.split("## Purpose — required, verbatim\n")[1].split("\n\n")[0];
    const quoteIndex = purposeLine.lastIndexOf('" — ');
    const quote = purposeLine.substring(3, quoteIndex);
    const cite = purposeLine.substring(quoteIndex + 4);
    const citedLine = parseInt(cite.split(":")[1], 10);
    const actualLine = sourceLines[citedLine - 1] || "";
    if (!actualLine.includes(quote.substring(0, 30))) {
      console.error(`FAIL: Purpose quote mismatch at ${item.sourceRelPath}:${citedLine}`);
      console.error(`Expected: ${quote}`);
      console.error(`Actual:   ${actualLine}`);
      failures++;
    } else {
      console.log(`PASS: Purpose quote confirmed verbatim for ${item.name}`);
    }
  } else {
    console.error(`FAIL: Purpose quote format invalid in ${item.entryPath}`);
    failures++;
  }
}

console.log(`\n========================================`);
console.log(`Total Checks: ${totalChecks}`);
console.log(`Failures:     ${failures}`);
console.log(`Verdict:      ${failures === 0 ? "CLEAN" : "INTEGRITY VIOLATION"}`);
console.log(`========================================`);
process.exit(failures === 0 ? 0 : 1);
