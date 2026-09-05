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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/handoff/agents/openai.yaml

## Purpose — required, verbatim
> "  short_description: \"Compact a conversation into a handoff\"" — skills/productivity/handoff/agents/openai.yaml:3
(first substantive purpose description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `handoff` skill. Sets the human-readable display name ("Handoff") and concise description for agent skill catalogs. Explicitly sets `policy.allow_implicit_invocation: false` so that OpenAI Codex and compatible harnesses do not autonomously generate handoff documents, restricting invocation strictly to explicit user execution.

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
- `interface` — skills/productivity/handoff/agents/openai.yaml:1 — defined here
- `display_name` — skills/productivity/handoff/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/handoff/agents/openai.yaml:3 — defined here
- `policy` — skills/productivity/handoff/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/productivity/handoff/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness policy configuration establishing parity with Claude Code's frontmatter configuration `disable-model-invocation: true` in `skills/productivity/handoff/SKILL.md:5`.

## Context cost
141 bytes, 6 lines, approximately 35 tokens.
