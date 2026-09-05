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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/domain-modeling/agents/openai.yaml

## Purpose — required, verbatim
> "Build and sharpen a domain model" — skills/engineering/domain-modeling/agents/openai.yaml:3

## Design intent — required
Provides Codex harness UI metadata for the `domain-modeling` skill, declaring its display name ("Domain Modeling") and short description ("Build and sharpen a domain model") for the skill picker. Because it omits `policy.allow_implicit_invocation: false`, it configures the skill as model-invoked in Codex, allowing autonomous activation by agents when resolving ubiquitous domain language or architectural ADR questions.

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
- `interface` — skills/engineering/domain-modeling/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/domain-modeling/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/domain-modeling/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/domain-modeling/agents/openai.yaml:1
- `display_name:` — skills/engineering/domain-modeling/agents/openai.yaml:2
- `short_description:` — skills/engineering/domain-modeling/agents/openai.yaml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configured as model-invoked in Codex by default, matching Claude Code configuration.

## Context cost
101 bytes (~25 tokens). Static metadata file for Codex UI.
