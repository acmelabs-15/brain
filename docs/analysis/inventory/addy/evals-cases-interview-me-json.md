---
package: addy
path: evals/cases/interview-me.json
type: config
bytes: 1197
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/interview-me.json

## Purpose — required, verbatim
> "skill_name": "interview-me" — evals/cases/interview-me.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and interactive dialogue evaluation criteria for the `interview-me` skill in the Addy eval harness. Specifies 3 positive trigger prompts for requirements discovery and one-question-at-a-time interviewing (top_k=3), 2 negative prompts routing to `test-driven-development` and `shipping-and-launch`, and 1 dialogue evaluation checking that questions are asked strictly one at a time (not batched), solutions are withheld until needs are understood, and underlying user goals are surfaced.

## Phase — required
none

## Inputs — required
User prompts requesting an interview or clarifying fuzzy requirements.

## Outputs — required
Dialogue evaluation transcripts and rule compliance verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill interview-me — evals/cases/interview-me.json:2
- skill test-driven-development — evals/cases/interview-me.json:21
- skill shipping-and-launch — evals/cases/interview-me.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/interview-me.json:2 — used here
- `interview-me` — evals/cases/interview-me.json:2 — used here
- `trigger` — evals/cases/interview-me.json:3 — defined here
- `positive` — evals/cases/interview-me.json:4 — defined here
- `top_k` — evals/cases/interview-me.json:7 — defined here
- `negative` — evals/cases/interview-me.json:18 — defined here
- `owner` — evals/cases/interview-me.json:21 — defined here
- `evals` — evals/cases/interview-me.json:29 — defined here
- `kind` — evals/cases/interview-me.json:32 — defined here
- `dialogue` — evals/cases/interview-me.json:32 — defined here
- `expected_output` — evals/cases/interview-me.json:34 — defined here
- `expectations` — evals/cases/interview-me.json:35 — defined here
- `one-question-at-a-time interview` — evals/cases/interview-me.json:34 — used here

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
Configures conversational evaluation (`kind: dialogue`, line 32) without file fixtures. Specifically checks that the agent avoids cognitive overload by strictly pacing questions one at a time, inhibits premature solutioning, and probes deeply for the underlying operational intent behind vague feature requests.

## Context cost
1,197 bytes (~300 tokens). Loads nothing directly.
