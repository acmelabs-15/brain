---
package: addy
path: evals/cases/context-engineering.json
type: config
bytes: 1390
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/context-engineering.json, sha256: 38dd00d2f108fe1cb703d5a01dbb2310d6f3719cf32950bc2f9adbeabfb9c617}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/context-engineering.json

## Purpose — required, verbatim
> "skill_name": "context-engineering" — evals/cases/context-engineering.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger routing and execution evals for the `context-engineering` skill in the Addy eval harness. Specifies 3 positive prompts covering context loading before refactors, addressing mid-session degradation, and setting up repository rules packing (top_k=3), 2 negative prompts routing to TDD and security hardening, and 1 execution eval testing context diagnosis and loading remediation when an agent degrades.

## Phase — required
none

## Inputs — required
User prompts requesting context management or rules optimization, and fixture directory `evals/fixtures/context-engineering`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill context-engineering — evals/cases/context-engineering.json:2
- skill test-driven-development — evals/cases/context-engineering.json:21
- skill security-and-hardening — evals/cases/context-engineering.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/context-engineering.json:2 — used here
- `context-engineering` — evals/cases/context-engineering.json:2 — used here
- `trigger` — evals/cases/context-engineering.json:3 — defined here
- `positive` — evals/cases/context-engineering.json:4 — defined here
- `top_k` — evals/cases/context-engineering.json:7 — defined here
- `negative` — evals/cases/context-engineering.json:18 — defined here
- `owner` — evals/cases/context-engineering.json:21 — defined here
- `evals` — evals/cases/context-engineering.json:29 — defined here
- `expected_output` — evals/cases/context-engineering.json:33 — defined here
- `expectations` — evals/cases/context-engineering.json:37 — defined here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Tests an agent's ability to identify systemic context exhaustion (such as unmanaged rules files or forgotten conventions) rather than defaulting to generic model blame, enforcing task-scoped context planning.

## Context cost
1,390 bytes (~350 tokens). Loads nothing directly.
