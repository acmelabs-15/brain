---
package: matt
path: skills/in-progress/claude-handoff/agents/openai.yaml
type: skill
bytes: 141
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/claude-handoff/agents/openai.yaml, sha256: 2308a672978864633286fb9f0792b08657e501426b3f7883fc418d5d2eac5eb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/claude-handoff/agents/openai.yaml

## Purpose — required, verbatim
> "Hand off to a background agent" — skills/in-progress/claude-handoff/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI Codex agent interface declaration for the `claude-handoff` skill. Declares display name ("Claude Handoff") and short description. Sets `policy.allow_implicit_invocation: false` to enforce explicit user invocation in OpenAI Codex environments, aligning with Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill claude-handoff — skills/in-progress/claude-handoff/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/in-progress/claude-handoff/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/claude-handoff/agents/openai.yaml:2 — defined here
- `Claude Handoff` — skills/in-progress/claude-handoff/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/claude-handoff/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/claude-handoff/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/claude-handoff/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides dual-harness alignment for the experimental background handoff skill in Codex environments. Explicitly excludes implicit model invocation so background agent spawning only occurs upon user request.

## Context cost
141 bytes, 6 lines, ~30 tokens. Loads no external files.
