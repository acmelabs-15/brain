import { readFileSync, existsSync, statSync } from "fs";
import { join } from "path";

const rootDir = "/Users/peterkloss/Dev/ACMElabs/brain-v2";
const addyDocsDir = join(rootDir, "sources/addy");
const invDir = join(rootDir, "docs/analysis/inventory/addy");

const files = [
  {
    sourceRel: "docs/comparison.md",
    invFile: "docs-comparison-md.md",
    expectedBytes: 15362,
  },
  {
    sourceRel: "docs/developer-onboarding.md",
    invFile: "docs-developer-onboarding-md.md",
    expectedBytes: 7850,
  },
  {
    sourceRel: "docs/getting-started.md",
    invFile: "docs-getting-started-md.md",
    expectedBytes: 7104,
  },
  {
    sourceRel: "docs/copilot-setup.md",
    invFile: "docs-copilot-setup-md.md",
    expectedBytes: 3496,
  },
  {
    sourceRel: "docs/skill-anatomy.md",
    invFile: "docs-skill-anatomy-md.md",
    expectedBytes: 8849,
  },
];

let totalErrors = 0;

function error(msg: string) {
  console.error("  [ERROR]", msg);
  totalErrors++;
}

function success(msg: string) {
  console.log("  [PASS]", msg);
}

for (const f of files) {
  console.log(`\n=== Auditing: ${f.sourceRel} ===`);
  const sourcePath = join(addyDocsDir, f.sourceRel);
  const invPath = join(invDir, f.invFile);

  if (!existsSync(sourcePath)) {
    error(`Source file missing: ${sourcePath}`);
    continue;
  }
  if (!existsSync(invPath)) {
    error(`Inventory file missing: ${invPath}`);
    continue;
  }

  const sourceContent = readFileSync(sourcePath, "utf-8");
  const sourceLines = sourceContent.split("\n"); // 0-indexed: line N is sourceLines[N-1]
  const sourceStat = statSync(sourcePath);

  if (sourceStat.size !== f.expectedBytes) {
    error(`Source file byte mismatch: expected ${f.expectedBytes}, got ${sourceStat.size}`);
  } else {
    success(`Source file size verified: ${sourceStat.size} bytes`);
  }

  const invContent = readFileSync(invPath, "utf-8");

  // Check required sections
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
    "## Context cost",
  ];

  for (const sec of requiredSections) {
    if (!invContent.includes(sec)) {
      error(`Missing required section: ${sec}`);
    } else {
      const idx = invContent.indexOf(sec);
      const after = invContent.slice(idx + sec.length).trim();
      if (after.length === 0 || after.startsWith("##")) {
        error(`Empty section: ${sec}`);
      }
    }
  }

  // Verify Purpose
  const purposeMatch = invContent.match(/## Purpose[^\n]*\n+> "(.*?)" — (.*?):(\d+)/s);
  if (!purposeMatch) {
    error("Could not parse Purpose block");
  } else {
    const quote = purposeMatch[1];
    const citedFile = purposeMatch[2];
    const citedLineNum = parseInt(purposeMatch[3], 10);

    if (citedLineNum < 1 || citedLineNum > sourceLines.length) {
      error(`Purpose citation line out of range: ${citedLineNum}`);
    } else {
      const actualLine = sourceLines[citedLineNum - 1];
      if (!actualLine.includes(quote.slice(0, 40))) {
        error(`Purpose quote mismatch at line ${citedLineNum}. Source line: "${actualLine}"`);
      } else {
        success(`Purpose quote verified at line ${citedLineNum}`);
      }
    }
  }

  // Verify Concepts named
  const conceptsSectionMatch = invContent.match(/## Concepts named[^\n]*\n([\s\S]*?)(?=\n## Structure)/);
  if (!conceptsSectionMatch) {
    error("Could not parse Concepts named section");
  } else {
    const conceptLines = conceptsSectionMatch[1].split("\n").filter((l) => l.trim().startsWith("-"));
    let conceptPass = 0;
    let conceptFail = 0;

    for (const cLine of conceptLines) {
      // Format: - `<name>` — <path>:<lines> — <status>
      const m = cLine.match(/^\s*- `([^`]+)` — ([^:]+):([0-9, -]+) — (.*)$/);
      if (!m) {
        error(`Malformed concept line: ${cLine}`);
        conceptFail++;
        continue;
      }
      const conceptName = m[1];
      const citedPath = m[2];
      const lineSpec = m[3];
      const status = m[4].trim();

      if (!status.includes("defined here") && !status.includes("used here")) {
        error(`Invalid status "${status}" in concept line: ${cLine}`);
        conceptFail++;
      }

      const parts = lineSpec.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
      for (const part of parts) {
        if (part.includes("-")) {
          const [startStr, endStr] = part.split("-").map((s) => s.trim());
          const start = parseInt(startStr, 10);
          const end = parseInt(endStr, 10);
          if (isNaN(start) || isNaN(end) || start > end || start < 1 || end > sourceLines.length) {
            error(`Invalid range ${part} for concept "${conceptName}"`);
            conceptFail++;
            continue;
          }
          if (sourceLines[start - 1].trim().length === 0) {
            error(`Range start line ${start} is empty for concept "${conceptName}"`);
            conceptFail++;
          }
          if (sourceLines[end - 1].trim().length === 0) {
            error(`Range end line ${end} is empty for concept "${conceptName}"`);
            conceptFail++;
          }
          let foundInRange = false;
          for (let ln = start; ln <= end; ln++) {
            if (sourceLines[ln - 1].includes(conceptName)) {
              foundInRange = true;
              break;
            }
          }
          if (!foundInRange) {
            error(`Concept "${conceptName}" not found in range ${part}`);
            conceptFail++;
          } else {
            conceptPass++;
          }
        } else {
          const lineNum = parseInt(part, 10);
          if (isNaN(lineNum) || lineNum < 1 || lineNum > sourceLines.length) {
            error(`Line out of range: ${part} for concept "${conceptName}"`);
            conceptFail++;
            continue;
          }
          const actualLine = sourceLines[lineNum - 1];
          if (actualLine.trim().length === 0) {
            error(`Cited line ${lineNum} is empty for concept "${conceptName}"`);
            conceptFail++;
          } else if (actualLine.trim().startsWith("|---") || actualLine.trim().startsWith("|:---")) {
            error(`Cited line ${lineNum} is table delimiter for concept "${conceptName}"`);
            conceptFail++;
          } else if (!actualLine.includes(conceptName)) {
            error(`Concept "${conceptName}" not found on line ${lineNum}: "${actualLine}"`);
            conceptFail++;
          } else {
            conceptPass++;
          }
        }
      }
    }
    if (conceptFail === 0) {
      success(`All ${conceptPass} concept citations verified verbatim on non-empty lines (${conceptLines.length} concepts)`);
    } else {
      error(`${conceptFail} concept citations failed out of ${conceptPass + conceptFail}`);
    }
  }

  // Verify Structure headers
  const structureMatch = invContent.match(/## Structure\n([\s\S]*?)(?=\n## Scripts)/);
  if (!structureMatch) {
    error("Could not parse Structure section");
  } else {
    const structLines = structureMatch[1].split("\n").filter((l) => l.trim().startsWith("-"));
    let structPass = 0;
    let structFail = 0;
    for (const sLine of structLines) {
      // Format: - `<heading>` — <file>:(\d+)
      const m = sLine.match(/^\s*- `([^`]+)` — ([^:]+):(\d+)$/);
      if (m) {
        const expectedHeading = m[1].trim();
        const lineNum = parseInt(m[3], 10);
        if (lineNum < 1 || lineNum > sourceLines.length) {
          error(`Structure line out of range: ${lineNum}`);
          structFail++;
        } else {
          const actualLine = sourceLines[lineNum - 1].trim();
          if (!actualLine.includes(expectedHeading)) {
            error(`Structure heading mismatch at line ${lineNum}: expected "${expectedHeading}", got "${actualLine}"`);
            structFail++;
          } else {
            structPass++;
          }
        }
      } else {
        error(`Malformed structure line: ${sLine}`);
        structFail++;
      }
    }
    if (structFail === 0) {
      success(`All ${structPass} structure headings verified at exact source lines`);
    } else {
      error(`${structFail} structure headings failed`);
    }
  }

  // Check Invokes
  const invokesMatch = invContent.match(/## Invokes[^\n]*\n([\s\S]*?)(?=\n## Invoked by)/);
  if (invokesMatch) {
    const invkLines = invokesMatch[1].split("\n").filter((l) => l.trim().startsWith("-"));
    let invkPass = 0;
    let invkFail = 0;
    for (const line of invkLines) {
      if (line.trim() === "- none") {
        invkPass++;
        continue;
      }
      const m = line.match(/- ([^—]+) — ([^:]+):([0-9,-]+)/);
      if (m) {
        const kindAndName = m[1].trim();
        const targetPath = m[2].trim();
        const targetLine = m[3].trim();
        // Check target file
        const fullTarget = join(addyDocsDir, targetPath);
        if (!existsSync(fullTarget)) {
          error(`Invokes target file missing: ${targetPath}`);
          invkFail++;
        } else {
          invkPass++;
        }
      }
    }
    if (invkFail === 0) {
      success(`Invokes paths verified (${invkPass} checked)`);
    } else {
      error(`${invkFail} invokes targets failed`);
    }
  }
}

console.log(`\n================================`);
console.log(`Audit Complete. Total errors: ${totalErrors}`);
if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("ALL INDEPENDENT CHECKS PASSED!");
  process.exit(0);
}
