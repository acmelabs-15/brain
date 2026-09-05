---
package: matt
path: skills/productivity/teach/agents/openai.yaml
type: skill
bytes: 139
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/agents/openai.yaml, sha256: 5856f3ae8aec742f1499c640aecdd5f1d6af5fa210a7c6ec794de8263a6f733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/agents/openai.yaml

## Purpose — required, verbatim
> "  short_description: \"Learn a concept in a guided workspace\"" — skills/productivity/teach/agents/openai.yaml:3
(first substantive purpose description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `teach` skill. Declares the human-readable display name ("Teach") and brief summary for skill listings. Configures `policy.allow_implicit_invocation: false` so that Codex and compatible LLM runtimes never autonomously initialize or execute the long-term teaching workspace without explicit user direction.

## Phase — required
matt:Productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/productivity/teach/agents/openai.yaml:1 — defined here
- `display_name` — skills/productivity/teach/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/teach/agents/openai.yaml:3 — defined here
- `policy` — skills/productivity/teach/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/productivity/teach/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides Codex configuration parity corresponding to `disable-model-invocation: true` in `skills/productivity/teach/SKILL.md:4`.

## Context cost
139 bytes, 6 lines, approximately 35 tokens.
