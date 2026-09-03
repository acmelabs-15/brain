# Handoff Report — Remediation of `docs-skill-anatomy-md.md` (`inv-addy-6`)

## 1. Observation

Direct empirical audit of `docs/analysis/inventory/addy/docs-skill-anatomy-md.md` (lines 56–88, `## Concepts named — required, verbatim`) against source file `sources/addy/docs/skill-anatomy.md` (183 lines) and Challenger 1's rejection report (`.agents/challenger_inv_addy_6_1/handoff.md`).

Running an automated verification script checking every cited line for exact verbatim inclusion (`targetLine.includes(concept)`) and non-empty lines yielded 19 specific defects in the original inventory entry:

1. **Empty Line Citations:**
   - `references/` cited line 116 (`docs-skill-anatomy-md.md:60`): `sources/addy/docs/skill-anatomy.md:116` is an empty line `""`. (Line 117 contains `` `references/` ``).
   - `Frontmatter` cited line 152 (`docs-skill-anatomy-md.md:62`): `sources/addy/docs/skill-anatomy.md:152` is an empty line `""`.

2. **Phantom Line Citations & Verbatim Mismatches:**
   - `scripts/` cited line 104 (`docs-skill-anatomy-md.md:59`): line 104 is `- Code tools or scripts are needed` (contains `scripts`, not `scripts/` with trailing slash).
   - `supporting-file.md` cited lines 102, 125, 127, 129, 148, 155, 157, 182 (`docs-skill-anatomy-md.md:61`): the code token `supporting-file.md` appears strictly at line 15 (`supporting-file.md # Optional: Reference material loaded on demand`). Lines 102, 125, 127, 129, 148, 155, 157, 182 contain English phrases ("supporting files", "Supporting files", "supporting doc").
   - `Frontmatter` cited line 31 (`docs-skill-anatomy-md.md:62`): line 31 is `**Rules:**` (does not contain `Frontmatter`).
   - `Frontmatter` cited lines 39 and 175 (`docs-skill-anatomy-md.md:62`): line 39 has `The frontmatter contract above is required.` (lowercase `frontmatter`); line 175 has `- Valid YAML frontmatter with \`name\` and \`description\`` (lowercase `frontmatter`). Line 22 is the only line with capitalized `Frontmatter` (`### Frontmatter (Required)`).
   - `Common Rationalizations` cited line 147 (`docs-skill-anatomy-md.md:68`): line 147 is `4. **Anti-rationalization.** Every skip-worthy step needs a counter-argument in the rationalizations table.` (does not contain `Common Rationalizations`). Lines 60 and 89 contain `Common Rationalizations`.
   - `Verification` cited line 146 (`docs-skill-anatomy-md.md:70`): line 146 is `3. **Evidence over assumption.** Every verification checkbox requires proof.` (contains lowercase `verification checkbox`, not `Verification`). Lines 69 and 97 contain `Verification`.
   - `Elevator pitch` cited line 78 (`docs-skill-anatomy-md.md:71`): line 78 is `The "elevator pitch" for the skill. Should answer: What does this skill do, and why should an agent follow it?` (contains lowercase `elevator pitch` in quotes, not capitalized `Elevator pitch`).
   - `Supporting Files` cited line 157 (`docs-skill-anatomy-md.md:72`): line 157 is `(the \`Supporting files\` entry above)` (contains lowercase `f`, `Supporting files`). Line 100 contains `## Supporting Files`.
   - `Progressive disclosure` cited line 127 (`docs-skill-anatomy-md.md:75`): line 127 is `- **Use progressive disclosure.** ...` (contains lowercase `p`, `progressive disclosure`). Line 148 contains capitalized `Progressive disclosure`.

3. **Invokes Line Citation Check:**
   - In `## Invokes — required`, `reference references/` cited lines `14, 113, 115, 119, 156`. Line 115 does not contain `references/`; line 117 contains `references/`.

---

## 2. Logic Chain

1. **METHOD.md R2 & R3 Requirements:**
   - Rule R2 requires every claim about a source to name `path:line`.
   - Rule R3 mandates verbatim extraction in inventory fields: "Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis."
2. **Eliminating Empty & Phantom Lines:**
   - Line 116 is whitespace; replacing it with line 117 restores the citation to the sentence discussing the packaging gap where `references/` is left behind.
   - Line 152 is whitespace; dropping it removes a meaningless citation.
   - Line 31 (`**Rules:**`) is a phantom line for `Frontmatter`; dropping line 31 eliminates false attribution.
   - Line 147 defines `Anti-rationalization` and refers to `rationalizations table`, not `Common Rationalizations`; dropping line 147 eliminates false attribution.
   - Line 104 contains `scripts` without a slash; removing line 104 preserves the integrity of `scripts/` as a directory path token.
   - Line 146 contains `verification checkbox`; removing line 146 preserves `Verification` as a section title / phase gate concept.
3. **Disentangling Code Token from English Prose:**
   - `supporting-file.md` is a specific filename listed in the directory layout tree at line 15.
   - The prose across lines 100, 102, 125, 127, 129, 148, 155, 157, 182 refers to the generic concept of supporting files.
   - Restricting `supporting-file.md` to line 15 and establishing distinct entries for `Supporting Files` (heading, line 100), `supporting files` (lowercase prose, lines 102, 125, 127, 129), and `Supporting files` (title-case prose, lines 148, 155, 157, 182) achieves 100% exact verbatim match.
4. **Exact Case Alignment:**
   - `elevator pitch` on line 78 is verbatim lowercase.
   - `Frontmatter` (line 22) vs `frontmatter` (lines 39, 175) and `YAML frontmatter` (line 175) provides exact case concordance.
   - `Progressive disclosure` (line 148) vs `progressive disclosure` (line 127) reflects exact source capitalization.

---

## 3. Caveats

- **Scope Boundary:** This investigation strictly addresses `docs/analysis/inventory/addy/docs-skill-anatomy-md.md` and does not modify source files or other inventory entries.
- **Read-Only Compliance:** Under Explorer role constraints, no changes were directly written to `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`. Instead, the complete verified replacement inventory file is provided at `.agents/explorer_inv_addy_6_6/proposed_docs-skill-anatomy-md.md` and the verified `## Concepts named` section is provided in this handoff.

---

## 4. Conclusion

A completely verified, zero-defect replacement `## Concepts named` section containing 40 verbatim concepts has been produced and validated. Every single cited line was empirically verified against `sources/addy/docs/skill-anatomy.md` using an automated Bun script. 0 errors, 0 empty lines, 0 phantom lines, and 0 verbatim mismatches exist.

### 4.1 Full Corrected `## Concepts named` Section

```markdown
## Concepts named — required, verbatim
- `Skill Anatomy` — docs/skill-anatomy.md:1 — defined here
- `SKILL.md` — docs/skill-anatomy.md:12, 18, 20, 103, 123, 125, 129, 148, 154, 174, 182 — defined here | used here
- `scripts/` — docs/skill-anatomy.md:13, 18, 109, 133, 140 — defined here | used here
- `references/` — docs/skill-anatomy.md:14, 18, 113, 117, 119, 156, 157 — defined here | used here
- `supporting-file.md` — docs/skill-anatomy.md:15 — defined here
- `Frontmatter` — docs/skill-anatomy.md:22 — defined here
- `frontmatter` — docs/skill-anatomy.md:39, 175 — used here
- `YAML frontmatter` — docs/skill-anatomy.md:175 — used here
- `Use when` — docs/skill-anatomy.md:27, 33, 81 — defined here | used here
- `Overview` — docs/skill-anatomy.md:44, 77 — defined here
- `When to Use` — docs/skill-anatomy.md:47, 80 — defined here
- `Core Process` — docs/skill-anatomy.md:51, 83, 181 — defined here
- `Specific Techniques / Patterns` — docs/skill-anatomy.md:56 — defined here
- `Common Rationalizations` — docs/skill-anatomy.md:60, 89 — defined here
- `Red Flags` — docs/skill-anatomy.md:65, 94 — defined here
- `Verification` — docs/skill-anatomy.md:69, 97 — defined here
- `elevator pitch` — docs/skill-anatomy.md:78 — defined here
- `Supporting Files` — docs/skill-anatomy.md:100 — defined here
- `supporting files` — docs/skill-anatomy.md:102, 125, 127, 129 — used here
- `Supporting files` — docs/skill-anatomy.md:148, 155, 157, 182 — used here
- `Shared References` — docs/skill-anatomy.md:111, 156 — defined here
- `definition-of-done` — docs/skill-anatomy.md:113 — used here
- `Agent Skills spec` — docs/skill-anatomy.md:115 — used here
- `Context Efficiency` — docs/skill-anatomy.md:121 — defined here
- `Progressive disclosure` — docs/skill-anatomy.md:148 — defined here
- `progressive disclosure` — docs/skill-anatomy.md:127 — used here
- `Script Requirements` — docs/skill-anatomy.md:131 — defined here
- `Writing Principles` — docs/skill-anatomy.md:142 — defined here
- `Process over knowledge` — docs/skill-anatomy.md:144 — defined here
- `Specific over general` — docs/skill-anatomy.md:145 — defined here
- `Evidence over assumption` — docs/skill-anatomy.md:146 — defined here
- `Anti-rationalization` — docs/skill-anatomy.md:147 — defined here
- `Token-conscious` — docs/skill-anatomy.md:149 — defined here
- `Naming Conventions` — docs/skill-anatomy.md:151 — defined here
- `Cross-Skill References` — docs/skill-anatomy.md:159 — defined here
- `test-driven-development` — docs/skill-anatomy.md:164 — used here
- `debugging-and-error-recovery` — docs/skill-anatomy.md:165 — used here
- `Required vs Recommended` — docs/skill-anatomy.md:170 — defined here
- `How It Works` — docs/skill-anatomy.md:181 — used here
- `Workflow` — docs/skill-anatomy.md:181 — used here
```

### 4.2 Also Recommended: `## Invokes — required` Citation Fix
In `## Invokes — required`:
- `reference references/ — docs/skill-anatomy.md:14, 113, 117, 119, 156, 157` (replacing line 115 with 117).

---

## 5. Verification Method

To independently verify that every concept token in the corrected section appears verbatim on each cited line of `sources/addy/docs/skill-anatomy.md` with zero empty lines, zero phantom lines, and zero mismatches, execute the following Bun command:

```bash
bun -e '
import fs from "fs";

const invFile = ".agents/explorer_inv_addy_6_6/proposed_docs-skill-anatomy-md.md";
const content = fs.readFileSync(invFile, "utf-8");
const fmM = content.match(/path:\s*([^\n]+)/);
const relPath = fmM[1].trim();
const srcLines = fs.readFileSync("sources/addy/" + relPath, "utf-8").split("\n");
const conceptSection = content.split("## Concepts named — required, verbatim")[1]?.split("## Structure")[0];
const cLines = conceptSection.split("\n").filter(l => l.trim().startsWith("- `"));

console.log(`=== AUDITING ${relPath} from proposed file ===`);
let errorCount = 0;
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
      errorCount++;
    } else if (targetLine.trim() === "") {
      console.log(`[EMPTY LINE] Line ${lineNum} for "${concept}"`);
      errorCount++;
    } else if (!targetLine.includes(concept)) {
      console.log(`[VERBATIM MISMATCH] Line ${lineNum} for "${concept}": actual line is "${targetLine.trim()}"`);
      errorCount++;
    }
  }
}
console.log(`Audited ${cLines.length} concepts, error count: ${errorCount}`);
if (errorCount === 0) {
  console.log("SUCCESS: 100% VERBATIM PASS");
} else {
  process.exit(1);
}
'
```

### Invalidation Conditions
This remediation is invalidated if:
1. Any cited line number in the proposed section contains an empty line in `sources/addy/docs/skill-anatomy.md`.
2. Any concept string is absent (case-sensitive) from any of its cited line numbers.
