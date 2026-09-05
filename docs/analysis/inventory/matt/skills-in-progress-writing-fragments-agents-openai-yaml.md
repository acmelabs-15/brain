---
package: matt
path: skills/in-progress/writing-fragments/agents/openai.yaml
type: skill
bytes: 140
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-fragments/agents/openai.yaml, sha256: 81167f25ee8ea1bb4b4958f12b6702ea972ad31b05e03ec91e39fa4bae0c2641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-fragments/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Mine raw writing fragments\"" — skills/in-progress/writing-fragments/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `writing-fragments` in-progress skill. Sets the interface display name to "Writing Fragments" and short description to "Mine raw writing fragments", enforcing `allow_implicit_invocation: false` so that ideation exploration sessions are strictly human-invoked.

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
- `display_name` — skills/in-progress/writing-fragments/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-fragments/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/in-progress/writing-fragments/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/in-progress/writing-fragments/agents/openai.yaml:1
- `policy:` — skills/in-progress/writing-fragments/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pairs with `disable-model-invocation: true` in `SKILL.md` to prevent autonomous model activation.

## Context cost
140 bytes (~35 tokens). Agent harness configuration metadata; negligible context footprint.
