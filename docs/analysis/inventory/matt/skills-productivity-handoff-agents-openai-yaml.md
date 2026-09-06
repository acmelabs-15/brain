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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/handoff/agents/openai.yaml

## Purpose — required, verbatim
> "Compact a conversation into a handoff" — skills/productivity/handoff/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration and invocation policy for the `handoff` skill. Sets the display name ("Handoff") and brief description ("Compact a conversation into a handoff"). Enforces `policy.allow_implicit_invocation: false`, ensuring models cannot autonomously call the handoff skill without explicit user instruction, achieving parity with Claude Code's `disable-model-invocation: true`.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill handoff — skills/productivity/handoff/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `interface` — skills/productivity/handoff/agents/openai.yaml:1 — used here
- `display_name` — skills/productivity/handoff/agents/openai.yaml:2 — used here
- `Handoff` — skills/productivity/handoff/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/handoff/agents/openai.yaml:3 — used here
- `Compact a conversation into a handoff` — skills/productivity/handoff/agents/openai.yaml:3 — defined here
- `policy` — skills/productivity/handoff/agents/openai.yaml:4 — used here
- `allow_implicit_invocation` — skills/productivity/handoff/agents/openai.yaml:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Restricts implicit model invocation via `allow_implicit_invocation: false`, mirroring Claude Code's user-only invocation design.

## Context cost
141 bytes, 6 lines, approximately 30 tokens.
