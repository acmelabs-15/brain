---
package: matt
path: skills/in-progress/setup-ts-deep-modules/agents/openai.yaml
type: skill
bytes: 149
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/agents/openai.yaml, sha256: 159f680217d50747702620c05fd65734a152185b3219a8ca5ee4630878a354fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Enforce deep TypeScript modules\"" — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `setup-ts-deep-modules` in-progress skill. Sets the interface display name to "Setup TS Deep Modules" and short description to "Enforce deep TypeScript modules", enforcing `allow_implicit_invocation: false` so that structural dependency and boundary configuration is triggered explicitly by a human user.

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
- `display_name` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:1
- `policy:` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pairs with `disable-model-invocation: true` in `SKILL.md` to prevent unintended autonomous project reconfiguration by LLM agents.

## Context cost
149 bytes (~37 tokens). Agent harness configuration metadata; negligible context footprint.
