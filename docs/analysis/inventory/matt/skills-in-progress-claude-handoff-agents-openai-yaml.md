---
package: matt
path: skills/in-progress/claude-handoff/agents/openai.yaml
type: skill
bytes: 141
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/claude-handoff/agents/openai.yaml, sha256: 2308a672978864633286fb9f0792b08657e501426b3f7883fc418d5d2eac5eb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/claude-handoff/agents/openai.yaml

## Purpose — required, verbatim
> "Hand off to a background agent" — skills/in-progress/claude-handoff/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the experimental `claude-handoff` skill in `skills/in-progress/`. Sets display name ("Claude Handoff"), short description ("Hand off to a background agent"), and explicitly prohibits implicit invocation (`allow_implicit_invocation: false`), requiring human direction to launch an asynchronous background handoff.

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
- `Claude Handoff` — skills/in-progress/claude-handoff/agents/openai.yaml:2 — defined here
- `background agent` — skills/in-progress/claude-handoff/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/in-progress/claude-handoff/agents/openai.yaml:5 — used here

## Structure
- interface — skills/in-progress/claude-handoff/agents/openai.yaml:1
- policy — skills/in-progress/claude-handoff/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures invocation restrictions matching Claude Code's `disable-model-invocation: true`.

## Context cost
141 bytes, 6 lines, ~35 tokens. Loads no external files.
