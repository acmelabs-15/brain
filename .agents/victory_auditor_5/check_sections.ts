import { readFileSync, existsSync } from "fs";
import { join } from "path";

const rootDir = "/Users/peterkloss/Dev/ACMElabs/brain-v2";
const invDir = join(rootDir, "docs/analysis/inventory/addy");

const files = [
  "docs-comparison-md.md",
  "docs-developer-onboarding-md.md",
  "docs-getting-started-md.md",
  "docs-copilot-setup-md.md",
  "docs-skill-anatomy-md.md",
];

const sections = [
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
  "## Context cost",
];

for (const f of files) {
  console.log(`\nChecking sections for ${f}:`);
  const content = readFileSync(join(invDir, f), "utf-8");
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const nextSec = sections[i + 1];
    const startIdx = content.indexOf(sec);
    if (startIdx === -1) {
      console.error(`  MISSING: ${sec}`);
      continue;
    }
    let secBody = "";
    if (nextSec) {
      const endIdx = content.indexOf(nextSec, startIdx);
      secBody = content.slice(startIdx + sec.length, endIdx).trim();
    } else {
      secBody = content.slice(startIdx + sec.length).trim();
    }
    const lines = secBody.split("\n").filter(l => l.trim().length > 0);
    console.log(`  ${sec}: ${lines.length} lines, first line: "${lines[0]?.slice(0, 60)}"`);
  }
}
