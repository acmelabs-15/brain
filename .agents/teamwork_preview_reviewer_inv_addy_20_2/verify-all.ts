import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = "/Users/peterkloss/Dev/ACMElabs/brain-v2";
const ADDY_ROOT = path.join(ROOT, "sources/addy");
const INVENTORY_DIR = path.join(ROOT, "docs/analysis/inventory/addy");

interface CheckResult {
  file: string;
  check: string;
  passed: boolean;
  details: string;
}

const checks: CheckResult[] = [];

function record(file: string, check: string, passed: boolean, details: string) {
  checks.push({ file, check, passed, details });
  if (!passed) {
    console.error(`[FAIL] ${file} | ${check} -> ${details}`);
  }
}

// Helper to read file lines (1-indexed)
function getFileLines(filePath: string): string[] {
  const fullPath = path.isAbsolute(filePath) ? filePath : path.join(ADDY_ROOT, filePath);
  const content = fs.readFileSync(fullPath, "utf8");
  return content.split("\n");
}

console.log("=== Reviewer 2 Independent Verification Script ===");

// 1. Check Git SHA
const gitSha = spawnSync("git", ["-C", ADDY_ROOT, "rev-parse", "HEAD"], { encoding: "utf8" }).stdout.trim();
record("sources/addy", "git-sha-pinned", gitSha === "d2c37ef6225dd8726cdd369a8030307f48592d26", `Expected d2c37ef6225dd8726cdd369a8030307f48592d26, got ${gitSha}`);

// 2. Check File Sizes
const expectedSizes: Record<string, number> = {
  "skills/git-workflow-and-versioning/SKILL.md": 14063,
  "skills/documentation-and-adrs/SKILL.md": 9782,
  "AGENTS.md": 5386,
  ".codex-plugin/plugin.json": 1119,
  "CLAUDE.md": 4094,
};

for (const [relPath, expectedSize] of Object.entries(expectedSizes)) {
  const fullPath = path.join(ADDY_ROOT, relPath);
  const stat = fs.statSync(fullPath);
  record(relPath, "file-size-bytes", stat.size === expectedSize, `Expected ${expectedSize}, got ${stat.size}`);
}

// 3. Verify Purpose quotes in each deliverable
const deliverableFiles = [
  {
    doc: "skills-git-workflow-and-versioning-skill-md.md",
    source: "skills/git-workflow-and-versioning/SKILL.md",
    purposeStart: 10,
    expectedQuote: "Git is your safety net. Treat commits as save points, branches as sandboxes, and history as documentation. With AI agents generating code at high speed, disciplined version control is the mechanism that keeps changes manageable, reviewable, and reversible.",
  },
  {
    doc: "skills-documentation-and-adrs-skill-md.md",
    source: "skills/documentation-and-adrs/SKILL.md",
    purposeStart: 10,
    expectedQuote: "Document decisions, not just code. The most valuable documentation captures the *why* — the context, constraints, and trade-offs that led to a decision. Code shows *what* was built; documentation explains *why it was built this way* and *what alternatives were considered*. This context is essential for future humans and agents working in the codebase.",
  },
  {
    doc: "agents-md.md",
    source: "AGENTS.md",
    purposeStart: 3,
    expectedQuote: "This file provides guidance to AI coding agents (Claude Code, Cursor, Copilot, Antigravity, etc.) when working with code in this repository.\n\n> **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself. It is not meant to be copied into other projects or into a global agent configuration; the reusable assets are the skills in `skills/`, not this file.",
  },
  {
    doc: "codex-plugin-plugin-json.md",
    source: ".codex-plugin/plugin.json",
    purposeStart: 4,
    expectedQuote: "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship.",
  },
  {
    doc: "claude-md.md",
    source: "CLAUDE.md",
    purposeStart: 3,
    expectedQuote: "This is the agent-skills project — a collection of production-grade engineering skills for AI coding agents.\n\n> **Scope:** This file configures agents working on the [`addyosmani/agent-skills`](https://github.com/addyosmani/agent-skills) repository itself, not other projects. Don't copy it into another project or a global agent configuration; the reusable assets are the skills in `skills/`.",
  },
];

for (const d of deliverableFiles) {
  const docContent = fs.readFileSync(path.join(INVENTORY_DIR, d.doc), "utf8");
  const sourceLines = getFileLines(d.source);

  // Check Purpose quote in deliverable
  const purposeMatch = docContent.match(/## Purpose — required, verbatim\n([\s\S]*?)\n\n## Design intent/);
  if (!purposeMatch) {
    record(d.doc, "purpose-section-exists", false, "Could not find Purpose section");
    continue;
  }
  const purposeBlock = purposeMatch[1];
  
  // Clean blockquote markers
  const cleanedDocPurpose = purposeBlock
    .split("\n")
    .map(line => line.replace(/^>\s?/, ""))
    .join("\n")
    .replace(/ — [^—\n]+$/m, "") // strip trailing citation
    .replace(/^"/, "")
    .replace(/"$/, "")
    .trim();

  // Check against source
  if (d.source.endsWith(".json")) {
    const json = JSON.parse(fs.readFileSync(path.join(ADDY_ROOT, d.source), "utf8"));
    const sourceVal = json.description;
    const match = cleanedDocPurpose === sourceVal;
    record(d.doc, "purpose-verbatim-match", match, match ? "Exact verbatim match" : `Mismatch:\nDoc: ${cleanedDocPurpose}\nSource: ${sourceVal}`);
  } else {
    // markdown files
    // Let's check line in source
    const startIdx = d.purposeStart - 1;
    let sourceSub = "";
    if (d.doc === "agents-md.md") {
      sourceSub = sourceLines.slice(2, 5).join("\n\n");
    } else if (d.doc === "claude-md.md") {
      sourceSub = sourceLines.slice(2, 5).join("\n\n");
    } else {
      sourceSub = sourceLines[startIdx];
    }
    const match = cleanedDocPurpose === sourceSub.trim();
    record(d.doc, "purpose-verbatim-match", match, match ? "Exact verbatim match" : `Mismatch:\nDoc: [${cleanedDocPurpose}]\nSrc: [${sourceSub.trim()}]`);
  }
}

// 4. Verify Concepts named in each deliverable
for (const d of deliverableFiles) {
  const docContent = fs.readFileSync(path.join(INVENTORY_DIR, d.doc), "utf8");
  const sourceLines = getFileLines(d.source);
  const conceptsMatch = docContent.match(/## Concepts named — required, verbatim\n([\s\S]*?)\n\n## Structure/);
  if (!conceptsMatch) {
    record(d.doc, "concepts-section-exists", false, "Could not find Concepts named section");
    continue;
  }
  const conceptLines = conceptsMatch[1].trim().split("\n");
  let totalConcepts = 0;
  let passedConcepts = 0;

  for (const cLine of conceptLines) {
    if (!cLine.trim()) continue;
    totalConcepts++;
    // format: - `concept` — path:line — defined here / used here
    const match = cLine.match(/^- `([^`]+)` — ([^:]+):(\d+)(?:-(\d+))? — (defined here|used here)/);
    if (!match) {
      record(d.doc, `concept-format-valid:${cLine}`, false, `Invalid concept line format: ${cLine}`);
      continue;
    }
    const [_, conceptName, citedPath, startLineStr, endLineStr] = match;
    const startLine = parseInt(startLineStr, 10);
    const endLine = endLineStr ? parseInt(endLineStr, 10) : startLine;

    // Verify cited line in source contains the concept name
    let foundInSource = false;
    for (let l = startLine; l <= endLine && l <= sourceLines.length; l++) {
      const lineText = sourceLines[l - 1] || "";
      if (lineText.includes(conceptName)) {
        foundInSource = true;
        break;
      }
    }
    if (foundInSource) {
      passedConcepts++;
    } else {
      const actualLine = sourceLines[startLine - 1] || "(out of range)";
      record(d.doc, `concept-cited-line:${conceptName}`, false, `Concept "${conceptName}" not found at ${d.source}:${startLineStr}. Actual line: "${actualLine}"`);
    }
  }
  record(d.doc, "all-concepts-verified", passedConcepts === totalConcepts, `${passedConcepts}/${totalConcepts} concepts found at cited lines in ${d.source}`);
}

// 5. Verify Structure line numbers
for (const d of deliverableFiles) {
  if (d.source.endsWith(".json")) continue;
  const docContent = fs.readFileSync(path.join(INVENTORY_DIR, d.doc), "utf8");
  const sourceLines = getFileLines(d.source);
  const structureMatch = docContent.match(/## Structure\n([\s\S]*?)\n\n## Scripts/);
  if (!structureMatch) {
    record(d.doc, "structure-section-exists", false, "Could not find Structure section");
    continue;
  }
  const lines = structureMatch[1].trim().split("\n");
  let structPassed = 0;
  let structTotal = 0;

  for (const sLine of lines) {
    if (!sLine.trim()) continue;
    const m = sLine.match(/^(?:\s*-|\s*-\s*[\d\.]+)?\s*(.*?)\s*\(line\s*(\d+)\)$/);
    if (!m) continue;
    structTotal++;
    const [_, headingText, lineStr] = m;
    const lineNum = parseInt(lineStr, 10);
    const rawHeading = headingText.replace(/^[\d\.]+\s*/, "").trim();
    const actualLine = (sourceLines[lineNum - 1] || "").trim();
    const contains = actualLine.includes(rawHeading) || actualLine.replace(/^#+\s*/, "").includes(rawHeading);
    if (contains) {
      structPassed++;
    } else {
      record(d.doc, `structure-line:${rawHeading}`, false, `Heading "${rawHeading}" not found at line ${lineNum}. Actual line: "${actualLine}"`);
    }
  }
  record(d.doc, "structure-headings-verified", structPassed === structTotal, `${structPassed}/${structTotal} structure headings matched at cited lines`);
}

// 6. Verify Invokes paths
for (const d of deliverableFiles) {
  const docContent = fs.readFileSync(path.join(INVENTORY_DIR, d.doc), "utf8");
  const invokesMatch = docContent.match(/## Invokes — required\n([\s\S]*?)\n\n## Invoked by/);
  if (!invokesMatch) {
    record(d.doc, "invokes-section-exists", false, "Could not find Invokes section");
    continue;
  }
  const invokesText = invokesMatch[1].trim();
  if (invokesText === "none") {
    record(d.doc, "invokes-none", true, "Invokes is none");
    continue;
  }
  const lines = invokesText.split("\n");
  let passed = 0;
  for (const l of lines) {
    const m = l.match(/^- (?:skill|dir|file|agent|command|doc|reference|script) ([^\s—]+)(?: — (.*))?$/);
    if (!m) continue;
    const targetPath = m[1];
    // Check if targetPath exists in sources/addy/
    const full = path.join(ADDY_ROOT, targetPath);
    const exists = fs.existsSync(full);
    record(d.doc, `invokes-target-exists:${targetPath}`, exists, exists ? "Exists" : `Missing target: ${full}`);
    if (exists) passed++;
  }
}

// 7. Verify Specific Defects Cited
// Defect A: .codex-plugin/plugin.json:16 claims 24 skills vs 25 skills
const codexLines = getFileLines(".codex-plugin/plugin.json");
const codexLine16 = codexLines[15]; // 0-indexed
const codexHas24 = codexLine16.includes("24 production engineering workflows");
record(".codex-plugin/plugin.json", "defect-skill-count-drift-line-16", codexHas24, `Line 16 content: "${codexLine16}"`);

const skillsDir = path.join(ADDY_ROOT, "skills");
const actualSkillDirs = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
record("sources/addy/skills", "actual-skill-count-25", actualSkillDirs.length === 25, `Found ${actualSkillDirs.length} skill directories`);

// Defect B: CLAUDE.md:21-26 lists 23 skills, omitting constraint-driven-development and using-agent-skills
const claudeLines = getFileLines("CLAUDE.md");
const claudePhaseBlock = claudeLines.slice(20, 26).join("\n");
const hasConstraintSkill = claudePhaseBlock.includes("constraint-driven-development");
const hasUsingAgentSkills = claudePhaseBlock.includes("using-agent-skills");
record("CLAUDE.md", "defect-skills-omitted-in-claude-md", !hasConstraintSkill && !hasUsingAgentSkills, `Omissions confirmed: constraint=${!hasConstraintSkill}, using-agent=${!hasUsingAgentSkills}`);

// Defect C: AGENTS.md scoping contradictions
// Check docs/antigravity-setup.md:107
const agSetupLines = getFileLines("docs/antigravity-setup.md");
const agLine107 = agSetupLines[106];
const agContradiction = agLine107.includes("copy or link AGENTS.md into the root of your workspace");
record("docs/antigravity-setup.md", "defect-antigravity-agents-md-copy-contradiction", agContradiction, `Line 107: "${agLine107}"`);

// Defect D: docs/decisions missing path
const decisionsDirExists = fs.existsSync(path.join(ADDY_ROOT, "docs/decisions"));
record("sources/addy", "defect-docs-decisions-missing", !decisionsDirExists, `docs/decisions exists: ${decisionsDirExists}`);

// Defect E: CHANGELOG.md missing in repo root
const changelogExists = fs.existsSync(path.join(ADDY_ROOT, "CHANGELOG.md"));
record("sources/addy", "defect-changelog-missing", !changelogExists, `CHANGELOG.md exists: ${changelogExists}`);

// Defect F: CLAUDE.md slash command /constraints omission
const claudeCommandsLine = claudeLines[12]; // line 13
const claudeHasConstraints = claudeCommandsLine.includes("constraints");
record("CLAUDE.md", "defect-claude-omits-constraints-command", !claudeHasConstraints, `CLAUDE.md:13 content: "${claudeCommandsLine}"`);

// Defect G: Node ESM vs CommonJS crash in run-evals.js
const runEvalsNode = spawnSync("node", ["scripts/run-evals.js"], { cwd: ADDY_ROOT, encoding: "utf8" });
const runEvalsBun = spawnSync("bun", ["scripts/run-evals.js"], { cwd: ADDY_ROOT, encoding: "utf8" });
record("scripts/run-evals.js", "node-fails-esm-require", runEvalsNode.status !== 0 && runEvalsNode.stderr.includes("ReferenceError: require is not defined"), `Node exit: ${runEvalsNode.status}, stderr snippet: ${runEvalsNode.stderr.slice(0, 80)}`);
record("scripts/run-evals.js", "bun-passes-run-evals", runEvalsBun.status === 0, `Bun exit: ${runEvalsBun.status}`);

// Print Summary
console.log("\n=== Independent Verification Results Summary ===");
const total = checks.length;
const passed = checks.filter(c => c.passed).length;
const failed = checks.filter(c => !c.passed).length;
console.log(`Total checks: ${total} | Passed: ${passed} | Failed: ${failed}`);

if (failed === 0) {
  console.log("ALL INDEPENDENT VERIFICATION CHECKS PASSED PERFECTLY!");
} else {
  console.log("SOME CHECKS FAILED! Inspect failures above.");
}
