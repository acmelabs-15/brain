---
package: addy
path: evals/fixtures/source-driven-development/framework-task.md
type: doc
bytes: 535
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/source-driven-development/framework-task.md, sha256: c9d00f67065f6e9a35d2edfa3ea7207090a214da02163b8a751f5fc6e179309b}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/source-driven-development/framework-task.md

## Purpose — required, verbatim
> "Session implementation task" — evals/fixtures/source-driven-development/framework-task.md:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides the task specification fixture for evaluating the `source-driven-development` skill. It tasks the agent with implementing Express 5 sessions using `express-session`, mandating that all architectural decisions, proxy settings, secure cookie flags, and session store configurations be grounded directly in official documentation rather than outdated training memories (such as Express 4 defaults), and requiring exact citations.

## Phase — required
`addy:SPEC`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Session implementation task` — evals/fixtures/source-driven-development/framework-task.md:1 — defined here
- `Express 5` — evals/fixtures/source-driven-development/framework-task.md:3 — used here
- `express-session` — evals/fixtures/source-driven-development/framework-task.md:4 — used here
- `proxy settings` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `secure cookies` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `session stores` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `secret configuration` — evals/fixtures/source-driven-development/framework-task.md:5 — used here
- `Express 4` — evals/fixtures/source-driven-development/framework-task.md:8-9 — used here

## Structure
- `# Session implementation task` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly targets the tendency of LLMs to generate outdated or hallucinated framework configurations by enforcing verification against authoritative primary sources.

## Context cost
535 bytes (~134 tokens).
