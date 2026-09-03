# Handoff Report — Empirical Challenge of `inv-addy-6`

## 1. Observation

Direct empirical inspection and automated verification of the five inventory entries for `inv-addy-6`:
- `docs/analysis/inventory/addy/docs-comparison-md.md`
- `docs/analysis/inventory/addy/docs-developer-onboarding-md.md`
- `docs/analysis/inventory/addy/docs-getting-started-md.md`
- `docs/analysis/inventory/addy/docs-copilot-setup-md.md`
- `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`

Against their pinned sources under `sources/addy/docs/`:
- `sources/addy/docs/comparison.md`
- `sources/addy/docs/developer-onboarding.md`
- `sources/addy/docs/getting-started.md`
- `sources/addy/docs/copilot-setup.md`
- `sources/addy/docs/skill-anatomy.md`

### 1.1 Verified Strengths
1. **Purpose Verbatim Match**: All 5 inventory files carry 100% exact verbatim Purpose quotes matching their cited line numbers character-for-character.
2. **Referenced Path Integrity**: All 98 referenced file and directory paths cited across `Invokes` and `Invoked by` exist in `sources/addy/` (0 broken paths found).
3. **Structure Headings**: All headings and section line numbers in `## Structure` across all 5 files match source headings and lines exactly.

### 1.2 Direct Empirical Findings & Vulnerabilities

#### A. Citations to Empty Lines & Markdown Syntax Rows
1. **Empty line citation in `docs-skill-anatomy-md.md:60`**:
   - Citation: `- \`references/\` — docs/skill-anatomy.md:14, 18, 113, 116, 119, 156, 157 — defined here | used here`
   - Verbatim source `sources/addy/docs/skill-anatomy.md:116`: `""` (Empty line between paragraphs).
2. **Empty line citation in `docs-skill-anatomy-md.md:62`**:
   - Citation: `- \`Frontmatter\` — docs/skill-anatomy.md:22, 31, 39, 152, 175 — defined here | used here`
   - Verbatim source `sources/addy/docs/skill-anatomy.md:152`: `""` (Empty line between `## Naming Conventions` and bullet list).
3. **Table separator syntax row cited in `docs-comparison-md.md:58`**:
   - Citation: `- \`agent-skills\` — docs/comparison.md:9, 11, 17, 18, 52, ...`
   - Verbatim source `sources/addy/docs/comparison.md:18`: `|---|---|---|---|` (Markdown table delimiter, no text).

#### B. Concepts Named That Do Not Exist on Cited Lines (Phantom Citations)
1. **In `docs-comparison-md.md:114-117`**:
   - `- \`code-reviewer\` — docs/comparison.md:24, 54 — used here`
   - `- \`security-auditor\` — docs/comparison.md:24, 54, 98 — used here`
   - `- \`test-engineer\` — docs/comparison.md:24, 54, 98 — used here`
   - `- \`web-performance-auditor\` — docs/comparison.md:24, 54 — used here`
   - Line 24 text: `| **Distinctive mechanisms** | Anti-rationalization tables and Red Flags in every skill; parallel review **personas** in \`/ship\`; reference checklists; a **three-tier eval framework** in CI | Subagent-driven development with a task reviewer (spec + quality) and a fix loop; git-worktree isolation; skills-that-write-skills, pressure-tested | The **grilling** primitive (one question at a time, design-tree walking); seam-based TDD; explicit user-invoked vs model-invoked split; issue-tracker integration |`
   - Result: None of these 4 personas are named on line 24 (they only appear on line 54).
2. **In `docs-comparison-md.md:64, 67, 109`**:
   - `- \`Build\` — docs/comparison.md:11, 20, 22, 48` — Line 20 text contains `Define to Ship` and `brainstorm, plan, execute, review`, but never `Build`.
   - `- \`Ship\` — docs/comparison.md:11, 20, 22` — Line 22 text contains `launch`, but never `Ship`.
   - `- \`npx skills\` — docs/comparison.md:26, 46` — Line 46 text contains no mention of `npx skills` (line 26 has it).
3. **In `docs-skill-anatomy-md.md:62, 68`**:
   - `- \`Frontmatter\` — docs/skill-anatomy.md:22, 31, 39, 152, 175` — Line 31 is `**Rules:**`; does not contain `Frontmatter`.
   - `- \`Common Rationalizations\` — docs/skill-anatomy.md:60, 89, 147` — Line 147 is `4. **Anti-rationalization.** Every skip-worthy step needs a counter-argument in the rationalizations table.`; does not contain `Common Rationalizations`.
4. **In `docs-developer-onboarding-md.md:63, 69`**:
   - `- \`Command parity\` — docs/developer-onboarding.md:28, 58, 74, 102` — Line 28 says `checks parity across all of them`, not `Command parity`.
   - `- \`SessionStart hook\` — docs/developer-onboarding.md:67, 96` — Line 67 is `# Hook regression test, required if you touch hooks/session-start.sh`; mentions path, not `SessionStart hook`.
5. **In `docs-getting-started-md.md:89, 92, 103`**:
   - `- \`Minimal setup\` — docs/getting-started.md:46` — Line 46 is `### Minimal (Start here)` (`setup` is absent).
   - `- \`Skill Anatomy\` — docs/getting-started.md:75, 90` — Line 90 is `See [skill-anatomy.md](skill-anatomy.md)...` (`skill-anatomy.md`, not `Skill Anatomy`).
   - `- \`Definition of Done\` — docs/getting-started.md:137` — Line 137 is `| \`definition-of-done.md\` | all skills / every change |` (`definition-of-done.md`, not `Definition of Done`).
6. **In `docs-copilot-setup-md.md:49`**:
   - `- \`GitHub Copilot\` — docs/copilot-setup.md:1, 7, 17, 21, 23, 44, 51` — Lines 7 and 21 contain only `Copilot`, not `GitHub Copilot`.

#### C. Citation Line Drift
1. **In `docs-comparison-md.md:122`**:
   - `durable cross-session memory` cited at lines `56, 109, 111`. Line 109 is header `### The shared frontier (true of all three)`; the concept appears on line 111.
2. **In `docs-comparison-md.md:123-124`**:
   - `validation depth` cited at lines `68, 72`. Line 72 says `broad disciplined validation`; `validation depth` is on line 68.
   - `upfront architectural reasoning` cited at lines `69, 72`. Line 72 says `heavy upfront reasoning`; `upfront architectural reasoning` is on line 69.

#### D. R3 Verbatim Rule Violations & Paraphrased Concepts
1. **Conflating Generic Terms with Specific Code Concept Tokens**:
   - In `docs-skill-anatomy-md.md:61`: Concept is listed as code token `` `supporting-file.md` `` citing lines `15, 102, 125, 127, 129, 148, 155, 157, 182`. In the source, `supporting-file.md` appears strictly once (line 15). All other 8 cited lines use the generic English phrase "supporting files" or "supporting doc".
2. **Synthesizing Prefixes / Suffixes**:
   - In `docs-comparison-md.md:87, 91`: Concepts listed as `` `/grill-me` `` and `` `/grill-with-docs` `` citing line 46 (and lines 100, 117 for `grill-me`). On those lines, the source text is `grill-me` and `grill-with-docs` without any leading slash `/`.
3. **Paraphrasing Concepts**:
   - `subagent-driven-development` cited on line 99: source text is `subagent-driven development` with spaces, not hyphens.
   - `Subagent-driven development` cited on line 38: source text is `subagent-driven execution`.
   - `git-worktree isolation` cited on line 38: source text is `Git worktrees keep parallel work isolated`.
   - `user-invoked vs model-invoked split` cited on line 46: source text is `split between user-invoked and model-invoked skills`.
   - `issue-tracker integration` cited on line 48: source text is `multi-session orchestration through issue trackers`.
   - `Pressure-testing methodology` cited on line 103: source text is `pressure-testing discipline`.
   - `Tier 1, structural` cited on lines 82, 100: source text is `Tier 1` and `Tier 1 green`.
   - `Tier 2, trigger & routing` cited on lines 72, 81, 101: source text is `Tier 2`, `Tier 2 effects`, `Tier 2 green`.
   - `Tier 3, behavioral` cited on lines 42, 72, 95: source text is `Tier 3 behavioral evals`, `eval tiers`, `behavioral tier`.
   - `Hook regression test` cited on line 103: source text is `Hook test green`.

---

## 2. Logic Chain

1. **Rule R2 & R3 Compliance Requirement (METHOD.md §3)**:
   - R2 dictates: "Every claim about a source names `path:line`."
   - R3 dictates: "Verbatim in extraction. Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis."
   - The checklist specifically tasks the verifier to: "check cited lines in `sources/addy/docs/` to ensure citations do not drift or point to empty lines", and "ensure no paraphrasing in Purpose or Concepts named (R3)".
2. **Impact of Empty Line & Table Syntax Citations (Observation 1.2.A)**:
   - Citing line 116 and line 152 in `skill-anatomy.md` directly violates the non-empty line rule; line 116 and 152 are whitespace empty lines.
   - Citing line 18 in `comparison.md` points to table separator syntax rather than text.
3. **Impact of Phantom Citations & Citation Drift (Observation 1.2.B & 1.2.C)**:
   - When downstream phases (Phase 2 concept cards, Phase 3 concordance, Phase 5 spec) trace concept provenance back to `path:line`, citations that do not contain the term or point to unrelated text break the traceability chain.
   - Citing `comparison.md:24` for 4 individual agent personas when line 24 only says `personas in /ship` introduces false attribution.
   - Citing `comparison.md:20` for `Build` and `comparison.md:22` for `Ship` asserts text that does not exist in those table cells.
4. **Impact of Paraphrasing Concepts (Observation 1.2.D)**:
   - Conflating `supporting-file.md` (a filename) with "supporting files" (a general concept) pollutes Phase 2 concept slug extraction.
   - Adding slashes to `grill-me` where the source writes `grill-me` alters the source's exact syntax.
   - Transforming phrases like `subagent-driven execution` into `Subagent-driven development` or `pressure-testing discipline` into `Pressure-testing methodology` silently substitutes the extractor's terminology for the author's words before alignment.
5. **Divergence from Worker's Self-Verification**:
   - The unit report `docs/analysis/inventory/addy/_units/inv-addy-6.md:43` claimed:
     `[x] Every path:line cited was confirmed against the file`.
   - Empirical verification proved this claim false across all five inventory files.

---

## 3. Caveats

- **No Caveats on Verified Code/Docs**: The source files in `sources/addy/docs/` and inventory files in `docs/analysis/inventory/addy/` were read and audited completely from line 1 to EOF.
- **Design Intent & Defect Sections**: The high-level analytical sections (Design intent, Observations, and Defects) were verified for consistency with the text, but were not graded on verbatim match since the template explicitly specifies those as analyst synthesis ("Your words, one paragraph", "Everything found by the §4 checklist").

---

## 4. Conclusion

**Verdict: REJECT**

The 5 inventory entries for `inv-addy-6` fail the empirical verification criteria:
1. They cite empty lines (`docs/skill-anatomy.md:116`, `docs/skill-anatomy.md:152`) and markdown table delimiter rows (`docs/comparison.md:18`).
2. They contain dozens of phantom line citations where the concept does not appear on the cited line.
3. They exhibit line citation drift.
4. They violate Rule R3 by paraphrasing phrases, adding prefixes, and conflating general terms with file-path tokens in `Concepts named`.

The entries must be corrected by the worker to ensure all citations point to exact, non-empty source lines where the exact verbatim concepts appear.

---

## 5. Verification Method

To independently reproduce all findings and verify these defects against `sources/addy/docs/`, run the following Bun command from repository root:

```bash
bun -e '
import fs from "fs";

const inventoryFiles = [
  "docs/analysis/inventory/addy/docs-comparison-md.md",
  "docs/analysis/inventory/addy/docs-developer-onboarding-md.md",
  "docs/analysis/inventory/addy/docs-getting-started-md.md",
  "docs/analysis/inventory/addy/docs-copilot-setup-md.md",
  "docs/analysis/inventory/addy/docs-skill-anatomy-md.md"
];

for (const invFile of inventoryFiles) {
  const content = fs.readFileSync(invFile, "utf-8");
  const fmM = content.match(/path:\s*([^\n]+)/);
  const relPath = fmM[1].trim();
  const srcLines = fs.readFileSync("sources/addy/" + relPath, "utf-8").split("\n");
  const conceptSection = content.split("## Concepts named — required, verbatim")[1]?.split("## Structure")[0];
  const cLines = conceptSection.split("\n").filter(l => l.trim().startsWith("- `"));
  
  console.log(`\n=== AUDITING ${relPath} ===`);
  for (const cLine of cLines) {
    const match = cLine.match(/- `([^`]+)` — ([^—]+) — (.*)/);
    if (!match) continue;
    const [_, concept, locs, usage] = match;
    const items = locs.split(",").map(s => s.trim());
    for (const item of items) {
      let lineNum = item.includes(":") ? parseInt(item.split(":")[1].trim(), 10) : parseInt(item, 10);
      const targetLine = srcLines[lineNum - 1];
      if (targetLine === undefined) {
        console.log(`[OUT OF BOUNDS] Line ${lineNum} for "${concept}"`);
      } else if (targetLine.trim() === "") {
        console.log(`[EMPTY LINE] Line ${lineNum} for "${concept}"`);
      } else if (!targetLine.includes(concept)) {
        console.log(`[VERBATIM MISMATCH] Line ${lineNum} for "${concept}": actual line is "${targetLine.trim()}"`);
      }
    }
  }
}
'
```

### Invalidation Conditions
This rejection is invalidated if:
1. The cited line numbers are proven to contain the exact verbatim strings in `sources/addy/` at commit `d2c37ef6225dd8726cdd369a8030307f48592d26`.
2. The empty lines 116 and 152 in `sources/addy/docs/skill-anatomy.md` are proven to contain substantive concept text.
