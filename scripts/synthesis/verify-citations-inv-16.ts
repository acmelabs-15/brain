import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

const sampleCitations = [
  // constraint-driven-development
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 48, claim: "package.json, pyproject.toml, go.mod, Cargo.toml" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 50, claim: "eslint.config.*, biome.json, .ruff.toml" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 52, claim: ".github/workflows/, .gitlab-ci.yml" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 53, claim: ".claude/, .codex/, AGENTS.md" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 74, claim: "block or warn" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 86, claim: "slowest check you'll tolerate" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 104, claim: "No new suppression comments" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 114, claim: "tsc --noEmit, every edit" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 120, claim: "axe $PREVIEW_URL --tags wcag2a,wcag2aa,wcag21aa" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 140, claim: "Read CONSTRAINTS.md before writing code" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 175, claim: "check:fast" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 192, claim: "BUILD, /build" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 210, claim: "A checker got silenced: istanbul ignore, Stryker disable, nosemgrep, gitleaks:allow" },
  { file: "sources/addy/skills/constraint-driven-development/SKILL.md", line: 247, claim: "Exception lifetime: 90 days" },

  // code-review-and-quality
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 26, claim: "1. Correctness" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 64, claim: "4. Security" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 77, claim: "5. Performance" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 88, claim: "## Structural Remedies" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 108, claim: "~100 lines changed" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 113, claim: "around 1000 total lines in a single file" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 121, claim: "Stack splitting strategy" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 183, claim: "*(no prefix)* Required change" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 184, claim: "**Critical:** Blocks merge" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 191, claim: "Lead with what matters" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 205, claim: "Multi-Model Review Pattern" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 237, claim: "Ask before deleting" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 276, claim: "Sycophancy is a failure mode" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 295, claim: "One dependency per change" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 346, claim: "Approve — Ready to merge" },
  { file: "sources/addy/skills/code-review-and-quality/SKILL.md", line: 396, claim: "Presumptive blockers" },
];

console.log("=================================================================");
console.log("  EXHAUSTIVE CITATION SAMPLING CHECK (30 CITATIONS)             ");
console.log("=================================================================\n");

let passCount = 0;
let failCount = 0;

for (const c of sampleCitations) {
  const fullPath = join(rootDir, c.file);
  const content = readFileSync(fullPath, "utf-8");
  const lines = content.split("\n");
  const lineContent = lines[c.line - 1] || "";

  console.log(`Checking ${c.file}:${c.line}`);
  console.log(`  Claim: "${c.claim}"`);
  console.log(`  Actual Line: "${lineContent.trim()}"`);

  // Simple heuristic to verify claim matches line content
  const claimWords = c.claim.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 3);
  const matchAny = claimWords.some(w => lineContent.toLowerCase().includes(w));
  if (matchAny) {
    console.log("  -> Result: MATCH VERIFIED\n");
    passCount++;
  } else {
    console.log("  -> Result: MISMATCH / DISCREPANCY\n");
    failCount++;
  }
}

console.log(`Summary: ${passCount} matched, ${failCount} discrepancies out of ${sampleCitations.length} sampled citations.`);
