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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/wayfinder/agents/openai.yaml

## Purpose — required, verbatim
> "Map a large effort as decision tickets" — skills/engineering/wayfinder/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI Codex agent interface declaration for the `wayfinder` skill. Declares the UI display name ("Wayfinder") and short description summarizing its role in mapping large efforts as decision tickets on an issue tracker. Sets `policy.allow_implicit_invocation: false` to enforce user-only explicit invocation in Codex environments, mirroring Claude Code's `disable-model-invocation: true` constraint.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:2
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/wayfinder/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/wayfinder/agents/openai.yaml:2 — defined here
- `Wayfinder` — skills/engineering/wayfinder/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/wayfinder/agents/openai.yaml:3 — defined here
- `policy` — skills/engineering/wayfinder/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/wayfinder/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides dual-harness registration metadata for OpenAI Codex environments. Sets `allow_implicit_invocation: false` to guarantee that Codex models will not attempt to enter multi-session wayfinding planning autonomously without an explicit user invocation.

## Context cost
144 bytes, 6 lines, ~35 tokens. Loads no external files.
