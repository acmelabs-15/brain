# Empirical Challenge Report: inv-addy-16 (Scripts, Execution & Edge-Case Verification)

- **Agent**: Challenger 1 (`challenger_inv_addy_16_1`)
- **Work Unit**: `inv-addy-16`
- **Target Files**:
  - `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes)
  - `sources/addy/skills/code-review-and-quality/SKILL.md` (20,555 bytes)
  - Supporting script: `sources/addy/skills/constraint-driven-development/references/floor-guard.md` (inlined `floor-guard.mjs`, lines 18-92, 75 lines)
- **Review Verdict**: **APPROVE**

---

## 1. Challenge Summary

**Overall Risk Assessment**: LOW (The Worker's claims, execution logs, and defect analyses are accurate and 100% empirically reproducible).

All script executions and claims made by Worker `worker_inv_addy_16_1` were independently executed and verified in an adversarial test harness. The 4 bugs reported against `floor-guard.mjs` were empirically reproduced using an isolated git fixture. In addition, Challenger discovered a 5th bug/edge-case vulnerability in `floor-guard.mjs` relating to diff prefix handling (`diff.noprefix`). All 6 validator scripts and all 43 unit test assertions across `sources/addy/scripts/` passed cleanly under `bun`. Project synthesis tooling ran cleanly with 0 empty required inventory fields and 0 glossary lint errors.

---

## 2. Inlined `floor-guard.mjs` Verification

### 2.1 Extraction & Baseline Invocations

The script `floor-guard.mjs` (lines 18-92 of `sources/addy/skills/constraint-driven-development/references/floor-guard.md`) was extracted into `/tmp/floor-guard.mjs` and tested under both `node` (v20+) and `bun` (v1.4.0).

| Invocations Tested | Documented Exit Code | Actual Node Exit Code | Actual Bun Exit Code | Actual Output | Matches Claim? |
|---|---|---|---|---|---|
| `floor-guard.mjs --base HEAD` | 0 | 0 | 0 | `floor-guard: clean` | YES |
| `floor-guard.mjs --base non-existent-ref` | 2 | 2 | 2 | `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref` | YES |
| `floor-guard.mjs` (default: `origin/main`) | 0 | 0 | 0 | `floor-guard: clean` | YES |

### 2.2 Empirical Bug Reproduction

An isolated Git repository was created in `/tmp/fg-test-repo` to stress-test the 4 defects reported by the Worker:

1. **Bug 1: Untracked files with diffs are dropped (`floor-guard.md:28-42`)**
   - *Test Scenario*: Created an untracked file `/untracked.js` containing `// @ts-ignore\nconst x = 1;`.
   - *Contract Expectation*: Floor guard detects the suppression and exits with code 1 (`silenced-checker`).
   - *Observed Behavior*: Exited with code `0` (`floor-guard: clean`).
   - *Root Cause Analysis*: Line 41 executes `git diff --no-index --unified=0 /dev/null <untracked_file>`. When differences exist, `git diff` exits with code `1`. In Node's `execFileSync`, any non-zero exit code throws an error. The `git()` helper on lines 28-30 catches the throw and returns `null`, so `(git(...) ?? '')` becomes empty string. Untracked files are therefore completely uninspected!
   - *Status*: **REPRODUCED & VERIFIED**.

2. **Bug 2: Deleted test files are undetected (`floor-guard.md:48, 72`)**
   - *Test Scenario*: Executed `git rm test/sample.test.js` and ran `floor-guard.mjs --base HEAD`.
   - *Contract Expectation*: Contract line 10 specifies detecting "a deleted test file, an assertion removed from a test that stayed".
   - *Observed Behavior*: Exited with code `0` (`floor-guard: clean`).
   - *Root Cause Analysis*: Line 48 parses `if (line.startsWith('+++ ')) file = line.slice(6)`. For deleted files, git diff outputs `+++ /dev/null`. Slicing 6 characters from `+++ /dev/null` produces `'v/null'`. In line 72, the regex `/\.(test|spec)\.|_test\.|test_/.test(file)` tests `'v/null'`, which fails. Furthermore, there is no code checking for file deletions, only removed lines.
   - *Status*: **REPRODUCED & VERIFIED**.

3. **Bug 3: Completely deleted constraint bullets in `CONSTRAINTS.md` without replacement are ignored (`floor-guard.md:81-85`)**
   - *Test Scenario*: Edited `CONSTRAINTS.md` to completely delete `- Coverage floor: 80%` without adding any replacement line.
   - *Contract Expectation*: Line 77 comment specifies: "a number in CONSTRAINTS.md that went down, or a floor bullet deleted".
   - *Observed Behavior*: Exited with code `0` (`floor-guard: clean`).
   - *Root Cause Analysis*: Lines 81-86 match removed constraint lines against added constraint lines using `addedConstraints.find(...)`. If a bullet was deleted without replacement, `find()` returns `undefined`. The condition `if (a && ...)` evaluates to false, silently ignoring the deleted bullet.
   - *Status*: **REPRODUCED & VERIFIED**.

4. **Bug 4: `.constraintsignore` has zero implementation (`floor-guard.md:98`)**
   - *Test Scenario*: Created `.constraintsignore` containing `src/ignored.js`, and added `src/ignored.js` with `// @ts-ignore`.
   - *Contract Expectation*: Section "Adapting it" claims `.constraintsignore` allows exempting paths.
   - *Observed Behavior*: Exited with code `1`: `[silenced-checker] src/ignored.js: // @ts-ignore`.
   - *Root Cause Analysis*: Grepping the script source confirms zero occurrences of `constraintsignore` or ignore file handling.
   - *Status*: **REPRODUCED & VERIFIED**.

### 2.3 New Adversarial Findings & Edge Cases Discovered

In addition to the 4 bugs reported by the Worker, Challenger subjected `floor-guard.mjs` to further edge-case stress tests:

5. **Defect 5: Naive diff header slicing breaks under `diff.noprefix = true` or alternate diff configurations**
   - *Test Scenario*: Set `git config diff.noprefix true` and modified `src/app.js` with a suppression.
   - *Observed Behavior*: Output was `[silenced-checker] c/app.js: // @ts-ignore`.
   - *Vulnerability*: Line 48 (`file = line.slice(6)`) hardcodes skipping 6 characters (`+++ b/`), assuming standard 2-character git prefixes (`a/`, `b/`). When `diff.noprefix` is enabled, the header is `+++ src/app.js`. Slicing 6 characters (`+++ ` + 2 chars of path) strips the first two characters of the directory path (`src/app.js` becomes `c/app.js`).
6. **Threshold comparison edge cases**:
   - Weakening a threshold (80% -> 70%): correctly exited code 1 (`threshold-lowered`).
   - Tightening a threshold (80% -> 90%): correctly exited code 0 (`clean`).
   - Removing an assertion from an existing test file: correctly exited code 1 (`assertion-removed`).

---

## 3. Validator Scripts Execution

All validators in `sources/addy/scripts/` were executed using `bun`:

| Validator Command | Exit Code | Output Summary | Status |
|---|---|---|---|
| `cd sources/addy && bun scripts/validate-skills.js` | 0 | `25 skills checked — 0 error(s), 0 warning(s) — PASSED` | PASS |
| `cd sources/addy && bun scripts/validate-reference-links.js` | 0 | `25 skills checked — 0 error(s) — PASSED` | PASS |
| `cd sources/addy && bun scripts/validate-artifact-paths.js` | 0 | `7 files checked — 0 error(s) — PASSED` | PASS |
| `cd sources/addy && bun scripts/validate-commands.js` | 0 | `9 commands checked — 0 error(s) — PASSED` | PASS |
| `cd sources/addy && bun scripts/validate-versions.js` | 0 | `All plugin manifests use version 0.6.8.` | PASS |
| `cd sources/addy && bun scripts/run-evals.js` | 0 | `136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED` | PASS |

---

## 4. Test Suites Execution

All unit tests in `sources/addy/scripts/` were executed:

```bash
cd sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/lib/skill-lint-test.js
```

**Result**: 43 pass, 0 fail across 6 test files (676ms).
- `scripts/run-evals-test.js`: 15 pass
- `scripts/validate-reference-links-test.js`: 7 pass
- `scripts/validate-commands-test.js`: 6 pass
- `scripts/validate-versions-test.js`: 1 pass
- `scripts/validate-artifact-paths-test.js`: 6 pass
- `scripts/lib/skill-lint-test.js`: 8 pass

*Note on `validate-skills-test.js`*:
As correctly documented by the Worker, `scripts/validate-skills-test.js` does not exist as a standalone file at that path; tests for `validate-skills.js` logic are located in `scripts/lib/skill-lint-test.js`. Running `bun test ./scripts/validate-skills-test.js` in isolation returns exit code 1 (`Test filter had no matches`), whereas running against the actual 6 test files passes 100% of the 43 assertions.

---

## 5. Project Synthesis Tooling & Inventory Schema Verification

1. `bun run scripts/synthesis/coverage.ts`:
   - `Unchecked manifest rows: 1210` (expected pending rows in other packages/units in Phase 1).
   - `Empty required inventory fields: 0`.
2. `bun run scripts/synthesis/glossary-lint.ts`:
   - Output: `Glossary lint: clean`.
   - Exit code: 0.
3. Automated AST/Markdown Header Verification on inv-addy-16 deliverables:
   - `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`:
     - Frontmatter: Valid YAML, contains `package`, `path`, `type`, `bytes`, `unit`.
     - All 13 required sections (`Purpose`, `Design intent`, `Phase`, `Inputs`, `Outputs`, `Invokes`, `Invoked by`, `Concepts named`, `Structure`, `Scripts`, `Defects`, `Observations`, `Context cost`) are present and populated with non-empty substantive content.
   - `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`:
     - Frontmatter: Valid YAML, contains `package`, `path`, `type`, `bytes`, `unit`.
     - All 13 required sections are present and populated with non-empty substantive content.
4. Manifest & State Checks:
   - `docs/analysis/manifest/addy.md`: Lines 177 and 178 are checked `[x]`.
   - `docs/plan/STATE.md`: Line 80 records `inv-addy-16 | addy | 2 | 41435 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-16.md`.
   - Summary metric: `Rows inventoried (addy)` accurately reconciled to 171.

---

## 6. Verdict

**APPROVE**.
The deliverables for work unit `inv-addy-16` strictly adhere to METHOD.md (R1-R6), all execution claims are empirically verified, and the inventory entries and unit report are complete, accurate, and ready for Phase 1 synthesis.
