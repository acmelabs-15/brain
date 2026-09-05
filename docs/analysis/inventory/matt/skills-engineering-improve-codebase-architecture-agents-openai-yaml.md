---
package: matt
path: skills/engineering/improve-codebase-architecture/agents/openai.yaml
type: skill
bytes: 166
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/agents/openai.yaml, sha256: c8cb20f68ebf0edb4e497bc11ae5fcaa196004e661cd189015b04f4109ced7f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/agents/openai.yaml

## Purpose — required, verbatim
> "Find and grill architecture improvements" — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI agent interface declaration for the `improve-codebase-architecture` skill. Specifies the display name ("Improve Codebase Architecture") and short description summarizing its capability to identify and grill architectural improvements. Enforces `policy.allow_implicit_invocation: false`, ensuring that in OpenAI/Codex agent platforms the skill is never triggered implicitly without explicit user intent, matching Claude Code's `disable-model-invocation: true`.

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
- `Improve Codebase Architecture` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:2 — defined here
- `architecture improvements` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:5 — used here

## Structure
- interface — skills/engineering/improve-codebase-architecture/agents/openai.yaml:1
- policy — skills/engineering/improve-codebase-architecture/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides runtime registration metadata for OpenAI assistant and agent frameworks with explicit invocation constraints.

## Context cost
166 bytes, 6 lines, ~40 tokens. Loads no external files.
