import { readFileSync, existsSync } from "fs";

const files = [
  "docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md",
  "docs/analysis/inventory/addy/external-incremental-implementation-md.md"
];

const requiredSections = [
  "## Purpose — required, verbatim",
  "## Design intent — required",
  "## Phase — required",
  "## Inputs — required",
  "## Outputs — required",
  "## Invokes — required",
  "## Invoked by — required",
  "## Concepts named — required, verbatim",
  "## Structure",
  "## Scripts — required if type is script or the skill ships scripts",
  "## Defects — required",
  "## Observations",
  "## Context cost"
];

let failures = 0;

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`MISSING FILE: ${file}`);
    failures++;
    continue;
  }
  const content = readFileSync(file, "utf-8");
  for (const sec of requiredSections) {
    if (!content.includes(sec)) {
      console.error(`MISSING SECTION in ${file}: ${sec}`);
      failures++;
    }
  }

  // Check frontmatter
  if (!content.startsWith("---\n")) {
    console.error(`MISSING FRONTMATTER in ${file}`);
    failures++;
  }
}

// Check unit report
const unitReport = "docs/analysis/inventory/addy/_units/inv-addy-23.md";
if (!existsSync(unitReport)) {
  console.error(`MISSING UNIT REPORT: ${unitReport}`);
  failures++;
} else {
  const content = readFileSync(unitReport, "utf-8");
  const unitSections = [
    "## Files assigned",
    "## Outputs produced",
    "## Scripts executed",
    "## Coverage self-check",
    "## Cross-unit notes",
    "## Blocked or uncertain",
    "## Time and size"
  ];
  for (const sec of unitSections) {
    if (!content.includes(sec)) {
      console.error(`MISSING SECTION in ${unitReport}: ${sec}`);
      failures++;
    }
  }
}

console.log(`Schema & Sections Verification Failures: ${failures}`);
process.exit(failures > 0 ? 1 : 0);
