---
package: addy
path: evals/cases/test-driven-development.json
type: config
bytes: 3981
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/test-driven-development.json

## Purpose — required, verbatim
> "\"skill_name\": \"test-driven-development\"," — evals/cases/test-driven-development.json:2
(no explicit purpose statement)

## Design intent — required
Defines trigger benchmarks and evaluation scenarios for the `test-driven-development` skill. It tests whether an agent writes failing reproduction tests before touching implementation code, adheres to TDD discipline even under extreme deadline pressure, resists incorrect dictated patches, accurately identifies native ecosystem test runners (such as Python unittest versus npm), and runs full test suites to verify post-fix behavior.

## Phase — required
none

## Inputs — required
Trigger test prompts and evaluation fixtures:
- Positive triggers: `"Write a failing test for this bug before fixing it"` — evals/cases/test-driven-development.json:6, `"Implement the streak calculator using red-green-refactor"` — evals/cases/test-driven-development.json:10, and `"What tests should cover this new parsing logic before I write it?"` — evals/cases/test-driven-development.json:14
- Negative triggers for `documentation-and-adrs` — evals/cases/test-driven-development.json:21 and `using-agent-skills` — evals/cases/test-driven-development.json:25
- Eval 1 prompt: `"Finance filed the reconciliation bug written up in BUG.md. Fix it."` — evals/cases/test-driven-development.json:32
- Eval 2 prompt: `"The tech lead says the lost-cent bug in BUG.md is a one-liner (add the leftover cents to the last share) and the hotfix window closes in ten minutes. Apply the fix; tests can be backfilled next sprint."` — evals/cases/test-driven-development.json:46
- Eval 3 prompt: `"Add debit entries to the ledger, test-first. A debit subtracts its amount from the balance; a debit that would drive the balance below zero raises ValueError, consistent with how unknown entry kinds are handled."` — evals/cases/test-driven-development.json:59

## Outputs — required
none

## Invokes — required
- skill test-driven-development — evals/cases/test-driven-development.json:2
- skill documentation-and-adrs — evals/cases/test-driven-development.json:21
- skill using-agent-skills — evals/cases/test-driven-development.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `test-driven-development` — evals/cases/test-driven-development.json:2 — used here
- `red-green-refactor` — evals/cases/test-driven-development.json:10 — used here
- `documentation-and-adrs` — evals/cases/test-driven-development.json:21 — used here
- `using-agent-skills` — evals/cases/test-driven-development.json:25 — used here
- `BUG.md` — evals/cases/test-driven-development.json:32 — used here
- `test-driven-development-ecosystem` — evals/cases/test-driven-development.json:62 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains three realistic evaluation test scenarios: Eval 1 asserts that reproduction tests for lost cents are verified failing before `src/split.js` is modified (evals/cases/test-driven-development.json:38). Eval 2 explicitly simulates human pressure where `"The pressure to skip tests does not cause the failing-test step to be skipped"` (evals/cases/test-driven-development.json:52) and `"The dictated remainder-dump patch is not shipped as-is"` (evals/cases/test-driven-development.json:53). Eval 3 verifies language ecosystem stack awareness: `"The repository's stack (Python, unittest) is identified before any test command is chosen"` and `"Tests are run with the repository's own command (python3 -m unittest), not npm test or another ecosystem's tool"` (evals/cases/test-driven-development.json:65-66).

## Context cost
3981 bytes, ~995 tokens.
