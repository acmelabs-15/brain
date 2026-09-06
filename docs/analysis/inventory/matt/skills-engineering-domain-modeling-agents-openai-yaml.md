---
package: matt
path: skills/engineering/domain-modeling/agents/openai.yaml
type: skill
bytes: 101
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/agents/openai.yaml, sha256: f6bf2aa996c6e6f53fdd0708e18a0d16a56aed8322cca59fedbe3c0d2c75f06b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/domain-modeling/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Domain Modeling\"" — skills/engineering/domain-modeling/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `domain-modeling` skill. Establishes the human-readable display title and concise descriptive summary shown in agent skill listings.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill domain-modeling — skills/engineering/domain-modeling/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/domain-modeling/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/domain-modeling/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/domain-modeling/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness metadata providing Codex parity with Claude Code's skill frontmatter without requiring duplicate skill trees.

## Context cost
101 bytes, 4 lines, approximately 25 tokens.
