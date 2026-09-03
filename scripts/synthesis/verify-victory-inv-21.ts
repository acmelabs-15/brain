import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const root = "/Users/peterkloss/Dev/ACMElabs/brain-v2";

console.log("=== Independent Verification of inv-addy-21 ===");

const ideaRefineSrc = readFileSync(resolve(root, "sources/addy-external/idea-refine.md"), "utf-8").split("\n");
const debugSrc = readFileSync(resolve(root, "sources/addy-external/debugging-and-error-recovery.md"), "utf-8").split("\n");

const ideaRefineInv = readFileSync(resolve(root, "docs/analysis/inventory/addy/external-idea-refine-md.md"), "utf-8");
const debugInv = readFileSync(resolve(root, "docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md"), "utf-8");
const unitReport = readFileSync(resolve(root, "docs/analysis/inventory/addy/_units/inv-addy-21.md"), "utf-8");

let errors: string[] = [];

// 1. Check Concepts in idea-refine
console.log("\n--- Checking Concepts in external-idea-refine-md.md ---");
const conceptRegex = /- `([^`]+)` — sources\/addy-external\/idea-refine\.md:([0-9,-]+) — (defined here|used here)/g;
let match;
let count = 0;
while ((match = conceptRegex.exec(ideaRefineInv)) !== null) {
  count++;
  const [_, concept, linesStr, usage] = match;
  const lineNumbers = linesStr.split(",").map(s => s.trim()).flatMap(s => {
    if (s.includes("-")) {
      const [start, end] = s.split("-").map(Number);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    return [Number(s)];
  });

  let combinedText = "";
  for (const lineNum of lineNumbers) {
    combinedText += (ideaRefineSrc[lineNum - 1] || "") + " ";
  }
  const decodedText = combinedText.replace(/&amp;/g, "&").replace(/\s+/g, " ");
  if (!decodedText.includes(concept)) {
    errors.push(`Concept '${concept}' claimed at lines ${linesStr} in sources/addy-external/idea-refine.md was NOT found in those lines!`);
  }
}
console.log(`Checked ${count} concepts for idea-refine. Errors: ${errors.length}`);

// 2. Check Concepts in debugging-and-error-recovery
console.log("\n--- Checking Concepts in external-debugging-and-error-recovery-md.md ---");
const prevErrors = errors.length;
const debugConceptRegex = /- `([^`]+)` — sources\/addy-external\/debugging-and-error-recovery\.md:([0-9,-]+) — (defined here|used here)/g;
let debugCount = 0;
while ((match = debugConceptRegex.exec(debugInv)) !== null) {
  debugCount++;
  const [_, concept, linesStr, usage] = match;
  const lineNumbers = linesStr.split(",").map(s => s.trim()).flatMap(s => {
    if (s.includes("-")) {
      const [start, end] = s.split("-").map(Number);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    return [Number(s)];
  });

  let combinedText = "";
  for (const lineNum of lineNumbers) {
    combinedText += (debugSrc[lineNum - 1] || "") + " ";
  }
  const decodedText = combinedText.replace(/&amp;/g, "&").replace(/\s+/g, " ");
  if (!decodedText.includes(concept)) {
    errors.push(`Concept '${concept}' claimed at lines ${linesStr} in sources/addy-external/debugging-and-error-recovery.md was NOT found in those lines!`);
  }
}
console.log(`Checked ${debugCount} concepts for debugging-and-error-recovery. New errors: ${errors.length - prevErrors}`);

// 3. Verify cited local files exist
console.log("\n--- Checking file existence of cited paths ---");
const citedFiles = [
  "sources/addy/skills/idea-refine/SKILL.md",
  "sources/addy/skills/debugging-and-error-recovery/SKILL.md",
  "sources/addy/skills/interview-me/SKILL.md",
  "sources/addy/skills/spec-driven-development/SKILL.md",
  "sources/addy/skills/browser-testing-with-devtools/SKILL.md",
  "sources/addy/README.md",
  "sources/addy/CONTRIBUTING.md",
  "sources/addy/evals/README.md",
  "sources/addy/scripts/lib/skill-lint.js",
  "sources/addy/scripts/validate-skills.js",
  "sources/addy/.claude/commands/spec.md",
  "sources/addy/commands/spec.toml",
  "sources/addy/commands/build.toml",
  "sources/addy/commands/test.toml",
  "docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md",
  "docs/analysis/manifest/addy.md",
  "docs/plan/STATE.md"
];

for (const path of citedFiles) {
  const full = resolve(root, path);
  if (!existsSync(full)) {
    errors.push(`Cited path does not exist on disk: ${path}`);
  } else {
    console.log(`  ✓ ${path} exists`);
  }
}

// 4. Verify specific defect claims
console.log("\n--- Verifying Defect Claims ---");
// Defect A: idea-refine section checks exempt in scripts/lib/skill-lint.js
const skillLintContent = readFileSync(resolve(root, "sources/addy/scripts/lib/skill-lint.js"), "utf-8");
if (!skillLintContent.includes("idea-refine") || !skillLintContent.includes("using-agent-skills")) {
  errors.push("Defect verification failed: skill-lint.js does not contain expected exemptions for idea-refine");
} else {
  console.log("  ✓ Confirmed idea-refine exemption in scripts/lib/skill-lint.js");
}

// Defect B: /spec command in .claude/commands/spec.md invokes spec-driven-development
const specCommandContent = readFileSync(resolve(root, "sources/addy/.claude/commands/spec.md"), "utf-8");
if (!specCommandContent.includes("spec-driven-development")) {
  errors.push("Defect verification failed: .claude/commands/spec.md does not reference spec-driven-development");
} else {
  console.log("  ✓ Confirmed /spec command references spec-driven-development");
}

// Defect C: debugging-and-error-recovery step 6 in SKILL.md
const debugSkillContent = readFileSync(resolve(root, "sources/addy/skills/debugging-and-error-recovery/SKILL.md"), "utf-8");
if (!debugSkillContent.includes("Step 6: Verify End-to-End") && !debugSkillContent.includes("Verify End-to-End")) {
  errors.push("Defect verification failed: debugging-and-error-recovery SKILL.md does not contain Step 6: Verify End-to-End");
} else {
  console.log("  ✓ Confirmed Step 6: Verify End-to-End in debugging-and-error-recovery SKILL.md");
}

// Defect D: commands/build.toml references debugging-and-error-recovery
const buildTomlContent = readFileSync(resolve(root, "sources/addy/commands/build.toml"), "utf-8");
if (!buildTomlContent.includes("debugging-and-error-recovery")) {
  errors.push("Defect verification failed: commands/build.toml does not reference debugging-and-error-recovery");
} else {
  console.log("  ✓ Confirmed commands/build.toml references debugging-and-error-recovery");
}

console.log(`\nVerification Complete! Total errors: ${errors.length}`);
if (errors.length > 0) {
  console.error("FAILURES:");
  errors.forEach(e => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("ALL FORENSIC CHECKS PASSED!");
  process.exit(0);
}
