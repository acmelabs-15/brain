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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/tdd/agents/openai.yaml

## Purpose — required, verbatim
> "Test-driven red-green-refactor" — skills/engineering/tdd/agents/openai.yaml:3
(short description; no explicit purpose statement)

## Design intent — required
Declarative OpenAI agent interface descriptor for the `tdd` skill. Provides the human-readable display name ("TDD") and short functional summary for OpenAI agent environments. Unlike `to-spec`, `to-tickets`, and `triage`, it omits explicit invocation policy settings (`allow_implicit_invocation`).

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
- `TDD` — skills/engineering/tdd/agents/openai.yaml:2 — defined here
- `red-green-refactor` — skills/engineering/tdd/agents/openai.yaml:3 — used here

## Structure
- interface
- display_name
- short_description

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/engineering/tdd/agents/openai.yaml:3 · Short description refers to "red-green-refactor" even though refactoring was removed from the TDD loop in SKILL.md:38 in favor of code-review.

## Observations
Exposes interface metadata for OpenAI assistant and agent toolkits. Omits policy configuration present in peer skill agent descriptors.

## Context cost
87 bytes, 4 lines, ~25 tokens. Loads no external files.
