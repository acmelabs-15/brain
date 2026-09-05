---
package: addy
path: scripts/run-evals-test.js
type: script
bytes: 10378
unit: inv-addy-36
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/run-evals-test.js

## Purpose — required, verbatim
> "const { materializeWorkspace, parseGrading } = require('./run-evals');" — scripts/run-evals-test.js:11
(no explicit purpose statement)

## Design intent — required
Comprehensive test suite validating the evaluation runner (`scripts/run-evals.js`). Uses temporary sandboxes (`makeSandbox`) to test parser logic for LLM grader outputs (`parseGrading`), enforcement of minimum eval case requirements, behavioral fixture resolution, support for dialogue vs execution evals, rejection of provisional flags on execution evals, rank-1 accuracy thresholding (`--min-rank1`), and Git-based temporary workspace materialization with working-tree patches (`materializeWorkspace`). Protects the evaluation framework that assesses skill trigger accuracy and behavioral fidelity.

## Phase — required
none

## Inputs — required
- Eval runner under test: loads `materializeWorkspace` and `parseGrading` via `require('./run-evals')` — scripts/run-evals-test.js:11.
- Runner script path: references `run-evals.js` via `path.join(__dirname, 'run-evals.js')` — scripts/run-evals-test.js:13.
- Isolated filesystem sandboxes: constructs temporary workspaces via `makeSandbox` — scripts/run-evals-test.js:53 with mock skill and eval case files created via `writeSkill` — scripts/run-evals-test.js:20, `writeJson` — scripts/run-evals-test.js:15, and `completeCase` — scripts/run-evals-test.js:39.

## Outputs — required
- Test assertion outcomes and process exit code via `node:test` runner: 0 if all tests pass, non-zero on test assertion failure.
- Ephemeral test fixture directories created in `os.tmpdir()` and cleaned up post-test.

## Invokes — required
- script run-evals.js — scripts/run-evals-test.js:13

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:32

## Concepts named — required, verbatim
- `materializeWorkspace` — scripts/run-evals-test.js:11 — used here
- `parseGrading` — scripts/run-evals-test.js:11 — used here
- `writeJson` — scripts/run-evals-test.js:15 — defined here
- `writeSkill` — scripts/run-evals-test.js:20 — defined here
- `behavioralEval` — scripts/run-evals-test.js:29 — defined here
- `completeCase` — scripts/run-evals-test.js:39 — defined here
- `makeSandbox` — scripts/run-evals-test.js:53 — defined here
- `dialogue` — scripts/run-evals-test.js:183 — used here
- `provisional` — scripts/run-evals-test.js:195 — used here

## Structure
- Imports and Test Utilities — scripts/run-evals-test.js:1-68
- Grader Result Parsing Tests — scripts/run-evals-test.js:70-121
- Case File and Schema Validation Tests — scripts/run-evals-test.js:123-227
- Behavioral Dry-Run and CLI Flag Tests — scripts/run-evals-test.js:229-274
- Workspace Materialization Integration Test — scripts/run-evals-test.js:276-289

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/run-evals-test.js`, language: JavaScript (Node.js test runner), lines: 290
- documented invocation: `node --test scripts/run-evals-test.js` — .github/workflows/test-plugin-install.yml:32
- **executed:** yes
- actual command run: `bun test ./sources/addy/scripts/run-evals-test.js`, abridged stdout: `sources/addy/scripts/run-evals-test.js:\n(pass) accepts a complete and consistent grader result [1.05ms]\n(pass) rejects grader results that omit expectations [0.04ms]\n(pass) rejects incomplete or inconsistent grader summaries [0.05ms]\n(pass) fails when a skill has no eval case file [23.49ms]\n(pass) fails when an eval case is below the required minimums [18.61ms]\n(pass) fails when a behavioral eval references a missing fixture [19.51ms]\n(pass) requires fixtures for execution evals [18.05ms]\n(pass) allows dialogue evals without fixtures [21.34ms]\n(pass) rejects provisional execution evals [18.47ms]\n(pass) allows dialogue evals with a legacy provisional marker [16.92ms]\n(pass) rejects unknown behavioral eval kinds [17.01ms]\n(pass) dry-runs a fixtureless dialogue eval [16.82ms]\n(pass) enforces the configured rank-1 floor [36.34ms]\n(pass) rejects an invalid rank-1 floor [15.77ms]\n(pass) materializes a git baseline and applies a working-tree patch [208.13ms]\n\n 15 pass\n 0 fail\nRan 15 tests across 1 file.`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths in code: Node/Bun test runner exits 0 when all tests pass, non-zero if assertions fail (`node:assert/strict`).
- for validators/gates: test suite validating the evaluation runner and grading parser. Can exit non-zero on assertion failure. On the default branch, all 15 test cases pass cleanly (exit code 0).
- does the output match what the documentation claims? Yes, all 15 unit and integration tests pass as expected.

## Defects — required
none

## Observations
- Hermetic test environments: `makeSandbox` (`scripts/run-evals-test.js:53`) creates isolated temporary directories with cloned runner scripts and minimal fixture trees, preventing tests from modifying repository files.
- Strict grading schema enforcement: tests for `parseGrading` (lines 70-121) verify that incomplete expectations arrays or inconsistent pass/fail summary counters cause validation rejections, preventing false positives from corrupt or truncated model evaluations.
- Real git repo integration test: `materializeWorkspace` test (lines 276-289) executes real `git` CLI operations to verify baseline repository creation and working-tree patch application.

## Context cost
10378 bytes (~2500 tokens). Loads `scripts/run-evals.js` (21639 bytes), totaling ~32017 bytes (~7700 tokens).
