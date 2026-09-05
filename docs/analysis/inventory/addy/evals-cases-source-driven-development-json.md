---
package: addy
path: evals/cases/source-driven-development.json
type: config
bytes: 1287
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/source-driven-development.json

## Purpose — required, verbatim
> "\"skill_name\": \"source-driven-development\"," — evals/cases/source-driven-development.json:2
(no explicit purpose statement)

## Design intent — required
Defines benchmark triggers and evaluation scenarios for the `source-driven-development` skill. It validates positive trigger prompts requesting official documentation verification and negative trigger prompts routed to other skills, and evaluates whether agent outputs cite official documentation, flag unverified assumptions, and avoid deprecated patterns.

## Phase — required
none

## Inputs — required
Trigger test prompts and evaluation specification:
- Positive triggers: `"Verify against the official Next.js docs before implementing this"` — evals/cases/source-driven-development.json:6, `"I want source-cited code for the new Stripe integration"` — evals/cases/source-driven-development.json:10, and `"Ground every framework decision in the official documentation"` — evals/cases/source-driven-development.json:14
- Negative triggers for `ci-cd-and-automation` — evals/cases/source-driven-development.json:21 and `planning-and-task-breakdown` — evals/cases/source-driven-development.json:25
- Eval test prompt: `"Implement session handling with the framework's recommended approach, citing sources."` — evals/cases/source-driven-development.json:32

## Outputs — required
none

## Invokes — required
- skill source-driven-development — evals/cases/source-driven-development.json:2
- skill ci-cd-and-automation — evals/cases/source-driven-development.json:21
- skill planning-and-task-breakdown — evals/cases/source-driven-development.json:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `source-driven-development` — evals/cases/source-driven-development.json:2 — used here
- `ci-cd-and-automation` — evals/cases/source-driven-development.json:21 — used here
- `planning-and-task-breakdown` — evals/cases/source-driven-development.json:25 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The test case asserts three specific behaviors in its expectations array: `"Claims about framework behavior cite official documentation"` — evals/cases/source-driven-development.json:38, `"Unverified assumptions are flagged rather than presented as fact"` — evals/cases/source-driven-development.json:39, and `"Deprecated patterns are avoided in favor of documented current ones"` — evals/cases/source-driven-development.json:40. Trigger assertions specify `top_k: 3` (evals/cases/source-driven-development.json:7).

## Context cost
1287 bytes, ~322 tokens.
