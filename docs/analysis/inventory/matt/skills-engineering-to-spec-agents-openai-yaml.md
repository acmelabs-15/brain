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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/to-spec/agents/openai.yaml

## Purpose — required, verbatim
> "Turn a conversation into a spec" — skills/engineering/to-spec/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface descriptor for the `to-spec` skill. Provides human-readable display metadata ("To Spec") and short functional summary for OpenAI agent environments. Configures `policy.allow_implicit_invocation: false` to ensure the skill is never triggered implicitly or autonomously by the model, aligning with `disable-model-invocation: true` in `to-spec/SKILL.md`.

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
- `To Spec` — skills/engineering/to-spec/agents/openai.yaml:2 — defined here
- `spec` — skills/engineering/to-spec/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/engineering/to-spec/agents/openai.yaml:5 — used here

## Structure
- interface
- policy

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness policy metadata enforcing explicit human invocation in OpenAI-compatible agent environments.

## Context cost
135 bytes, 6 lines, ~35 tokens. Loads no external files.
