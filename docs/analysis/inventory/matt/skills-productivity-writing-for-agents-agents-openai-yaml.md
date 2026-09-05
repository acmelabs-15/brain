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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/writing-for-agents/agents/openai.yaml

## Purpose — required, verbatim
> "Write documents agents consume" — skills/productivity/writing-for-agents/agents/openai.yaml:3
(no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `writing-for-agents` skill. Defines the display name as "Writing for Agents" and short description as "Write documents agents consume". Notably omits `policy.allow_implicit_invocation: false`, enabling autonomous model invocation in Codex environments (as documented in CHANGELOG.md PR #766) to mirror Claude Code's model-invoked behavior.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill writing-for-agents — skills/productivity/writing-for-agents/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:23
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `display_name` — skills/productivity/writing-for-agents/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/writing-for-agents/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
CHANGELOG.md:21-23 documents that `policy.allow_implicit_invocation: false` was explicitly removed in PR #766 because Codex filtered the skill out of the model-visible list, preventing autonomous invocation. Omitting the policy block restores autonomous model invocation in Codex, aligning with Claude Code's model-invoked status.

## Context cost
102 bytes, 4 lines, approximately 25 tokens.
