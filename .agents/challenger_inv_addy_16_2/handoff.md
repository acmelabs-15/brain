# Handoff Report: inv-addy-16 Challenger 2

**Work Unit**: `inv-addy-16`  
**Reviewer**: Empirical Challenger 2 (`challenger_inv_addy_16_2`)  
**Verdict**: **REQUEST_CHANGES**  

---

## 1. Observation

Direct observations from empirical execution of verification harnesses `scripts/synthesis/verify-inv-16.ts` and `scripts/synthesis/verify-citations-inv-16.ts`:

1. **Concepts Named Line-Drift & Paraphrase in `skills-constraint-driven-development-skill-md.md`**:
   - Line 148: `` `Checked by` — skills/constraint-driven-development/SKILL.md:123 — defined here ``.
     - Observation: Source line 123 is `"Every row names the command that produces the verdict. A dimension with a"`. The column header `Checked by` is located at line 112 (`| Dimension | Rule | Checked by | Runs at |`).
   - Line 191: `` `cheapest road to green` — skills/constraint-driven-development/SKILL.md:205 — defined here ``.
     - Observation: Source line 205 is an empty newline `""`. The phrase appears at line 206 (`"Agents don't craft clever loopholes. They hit a red check and take the cheapest road to green."`).
   - Line 155: `` `de facto tool` — skills/constraint-driven-development/SKILL.md:144 — defined here ``.
     - Observation: Source line 144 text is `"when a de facto one exists"`. The exact phrase `de facto tool` appears at lines 216 and 217.
   - Line 179: `` `edit loop` — skills/constraint-driven-development/SKILL.md:182 — defined here ``.
     - Observation: Source line 182 text is `"check:fast is what runs after an edit"`. `edit loop` appears at line 200 (`"moves out of the edit loop"`).
   - Lines 204–206:
     - `` `External checks` — skills/constraint-driven-development/SKILL.md:220 — defined here ``
     - `` `Project checks` — skills/constraint-driven-development/SKILL.md:221 — defined here ``
     - `` `Suite checks` — skills/constraint-driven-development/SKILL.md:222 — defined here ``
     - Observation: Source lines 220–222 define `- **External**`, `- **Project**`, and `- **Suite**`. The inventory appended `"checks"` to each term.
   - Line 207: `` `Circular checks` — skills/constraint-driven-development/SKILL.md:218 — defined here ``.
     - Observation: Source line 218 is `"**Not all checks are equally circular.**"`.
   - Line 212: `` `WCAG` — skills/constraint-driven-development/SKILL.md:246 — used here ``.
     - Observation: Source line 246 is `"| Accessibility | zero critical or serious axe violations | Moderate and minor are often debatable |"`. `WCAG` appears at line 120 and line 220.
   - Line 224: `` `Verification checklist` — skills/constraint-driven-development/SKILL.md:290 — defined here ``.
     - Observation: Source line 290 is `"## Verification"`.

2. **Inverted Dependency Edge in `skills-constraint-driven-development-skill-md.md`**:
   - Line 72: lists `- reference skills/constraint-driven-development/references/floor-guard.md — skills/constraint-driven-development/references/floor-guard.md:3` under `## Invoked by — required`.
   - Observation: `floor-guard.md` is a reference file co-located inside `skills/constraint-driven-development/references/`. `SKILL.md:216` invokes `floor-guard.md`, not vice-versa.

3. **Omitted Concepts in `sources/addy/skills/code-review-and-quality/SKILL.md` (R6)**:
   - Line 273, 372: `LGTM` ("Don't rubber-stamp. 'LGTM' without evidence of review helps no one." / "'LGTM' without evidence of actual review"). Omitted from `Concepts named`.
   - Line 273: `rubber-stamp` / `rubber-stamping`. Omitted from `Concepts named`.
   - Lines 210, 213, 216: `Model A` and `Model B` (agents in Multi-Model Review Pattern). Omitted from `Concepts named`.
   - Lines 134, 136: `First line` and `Body` (change description structure). Omitted from `Concepts named`.
   - Lines 267, 360: `I'll clean it up later` (rationalization / anti-pattern). Omitted from `Concepts named`.
   - Line 253: `one business day` (review speed SLA). Omitted from `Concepts named`.

4. **Omitted Concepts in `sources/addy/skills/constraint-driven-development/SKILL.md` (R6)**:
   - Line 34: `Pre-product-market-fit`. Omitted from `Concepts named`.
   - Line 153: `owasp-top-ten` (`--config p/owasp-top-ten`). Omitted from `Concepts named`.
   - Line 159: `depcruise`. Omitted from `Concepts named`.
   - Line 209: `.skip`. Omitted from `Concepts named`.
   - Line 211: `TODO`. Omitted from `Concepts named`.

5. **Verbatim Purpose Formatting in `skills-code-review-and-quality-skill-md.md:14`**:
   - Inventory: `> "The approval standard: Approve a change..."`
   - Source line 12: `**The approval standard:** Approve a change...`
   - Observation: Markdown bold markers `**` were stripped.

6. **Defect Reproducibility in `floor-guard.mjs`**:
   - Confirmed untracked files are skipped via exit 1 throw in `git diff --no-index`.
   - Confirmed deleted test files evaluated as `'ev/null'`, failing test regex.
   - Identified additional blindspot: `floor-guard.mjs:83` only checks `n < nums(r.text)[i]`, failing to catch relaxed upper-bound budgets (LCP, bundle size, latency).

---

## 2. Logic Chain

1. **METHOD.md R3 requires verbatim extraction**: "Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis." (METHOD.md §3 R3).
2. Observation 1 proves that `External checks`, `Project checks`, `Suite checks`, and `Circular checks` paraphrase the source terms (`External`, `Project`, `Suite`, `equally circular`), and `Checked by`, `cheapest road to green`, `de facto tool`, `edit loop`, and `WCAG` cite inaccurate line numbers.
3. **METHOD.md R6 requires comprehensive coverage of named things**: "If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment." (METHOD.md §3 R6).
4. Observation 3 & 4 prove that core named concepts and anti-patterns (`LGTM`, `rubber-stamp`, `Model A`, `Model B`, `Pre-product-market-fit`, `I'll clean it up later`) are present in source text but absent from `Concepts named`.
5. **METHOD.md §4 requires accurate composition mapping**: `Invoked by` represents callers of the file. Observation 2 proves that `floor-guard.md` is a downstream reference loaded by the skill, not an invoking caller. Listing it under `Invoked by` inverts the dependency direction.
6. Therefore, while the analytical core is strong, these discrepancies must be remediated to prevent downstream error propagation into Phase 2 concept cards and Phase 3 concordance.

---

## 3. Caveats

- **No Caveats on Source Code**: Both source files (`constraint-driven-development/SKILL.md` and `code-review-and-quality/SKILL.md`) were read in full.
- **Coverage & Lint Status**: Both `scripts/synthesis/coverage.ts` (0 empty fields) and `scripts/synthesis/glossary-lint.ts` (clean) ran successfully. The required changes do not violate schema completeness or glossary consistency.

---

## 4. Conclusion

**Verdict: REQUEST_CHANGES**

The work unit cannot be fully approved in its current state due to line misattributions in `Concepts named`, paraphrasing of verbatim terms, omission of named patterns/anti-patterns (`LGTM`, `Model A/B`), and an inverted invocation edge.

### Actionable Remediation Checklist:
1. In `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`:
   - Line 148: Change citation for `Checked by` to line 112.
   - Line 191: Change citation for `cheapest road to green` to line 206.
   - Line 155: Change citation for `de facto tool` to lines 216–217.
   - Line 179: Change citation for `edit loop` to line 200.
   - Line 212: Change citation for `WCAG` to line 120 or line 220.
   - Lines 204–206: Change `External checks`, `Project checks`, `Suite checks` to verbatim: `External` (line 220), `Project` (line 221), `Suite` (line 222).
   - Line 207: Change `Circular checks` to verbatim: `Not all checks are equally circular` (line 218).
   - Line 224: Change `Verification checklist` to verbatim: `Verification` (line 290).
   - Line 72: Remove `skills/constraint-driven-development/references/floor-guard.md` from `Invoked by`.
   - Add concepts: `Pre-product-market-fit` (line 34), `owasp-top-ten` (line 153), `depcruise` (line 159), `.skip` (line 209), `TODO` (line 211).
2. In `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`:
   - Line 14: Restore markdown bold `**The approval standard:**` in Purpose blockquote.
   - Add concepts: `LGTM` (lines 273, 372), `rubber-stamp` (line 273), `Model A` (lines 210, 216), `Model B` (lines 213, 216), `First line` (line 134), `Body` (line 136), `I'll clean it up later` (lines 267, 360), `one business day` (line 253).
3. In `docs/analysis/inventory/addy/_units/inv-addy-16.md`:
   - Update summary metrics and concept counts once entries are updated.

---

## 5. Verification Method

To independently verify these findings:

1. Run the challenger verification harness:
   ```bash
   bun scripts/synthesis/verify-inv-16.ts
   ```
   Confirm that all 13 reported discrepancies reproduce.

2. Run the citation sampling harness:
   ```bash
   bun scripts/synthesis/verify-citations-inv-16.ts
   ```
   Confirm that all 30 baseline citations pass.

3. Inspect files:
   - `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`
   - `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`
   - `sources/addy/skills/constraint-driven-development/SKILL.md`
   - `sources/addy/skills/code-review-and-quality/SKILL.md`
   - `.agents/challenger_inv_addy_16_2/report.md`
