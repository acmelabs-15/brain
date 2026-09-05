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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/writing-beats/agents/openai.yaml

## Purpose — required, verbatim
> "Assemble raw material into beats" — skills/in-progress/writing-beats/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `writing-beats` skill in `skills/in-progress/`. Sets display name ("Writing Beats") and description ("Assemble raw material into beats"), disabling implicit model invocation (`allow_implicit_invocation: false`) to ensure that beat-by-beat shaping is initiated intentionally by the user.

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
- `Writing Beats` — skills/in-progress/writing-beats/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-beats/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/in-progress/writing-beats/agents/openai.yaml:5 — used here

## Structure
- interface — skills/in-progress/writing-beats/agents/openai.yaml:1
- policy — skills/in-progress/writing-beats/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mirrors Claude Code's `disable-model-invocation: true`.

## Context cost
142 bytes, 6 lines, ~35 tokens. Loads no external files.
