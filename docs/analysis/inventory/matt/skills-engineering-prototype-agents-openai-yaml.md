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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/prototype/agents/openai.yaml

## Purpose — required, verbatim
> "Prototype to answer a design question" — skills/engineering/prototype/agents/openai.yaml:3

## Design intent — required
Defines Codex harness display metadata for the `prototype` skill, declaring its display name ("Prototype") and short description ("Prototype to answer a design question"). By omitting the `policy.allow_implicit_invocation: false` restriction, it enables model-invoked execution in Codex, allowing autonomous agent activation when encountering unresolved design questions.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/prototype/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/prototype/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/prototype/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/prototype/agents/openai.yaml:1
- `display_name:` — skills/engineering/prototype/agents/openai.yaml:2
- `short_description:` — skills/engineering/prototype/agents/openai.yaml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/engineering/prototype/agents/openai.yaml:1: Not directly referenced by other repository files.

## Observations
Omits the `policy` block entirely, confirming model-invoked status in Codex, matching Claude Code's omission of `disable-model-invocation: true` in `SKILL.md`.

## Context cost
100 bytes (~25 tokens). Static metadata file for Codex UI.
