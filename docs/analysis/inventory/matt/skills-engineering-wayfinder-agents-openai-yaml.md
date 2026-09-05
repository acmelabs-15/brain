---
package: matt
path: skills/engineering/wayfinder/agents/openai.yaml
type: skill
bytes: 144
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wayfinder/agents/openai.yaml, sha256: 88bc81a11a6d52ac67aeaa76b8b619e387020d47c5133a4dd4927fd15c4ad073}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/wayfinder/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Map a large effort as decision tickets\"" — skills/engineering/wayfinder/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `wayfinder` planning skill. Sets the display name to "Wayfinder", summarizes the core mission as mapping large efforts as decision tickets, and explicitly configures `allow_implicit_invocation: false` to enforce manual human triggering, preventing autonomous execution by the model.

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

## Concepts named — required, verbatim
- `display_name` — skills/engineering/wayfinder/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/wayfinder/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/wayfinder/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/wayfinder/agents/openai.yaml:1
- `policy:` — skills/engineering/wayfinder/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides the Codex equivalent of Claude Code's `disable-model-invocation: true` policy via `policy.allow_implicit_invocation: false`.
- Concise 6-line interface definition standard across the repository's user-invoked skills.

## Context cost
144 bytes (~36 tokens). Agent harness configuration metadata; negligible context footprint.
