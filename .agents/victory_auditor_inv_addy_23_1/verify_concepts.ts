import { readFileSync } from "fs";

interface CheckResult {
  file: string;
  totalConcepts: number;
  matchedConcepts: number;
  unmatched: string[];
}

function verifyConcepts(inventoryPath: string, sourcePath: string): CheckResult {
  const invContent = readFileSync(inventoryPath, "utf-8");
  const srcContent = readFileSync(sourcePath, "utf-8");
  const srcLines = srcContent.split("\n");

  const conceptsSection = invContent.split("## Concepts named — required, verbatim")[1].split("## Structure")[0];
  const conceptLines = conceptsSection.trim().split("\n").filter(l => l.startsWith("- `"));

  let matched = 0;
  const unmatched: string[] = [];

  for (const line of conceptLines) {
    const match = line.match(/^- `([^`]+)`\s+—\s+([^—]+)\s+—\s+(defined here|used here)/);
    if (!match) {
      unmatched.push(`Format error: ${line}`);
      continue;
    }
    const concept = match[1];
    const locationStr = match[2].trim();
    
    // Parse location lines e.g. "../addy-external/foo.md:5" or "1, 5, 8"
    const lineParts = locationStr.replace(/^.*?\.md:/, "").split(",").map(s => s.trim());
    
    let foundInAnyCitedLine = false;
    for (const part of lineParts) {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map(Number);
        for (let i = start; i <= end; i++) {
          if (srcLines[i - 1] && srcLines[i - 1].includes(concept)) {
            foundInAnyCitedLine = true;
            break;
          }
        }
      } else {
        const lineNum = Number(part);
        if (srcLines[lineNum - 1] && srcLines[lineNum - 1].includes(concept)) {
          foundInAnyCitedLine = true;
          break;
        }
      }
    }

    if (foundInAnyCitedLine) {
      matched++;
    } else {
      unmatched.push(`Concept "${concept}" not found in lines "${locationStr}"`);
    }
  }

  return {
    file: inventoryPath,
    totalConcepts: conceptLines.length,
    matchedConcepts: matched,
    unmatched
  };
}

const r1 = verifyConcepts(
  "docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md",
  "sources/addy-external/planning-and-task-breakdown.md"
);
console.log(`planning-and-task-breakdown: ${r1.matchedConcepts}/${r1.totalConcepts} matched`);
if (r1.unmatched.length > 0) {
  console.log("Unmatched in planning-and-task-breakdown:", r1.unmatched);
}

const r2 = verifyConcepts(
  "docs/analysis/inventory/addy/external-incremental-implementation-md.md",
  "sources/addy-external/incremental-implementation.md"
);
console.log(`incremental-implementation: ${r2.matchedConcepts}/${r2.totalConcepts} matched`);
if (r2.unmatched.length > 0) {
  console.log("Unmatched in incremental-implementation:", r2.unmatched);
}

const totalFailures = r1.unmatched.length + r2.unmatched.length;
process.exit(totalFailures > 0 ? 1 : 0);
