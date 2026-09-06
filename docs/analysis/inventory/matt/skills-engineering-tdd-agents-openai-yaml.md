---
package: matt
path: skills/engineering/tdd/agents/openai.yaml
type: skill
bytes: 87
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/tdd/agents/openai.yaml, sha256: ea6f01cf1b8c06a4b0f5b649d74b1b8ce8685e72af1b38d70d877693e092af0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/tdd/agents/openai.yaml

## Purpose — required, verbatim
> "Test-driven red-green-refactor" — skills/engineering/tdd/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `tdd` skill. Declares the user-facing display name ("TDD") and concise functional summary ("Test-driven red-green-refactor") for OpenAI agent catalog interfaces. Unlike user-invoked engineering skills (which specify `policy.allow_implicit_invocation: false`), this configuration permits implicit invocation by the model because `tdd` is a model-invoked skill designed to be reachable automatically whenever test-first implementation or red-green loops are needed.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill tdd — skills/engineering/tdd/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/engineering/tdd/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/tdd/agents/openai.yaml:2 — defined here
- `TDD` — skills/engineering/tdd/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/tdd/agents/openai.yaml:3 — defined here
- `Test-driven red-green-refactor` — skills/engineering/tdd/agents/openai.yaml:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Companion interface definition for OpenAI/Codex harnesses. In contrast to `to-spec`, `to-tickets`, and `triage`, this agent manifest omits `policy.allow_implicit_invocation: false` so that the model can invoke TDD autonomously as part of its development toolkit.

## Context cost
87 bytes, 4 lines, approximately 20 tokens.
