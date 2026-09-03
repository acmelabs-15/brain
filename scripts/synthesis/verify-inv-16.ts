import { readFileSync, existsSync } from "fs";
import { resolve, join } from "path";
import { execSync } from "child_process";

const rootDir = resolve(".");
const addyDir = join(rootDir, "sources/addy");

interface InventoryTarget {
  id: string;
  inventoryPath: string;
  sourcePath: string;
}

const targets: InventoryTarget[] = [
  {
    id: "constraint-driven-development",
    inventoryPath: "docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md",
    sourcePath: "sources/addy/skills/constraint-driven-development/SKILL.md",
  },
  {
    id: "code-review-and-quality",
    inventoryPath: "docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md",
    sourcePath: "sources/addy/skills/code-review-and-quality/SKILL.md",
  },
];

console.log("=================================================================");
console.log("  EMPIRICAL CHALLENGER 2 VERIFICATION HARNESS (inv-addy-16)     ");
console.log("=================================================================\n");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const findings: { category: string; severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW"; description: string }[] = [];

function recordResult(pass: boolean, msg: string, category: string, severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" = "MEDIUM") {
  totalTests++;
  if (pass) {
    passedTests++;
    console.log(`  [PASS] ${msg}`);
  } else {
    failedTests++;
    console.log(`  [FAIL] ${msg}`);
    findings.push({ category, severity, description: msg });
  }
}

function parseSection(content: string, sectionName: string): string[] {
  const lines = content.split("\n");
  const startIndex = lines.findIndex(l => l.startsWith(`## ${sectionName}`));
  if (startIndex === -1) return [];
  const result: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) break;
    if (line.trim().startsWith("- ")) {
      result.push(line.trim().substring(2));
    }
  }
  return result;
}

// =====================================================================
// 1. VERBATIM QUOTES & PURPOSE INTEGRITY
// =====================================================================
console.log("--- 1. VERBATIM QUOTES INTEGRITY ---");

for (const target of targets) {
  const inv = readFileSync(target.inventoryPath, "utf-8");
  const src = readFileSync(target.sourcePath, "utf-8");
  const srcLines = src.split("\n");

  // Extract all blockquotes under Purpose
  const purposeSection = inv.split("## Purpose — required, verbatim")[1]?.split("## Design intent")[0] || "";
  const quoteRegex = /> "([^"\\]*(?:\\.[^"\\]*)*)" — ([^:\n]+):(\d+)/g;
  let match;

  while ((match = quoteRegex.exec(purposeSection)) !== null) {
    const rawQuote = match[1].replace(/\\"/g, '"');
    const citedFile = match[2].trim();
    const lineNum = parseInt(match[3], 10);
    const actualLine = srcLines[lineNum - 1] || "";

    // Check exact line match or substring
    const exactLineMatch = actualLine.includes(rawQuote);
    if (exactLineMatch) {
      recordResult(true, `${target.id}: Purpose quote at line ${lineNum} matched verbatim`, "Verbatim Quotes");
    } else {
      // Investigate why it didn't match
      console.log(`\n  [DEBUG] Quote mismatch in ${target.id} at line ${lineNum}:`);
      console.log(`    Cited line: "${actualLine}"`);
      console.log(`    Raw quote:  "${rawQuote.substring(0, 80)}..."`);
      
      // Check if markdown formatting was stripped
      if (actualLine.includes(`**${rawQuote.split(":")[0]}**`)) {
        recordResult(
          false,
          `${target.id}: Purpose quote at line ${lineNum} stripped markdown formatting (** around heading)`,
          "Verbatim Quotes",
          "LOW"
        );
      } else if (actualLine.startsWith("description: ") && actualLine.replace("description: ", "") === rawQuote) {
        recordResult(true, `${target.id}: Purpose quote at line ${lineNum} matched description field value exactly`, "Verbatim Quotes");
      } else {
        recordResult(false, `${target.id}: Purpose quote at line ${lineNum} does not match source line`, "Verbatim Quotes", "HIGH");
      }
    }
  }
}

// =====================================================================
// 2. CONCEPTS NAMED VERBATIM & LINE CITATION CHECK
// =====================================================================
console.log("\n--- 2. CONCEPTS NAMED VERBATIM & LINE ACCURACY ---");

for (const target of targets) {
  const inv = readFileSync(target.inventoryPath, "utf-8");
  const src = readFileSync(target.sourcePath, "utf-8");
  const srcLines = src.split("\n");
  const concepts = parseSection(inv, "Concepts named — required, verbatim");

  console.log(`Checking ${concepts.length} concepts in ${target.id}...`);

  for (const item of concepts) {
    // format: `concept` — path:line — defined here | used here
    const m = item.match(/^`([^`]+)` — ([^:]+):(\d+)(?:-(\d+))? — (.+)$/);
    if (!m) {
      recordResult(false, `${target.id}: Malformed concept line: ${item}`, "Concepts Named", "MEDIUM");
      continue;
    }

    const conceptName = m[1];
    const startLine = parseInt(m[3], 10);
    const endLine = m[4] ? parseInt(m[4], 10) : startLine;

    // Check lines in source
    let found = false;
    for (let l = startLine; l <= endLine; l++) {
      const lineContent = srcLines[l - 1] || "";
      if (lineContent.toLowerCase().includes(conceptName.toLowerCase())) {
        found = true;
        break;
      }
    }

    if (found) {
      passedTests++;
      totalTests++;
    } else {
      recordResult(
        false,
        `${target.id}: Concept "${conceptName}" not found at cited line(s) ${startLine}${endLine !== startLine ? `-${endLine}` : ""} (actual line content: "${srcLines[startLine - 1]?.trim()}")`,
        "Concepts Named",
        "HIGH"
      );
    }
  }
}

// =====================================================================
// 3. CITATION ACCURACY SAMPLING (INPUTS, OUTPUTS, DEFECTS, ETC.)
// =====================================================================
console.log("\n--- 3. CITATION ACCURACY SAMPLING ACROSS OTHER SECTIONS ---");

for (const target of targets) {
  const inv = readFileSync(target.inventoryPath, "utf-8");
  const src = readFileSync(target.sourcePath, "utf-8");
  const srcLines = src.split("\n");

  // Find all citations of the form `skills/.../SKILL.md:NN`
  const citationRegex = new RegExp(`${target.sourcePath.replace("sources/addy/", "")}:(\\d+)(?:-(\\d+))?`, "g");
  let cMatch;
  const sampledLines = new Set<number>();

  while ((cMatch = citationRegex.exec(inv)) !== null) {
    sampledLines.add(parseInt(cMatch[1], 10));
  }

  console.log(`Found ${sampledLines.size} unique cited lines in ${target.id}`);
  let validCitations = 0;
  for (const lineNum of sampledLines) {
    if (lineNum >= 1 && lineNum <= srcLines.length) {
      validCitations++;
    } else {
      recordResult(false, `${target.id}: Cited line ${lineNum} is out of range (total lines: ${srcLines.length})`, "Citations", "HIGH");
    }
  }
  recordResult(validCitations === sampledLines.size, `${target.id}: All ${sampledLines.size} sampled line numbers exist in source file`, "Citations");
}

// =====================================================================
// 4. FILE EXISTENCE & LINK VERIFICATION (INVOKES & INVOKED BY)
// =====================================================================
console.log("\n--- 4. FILE EXISTENCE (INVOKES & INVOKED BY) ---");

for (const target of targets) {
  const inv = readFileSync(target.inventoryPath, "utf-8");

  // Invokes
  const invokes = parseSection(inv, "Invokes — required");
  for (const invItem of invokes) {
    if (invItem === "none") continue;
    const parts = invItem.split(" — ");
    const ref = parts[0].trim();
    let relPath = "";
    if (ref.startsWith("skill ")) {
      relPath = `skills/${ref.replace("skill ", "").trim()}/SKILL.md`;
    } else if (ref.startsWith("reference ")) {
      const raw = ref.replace("reference ", "").trim();
      if (raw.startsWith("../../")) {
        relPath = raw.replace("../../", "");
      } else if (raw.startsWith("references/")) {
        relPath = `skills/${target.id}/${raw}`;
      } else {
        relPath = raw;
      }
    } else if (ref.startsWith("command ")) {
      const cmdName = ref.replace("command /", "").replace("command ", "").trim();
      relPath = `commands/${cmdName}.toml`;
    }

    const fullPath = join(addyDir, relPath);
    const exists = existsSync(fullPath);

    // Note: /loop is documented as non-existent in defects
    if (ref.includes("/loop")) {
      recordResult(!exists, `${target.id}: Invokes non-existent command /loop correctly absent on disk`, "Invokes File Existence");
    } else {
      recordResult(exists, `${target.id}: Invoked target exists on disk: ${relPath}`, "Invokes File Existence", exists ? "LOW" : "HIGH");
    }
  }

  // Invoked by
  const invokedBy = parseSection(inv, "Invoked by — required");
  for (const ibItem of invokedBy) {
    if (ibItem === "none" || ibItem === "orphan") continue;
    const parts = ibItem.split(" — ");
    let fileRef = parts[0].trim().replace(/^`?([a-z]+ )?`?/, "").replace(/`/g, "");
    if (fileRef.startsWith("command ")) fileRef = fileRef.replace("command ", "");
    if (fileRef.startsWith("doc ")) fileRef = fileRef.replace("doc ", "");
    if (fileRef.startsWith("skill ")) fileRef = fileRef.replace("skill ", "");
    if (fileRef.startsWith("reference ")) fileRef = fileRef.replace("reference ", "");
    if (fileRef.startsWith("agent ")) fileRef = fileRef.replace("agent ", "");
    if (fileRef.startsWith("config ")) fileRef = fileRef.replace("config ", "");
    if (fileRef.startsWith("script ")) fileRef = fileRef.replace("script ", "");

    const fullPath = join(addyDir, fileRef);
    const exists = existsSync(fullPath);
    recordResult(exists, `${target.id}: Invoked-by source exists on disk: ${fileRef}`, "Invoked By File Existence", exists ? "LOW" : "HIGH");

    // Also check if that file actually contains a reference to the skill
    if (exists) {
      const callerContent = readFileSync(fullPath, "utf-8");
      const callerLines = callerContent.split("\n");
      const lineNum = parts[1] ? parseInt(parts[1].split(":")[1] || "0", 10) : 0;
      const referencesSkill = callerContent.includes(target.id);
      recordResult(
        referencesSkill,
        `${target.id}: Invoked-by file ${fileRef} actually mentions "${target.id}"`,
        "Invoked By Reference",
        referencesSkill ? "LOW" : "HIGH"
      );

      if (lineNum > 0 && lineNum <= callerLines.length) {
        const citedLineContent = callerLines[lineNum - 1];
        const lineMentions = citedLineContent.includes(target.id) || citedLineContent.includes(target.id.replace(/-/g, " "));
        if (!lineMentions) {
          console.log(`  [NOTE] ${target.id}: Line ${lineNum} in ${fileRef} does not directly mention "${target.id}". Line: "${citedLineContent.trim()}"`);
        }
      }
    }
  }
}

// =====================================================================
// 5. DEFECT VERIFICATION & STRESS TESTING
// =====================================================================
console.log("\n--- 5. DEFECT REPRODUCIBILITY & STRESS HARNESS ---");

// Test floor-guard bugs documented in inv-addy-16
console.log("Testing floor-guard.mjs edge cases...");

const floorGuardRefPath = join(addyDir, "skills/constraint-driven-development/references/floor-guard.md");
const floorGuardContent = readFileSync(floorGuardRefPath, "utf-8");
const codeBlockMatch = floorGuardContent.match(/```javascript\n([\s\S]*?)```/);

if (codeBlockMatch) {
  const scriptContent = codeBlockMatch[1];
  const tmpScriptPath = "/tmp/test-floor-guard.mjs";
  Bun.write(tmpScriptPath, scriptContent);

  // 1. Untracked diff bug check:
  // In floor-guard.mjs:
  // function git(args) { try { return execFileSync("git", args, { encoding: "utf8" }).trim(); } catch { return null; } }
  // const untracked = git(["status", "--porcelain"]) ...
  // const diff = git(["diff", "--no-index", "/dev/null", f]);
  // git diff --no-index /dev/null <file> exits 1 when the file has content!
  // Because it exits 1, execFileSync THROWS!
  // Because it throws, git() catches and returns null!
  // Therefore `diff` is null!
  // And `if (diff) { ... }` evaluates to FALSE!
  console.log("  Empirically testing floor-guard untracked file handling:");
  const testFile = "/tmp/test-untracked-secret.ts";
  Bun.write(testFile, 'const secret = "ghp_123456789012345678901234567890123456"; // @ts-ignore\n');
  
  // Test git diff --no-index exit code
  try {
    execSync(`git diff --no-index /dev/null ${testFile}`, { stdio: "pipe" });
    console.log("  [FAIL] git diff --no-index unexpectedly exited 0");
  } catch (e: any) {
    recordResult(
      e.status === 1,
      `Confirmed: git diff --no-index exits 1 on diff, proving execFileSync throws and drops untracked files in floor-guard.mjs`,
      "Defect Verification"
    );
  }

  // 2. Deleted test file slicing bug check:
  // In floor-guard.mjs line 48:
  // const file = line.slice(6).trim(); // for line starting with "+++ b/"
  // When a file is deleted in git diff:
  // --- a/tests/foo.test.ts
  // +++ /dev/null
  // line.slice(6) on "+++ /dev/null" gives "v/null"!
  const deletedHeader = "+++ /dev/null";
  const sliced = deletedHeader.slice(6).trim();
  const testRegex = /\.(test|spec)\.|_test\.|test_/;
  const matchesRegex = testRegex.test(sliced);
  recordResult(
    sliced === "v/null" && !matchesRegex,
    `Confirmed: '+++ /dev/null'.slice(6) evaluates to '${sliced}', failing test regex and allowing deleted tests to slip past floor-guard`,
    "Defect Verification"
  );
}

// =====================================================================
// 6. R6 CONCEPT COVERAGE AUDIT
// =====================================================================
console.log("\n--- 6. CONCEPT COVERAGE AUDIT (R6) ---");

// Check for uncatalogued named concepts in constraint-driven-development
const cddSrc = readFileSync(targets[0].sourcePath, "utf-8");
const cddInv = readFileSync(targets[0].inventoryPath, "utf-8");
const crqSrc = readFileSync(targets[1].sourcePath, "utf-8");
const crqInv = readFileSync(targets[1].inventoryPath, "utf-8");

const potentialCddConcepts = [
  "p/owasp-top-ten",
  "depcruise",
  "TODO",
  ".skip",
  "Pre-product-market-fit",
  "Rule of 500",
];

console.log("Auditing potentially uncaptured concepts in constraint-driven-development:");
for (const concept of potentialCddConcepts) {
  const inSrc = cddSrc.includes(concept);
  const inInv = cddInv.includes(`\`${concept}\``);
  console.log(`  "${concept}": in source? ${inSrc} | in inventory concepts? ${inInv}`);
}

const potentialCrqConcepts = [
  "LGTM",
  "rubber-stamp",
  "Rule of 500",
  "Model A",
  "Model B",
  "First line",
  "Body",
  "Anti-patterns",
];

console.log("\nAuditing potentially uncaptured concepts in code-review-and-quality:");
for (const concept of potentialCrqConcepts) {
  const inSrc = crqSrc.includes(concept);
  const inInv = crqInv.includes(`\`${concept}\``);
  console.log(`  "${concept}": in source? ${inSrc} | in inventory concepts? ${inInv}`);
}

// =====================================================================
// 7. SUMMARY & FINDINGS
// =====================================================================
console.log("\n=================================================================");
console.log(`  VERIFICATION RESULTS: ${passedTests} PASSED, ${failedTests} FAILED out of ${totalTests} CHECKS`);
console.log("=================================================================");

if (findings.length > 0) {
  console.log("\nFindings for Report:");
  for (const f of findings) {
    console.log(`  [${f.severity}] [${f.category}] ${f.description}`);
  }
}
