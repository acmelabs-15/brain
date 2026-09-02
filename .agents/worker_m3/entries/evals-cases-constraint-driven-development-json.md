---
package: addy
path: evals/cases/constraint-driven-development.json
type: config
bytes: 3353
unit: inv-addy-1
---

# evals/cases/constraint-driven-development.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"constraint-driven-development\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Set up quality constraints for this project — I want to define our bar before the agent writes more code\",\n        \"top_k\": 3\n      }," — evals/cases/constraint-driven-development.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines evaluation triggers and multi-turn dialogue test scenarios for the `constraint-driven-development` skill. It tests positive trigger routing across 5 varied developer queries, verifies negative routing away from PR review (`code-review-and-quality`), deployment CI (`ci-cd-and-automation`), and bug reproduction (`test-driven-development`), and grades conversational behavior across 3 dialogue evals: (1) repo inspection before questioning, <= 4 questions with defaults, ratcheting today's numbers, tiered cost placement, and rationale recording; (2) pushing back against unrealistic coverage jumps (62% to 85%) and offering ratchets; (3) setting up concrete accessibility constraints with `axe-core`, URL verification, recording commands in `CONSTRAINTS.md`, and placement in preview-deploy stage.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Set up quality constraints for this project — I want to define our bar before the agent writes more code"` — evals/cases/constraint-driven-development.json:6
  - `"We have no written standards. Ask me what I care about and write it down with sane defaults"` — evals/cases/constraint-driven-development.json:10
  - `"The agent keeps adding @ts-ignore and skipping tests to get green. How do I stop that?"` — evals/cases/constraint-driven-development.json:14
  - `"What coverage threshold should we enforce, and where should it run so it doesn't slow us down?"` — evals/cases/constraint-driven-development.json:18
  - `"I care about accessibility and web performance — set those up as enforced constraints"` — evals/cases/constraint-driven-development.json:22
  - `"Review this pull request across correctness and security"` — evals/cases/constraint-driven-development.json:28
  - `"Add a deploy stage to our pipeline with a manual approval gate"` — evals/cases/constraint-driven-development.json:32
  - `"Write a failing test for this bug before we fix it"` — evals/cases/constraint-driven-development.json:36
- Dialogue eval prompts:
  - Eval 1: `"Set up constraints for this repo. I don't really know what numbers to pick."` — evals/cases/constraint-driven-development.json:45
  - Eval 2: `"Our coverage is 62% and I want to enforce 85% starting today."` — evals/cases/constraint-driven-development.json:58
  - Eval 3: `"Accessibility matters to us. Add it as a constraint."` — evals/cases/constraint-driven-development.json:69

## Outputs — required
- Behavioral dialogue evaluation grading results: `evals/results/constraint-driven-development.eval-1.grading.json`, `evals/results/constraint-driven-development.eval-2.grading.json`, `evals/results/constraint-driven-development.eval-3.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `constraint-driven-development` — evals/cases/constraint-driven-development.json:2
- skill `code-review-and-quality` — evals/cases/constraint-driven-development.json:29
- skill `ci-cd-and-automation` — evals/cases/constraint-driven-development.json:33
- skill `test-driven-development` — evals/cases/constraint-driven-development.json:37

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `constraint-driven-development` — evals/cases/constraint-driven-development.json:2 — used here
- `@ts-ignore` — evals/cases/constraint-driven-development.json:14 — used here
- `coverage threshold` — evals/cases/constraint-driven-development.json:18 — used here
- `accessibility` — evals/cases/constraint-driven-development.json:22 — used here
- `web performance` — evals/cases/constraint-driven-development.json:22 — used here
- `code-review-and-quality` — evals/cases/constraint-driven-development.json:29 — used here
- `ci-cd-and-automation` — evals/cases/constraint-driven-development.json:33 — used here
- `test-driven-development` — evals/cases/constraint-driven-development.json:37 — used here
- `dialogue` — evals/cases/constraint-driven-development.json:44, 57, 68 — used here
- `CONSTRAINTS.md` — evals/cases/constraint-driven-development.json:46 — used here
- `ratchet` — evals/cases/constraint-driven-development.json:50, 59 — used here
- `edit loop` — evals/cases/constraint-driven-development.json:51, 75 — used here
- `axe-core` — evals/cases/constraint-driven-development.json:72 — used here
- `preview-deploy stage` — evals/cases/constraint-driven-development.json:75 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 26
- `evals` — line 41
  - `id: 1` (dialogue) — line 43
  - `id: 2` (dialogue) — line 55
  - `id: 3` (dialogue) — line 66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
All 3 evals in this case file use `kind: "dialogue"` (lines 44, 57, 68). In `run-evals.js:498-505`, dialogue evals require no fixture files because the conversational dialogue transcript itself is the artifact evaluated by the grader. The test assertions rigorously enforce resistance to unachievable thresholds, proposing ratchets instead of broken builds, limiting question counts to <= 4 with defaults, and placing tool checks at appropriate pipeline stages (e.g. `axe-core` at preview-deploy rather than per-edit loop).

## Context cost
3,353 bytes (~840 tokens) file size. No external fixtures loaded.
