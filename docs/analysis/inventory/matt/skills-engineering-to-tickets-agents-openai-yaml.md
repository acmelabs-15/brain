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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/to-tickets/agents/openai.yaml

## Purpose — required, verbatim
> "Split a plan into tracer-bullet tickets" — skills/engineering/to-tickets/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration and policy definition for the `to-tickets` skill. Defines the human-readable display name ("To Tickets") and brief description ("Split a plan into tracer-bullet tickets") for agent tool listings. Configures `policy.allow_implicit_invocation: false`, enforcing that the skill cannot be invoked implicitly by the model without explicit user command, ensuring parity with Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill to-tickets — skills/engineering/to-tickets/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/engineering/to-tickets/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/to-tickets/agents/openai.yaml:2 — defined here
- `To Tickets` — skills/engineering/to-tickets/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/to-tickets/agents/openai.yaml:3 — defined here
- `tracer-bullet tickets` — skills/engineering/to-tickets/agents/openai.yaml:3 — used here
- `policy` — skills/engineering/to-tickets/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/to-tickets/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex dual-harness registration metadata for the `to-tickets` skill. Disallows implicit model invocation via `policy.allow_implicit_invocation: false`, requiring explicit user invocation.

## Context cost
146 bytes, 6 lines, approximately 35 tokens.
