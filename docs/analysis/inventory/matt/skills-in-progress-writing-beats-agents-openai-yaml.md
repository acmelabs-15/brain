---
package: matt
path: skills/in-progress/writing-beats/agents/openai.yaml
type: skill
bytes: 142
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-beats/agents/openai.yaml, sha256: ddaef01da61d8e3c5f482c4403033c20cf5823f08a1dbf1d4c871670831d01e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/writing-beats/agents/openai.yaml

## Purpose — required, verbatim
> "Assemble raw material into beats" — skills/in-progress/writing-beats/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `writing-beats` skill. Configures the user-facing display name as "Writing Beats" and short description as "Assemble raw material into beats". Sets `policy.allow_implicit_invocation: false` to require explicit user invocation, preventing models from autonomously initiating the interactive beat-by-beat composition flow.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill writing-beats — skills/in-progress/writing-beats/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/in-progress/writing-beats/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/writing-beats/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-beats/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/writing-beats/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/writing-beats/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Companion OpenAI configuration mirroring Claude Code's `disable-model-invocation: true` policy, ensuring consistent user-driven execution across platforms.

## Context cost
142 bytes, 6 lines, approximately 35 tokens.
