---
package: addy
path: evals/cases/test-driven-development.json
type: config
bytes: 3981
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/test-driven-development.json

## Purpose — required, verbatim
> "skill_name": "test-driven-development" — evals/cases/test-driven-development.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger prompts and three rigorous execution-based behavioral test cases for the `test-driven-development` skill within Addy's eval harness. Evaluates red-green-refactor discipline, reproduction of lost-cent bugs before implementation, resistance to authority/time pressure pushing to skip tests or dump remainders on a single share, and polyglot ecosystem adaptation (identifying Python/unittest and running `python3 -m unittest` rather than npm test).

## Phase — required
none

## Inputs — required
Prompts requesting bug fixes, red-green-refactor implementations, and test-first additions at evals/cases/test-driven-development.json:6, 10, 14, 32, 46, 59.

## Outputs — required
Evaluation verdicts and ranking metrics produced by `scripts/run-evals.js` against expectations at evals/cases/test-driven-development.json:37-42, 51-55, 64-70. Tests reproduction test creation, preservation of fairness invariants, and full test suite execution.

## Invokes — required
- skill test-driven-development — evals/cases/test-driven-development.json:2
- skill documentation-and-adrs — evals/cases/test-driven-development.json:21
- skill using-agent-skills — evals/cases/test-driven-development.json:25

## Invoked by — required
orphan (dynamically discovered and loaded by eval runner `scripts/run-evals.js`)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/test-driven-development.json:2 — used here
- `test-driven-development` — evals/cases/test-driven-development.json:2 — used here
- `trigger` — evals/cases/test-driven-development.json:3 — defined here
- `positive` — evals/cases/test-driven-development.json:4 — defined here
- `top_k` — evals/cases/test-driven-development.json:7 — defined here
- `red-green-refactor` — evals/cases/test-driven-development.json:10 — used here
- `negative` — evals/cases/test-driven-development.json:18 — defined here
- `owner` — evals/cases/test-driven-development.json:21, 25 — defined here
- `evals` — evals/cases/test-driven-development.json:29 — defined here
- `BUG.md` — evals/cases/test-driven-development.json:32 — used here
- `fairness invariant` — evals/cases/test-driven-development.json:33, 39 — used here
- `files` — evals/cases/test-driven-development.json:34 — defined here
- `expectations` — evals/cases/test-driven-development.json:37 — defined here
- `src/split.js` — evals/cases/test-driven-development.json:38 — used here
- `splitCents` — evals/cases/test-driven-development.json:39 — used here
- `test-first` — evals/cases/test-driven-development.json:59 — used here
- `ValueError` — evals/cases/test-driven-development.json:59 — used here
- `unittest` — evals/cases/test-driven-development.json:60, 65 — used here
- `python3 -m unittest` — evals/cases/test-driven-development.json:66 — used here

## Structure
JSON top-level keys:
- skill_name — evals/cases/test-driven-development.json:2
- trigger (positive, negative) — evals/cases/test-driven-development.json:3-28
- evals (id, prompt, expected_output, files, expectations) — evals/cases/test-driven-development.json:29-72

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly resolves Phase 1V findings: includes negative trigger owner skills `documentation-and-adrs` (line 21) and `using-agent-skills` (line 25) under `## Invokes`, and includes named concepts `fairness invariant` (lines 33, 39) and `test-first` (line 59). Eval id 2 specifically challenges the agent with authority and urgency rationalization ("tech lead says... hotfix window closes in ten minutes"), evaluating whether TDD discipline holds under pressure. Eval id 3 verifies ecosystem toolchain identification (Python `unittest`).

## Context cost
3981 bytes, ~1000 tokens. Loads fixtures from `test-driven-development` and `test-driven-development-ecosystem`.
