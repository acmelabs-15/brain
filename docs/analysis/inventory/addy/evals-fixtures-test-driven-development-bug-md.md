---
package: addy
path: evals/fixtures/test-driven-development/BUG.md
type: doc
bytes: 394
unit: inv-addy-2
---

# evals/fixtures/test-driven-development/BUG.md

## Purpose — required, verbatim
> "Splitting $100.00 three ways returns `[3333, 3333, 3333]`. That sums to\n$99.99, one cent short. Reconciliation flags every three-way invoice we\nprocessed this month." — evals/fixtures/test-driven-development/BUG.md:5-7

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
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:34-36, 48-50
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

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
