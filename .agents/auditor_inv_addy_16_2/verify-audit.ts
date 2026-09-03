import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures: string[] = [];

function check(condition: boolean, desc: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${desc}`);
  } else {
    failedChecks++;
    console.log(`[FAIL] ${desc}`);
    failures.push(desc);
  }
}

console.log("=== FORENSIC AUDITOR 2 INDEPENDENT INTEGRITY VERIFICATION ===\n");

// 1. Check absence of fabricated quotation and defect
console.log("--- Check 1: Absence of Fabricated Quotation & Defect ---");
const crqInv = readFileSync("docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md", "utf8");
const unitReport = readFileSync("docs/analysis/inventory/addy/_units/inv-addy-16.md", "utf8");

check(!crqInv.includes("crisis"), "CRQ inventory does not contain 'crisis'");
check(!crqInv.includes("warning, 1000 lines is a crisis"), "CRQ inventory does not contain fabricated warning/crisis text");
check(!crqInv.includes("Rule of 500: Any file over 500 lines"), "CRQ inventory does not contain fabricated Rule of 500 definition");
check(!crqInv.includes("cross-file-contradiction · skills/code-review-and-quality/SKILL.md:113 vs skills/code-simplification/SKILL.md:25"), "CRQ inventory does not claim contradiction against code-simplification:25");

check(!unitReport.includes("crisis"), "Unit report does not contain 'crisis'");
check(!unitReport.includes("Sizing threshold contradiction: code-review-and-quality/SKILL.md:113"), "Unit report does not contain fabricated sizing threshold contradiction");

// 2. Check Purpose quotes in CRQ
console.log("\n--- Check 2: CRQ Purpose Quotes Fidelity ---");
const crqSrc = readFileSync("sources/addy/skills/code-review-and-quality/SKILL.md", "utf8");
const crqSrcLines = crqSrc.split("\n");

const crqPurposeQuotes = [
  {
    line: 10,
    quote: "Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance."
  },
  {
    line: 12,
    quote: "**The approval standard:** Approve a change when it definitely improves overall code health, even if it isn't perfect. Perfect code doesn't exist — the goal is continuous improvement. Don't block a change because it isn't exactly how you would have written it. If it improves the codebase and follows the project's conventions, approve it."
  },
  {
    line: 3,
    quote: "Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch."
  }
];

for (const q of crqPurposeQuotes) {
  const actualLine = crqSrcLines[q.line - 1] || "";
  const matches = actualLine.includes(q.quote) || (q.line === 3 && actualLine.replace("description: ", "") === q.quote);
  check(matches, `CRQ Purpose quote at line ${q.line} matches source exactly`);
}

// 3. Check Purpose quotes in CDD
console.log("\n--- Check 3: CDD Purpose Quotes Fidelity ---");
const cddSrc = readFileSync("sources/addy/skills/constraint-driven-development/SKILL.md", "utf8");
const cddSrcLines = cddSrc.split("\n");
const cddInv = readFileSync("docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md", "utf8");

const cddPurposeQuotes = [
  {
    line: 3,
    quote: "Establishes a project's quality bar as a written contract and stops agents quietly lowering it. Interviews the user on which dimensions matter, supplies sane default thresholds when they have no number in mind, records everything in CONSTRAINTS.md, and watches the diff for a weakened bar — new @ts-ignore or eslint-disable suppressions, skipped or deleted tests, assertions stripped out, unimplemented stubs, thresholds edited down. Use when no quality bar is written down, when the user says \"set up constraints\" or \"define our standards\", when an agent keeps silencing checks or skipping tests to get to green, when you need a coverage or performance threshold and don't know what number to pick, or when an agent writes more code than anyone will read."
  },
  {
    line: 12,
    quote: "This skill produces something different: a written record of **this project's** bar, with numbers, that outlives the conversation and can be checked mechanically."
  }
];

for (const q of cddPurposeQuotes) {
  const actualLine = cddSrcLines[q.line - 1] || "";
  const matches = actualLine.includes(q.quote) || (q.line === 3 && actualLine.replace("description: ", "") === q.quote);
  check(matches, `CDD Purpose quote at line ${q.line} matches source exactly`);
}

// 4. Check all Concepts in CRQ
console.log("\n--- Check 4: CRQ Concepts Verbatim & Citations ---");
function extractConcepts(content: string): { term: string; lineRange: string; role: string; raw: string }[] {
  const lines = content.split("\n");
  const start = lines.findIndex(l => l.startsWith("## Concepts named — required, verbatim"));
  if (start === -1) return [];
  const res = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith("## ")) break;
    const m = l.match(/^- `([^`]+)` — ([^:]+):(\d+(?:-\d+)?) — (defined here|used here)/);
    if (m) {
      res.push({ term: m[1], lineRange: m[3], role: m[4], raw: l });
    }
  }
  return res;
}

const crqConcepts = extractConcepts(crqInv);
check(crqConcepts.length >= 80, `CRQ has sufficient concept count (${crqConcepts.length} concepts found)`);

let crqConceptsValid = 0;
for (const c of crqConcepts) {
  const [startStr, endStr] = c.lineRange.split("-");
  const start = parseInt(startStr, 10);
  const end = endStr ? parseInt(endStr, 10) : start;
  let found = false;
  for (let l = start; l <= end; l++) {
    const line = crqSrcLines[l - 1] || "";
    if (line.toLowerCase().includes(c.term.toLowerCase())) {
      found = true;
      break;
    }
  }
  if (found) {
    crqConceptsValid++;
  } else {
    console.log(`  [MISMATCH] CRQ Concept "${c.term}" not found in lines ${c.lineRange}`);
  }
}
check(crqConceptsValid === crqConcepts.length, `All ${crqConcepts.length} CRQ concepts verified at cited lines (${crqConceptsValid} matched)`);

// 5. Check all Concepts in CDD
console.log("\n--- Check 5: CDD Concepts Verbatim & Citations ---");
const cddConcepts = extractConcepts(cddInv);
check(cddConcepts.length >= 70, `CDD has sufficient concept count (${cddConcepts.length} concepts found)`);

let cddConceptsValid = 0;
for (const c of cddConcepts) {
  const [startStr, endStr] = c.lineRange.split("-");
  const start = parseInt(startStr, 10);
  const end = endStr ? parseInt(endStr, 10) : start;
  let found = false;
  for (let l = start; l <= end; l++) {
    const line = cddSrcLines[l - 1] || "";
    if (line.toLowerCase().includes(c.term.toLowerCase())) {
      found = true;
      break;
    }
  }
  if (found) {
    cddConceptsValid++;
  } else {
    console.log(`  [MISMATCH] CDD Concept "${c.term}" not found in lines ${c.lineRange}`);
  }
}
check(cddConceptsValid === cddConcepts.length, `All ${cddConcepts.length} CDD concepts verified at cited lines (${cddConceptsValid} matched)`);

// 6. Check Specific Newly Added / Remediated Items
console.log("\n--- Check 6: Specific Remediated Concepts & Invariants ---");
const newlyAddedCRQ = [
  { term: "First line", line: "134" },
  { term: "Body", line: "136" },
  { term: "Anti-patterns", line: "138" },
  { term: "Model A", line: "210" },
  { term: "Model B", line: "213" },
  { term: "one business day", line: "253" },
  { term: "I'll clean it up later", line: "267" },
  { term: "rubber-stamp", line: "273" },
  { term: "LGTM", line: "273" }
];

for (const item of newlyAddedCRQ) {
  const c = crqConcepts.find(x => x.term === item.term);
  check(c !== undefined, `CRQ contains remediated concept "${item.term}"`);
  if (c) {
    check(c.lineRange === item.line, `CRQ concept "${item.term}" cites line ${item.line} (actual: ${c.lineRange})`);
  }
}

const newlyAddedCDD = [
  { term: "Pre-product-market-fit", line: "34" },
  { term: "owasp-top-ten", line: "153" },
  { term: "p/owasp-top-ten", line: "153" },
  { term: "depcruise", line: "159" },
  { term: ".skip", line: "209" },
  { term: "TODO", line: "211" }
];

for (const item of newlyAddedCDD) {
  const c = cddConcepts.find(x => x.term === item.term);
  check(c !== undefined, `CDD contains remediated concept "${item.term}"`);
  if (c) {
    check(c.lineRange === item.line, `CDD concept "${item.term}" cites line ${item.line} (actual: ${c.lineRange})`);
  }
}

// 7. Check CDD Invoked By does NOT contain floor-guard
console.log("\n--- Check 7: CDD Invoked By Integrity ---");
const cddInvokedBySection = cddInv.split("## Invoked by — required")[1]?.split("## Concepts named")[0] || "";
check(!cddInvokedBySection.includes("floor-guard.md"), "CDD 'Invoked by' does NOT contain floor-guard.md");

const cddInvokesSection = cddInv.split("## Invokes — required")[1]?.split("## Invoked by")[0] || "";
check(cddInvokesSection.includes("reference references/floor-guard.md"), "CDD 'Invokes' contains reference references/floor-guard.md");

// 8. Manifest and STATE.md checks
console.log("\n--- Check 8: Manifest and STATE.md Alignment ---");
const manifest = readFileSync("docs/analysis/manifest/addy.md", "utf8");
check(manifest.includes("| skills/constraint-driven-development/SKILL.md | 20880 | skill | [x] |"), "Manifest row for CDD is [x]");
check(manifest.includes("| skills/code-review-and-quality/SKILL.md | 20555 | skill | [x] |"), "Manifest row for CRQ is [x]");

const state = readFileSync("docs/plan/STATE.md", "utf8");
check(state.includes("| **current_unit** | `inv-addy-21` |"), "STATE.md current_unit is inv-addy-21");
check(state.includes("| **next_action** | Process batch inv-addy-21 to 25 |"), "STATE.md next_action is Process batch inv-addy-21 to 25");
check(state.includes("| inv-addy-16 | addy | 2 | 41435 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-16.md |"), "STATE.md records inv-addy-16 as complete with correct report path");
check(state.includes("| Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |"), "STATE.md rows inventoried is 190 / 0 / 0");

console.log("\n=================================================================");
console.log(`TOTAL AUDIT CHECKS: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${failedChecks}`);
console.log("=================================================================\n");

if (failedChecks > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
