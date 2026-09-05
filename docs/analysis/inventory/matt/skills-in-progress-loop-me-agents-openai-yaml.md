---
package: matt
path: skills/in-progress/loop-me/agents/openai.yaml
type: skill
bytes: 140
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/loop-me/agents/openai.yaml, sha256: b66fa10079957051be6a812f45e55b67ac394b71d5ba88349962b4c9205802c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/loop-me/agents/openai.yaml

## Purpose — required, verbatim
> "Spec the workflows you want to build" — skills/in-progress/loop-me/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the experimental `loop-me` skill in `skills/in-progress/`. Sets display name ("Loop Me"), short description ("Spec the workflows you want to build"), and restricts autonomous execution (`allow_implicit_invocation: false`) so the agent does not start a stateful workflow specification grilling interview without explicit user invocation.

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
- `Loop Me` — skills/in-progress/loop-me/agents/openai.yaml:2 — defined here
- `workflows` — skills/in-progress/loop-me/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/in-progress/loop-me/agents/openai.yaml:5 — used here

## Structure
- interface — skills/in-progress/loop-me/agents/openai.yaml:1
- policy — skills/in-progress/loop-me/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Matches the `disable-model-invocation: true` constraint declared in `SKILL.md`.

## Context cost
140 bytes, 6 lines, ~35 tokens. Loads no external files.
