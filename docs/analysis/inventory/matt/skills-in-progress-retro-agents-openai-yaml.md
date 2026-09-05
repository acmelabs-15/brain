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
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/retro/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Conduct a retrospective on a coding session.\"" — skills/in-progress/retro/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `retro` in-progress skill. Sets the interface display name to "Retro" and short description to "Conduct a retrospective on a coding session.", enforcing `allow_implicit_invocation: false` so that retrospectives are triggered exclusively by human user request rather than autonomously by an AI agent.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/in-progress/retro/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/retro/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/retro/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/retro/agents/openai.yaml:1
- `policy:` — skills/in-progress/retro/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides Codex parity with Claude Code's `disable-model-invocation: true` policy, ensuring uniform user-invoked behavior across agent runtime environments.

## Context cost
146 bytes (~36 tokens). Agent harness configuration metadata; negligible context footprint.
