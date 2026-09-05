---
package: matt
path: skills/productivity/writing-for-agents/agents/openai.yaml
type: skill
bytes: 102
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/writing-for-agents/agents/openai.yaml, sha256: eacb24b2a618cfb81dacb0416f4fdd75ddf3a8060f8ddb99aae1b1e301907e4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/writing-for-agents/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Write documents agents consume\"" — skills/productivity/writing-for-agents/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `writing-for-agents` skill. Defines display name (`Writing for Agents`) and concise description (`Write documents agents consume`). By omitting `policy.allow_implicit_invocation: false`, it allows Codex models to trigger the skill autonomously when authoring agent-facing documentation.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `display_name` — skills/productivity/writing-for-agents/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/writing-for-agents/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/productivity/writing-for-agents/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Omits `policy:` entirely. In PR #766 (`CHANGELOG.md:21-23`), `policy.allow_implicit_invocation: false` was intentionally dropped so Codex models could trigger this skill autonomously from its description, achieving model-invoked parity with Claude Code.

## Context cost
102 bytes (~25 tokens). Interface configuration metadata; negligible context footprint.
