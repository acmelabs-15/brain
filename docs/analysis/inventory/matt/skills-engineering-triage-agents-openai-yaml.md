---
package: matt
path: skills/engineering/triage/agents/openai.yaml
type: skill
bytes: 135
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/agents/openai.yaml, sha256: 2e683717720cf456d165d0bb1a68bb600d0b6a8ccb61841c172e50d26f95351c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/triage/agents/openai.yaml

## Purpose — required, verbatim
> "Move issues through triage roles" — skills/engineering/triage/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration and policy definition for the `triage` skill. Defines the human-readable display name ("Triage") and concise functional summary ("Move issues through triage roles") for agent catalog listings. Configures `policy.allow_implicit_invocation: false`, enforcing that the skill cannot be triggered autonomously or implicitly by the model without explicit user instruction, mirroring Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill triage — skills/engineering/triage/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/engineering/triage/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/triage/agents/openai.yaml:2 — defined here
- `Triage` — skills/engineering/triage/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/triage/agents/openai.yaml:3 — defined here
- `triage roles` — skills/engineering/triage/agents/openai.yaml:3 — used here
- `policy` — skills/engineering/triage/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/triage/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex dual-harness registration metadata for the `triage` skill. Enforces `policy.allow_implicit_invocation: false` to ensure triage is strictly user-invoked and cannot be called implicitly by OpenAI models.

## Context cost
135 bytes, 6 lines, approximately 30 tokens.
