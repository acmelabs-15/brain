---
package: matt
path: skills/engineering/grill-with-docs/agents/openai.yaml
type: skill
bytes: 145
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/grill-with-docs/agents/openai.yaml, sha256: 94cd0ab161fb468a836349f5ed482ba58ce8e709a05c57ce533d739dbd35cca9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/grill-with-docs/agents/openai.yaml

## Purpose — required, verbatim
> "Grill a design and write its docs" — skills/engineering/grill-with-docs/agents/openai.yaml:3

## Design intent — required
Configures the OpenAI/Codex agent interface and invocation policy for the `grill-with-docs` skill. Specifies the user-facing display name ("Grill with Docs") and short description ("Grill a design and write its docs") for skill selection, while explicitly setting `policy.allow_implicit_invocation: false` to require explicit user invocation and prevent autonomous activation by the model.

## Phase — required
matt:The Main Flow

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/grill-with-docs/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/grill-with-docs/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/grill-with-docs/agents/openai.yaml:3 — defined here
- `policy` — skills/engineering/grill-with-docs/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/grill-with-docs/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/grill-with-docs/agents/openai.yaml:1
- `display_name:` — skills/engineering/grill-with-docs/agents/openai.yaml:2
- `short_description:` — skills/engineering/grill-with-docs/agents/openai.yaml:3
- `policy:` — skills/engineering/grill-with-docs/agents/openai.yaml:4
- `allow_implicit_invocation:` — skills/engineering/grill-with-docs/agents/openai.yaml:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/engineering/grill-with-docs/agents/openai.yaml:1: Not directly referenced by other repository files, providing harness configuration for Codex.

## Observations
Explicitly sets `policy.allow_implicit_invocation: false`, mirroring the Claude Code convention `disable-model-invocation: true` in `SKILL.md`.

## Context cost
145 bytes (~35 tokens). Static metadata file for Codex interface configuration.
