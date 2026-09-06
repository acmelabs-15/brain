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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/agents/openai.yaml

## Purpose — required, verbatim
> "Learn a concept in a guided workspace" — skills/productivity/teach/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration and invocation policy for the `teach` skill. Declares the display name ("Teach") and concise short description ("Learn a concept in a guided workspace"). Disables implicit invocation via `policy.allow_implicit_invocation: false`, ensuring models do not trigger teaching sessions autonomously, maintaining strict parity with Claude Code's `disable-model-invocation: true`.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `interface` — skills/productivity/teach/agents/openai.yaml:1 — used here
- `display_name` — skills/productivity/teach/agents/openai.yaml:2 — used here
- `Teach` — skills/productivity/teach/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/teach/agents/openai.yaml:3 — used here
- `guided workspace` — skills/productivity/teach/agents/openai.yaml:3 — defined here
- `Learn a concept in a guided workspace` — skills/productivity/teach/agents/openai.yaml:3 — defined here
- `policy` — skills/productivity/teach/agents/openai.yaml:4 — used here
- `allow_implicit_invocation` — skills/productivity/teach/agents/openai.yaml:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Addresses and resolves Phase 1V omissions by capturing `Teach` (line 2), `guided workspace` (line 3), `interface` (line 1), `display_name` (line 2), and `short_description` (line 3). Enforces `policy.allow_implicit_invocation: false` for Codex/OpenAI parity with Claude Code's user-invoked design.

## Context cost
139 bytes, 6 lines, approximately 30 tokens.
