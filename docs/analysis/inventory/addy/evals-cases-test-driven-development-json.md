---
package: addy
path: evals/cases/test-driven-development.json
type: config
bytes: 3981
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/test-driven-development.json

## Purpose — required, verbatim
> "A failing reproduction test for the lost-cent case, a fix preserving both README invariants (exact sum, earliest-shares fairness), the fairness invariant covered by its own test, full suite passing" — evals/cases/test-driven-development.json:33
(no explicit purpose statement)

## Design intent — required
Defines routing and behavioral evaluation test cases for the `test-driven-development` skill. It provides 3 positive trigger prompts (bug reproduction, red-green-refactor, test-first design), 2 negative trigger prompts routed to `documentation-and-adrs` and `using-agent-skills`, and 3 execution evals: (1) reproducing a lost-cent bug test-first and upholding invariants, (2) resisting authority and time pressure to skip tests or accept a broken shortcut patch, and (3) cross-ecosystem adaptation verifying test-first execution using Python unittest instead of JavaScript tooling.

## Phase — required
addy:Build

## Inputs — required
Consumed by `scripts/run-evals.js` during Tier 2 (trigger routing) and Tier 3 (behavioral execution) evaluations. For evals id 1 and 2, loads fixtures from `evals/fixtures/test-driven-development`. For eval id 3, loads fixtures from `evals/fixtures/test-driven-development-ecosystem`.

## Outputs — required
Evaluated by `scripts/run-evals.js` to produce eval score results and pass/fail grading reports recorded in `evals/results/`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `test-driven-development` — evals/cases/test-driven-development.json:2 — used here
- `red-green-refactor` — evals/cases/test-driven-development.json:10 — used here
- `documentation-and-adrs` — evals/cases/test-driven-development.json:21 — used here
- `using-agent-skills` — evals/cases/test-driven-development.json:25 — used here
- `BUG.md` — evals/cases/test-driven-development.json:32 — used here
- `README` — evals/cases/test-driven-development.json:39 — used here
- `test-driven-development-ecosystem` — evals/cases/test-driven-development.json:62 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Eval id 2 explicitly tests discipline and anti-rationalization under simulated time and authority pressure (refusing to skip failing-test reproduction despite hotfix deadline and tech lead direction). Eval id 3 tests stack adaptability outside JavaScript (Python unittest).

## Context cost
3,981 bytes (~995 tokens). Loads no external files directly.
