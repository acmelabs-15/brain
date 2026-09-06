---
package: matt
path: skills/in-progress/retro/agents/openai.yaml
type: skill
bytes: 146
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/retro/agents/openai.yaml, sha256: cb6fb9d7e6b4be5975f41f6def1dd00a1255bad5d9b02696b124c924a8b8745c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/retro/agents/openai.yaml

## Purpose — required, verbatim
> "Conduct a retrospective on a coding session." — skills/in-progress/retro/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `retro` skill. Defines the display name as "Retro" and short description as "Conduct a retrospective on a coding session." Restricts invocation to explicit user commands by setting `policy.allow_implicit_invocation: false`, aligning with Claude Code's `disable-model-invocation: true` to prevent unprompted model triggering.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill retro — skills/in-progress/retro/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/in-progress/retro/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/retro/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/retro/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/retro/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/retro/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Follows the standard companion configuration convention in package `matt`, providing Codex / OpenAI interface display names while disabling autonomous model invocation for user-driven workflow skills.

## Context cost
146 bytes, 6 lines, approximately 35 tokens.
