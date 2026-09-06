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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/agents/openai.yaml

## Purpose — required, verbatim
> "Enforce deep TypeScript modules" — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata and invocation policy configuration for the `setup-ts-deep-modules` skill. Configures the user-facing display name as "Setup TS Deep Modules" and provides a short summary description ("Enforce deep TypeScript modules"). Sets `policy.allow_implicit_invocation: false` to restrict invocation to explicit user commands, ensuring models do not autonomously initiate deep module boundary wiring.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill setup-ts-deep-modules — skills/in-progress/setup-ts-deep-modules/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:1 — defined here
- `display_name` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3 — defined here
- `deep TypeScript modules` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3 — defined here
- `policy` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Companion OpenAI configuration mirroring Claude Code's `disable-model-invocation: true` policy, ensuring uniform user-triggered execution across harnesses.

## Context cost
149 bytes, 6 lines, approximately 35 tokens.
