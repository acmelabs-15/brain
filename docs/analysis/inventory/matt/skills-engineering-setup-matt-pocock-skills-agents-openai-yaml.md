---
package: matt
path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml
type: skill
bytes: 152
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml, sha256: 9527de0110541c45712319025155aeab8dc7d77c6ed6e5e83271bab1851ab939}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/setup-matt-pocock-skills/agents/openai.yaml

## Purpose — required, verbatim
> "Configure a repo for the skills" — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface and policy configuration for the `setup-matt-pocock-skills` skill. Defines display metadata and explicitly sets the policy rule `allow_implicit_invocation: false`, ensuring models in OpenAI runtimes cannot invoke the repository setup routine autonomously without explicit user direction.

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
- `Setup Matt Pocock Skills` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:2 — defined here
- `allow_implicit_invocation` — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:5 — defined here

## Structure
- interface — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:1
- policy — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Encodes `allow_implicit_invocation: false`, directly mirroring `disable-model-invocation: true` in `SKILL.md:4` to prevent unintended automated execution during agent reasoning.

## Context cost
152 bytes, 6 lines, ~35 tokens. Loads no external files.
