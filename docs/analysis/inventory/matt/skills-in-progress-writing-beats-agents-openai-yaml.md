---
package: matt
path: skills/in-progress/writing-beats/agents/openai.yaml
type: skill
bytes: 142
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-beats/agents/openai.yaml, sha256: ddaef01da61d8e3c5f482c4403033c20cf5823f08a1dbf1d4c871670831d01e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-beats/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Assemble raw material into beats\"" — skills/in-progress/writing-beats/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `writing-beats` in-progress skill. Sets the interface display name to "Writing Beats" and short description to "Assemble raw material into beats", enforcing `allow_implicit_invocation: false` so that beat-by-beat article progression is exclusively user-driven.

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
- `display_name` — skills/in-progress/writing-beats/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-beats/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/writing-beats/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/writing-beats/agents/openai.yaml:1
- `policy:` — skills/in-progress/writing-beats/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Ensures Codex parity with Claude Code's `disable-model-invocation: true`, safeguarding the collaborative step-by-step writing loop.

## Context cost
142 bytes (~35 tokens). Agent harness configuration metadata; negligible context footprint.
