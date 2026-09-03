# Empirical Challenge Report — inv-addy-15

**Unit**: `inv-addy-15`  
**Package**: `addy`  
**Challenger**: Challenger 1 (critic, specialist)  
**Date**: 2026-09-03  
**Verdict**: **APPROVE**

---

## Challenge Summary

**Overall risk assessment**: **LOW** (deliverables are rigorous, comprehensive, and empirically verified; source implementation bugs in `floor-guard.mjs` were correctly identified and documented as defects without corrupting the synthesis).

The worker for `inv-addy-15` produced four inventory entries and one unit report:
1. `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md`
2. `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`
3. `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`
4. `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-15.md`

All deliverable files adhere strictly to `METHOD.md` rules (R1–R6), match the schemas in `docs/plan/templates/`, and accurately cite source line numbers. The worker's identification of three unfailable-gate / silent-bypass defects in `floor-guard.mjs` was subjected to rigorous empirical testing across synthetic repositories and confirmed 100%.

---

## Challenges & Empirical Verification

### Challenge 1: Coverage and Manifest Integrity
- **Objective**: Execute `bun scripts/synthesis/coverage.ts` and confirm exit behavior and manifest counts.
- **Empirical Execution**:
  ```bash
  bun scripts/synthesis/coverage.ts
  ```
  **Output**:
  ```
  Unchecked manifest rows: 1226
  Empty required inventory fields: 0
  ```
  *Exit code*: `1` (expected: Phase 1 is in-progress across packages; Matt has 167 rows, RJM has 1018 rows, Addy has 41 pending rows in units 16–41).
- **Unit Scope Check**:
  In `docs/analysis/manifest/addy.md`, rows 173–176 correspond to `inv-addy-15`:
  - Line 173: `| skills/frontend-ui-engineering/SKILL.md | 10711 | skill | [x] |`
  - Line 174: `| skills/shipping-and-launch/SKILL.md | 10137 | skill | [x] |`
  - Line 175: `| skills/spec-driven-development/SKILL.md | 12163 | skill | [x] |`
  - Line 176: `| skills/constraint-driven-development/references/floor-guard.md | 5851 | reference | [x] |`
  Total bytes: `38,862` across 4 files, matching `STATE.md:79` exactly.
- **Finding**: PASS.

---

### Challenge 2: Glossary Conformance
- **Objective**: Execute `bun scripts/synthesis/glossary-lint.ts` and verify exit code 0.
- **Empirical Execution**:
  ```bash
  bun scripts/synthesis/glossary-lint.ts
  ```
  **Output**:
  ```
  Glossary lint: clean
  ```
  *Exit code*: `0`.
- **Finding**: PASS.

---

### Challenge 3: `floor-guard.mjs` Execution Contract & Edge Cases

The script `floor-guard.mjs` embedded in `skills/constraint-driven-development/references/floor-guard.md:18-93` was extracted and tested across multiple test harnesses.

#### Scenario 3.1: Clean Repository (`--base HEAD`)
- **Execution**: In `sources/addy`, executed `bun -e "<script>" -- --base HEAD`.
- **Result**: `floor-guard: clean`, exit code `0`.
- **Finding**: PASS.

#### Scenario 3.2: Invalid Base Reference (`--base non-existent-ref`)
- **Execution**: In `sources/addy`, executed `bun -e "<script>" -- --base non-existent-ref`.
- **Result**:
  ```
  fatal: Not a valid object name non-existent-ref
  floor-guard: no merge base against non-existent-ref
  ```
  *Exit code*: `2`.
- **Finding**: PASS (guard bails to exit code 2 as contracted).

#### Scenario 3.3: Untracked Files Bug (Empirical Defect Confirmation)
- **Claimed Defect**: `git diff --no-index` on an untracked file with differences exits with code 1, which causes `execFileSync` to throw. The `git()` wrapper catches the error and returns `null`. `git(...) ?? ''` evaluates to empty string, completely dropping untracked files from inspection.
- **Empirical Execution**:
  Constructed an isolated test repository with an initial commit. Created an untracked file `untracked.ts` containing severe floor violations:
  ```ts
  // @ts-ignore
  const x = 1;
  throw new Error("Not implemented");
  ```
  Ran `floor-guard.mjs --base main`.
- **Observed Behavior**:
  - `git diff --no-index --unified=0 /dev/null untracked.ts` threw status 1.
  - `floor-guard.mjs` evaluated `untracked` as `''`.
  - Output: `floor-guard: clean`, exit code `0`.
- **Finding**: CONFIRMED. The worker's identification of this defect (`floor-guard-md.md:97`) is empirically proven.

#### Scenario 3.4: Deleted Test File Bug (Empirical Defect Confirmation)
- **Claimed Defect**: Line 48 parses `+++ b/<path>` via `line.slice(6)`. For deleted files, git diff produces `+++ /dev/null`. Slicing at 6 produces `"ev/null"`, which fails test file regex matching `/\.(test|spec)\.|_test\.|test_/`. Furthermore, no logic checks for file deletion. Thus, deleting a test file bypasses the floor guard completely.
- **Empirical Execution**:
  In an isolated test repository, committed `app.test.ts` containing assertions (`expect(1).toBe(1);`, `assert(true);`). Deleted `app.test.ts` from the working tree. Ran `floor-guard.mjs --base main`.
- **Observed Behavior**:
  - Git diff generated:
    ```diff
    diff --git a/app.test.ts b/app.test.ts
    deleted file mode 100644
    --- a/app.test.ts
    +++ /dev/null
    @@ -1,6 +0,0 @@
    -describe("test", () => {
    ...
    ```
  - `line.slice(6)` on `+++ /dev/null` evaluated to `"ev/null"`.
  - `file` was set to `"ev/null"`.
  - Output: `floor-guard: clean`, exit code `0`.
- **Finding**: CONFIRMED. The worker's identification of this defect (`floor-guard-md.md:98`) is empirically proven.

#### Scenario 3.5: Deleted Constraint Bullet Bug
- **Claimed Defect**: Line 82 looks up removed lines using `addedConstraints.find(...)`. If a bullet or constraint row is deleted without an added replacement line, `a` is undefined and `flag` is never called.
- **Empirical Execution**:
  Committed `CONSTRAINTS.md` with 3 constraint lines. Deleted one constraint bullet. Ran `floor-guard.mjs --base main`.
- **Observed Behavior**:
  Output: `floor-guard: clean`, exit code `0`.
- **Finding**: CONFIRMED (`floor-guard-md.md:99`).

#### Scenario 3.6: Multi-Violation Detection on Tracked Files
- **Execution**: Injected all 6 violation types into modified tracked files (`CONSTRAINTS.md`, `app.js`, `app.test.js`).
- **Observed Output**:
  ```
  floor-guard: 6 floor violation(s):
    [new-exception] CONSTRAINTS.md: | W01 | temp exception |
    [silenced-checker] app.js: // @ts-ignore
    [unfinished-work] app.js: throw new Error("Not implemented");
    [test-made-easier] app.test.js: test.skip("works", () => {
    [assertion-removed] app.test.js: expect(1).toBe(1);
    [threshold-lowered] CONSTRAINTS.md: Coverage: 80%  ->  Coverage: 70%

  Each is a move that lowers the bar. Fix the code, or route it through a tracked exception.
  ```
  *Exit code*: `1`.
- **Finding**: PASS.

---

### Challenge 4: Citation and Line Number Verification

Spot-checked citations across all 4 inventory deliverables against the pinned clone at `sources/addy/`:

1. **`skills-frontend-ui-engineering-skill-md.md`**:
   - `skills/frontend-ui-engineering/SKILL.md:10` (Purpose quote): Verified verbatim match.
   - `skills/frontend-ui-engineering/SKILL.md:27-34` (Colocated component directory structure): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:38` (`Prefer composition over configuration`): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:106-111` (State management hierarchy): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:114` (Prop drilling limit 3 levels): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:257` (Breakpoints 320px, 768px, 1024px, 1440px): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:297` (Reference link to `accessibility-checklist.md`): Verified exact match.
   - `skills/frontend-ui-engineering/SKILL.md:311` (Component size limit 200 lines): Verified exact match.
   - Cross-references (`CLAUDE.md:23`, `AGENTS.md:32`, `README.md:254, 362`, `references/accessibility-checklist.md:3`): All verified exact.

2. **`skills-shipping-and-launch-skill-md.md`**:
   - `skills/shipping-and-launch/SKILL.md:10` (Purpose quote): Verified verbatim match.
   - `skills/shipping-and-launch/SKILL.md:20-76` (Pre-launch checklist categories): Verified exact match.
   - `skills/shipping-and-launch/SKILL.md:142-152` (Rollout decision thresholds table): Verified exact match.
   - `skills/shipping-and-launch/SKILL.md:242-265` (Rollback plan template and time targets): Verified exact match.
   - `skills/shipping-and-launch/SKILL.md:268-271` (Invocations of 4 reference checklists): Verified exact match.
   - Cross-references (`commands/ship.toml:1-72`, `CLAUDE.md:26`, `AGENTS.md:45`, `README.md:282, 376`, `references/definition-of-done.md:3`): All verified exact.

3. **`skills-spec-driven-development-skill-md.md`**:
   - `skills/spec-driven-development/SKILL.md:10` (Purpose quote): Verified verbatim match.
   - `skills/spec-driven-development/SKILL.md:27-32` (Gated workflow diagram): Verified exact match.
   - `skills/spec-driven-development/SKILL.md:34, 46-57` (Phase 0 Scope Check & Capability Map): Verified exact match.
   - `skills/spec-driven-development/SKILL.md:74, 84, 115-148` (Assumptions, 6 core areas, Spec template): Verified exact match.
   - `skills/spec-driven-development/SKILL.md:176` (Plan saved to `tasks/plan.md`, tasks to `tasks/todo.md`): Verified exact match.
   - `skills/spec-driven-development/SKILL.md:202` (Implement phase invoking incremental-implementation, TDD, context-engineering): Verified exact match.
   - `skills/spec-driven-development/SKILL.md:243` (Spec saved to file): Verified exact match.
   - Cross-references (`commands/spec.toml:1-17`, `scripts/validate-artifact-paths.js:35-40`, `CLAUDE.md:21`, `AGENTS.md:26, 40`, `README.md:236`): All verified exact.

4. **`skills-constraint-driven-development-references-floor-guard-md.md`**:
   - `references/floor-guard.md:3` (Purpose quote): Verified verbatim match.
   - `references/floor-guard.md:9-13` (Contract definition): Verified exact match.
   - `references/floor-guard.md:18-93` (Inlined `floor-guard.mjs` script): Verified exact match.
   - `references/floor-guard.md:35, 88, 92` (Exit paths for codes 2, 0, 1): Verified exact match.
   - `references/floor-guard.md:48, 72` (Diff parsing and assertion deletion check): Verified exact match.
   - `references/floor-guard.md:98` (`.constraintsignore` documentation): Verified exact match.

---

## Stress Test Results Summary

| Scenario / Test Case | Target | Expected Behavior | Actual Behavior | Result |
|---|---|---|---|---|
| Manifest Coverage | `coverage.ts` | 0 empty fields, 1226 unchecked across 3 pkgs | 0 empty fields, 1226 unchecked | **PASS** |
| Glossary Lint | `glossary-lint.ts` | Exit 0, clean | Exit 0, clean | **PASS** |
| Floor Guard Clean | `floor-guard.mjs --base HEAD` | Exit 0 (`floor-guard: clean`) | Exit 0 (`floor-guard: clean`) | **PASS** |
| Floor Guard Invalid Base | `floor-guard.mjs --base non-existent-ref` | Exit 2 with error on stderr | Exit 2 with error on stderr | **PASS** |
| Floor Guard Untracked Bug | Untracked file with violations | Exits 0 silently dropping file | Exits 0 (`floor-guard: clean`) | **CONFIRMED DEFECT** |
| Floor Guard Deleted Test Bug | Deleted test file with assertions | Exits 0 silently bypassing check | Exits 0 (`floor-guard: clean`) | **CONFIRMED DEFECT** |
| Floor Guard Deleted Bullet Bug | Deleted constraint bullet | Exits 0 silently ignoring deletion | Exits 0 (`floor-guard: clean`) | **CONFIRMED DEFECT** |
| Floor Guard Tracked Violations | 6 injected violation types | Exits 1 with 6 violation flags | Exits 1 with 6 violation flags | **PASS** |
| Addy Test Suite Suite | `bun test` in `sources/addy` | 35 passed across 5 test suites | 35 pass, 0 fail | **PASS** |
| Addy Validators | 4 validation scripts in `sources/addy` | All pass 0 errors | All pass 0 errors | **PASS** |
| Citation Spot-Checks | >25 citations across 4 deliverables | Exact line number and quote match | Exact line number and quote match | **PASS** |

---

## Unchallenged Areas

- **Source files outside unit scope**: Pinned clones of `matt` and `rjm` packages were not analyzed as they belong to separate work units.
- **External web doc snapshots**: Snapshot fetch integrity was verified during Phase 0; external URLs were not re-polled live to honor the offline pinned fence.

---

## Final Recommendation

The deliverables for `inv-addy-15` are of exemplary quality. The worker correctly extracted all metadata, surfaced critical script bugs that were independently reproduced and confirmed, adhered strictly to the schema and glossary rules, and recorded accurate citations.

Verdict: **APPROVE**.
