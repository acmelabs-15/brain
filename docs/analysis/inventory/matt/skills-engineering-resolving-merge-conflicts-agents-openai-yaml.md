---
package: matt
path: skills/engineering/resolving-merge-conflicts/agents/openai.yaml
type: skill
bytes: 113
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/resolving-merge-conflicts/agents/openai.yaml, sha256: a1f4f96838f2ed6282eb28abbbf99029cb8fadce552baf53da90a025b8bffddf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/agents/openai.yaml

## Purpose — required, verbatim
> "Resolve merge and rebase conflicts" — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface configuration for the `resolving-merge-conflicts` skill. Defines the human-readable display name and short summary used when presenting this skill in OpenAI-compatible agent runtimes and tooling environments.

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
- `Resolving Merge Conflicts` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:2 — defined here
- `merge and rebase conflicts` — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:3 — used here

## Structure
- interface — skills/engineering/resolving-merge-conflicts/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Interface metadata providing platform descriptor mapping for OpenAI assistant tooling integration.

## Context cost
113 bytes, 4 lines, ~25 tokens. Loads no external files.
