---
package: matt
path: skills/productivity/grill-me/agents/openai.yaml
type: skill
bytes: 137
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/grill-me/agents/openai.yaml, sha256: c061e39c3e0f9d865fb1b97556d485704af2a8a58f4b8221a8917a5c2074a32b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/grill-me/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Grill Me\"" — skills/productivity/grill-me/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI Codex interface metadata and invocation policy configuration for the `grill-me` productivity skill. Defines human-readable display title, concise descriptive summary, and sets `allow_implicit_invocation: false` to restrict execution exclusively to direct user invocation, matching Claude Code's `disable-model-invocation: true`.

## Phase — required
matt:productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill grill-me — skills/productivity/grill-me/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/productivity/grill-me/agents/openai.yaml:1 — defined here
- `display_name` — skills/productivity/grill-me/agents/openai.yaml:2 — defined here
- `Grill Me` — skills/productivity/grill-me/agents/openai.yaml:2 — defined here
- `short_description` — skills/productivity/grill-me/agents/openai.yaml:3 — defined here
- `Sharpen a plan through interview` — skills/productivity/grill-me/agents/openai.yaml:3 — defined here
- `policy` — skills/productivity/grill-me/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/productivity/grill-me/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Maintains cross-platform invocation parity between OpenAI/Codex and Claude Code environments by enforcing manual user invocation.

## Context cost
137 bytes, 6 lines, approximately 35 tokens.
