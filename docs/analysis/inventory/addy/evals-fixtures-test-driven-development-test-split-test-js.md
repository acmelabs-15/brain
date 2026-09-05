---
package: addy
path: evals/fixtures/test-driven-development/test/split.test.js
type: file
bytes: 398
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/test/split.test.js, sha256: a05400be4fb0262cf0197a13588707a01db7c771db38a08508ebba9badfad7d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development/test/split.test.js

## Purpose — required, verbatim
> "test('splits an evenly divisible total into equal shares', () => {" — evals/fixtures/test-driven-development/test/split.test.js:7
(no explicit purpose statement)

## Design intent — required
The baseline test suite for the `split-payment` fixture in the `test-driven-development` eval. It uses the Node.js built-in test runner (`node:test`) and strict assertions (`node:assert/strict`) to verify happy-path behavior (an evenly divisible total split into four equal shares, and a single participant receiving the whole amount). Intentionally incomplete, it omits tests for non-divisible totals and remainder distribution, illustrating a test suite with coverage gaps that fails to detect the lost-cent bug until a developer/agent writes a reproducing test under TDD. Without this file, the fixture would lack the starting test harness that passes before bug reproduction.

## Phase — required
addy:Build

## Inputs — required
Imports `splitCents` from `../src/split` and exercises it with test inputs `(10000, 4)` and `(500, 1)`.

## Outputs — required
Test assertions via `assert.deepEqual`; exits 0 when all tests pass (or non-zero on assertion failure when run with `node --test`).

## Invokes — required
- file splitCents — evals/fixtures/test-driven-development/src/split.js:3

## Invoked by — required
- config test — evals/fixtures/test-driven-development/package.json:7

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/test-driven-development/test/split.test.js:3 — used here
- `node:test` — evals/fixtures/test-driven-development/test/split.test.js:4 — used here
- `splitCents` — evals/fixtures/test-driven-development/test/split.test.js:5 — used here
- `assert.deepEqual` — evals/fixtures/test-driven-development/test/split.test.js:8 — used here

## Structure
none (code file; no section headings)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/test/split.test.js`, language: JavaScript (Node.js test runner), lines: 14
- documented invocation: "npm test" — evals/fixtures/test-driven-development/README.md:27
- **executed:** yes
- actual command run: `node --test sources/addy/evals/fixtures/test-driven-development/test/split.test.js`, stdout: `✔ splits an evenly divisible total into equal shares (0.709708ms)\n✔ a single participant receives the whole total (0.083ms)\nℹ tests 2\nℹ suites 0\nℹ pass 2\nℹ fail 0\nℹ cancelled 0\nℹ skipped 0\nℹ todo 0`, **actual exit code**: 0
- documented exit codes: none (test file using node:test runner; exits 0 on pass, non-zero on assertion failure)
- for validators/gates: none (test suite, not a gate; fails non-zero on assertion error)
- does the output match what the documentation claims: yes (runs test suite successfully with 2 passing tests)

## Defects — required
none

## Observations
The test suite passes completely despite the underlying `split.js` implementation being broken for non-divisible amounts. This provides an intentional baseline fixture for the TDD eval: the agent must write a failing test for the bug described in `BUG.md` (e.g. `splitCents(10000, 3)`) and demonstrate that it fails before fixing the implementation.

## Context cost
398 bytes. Approximately 90 tokens.
