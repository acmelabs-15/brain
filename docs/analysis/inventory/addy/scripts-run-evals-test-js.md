---
package: addy
path: scripts/run-evals-test.js
type: script
bytes: 10378
unit: inv-addy-10
---

# scripts/run-evals-test.js

## Purpose — required, verbatim
> "const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');
const { materializeWorkspace, parseGrading } = require('./run-evals');" — scripts/run-evals-test.js:5-11 (no explicit purpose statement)

## Design intent — required
Comprehensive unit and integration test harness validating the behavioral correctness, schema parsing, error handling, and workspace sandboxing of `scripts/run-evals.js`. Ensures that changes to the evaluation runner do not regress schema enforcement, break fixture resolution, allow invalid or truncated LLM grading outputs to pass, corrupt throwaway git baselines, or compromise catalog routing quality gates.

## Phase — required
`cross-phase` (developer test suite verifying the evaluation infrastructure across all six lifecycle phases: `addy:Define`, `addy:Plan`, `addy:Build`, `addy:Verify`, `addy:Review`, `addy:Ship`)

## Inputs — required
- Target runner under test: `scripts/run-evals.js` (imports `{ materializeWorkspace, parseGrading }` at line 11 and copies script into sandboxes at line 58)
- Real fixture files: `evals/fixtures/git-workflow-and-versioning/` (tested during workspace materialization at line 277)
- Synthetic sandboxes created in `os.tmpdir()` with mock skills, case files, and fixtures via `makeSandbox()` — scripts/run-evals-test.js:53-61
- External binary in PATH: `git` — scripts/run-evals-test.js:279, 280

## Outputs — required
- TAP / test results output from `node:test` or `bun test` (15 passing test cases)
- Child process executions of `scripts/run-evals.js`
- Exit code: `0` on all tests passing, non-zero on assertion failure

## Invokes — required
- script `scripts/run-evals.js` — scripts/run-evals-test.js:11, 13, 58, 64
- binary `git` — scripts/run-evals-test.js:279, 280
- module `node:assert/strict` — scripts/run-evals-test.js:5
- module `node:fs` — scripts/run-evals-test.js:6
- module `node:os` — scripts/run-evals-test.js:7
- module `node:path` — scripts/run-evals-test.js:8
- module `node:child_process` — scripts/run-evals-test.js:9
- module `node:test` — scripts/run-evals-test.js:10
- fixture `evals/fixtures/git-workflow-and-versioning` — scripts/run-evals-test.js:277

## Invoked by — required
- config `.github/workflows/test-plugin-install.yml` — .github/workflows/test-plugin-install.yml:32

## Concepts named — required, verbatim
- `RUNNER` — scripts/run-evals-test.js:13 — defined here
- `writeJson` — scripts/run-evals-test.js:15-18 — defined here
- `writeSkill` — scripts/run-evals-test.js:20-27 — defined here
- `behavioralEval` — scripts/run-evals-test.js:29-37 — defined here
- `completeCase` — scripts/run-evals-test.js:39-51 — defined here
- `makeSandbox` — scripts/run-evals-test.js:53-61 — defined here
- `run` — scripts/run-evals-test.js:63-68 — defined here
- `node:test` — scripts/run-evals-test.js:10 — used here
- `materializeWorkspace` — scripts/run-evals-test.js:11, 277 — used here
- `parseGrading` — scripts/run-evals-test.js:11, 79, 90, 119 — used here
- `grader result` — scripts/run-evals-test.js:70 — used here
- `required minimums` — scripts/run-evals-test.js:133 — used here
- `provisional` — scripts/run-evals-test.js:191, 195, 204, 208 — used here
- `dialogue` — scripts/run-evals-test.js:179, 183, 204, 208, 229, 233 — used here
- `rank-1 floor` — scripts/run-evals-test.js:242, 267 — used here
- `git baseline` — scripts/run-evals-test.js:276 — used here
- `working-tree patch` — scripts/run-evals-test.js:276 — used here
- `working-tree.patch` — scripts/run-evals-test.js:276 — used here

## Structure
- Imports and runner path setup (lines 1-13)
- Sandbox helper functions: `writeJson`, `writeSkill`, `behavioralEval`, `completeCase`, `makeSandbox`, `run` (lines 15-68)
- Unit tests for `parseGrading` (lines 70-121)
  - Well-formed grader result test (lines 70-80)
  - Missing expectations test (lines 82-91)
  - Incomplete or inconsistent summaries parametric tests (lines 93-121)
- Subprocess tests for eval case validation and minimums (lines 123-149)
  - Missing eval case file test (lines 123-131)
  - Below minimums threshold test (lines 133-149)
- Subprocess tests for fixture and dialogue kind validation (lines 151-227)
  - Missing fixture path test (lines 151-163)
  - Fixture requirement for execution evals test (lines 165-177)
  - Dialogue evals without fixtures test (lines 179-189)
  - Provisional execution eval rejection test (lines 191-202)
  - Legacy provisional marker on dialogue eval test (lines 204-214)
  - Unknown eval kind rejection test (lines 216-227)
- Subprocess test for dry-run output (lines 229-240)
- Subprocess tests for rank-1 floor enforcement (lines 242-274)
  - Configured rank-1 floor pass/fail test (lines 242-265)
  - Out-of-bounds rank-1 floor test (lines 267-274)
- Integration test for `materializeWorkspace` git baseline and patch application (lines 276-289)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/run-evals-test.js`
- language: JavaScript (Node.js / Bun CommonJS)
- lines: 290
- documented invocation: `node --test scripts/run-evals-test.js` — .github/workflows/test-plugin-install.yml:32
- **executed:** yes
- actual command run: `bun test ./scripts/run-evals-test.js`
- actual stdout (abridged):
  ```
  scripts/run-evals-test.js:
  (pass) accepts a complete and consistent grader result [1.18ms]
  (pass) rejects grader results that omit expectations [0.05ms]
  (pass) rejects incomplete or inconsistent grader summaries [0.05ms]
  (pass) fails when a skill has no eval case file [16.59ms]
  (pass) fails when an eval case is below the required minimums [15.79ms]
  (pass) fails when a behavioral eval references a missing fixture [14.95ms]
  (pass) requires fixtures for execution evals [15.61ms]
  (pass) allows dialogue evals without fixtures [15.01ms]
  (pass) rejects provisional execution evals [16.45ms]
  (pass) allows dialogue evals with a legacy provisional marker [16.13ms]
  (pass) rejects unknown behavioral eval kinds [14.81ms]
  (pass) dry-runs a fixtureless dialogue eval [13.98ms]
  (pass) enforces the configured rank-1 floor [29.19ms]
  (pass) rejects an invalid rank-1 floor [14.21ms]
  (pass) materializes a git baseline and applies a working-tree patch [187.70ms]

   15 pass
   0 fail
  Ran 15 tests across 1 file. [390.00ms]
  ```
- **actual exit code: 0**
- documented exit codes vs actual exit paths: Test runner managed. Exits 0 on all tests passing, exits non-zero on assertion error or unhandled exception. No explicit `process.exit()` calls in test file.
- for validators/gates: test suite exercising error and success paths of `run-evals.js`; all 15 tests pass on default branch.
- does the output match what the documentation claims? Yes, all 15 tests pass matching CI expectations.

## Defects — required
- `doc-drift` — CLAUDE.md:43: Asserts `npm test — Not applicable (this is a documentation project)` despite the existence of this test suite actively executed in GitHub Actions CI (`.github/workflows/test-plugin-install.yml:32`).
- `other` — scripts/run-evals-test.js:5: CommonJS script without `.cjs` extension fails when run with Node inside an ESM workspace (`brain-v2/package.json` contains `"type": "module"`), crashing with `ReferenceError: require is not defined in ES module scope`. Runs cleanly with `bun test` or in a standalone checkout.

## Observations
- Verifies that `parseGrading` validates expectation counts, booleans, and summary pass rate calculations to prevent malformed LLM responses from causing false passes.
- Tests git baseline creation and `.eval/working-tree.patch` application directly against real fixture `evals/fixtures/git-workflow-and-versioning`.
- Exercises both in-process function invocation (`parseGrading`, `materializeWorkspace`) and sub-process CLI execution via `spawnSync`.

## Context cost
- File size: 10,378 bytes (290 lines, ~2,595 tokens).
- Dynamic load: Imports `./run-evals.js` (24,129 bytes). Total context footprint: ~34.5 KB (~8,625 tokens).
