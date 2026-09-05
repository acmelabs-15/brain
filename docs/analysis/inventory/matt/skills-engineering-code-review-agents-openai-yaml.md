---
package: matt
path: skills/engineering/code-review/agents/openai.yaml
type: skill
bytes: 100
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/code-review/agents/openai.yaml, sha256: 8229ca854e11dc8e6aef2131ee03f31fb1561cf905fab9ccc325180cf3331352}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/code-review/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: "Review a diff on standards and spec"" — skills/engineering/code-review/agents/openai.yaml:3

## Design intent — required
Declares interface configuration metadata for the `code-review` skill within OpenAI Codex and ChatGPT environments. Supplies human-readable interface properties (`display_name: "Code Review"` and `short_description: "Review a diff on standards and spec"`). As a model-invoked engineering skill, it omits implicit invocation restrictions, allowing agents to reach for diff review capabilities autonomously.

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

## Concepts named — required, verbatim
- `display_name` — skills/engineering/code-review/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/code-review/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/code-review/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Unlike user-invoked skills (`ask-matt`), omits `policy.allow_implicit_invocation: false`, enabling Codex and ChatGPT to invoke code reviews autonomously.
- Minimal 4-line YAML configuration.

## Context cost
100 bytes (~25 tokens). Harness UI configuration metadata; minimal context footprint.
