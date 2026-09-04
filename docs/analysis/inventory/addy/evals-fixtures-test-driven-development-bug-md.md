---
package: addy
path: evals/fixtures/test-driven-development/BUG.md
type: doc
bytes: 394
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/test-driven-development/BUG.md, sha256: d2ec9665dfe84bdd68c14b2226075351d650672c6a0b7cac7efe7dd8a130f112}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/BUG.md

## Purpose — required, verbatim
> "Splitting $100.00 three ways returns `[3333, 3333, 3333]`. That sums to" — evals/fixtures/test-driven-development/BUG.md:5 (no explicit purpose statement)

## Design intent — required
Provides the bug report ticket (FIN-482) fixture for `test-driven-development` evaluations (eval id: 1 and id: 2). It documents an off-by-one remainder loss when dividing 10000 cents three ways (`splitCents(10000, 3)` returning `[3333, 3333, 3333]` instead of `[3334, 3333, 3333]`), serving as the bug report input that the evaluated agent must capture in a failing test prior to implementing the fix.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by developers/agents working on the fixture project in `test-driven-development` evals (eval id: 1 and id: 2 in `evals/cases/test-driven-development.json`).

## Outputs — required
- none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Bug report` — evals/fixtures/test-driven-development/BUG.md:1 — used here
- `finance reconciliation` — evals/fixtures/test-driven-development/BUG.md:3 — used here
- `ticket FIN-482` — evals/fixtures/test-driven-development/BUG.md:3 — used here
- `three-way splits` — evals/fixtures/test-driven-development/BUG.md:1 — used here
- `splitCents` — evals/fixtures/test-driven-development/BUG.md:9 — used here

## Structure
- `# Bug report: cents lost on three-way splits` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The bug report specifies a case where `remainder = 1` (`10000 % 3 = 1`). The eval grader expectations explicitly check that the agent not only fixes this 1-cent case, but also writes tests verifying the fairness invariant for cases where `remainder >= 2` (such as `splitCents(100, 7)` from `README.md`) to prevent naive single-share remainder dumps.

## Context cost
394 bytes (~100 tokens) file size. Loaded as part of `evals/fixtures/test-driven-development/` (1,949 bytes total, ~490 tokens).
