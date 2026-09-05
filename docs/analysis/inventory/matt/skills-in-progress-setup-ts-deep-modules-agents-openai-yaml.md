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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/setup-ts-deep-modules/agents/openai.yaml

## Purpose — required, verbatim
> "Enforce deep TypeScript modules" — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for `setup-ts-deep-modules` in `skills/in-progress/`. Sets display name ("Setup TS Deep Modules") and description ("Enforce deep TypeScript modules"), and specifies `allow_implicit_invocation: false` to require explicit invocation by the user rather than implicit invocation by the model.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Setup TS Deep Modules` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:2 — defined here
- `short_description` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:5 — used here

## Structure
- interface — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:1
- policy — skills/in-progress/setup-ts-deep-modules/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures invocation restrictions matching Claude Code's `disable-model-invocation: true`.

## Context cost
149 bytes, 6 lines, ~35 tokens. Loads no external files.
