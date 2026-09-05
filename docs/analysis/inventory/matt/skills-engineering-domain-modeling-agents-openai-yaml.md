---
package: matt
path: skills/engineering/domain-modeling/agents/openai.yaml
type: skill
bytes: 101
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/agents/openai.yaml, sha256: f6bf2aa996c6e6f53fdd0708e18a0d16a56aed8322cca59fedbe3c0d2c75f06b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/domain-modeling/agents/openai.yaml

## Purpose — required, verbatim
> "Build and sharpen a domain model" — skills/engineering/domain-modeling/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `domain-modeling` skill. Registers the display name ("Domain Modeling") and short summary used when exposing this engineering capability within OpenAI assistant tooling and platforms.

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
- `Domain Modeling` — skills/engineering/domain-modeling/agents/openai.yaml:2 — defined here
- `domain model` — skills/engineering/domain-modeling/agents/openai.yaml:3 — used here

## Structure
- interface — skills/engineering/domain-modeling/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Static platform descriptor metadata for OpenAI assistant interfaces.

## Context cost
101 bytes, 4 lines, ~25 tokens. Loads no external files.
