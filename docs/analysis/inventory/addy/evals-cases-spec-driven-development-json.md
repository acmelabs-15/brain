---
package: addy
path: evals/cases/spec-driven-development.json
type: config
bytes: 2657
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/spec-driven-development.json

## Purpose — required, verbatim
> "skill_name": "spec-driven-development" — evals/cases/spec-driven-development.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger evaluation prompts and execution-based behavioral test cases for the `spec-driven-development` skill in Addy's eval harness. Specifies 5 positive triggers for drafting specs, PRDs, requirements definitions, capability mapping, and module decomposition, and 3 negative triggers routing to `observability-and-instrumentation`, `code-simplification`, and `planning-and-task-breakdown`. Contains two behavioral execution evaluations: producing a `SPEC.md` for usage-based billing, and capability mapping / modular decomposition for customer portal initiatives.

## Phase — required
none

## Inputs — required
User prompts requesting specification, PRD drafting, requirements definition, and capability decomposition at evals/cases/spec-driven-development.json:6, 10, 14, 18, 22, 44, 58.

## Outputs — required
Evaluation verdicts and ranking metrics produced by `scripts/run-evals.js` against expectations at evals/cases/spec-driven-development.json:49-54, 63-69. Evaluates generation of `SPEC.md` and capability maps.

## Invokes — required
- skill spec-driven-development — evals/cases/spec-driven-development.json:2
- skill observability-and-instrumentation — evals/cases/spec-driven-development.json:29
- skill code-simplification — evals/cases/spec-driven-development.json:33
- skill planning-and-task-breakdown — evals/cases/spec-driven-development.json:37

## Invoked by — required
orphan (dynamically discovered and loaded by eval runner `scripts/run-evals.js`)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/spec-driven-development.json:2 — used here
- `spec-driven-development` — evals/cases/spec-driven-development.json:2 — used here
- `trigger` — evals/cases/spec-driven-development.json:3 — defined here
- `positive` — evals/cases/spec-driven-development.json:4 — defined here
- `top_k` — evals/cases/spec-driven-development.json:7 — defined here
- `PRD` — evals/cases/spec-driven-development.json:10 — used here
- `negative` — evals/cases/spec-driven-development.json:26 — defined here
- `owner` — evals/cases/spec-driven-development.json:29 — defined here
- `evals` — evals/cases/spec-driven-development.json:41 — defined here
- `SPEC.md` — evals/cases/spec-driven-development.json:45 — used here
- `files` — evals/cases/spec-driven-development.json:46 — defined here
- `expectations` — evals/cases/spec-driven-development.json:49 — defined here
- `portal-brief.md` — evals/cases/spec-driven-development.json:58 — used here
- `capability map` — evals/cases/spec-driven-development.json:59 — used here

## Structure
JSON top-level keys:
- skill_name — evals/cases/spec-driven-development.json:2
- trigger (positive, negative) — evals/cases/spec-driven-development.json:3-40
- evals (id, prompt, expected_output, files, expectations) — evals/cases/spec-driven-development.json:41-71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes two distinct evaluation cases: single-feature spec drafting (id 1, using fixture `spec-driven-development`/`billing-brief.md`) and large initiative decomposition into a capability map before drafting per-module specs (id 2, using fixture `spec-driven-development-decomposition`/`portal-brief.md`). Strictly tests that no implementation code is written during specification and that ambiguities are surfaced as questions.

## Context cost
2657 bytes, ~660 tokens. Loads fixtures `billing-brief.md` (644 bytes) and `portal-brief.md` (789 bytes) across its two evals.
