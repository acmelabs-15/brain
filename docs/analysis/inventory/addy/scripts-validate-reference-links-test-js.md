---
package: addy
path: scripts/validate-reference-links-test.js
type: script
bytes: 5666
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-reference-links-test.js

## Purpose — required, verbatim
> "test('passes when a skill reaches the shared checklist two levels up', () => {" — scripts/validate-reference-links-test.js:43
(no explicit purpose statement)

## Design intent — required
Unit test suite verifying the behavior of `scripts/validate-reference-links.js`. Sets up isolated temporary file system sandboxes with mock skills and references directories to test positive and negative link resolution scenarios: traversing up two levels to repo root (`../../references/`), failing when linking as colocated (`references/`), markdown link syntax `[text](...)`, colocated references in skill directories (`references/`), missing reference targets, ignoring non-reference paths (such as `tasks/todo.md` and `PERF.md`), and reporting all errors across a skill. Without it, regressions in reference link validation could break CI without detection.

## Phase — required
none

## Inputs — required
Temporary directory sandboxes created via `fs.mkdtempSync` containing mock `references/` and `skills/<name>/` markdown files, executing `scripts/validate-reference-links.js` via Node child process.

## Outputs — required
Test assertions and execution results via `node:test` and `node:assert/strict`.

## Invokes — required
- script validate-reference-links.js — scripts/validate-reference-links-test.js:12

## Invoked by — required
- script test-plugin-install.yml — .github/workflows/test-plugin-install.yml:41

## Concepts named — required, verbatim
- `references/definition-of-done.md` — scripts/validate-reference-links-test.js:45 — used here
- `CLAUDE.md` — scripts/validate-reference-links-test.js:92 — used here
- `tasks/todo.md` — scripts/validate-reference-links-test.js:125 — used here
- `tasks/plan.md` — scripts/validate-reference-links-test.js:125 — used here
- `PERF.md` — scripts/validate-reference-links-test.js:126 — used here
- `skills/incremental-implementation/SKILL.md` — scripts/validate-reference-links-test.js:127 — used here
- `security-checklist.md` — scripts/validate-reference-links-test.js:141 — used here
- `performance-checklist.md` — scripts/validate-reference-links-test.js:142 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-reference-links-test.js`, JavaScript (Node.js test runner `node:test`), 154 lines
- documented invocation: none
- executed: yes
- actual command run: `bun test ./scripts/validate-reference-links-test.js`, stdout: `7 pass\n0 fail\nRan 7 tests across 1 file. [141.00ms]`, actual exit code: 0; when run with `node --test scripts/validate-reference-links-test.js`, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent repo package.json `"type": "module"`
- documented exit codes: none vs. actual exit paths: `node:test` exits 0 on passing assertions, exits 1 on assertion failure or throw
- for validators/gates: not a gate (test runner for validator script)
- does the output match what the documentation claims: yes, all 7 unit test cases pass cleanly under test runner

## Defects — required
- other — scripts/validate-reference-links-test.js:5: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed where a parent `package.json` specifies `"type": "module"`.

## Observations
- Uses `os.tmpdir()` sandboxing with `fs.mkdtempSync` and `afterEach` cleanup to execute `validate-reference-links.js` in a subprocess with various mock directory layouts.
- Explicitly tests the regression where skills incorrectly linked root references as colocated (`references/` vs `../../references/`).

## Context cost
5666 bytes, ~1200 tokens.
