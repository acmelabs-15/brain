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
verified: 2026-09-04 quote-check+coverage
---

# scripts/run-evals-test.js

## Purpose — required, verbatim
> "test('accepts a complete and consistent grader result', () => {" — scripts/run-evals-test.js:70
(no explicit purpose statement)

## Design intent — required
Provides automated unit and integration tests for the skill evaluation harness (`scripts/run-evals.js`) using `node:test` and `node:assert/strict`. It ensures that the eval runner correctly validates LLM grader summaries and expectation shapes, catches missing or substandard eval case files, enforces fixture presence for execution evals while permitting fixtureless dialogue evals, handles provisional trust levels, validates rank-1 trigger floors, and properly initializes ephemeral git workspaces and applies working-tree patches.

## Phase — required
cross-phase

## Inputs — required
- Temporary sandboxes created in `os.tmpdir()` via `makeSandbox` — scripts/run-evals-test.js:53
- Runner script copied from `RUNNER` — scripts/run-evals-test.js:58
- Child process execution via `run` — scripts/run-evals-test.js:63

## Outputs — required
Test assertion results reported via `node:test` reporter

## Invokes — required
- script run-evals.js — scripts/run-evals-test.js:13

## Invoked by — required
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:32

## Concepts named — required, verbatim
- `materializeWorkspace` — scripts/run-evals-test.js:11 — used here
- `parseGrading` — scripts/run-evals-test.js:11 — used here
- `RUNNER` — scripts/run-evals-test.js:13 — defined here
- `writeJson` — scripts/run-evals-test.js:15 — defined here
- `writeSkill` — scripts/run-evals-test.js:20 — defined here
- `behavioralEval` — scripts/run-evals-test.js:29 — defined here
- `completeCase` — scripts/run-evals-test.js:39 — defined here
- `makeSandbox` — scripts/run-evals-test.js:53 — defined here
- `run` — scripts/run-evals-test.js:63 — defined here
- `alpha-skill` — scripts/run-evals-test.js:125 — used here
- `beta-skill` — scripts/run-evals-test.js:247 — used here
- `git-workflow-and-versioning` — scripts/run-evals-test.js:277 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/run-evals-test.js`, JavaScript (Node.js CommonJS), 290 lines
- documented invocation: "run: node --test scripts/run-evals-test.js" — .github/workflows/test-plugin-install.yml:32
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun test ./sources/addy/scripts/run-evals-test.js`, stdout `15 pass 0 fail`, exit code: 0. Direct execution via `node --test scripts/run-evals-test.js` fails with exit code 1 due to enclosing workspace package.json ESM configuration (`ReferenceError: require is not defined in ES module scope`).
- documented exit codes vs. actual exit paths in code: none documented; uses `node:test` test runner; exits 0 on all test assertions passing, non-zero on assertion failure; zero explicit `process.exit()` calls in source code.
- for validators/gates: test runner suite for eval engine. Exits non-zero if eval runner assertions fail. Currently passes all 15 tests.
- does the output match what the documentation claims? Yes, tests eval harness execution in CI as specified in `.github/workflows/test-plugin-install.yml`.

## Defects — required
- `script-bug` · `scripts/run-evals-test.js:5` · Uses CommonJS `require()` without a local `package.json` declaring `"type": "commonjs"`; in projects where an enclosing package.json declares `"type": "module"`, running `node --test scripts/run-evals-test.js` fails with `ReferenceError: require is not defined in ES module scope`.

## Observations
- Comprehensive 15-test suite for `scripts/run-evals.js` covering grader parsing, eval case validation, execution vs dialogue fixture requirements, provisional status handling, `--min-rank1` floor validation, and ephemeral git patch materialization.
- Spawns isolated test processes with `spawnSync(process.execPath, ...)` within temporary directories created in `os.tmpdir()`.

## Context cost
10378 bytes + 15820 bytes (`run-evals.js`) = 26198 bytes, ~6550 tokens.
