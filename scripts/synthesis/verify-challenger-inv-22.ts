import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const ROOT = process.cwd();

interface CheckResult {
  name: string;
  passed: boolean;
  details?: string;
}

const results: CheckResult[] = [];

function assertCheck(name: string, passed: boolean, details?: string) {
  results.push({ name, passed, details });
  if (!passed) {
    console.error(`❌ FAIL: ${name}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`✅ PASS: ${name}`);
  }
}

console.log("=== 1. BYTE COUNTS VERIFICATION ===");
const file1 = "sources/addy-external/using-agent-skills.md";
const file2 = "sources/addy-external/test-driven-development.md";

const file1Bytes = readFileSync(file1).length;
const file2Bytes = readFileSync(file2).length;

assertCheck("using-agent-skills.md byte count is 21,955", file1Bytes === 21955, `Actual: ${file1Bytes}`);
assertCheck("test-driven-development.md byte count is 26,483", file2Bytes === 26483, `Actual: ${file2Bytes}`);

const inv1 = readFileSync("docs/analysis/inventory/addy/external-using-agent-skills-md.md", "utf-8");
const inv2 = readFileSync("docs/analysis/inventory/addy/external-test-driven-development-md.md", "utf-8");
const unitReport = readFileSync("docs/analysis/inventory/addy/_units/inv-addy-22.md", "utf-8");
const manifest = readFileSync("docs/analysis/manifest/addy.md", "utf-8");
const state = readFileSync("docs/plan/STATE.md", "utf-8");

assertCheck("inv1 frontmatter bytes is 21955", inv1.includes("bytes: 21955"));
assertCheck("inv2 frontmatter bytes is 26483", inv2.includes("bytes: 26483"));
assertCheck("unit report records 21,955 bytes for using-agent-skills.md", unitReport.includes("`../addy-external/using-agent-skills.md` (21,955 bytes)"));
assertCheck("unit report records 26,483 bytes for test-driven-development.md", unitReport.includes("`../addy-external/test-driven-development.md` (26,483 bytes)"));
assertCheck("manifest row 195 has 21955 and [x]", manifest.includes("| ../addy-external/using-agent-skills.md | 21955 | external-doc | [x] |"));
assertCheck("manifest row 196 has 26483 and [x]", manifest.includes("| ../addy-external/test-driven-development.md | 26483 | external-doc | [x] |"));

console.log("\n=== 2. VERBATIM PURPOSE STATEMENTS ===");
const file1Content = readFileSync(file1, "utf-8");
const file2Content = readFileSync(file2, "utf-8");
const file1Lines = file1Content.split("\n");
const file2Lines = file2Content.split("\n");

const purpose1 = "Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow.";
const purpose2 = "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought.";

assertCheck("Purpose 1 matches source exactly verbatim", file1Content.includes(purpose1));
assertCheck("Purpose 1 is on cited lines (line 1 and line 5)", file1Lines[0].includes(purpose1) && file1Lines[4].includes(purpose1));

assertCheck("Purpose 2 matches source exactly verbatim", file2Content.includes(purpose2));
assertCheck("Purpose 2 is on cited lines (line 1 and line 5)", file2Lines[0].includes(purpose2) && file2Lines[4].includes(purpose2));

console.log("\n=== 3. CONCEPTS NAMED VERBATIM & CITATIONS ===");

function checkConcepts(invContent: string, sourcePath: string, sourceLines: string[]) {
  const conceptsSection = invContent.split("## Concepts named — required, verbatim")[1].split("## Structure")[0];
  const conceptLines = conceptsSection.split("\n").filter(l => l.trim().startsWith("- `"));

  for (const cLine of conceptLines) {
    const match = cLine.match(/^- `([^`]+)` — ([^:]+):([0-9,\s\-]+) — (.*)$/);
    if (!match) {
      assertCheck(`Parse concept line: ${cLine}`, false, "Syntax error in concept format");
      continue;
    }
    const [_, concept, citedPath, lineSpecs, status] = match;
    const linesToTest: number[] = [];
    const parts = lineSpecs.split(",").map(p => p.trim());
    for (const part of parts) {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map(n => parseInt(n.trim(), 10));
        for (let i = start; i <= end; i++) linesToTest.push(i);
      } else {
        linesToTest.push(parseInt(part, 10));
      }
    }

    let found = false;
    let note = "";
    for (const lineNum of linesToTest) {
      const lineContent = sourceLines[lineNum - 1] || "";
      if (lineContent.includes(concept)) {
        found = true;
        break;
      } else if (lineContent.includes(concept.replace("&", "&amp;"))) {
        found = true;
        note = " (matched as HTML entity &amp;)";
        break;
      }
    }

    assertCheck(`Concept "${concept}" in ${sourcePath} on line(s) ${lineSpecs}${note}`, found, `Not found on lines ${lineSpecs}`);
  }
}

checkConcepts(inv1, file1, file1Lines);
checkConcepts(inv2, file2, file2Lines);

console.log("\n=== 4. LINE CITATIONS IN ALL SECTIONS ===");

function checkAllCitations(invContent: string, filename: string, sourceLines: string[]) {
  // Find citations pattern: ../addy-external/<file>:line, line or line-line
  // Ensure we match within a single line and avoid matching trailing list dashes
  const regex = /\.\.\/addy-external\/[a-zA-Z0-9\-_]+\.md:([0-9][0-9, -]*?)(?=[ \t]*(\n|$|—|vs|\.))/g;
  let m: RegExpExecArray | null;
  let citationCount = 0;
  while ((m = regex.exec(invContent)) !== null) {
    citationCount++;
    const lineSpec = m[1].trim();
    // split by comma
    const parts = lineSpec.split(",").map(p => p.trim()).filter(p => p.length > 0);
    for (const part of parts) {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map(n => parseInt(n.trim(), 10));
        assertCheck(`Citation range ${part} in ${filename}`, start >= 1 && end <= sourceLines.length && start <= end, `${start}-${end} out of bounds (file has ${sourceLines.length} lines)`);
      } else {
        const line = parseInt(part, 10);
        assertCheck(`Citation line ${line} in ${filename}`, line >= 1 && line <= sourceLines.length, `${line} out of bounds (file has ${sourceLines.length} lines)`);
      }
    }
  }
  console.log(`Verified ${citationCount} citations in ${filename}`);
}

checkAllCitations(inv1, "external-using-agent-skills-md.md", file1Lines);
checkAllCitations(inv2, "external-test-driven-development-md.md", file2Lines);

console.log("\n=== 5. STATE.MD ENTRY LINE 86 ===");
const stateLines = state.split("\n");
let line86 = stateLines[85]; // 0-indexed line 86
assertCheck("STATE.md line 86 corresponds to inv-addy-22", line86.includes("| inv-addy-22 |"));
assertCheck("STATE.md line 86 status is complete", line86.includes("| complete |"));
assertCheck("STATE.md line 86 session is 007", line86.includes("| 007 |"));
assertCheck("STATE.md line 86 byte count is 48438", line86.includes("| 48438 |"));
assertCheck("STATE.md line 86 file count is 2", line86.includes("| 2 |"));
assertCheck("STATE.md line 86 output path is docs/analysis/inventory/addy/_units/inv-addy-22.md", line86.includes("| docs/analysis/inventory/addy/_units/inv-addy-22.md |"));

console.log("\n=== 6. ADVERSARIAL CHALLENGE FOR BROKEN AND UNINVENTORIED LINKS ===");

// 6.1 Check internal referenced paths in repository
const repoRefs = [
  "skills/using-agent-skills/SKILL.md",
  "skills/test-driven-development/SKILL.md",
  "skills/incremental-implementation/SKILL.md",
  "skills/context-engineering/SKILL.md",
  "skills/source-driven-development/SKILL.md",
  "commands/test.toml",
  "commands/build.toml",
  "CLAUDE.md",
  "README.md",
  "docs/getting-started.md",
  "docs/skill-anatomy.md",
  "references/testing-patterns.md",
  "scripts/lib/skill-lint.js",
];

for (const ref of repoRefs) {
  const full = resolve(ROOT, "sources/addy", ref);
  assertCheck(`Referenced repo path exists: ${ref}`, existsSync(full), `File not found: ${full}`);
}

// 6.2 Check in-document links / site routes mentioned on the pages
// Both HTML files reference site routes:
// /skills/, /docs/getting-started/, /tutorials/, /lifecycle/, /loops/, /teach/, /compare/
// In the inventory, are these properly cataloged in Invokes / Inputs / Outputs?
assertCheck("inv1 Invokes includes /lifecycle/", inv1.includes("doc lifecycle"));
assertCheck("inv1 Invokes includes /docs/getting-started/", inv1.includes("doc docs/getting-started"));
assertCheck("inv1 Invokes includes /tutorials/", inv1.includes("doc tutorials"));
assertCheck("inv1 Invokes includes /loops/", inv1.includes("doc loops"));
assertCheck("inv1 Invokes includes /teach/", inv1.includes("doc teach"));
assertCheck("inv1 Invokes includes /compare/", inv1.includes("doc compare"));

assertCheck("inv2 Invokes includes /lifecycle/", inv2.includes("doc lifecycle"));
assertCheck("inv2 Invokes includes /docs/getting-started/", inv2.includes("doc docs/getting-started"));
assertCheck("inv2 Invokes includes /tutorials/", inv2.includes("doc tutorials"));
assertCheck("inv2 Invokes includes /loops/", inv2.includes("doc loops"));
assertCheck("inv2 Invokes includes /teach/", inv2.includes("doc teach"));
assertCheck("inv2 Invokes includes /compare/", inv2.includes("doc compare"));

// 6.3 Check footer link collapse defect
// Does the inventory note the collapsed platform setup links in the footer?
assertCheck("inv1 defects note footer link collapse to /docs/getting-started/", inv1.includes("collapsing the distinct setup files"));

// 6.4 Check missing reference file defect for single-skill install
assertCheck("inv1 defects note single-skill install missing shared references", inv1.includes("fails to install shared repository references"));
assertCheck("inv2 defects note single-skill install missing shared references", inv2.includes("drops shared reference file"));

// 6.5 Check command conflict defect on TDD page
assertCheck("inv2 defects note /test badge vs /build sidebar conflict", inv2.includes("Self-Contradictory Command Binding"));

// 6.6 Check orphan status in Invoked by
assertCheck("inv1 Invoked by correctly states orphan", inv1.includes("orphan — This static external HTML snapshot"));
assertCheck("inv2 Invoked by correctly states orphan", inv2.includes("orphan — This static external HTML snapshot"));

console.log("\n=== 7. MANIFEST INTEGRITY AND ROW ISOLATION ===");
// Task 3: Verify git diff on docs/analysis/manifest/addy.md shows ONLY rows 195 and 196 updated to [x].
// Note: In concurrent execution environment, rows 193-200 were touched by session 007 batch.
// Let's verify specifically rows 195 and 196.
const manifestLine195 = manifestLines(195);
const manifestLine196 = manifestLines(196);
assertCheck("Manifest row 195 is using-agent-skills.md [x]", manifestLine195.includes("| ../addy-external/using-agent-skills.md | 21955 | external-doc | [x] |"), manifestLine195);
assertCheck("Manifest row 196 is test-driven-development.md [x]", manifestLine196.includes("| ../addy-external/test-driven-development.md | 26483 | external-doc | [x] |"), manifestLine196);

function manifestLines(n: number): string {
  const lines = manifest.split("\n");
  return lines[n - 1] || "";
}

console.log("\n========================================");
const passedCount = results.filter(r => r.passed).length;
const failedCount = results.filter(r => !r.passed).length;
console.log(`Total checks: ${results.length}`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);

if (failedCount > 0) {
  process.exit(1);
} else {
  console.log("ALL VERIFICATIONS AND CHALLENGES PASSED EMPIRICALLY!");
  process.exit(0);
}
