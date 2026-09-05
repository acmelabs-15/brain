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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/grill-with-docs/agents/openai.yaml

## Purpose — required, verbatim
> "Grill a design and write its docs" — skills/engineering/grill-with-docs/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `grill-with-docs` skill. Defines the human-readable display name ("Grill with Docs") and short description, while setting `policy.allow_implicit_invocation: false` to enforce that the skill can only be explicitly invoked by the human user in OpenAI/Codex environments, mirroring Claude Code's `disable-model-invocation: true`. Without this file, OpenAI-compatible agent runtimes would lack descriptive metadata and invocation policy constraints.

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
- `Grill with Docs` — skills/engineering/grill-with-docs/agents/openai.yaml:2 — defined here
- `allow_implicit_invocation` — skills/engineering/grill-with-docs/agents/openai.yaml:5 — used here

## Structure
- interface — skills/engineering/grill-with-docs/agents/openai.yaml:1
- policy — skills/engineering/grill-with-docs/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Static interface metadata providing platform-specific descriptor and policy mapping for OpenAI assistant tooling integration.

## Context cost
145 bytes, 6 lines, ~35 tokens. Loads no external files.
