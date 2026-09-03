import { readFileSync, existsSync, statSync } from "fs";
import { resolve, join } from "path";

const rootDir = resolve(".");

console.log("=================================================================");
console.log("  EMPIRICAL CHALLENGER VERIFICATION HARNESS: inv-addy-25        ");
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

// 1. Check source file existence and byte size
const sourcePath = join(rootDir, "sources/addy-external/ci-cd-and-automation.md");
check("Source file exists: sources/addy-external/ci-cd-and-automation.md", existsSync(sourcePath));
const sourceStat = existsSync(sourcePath) ? statSync(sourcePath) : null;
check("Source file byte size is 26,179", sourceStat?.size === 26179, `actual: ${sourceStat?.size}`);

const sourceContent = existsSync(sourcePath) ? readFileSync(sourcePath, "utf-8") : "";
const sourceLines = sourceContent.split("\n");

// 2. Comprehensive citation verification against sources/addy-external/ci-cd-and-automation.md
const citations: { line: number; claim: string }[] = [
  // Line 1: head metadata and og tags
  { line: 1, claim: "ci-cd-and-automation - agent-skills" },
  { line: 1, claim: "https://skills.addy.ie/skills/ci-cd-and-automation/" },
  { line: 1, claim: "Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops" },
  { line: 1, claim: "og:title" },
  { line: 1, claim: "twitter:card" },
  
  // Line 5: main header, breadcrumbs, chips, summary, when
  { line: 5, claim: "ci-cd-and-automation" },
  { line: 5, claim: "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." },
  { line: 5, claim: "Ship phase" },
  { line: 5, claim: "Setting up or modifying build and deploy pipelines." },
  { line: 5, claim: "#ci-cd" },
  { line: 5, claim: "#automation" },
  { line: 5, claim: "/docs/getting-started/" },
  { line: 5, claim: "/lifecycle/" },
  { line: 5, claim: "/loops/" },
  { line: 5, claim: "/tutorials/" },
  { line: 5, claim: "/teach/" },
  { line: 5, claim: "/compare/" },
  { line: 5, claim: "Install just this skill" },
  
  // Line 6: skills CLI link
  { line: 6, claim: "https://github.com/vercel-labs/skills" },
  { line: 6, claim: "skills CLI" },
  
  // Line 8: install commands and anatomy heading
  { line: 8, claim: "npx skills add addyosmani/agent-skills --skill ci-cd-and-automation" },
  { line: 8, claim: "npx skills add addyosmani/agent-skills" },
  { line: 8, claim: "How this skill is structured" },
  
  // Line 10: anatomy list items and SKILL.md link
  { line: 10, claim: "Overview" },
  { line: 10, claim: "What this skill does" },
  { line: 10, claim: "When to Use" },
  { line: 10, claim: "Triggering conditions" },
  { line: 10, claim: "Process" },
  { line: 10, claim: "Step-by-step workflow" },
  { line: 10, claim: "Rationalizations" },
  { line: 10, claim: "Excuses + rebuttals" },
  { line: 10, claim: "Red Flags" },
  { line: 10, claim: "Signs something’s wrong" },
  { line: 10, claim: "Verification" },
  { line: 10, claim: "Evidence requirements" },
  { line: 10, claim: "https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md" },
  
  // Line 12: sidebar, /ship command, related skills
  { line: 12, claim: "Ship phase" },
  { line: 12, claim: "/ship" },
  { line: 12, claim: "/lifecycle/" },
  { line: 12, claim: "More in the Ship phase" },
  { line: 12, claim: "git-workflow-and-versioning" },
  { line: 12, claim: "Trunk-based development, atomic commits, ~100-line changes, commit-as-save-point." },
  { line: 12, claim: "deprecation-and-migration" },
  { line: 12, claim: "Code-as-liability mindset, compulsory vs advisory deprecation, zombie-code removal." },
  { line: 12, claim: "documentation-and-adrs" },
  { line: 12, claim: "Architecture Decision Records, API docs, inline standards - document the why." },
  
  // Line 13: footer tag
  { line: 13, claim: "Production-grade engineering skills for AI coding agents." },
  
  // Line 15: footer navigation links and command
  { line: 15, claim: "npx skills add addyosmani/agent-skills" },
  { line: 15, claim: "Claude Code" },
  { line: 15, claim: "Codex" },
  { line: 15, claim: "Cursor" },
  { line: 15, claim: "Antigravity" },
  { line: 15, claim: "Loop engineering" },
  { line: 15, claim: "Evals framework" },
  { line: 15, claim: "Product" },
  { line: 15, claim: "Setup" },
  { line: 15, claim: "Resources" },
  { line: 15, claim: "CONTRIBUTING.md" },
  { line: 15, claim: "/docs/getting-started/" },
  { line: 15, claim: "/lifecycle/" },
  { line: 15, claim: "/loops/" },
  { line: 15, claim: "/tutorials/" },
  { line: 15, claim: "/teach/" },
  { line: 15, claim: "/compare/" },
];

console.log("\n--- Testing Citations in sources/addy-external/ci-cd-and-automation.md ---");
for (const c of citations) {
  const lineText = sourceLines[c.line - 1] || "";
  const found = lineText.includes(c.claim);
  check(`Citation line ${c.line} contains "${c.claim.length > 50 ? c.claim.substring(0, 47) + '...' : c.claim}"`, found, `Line ${c.line} snippet: ${lineText.substring(0, 80)}`);
}

// 3. Verify Defect Citations against in-repo files
console.log("\n--- Testing Defect Citations against In-Repo Files ---");

// Defect 1: SKILL.md:3 description drift
const skillPath = join(rootDir, "sources/addy/skills/ci-cd-and-automation/SKILL.md");
check("sources/addy/skills/ci-cd-and-automation/SKILL.md exists", existsSync(skillPath));
const skillLines = existsSync(skillPath) ? readFileSync(skillPath, "utf-8").split("\n") : [];
const skillLine3 = skillLines[2] || "";
check("Defect citation SKILL.md:3 contains expected description", skillLine3.includes("description: Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines."), `Actual: ${skillLine3}`);

// Defect 2: SKILL.md:16-23 When to Use trigger list
const whenToUseBlock = skillLines.slice(15, 23).join("\n");
check("Defect citation SKILL.md:16-23 contains 'When to Use' triggers", whenToUseBlock.includes("## When to Use") && whenToUseBlock.includes("- Setting up a new project's CI pipeline") && whenToUseBlock.includes("- Debugging CI failures"), `Actual:\n${whenToUseBlock}`);

// Defect 3: SKILL.md:24-342 Quality Gate Pipeline section vs missing Process heading
const processExists = skillLines.some(l => l.trim() === "## Process");
check("ci-cd-and-automation/SKILL.md does NOT contain '## Process' heading", !processExists);
const qualityGateExists = skillLines.some(l => l.includes("## The Quality Gate Pipeline"));
check("ci-cd-and-automation/SKILL.md contains '## The Quality Gate Pipeline'", qualityGateExists);

// Defect 4: README.md:376 vs external doc sibling skills
const readmePath = join(rootDir, "sources/addy/README.md");
check("sources/addy/README.md exists", existsSync(readmePath));
const readmeLines = existsSync(readmePath) ? readFileSync(readmePath, "utf-8").split("\n") : [];
const readmeLine376 = readmeLines[375] || "";
check("README.md:376 lists shipping-and-launch under Ship", readmeLine376.includes("shipping-and-launch/") && readmeLine376.includes("Ship"), `Actual: ${readmeLine376}`);

// Also check CLAUDE.md:26
const claudePath = join(rootDir, "sources/addy/CLAUDE.md");
check("sources/addy/CLAUDE.md exists", existsSync(claudePath));
const claudeLines = existsSync(claudePath) ? readFileSync(claudePath, "utf-8").split("\n") : [];
const claudeLine26 = claudeLines[25] || "";
check("CLAUDE.md:26 lists shipping-and-launch under Ship", claudeLine26.includes("shipping-and-launch") && claudeLine26.includes("**Ship:**"), `Actual: ${claudeLine26}`);

// 4. Verify Deliverables Structure and Content
console.log("\n--- Testing Deliverable Structure and Consistency ---");

const invEntryPath = join(rootDir, "docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md");
check("Inventory entry file exists", existsSync(invEntryPath));
const invEntryContent = existsSync(invEntryPath) ? readFileSync(invEntryPath, "utf-8") : "";

// Check required sections per METHOD.md §4
const requiredSections = [
  "## Purpose",
  "## Design intent",
  "## Phase",
  "## Inputs",
  "## Outputs",
  "## Invokes",
  "## Invoked by",
  "## Concepts named",
  "## Structure",
  "## Scripts",
  "## Defects",
  "## Observations",
  "## Context cost"
];

for (const sec of requiredSections) {
  check(`Inventory entry contains section '${sec}'`, invEntryContent.includes(sec));
}

// Check frontmatter
check("Inventory entry has frontmatter package: addy", invEntryContent.includes("package: addy"));
check("Inventory entry has frontmatter path: ../addy-external/ci-cd-and-automation.md", invEntryContent.includes("path: ../addy-external/ci-cd-and-automation.md"));
check("Inventory entry has frontmatter type: external-doc", invEntryContent.includes("type: external-doc"));
check("Inventory entry has frontmatter bytes: 26179", invEntryContent.includes("bytes: 26179"));
check("Inventory entry has frontmatter unit: inv-addy-25", invEntryContent.includes("unit: inv-addy-25"));

// 5. Unit Report Checks
const unitReportPath = join(rootDir, "docs/analysis/inventory/addy/_units/inv-addy-25.md");
check("Unit report exists", existsSync(unitReportPath));
const unitReportContent = existsSync(unitReportPath) ? readFileSync(unitReportPath, "utf-8") : "";

check("Unit report has unit: inv-addy-25", unitReportContent.includes("unit: inv-addy-25"));
check("Unit report has session: 007", unitReportContent.includes("session: 007"));
check("Unit report lists ../addy-external/ci-cd-and-automation.md checked", unitReportContent.includes("- [x] `../addy-external/ci-cd-and-automation.md`"));
check("Unit report documents execution of skills CLI", unitReportContent.includes("npx skills add addyosmani/agent-skills --skill ci-cd-and-automation"));

// 6. Manifest Checks
console.log("\n--- Testing Manifest addy.md ---");
const manifestPath = join(rootDir, "docs/analysis/manifest/addy.md");
check("Manifest exists", existsSync(manifestPath));
const manifestLines = existsSync(manifestPath) ? readFileSync(manifestPath, "utf-8").split("\n") : [];
const manifestRow200 = manifestLines[199] || "";
check("Manifest line 200 contains ci-cd-and-automation.md marked [x]", manifestRow200.includes("../addy-external/ci-cd-and-automation.md") && manifestRow200.includes("[x]"), `Actual: ${manifestRow200}`);

// 7. STATE.md Checks
console.log("\n--- Testing STATE.md ---");
const statePath = join(rootDir, "docs/plan/STATE.md");
check("STATE.md exists", existsSync(statePath));
const stateLines = existsSync(statePath) ? readFileSync(statePath, "utf-8").split("\n") : [];
const stateRow89 = stateLines[88] || "";
check("STATE.md line 89 has inv-addy-25 complete", stateRow89.includes("inv-addy-25") && stateRow89.includes("complete") && stateRow89.includes("docs/analysis/inventory/addy/_units/inv-addy-25.md"), `Actual: ${stateRow89}`);

console.log("\n=================================================================");
console.log(`VERIFICATION SUMMARY: ${passedChecks}/${totalChecks} PASSED (${failedChecks} FAILED)`);
console.log("=================================================================\n");

if (failedChecks > 0) {
  console.error("FAILURES:");
  for (const f of failures) {
    console.error(`  ${f}`);
  }
  process.exit(1);
} else {
  console.log("ALL EMPIRICAL CHECKS PASSED PERFECTLY!");
  process.exit(0);
}
