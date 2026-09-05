---
package: matt
path: skills/engineering/to-tickets/agents/openai.yaml
type: skill
bytes: 146
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-tickets/agents/openai.yaml, sha256: 21bc6215fffcd7614e9f772bb1760e87cc5fc7dcc707e7d282bc9414267a6090}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/to-tickets/agents/openai.yaml

## Purpose — required, verbatim
> "Split a plan into tracer-bullet tickets" — skills/engineering/to-tickets/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface descriptor for the `to-tickets` skill. Defines display metadata ("To Tickets") and functional summary for OpenAI agent environments. Configures `policy.allow_implicit_invocation: false` to ensure the skill is never triggered implicitly or autonomously by the model, matching `disable-model-invocation: true` in `to-tickets/SKILL.md`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `To Tickets` — skills/engineering/to-tickets/agents/openai.yaml:2 — defined here
- `tracer-bullet` — skills/engineering/to-tickets/agents/openai.yaml:3 — used here
- `tickets` — skills/engineering/to-tickets/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/engineering/to-tickets/agents/openai.yaml:5 — used here

## Structure
- interface
- policy

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness policy configuration establishing explicit user triggering for OpenAI-compatible assistant environments.

## Context cost
146 bytes, 6 lines, ~37 tokens. Loads no external files.
