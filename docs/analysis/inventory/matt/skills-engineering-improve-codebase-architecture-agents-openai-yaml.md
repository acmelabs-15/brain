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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/agents/openai.yaml

## Purpose — required, verbatim
> "Find and grill architecture improvements" — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3

## Design intent — required
Configures OpenAI/Codex agent metadata and execution policy for the `improve-codebase-architecture` skill. Displays "Improve Codebase Architecture" and describes the skill as "Find and grill architecture improvements", while using `policy.allow_implicit_invocation: false` to enforce user-only invocation in Codex.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3 — defined here
- `policy` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:1
- `display_name:` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:2
- `short_description:` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3
- `policy:` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:4
- `allow_implicit_invocation:` — skills/engineering/improve-codebase-architecture/agents/openai.yaml:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/engineering/improve-codebase-architecture/agents/openai.yaml:1: Not directly referenced or invoked by other files in the repository.

## Observations
Enforces user-invoked execution in Codex via `policy.allow_implicit_invocation: false`, matching `disable-model-invocation: true` from the companion `SKILL.md`.

## Context cost
166 bytes (~42 tokens). Static metadata file for Codex interface configuration.
