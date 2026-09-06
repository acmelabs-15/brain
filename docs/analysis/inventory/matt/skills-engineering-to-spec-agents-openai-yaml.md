---
package: matt
path: skills/engineering/to-spec/agents/openai.yaml
type: skill
bytes: 135
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-spec/agents/openai.yaml, sha256: 1c5b4d1e3d8e52287ef19cc2742fdbbfae1914ac75d33af3e4c8174f08cc55bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/to-spec/agents/openai.yaml

## Purpose — required, verbatim
> "Turn a conversation into a spec" — skills/engineering/to-spec/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI / Codex agent interface configuration and policy specification for the `to-spec` skill. Defines the human-readable display name ("To Spec") and brief description ("Turn a conversation into a spec") for agent tool discovery catalogs. Configures `policy.allow_implicit_invocation: false`, enforcing that the skill cannot be invoked implicitly by the language model, preserving exact behavioral alignment with Claude Code's `disable-model-invocation: true`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill to-spec — skills/engineering/to-spec/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/engineering/to-spec/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/to-spec/agents/openai.yaml:2 — defined here
- `To Spec` — skills/engineering/to-spec/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/to-spec/agents/openai.yaml:3 — defined here
- `spec` — skills/engineering/to-spec/agents/openai.yaml:3 — used here
- `policy` — skills/engineering/to-spec/agents/openai.yaml:4 — defined here
- `allow_implicit_invocation` — skills/engineering/to-spec/agents/openai.yaml:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides OpenAI/Codex dual-harness registration metadata for the `to-spec` skill. Enforces `policy.allow_implicit_invocation: false`, ensuring the skill is only executed upon explicit user request.

## Context cost
135 bytes, 6 lines, approximately 30 tokens.
