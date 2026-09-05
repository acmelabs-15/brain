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
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-artifact-paths-test.js

## Purpose — required, verbatim
> "test('passes when producers and consumers use the canonical artifact paths', () => {" — scripts/validate-artifact-paths-test.js:43 (no explicit purpose statement)

## Design intent — required
Automated test suite for `scripts/validate-artifact-paths.js`. Uses Node's built-in test runner (`node:test`) and isolated temporary directory sandboxes to verify that the artifact path validator correctly passes canonical spec/plan/todo paths across producers and consumers, detects and fails unapproved drifted paths (specifically guarding against the PR #93 regression), reports accurate file and line numbers, permits accepted alternate paths (`docs/SPEC.md`), avoids false positives on non-artifact markdown references, and safely ignores absent guarded files.

## Phase — required
none

## Inputs — required
Code and child-process execution of `scripts/validate-artifact-paths.js` via `spawnSync` (scripts/validate-artifact-paths-test.js:12,31). Mock directory structures and markdown file contents written to temporary sandboxes created in `os.tmpdir()` (scripts/validate-artifact-paths-test.js:16,24).

## Outputs — required
Test assertion outcomes and suite summaries printed to stdout/stderr. Exits 0 on all tests passing, non-zero on test assertion failure.

## Invokes — required
- script validate-artifact-paths.js — scripts/validate-artifact-paths-test.js:12

## Invoked by — required
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:64

## Concepts named — required, verbatim
- `validate-artifact-paths.js` — scripts/validate-artifact-paths-test.js:12 — used here
- `makeSandbox` — scripts/validate-artifact-paths-test.js:15 — defined here
- `canonical artifact paths` — scripts/validate-artifact-paths-test.js:43 — defined here
- `unapproved artifact path` — scripts/validate-artifact-paths-test.js:57 — defined here
- `SPEC.md` — scripts/validate-artifact-paths-test.js:45 — used here
- `tasks/plan.md` — scripts/validate-artifact-paths-test.js:46 — used here
- `tasks/todo.md` — scripts/validate-artifact-paths-test.js:46 — used here
- `docs/SPEC.md` — scripts/validate-artifact-paths-test.js:85 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-artifact-paths-test.js`, JavaScript (Node.js CommonJS test script), 117 lines
- documented invocation: "node --test scripts/validate-artifact-paths-test.js" — .github/workflows/test-plugin-install.yml:64
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun test ./scripts/validate-artifact-paths-test.js`, stdout `scripts/validate-artifact-paths-test.js:\n(pass) passes when producers and consumers use the canonical artifact paths\n(pass) fails when a producer drifts to an unapproved artifact path (the #93 regression)\n(pass) reports the offending file and line number\n(pass) accepts the docs/SPEC.md alternate spec location\n(pass) ignores non-artifact markdown references (no false positives)\n(pass) skips guarded files that do not exist\n\n 6 pass\n 0 fail`, actual exit code: 0. Direct execution via `node --test scripts/validate-artifact-paths-test.js` fails with exit code 1 due to parent monorepo `package.json` `"type": "module"`. Direct execution via `bun scripts/validate-artifact-paths-test.js` fails with exit code 1 requiring `bun test`.
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: none explicitly documented; standard test runner exit codes (0 on pass, 1 on failure).
  - Actual exit paths: Relies on `node:assert/strict` assertion throws and test runner process termination (zero explicit `process.exit()` calls).
- for validators/gates: can it exit non-zero? Yes, exits non-zero if any test assertion fails. Does it fail on the source repo's own default branch? No, all 6 tests pass.
- does the output match what the documentation claims? Yes, all 6 test scenarios execute and pass.

## Defects — required
- `script-bug` · `scripts/validate-artifact-paths-test.js:5` · Uses CommonJS `require()` without a local `package.json` specifying `"type": "commonjs"`, failing with `ReferenceError: require is not defined in ES module scope` when executed under Node.js in parent directories configured with `"type": "module"`.

## Observations
Directly tests regression scenarios preventing artifact path drift between `/spec`, `/plan`, and `/build`, explicitly citing PR #93 in test naming (line 57).

## Context cost
4572 bytes + 4102 bytes (`validate-artifact-paths.js`) = 8674 bytes, ~2100 tokens.
