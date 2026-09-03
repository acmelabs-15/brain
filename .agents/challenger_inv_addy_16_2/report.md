# Challenge Report: inv-addy-16 (Challenger 2)

**Work Unit**: `inv-addy-16`  
**Focus**: Verbatim Quotes, Citations, Boundary Stress Testing & R6 Concept Coverage  
**Reviewer**: Empirical Challenger 2 (`challenger_inv_addy_16_2`)  
**Verdict**: **REQUEST_CHANGES**  
**Overall Risk Assessment**: **MEDIUM**

---

## 1. Executive Summary

Empirical Challenger 2 conducted an adversarial audit of the inventory extraction for work unit `inv-addy-16` covering:
1. `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes)
2. `sources/addy/skills/code-review-and-quality/SKILL.md` (20,555 bytes)
3. Inventory entries in `docs/analysis/inventory/addy/`
4. Work unit report `docs/analysis/inventory/addy/_units/inv-addy-16.md`

We implemented and executed two automated Bun/TypeScript test suites:
- `scripts/synthesis/verify-inv-16.ts`: Executed 298 empirical checks across verbatim quotes, line-number fidelity, file existence, defect reproducibility, and concept coverage.
- `scripts/synthesis/verify-citations-inv-16.ts`: Sampled 30 path:line citations across Inputs, Outputs, Structure, Defects, and Observations.

### Overall Assessment
The inventory work demonstrates high quality and thorough architectural analysis, including independent discovery of 4 significant bugs in the co-located `floor-guard.mjs` script. However, adversarial verification identified **several concrete defects violating METHOD.md rules R2, R3, and R6**:
1. **R3 Verbatim Paraphrase & Line-Drift in Concepts Named**: In `skills-constraint-driven-development-skill-md.md`, 8 concepts contain inaccurate line citations (e.g. citing blank line 205, citing descriptive line 123 instead of table header line 112, citing line 246 where WCAG is not present) or have non-verbatim words appended (e.g. `External checks`, `Project checks`, `Suite checks` instead of verbatim `External`, `Project`, `Suite`).
2. **R6 Concept Omissions**: High-leverage named concepts, anti-patterns, and patterns were omitted from `Concepts named`, notably `LGTM` and `rubber-stamp` (critical review anti-patterns in `code-review-and-quality`), `Model A` and `Model B` (named roles in Multi-Model Review Pattern), and `Pre-product-market-fit` in `constraint-driven-development`.
3. **Inverted Dependency Edge in Invoked By**: `skills/constraint-driven-development/references/floor-guard.md:3` was erroneously classified under `Invoked by` for `constraint-driven-development`. A co-located reference does not call or load its parent skill.
4. **Minor Verbatim Quote Formatting Drift**: In `skills-code-review-and-quality-skill-md.md:14`, markdown bold syntax (`**The approval standard:**`) was stripped in the blockquote.

---

## 2. Detailed Challenges & Empirical Findings

### [High] Challenge 1: Non-Verbatim Naming and Line-Drift in Concepts Named (R2 & R3 Violation)
- **Assumption Challenged**: All items in `## Concepts named — required, verbatim` are exact verbatim quotes from the specified `path:line`.
- **Empirical Evidence**:
  - `skills-constraint-driven-development-skill-md.md:148`:
    - Inventory claims: `` `Checked by` — skills/constraint-driven-development/SKILL.md:123 — defined here ``
    - Source Line 123: `"Every row names the command that produces the verdict. A dimension with a"`
    - Finding: The column header `Checked by` actually appears at line 112 (`| Dimension | Rule | Checked by | Runs at |`). Line 123 is body text explaining the column.
  - `skills-constraint-driven-development-skill-md.md:191`:
    - Inventory claims: `` `cheapest road to green` — skills/constraint-driven-development/SKILL.md:205 — defined here ``
    - Source Line 205: Empty newline (`""`).
    - Finding: The phrase appears on line 206 (`"Agents don't craft clever loopholes. They hit a red check and take the cheapest road to green."`).
  - `skills-constraint-driven-development-skill-md.md:204-206`:
    - Inventory claims:
      - `` `External checks` — skills/constraint-driven-development/SKILL.md:220 — defined here ``
      - `` `Project checks` — skills/constraint-driven-development/SKILL.md:221 — defined here ``
      - `` `Suite checks` — skills/constraint-driven-development/SKILL.md:222 — defined here ``
    - Source Lines 220-222:
      - Line 220: `- **External** — axe-core encodes WCAG...`
      - Line 221: `- **Project** — your lint rules, your layer boundaries. A human owns the file.`
      - Line 222: `- **Suite** — your own tests. Most useful, and the only genuinely circular one.`
    - Finding: The source terms are `External`, `Project`, and `Suite`. Appending `"checks"` is an ungrounded paraphrase violating R3.
  - `skills-constraint-driven-development-skill-md.md:207`:
    - Inventory claims: `` `Circular checks` — skills/constraint-driven-development/SKILL.md:218 — defined here ``
    - Source Line 218: `"**Not all checks are equally circular.** Rank them by one question..."`
    - Finding: The exact phrase `Circular checks` does not appear. The source concept is "equally circular" checks or circularity ranking.
  - `skills-constraint-driven-development-skill-md.md:212`:
    - Inventory claims: `` `WCAG` — skills/constraint-driven-development/SKILL.md:246 — used here ``
    - Source Line 246: `"| Accessibility | zero critical or serious axe violations | Moderate and minor are often debatable |"`
    - Finding: `WCAG` does not appear on line 246. It is used on line 120 (`wcag2a,wcag2aa,wcag21aa`) and line 220 (`axe-core encodes WCAG`).
  - `skills-constraint-driven-development-skill-md.md:224`:
    - Inventory claims: `` `Verification checklist` — skills/constraint-driven-development/SKILL.md:290 — defined here ``
    - Source Line 290: `"## Verification"`
    - Finding: The source header is `Verification`.
  - `skills-constraint-driven-development-skill-md.md:155`:
    - Inventory claims: `` `de facto tool` — skills/constraint-driven-development/SKILL.md:144 — defined here ``
    - Source Line 144: `"when a de facto one exists"`
    - Finding: `de facto tool` literally appears at line 216 and 217, not 144.
  - `skills-constraint-driven-development-skill-md.md:179`:
    - Inventory claims: `` `edit loop` — skills/constraint-driven-development/SKILL.md:182 — defined here ``
    - Source Line 182: `"check:fast is what runs after an edit"`
    - Finding: `edit loop` literally appears at line 200 (`"moves out of the edit loop"`), not line 182.
- **Blast Radius**: Phase 2 concept extraction will ingest misattributed line numbers or non-verbatim slugs into concept cards.
- **Mitigation**: Update the cited lines and verbatim names in `skills-constraint-driven-development-skill-md.md`.

---

### [High] Challenge 2: Omission of Core Named Concepts & Anti-Patterns (R6 Violation)
- **Assumption Challenged**: Every named technique, framework, artifact, gate, role, checklist, template, or anti-pattern defined or used in the source files was inventoried.
- **Empirical Evidence**:
  1. In `sources/addy/skills/code-review-and-quality/SKILL.md`:
     - `LGTM` (lines 273, 372): Explicitly named anti-pattern ("Don't rubber-stamp. 'LGTM' without evidence of review helps no one." / "'LGTM' without evidence of actual review"). Highly relevant to lifecycle alignment.
     - `rubber-stamp` / `rubber-stamping` (line 273): Explicitly named failure mode.
     - `Model A` and `Model B` (lines 210, 213, 216): Explicitly named agent roles in the Multi-Model Review Pattern.
     - `First line` and `Body` (lines 134, 136): Explicitly named structural parts of change descriptions.
     - `I'll clean it up later` (lines 267, 360): Named rationalization / deferred debt pattern.
     - `one business day` (line 253): Explicitly defined review SLA standard.
  2. In `sources/addy/skills/constraint-driven-development/SKILL.md`:
     - `Pre-product-market-fit` (line 34): Named lifecycle stage / scoping boundary.
     - `owasp-top-ten` (line 153): Named security ruleset (`--config p/owasp-top-ten`).
     - `depcruise` (line 159): Named CLI tool invocation.
     - `.skip` (line 209): Named testing suppression move.
     - `TODO` (line 211): Named unfinished work stub indicator.
- **Blast Radius**: Phase 2 will fail to produce concept cards for canonical multi-agent review patterns (`Model A`, `Model B`) and quality anti-patterns (`LGTM`, `rubber-stamp`), creating gaps in Phase 3 concordance.
- **Mitigation**: Add these missing named concepts to `## Concepts named` in their respective inventory files.

---

### [Medium] Challenge 3: Inverted Dependency Edge in Invoked By
- **Assumption Challenged**: All files listed in `## Invoked by` are upstream files that call, load, or invoke the skill.
- **Empirical Evidence**:
  - In `skills-constraint-driven-development-skill-md.md:72`:
    `- reference skills/constraint-driven-development/references/floor-guard.md — skills/constraint-driven-development/references/floor-guard.md:3`
  - In `floor-guard.md:3`, the text states:
    `"Every numbered dimension in CONSTRAINTS.md maps to a de facto tool (Step 4). The floor does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own... That is the exact non-determinism this skill exists to remove."`
  - Analysis: `floor-guard.md` is a reference file shipped with `constraint-driven-development`. The skill invokes the reference (`SKILL.md:216`); the reference does NOT invoke or load the skill. Listing it under `Invoked by` reverses the invocation graph edge.
- **Blast Radius**: Distorts the manifest invocation graph and confuses compositional dependencies in Phase 3/5.
- **Mitigation**: Remove `references/floor-guard.md` from `Invoked by` in `skills-constraint-driven-development-skill-md.md` (it is already properly listed under `Invokes` on line 53).

---

### [Low] Challenge 4: Markdown Formatting Stripped in Verbatim Purpose Blockquote
- **Assumption Challenged**: All verbatim blockquotes faithfully preserve formatting as well as text.
- **Empirical Evidence**:
  - In `skills-code-review-and-quality-skill-md.md:14`:
    - Quoted text: `> "The approval standard: Approve a change..."`
    - Source Line 12: `**The approval standard:** Approve a change...`
    - Finding: The markdown bold markers `**` were stripped from `"The approval standard:"`.
- **Blast Radius**: Extremely low, but technically a minor verbatim fidelity defect under R3.
- **Mitigation**: Restore `**The approval standard:**` inside the quotation marks.

---

## 3. Empirical Stress Testing & Verification Results

### Test Suite Execution Summary

```
=================================================================
  EMPIRICAL CHALLENGER 2 VERIFICATION HARNESS (inv-addy-16)     
=================================================================
  Tests Executed: 298
  Passed: 285
  Failed: 13
=================================================================
```

### Citation Sampling Test (30 Citations)
All 30 sampled citations across Inputs, Outputs, Structure, and Observations passed exact line validation:
- `constraint-driven-development`: Lines 48, 50, 52, 53, 74, 86, 104, 114, 120, 140, 175, 192, 210, 247.
- `code-review-and-quality`: Lines 26, 64, 77, 88, 108, 113, 121, 183, 184, 191, 205, 237, 276, 295, 346, 396.

### Path Existence Verification
- All 13 invoked targets exist on disk (with `/loop` accurately flagged as a missing-path defect).
- All 24 invoked-by targets exist on disk and reference the skills.

### Empirical Reproduction of `floor-guard.mjs` Defects
We executed empirical tests on the reference implementation in `skills/constraint-driven-development/references/floor-guard.md`:
1. **Untracked Diff Drop Confirmed**: Executing `git diff --no-index /dev/null <untracked-file>` returns exit code 1 when content exists. Because `floor-guard.mjs` wraps this in `execFileSync` inside a `try/catch` returning `null`, untracked files with violations are completely dropped and never flagged.
2. **Deleted Test File Slicing Bug Confirmed**: For deleted files, `git diff` produces `+++ /dev/null`. `line.slice(6)` yields `'ev/null'`, which fails the regex `/\.(test|spec)\.|_test\.|test_/`, allowing deleted test suites to bypass the floor guard without detection.
3. **Upper-Bound Budget Blindspot Discovered**: `floor-guard.mjs:83` uses `n < nums(r.text)[i]` to detect weakened thresholds. For latency, bundle size, LCP, or CLS, relaxing a threshold raises the numeric budget (e.g. LCP ≤ 2500ms raised to 3500ms). Because `3500 < 2500` is false, relaxing an upper-bound budget is completely missed by `floor-guard.mjs`.

---

## 4. Required Action Items for Approval

To achieve approval, the inventory entries should be updated with the following adjustments:

1. **In `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`**:
   - Correct line citation for `Checked by` to line 112.
   - Correct line citation for `cheapest road to green` to line 206.
   - Correct line citation for `de facto tool` to lines 216-217.
   - Correct line citation for `edit loop` to line 200.
   - Correct line citation for `WCAG` to line 120 / line 220.
   - Update `External checks`, `Project checks`, `Suite checks` to verbatim terms: `External` (line 220), `Project` (line 221), `Suite` (line 222).
   - Update `Circular checks` to verbatim term: `Not all checks are equally circular` (line 218).
   - Update `Verification checklist` to verbatim term: `Verification` (line 290).
   - Remove `skills/constraint-driven-development/references/floor-guard.md` from `## Invoked by`.
   - Add missing concepts: `Pre-product-market-fit` (line 34), `owasp-top-ten` (line 153), `depcruise` (line 159), `.skip` (line 209), `TODO` (line 211).
   - (Optional enhancement): Note the upper-bound threshold defect in `floor-guard.mjs` (raising maximum budgets not detected).

2. **In `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`**:
   - Restore markdown bold syntax `**The approval standard:**` in Purpose quote at line 14.
   - Add missing concepts: `LGTM` (lines 273, 372), `rubber-stamp` (line 273), `Model A` (lines 210, 216), `Model B` (lines 213, 216), `First line` (line 134), `Body` (line 136), `I'll clean it up later` (lines 267, 360), `one business day` (line 253).

3. **In `docs/analysis/inventory/addy/_units/inv-addy-16.md`**:
   - Update summary notes to reflect revised concept counts once updated.
