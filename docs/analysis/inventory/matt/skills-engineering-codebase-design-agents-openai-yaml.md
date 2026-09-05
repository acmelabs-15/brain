---
package: matt
path: skills/engineering/codebase-design/agents/openai.yaml
type: skill
bytes: 102
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/codebase-design/agents/openai.yaml, sha256: edebc9e4fcfe102114012575eaa9600b9b5fd08c311664f389c36e7bc717740f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/codebase-design/agents/openai.yaml

## Purpose — required, verbatim
> "Vocabulary for deep-module design" — skills/engineering/codebase-design/agents/openai.yaml:3

## Design intent — required
Provides Codex harness UI metadata for the `codebase-design` skill, declaring its display name ("Codebase Design") and short description ("Vocabulary for deep-module design") for the skill picker. Because it omits the `policy.allow_implicit_invocation: false` setting, it configures the skill as model-invoked in Codex, enabling autonomous activation by the agent when encountering module design tasks.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/codebase-design/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/codebase-design/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/codebase-design/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/codebase-design/agents/openai.yaml:1
- `display_name:` — skills/engineering/codebase-design/agents/openai.yaml:2
- `short_description:` — skills/engineering/codebase-design/agents/openai.yaml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Omits the `policy` block, confirming model-invoked status in Codex in alignment with Claude Code's omission of `disable-model-invocation: true` in `SKILL.md`.

## Context cost
102 bytes (~26 tokens). Static metadata file for Codex UI.
