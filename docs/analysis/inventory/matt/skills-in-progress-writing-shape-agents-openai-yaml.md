---
package: matt
path: skills/in-progress/writing-shape/agents/openai.yaml
type: skill
bytes: 144
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-shape/agents/openai.yaml, sha256: 56de45430e23104ff178415f5ecf7821d51a9cfabd8814b1607ebf39da2ef5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/writing-shape/agents/openai.yaml

## Purpose — required, verbatim
> "Shape raw material into an article" — skills/in-progress/writing-shape/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `writing-shape` skill in `skills/in-progress/`. Sets display name ("Writing Shape") and short description ("Shape raw material into an article"), and sets `allow_implicit_invocation: false` so that the shaping session requires explicit initiation by the user.

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
- `Writing Shape` — skills/in-progress/writing-shape/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-shape/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/in-progress/writing-shape/agents/openai.yaml:5 — used here

## Structure
- interface — skills/in-progress/writing-shape/agents/openai.yaml:1
- policy — skills/in-progress/writing-shape/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mirrors Claude Code's `disable-model-invocation: true`.

## Context cost
144 bytes, 6 lines, ~35 tokens. Loads no external files.
