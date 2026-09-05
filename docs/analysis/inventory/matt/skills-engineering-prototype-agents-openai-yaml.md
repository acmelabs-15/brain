---
package: matt
path: skills/engineering/prototype/agents/openai.yaml
type: skill
bytes: 100
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/prototype/agents/openai.yaml, sha256: 5af65e43ab41a350436697b81e27b7f848d36782043b73c322bb2c9fa9cc55dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/prototype/agents/openai.yaml

## Purpose — required, verbatim
> "Prototype to answer a design question" — skills/engineering/prototype/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
OpenAI agent interface declaration for the `prototype` skill. Defines display name ("Prototype") and short description summarizing its role in creating throwaway prototypes to answer design questions. Unlike user-invoked orchestrators in the engineering suite, this file contains no `policy.allow_implicit_invocation: false` restriction, allowing OpenAI/Codex agents to reach for it autonomously as a model-invoked capability.

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
- `Prototype` — skills/engineering/prototype/agents/openai.yaml:2 — defined here

## Structure
- interface — skills/engineering/prototype/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal 4-line configuration that intentionally omits policy restrictions, enabling model-initiated prototyping when agents encounter ambiguous state models or UI requirements.

## Context cost
100 bytes, 4 lines, ~25 tokens. Loads no external files.
