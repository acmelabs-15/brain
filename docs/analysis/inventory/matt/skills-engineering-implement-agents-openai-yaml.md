---
package: matt
path: skills/engineering/implement/agents/openai.yaml
type: skill
bytes: 139
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/implement/agents/openai.yaml, sha256: 8970a8596ade0c28ab427f41a4ea242d6bdf6186c59ebf55e1238dbecaab79dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/implement/agents/openai.yaml

## Purpose — required, verbatim
> "Build work from a spec or tickets" — skills/engineering/implement/agents/openai.yaml:3

## Design intent — required
Specifies the interface metadata and execution policy for the `implement` skill within the OpenAI/Codex harness. Sets the display name to "Implement" and description to "Build work from a spec or tickets", while setting `policy.allow_implicit_invocation: false` to restrict execution to explicit user invocation and prevent autonomous model triggering.

## Phase — required
matt:implement

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/implement/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/implement/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/implement/agents/openai.yaml:3 — defined here
- `policy` — skills/engineering/implement/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/implement/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/implement/agents/openai.yaml:1
- `display_name:` — skills/engineering/implement/agents/openai.yaml:2
- `short_description:` — skills/engineering/implement/agents/openai.yaml:3
- `policy:` — skills/engineering/implement/agents/openai.yaml:4
- `allow_implicit_invocation:` — skills/engineering/implement/agents/openai.yaml:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/engineering/implement/agents/openai.yaml:1: Not directly invoked or referenced by other files in the repository.

## Observations
Enforces user-only invocation via `policy.allow_implicit_invocation: false`, matching the Claude Code configuration `disable-model-invocation: true` in `SKILL.md`.

## Context cost
139 bytes (~35 tokens). Static metadata file for Codex interface configuration.
