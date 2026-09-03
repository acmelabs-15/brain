# Handoff Report — Line-by-Line Empirical Remediation for `inv-addy-6` (Iteration 2)

**Author:** explorer_inv_addy_6_5  
**Scope:**  
1. `docs/analysis/inventory/addy/docs-developer-onboarding-md.md` against `sources/addy/docs/developer-onboarding.md`  
2. `docs/analysis/inventory/addy/docs-getting-started-md.md` against `sources/addy/docs/getting-started.md`  
**Task:** Audit every cited line in `## Concepts named` and provide 100% verified, corrected sections with zero phantom lines, zero empty lines, and strict verbatim fidelity.

---

## 1. Observation

Direct empirical line-by-line comparison was conducted between the inventory files in `docs/analysis/inventory/addy/` and the pinned source files in `sources/addy/docs/` (commit `d2c37ef6225dd8726cdd369a8030307f48592d26`).

### 1.1 Empirical Audit of `docs-developer-onboarding-md.md` (against `sources/addy/docs/developer-onboarding.md`)

| Current Concept Entry | Cited Line(s) | Verbatim Text on Cited Line(s) | Defect Classification |
|---|---|---|---|
| `` `Commands` `` | 17, 28 | L17: `\| **Commands** \| ...`<br>L28: `Note that commands exist in three parallel directories...` | **Case Mismatch / Citation Drift**: L28 contains lowercase `commands`. Capitalized `Commands` is defined strictly on L17. |
| `` `References` `` | 18, 24, 88, 92 | L18: `\| **References** \| ...`<br>L24: `- **Don't duplicate, reference.** Skills link to other skills and to \`references/\`...`<br>L88: `...(reference material goes in \`references/\`...`<br>L92: `### Path 3: Docs, references, harness` | **Paraphrase / Citation Drift**: L24 and L88 cite the directory token `references/`; L92 has lowercase `references`. Capitalized `References` is defined strictly on L18. |
| `` `Tier 1, structural` `` | 55, 82, 100 | L55: `# Tier 1, structural: frontmatter, naming, required sections`<br>L82: `3. Run Tier 1 to confirm frontmatter is still valid.`<br>L100: `- [ ] Tier 1 green: \`node scripts/validate-skills.js\`` | **Phantom String Citation**: L82 contains `Tier 1` (no `, structural`); L100 contains `Tier 1 green:` (no `, structural`). `Tier 1, structural` appears verbatim only on L55. |
| `` `Command parity` `` | 28, 58, 74, 102 | L28: `...Touch one and CI checks parity across all of them, see §3.`<br>L58: `# Command parity and description sync...`<br>L74: `...green through Tier 1 + Tier 2 + command parity is reviewable...`<br>L102: `- [ ] Command parity green...` | **Phantom Citation / Paraphrase**: L28 contains `checks parity across all of them`, NOT `Command parity`. L74 contains lowercase `command parity`. Exact verbatim `Command parity` appears on L58 and L102. |
| `` `Tier 2, trigger & routing` `` | 61, 72, 81, 101 | L61: `# Tier 2, trigger & routing: positive prompts...`<br>L72: `...because a red Tier 2 usually means...`<br>L81: `...expect Tier 2 effects...`<br>L101: `- [ ] Tier 2 green: \`node scripts/run-evals.js\`` | **Phantom String Citation**: L72, L81, and L101 cite general mentions of `Tier 2`. The full phrase `Tier 2, trigger & routing` appears verbatim only on L61. |
| `` `Tier 3, behavioral` `` | 42, 64, 72, 95 | L42: `- **Claude Code** only if you want to run Tier 3 behavioral evals locally`<br>L64: `# Tier 3, behavioral (on demand...`<br>L72: `The three eval tiers are worth understanding...`<br>L95: `...adopted verbatim for the behavioral tier...` | **Phantom String Citation**: L42 has `Tier 3 behavioral evals`; L72 has `eval tiers`; L95 has `behavioral tier`. The phrase `Tier 3, behavioral` appears verbatim only on L64. |
| `` `Hook regression test` `` | 67, 96, 103 | L67: `# Hook regression test, required if you touch hooks/session-start.sh`<br>L96: `- Anything touching the session-start hook... requires the hook regression test (§3).`<br>L103: `- [ ] Hook test green if you touched \`hooks/\`...` | **Case Mismatch & Phantom Line**: L67 contains exact `Hook regression test`. L96 has lowercase `hook regression test`. L103 has `Hook test green`. |
| `` `SessionStart hook` `` | 67, 96 | L67: `# Hook regression test, required if you touch hooks/session-start.sh`<br>L96: `- Anything touching the session-start hook or the meta-skill it embeds...` | **Synthesized Paraphrase / Phantom String**: `SessionStart hook` DOES NOT APPEAR anywhere in `developer-onboarding.md`. The author synthesized it from Claude Code hook events. The source's exact verbatim words on L96 are `session-start hook`. L67 mentions path `hooks/session-start.sh`. |
| `` `Change-sizing guidance` `` | 107 | L107: `- [ ] Change is small and focused (the repo's own \`code-review-and-quality\` change-sizing guidance applies...` | **Paraphrased Capitalization**: L107 contains `change-sizing guidance` with lowercase `c`. |
| `` - doc skill-anatomy.md `` (in `## Invokes`) | 5, 87, 88, 114 | L5: `[skill-anatomy.md](skill-anatomy.md)`<br>L86: `...fits [skill-anatomy.md](skill-anatomy.md)...`<br>L87: `""` (EMPTY LINE)<br>L88: `...and [skill-anatomy.md](skill-anatomy.md)...`<br>L114: `[skill-anatomy.md](skill-anatomy.md)` | **Empty Line Citation**: L87 in `sources/addy/docs/developer-onboarding.md` is an empty line between paragraphs. The invocation link is actually on L86 and L88. |

---

### 1.2 Empirical Audit of `docs-getting-started-md.md` (against `sources/addy/docs/getting-started.md`)

| Current Concept Entry | Cited Line(s) | Verbatim Text on Cited Line(s) | Defect Classification |
|---|---|---|---|
| `` `When to use` `` | 22, 82 | L22: `- **When to use** — triggers that indicate this skill applies`<br>L82: `├── When to Use — Triggers and conditions` | **Case Mismatch**: L22 has lowercase `use`. L82 has capitalized `When to Use`. Each line defines a distinct casing. |
| `` `Verification` `` | 24, 87, 163 | L24: `- **Verification** — how to confirm the work is done`<br>L87: `└── Verification — Exit criteria checklist`<br>L163: `3. **Don't skip verification steps** — they're the whole point` | **Phantom Citation**: L163 contains lowercase `verification steps`, NOT the noun `Verification`. L24 and L87 contain `Verification` verbatim. |
| `` `Common rationalizations` `` | 25, 85 | L25: `- **Common rationalizations** — excuses...`<br>L85: `├── Common Rationalizations — Excuses and rebuttals` | **Case Mismatch**: L25 has lowercase `rationalizations`. L85 has title-cased `Common Rationalizations`. |
| `` `Red flags` `` | 26, 86 | L26: `- **Red flags** — signs the skill is being violated`<br>L86: `├── Red Flags — Signs the skill is being violated` | **Case Mismatch**: L26 has lowercase `flags`. L86 has title-cased `Red Flags`. |
| `` `Rules file` `` | 34, 48 | L34: `**Rules file:** Add skill content...`<br>L48: `Load three essential skills into your rules file:` | **Case Mismatch / Citation Drift**: L34 contains `Rules file:`. L48 contains lowercase `rules file`. |
| `` `Meta-skill` `` | 38 | L38: `### 4. Use the meta-skill for discovery` | **Paraphrased Capitalization**: `Meta-skill` with capital `M` does not exist in `getting-started.md`. L38 contains `meta-skill` with lowercase `m`. |
| `` `Minimal setup` `` | 46 | L46: `### Minimal (Start here)` | **Synthesized Paraphrase / Phantom String**: `Minimal setup` DOES NOT APPEAR anywhere in `getting-started.md`. L46 contains `### Minimal (Start here)`. |
| `` `Skill Anatomy` `` | 75, 90 | L75: `## Skill Anatomy`<br>L90: `See [skill-anatomy.md](skill-anatomy.md) for the full specification.` | **Phantom Citation**: L75 contains `Skill Anatomy`. L90 contains the markdown link `[skill-anatomy.md](skill-anatomy.md)`, NOT `Skill Anatomy`. |
| `` `Living documents` `` | 153 | L153: `Treat them as **living documents** while the work is in progress:` | **Paraphrased Capitalization**: L153 contains `living documents` with lowercase `l`. |
| `` `Definition of Done` `` | 137 | L137: `\| \`definition-of-done.md\` \| all skills / every change \|` | **Synthesized Paraphrase / Phantom String**: `Definition of Done` DOES NOT APPEAR anywhere in `getting-started.md`. L137 contains the file token `definition-of-done.md`. |
| Range citations in Inputs/Outputs | 67-74, 151-158, 159-166, 107-120 | L74, L158, L166, L120 are whitespace lines separating sections. | **Empty Line Range Endpoints**: The trailing lines in these ranges are blank lines. The actual text ranges are 67-73, 151-157, 159-165, and 107-119. |

---

## 2. Logic Chain

1. **R3 Verbatim Mandate (METHOD.md §3)**:
   - "Fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis."
   - Any character difference (including casing, punctuation, or expanding filenames like `definition-of-done.md` into title-case `Definition of Done`, or translating `session-start hook` into `SessionStart hook`) violates R3.
2. **R2 Evidence & Traceability Mandate (METHOD.md §3)**:
   - "Every claim about a source names `path:line`."
   - Citing a line where the exact string does not appear (e.g. citing L28 for `Command parity`, L67 for `SessionStart hook`, L46 for `Minimal setup`, L90 for `Skill Anatomy`, L163 for `Verification`) creates a broken evidence link for downstream Phase 2 concept extraction.
3. **Non-Empty Line Rule**:
   - Citing an empty line (L87 in `developer-onboarding.md` in `## Invokes`, or range endpoints pointing to blank lines) violates the empirical inventory rules.
4. **Resolution Strategy**:
   - For case discrepancies between section headers and inline text (e.g., `When to use` vs `When to Use`, `Common rationalizations` vs `Common Rationalizations`, `Red flags` vs `Red Flags`), list both entries with their respective exact line numbers.
   - For concepts with full descriptions and shorthand usages (e.g., `Tier 1, structural` vs `Tier 1`), index `Tier 1, structural` on its definition line (L55), and index `Tier 1` across all lines where the token appears verbatim (L55, 74, 82, 100).
   - Replace all synthesized paraphrases (`SessionStart hook` → `session-start hook`, `Minimal setup` → `Minimal (Start here)`, `Definition of Done` → `definition-of-done.md`) with the source's exact verbatim tokens.

---

## 3. Caveats

- **No Caveats on Verified Documents**: Both source files (`sources/addy/docs/developer-onboarding.md` and `sources/addy/docs/getting-started.md`) and their corresponding inventory files were verified end-to-end.
- **Read-Only Explorer Scope**: In accordance with explorer agent instructions, project files were not modified in place; proposed files (`proposed_docs-developer-onboarding-md.md` and `proposed_docs-getting-started-md.md`) and unified patch `remediation.patch` have been created in this agent's directory.

---

## 4. Conclusion

All citation drift, empty line citations, phantom line citations, and paraphrased concepts in `docs-developer-onboarding-md.md` and `docs-getting-started-md.md` have been fully diagnosed and corrected.

### 4.1 100% Verified Replacement: `docs/developer-onboarding.md`

#### Full Corrected `## Concepts named` Section:
```markdown
## Concepts named — required, verbatim
- `five composable layers` — docs/developer-onboarding.md:11 — defined here
- `Skills` — docs/developer-onboarding.md:15 — defined here
- `Personas` — docs/developer-onboarding.md:16, 23 — defined here | used here
- `Commands` — docs/developer-onboarding.md:17 — defined here
- `References` — docs/developer-onboarding.md:18 — defined here
- `Evals` — docs/developer-onboarding.md:19 — defined here
- `parallel fan-out with a merge step` — docs/developer-onboarding.md:23 — used here
- `Don't duplicate, reference` — docs/developer-onboarding.md:24 — defined here
- `Tier 1, structural` — docs/developer-onboarding.md:55 — defined here
- `Tier 1` — docs/developer-onboarding.md:55, 74, 82, 100 — defined here | used here
- `Command parity` — docs/developer-onboarding.md:58, 102 — defined here | used here
- `Tier 2, trigger & routing` — docs/developer-onboarding.md:61 — defined here
- `Tier 2` — docs/developer-onboarding.md:61, 72, 74, 81, 101 — defined here | used here
- `Tier 3, behavioral` — docs/developer-onboarding.md:64 — defined here
- `Tier 3` — docs/developer-onboarding.md:42, 64 — defined here | used here
- `Hook regression test` — docs/developer-onboarding.md:67 — defined here
- `lexical approximation of routing` — docs/developer-onboarding.md:72 — defined here
- `stemmed TF-IDF` — docs/developer-onboarding.md:72 — defined here
- `session-start hook` — docs/developer-onboarding.md:96 — used here
- `Pre-PR checklist` — docs/developer-onboarding.md:98 — defined here
- `change-sizing guidance` — docs/developer-onboarding.md:107 — used here
```

#### Additional Verified Fix in `docs-developer-onboarding-md.md`:
In `## Invokes`:
- Change: `- doc skill-anatomy.md — docs/developer-onboarding.md:5, 87, 88, 114`  
  To: `- doc skill-anatomy.md — docs/developer-onboarding.md:5, 86, 88, 114`  
  *(Line 87 is an empty line; line 86 contains `[skill-anatomy.md](skill-anatomy.md)`).*

---

### 4.2 100% Verified Replacement: `docs/getting-started.md`

#### Full Corrected `## Concepts named` Section:
```markdown
## Concepts named — required, verbatim
- `When to use` — docs/getting-started.md:22 — defined here
- `Process` — docs/getting-started.md:23 — defined here
- `Verification` — docs/getting-started.md:24, 87 — defined here
- `Common rationalizations` — docs/getting-started.md:25 — defined here
- `Red flags` — docs/getting-started.md:26 — defined here
- `System prompt` — docs/getting-started.md:32 — used here
- `Rules file` — docs/getting-started.md:34 — used here
- `meta-skill` — docs/getting-started.md:38 — used here
- `Minimal (Start here)` — docs/getting-started.md:46 — defined here
- `Full Lifecycle` — docs/getting-started.md:56 — defined here
- `Context-Aware Loading` — docs/getting-started.md:67 — defined here
- `Skill Anatomy` — docs/getting-started.md:75 — defined here
- `YAML frontmatter` — docs/getting-started.md:80 — used here
- `Overview` — docs/getting-started.md:81 — defined here
- `When to Use` — docs/getting-started.md:82 — defined here
- `Core Process` — docs/getting-started.md:83 — defined here
- `Examples` — docs/getting-started.md:84 — defined here
- `Common Rationalizations` — docs/getting-started.md:85 — defined here
- `Red Flags` — docs/getting-started.md:86 — defined here
- `Five-axis code review` — docs/getting-started.md:98 — used here
- `Core Web Vitals` — docs/getting-started.md:101 — used here
- `/build auto` — docs/getting-started.md:114 — defined here | used here
- `definition-of-done.md` — docs/getting-started.md:137 — used here
- `living documents` — docs/getting-started.md:153 — defined here | used here
- `SPEC.md` — docs/getting-started.md:153 — used here
- `tasks/plan.md` — docs/getting-started.md:153 — used here
- `tasks/todo.md` — docs/getting-started.md:153 — used here
```

#### Additional Verified Fix in `docs-getting-started-md.md`:
In `## Outputs` and `## Defects`:
- Adjust whitespace range boundaries:
  - Task-specific configurations: `67-73` (was `67-74`)
  - Living document artifacts: `151-157` (was `151-158`)
  - Operational guidelines: `159-165` (was `159-166`)
  - Slash commands defect: `107-119` (was `107-120`)

---

### 4.3 Artifacts Created in Explorer Directory

- `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_5/proposed_docs-developer-onboarding-md.md`
- `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_5/proposed_docs-getting-started-md.md`
- `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_5/remediation.patch`

---

## 5. Verification Method

To independently reproduce and verify that every single cited line in the corrected sections exists, is non-empty, and contains the exact verbatim concept text character-for-character, run the following command from the repository root:

```bash
bun -e '
import fs from "fs";

const files = [
  {
    inv: ".agents/explorer_inv_addy_6_5/proposed_docs-developer-onboarding-md.md",
    src: "sources/addy/docs/developer-onboarding.md"
  },
  {
    inv: ".agents/explorer_inv_addy_6_5/proposed_docs-getting-started-md.md",
    src: "sources/addy/docs/getting-started.md"
  }
];

let totalChecks = 0;
let errors = 0;

for (const { inv, src } of files) {
  const invText = fs.readFileSync(inv, "utf8");
  const srcLines = fs.readFileSync(src, "utf8").split("\n");
  const conceptSection = invText.split("## Concepts named — required, verbatim")[1]?.split("## Structure")[0];
  const cLines = conceptSection.split("\n").filter(l => l.trim().startsWith("- `"));

  console.log(`\n=== AUDITING ${inv} against ${src} ===`);
  for (const cLine of cLines) {
    const match = cLine.match(/- `([^`]+)` — ([^—]+) — (.*)/);
    if (!match) {
      console.log(`[SYNTAX ERROR] ${cLine}`);
      errors++;
      continue;
    }
    const [_, concept, locs] = match;
    const items = locs.split(",").map(s => s.trim());
    for (const item of items) {
      totalChecks++;
      const lineNum = item.includes(":") ? parseInt(item.split(":")[1].trim(), 10) : parseInt(item, 10);
      const target = srcLines[lineNum - 1];
      if (target === undefined) {
        console.log(`[OUT OF BOUNDS] Line ${lineNum} for "${concept}"`);
        errors++;
      } else if (target.trim() === "") {
        console.log(`[EMPTY LINE] Line ${lineNum} for "${concept}"`);
        errors++;
      } else if (!target.includes(concept)) {
        console.log(`[VERBATIM MISMATCH] Line ${lineNum} for "${concept}": actual="${target.trim()}"`);
        errors++;
      }
    }
  }
}

console.log(`\nAudit Complete: ${totalChecks} line citations verified.`);
if (errors === 0) {
  console.log("ALL CITATIONS PASSED (0 phantom lines, 0 empty lines, 0 verbatim mismatches).");
} else {
  console.log(`AUDIT FAILED with ${errors} errors.`);
  process.exit(1);
}
'
```

### Invalidation Conditions
This remediation is invalidated if:
1. Any cited line number in the proposed sections points to an empty line or does not contain the concept string verbatim in `sources/addy/` at pinned commit `d2c37ef6225dd8726cdd369a8030307f48592d26`.
2. Any concept in the proposed list is shown to be paraphrased rather than copied verbatim from the source.
