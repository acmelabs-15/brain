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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/writing-fragments/agents/openai.yaml

## Purpose — required, verbatim
> "Mine raw writing fragments" — skills/in-progress/writing-fragments/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `writing-fragments` skill. Sets the user-facing display name as "Writing Fragments" and short description as "Mine raw writing fragments". Disables autonomous model execution via `policy.allow_implicit_invocation: false`, ensuring exploratory grilling sessions are initiated exclusively by explicit user request.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill writing-fragments — skills/in-progress/writing-fragments/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/in-progress/writing-fragments/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/writing-fragments/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/writing-fragments/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/writing-fragments/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/writing-fragments/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard companion configuration in package `matt`, ensuring consistency between OpenAI harness metadata and Claude Code's invocation settings.

## Context cost
140 bytes, 6 lines, approximately 35 tokens.
