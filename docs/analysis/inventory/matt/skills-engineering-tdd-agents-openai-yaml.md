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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/tdd/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Test-driven red-green-refactor\"" — skills/engineering/tdd/agents/openai.yaml:3

## Design intent — required
Declares UI configuration metadata for the `tdd` skill within OpenAI Codex and ChatGPT environments. Supplies human-readable interface properties (`display_name: "TDD"` and `short_description: "Test-driven red-green-refactor"`). As a model-invoked engineering skill, it omits implicit invocation restrictions, allowing agents to autonomously invoke the test-driven development loop when appropriate.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19
- doc .agents/invocation.md — .agents/invocation.md:10

## Concepts named — required, verbatim
- `display_name` — skills/engineering/tdd/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/tdd/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/tdd/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Omits `policy.allow_implicit_invocation: false`, reflecting that `tdd` is a model-invoked reference skill reachable autonomously by agents.
- Minimal 4-line YAML configuration.

## Context cost
87 bytes (~22 tokens). Harness UI configuration metadata; minimal context footprint.
