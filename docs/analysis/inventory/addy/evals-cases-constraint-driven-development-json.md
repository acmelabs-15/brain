---
package: addy
path: evals/cases/constraint-driven-development.json
type: config
bytes: 3353
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/constraint-driven-development.json

## Purpose — required, verbatim
> "skill_name": "constraint-driven-development" — evals/cases/constraint-driven-development.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and conversational evaluation cases for the `constraint-driven-development` skill in the Addy eval harness. Specifies 5 positive trigger prompts for establishing quality standards, linting rules, coverage thresholds, accessibility, and web performance bars (top_k=3), 3 negative prompts routing to code review, CI/CD automation, and TDD, and 3 dialogue-kind evaluations testing interactive constraint definition, pushback against unmeetable thresholds via ratcheting, and operational accessibility checks using axe-core.

## Phase — required
none

## Inputs — required
User prompts requesting quality bars, threshold enforcement, or project constraints.

## Outputs — required
Dialogue transcripts and evaluation verdicts from `scripts/run-evals.js`. Generates simulated `CONSTRAINTS.md` specification.

## Invokes — required
- skill constraint-driven-development — evals/cases/constraint-driven-development.json:2
- skill code-review-and-quality — evals/cases/constraint-driven-development.json:29
- skill ci-cd-and-automation — evals/cases/constraint-driven-development.json:33
- skill test-driven-development — evals/cases/constraint-driven-development.json:37

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/constraint-driven-development.json:2 — used here
- `constraint-driven-development` — evals/cases/constraint-driven-development.json:2 — used here
- `trigger` — evals/cases/constraint-driven-development.json:3 — defined here
- `positive` — evals/cases/constraint-driven-development.json:4 — defined here
- `top_k` — evals/cases/constraint-driven-development.json:7 — defined here
- `negative` — evals/cases/constraint-driven-development.json:26 — defined here
- `owner` — evals/cases/constraint-driven-development.json:29 — defined here
- `evals` — evals/cases/constraint-driven-development.json:41 — defined here
- `dialogue` — evals/cases/constraint-driven-development.json:44 — defined here
- `expectations` — evals/cases/constraint-driven-development.json:47 — defined here
- `ratchet` — evals/cases/constraint-driven-development.json:59 — used here
- `axe-core` — evals/cases/constraint-driven-development.json:72 — used here
- `CONSTRAINTS.md` — evals/cases/constraint-driven-development.json:74 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, kind, prompt, expected_output, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplar of dialogue-shaped evals in the Addy harness. Omits fixture files array because the interactive dialogue transcript itself constitutes the artifact. Enforces realistic agent behavior: repo pre-inspection before asking questions, maximum 4 questions with actionable defaults, resisting unmeetable coverage thresholds by offering the ratchet alternative, and anchoring abstract rules in executable commands (axe-core) positioned at appropriate pipeline stages.

## Context cost
3,353 bytes (~840 tokens). Loads nothing directly.
