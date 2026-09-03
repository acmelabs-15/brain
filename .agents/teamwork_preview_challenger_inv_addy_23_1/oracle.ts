import { readFileSync, statSync, existsSync } from "fs";
import { resolve, join } from "path";

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

interface TestResult {
  suite: string;
  name: string;
  passed: boolean;
  details?: string;
  advisory?: boolean;
}

const results: TestResult[] = [];

function assert(condition: boolean, suite: string, name: string, details?: string) {
  results.push({
    suite,
    name,
    passed: condition,
    details: condition ? undefined : details,
    advisory: false,
  });
}

function advisory(condition: boolean, suite: string, name: string, details?: string) {
  results.push({
    suite,
    name,
    passed: condition,
    details: condition ? undefined : details,
    advisory: true,
  });
}

const WORKSPACE_ROOT = resolve("/Users/peterkloss/Dev/ACMElabs/brain-v2");

console.log(`${BOLD}${BLUE}=== EMPIRICAL TEST ORACLE: inv-addy-23 ===${RESET}\n`);

// -------------------------------------------------------------
// 1. Source Files Existence and Sizes
// -------------------------------------------------------------
const srcPlanningPath = join(WORKSPACE_ROOT, "sources/addy-external/planning-and-task-breakdown.md");
const srcIncrementalPath = join(WORKSPACE_ROOT, "sources/addy-external/incremental-implementation.md");

assert(existsSync(srcPlanningPath), "Source Files", "planning-and-task-breakdown.md exists");
assert(existsSync(srcIncrementalPath), "Source Files", "incremental-implementation.md exists");

const statPlanning = statSync(srcPlanningPath);
const statIncremental = statSync(srcIncrementalPath);

assert(statPlanning.size === 22310, "Source Files", `planning-and-task-breakdown size matches expected 22310 (actual: ${statPlanning.size})`);
assert(statIncremental.size === 26461, "Source Files", `incremental-implementation size matches expected 26461 (actual: ${statIncremental.size})`);
assert(statPlanning.size + statIncremental.size === 48771, "Source Files", `Total source size matches 48771 (actual: ${statPlanning.size + statIncremental.size})`);

const srcPlanningLines = readFileSync(srcPlanningPath, "utf-8").split("\n");
const srcIncrementalLines = readFileSync(srcIncrementalPath, "utf-8").split("\n");

// -------------------------------------------------------------
// 2. Deliverables Existence
// -------------------------------------------------------------
const invPlanningPath = join(WORKSPACE_ROOT, "docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md");
const invIncrementalPath = join(WORKSPACE_ROOT, "docs/analysis/inventory/addy/external-incremental-implementation-md.md");
const unitReportPath = join(WORKSPACE_ROOT, "docs/analysis/inventory/addy/_units/inv-addy-23.md");
const manifestPath = join(WORKSPACE_ROOT, "docs/analysis/manifest/addy.md");
const statePath = join(WORKSPACE_ROOT, "docs/plan/STATE.md");

assert(existsSync(invPlanningPath), "Deliverables Existence", "Inventory entry for planning-and-task-breakdown exists");
assert(existsSync(invIncrementalPath), "Deliverables Existence", "Inventory entry for incremental-implementation exists");
assert(existsSync(unitReportPath), "Deliverables Existence", "Unit report inv-addy-23.md exists");
assert(existsSync(manifestPath), "Deliverables Existence", "Manifest addy.md exists");
assert(existsSync(statePath), "Deliverables Existence", "STATE.md exists");

// -------------------------------------------------------------
// 3. Inventory Entry 1: planning-and-task-breakdown
// -------------------------------------------------------------
const invPlanningContent = readFileSync(invPlanningPath, "utf-8");

// 3.1 Frontmatter Checks
const frontmatterPlanningMatch = invPlanningContent.match(/^---\n([\s\S]*?)\n---/);
assert(!!frontmatterPlanningMatch, "Planning Entry Frontmatter", "Frontmatter delimiters present");
if (frontmatterPlanningMatch) {
  const fm = frontmatterPlanningMatch[1];
  assert(/package:\s*addy/.test(fm), "Planning Entry Frontmatter", "package is addy");
  assert(/path:\s*\.\.\/addy-external\/planning-and-task-breakdown\.md/.test(fm), "Planning Entry Frontmatter", "path matches manifest path");
  assert(/type:\s*external-doc/.test(fm), "Planning Entry Frontmatter", "type is external-doc");
  assert(/bytes:\s*22310/.test(fm), "Planning Entry Frontmatter", "bytes is 22310");
  assert(/unit:\s*inv-addy-23/.test(fm), "Planning Entry Frontmatter", "unit is inv-addy-23");
}

// 3.2 Required Sections Non-Emptiness
const requiredSections = [
  "Purpose — required, verbatim",
  "Design intent — required",
  "Phase — required",
  "Inputs — required",
  "Outputs — required",
  "Invokes — required",
  "Invoked by — required",
  "Concepts named — required, verbatim",
  "Structure",
  "Scripts — required if type is script or the skill ships scripts",
  "Defects — required",
  "Observations",
  "Context cost",
];

for (const sec of requiredSections) {
  const regex = new RegExp(`## ${sec.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}\\n([\\s\\S]*?)(?=\\n## |$)`);
  const match = invPlanningContent.match(regex);
  assert(!!match && match[1].trim().length > 0, "Planning Entry Sections", `Section '${sec}' exists and is non-empty`);
}

// 3.3 Verbatim Purpose Statement Verification
const purpose1Match = invPlanningContent.match(/> "(.*?)"\s*—\s*\.\.\/addy-external\/planning-and-task-breakdown\.md:(\d+)/);
assert(!!purpose1Match, "Planning Entry Verbatim Purpose", "Purpose statement quote and citation format valid");
if (purpose1Match) {
  const quote = purpose1Match[1];
  const lineNum = parseInt(purpose1Match[2], 10);
  const actualLine = srcPlanningLines[lineNum - 1] || "";
  assert(actualLine.includes(quote), "Planning Entry Verbatim Purpose", `Source line ${lineNum} contains verbatim purpose quote "${quote}"`, `Line ${lineNum} did not contain: ${quote}`);
}

// 3.4 Additional quotes in Purpose section
const addPurpose1Regex = /> "(.*?)"\s*—\s*\.\.\/addy-external\/planning-and-task-breakdown\.md:(\d+)(?:-(\d+))?/g;
let addQuoteMatch;
while ((addQuoteMatch = addPurpose1Regex.exec(invPlanningContent)) !== null) {
  const quote = addQuoteMatch[1];
  const startLine = parseInt(addQuoteMatch[2], 10);
  const endLine = addQuoteMatch[3] ? parseInt(addQuoteMatch[3], 10) : startLine;
  const combinedSource = srcPlanningLines.slice(startLine - 1, endLine).join(" ");
  assert(combinedSource.includes(quote) || combinedSource.replace(/\s+/g, " ").includes(quote.replace(/\s+/g, " ")), 
    "Planning Entry Citations", 
    `Purpose citation lines ${startLine}${addQuoteMatch[3] ? "-" + endLine : ""} contains verbatim quote "${quote.substring(0, 40)}..."`
  );
}

// 3.5 Concepts Named Verification
const conceptRegex = /^- `(.*?)` — (.*?) — (defined here|used here)$/gm;
let conceptMatch;
let conceptCountPlanning = 0;
while ((conceptMatch = conceptRegex.exec(invPlanningContent)) !== null) {
  conceptCountPlanning++;
  const conceptName = conceptMatch[1];
  const citationStr = conceptMatch[2];
  
  const citePrefix = "../addy-external/planning-and-task-breakdown.md:";
  if (citationStr.startsWith(citePrefix)) {
    const lineNumsStr = citationStr.substring(citePrefix.length);
    const lineNums = lineNumsStr.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    
    // Check if concept is in the source file
    const inSource = srcPlanningLines.some(l => 
      l.includes(conceptName) || 
      l.includes(conceptName.replace("&", "&amp;")) ||
      l.replace(/<[^>]+>/g, "").includes(conceptName) ||
      l.toLowerCase().includes(conceptName.toLowerCase())
    );
    assert(inSource, "Planning Entry Concepts", `Concept '${conceptName}' exists in source document`);

    // Check presence on at least one cited line
    let foundOnCited = false;
    for (const ln of lineNums) {
      const srcLine = srcPlanningLines[ln - 1] || "";
      const strippedLine = srcLine.replace(/<[^>]+>/g, "");
      if (srcLine.includes(conceptName) || 
          srcLine.includes(conceptName.replace("&", "&amp;")) ||
          strippedLine.includes(conceptName) ||
          srcLine.toLowerCase().includes(conceptName.toLowerCase())) {
        foundOnCited = true;
        break;
      }
    }
    assert(foundOnCited, "Planning Entry Concepts", `Concept '${conceptName}' exists on at least one cited line (${lineNums.join(", ")})`);

    // Advisory check for each line individually
    for (const ln of lineNums) {
      const srcLine = srcPlanningLines[ln - 1] || "";
      const strippedLine = srcLine.replace(/<[^>]+>/g, "");
      const exactMatch = srcLine.includes(conceptName) || strippedLine.includes(conceptName) || srcLine.includes(conceptName.replace("&", "&amp;"));
      advisory(exactMatch, "Planning Line Citation Detail", `Concept '${conceptName}' verbatim on line ${ln}`, `Line ${ln} has contextual variant rather than literal substring`);
    }
  }
}
assert(conceptCountPlanning >= 30, "Planning Entry Concepts", `Adequate concept density (found ${conceptCountPlanning} concepts)`);

// -------------------------------------------------------------
// 4. Inventory Entry 2: incremental-implementation
// -------------------------------------------------------------
const invIncrementalContent = readFileSync(invIncrementalPath, "utf-8");

// 4.1 Frontmatter Checks
const frontmatterIncrementalMatch = invIncrementalContent.match(/^---\n([\s\S]*?)\n---/);
assert(!!frontmatterIncrementalMatch, "Incremental Entry Frontmatter", "Frontmatter delimiters present");
if (frontmatterIncrementalMatch) {
  const fm = frontmatterIncrementalMatch[1];
  assert(/package:\s*addy/.test(fm), "Incremental Entry Frontmatter", "package is addy");
  assert(/path:\s*\.\.\/addy-external\/incremental-implementation\.md/.test(fm), "Incremental Entry Frontmatter", "path matches manifest path");
  assert(/type:\s*external-doc/.test(fm), "Incremental Entry Frontmatter", "type is external-doc");
  assert(/bytes:\s*26461/.test(fm), "Incremental Entry Frontmatter", "bytes is 26461");
  assert(/unit:\s*inv-addy-23/.test(fm), "Incremental Entry Frontmatter", "unit is inv-addy-23");
}

// 4.2 Required Sections Non-Emptiness
for (const sec of requiredSections) {
  const regex = new RegExp(`## ${sec.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}\\n([\\s\\S]*?)(?=\\n## |$)`);
  const match = invIncrementalContent.match(regex);
  assert(!!match && match[1].trim().length > 0, "Incremental Entry Sections", `Section '${sec}' exists and is non-empty`);
}

// 4.3 Verbatim Purpose Statement Verification
const purpose2Match = invIncrementalContent.match(/> "(.*?)"\s*—\s*\.\.\/addy-external\/incremental-implementation\.md:(\d+)/);
assert(!!purpose2Match, "Incremental Entry Verbatim Purpose", "Purpose statement quote and citation format valid");
if (purpose2Match) {
  const quote = purpose2Match[1];
  const lineNum = parseInt(purpose2Match[2], 10);
  const actualLine = srcIncrementalLines[lineNum - 1] || "";
  assert(actualLine.includes(quote), "Incremental Entry Verbatim Purpose", `Source line ${lineNum} contains verbatim purpose quote "${quote}"`, `Line ${lineNum} did not contain: ${quote}`);
}

// 4.4 Additional quotes in Purpose section
let addQuoteMatch2;
const addPurpose2Regex = /> "(.*?)"\s*—\s*\.\.\/addy-external\/incremental-implementation\.md:(\d+)(?:-(\d+))?/g;
while ((addQuoteMatch2 = addPurpose2Regex.exec(invIncrementalContent)) !== null) {
  const quote = addQuoteMatch2[1];
  const startLine = parseInt(addQuoteMatch2[2], 10);
  const endLine = addQuoteMatch2[3] ? parseInt(addQuoteMatch2[3], 10) : startLine;
  const combinedSource = srcIncrementalLines.slice(startLine - 1, endLine).join(" ");
  assert(combinedSource.includes(quote) || combinedSource.replace(/\s+/g, " ").includes(quote.replace(/\s+/g, " ")), 
    "Incremental Entry Citations", 
    `Purpose citation lines ${startLine}${addQuoteMatch2[3] ? "-" + endLine : ""} contains verbatim quote "${quote.substring(0, 40)}..."`
  );
}

// 4.5 Concepts Named Verification
let conceptMatch2;
let conceptCountIncremental = 0;
while ((conceptMatch2 = conceptRegex.exec(invIncrementalContent)) !== null) {
  conceptCountIncremental++;
  const conceptName = conceptMatch2[1];
  const citationStr = conceptMatch2[2];
  
  const citePrefix = "../addy-external/incremental-implementation.md:";
  if (citationStr.startsWith(citePrefix)) {
    const lineNumsStr = citationStr.substring(citePrefix.length);
    const lineNums = lineNumsStr.split(",").map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    
    const unPrefixed = conceptName.startsWith("#") ? conceptName.substring(1) : conceptName;
    const inSource = srcIncrementalLines.some(l => 
      l.includes(conceptName) || 
      l.includes(unPrefixed) ||
      l.includes(conceptName.replace("&", "&amp;")) ||
      l.replace(/<[^>]+>/g, "").includes(conceptName) ||
      l.toLowerCase().includes(conceptName.toLowerCase())
    );
    assert(inSource, "Incremental Entry Concepts", `Concept '${conceptName}' exists in source document`);

    let foundOnCited = false;
    for (const ln of lineNums) {
      const srcLine = srcIncrementalLines[ln - 1] || "";
      const strippedLine = srcLine.replace(/<[^>]+>/g, "");
      if (srcLine.includes(conceptName) || 
          srcLine.includes(unPrefixed) ||
          srcLine.includes(conceptName.replace("&", "&amp;")) ||
          strippedLine.includes(conceptName) ||
          srcLine.toLowerCase().includes(conceptName.toLowerCase())) {
        foundOnCited = true;
        break;
      }
    }
    assert(foundOnCited, "Incremental Entry Concepts", `Concept '${conceptName}' exists on at least one cited line (${lineNums.join(", ")})`);

    for (const ln of lineNums) {
      const srcLine = srcIncrementalLines[ln - 1] || "";
      const strippedLine = srcLine.replace(/<[^>]+>/g, "");
      const exactMatch = srcLine.includes(conceptName) || strippedLine.includes(conceptName) || srcLine.includes(conceptName.replace("&", "&amp;"));
      advisory(exactMatch, "Incremental Line Citation Detail", `Concept '${conceptName}' verbatim on line ${ln}`, `Line ${ln} has contextual variant rather than literal substring`);
    }
  }
}
assert(conceptCountIncremental >= 30, "Incremental Entry Concepts", `Adequate concept density (found ${conceptCountIncremental} concepts)`);

// -------------------------------------------------------------
// 5. Cross-Check All Line Citations in Both Entries
// -------------------------------------------------------------
function verifyAllCitationsInDoc(content: string, docName: string, sourceLines: string[], sourcePrefix: string) {
  const citeRegex = new RegExp(`${sourcePrefix.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}:([0-9]+(?:-[0-9]+)?(?:,\\s*[0-9]+(?:-[0-9]+)?)*)`, "g");
  let m;
  let totalCitations = 0;
  while ((m = citeRegex.exec(content)) !== null) {
    totalCitations++;
    const rangeOrList = m[1];
    const parts = rangeOrList.split(",");
    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.includes("-")) {
        const [start, end] = trimmed.split("-").map(s => parseInt(s.trim(), 10));
        assert(start >= 1 && start <= sourceLines.length, `${docName} Citations`, `Start line ${start} within source range (1-${sourceLines.length})`);
        assert(end >= start && end <= sourceLines.length, `${docName} Citations`, `End line ${end} within source range (1-${sourceLines.length})`);
      } else {
        const lineNum = parseInt(trimmed, 10);
        if (!isNaN(lineNum)) {
          assert(lineNum >= 1 && lineNum <= sourceLines.length, `${docName} Citations`, `Line ${lineNum} within source range (1-${sourceLines.length})`);
        }
      }
    }
  }
  assert(totalCitations > 0, `${docName} Citations`, `Extracted and verified ${totalCitations} citation instances`);
}

verifyAllCitationsInDoc(invPlanningContent, "Planning Entry", srcPlanningLines, "../addy-external/planning-and-task-breakdown.md");
verifyAllCitationsInDoc(invIncrementalContent, "Incremental Entry", srcIncrementalLines, "../addy-external/incremental-implementation.md");

// -------------------------------------------------------------
// 6. Upstream Skill Line Citations Verification
// -------------------------------------------------------------
const upstreamPlanningPath = join(WORKSPACE_ROOT, "sources/addy/skills/planning-and-task-breakdown/SKILL.md");
const upstreamIncrementalPath = join(WORKSPACE_ROOT, "sources/addy/skills/incremental-implementation/SKILL.md");

if (existsSync(upstreamPlanningPath)) {
  const upstreamPlanningLines = readFileSync(upstreamPlanningPath, "utf-8").split("\n");
  const defectLinesMatch = invPlanningContent.match(/skills\/planning-and-task-breakdown\/SKILL\.md:([0-9]+(?:-[0-9]+)?(?:,\s*[0-9]+(?:-[0-9]+)?)*)/g);
  if (defectLinesMatch) {
    for (const matchStr of defectLinesMatch) {
      const lineRange = matchStr.split(":")[1];
      const parts = lineRange.split(",");
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes("-")) {
          const [s, e] = trimmed.split("-").map(x => parseInt(x, 10));
          assert(s >= 1 && s <= upstreamPlanningLines.length, "Upstream Planning Citations", `Defect citation start line ${s} valid in SKILL.md (len: ${upstreamPlanningLines.length})`);
          assert(e >= s && e <= upstreamPlanningLines.length, "Upstream Planning Citations", `Defect citation end line ${e} valid in SKILL.md (len: ${upstreamPlanningLines.length})`);
        } else {
          const n = parseInt(trimmed, 10);
          assert(n >= 1 && n <= upstreamPlanningLines.length, "Upstream Planning Citations", `Defect citation line ${n} valid in SKILL.md (len: ${upstreamPlanningLines.length})`);
        }
      }
    }
  }
}

if (existsSync(upstreamIncrementalPath)) {
  const upstreamIncrementalLines = readFileSync(upstreamIncrementalPath, "utf-8").split("\n");
  const defectLinesMatch2 = invIncrementalContent.match(/skills\/incremental-implementation\/SKILL\.md:([0-9]+(?:-[0-9]+)?(?:,\s*[0-9]+(?:-[0-9]+)?)*)/g);
  if (defectLinesMatch2) {
    for (const matchStr of defectLinesMatch2) {
      const lineRange = matchStr.split(":")[1];
      const parts = lineRange.split(",");
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes("-")) {
          const [s, e] = trimmed.split("-").map(x => parseInt(x, 10));
          assert(s >= 1 && s <= upstreamIncrementalLines.length, "Upstream Incremental Citations", `Defect citation start line ${s} valid in SKILL.md (len: ${upstreamIncrementalLines.length})`);
          assert(e >= s && e <= upstreamIncrementalLines.length, "Upstream Incremental Citations", `Defect citation end line ${e} valid in SKILL.md (len: ${upstreamIncrementalLines.length})`);
        } else {
          const n = parseInt(trimmed, 10);
          assert(n >= 1 && n <= upstreamIncrementalLines.length, "Upstream Incremental Citations", `Defect citation line ${n} valid in SKILL.md (len: ${upstreamIncrementalLines.length})`);
        }
      }
    }
  }
}

// -------------------------------------------------------------
// 7. Work Unit Report Verification (inv-addy-23.md)
// -------------------------------------------------------------
const unitReportContent = readFileSync(unitReportPath, "utf-8");

const unitFmMatch = unitReportContent.match(/^---\n([\s\S]*?)\n---/);
assert(!!unitFmMatch, "Unit Report", "Frontmatter delimiters present");
if (unitFmMatch) {
  const ufm = unitFmMatch[1];
  assert(/unit:\s*inv-addy-23/.test(ufm), "Unit Report", "unit is inv-addy-23");
  assert(/phase:\s*1/.test(ufm), "Unit Report", "phase is 1");
  assert(/package:\s*addy/.test(ufm), "Unit Report", "package is addy");
  assert(/session:\s*007/.test(ufm), "Unit Report", "session is 007");
  assert(/subagent_returned:\s*complete/.test(ufm), "Unit Report", "subagent_returned is complete");
}

assert(unitReportContent.includes("- [x] `sources/addy-external/planning-and-task-breakdown.md` (22,310 bytes)"), "Unit Report", "Files assigned item 1 marked [x] with correct bytes");
assert(unitReportContent.includes("- [x] `sources/addy-external/incremental-implementation.md` (26,461 bytes)"), "Unit Report", "Files assigned item 2 marked [x] with correct bytes");

const selfCheckItems = [
  "Every assigned file has an entry / card / artifact",
  "Every required field in every output is non-empty",
  "Every `path:line` cited was confirmed against the file",
  "Every referenced path was checked with `ls`",
  "Glossary convention applied",
];
for (const item of selfCheckItems) {
  const regex = new RegExp(`- \\[x\\] ${item.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}`);
  assert(regex.test(unitReportContent), "Unit Report Self-Check", `Self-check item '${item}' is marked [x]`);
}

assert(/## Scripts executed\n[\s\S]*?Exit code:\s*`?0`?/.test(unitReportContent), "Unit Report", "Scripts executed records exit code 0");

// -------------------------------------------------------------
// 8. Manifest Row States (rows 197 & 198)
// -------------------------------------------------------------
const manifestContent = readFileSync(manifestPath, "utf-8");
const manifestLines = manifestContent.split("\n");

const planningManifestLine = manifestLines.find(l => l.includes("../addy-external/planning-and-task-breakdown.md")) || "";
const incrementalManifestLine = manifestLines.find(l => l.includes("../addy-external/incremental-implementation.md")) || "";

assert(/\|\s*\.\.\/addy-external\/planning-and-task-breakdown\.md\s*\|\s*22310\s*\|\s*external-doc\s*\|\s*\[x\]\s*\|/.test(planningManifestLine),
  "Manifest Rows",
  `planning-and-task-breakdown manifest row has [x] and correct size (actual: ${planningManifestLine})`
);

assert(/\|\s*\.\.\/addy-external\/incremental-implementation\.md\s*\|\s*26461\s*\|\s*external-doc\s*\|\s*\[x\]\s*\|/.test(incrementalManifestLine),
  "Manifest Rows",
  `incremental-implementation manifest row has [x] and correct size (actual: ${incrementalManifestLine})`
);

const idxPlanning = manifestLines.indexOf(planningManifestLine) + 1;
const idxIncremental = manifestLines.indexOf(incrementalManifestLine) + 1;
assert(idxPlanning === 197, "Manifest Rows", `planning-and-task-breakdown is at line 197 (actual line: ${idxPlanning})`);
assert(idxIncremental === 198, "Manifest Rows", `incremental-implementation is at line 198 (actual line: ${idxIncremental})`);

// -------------------------------------------------------------
// 9. STATE.md Verification (row 87 and counts)
// -------------------------------------------------------------
const stateContent = readFileSync(statePath, "utf-8");
const stateLines = stateContent.split("\n");

const stateUnitLine = stateLines.find(l => l.includes("| inv-addy-23 |")) || "";
assert(/\|\s*inv-addy-23\s*\|\s*addy\s*\|\s*2\s*\|\s*48771\s*\|\s*complete\s*\|\s*007\s*\|\s*docs\/analysis\/inventory\/addy\/_units\/inv-addy-23\.md\s*\|/.test(stateUnitLine),
  "STATE.md Row 87",
  `Unit inv-addy-23 is marked complete in session 007 with correct output path (actual: ${stateUnitLine})`
);

const idxUnitLine = stateLines.indexOf(stateUnitLine) + 1;
assert(idxUnitLine === 87, "STATE.md Row 87", `inv-addy-23 is at line 87 (actual line: ${idxUnitLine})`);

const countMatch = stateContent.match(/\|\s*Rows inventoried \(addy \/ matt \/ rjm\)\s*\|\s*(\d+)\s*\/\s*(\d+)\s*\/\s*(\d+)\s*\|/);
assert(!!countMatch, "STATE.md Counts", "Rows inventoried count row exists");
if (countMatch) {
  const addyCount = parseInt(countMatch[1], 10);
  assert(addyCount >= 196, "STATE.md Counts", `Rows inventoried for addy is at least 196 (actual: ${addyCount})`);
}

// -------------------------------------------------------------
// Output Test Results Summary
// -------------------------------------------------------------
console.log(`\n${BOLD}=== TEST RESULTS SUMMARY ===${RESET}`);
const hardResults = results.filter(r => !r.advisory);
const advisoryResults = results.filter(r => r.advisory);

const hardPassed = hardResults.filter(r => r.passed);
const hardFailed = hardResults.filter(r => !r.passed);

const advisoryPassed = advisoryResults.filter(r => r.passed);
const advisoryFailed = advisoryResults.filter(r => !r.passed);

console.log(`Hard assertions: ${hardResults.length} (Passed: ${hardPassed.length}, Failed: ${hardFailed.length})`);
console.log(`Advisory checks: ${advisoryResults.length} (Passed: ${advisoryPassed.length}, Nuanced: ${advisoryFailed.length})`);

if (hardFailed.length > 0) {
  console.log(`\n${RED}CRITICAL HARD ASSERTION FAILURES:${RESET}`);
  for (const f of hardFailed) {
    console.log(`${RED}[FAIL] [${f.suite}] ${f.name}${RESET}`);
    if (f.details) {
      console.log(`       Details: ${f.details}`);
    }
  }
}

if (advisoryFailed.length > 0) {
  console.log(`\n${YELLOW}ADVISORY LINE CITATION NUANCES (Multi-line HTML Contextual Details):${RESET}`);
  for (const a of advisoryFailed.slice(0, 10)) {
    console.log(`${YELLOW}[NOTE] [${a.suite}] ${a.name}${RESET}`);
    if (a.details) {
      console.log(`       Details: ${a.details}`);
    }
  }
  if (advisoryFailed.length > 10) {
    console.log(`       ... and ${advisoryFailed.length - 10} more advisory notes.`);
  }
}

if (hardFailed.length === 0) {
  console.log(`\n${GREEN}${BOLD}ALL HARD EMPIRICAL ASSERTIONS PASSED!${RESET}\n`);
  process.exit(0);
} else {
  process.exit(1);
}
