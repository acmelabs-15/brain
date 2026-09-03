# Handoff Report — Explorer 2 Gen 3 (inv-addy-15)

**Task**: Technical exploration and inventory extraction of:
1. `sources/addy/skills/spec-driven-development/SKILL.md` (12,163 bytes)
2. `sources/addy/skills/constraint-driven-development/references/floor-guard.md` (5,851 bytes)  
**Report Location**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_2_gen3/report.md`  
**Handoff Type**: Hard (Task complete)

---

## 1. Observation

1. **Full reads**:
   - `sources/addy/skills/spec-driven-development/SKILL.md`: Read 246 lines (12,163 bytes) in full.
   - `sources/addy/skills/constraint-driven-development/references/floor-guard.md`: Read 100 lines (5,851 bytes) in full.
2. **Existence checks**:
   - `skills/api-and-interface-design/SKILL.md` exists (14,884 bytes).
   - `skills/planning-and-task-breakdown/SKILL.md` exists (10,564 bytes).
   - `skills/incremental-implementation/SKILL.md` exists (9,507 bytes).
   - `skills/test-driven-development/SKILL.md` exists (16,483 bytes).
   - `skills/context-engineering/SKILL.md` exists (11,070 bytes).
   - `sources/addy-external/spec-driven-development.md` exists (25,104 bytes).
   - `evals/cases/spec-driven-development.json` exists (2,657 bytes).
   - `evals/fixtures/spec-driven-development/billing-brief.md` exists (689 bytes).
   - `evals/fixtures/spec-driven-development-decomposition/portal-brief.md` exists (1,067 bytes).
   - `evals/cases/constraint-driven-development.json` exists (3,353 bytes).
   - `.claude/commands/spec.md` and `commands/spec.toml` exist.
   - `.claude/commands/constraints.md` and `commands/constraints.toml` exist.
3. **CI scripts**:
   - `bun scripts/validate-skills.js`: passed (25 skills checked, 0 errors).
   - `bun scripts/validate-artifact-paths.js`: passed (7 pipeline files checked, 0 errors).
4. **Execution of `floor-guard.mjs`**:
   - Command `node floor-guard.mjs --base HEAD` in `sources/addy`: Output `floor-guard: clean`, Exit code: 0.
   - Command `node floor-guard.mjs --base non-existent-ref`: Output `fatal: Not a valid object name ...\nfloor-guard: no merge base against ...`, Exit code: 2.
   - Command `bun run floor-guard.mjs --base HEAD`: Output `floor-guard: clean`, Exit code: 0.
   - Command `node floor-guard.mjs --base main` with injected violations: Output flagged 6 violations (`[new-exception]`, `[silenced-checker]`, `[unfinished-work]`, `[test-made-easier]`, `[assertion-removed]`, `[threshold-lowered]`), Exit code: 1.
5. **Verified bugs in `floor-guard.mjs`**:
   - Test with deleted test file (`git rm app.test.js`): Output `floor-guard: clean`, Exit code: 0. Root cause: `+++ /dev/null` sliced by 6 characters yields `v/null`, failing the regex match `/\.(test|spec)\.|_test\.|test_/.test(file)`.
   - Test with deleted constraint bullet: Output `floor-guard: clean`, Exit code: 0. Root cause: lines 81–85 look up `addedConstraints.find()`, which is undefined when a line is removed without replacement.
   - Unimplemented feature: `.constraintsignore` documented on line 98 has no parsing or execution code in the script.

---

## 2. Logic Chain

1. **Premise 1**: From Observation 1 and 2, all required files and referenced dependencies exist and were examined without sampling.
2. **Premise 2**: From Observation 3, `spec-driven-development` conforms to repository-wide structural conventions (`validate-skills.js`) and canonical artifact path rules (`validate-artifact-paths.js`).
3. **Premise 3**: Comparing `spec-driven-development/SKILL.md` with `.claude/commands/spec.md`, `commands/spec.toml`, `docs/adoption-guide.md`, and `evals/cases/spec-driven-development.json`, `SKILL.md` omits stating the root `SPEC.md` filename (asking only for saving to a file in the repository), while downstream tooling and evals enforce `SPEC.md`. Furthermore, `README.md:236` calls the artifact a "PRD", which diverges from `SKILL.md`'s "structured specification" / "spec".
4. **Premise 4**: From Observation 4, `floor-guard.mjs` implements its three exit codes (`0`, `1`, `2`) accurately on basic test cases.
5. **Premise 5**: From Observation 5, edge-case testing proves that `floor-guard.mjs` contains two significant gate bypass bugs (deleted test files and deleted constraint bullets produce exit code 0 instead of 1) and documents an unimplemented feature (`.constraintsignore`).
6. **Deduction**: Both files are technically sound in conceptual design intent (specification before coding; diff-scoped quality floor enforcement) and can be inventoried with full metadata, while accurately registering the identified defects per METHOD.md R5.

---

## 3. Caveats

- `hooks/sdd-cache-*` scripts share the "SDD" acronym with `spec-driven-development`, but inspection confirmed they belong strictly to `source-driven-development`.
- Testing of `floor-guard.mjs` was conducted via isolated temporary Git repositories in `/tmp` to avoid altering git state in `sources/addy/`.

---

## 4. Conclusion

Exploration and extraction for `skills/spec-driven-development/SKILL.md` and `skills/constraint-driven-development/references/floor-guard.md` are complete. Fully populated draft inventory entries and detailed technical findings are available in `report.md`. The files are ready for synthesis into `docs/analysis/inventory/addy/`.

---

## 5. Verification Method

To independently verify all claims:
1. Check skill anatomy and artifact paths:
   ```bash
   bun /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-skills.js
   bun /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-artifact-paths.js
   ```
2. Verify `floor-guard.mjs` execution and exit codes:
   ```bash
   node /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_2_gen3/floor-guard.mjs --base HEAD
   # Output: floor-guard: clean (exit 0)
   node /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_2_gen3/floor-guard.mjs --base non-existent-ref
   # Output: floor-guard: no merge base against ... (exit 2)
   ```
3. Verify the deleted test file bypass bug:
   In any git repository, commit a test file `foo.test.js`, run `git rm foo.test.js`, and run `floor-guard.mjs --base HEAD~1`. It will report clean (exit 0) because `+++ /dev/null` slices to `v/null`.
