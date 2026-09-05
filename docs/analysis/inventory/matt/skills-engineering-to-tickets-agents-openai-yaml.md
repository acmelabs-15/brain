---
package: matt
path: skills/engineering/to-tickets/agents/openai.yaml
type: skill
bytes: 146
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-tickets/agents/openai.yaml, sha256: 21bc6215fffcd7614e9f772bb1760e87cc5fc7dcc707e7d282bc9414267a6090}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/to-tickets/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Split a plan into tracer-bullet tickets\"" — skills/engineering/to-tickets/agents/openai.yaml:3

## Design intent — required
Declares UI configuration metadata and execution policy for the `to-tickets` skill within OpenAI Codex and ChatGPT environments. Supplies `display_name: "To Tickets"` and `short_description: "Split a plan into tracer-bullet tickets"`. Sets `policy.allow_implicit_invocation: false`, enforcing that the skill can only be invoked explicitly by human users, mirroring Claude Code's `disable-model-invocation: true`.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `display_name` — skills/engineering/to-tickets/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/to-tickets/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/to-tickets/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/to-tickets/agents/openai.yaml:1
- `policy:` — skills/engineering/to-tickets/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pairs `allow_implicit_invocation: false` with `disable-model-invocation: true` in `SKILL.md`, preserving consistent human-initiated invocation across platforms.

## Context cost
146 bytes (~36 tokens). Minimal harness UI configuration.
