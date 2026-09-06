---
package: addy
path: scripts/run-evals-test.js
type: script
bytes: 10378
unit: inv-addy-36
aliases: []
memo_inputs:
  - {path: scripts/run-evals-test.js, sha256: a5615342742376308da5890c366714d33dba36a09b66bd2a842dc5f773af0de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/run-evals-test.js

## Purpose — required, verbatim
> "accepts a complete and consistent grader result" — scripts/run-evals-test.js:70
(no explicit purpose statement)

## Design intent — required
Comprehensive automated test suite for the skill evaluation runner (`scripts/run-evals.js`). Uses Node's built-in `node:test` framework and temporary directory sandboxes to test grader JSON parsing and consistency validation, enforcement of required eval case schema and minimum thresholds, fixture resolution for execution evals, support for dialogue evals without fixtures and dry-run execution, enforcement of the `--min-rank1` pass-rate floor, rejection of provisional execution evals, and hermetic git workspace materialization with working-tree patch application.

## Phase — required
none

## Inputs — required
- `scripts/run-evals.js` (imports `materializeWorkspace` and `parseGrading` at line 11, and executes runner via `spawnSync` at line 64)
- `evals/fixtures/git-workflow-and-versioning` fixture directory (materialized in git workspace test at line 277)

## Outputs — required
Test report and exit status via `node:test` runner.

## Invokes — required
- script run-evals.js — scripts/run-evals-test.js:13

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:32

## Concepts named — required, verbatim
- `materializeWorkspace` — scripts/run-evals-test.js:11 — used here
- `parseGrading` — scripts/run-evals-test.js:11 — used here
- `RUNNER` — scripts/run-evals-test.js:13 — defined here
- `writeJson` — scripts/run-evals-test.js:15 — defined here
- `writeSkill` — scripts/run-evals-test.js:20 — defined here
- `behavioralEval` — scripts/run-evals-test.js:29 — defined here
- `completeCase` — scripts/run-evals-test.js:39 — defined here
- `makeSandbox` — scripts/run-evals-test.js:53 — defined here
- `accepts a complete and consistent grader result` — scripts/run-evals-test.js:70 — defined here
- `rejects grader results that omit expectations` — scripts/run-evals-test.js:82 — defined here
- `rejects incomplete or inconsistent grader summaries` — scripts/run-evals-test.js:93 — defined here
- `fails when a skill has no eval case file` — scripts/run-evals-test.js:123 — defined here
- `fails when an eval case is below the required minimums` — scripts/run-evals-test.js:133 — defined here
- `fails when a behavioral eval references a missing fixture` — scripts/run-evals-test.js:151 — defined here
- `requires fixtures for execution evals` — scripts/run-evals-test.js:165 — defined here
- `allows dialogue evals without fixtures` — scripts/run-evals-test.js:179 — defined here
- `rejects provisional execution evals` — scripts/run-evals-test.js:191 — defined here
- `allows dialogue evals with a legacy provisional marker` — scripts/run-evals-test.js:204 — defined here
- `rejects unknown behavioral eval kinds` — scripts/run-evals-test.js:216 — defined here
- `dry-runs a fixtureless dialogue eval` — scripts/run-evals-test.js:229 — defined here
- `enforces the configured rank-1 floor` — scripts/run-evals-test.js:242 — defined here
- `rejects an invalid rank-1 floor` — scripts/run-evals-test.js:267 — defined here
- `materializes a git baseline and applies a working-tree patch` — scripts/run-evals-test.js:276 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/run-evals-test.js`, JavaScript (Node.js test runner), 290 lines
- documented invocation: `node --test scripts/run-evals-test.js` — .github/workflows/test-plugin-install.yml:32
- **executed:** yes
- actual command run: `bun test ./scripts/run-evals-test.js` (executed from `sources/addy`), abridged stdout: `scripts/run-evals-test.js:\n(pass) accepts a complete and consistent grader result [1.52ms]\n(pass) rejects grader results that omit expectations [0.06ms]\n(pass) rejects incomplete or inconsistent grader summaries [0.06ms]\n(pass) fails when a skill has no eval case file [30.95ms]\n(pass) fails when an eval case is below the required minimums [28.09ms]\n(pass) fails when a behavioral eval references a missing fixture [92.89ms]\n(pass) requires fixtures for execution evals [142.31ms]\n(pass) allows dialogue evals without fixtures [24.58ms]\n(pass) rejects provisional execution evals [28.87ms]\n(pass) allows dialogue evals with a legacy provisional marker [78.12ms]\n(pass) rejects unknown behavioral eval kinds [146.59ms]\n(pass) dry-runs a fixtureless dialogue eval [32.77ms]\n(pass) enforces the configured rank-1 floor [169.64ms]\n(pass) rejects an invalid rank-1 floor [16.62ms]\n(pass) materializes a git baseline and applies a working-tree patch [183.35ms]\n\n 15 pass\n 0 fail\nRan 15 tests across 1 file. [994.00ms]`, **actual exit code:** 0; when executed directly with `node scripts/run-evals-test.js` under brain-v2, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent package.json `"type": "module"`.
- documented exit codes: none documented vs. actual exit paths in code: exits 0 when all 15 tests pass; exits non-zero on assertion failure via `node:assert/strict` or test runner error.
- for validators/gates: test suite verifying the eval runner gates and error handling.
- does the output match what the documentation claims? Yes, all 15 tests pass cleanly.

## Defects — required
- other — scripts/run-evals-test.js:5: CommonJS `require()` in `.js` file fails in Node.js when root `package.json` specifies `"type": "module"`.

## Observations
- Uses temporary directories (`fs.mkdtempSync`) to isolate subprocess execution of `run-evals.js` from the repository filesystem.
- Tests git workspace materialization (`git status --short`, `git rev-list --count HEAD`) to verify git repository scaffolding and patch application.

## Context cost
10,378 bytes plus scripts/run-evals.js (24,129 bytes) = 34,507 bytes (~8,627 tokens).
