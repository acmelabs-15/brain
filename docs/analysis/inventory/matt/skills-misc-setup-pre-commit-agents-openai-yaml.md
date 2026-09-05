---
package: matt
path: skills/misc/setup-pre-commit/agents/openai.yaml
type: skill
bytes: 99
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/setup-pre-commit/agents/openai.yaml, sha256: acf41db398c5c43afe504008bb7d615a97b6498b0f1f6c5b2395254c0bfb57d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/setup-pre-commit/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Setup Pre-Commit\"" — skills/misc/setup-pre-commit/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI Codex interface metadata for the `setup-pre-commit` skill, declaring display name and concise descriptive summary for agent tool integration.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill setup-pre-commit — skills/misc/setup-pre-commit/SKILL.md:2

## Concepts named — required, verbatim
- `interface` — skills/misc/setup-pre-commit/agents/openai.yaml:1 — defined here
- `display_name` — skills/misc/setup-pre-commit/agents/openai.yaml:2 — defined here
- `Setup Pre-Commit` — skills/misc/setup-pre-commit/agents/openai.yaml:2 — defined here
- `short_description` — skills/misc/setup-pre-commit/agents/openai.yaml:3 — defined here
- `Add pre-commit quality checks` — skills/misc/setup-pre-commit/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal tool interface metadata for Codex environments.

## Context cost
99 bytes, 4 lines, approximately 25 tokens.
