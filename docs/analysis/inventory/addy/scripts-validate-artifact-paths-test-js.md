---
package: addy
path: scripts/validate-artifact-paths-test.js
type: script
bytes: 4572
unit: inv-addy-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-artifact-paths-test.js, sha256: a4ba0537ce25c4e724a9d6894d0a417d6c19ef8da65cce7ce77a66578fabbcd7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-artifact-paths-test.js

## Purpose — required, verbatim
> "passes when producers and consumers use the canonical artifact paths" — scripts/validate-artifact-paths-test.js:43
(no explicit purpose statement)

## Design intent — required
Provides the automated test suite for `scripts/validate-artifact-paths.js`. Using Node's native `node:test` runner, it creates isolated temporary sandbox directories to verify that the artifact path validator passes canonical artifact paths (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`, `docs/SPEC.md`), detects unapproved drifted paths (specifically preventing regression of issue #93), correctly cites offending files and line numbers, avoids false positives on non-artifact markdown references, and gracefully ignores absent guarded files.

## Phase — required
none

## Inputs — required
- Validator script under test: reads and copies `scripts/validate-artifact-paths.js` via `VALIDATOR` — scripts/validate-artifact-paths-test.js:12.
- Hermetic test file systems: generates temporary directory structures via `makeSandbox` — scripts/validate-artifact-paths-test.js:15 containing synthetic markdown files (`.claude/commands/spec.md`, `.claude/commands/plan.md`, `.claude/commands/build.md`, `skills/spec-driven-development/SKILL.md`, `skills/planning-and-task-breakdown/SKILL.md`).

## Outputs — required
- Assertion results and process exit code via `node:test` runner: 0 if all tests pass, non-zero on test assertion failure.

## Invokes — required
- script validate-artifact-paths.js — scripts/validate-artifact-paths-test.js:12

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:64

## Concepts named — required, verbatim
- `passes when producers and consumers use the canonical artifact paths` — scripts/validate-artifact-paths-test.js:43 — defined here
- `fails when a producer drifts to an unapproved artifact path (the #93 regression)` — scripts/validate-artifact-paths-test.js:57 — defined here
- `reports the offending file and line number` — scripts/validate-artifact-paths-test.js:72 — defined here
- `accepts the docs/SPEC.md alternate spec location` — scripts/validate-artifact-paths-test.js:83 — defined here
- `ignores non-artifact markdown references (no false positives)` — scripts/validate-artifact-paths-test.js:93 — defined here
- `skips guarded files that do not exist` — scripts/validate-artifact-paths-test.js:107 — defined here
- `makeSandbox` — scripts/validate-artifact-paths-test.js:15 — defined here
- `writeFile` — scripts/validate-artifact-paths-test.js:24 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths-test.js`, language: JavaScript (Node.js test runner), lines: 117
- documented invocation: `node --test scripts/validate-artifact-paths-test.js` — .github/workflows/test-plugin-install.yml:64
- **executed:** yes
- actual command run: `bun test ./scripts/validate-artifact-paths-test.js` (in `sources/addy`), abridged stdout: `scripts/validate-artifact-paths-test.js:\n(pass) passes when producers and consumers use the canonical artifact paths\n(pass) fails when a producer drifts to an unapproved artifact path (the #93 regression)\n(pass) reports the offending file and line number\n(pass) accepts the docs/SPEC.md alternate spec location\n(pass) ignores non-artifact markdown references (no false positives)\n(pass) skips guarded files that do not exist\n\n 6 pass\n 0 fail\nRan 6 tests across 1 file.`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths in code: exits 0 when all assertions pass; exits non-zero on assertion failure via `node:assert/strict`.
- for validators/gates: test suite validating the artifact path consistency gate.
- does the output match what the documentation claims? Yes, all 6 test scenarios pass.

## Defects — required
none

## Observations
- Implements hermetic test isolation using temporary directories (`fs.mkdtempSync`) cleaned up in an `afterEach` hook.
- Specifically encodes regression testing for GitHub issue `#93` where producer commands drifted to per-feature subdirectories while consumer commands remained on root paths.

## Context cost
4,572 bytes (~1,143 tokens). Loads `validate-artifact-paths.js` (4,102 bytes), totaling 8,674 bytes (~2,168 tokens).
