# Handoff Report: inv-addy-16 Explorer (Scripts, Tooling & Cross-References)

**Date**: 2026-09-03  
**Unit**: `inv-addy-16`  
**From**: `explorer_inv_addy_16_scripts`  
**To**: Parent Orchestrator (`aed25c9d-0210-4705-b93e-eab462569ae1`) / Worker

---

## 1. Observation

1. **Assigned files in scope**:
   - `sources/addy/skills/constraint-driven-development/SKILL.md`: 20,880 bytes, 312 lines (`wc -l -c` confirmed 311 newlines, 20880 bytes).
   - `sources/addy/skills/code-review-and-quality/SKILL.md`: 20,555 bytes, 397 lines (`wc -l -c` confirmed 396 newlines, 20555 bytes).
   - Total bytes: 41,435 bytes. Matches manifest rows 177 and 178 (`docs/analysis/manifest/addy.md:177-178`) and `docs/plan/STATE.md:80`.

2. **Validation scripts execution**:
   - `node scripts/validate-skills.js` inside `sources/addy/`: Fails with exit code 1:
     `ReferenceError: require is not defined in ES module scope... '/Users/peterkloss/Dev/ACMElabs/brain-v2/package.json' contains "type": "module"`.
   - `bun scripts/validate-skills.js`: Exits 0: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`.
   - `bun scripts/validate-reference-links.js`: Exits 0: `25 skills checked — 0 error(s) — PASSED`.
   - `bun scripts/validate-artifact-paths.js`: Exits 0: `7 files checked — 0 error(s) — PASSED`.
   - `bun scripts/validate-commands.js`: Exits 0: `9 commands checked — 0 error(s) — PASSED`.
   - `bun scripts/validate-versions.js`: Exits 0: `All plugin manifests use version 0.6.8.`.
   - `bun scripts/run-evals.js --min-rank1 80`: Exits 0: `136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`.

3. **Validation test suites execution**:
   - `bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/lib/skill-lint-test.js`:
     Exits 0: `43 pass, 0 fail across 6 files [716.00ms]`.

4. **Inlined floor guard execution** (`references/floor-guard.md:17-93`):
   - `bun run floor-guard.mjs --base HEAD`: Exits 0 (`floor-guard: clean`).
   - `node floor-guard.mjs --base HEAD`: Exits 0 (`floor-guard: clean`).
   - `bun run floor-guard.mjs --base non-existent-ref`: Exits 2 (`fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`).

5. **Lifecycle phase assignments**:
   - `skills/constraint-driven-development/SKILL.md`: `README.md:356` places under `# Define`. Omitted from `CLAUDE.md:20-26` and `AGENTS.md:25-46` phase tables. Assigned phase: `addy:Define`.
   - `skills/code-review-and-quality/SKILL.md`: `CLAUDE.md:25`, `AGENTS.md:34`, and `README.md:368` consistently assign to `addy:Review`.

6. **Defects observed**:
   - `doc-drift`: `constraint-driven-development` missing from `CLAUDE.md` and `AGENTS.md` phase tables.
   - `doc-drift`: Severity labels inconsistency in `code-review-and-quality`:
     - `SKILL.md:181-188`: `(no prefix) / Required`, `Critical:`, `Nit:`, `Optional: / Consider:`, `FYI`
     - `SKILL.md:228-229`: `Critical, Required, Optional, or Nit`
     - `.claude/commands/review.md:15` & `commands/review.toml:14`: `Critical, Important, or Suggestion`
     - `agents/code-reviewer.md:49-57`: `Critical, Required, Optional, Nit`
   - `doc-drift`: Manifest line 205 notes `../addy-external/constraint-driven-development.md` was unavailable during snapshotting.
   - `script-bug` in `floor-guard.mjs`: Untracked files with diffs dropped (exit 1 throws in git()), deleted test files missed (slices header to "v/null"), deleted constraint bullets missed without replacement, and `.constraintsignore` unimplemented.

---

## 2. Logic Chain

1. **From Observation 1**: The unit contains exactly two files totaling 41,435 bytes, matching `docs/analysis/manifest/addy.md` lines 177-178 and `docs/plan/STATE.md` line 80.
2. **From Observation 2 & 3**: All 5 repository validators and 6 test suites are fully functional when run via `bun`, passing 100% of checks and tests. The Node failure on CommonJS files is strictly an artifact of the parent repo's `"type": "module"` configuration without a local `package.json` in `sources/addy/`. Using `bun` satisfies both `AGENTS.md` and `METHOD.md` Rule R9.
3. **From Observation 4**: The floor-guard reference implementation complies with its documented exit code contract (`0` clean, `2` error), but harbors known implementation bugs that must be documented in `defects` per Rule R5.
4. **From Observation 5 & 6**: Phase assignments for both skills are definitively resolved (`addy:Define` for constraint-driven-development, `addy:Review` for code-review-and-quality), and all cross-file documentation discrepancies are cataloged.
5. **Synthesis**: The findings furnish complete, verified evidence for the Worker to construct both inventory entry files, the unit report `_units/inv-addy-16.md`, and perform all manifest and `STATE.md` updates without ambiguity.

---

## 3. Caveats

- `sources/addy/evals/cases/constraint-driven-development.json` and `code-review-and-quality.json` were inspected for trigger counts and routing baselines, but Tier 3 behavioral evaluations (`node scripts/run-evals.js --behavioral`) were not run because Tier 3 consumes model tokens and is never run in CI or non-interactive environments (per `run-evals.js:19`).
- `floor-guard.mjs` was executed in an isolated runner in the explorer directory against repository git refs; no code modifications were made to `sources/addy/`.

---

## 4. Conclusion

Work unit `inv-addy-16` investigation is complete. All scripts, tooling, commands, cross-references, and defects are fully explored, verified, and mapped.
The Worker can immediately proceed with authoring:
1. `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`
2. `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-16.md`
4. Manifest check-offs on rows 177 and 178 of `docs/analysis/manifest/addy.md`
5. Status update to `docs/plan/STATE.md` (row 80 marked complete with unit report path)

---

## 5. Verification Method

To independently verify the explorer's claims:

1. **Verify script and test executions**:
   ```bash
   cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
   bun scripts/validate-skills.js
   bun scripts/validate-reference-links.js
   bun scripts/validate-artifact-paths.js
   bun scripts/validate-commands.js
   bun scripts/validate-versions.js
   bun scripts/run-evals.js --min-rank1 80
   bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/lib/skill-lint-test.js
   ```
   *Expected result*: All commands exit 0; tests report 43 pass, 0 fail.

2. **Verify file inspection**:
   - View `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_16_scripts/report.md` for full detailed tables and checklists.
