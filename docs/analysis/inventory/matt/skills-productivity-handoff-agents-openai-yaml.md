---
package: matt
path: skills/productivity/handoff/agents/openai.yaml
type: skill
bytes: 141
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/handoff/agents/openai.yaml, sha256: 5c479fd562c691851690e8b18c8501045bef0943c10743d636b2fae26add1d28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/handoff/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Compact a conversation into a handoff\"" — skills/productivity/handoff/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent interface configuration metadata for the `handoff` skill. Sets the display name to "Handoff", provides a concise summary ("Compact a conversation into a handoff"), and enforces `policy.allow_implicit_invocation: false`, ensuring this skill is solely invoked on explicit user command.

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
- `display_name` — skills/productivity/handoff/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/handoff/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/productivity/handoff/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/productivity/handoff/agents/openai.yaml:1
- `policy:` — skills/productivity/handoff/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/productivity/handoff/agents/openai.yaml:1: Codex interface configuration metadata not directly invoked or referenced by in-scope skills or workflows.

## Observations
Parallels Claude Code's `disable-model-invocation: true` via `policy.allow_implicit_invocation: false`.

## Context cost
141 bytes (~35 tokens). Interface configuration metadata; negligible context footprint.
