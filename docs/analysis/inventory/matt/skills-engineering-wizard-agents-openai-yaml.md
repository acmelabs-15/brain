---
package: matt
path: skills/engineering/wizard/agents/openai.yaml
type: skill
bytes: 96
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/wizard/agents/openai.yaml, sha256: 98f44d682d58e262f160dc59a8befc365e0aa65820dd0261864af26aa8e59d83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/wizard/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: \"Generate an interactive setup wizard\"" — skills/engineering/wizard/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `wizard` script generation skill. Provides the display name ("Wizard") and short description ("Generate an interactive setup wizard"). Notably omits `policy.allow_implicit_invocation: false`, enabling autonomous model-driven invocation whenever an agent encounters tasks only a human can perform.

## Phase — required
matt:engineering

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/engineering/wizard/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/wizard/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/wizard/agents/openai.yaml:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Unlike user-invoked skills in the repository, this file has no `policy` block, matching its model-invoked status promoted in pull request #680.

## Context cost
96 bytes (~24 tokens). Agent harness metadata; negligible context footprint.
