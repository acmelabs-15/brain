---
package: matt
path: skills/engineering/diagnosing-bugs/agents/openai.yaml
type: skill
bytes: 103
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/agents/openai.yaml, sha256: 3e430dbe4334a87597488c060cb3dc3786bb00c9182877d6f5ec41f62490e90b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/agents/openai.yaml

## Purpose — required, verbatim
> "Diagnose hard bugs and regressions" — skills/engineering/diagnosing-bugs/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative interface metadata configuration for OpenAI assistant and agent runtimes. Defines the display name ("Diagnosing Bugs") and short description used when exposing the bug diagnosis skill within OpenAI-compatible tooling and platforms.

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
- `Diagnosing Bugs` — skills/engineering/diagnosing-bugs/agents/openai.yaml:2 — defined here
- `regressions` — skills/engineering/diagnosing-bugs/agents/openai.yaml:3 — used here

## Structure
- interface — skills/engineering/diagnosing-bugs/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Static interface configuration mapping the diagnosing-bugs capability for OpenAI assistant platforms.

## Context cost
103 bytes, 4 lines, ~25 tokens. Loads no external files.
