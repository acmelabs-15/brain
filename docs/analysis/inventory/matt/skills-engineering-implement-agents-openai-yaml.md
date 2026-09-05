---
package: matt
path: skills/engineering/implement/agents/openai.yaml
type: skill
bytes: 139
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/implement/agents/openai.yaml, sha256: 8970a8596ade0c28ab427f41a4ea242d6bdf6186c59ebf55e1238dbecaab79dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/implement/agents/openai.yaml

## Purpose — required, verbatim
> "Build work from a spec or tickets" — skills/engineering/implement/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface descriptor for the `implement` skill. Provides the human-readable display name ("Implement") and concise functional summary for OpenAI agent environments. Sets `policy.allow_implicit_invocation: false` to guarantee that the skill is not invoked autonomously or implicitly by the model, matching the user-invoked architectural pattern configured via `disable-model-invocation: true` in Claude Code.

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
- `Implement` — skills/engineering/implement/agents/openai.yaml:2 — defined here
- `spec` — skills/engineering/implement/agents/openai.yaml:3 — used here
- `tickets` — skills/engineering/implement/agents/openai.yaml:3 — used here
- `allow_implicit_invocation` — skills/engineering/implement/agents/openai.yaml:5 — used here

## Structure
- interface — skills/engineering/implement/agents/openai.yaml:1
- policy — skills/engineering/implement/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness policy metadata ensuring explicit user triggering within OpenAI assistant and agent toolkits.

## Context cost
139 bytes, 6 lines, ~35 tokens. Loads no external files.
